import { NextRequest, NextResponse } from "next/server";
import { getCourseBySlug } from "@/data/courses";

// Type definitions for authenticated lecture response
export interface SecuredLecture {
  order: number;
  title: string;
  duration: string;
  description?: string;
  isFreeDemo?: boolean;
  access: "unlocked" | "locked";
  lockReason?: "signup_required" | "enrollment_required";
  youtubeId: string | null; // Nullified on server if locked
}

interface DecodedUser {
  id: string;
  email: string;
  role: "student" | "admin";
  enrolledCourses?: string[];
}

// Helper to safely parse user token or header
function getUserFromRequest(request: NextRequest): DecodedUser | null {
  try {
    const authHeader = request.headers.get("authorization");
    const cookieSession = request.cookies.get("elite_user_session")?.value;

    let rawData = "";
    if (authHeader && authHeader.startsWith("Bearer ")) {
      rawData = authHeader.substring(7);
    } else if (cookieSession) {
      rawData = cookieSession;
    }

    if (!rawData) return null;

    // Decode base64 or JSON session
    const decoded = Buffer.from(rawData, "base64").toString("utf-8");
    const parsed = JSON.parse(decoded);
    if (parsed && parsed.email) {
      return parsed as DecodedUser;
    }
  } catch {
    // If not valid base64/JSON, return null safely
  }
  return null;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return NextResponse.json(
      { error: "Course not found" },
      { status: 404 }
    );
  }

  const user = getUserFromRequest(request);
  const isEnrolled =
    user?.role === "admin" ||
    (user?.enrolledCourses && user.enrolledCourses.includes(course.id));

  const securedLectures: SecuredLecture[] = course.lectures.map((lecture) => {
    // Case 1: Visitor is not logged in
    if (!user) {
      return {
        order: lecture.order,
        title: lecture.title,
        duration: lecture.duration,
        description: lecture.description,
        isFreeDemo: lecture.isFreeDemo,
        access: "locked",
        lockReason: "signup_required",
        youtubeId: null, // Strictly redacted on server
      };
    }

    // Case 2: User is enrolled or admin
    if (isEnrolled) {
      return {
        order: lecture.order,
        title: lecture.title,
        duration: lecture.duration,
        description: lecture.description,
        isFreeDemo: lecture.isFreeDemo,
        access: "unlocked",
        youtubeId: lecture.youtubeId, // Authorized
      };
    }

    // Case 3: User is logged in with free account
    if (lecture.order === 1 || lecture.isFreeDemo) {
      return {
        order: lecture.order,
        title: lecture.title,
        duration: lecture.duration,
        description: lecture.description,
        isFreeDemo: true,
        access: "unlocked",
        youtubeId: lecture.youtubeId, // Free demo unlocked
      };
    }

    // Subsequent lectures locked for free accounts
    return {
      order: lecture.order,
      title: lecture.title,
      duration: lecture.duration,
      description: lecture.description,
      isFreeDemo: false,
      access: "locked",
      lockReason: "enrollment_required",
      youtubeId: null, // Redacted on server
    };
  });

  return NextResponse.json({
    courseId: course.id,
    title: course.title,
    slug: course.slug,
    userState: user
      ? {
          isLoggedIn: true,
          email: user.email,
          role: user.role,
          isEnrolled: !!isEnrolled,
        }
      : {
          isLoggedIn: false,
          isEnrolled: false,
        },
    lectures: securedLectures,
  });
}


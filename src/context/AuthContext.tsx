"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  courseInterest?: string;
  city?: string;
  role: "student" | "admin";
  enrolledCourses: string[]; // Course IDs e.g. ["ca-foundation", "maths-made-easy"]
  createdAt: string;
}

export interface WatchProgress {
  [courseId: string]: {
    [lectureOrder: number]: {
      completed: boolean;
      progressSeconds: number;
      lastWatched: string;
    };
  };
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  loginWithEmail: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  requestPhoneOtp: (phone: string) => Promise<{ success: boolean; otpCode?: string }>;
  verifyPhoneOtp: (phone: string, otp: string, registrationData?: Partial<UserProfile>) => Promise<{ success: boolean; error?: string }>;
  signup: (data: {
    name: string;
    email: string;
    phone: string;
    courseInterest: string;
    city: string;
    password?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  toggleEnrollment: (courseId: string, studentId?: string) => void;
  updateWatchProgress: (courseId: string, lectureOrder: number, seconds: number, completed?: boolean) => void;
  getCourseProgress: (courseId: string, totalLectures: number) => number;
  watchProgress: WatchProgress;
  allStudents: UserProfile[];
}

const STORAGE_KEY_USER = "elite_user_profile";
const STORAGE_KEY_STUDENTS = "elite_all_students";
const STORAGE_KEY_PROGRESS = "elite_watch_progress";
const COOKIE_NAME = "elite_user_session";

// Initial seed mock students for demonstration
const initialStudents: UserProfile[] = [
  {
    id: "stu-1",
    name: "Aakash Verma",
    email: "aakash@example.com",
    phone: "+91 98201 23456",
    courseInterest: "ca-foundation",
    city: "Bhayandar East",
    role: "student",
    enrolledCourses: ["ca-foundation"],
    createdAt: "2026-09-12T10:00:00.000Z",
  },
  {
    id: "stu-2",
    name: "Sneha Parekh",
    email: "sneha.parekh@example.com",
    phone: "+91 98199 87654",
    courseInterest: "cma-intermediate",
    city: "Mira Road",
    role: "student",
    enrolledCourses: ["cma-intermediate", "maths-made-easy"],
    createdAt: "2026-10-01T14:30:00.000Z",
  },
  {
    id: "admin-1",
    name: "Faculty Admin (Prof. Manoj Kumar)",
    email: "admin@eliteeducation.co.in",
    phone: "+91 79000 96857",
    role: "admin",
    enrolledCourses: ["ca-foundation", "ca-intermediate", "ca-final", "maths-made-easy"],
    createdAt: "2026-01-01T00:00:00.000Z",
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to set cookie for server route verification
function setSessionCookie(user: UserProfile | null) {
  if (typeof document === "undefined") return;
  if (!user) {
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
  } else {
    const sessionData = {
      id: user.id,
      email: user.email,
      role: user.role,
      enrolledCourses: user.enrolledCourses,
    };
    const encoded = btoa(JSON.stringify(sessionData));
    document.cookie = `${COOKIE_NAME}=${encoded}; path=/; max-age=2592000; SameSite=Lax`;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [allStudents, setAllStudents] = useState<UserProfile[]>(initialStudents);
  const [watchProgress, setWatchProgress] = useState<WatchProgress>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load stored state on mount
  useEffect(() => {
    try {
      const storedStudents = localStorage.getItem(STORAGE_KEY_STUDENTS);
      if (storedStudents) {
        setAllStudents(JSON.parse(storedStudents));
      } else {
        localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(initialStudents));
      }

      const storedUser = localStorage.getItem(STORAGE_KEY_USER);
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        setSessionCookie(parsed);
      }

      const storedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (storedProgress) {
        setWatchProgress(JSON.parse(storedProgress));
      }
    } catch {
      // LocalStorage error fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save session when user changes
  const saveActiveUser = (newUser: UserProfile | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(newUser));
      setSessionCookie(newUser);
    } else {
      localStorage.removeItem(STORAGE_KEY_USER);
      setSessionCookie(null);
    }
  };

  const loginWithEmail = async (email: string, password?: string) => {
    const cleanEmail = email.toLowerCase().trim();

    // Check if admin login
    if (cleanEmail === "admin@eliteeducation.co.in" || cleanEmail.includes("admin")) {
      const adminUser: UserProfile = {
        id: "admin-1",
        name: "Prof. Er. Manoj Kumar (Admin)",
        email: "admin@eliteeducation.co.in",
        phone: "+91 79000 96857",
        role: "admin",
        enrolledCourses: ["ca-foundation", "ca-intermediate", "ca-final", "maths-made-easy"],
        createdAt: "2026-01-01T00:00:00.000Z",
      };
      saveActiveUser(adminUser);
      return { success: true };
    }

    // Existing student or mock create
    const existing = allStudents.find((s) => s.email.toLowerCase() === cleanEmail);
    if (existing) {
      saveActiveUser(existing);
      return { success: true };
    }

    // Default regular demo student
    const newStudent: UserProfile = {
      id: `stu-${Date.now()}`,
      name: cleanEmail.split("@")[0].replace(".", " "),
      email: cleanEmail,
      phone: "+91 98000 00000",
      role: "student",
      enrolledCourses: [], // Unenrolled demo account
      createdAt: new Date().toISOString(),
    };

    const updated = [newStudent, ...allStudents];
    setAllStudents(updated);
    localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(updated));
    saveActiveUser(newStudent);
    return { success: true };
  };

  const loginWithGoogle = async () => {
    const mockGoogleUser: UserProfile = {
      id: `google-${Date.now()}`,
      name: "Google Student Account",
      email: "aspirant@gmail.com",
      phone: "+91 98765 43210",
      city: "Mumbai",
      role: "student",
      enrolledCourses: [],
      createdAt: new Date().toISOString(),
    };
    saveActiveUser(mockGoogleUser);
    return { success: true };
  };

  const requestPhoneOtp = async (phone: string) => {
    // Generate 6-digit mock OTP (123456 as standard testing code)
    return { success: true, otpCode: "123456" };
  };

  const verifyPhoneOtp = async (
    phone: string,
    otp: string,
    registrationData?: Partial<UserProfile>
  ) => {
    if (otp !== "123456" && otp.length !== 6) {
      return { success: false, error: "Invalid verification code. Use demo code 123456." };
    }

    const cleanPhone = phone.trim();
    const existing = allStudents.find((s) => s.phone === cleanPhone);

    if (existing) {
      saveActiveUser(existing);
      return { success: true };
    }

    const newStudent: UserProfile = {
      id: `stu-${Date.now()}`,
      name: registrationData?.name || `Student ${cleanPhone.slice(-4)}`,
      phone: cleanPhone,
      email: registrationData?.email || `student.${cleanPhone.replace(/\D/g, "")}@eliteedu.in`,
      courseInterest: registrationData?.courseInterest || "ca-foundation",
      city: registrationData?.city || "Mira Bhayandar",
      role: "student",
      enrolledCourses: [],
      createdAt: new Date().toISOString(),
    };

    const updated = [newStudent, ...allStudents];
    setAllStudents(updated);
    localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(updated));
    saveActiveUser(newStudent);
    return { success: true };
  };

  const signup = async (data: {
    name: string;
    email: string;
    phone: string;
    courseInterest: string;
    city: string;
  }) => {
    const newStudent: UserProfile = {
      id: `stu-${Date.now()}`,
      name: data.name.trim(),
      email: data.email.toLowerCase().trim(),
      phone: data.phone.trim(),
      courseInterest: data.courseInterest,
      city: data.city.trim(),
      role: "student",
      enrolledCourses: [], // New signups start with free demo access
      createdAt: new Date().toISOString(),
    };

    const updated = [newStudent, ...allStudents];
    setAllStudents(updated);
    localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(updated));
    saveActiveUser(newStudent);
    return { success: true };
  };

  const logout = () => {
    saveActiveUser(null);
  };

  // Toggle enrollment for a student (Admin capability & self-demo)
  const toggleEnrollment = (courseId: string, studentId?: string) => {
    const targetId = studentId || user?.id;
    if (!targetId) return;

    setAllStudents((prev) => {
      const updated = prev.map((s) => {
        if (s.id === targetId) {
          const isEnrolled = s.enrolledCourses.includes(courseId);
          const newEnrolled = isEnrolled
            ? s.enrolledCourses.filter((id) => id !== courseId)
            : [...s.enrolledCourses, courseId];
          return { ...s, enrolledCourses: newEnrolled };
        }
        return s;
      });
      localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(updated));
      return updated;
    });

    if (user && user.id === targetId) {
      const isEnrolled = user.enrolledCourses.includes(courseId);
      const newEnrolled = isEnrolled
        ? user.enrolledCourses.filter((id) => id !== courseId)
        : [...user.enrolledCourses, courseId];
      saveActiveUser({ ...user, enrolledCourses: newEnrolled });
    }
  };

  const updateWatchProgress = (
    courseId: string,
    lectureOrder: number,
    seconds: number,
    completed = false
  ) => {
    setWatchProgress((prev) => {
      const courseProg = prev[courseId] || {};
      const updated = {
        ...prev,
        [courseId]: {
          ...courseProg,
          [lectureOrder]: {
            completed: completed || (courseProg[lectureOrder]?.completed ?? false),
            progressSeconds: seconds,
            lastWatched: new Date().toISOString(),
          },
        },
      };
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(updated));
      return updated;
    });
  };

  const getCourseProgress = (courseId: string, totalLectures: number): number => {
    if (!watchProgress[courseId] || totalLectures === 0) return 0;
    const completedLectures = Object.values(watchProgress[courseId]).filter(
      (l) => l.completed
    ).length;
    return Math.min(100, Math.round((completedLectures / totalLectures) * 100));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        loginWithEmail,
        loginWithGoogle,
        requestPhoneOtp,
        verifyPhoneOtp,
        signup,
        logout,
        toggleEnrollment,
        updateWatchProgress,
        getCourseProgress,
        watchProgress,
        allStudents,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}


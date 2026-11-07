import { NextRequest, NextResponse } from "next/server";

export interface EnquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  courseInterest: string;
  city?: string;
  message?: string;
  createdAt: string;
  status: "new" | "contacted" | "enrolled";
}

// In-memory server store for demo / persistent across hot-reloads
// (Can be backed by Supabase via SUPABASE_URL & SUPABASE_KEY in .env)
const globalEnquiriesStore: EnquiryRecord[] = [
  {
    id: "enq-101",
    name: "Rohit Sharma",
    phone: "+91 98200 11223",
    email: "rohit.sharma@example.com",
    courseInterest: "ca-foundation",
    city: "Bhayandar East",
    message: "Interested in morning batch starting this month.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "contacted",
  },
  {
    id: "enq-102",
    name: "Pooja Mehta",
    phone: "+91 97690 44556",
    email: "pooja.mehta@example.com",
    courseInterest: "cma-intermediate",
    city: "Mira Road",
    message: "Need details on Costing and FM batches with Manoj Sir.",
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    status: "new",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    total: globalEnquiriesStore.length,
    enquiries: globalEnquiriesStore,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, courseInterest, city, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const newEnquiry: EnquiryRecord = {
      id: `enq-${Date.now()}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : undefined,
      courseInterest: courseInterest ? String(courseInterest) : "General CA / CMA / CS",
      city: city ? String(city).trim() : "Mira Bhayandar",
      message: message ? String(message).trim() : "Interested in Elite Education courses",
      createdAt: new Date().toISOString(),
      status: "new",
    };

    globalEnquiriesStore.unshift(newEnquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. Our faculty desk will connect with you.",
        enquiry: newEnquiry,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry." },
      { status: 500 }
    );
  }
}


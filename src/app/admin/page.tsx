"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Users,
  BookOpen,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  XCircle,
  Edit3,
  Plus,
  Save,
  Search,
  ExternalLink,
  ArrowLeft,
  Key,
} from "lucide-react";
import { useAuth, UserProfile } from "@/context/AuthContext";
import { getAllCourses, Course, Lecture } from "@/data/courses";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export interface EnquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  courseInterest: string;
  city?: string;
  message?: string;
  createdAt: string;
  status?: "new" | "contacted" | "enrolled";
}

export default function AdminPage() {
  const { user, allStudents, toggleEnrollment } = useAuth();
  const [courses, setCourses] = useState<Course[]>(getAllCourses());
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [activeTab, setActiveTab] = useState<"students" | "enquiries" | "courses">("students");
  const [studentSearch, setStudentSearch] = useState("");
  const [selectedCourseForEdit, setSelectedCourseForEdit] = useState<Course | null>(null);
  const [editingLectures, setEditingLectures] = useState<Lecture[]>([]);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  // Load enquiries
  useEffect(() => {
    async function loadEnquiries() {
      try {
        const res = await fetch("/api/enquiries");
        if (res.ok) {
          const data = await res.json();
          if (data.enquiries && data.enquiries.length > 0) {
            setEnquiries(data.enquiries);
            return;
          }
        }
      } catch {
        // Fallback for static host
      }

      // Check localStorage for offline/static enquiries
      try {
        const stored = localStorage.getItem("elite_enquiries");
        if (stored) {
          setEnquiries(JSON.parse(stored));
        }
      } catch {
        // Safe fallback
      }
    }
    loadEnquiries();
  }, []);

  const filteredStudents = allStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.phone.includes(studentSearch)
  );

  const startEditCourse = (course: Course) => {
    setSelectedCourseForEdit(course);
    setEditingLectures([...course.lectures]);
    setSaveSuccessMsg("");
  };

  const updateLectureId = (idx: number, newYoutubeId: string) => {
    const updated = [...editingLectures];
    updated[idx] = { ...updated[idx], youtubeId: newYoutubeId };
    setEditingLectures(updated);
  };

  const handleSaveCourseLectures = () => {
    if (!selectedCourseForEdit) return;
    setCourses((prev) =>
      prev.map((c) =>
        c.id === selectedCourseForEdit.id ? { ...c, lectures: editingLectures } : c
      )
    );
    setSaveSuccessMsg("Lectures and YouTube IDs updated successfully!");
    setTimeout(() => setSaveSuccessMsg(""), 3500);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-8 p-8 rounded-3xl bg-white border border-[#C8A15A]/35 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/30 text-[#9F7E3B] text-xs font-sans font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-[#C8A15A]" />
                <span>Executive Management Desk</span>
              </div>
              <h1 className="font-serif text-3xl font-bold text-[#0F1B3D]">
                Elite Education Admin Control
              </h1>
              <p className="text-xs md:text-sm text-[#0F1B3D]/70 font-sans mt-1">
                Manage YouTube video IDs, review student sign-ups, and toggle course enrollment permissions.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="px-4 py-2 rounded-full bg-[#FBF9F4] border border-[#C8A15A]/40 text-xs font-sans font-semibold text-[#0F1B3D] hover:bg-[#C8A15A]/10 transition-colors"
              >
                Switch to Student View
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <div className="flex items-center justify-between text-xs font-sans text-[#0F1B3D]/60 font-semibold">
                <span>Total Registered Students</span>
                <Users className="w-4 h-4 text-[#C8A15A]" />
              </div>
              <div className="font-serif text-3xl font-bold text-[#0F1B3D] mt-2">
                {allStudents.length}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <div className="flex items-center justify-between text-xs font-sans text-[#0F1B3D]/60 font-semibold">
                <span>Admission Enquiries</span>
                <MessageSquare className="w-4 h-4 text-[#C8A15A]" />
              </div>
              <div className="font-serif text-3xl font-bold text-[#0F1B3D] mt-2">
                {enquiries.length}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <div className="flex items-center justify-between text-xs font-sans text-[#0F1B3D]/60 font-semibold">
                <span>Active Curricula</span>
                <BookOpen className="w-4 h-4 text-[#C8A15A]" />
              </div>
              <div className="font-serif text-3xl font-bold text-[#0F1B3D] mt-2">
                {courses.length}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mb-6 border-b border-[#C8A15A]/20 pb-4">
            <button
              onClick={() => setActiveTab("students")}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all ${
                activeTab === "students"
                  ? "bg-[#0F1B3D] text-[#FBF9F4] shadow-sm"
                  : "bg-white text-[#0F1B3D]/70 hover:text-[#0F1B3D] border border-[#C8A15A]/20"
              }`}
            >
              Students & Enrolment ({allStudents.length})
            </button>

            <button
              onClick={() => setActiveTab("enquiries")}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all ${
                activeTab === "enquiries"
                  ? "bg-[#0F1B3D] text-[#FBF9F4] shadow-sm"
                  : "bg-white text-[#0F1B3D]/70 hover:text-[#0F1B3D] border border-[#C8A15A]/20"
              }`}
            >
              Enquiry Leads ({enquiries.length})
            </button>

            <button
              onClick={() => setActiveTab("courses")}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all ${
                activeTab === "courses"
                  ? "bg-[#0F1B3D] text-[#FBF9F4] shadow-sm"
                  : "bg-white text-[#0F1B3D]/70 hover:text-[#0F1B3D] border border-[#C8A15A]/20"
              }`}
            >
              Courses & Video IDs ({courses.length})
            </button>
          </div>

          {/* TAB 1: STUDENTS MANAGEMENT */}
          {activeTab === "students" && (
            <div className="rounded-3xl bg-white border border-[#C8A15A]/35 p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F1B3D]">
                    Student Enrollment Manager
                  </h3>
                  <p className="text-xs text-[#0F1B3D]/70 font-sans mt-0.5">
                    Click any course badge to immediately grant or revoke full access for that student.
                  </p>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F1B3D]/40" />
                  <input
                    type="text"
                    placeholder="Search by name, phone or email..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:outline-none"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-[#C8A15A]/20 text-[#0F1B3D]/60 uppercase tracking-wider font-semibold">
                      <th className="py-3 px-4">Student</th>
                      <th className="py-3 px-4">Phone / City</th>
                      <th className="py-3 px-4">Role</th>
                      <th className="py-3 px-4">Enrolled Courses (Click to Toggle)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C8A15A]/15">
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-[#FBF9F4]/60 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-bold text-[#0F1B3D]">{student.name}</div>
                          <div className="text-[11px] text-[#0F1B3D]/60 font-mono">
                            {student.email}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-mono">{student.phone}</div>
                          <div className="text-[11px] text-[#0F1B3D]/60">{student.city || "Mumbai"}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              student.role === "admin"
                                ? "bg-[#0F1B3D] text-[#C8A15A]"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {student.role}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1.5">
                            {courses.map((course) => {
                              const isEnrolled = student.enrolledCourses.includes(course.id);
                              return (
                                <button
                                  key={course.id}
                                  onClick={() => toggleEnrollment(course.id, student.id)}
                                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium transition-all flex items-center gap-1 ${
                                    isEnrolled
                                      ? "bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold"
                                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200 opacity-60"
                                  }`}
                                  title={isEnrolled ? "Click to Revoke" : "Click to Enrol"}
                                >
                                  <span>{course.id}</span>
                                  {isEnrolled ? (
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  ) : (
                                    <Plus className="w-3 h-3 text-slate-400" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: ENQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="rounded-3xl bg-white border border-[#C8A15A]/35 p-6 shadow-md">
              <h3 className="font-serif text-xl font-bold text-[#0F1B3D] mb-4">
                Recent Admission Inquiries
              </h3>

              {enquiries.length === 0 ? (
                <div className="text-center py-12 text-[#0F1B3D]/60 text-xs">
                  No enquiries recorded yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#C8A15A]/20 text-[#0F1B3D]/60 uppercase tracking-wider font-semibold">
                        <th className="py-3 px-4">Applicant</th>
                        <th className="py-3 px-4">Phone / City</th>
                        <th className="py-3 px-4">Course Track</th>
                        <th className="py-3 px-4">Message / Query</th>
                        <th className="py-3 px-4">Direct WhatsApp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#C8A15A]/15">
                      {enquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-[#FBF9F4]/60">
                          <td className="py-4 px-4">
                            <div className="font-bold text-[#0F1B3D]">{enq.name}</div>
                            {enq.email && (
                              <div className="text-[11px] text-[#0F1B3D]/60">{enq.email}</div>
                            )}
                          </td>
                          <td className="py-4 px-4 font-mono">
                            <div>{enq.phone}</div>
                            <div className="text-[11px] text-[#0F1B3D]/60">{enq.city}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2.5 py-1 rounded-full bg-[#C8A15A]/15 text-[#9F7E3B] font-bold text-[10px]">
                              {enq.courseInterest}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-[#0F1B3D]/80 max-w-xs">
                            {enq.message}
                          </td>
                          <td className="py-4 px-4">
                            <a
                              href={`https://wa.me/${enq.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                                `Hello ${enq.name}, thank you for contacting Elite Education regarding ${enq.courseInterest}. Prof. Manoj Sir's desk is available to assist you.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-full bg-[#25D366] text-white text-[11px] font-bold inline-flex items-center gap-1 shadow-xs"
                            >
                              <span>Reply on WhatsApp</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: COURSE & YOUTUBE ID MANAGER */}
          {activeTab === "courses" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Course Selector (4 cols) */}
              <div className="lg:col-span-4 rounded-3xl bg-white border border-[#C8A15A]/35 p-6 shadow-md flex flex-col gap-3">
                <h3 className="font-serif text-lg font-bold text-[#0F1B3D]">
                  Select Course to Configure
                </h3>
                <p className="text-xs text-[#0F1B3D]/70 font-sans">
                  Paste your YouTube Video IDs into any lecture slot below.
                </p>

                <div className="mt-2 space-y-2">
                  {courses.map((c) => {
                    const isSelected = selectedCourseForEdit?.id === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => startEditCourse(c)}
                        className={`w-full text-left p-3 rounded-2xl border text-xs font-sans transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-[#0F1B3D] text-white border-[#0F1B3D] shadow-sm"
                            : "bg-[#FBF9F4] text-[#0F1B3D] border-[#C8A15A]/25 hover:border-[#C8A15A]"
                        }`}
                      >
                        <div className="truncate">
                          <div className="font-bold">{c.title}</div>
                          <div className="text-[10px] opacity-70">{c.track} • {c.lectures.length} Lectures</div>
                        </div>
                        <Edit3 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Lecture Video ID Editor (8 cols) */}
              <div className="lg:col-span-8 rounded-3xl bg-white border border-[#C8A15A]/35 p-6 shadow-md">
                {selectedCourseForEdit ? (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#C8A15A]/20 gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-[#C8A15A]">
                          Editing Curriculum
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#0F1B3D]">
                          {selectedCourseForEdit.title}
                        </h3>
                      </div>

                      <button
                        onClick={handleSaveCourseLectures}
                        className="px-5 py-2.5 rounded-full bg-[#0F1B3D] hover:bg-[#1A2E63] text-white text-xs font-sans font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow"
                      >
                        <Save className="w-3.5 h-3.5 text-[#C8A15A]" />
                        <span>Save Video IDs</span>
                      </button>
                    </div>

                    {saveSuccessMsg && (
                      <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans font-bold text-emerald-800">
                        {saveSuccessMsg}
                      </div>
                    )}

                    <div className="mt-6 space-y-4">
                      {editingLectures.map((lec, idx) => (
                        <div
                          key={lec.order}
                          className="p-4 rounded-2xl bg-[#FBF9F4] border border-[#C8A15A]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-md bg-[#0F1B3D] text-[#C8A15A] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                                {lec.order}
                              </span>
                              <span className="font-serif text-xs md:text-sm font-bold text-[#0F1B3D] truncate">
                                {lec.title}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#0F1B3D]/60 font-mono mt-1 block">
                              Duration: {lec.duration} {lec.isFreeDemo && "• Free Demo Lecture"}
                            </span>
                          </div>

                          <div className="w-full sm:w-56 shrink-0">
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-[#0F1B3D]/70 mb-1">
                              YouTube Video ID
                            </label>
                            <input
                              type="text"
                              value={lec.youtubeId}
                              onChange={(e) => updateLectureId(idx, e.target.value)}
                              placeholder="e.g. dQw4w9WgXcQ"
                              className="w-full px-3 py-1.5 rounded-lg bg-white border border-[#C8A15A]/30 text-xs font-mono text-[#0F1B3D] focus:outline-none focus:border-[#C8A15A]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 text-[#0F1B3D]/60 text-xs font-sans">
                    Select a course on the left to review its lectures and paste your YouTube video IDs.
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}


"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  PlayCircle,
  Clock,
  Sparkles,
  Award,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getAllCourses } from "@/data/courses";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function StudentDashboardPage() {
  const router = useRouter();
  const { user, isLoading, getCourseProgress, watchProgress } = useAuth();
  const allCourses = getAllCourses();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#C8A15A] border-t-transparent animate-spin mx-auto mb-3" />
          <p className="text-xs font-serif font-bold text-[#0F1B3D]">Loading Student Portal...</p>
        </div>
      </div>
    );
  }

  // Filter courses user is enrolled in
  const enrolledList = allCourses.filter((c) =>
    user.enrolledCourses.includes(c.id)
  );

  // Suggested courses (free demo available)
  const availableDemoList = allCourses.filter(
    (c) => !user.enrolledCourses.includes(c.id)
  );

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Welcome Student Banner */}
          <section className="mb-10 p-8 rounded-3xl bg-white border border-[#C8A15A]/35 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#C8A15A]/15 text-[#9F7E3B] text-[11px] font-sans font-bold uppercase tracking-wider">
                  {user.role === "admin" ? "Faculty Admin" : "Active Student"}
                </span>
                <span className="text-xs text-[#0F1B3D]/60 font-mono">
                  ID: {user.id}
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0F1B3D]">
                Welcome back, {user.name}
              </h1>

              <p className="text-xs md:text-sm text-[#0F1B3D]/70 font-sans mt-1">
                Your portal to lectures, scanner problem-solving, and study progress.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {user.role === "admin" && (
                <Link
                  href="/admin"
                  className="px-4 py-2.5 rounded-full bg-[#0F1B3D] text-[#C8A15A] text-xs font-sans font-bold flex items-center gap-2 shadow"
                >
                  <ShieldAlert className="w-4 h-4 text-[#C8A15A]" />
                  <span>Open Admin Panel</span>
                </Link>
              )}

              <a
                href={siteConfig.contact.whatsapp.directLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-sans font-bold flex items-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Mentor WhatsApp Desk</span>
              </a>
            </div>
          </section>

          {/* Quick Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <div className="text-xs uppercase font-sans tracking-wider text-[#0F1B3D]/60 font-semibold">
                Enrolled Courses
              </div>
              <div className="font-serif text-3xl font-bold text-[#0F1B3D] mt-1">
                {enrolledList.length}
              </div>
              <span className="text-[11px] text-[#C8A15A] font-medium mt-1 block">
                {enrolledList.length > 0 ? "Full Access Active" : "Free Preview Account"}
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <div className="text-xs uppercase font-sans tracking-wider text-[#0F1B3D]/60 font-semibold">
                Demo Lectures Unlocked
              </div>
              <div className="font-serif text-3xl font-bold text-[#0F1B3D] mt-1">
                {allCourses.length}
              </div>
              <span className="text-[11px] text-emerald-700 font-medium mt-1 block">
                Free Access to All Track Demos
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <div className="text-xs uppercase font-sans tracking-wider text-[#0F1B3D]/60 font-semibold">
                Bhayandar Center Support
              </div>
              <div className="font-serif text-xl font-bold text-[#0F1B3D] mt-2">
                1-on-1 Faculty Clinic
              </div>
              <span className="text-[11px] text-[#0F1B3D]/60 mt-1 block">
                Navghar Road • 9 AM - 8 PM
              </span>
            </div>
          </section>

          {/* My Enrolled Courses Section */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-[#0F1B3D] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C8A15A]" />
                <span>My Enrolled Courses</span>
              </h2>

              {enrolledList.length === 0 && (
                <span className="text-xs text-[#0F1B3D]/60">
                  No paid courses assigned yet
                </span>
              )}
            </div>

            {enrolledList.length === 0 ? (
              <div className="p-8 rounded-3xl bg-white border border-[#C8A15A]/30 text-center max-w-xl mx-auto">
                <Award className="w-12 h-12 text-[#C8A15A] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-[#0F1B3D]">
                  You are currently on a Free Demo Account
                </h3>
                <p className="text-xs text-[#0F1B3D]/70 font-sans mt-1">
                  You can stream the first lecture of every course. To unlock full batch access with all recorded lectures and study materials, contact admissions on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(
                    `Hi Prof. Manoj Sir, I am logged in as ${user.name} (${user.phone}). I would like to enrol in a full course.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enrol via WhatsApp</span>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledList.map((course) => {
                  const progress = getCourseProgress(course.id, course.lectures.length);
                  return (
                    <div
                      key={course.id}
                      className="p-6 rounded-3xl bg-white border border-[#C8A15A]/30 shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#0F1B3D]/5 text-[#0F1B3D] text-[10px] font-bold font-sans uppercase">
                            {course.track} Track
                          </span>
                          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Enrolled
                          </span>
                        </div>

                        <h3 className="font-serif text-lg font-bold text-[#0F1B3D]">
                          {course.title}
                        </h3>
                        <p className="text-xs text-[#0F1B3D]/70 font-sans line-clamp-2 mt-1">
                          {course.tagline}
                        </p>

                        {/* Progress Bar */}
                        <div className="mt-5 space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-sans">
                            <span className="text-[#0F1B3D]/70">Progress</span>
                            <span className="font-mono font-bold text-[#0F1B3D]">
                              {progress}%
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#C8A15A] to-[#DFBA75] rounded-full"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#C8A15A]/15 flex items-center justify-between">
                        <span className="text-xs font-mono text-[#0F1B3D]/60">
                          {course.lectureCount} Lectures
                        </span>

                        <Link
                          href={`/courses/${course.slug}`}
                          className="px-4 py-2 rounded-full bg-[#0F1B3D] text-white text-xs font-sans font-medium flex items-center gap-1.5 shadow-sm hover:bg-[#1A2E63] transition-colors"
                        >
                          <PlayCircle className="w-3.5 h-3.5 text-[#C8A15A]" />
                          <span>Resume Learning</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Free Demos Ready to Stream */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0F1B3D] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C8A15A]" />
                  <span>Free Demo Lectures Ready to Stream</span>
                </h2>
                <p className="text-xs text-[#0F1B3D]/70 font-sans mt-0.5">
                  Your free account entitles you to watch Lecture 1 of every single course program.
                </p>
              </div>

              <Link
                href="/courses"
                className="text-xs font-sans font-bold text-[#0F1B3D] hover:text-[#C8A15A] flex items-center gap-1"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availableDemoList.slice(0, 4).map((course) => (
                <div
                  key={course.id}
                  className="p-5 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs flex flex-col justify-between hover:border-[#C8A15A] transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C8A15A]">
                      {course.track} Track
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#0F1B3D] mt-1 line-clamp-1">
                      {course.title}
                    </h4>
                    <p className="text-[11px] text-[#0F1B3D]/70 mt-1 line-clamp-2">
                      Demo: {course.lectures[0]?.title}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#C8A15A]/15 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#0F1B3D]/60">
                      {course.lectures[0]?.duration}
                    </span>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-3 py-1.5 rounded-full bg-[#0F1B3D] text-[#C8A15A] text-xs font-sans font-medium flex items-center gap-1 shadow-xs hover:bg-[#1A2E63]"
                    >
                      <PlayCircle className="w-3 h-3" />
                      <span>Watch Demo</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}


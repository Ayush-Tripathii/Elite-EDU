"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  BookOpen,
  Sparkles,
  ShieldCheck,
  PlayCircle,
  Lock,
  MessageCircle,
  UserCheck,
  ChevronDown,
  CheckCircle2,
  ArrowLeft,
  GraduationCap,
} from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import { siteConfig } from "@/config/siteConfig";
import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SecureVideoPlayer } from "@/components/SecureVideoPlayer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SecuredLecture } from "@/data/courses";

export function CourseDetailClient({ slug }: { slug: string }) {
  const course = getCourseBySlug(slug);
  const { user } = useAuth();

  const [securedLectures, setSecuredLectures] = useState<SecuredLecture[]>([]);
  const [activeLectureIdx, setActiveLectureIdx] = useState(0);
  const [loadingLectures, setLoadingLectures] = useState(true);
  const [openModuleIdx, setOpenModuleIdx] = useState<number | null>(0);

  // Compute secured lecture permissions directly on client or via API
  useEffect(() => {
    if (!course) return;

    const isEnrolled =
      user?.role === "admin" ||
      (user?.enrolledCourses && user.enrolledCourses.includes(course.id));

    const computed: SecuredLecture[] = course.lectures.map((lec) => {
      // 1. Visitor is logged out
      if (!user) {
        return {
          order: lec.order,
          title: lec.title,
          duration: lec.duration,
          description: lec.description,
          isFreeDemo: lec.isFreeDemo,
          access: "locked",
          lockReason: "signup_required",
          youtubeId: null,
        };
      }

      // 2. User is enrolled or admin
      if (isEnrolled) {
        return {
          order: lec.order,
          title: lec.title,
          duration: lec.duration,
          description: lec.description,
          isFreeDemo: lec.isFreeDemo,
          access: "unlocked",
          youtubeId: lec.youtubeId,
        };
      }

      // 3. User is logged in with free account (Lecture 1 demo unlocked)
      if (lec.order === 1 || lec.isFreeDemo) {
        return {
          order: lec.order,
          title: lec.title,
          duration: lec.duration,
          description: lec.description,
          isFreeDemo: true,
          access: "unlocked",
          youtubeId: lec.youtubeId,
        };
      }

      // Subsequent lectures locked for free account
      return {
        order: lec.order,
        title: lec.title,
        duration: lec.duration,
        description: lec.description,
        isFreeDemo: false,
        access: "locked",
        lockReason: "enrollment_required",
        youtubeId: null,
      };
    });

    setSecuredLectures(computed);
    setLoadingLectures(false);
  }, [course, user]);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl font-bold text-[#0F1B3D]">Course Not Found</h1>
        <p className="text-sm text-[#0F1B3D]/70 mt-2">The requested curriculum does not exist.</p>
        <Link href="/courses" className="mt-4 px-5 py-2.5 rounded-full bg-[#0F1B3D] text-white text-xs">
          Return to Courses
        </Link>
      </div>
    );
  }

  const activeLecture = securedLectures[activeLectureIdx] || {
    order: 1,
    title: course.lectures[0]?.title || "Demo Lecture",
    duration: course.lectures[0]?.duration || "45m",
    access: user ? "unlocked" : "locked",
    lockReason: user ? undefined : "signup_required",
    youtubeId: user ? course.lectures[0]?.youtubeId : null,
  };

  const isEnrolled =
    user?.role === "admin" ||
    (user?.enrolledCourses && user.enrolledCourses.includes(course.id));

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Breadcrumb strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-sans text-[#0F1B3D]/60 hover:text-[#C8A15A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Courses</span>
          </Link>
        </div>

        {/* Course Header Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#C8A15A]/25">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-[#0F1B3D] text-white">
                  {course.track} Track
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#C8A15A]/15 text-[#9F7E3B] border border-[#C8A15A]/30">
                  {course.level}
                </span>
                {isEnrolled && (
                  <span className="px-3 py-1 rounded-full text-xs font-sans font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                    <UserCheck className="w-3 h-3" />
                    <span>Enrolled</span>
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="mt-2 text-base font-serif italic text-[#C8A15A] font-semibold">
                &ldquo;{course.tagline}&rdquo;
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#0F1B3D]/80 font-sans leading-relaxed">
                {course.description}
              </p>

              {/* Faculty citation */}
              <div className="mt-5 flex items-center gap-2 text-xs font-sans text-[#0F1B3D]/70">
                <GraduationCap className="w-4 h-4 text-[#C8A15A]" />
                <span>Lead Faculty: <strong>{course.faculty}</strong></span>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:w-80 shrink-0 p-6 rounded-3xl bg-white border border-[#C8A15A]/35 shadow-lg flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-sans tracking-wider text-[#0F1B3D]/60 font-semibold">
                  Tuition Fee
                </span>
                <span className="font-mono text-sm font-bold text-[#0F1B3D] px-2.5 py-1 rounded-full bg-[#FBF9F4] border border-[#C8A15A]/25">
                  {course.feesPlaceholder}
                </span>
              </div>

              <div className="space-y-2 text-xs font-sans text-[#0F1B3D]/80 border-t border-[#C8A15A]/15 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#0F1B3D]/60">Duration:</span>
                  <span className="font-mono font-medium">{course.durationPlaceholder}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0F1B3D]/60">Batch Slots:</span>
                  <span className="font-mono font-medium">{course.batchTimingPlaceholder}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0F1B3D]/60">Total Lectures:</span>
                  <span className="font-medium">{course.lectureCount} Modules</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(
                  `Hi, I want to enrol in "${course.title}". Please share the fee and batch schedule.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enrol via WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full py-2.5 rounded-full bg-[#FBF9F4] hover:bg-[#C8A15A]/15 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase border border-[#C8A15A]/30 text-center transition-colors"
              >
                Enquire for Offline Batch
              </Link>
            </div>
          </div>
        </section>

        {/* Video Player & Lecture Playlist Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Player Main Stage (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8A15A]" />
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#0F1B3D]">
                    {activeLecture.title}
                  </h3>
                </div>

                <span className="text-xs font-mono text-[#0F1B3D]/60">
                  {activeLecture.duration}
                </span>
              </div>

              {/* Secure Player Component */}
              <SecureVideoPlayer
                courseSlug={course.slug}
                courseTitle={course.title}
                courseId={course.id}
                lecture={activeLecture}
                onNextLecture={() => {
                  if (activeLectureIdx < securedLectures.length - 1) {
                    setActiveLectureIdx(activeLectureIdx + 1);
                  }
                }}
                hasNextLecture={activeLectureIdx < securedLectures.length - 1}
              />

              {activeLecture.description && (
                <div className="p-4 rounded-2xl bg-white border border-[#C8A15A]/25 text-xs text-[#0F1B3D]/80">
                  <strong className="text-[#0F1B3D]">Session Notes:</strong> {activeLecture.description}
                </div>
              )}
            </div>

            {/* Lecture Playlist Drawer (4 cols) */}
            <div className="lg:col-span-4 rounded-3xl bg-white border border-[#C8A15A]/35 p-6 shadow-md flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A15A]/20">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C8A15A]" />
                  <h4 className="font-serif text-base font-bold text-[#0F1B3D]">
                    Curriculum Playlist
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#C8A15A] font-semibold">
                  {course.lectures.length} Lectures
                </span>
              </div>

              <div className="mt-4 space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                {course.lectures.map((item, idx) => {
                  const secured = securedLectures[idx];
                  const isCurrent = idx === activeLectureIdx;
                  const isLocked = secured ? secured.access === "locked" : !user && idx > 0;

                  return (
                    <button
                      key={item.order}
                      onClick={() => setActiveLectureIdx(idx)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                        isCurrent
                          ? "bg-[#0F1B3D] text-[#FBF9F4] border-[#0F1B3D] shadow-sm"
                          : "bg-[#FBF9F4]/70 border-[#C8A15A]/20 hover:border-[#C8A15A]/50 text-[#0F1B3D]"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                          isCurrent
                            ? "bg-[#C8A15A] text-[#0F1B3D]"
                            : isLocked
                            ? "bg-slate-200 text-slate-500"
                            : "bg-[#0F1B3D]/10 text-[#0F1B3D]"
                        }`}
                      >
                        {isLocked ? <Lock className="w-3.5 h-3.5" /> : item.order}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[11px] font-sans font-medium line-clamp-1 ${
                              isCurrent ? "text-white" : "text-[#0F1B3D]"
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-[10px] font-mono ${
                              isCurrent ? "text-[#DFBA75]" : "text-[#0F1B3D]/60"
                            }`}
                          >
                            {item.duration}
                          </span>

                          {item.order === 1 && (
                            <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#C8A15A]/20 text-[#DFBA75]">
                              Free Demo
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isEnrolled && (
                <div className="mt-4 pt-4 border-t border-[#C8A15A]/20 text-center">
                  <p className="text-[11px] text-[#0F1B3D]/70 mb-2">
                    Want unrestricted access to all {course.lectureCount} lectures?
                  </p>
                  <a
                    href={siteConfig.contact.whatsapp.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-full bg-[#0F1B3D] text-[#C8A15A] text-xs font-bold font-sans inline-block hover:bg-[#1A2E63] transition-colors"
                  >
                    Unlock with Admissions
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Syllabus Accordion */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1B3D]">
                Detailed Syllabus Structure
              </h3>
              <p className="text-xs md:text-sm text-[#0F1B3D]/70 mt-1">
                Aligned with the latest Council notifications and exam blueprints.
              </p>
            </div>

            <div className="space-y-3">
              {course.modules.map((mod, idx) => {
                const isOpen = openModuleIdx === idx;
                return (
                  <div
                    key={mod.moduleNumber}
                    className="rounded-2xl bg-white border border-[#C8A15A]/30 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenModuleIdx(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 select-none hover:bg-[#FBF9F4]/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#0F1B3D] text-[#C8A15A] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {mod.moduleNumber}
                        </span>
                        <span className="font-serif text-base font-bold text-[#0F1B3D]">
                          {mod.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0F1B3D] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-1 border-t border-[#C8A15A]/15 bg-[#FBF9F4]/30">
                        <ul className="space-y-2">
                          {mod.topics.map((topic, tIdx) => (
                            <li
                              key={tIdx}
                              className="flex items-center gap-2 text-xs md:text-sm text-[#0F1B3D]/80"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A15A] shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}


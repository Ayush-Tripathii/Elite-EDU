"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  Clock,
  PlayCircle,
  Award,
  ArrowUpRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Course } from "@/data/courses";
import { siteConfig } from "@/config/siteConfig";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const trackColorMap: Record<Course["track"], { bg: string; text: string; border: string }> = {
    CA: {
      bg: "bg-[#0F1B3D]/8",
      text: "text-[#0F1B3D]",
      border: "border-[#0F1B3D]/20",
    },
    CMA: {
      bg: "bg-[#C8A15A]/15",
      text: "text-[#9F7E3B]",
      border: "border-[#C8A15A]/40",
    },
    CS: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200",
    },
    Foundations: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
    },
  };

  const trackStyle = trackColorMap[course.track];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      className="relative rounded-3xl bg-white border border-[#C8A15A]/25 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0F1B3D]/5 group overflow-hidden"
    >
      {/* Spotlight Gold Glow Effect following cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 161, 90, 0.18), transparent 80%)`,
          }}
        />
      )}

      {/* Top Section: Track Badge + Level */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase border ${trackStyle.bg} ${trackStyle.text} ${trackStyle.border}`}
          >
            {course.track} Track
          </span>

          {course.badge && (
            <span className="inline-flex items-center gap-1 text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#C8A15A]/15 text-[#9F7E3B] border border-[#C8A15A]/30">
              <Sparkles className="w-2.5 h-2.5" />
              <span>{course.badge}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-[#0F1B3D] tracking-tight group-hover:text-[#C8A15A] transition-colors leading-snug">
          <Link href={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* Tagline / Hindi Accent */}
        <p className="text-xs font-serif italic text-[#C8A15A] font-medium mt-1">
          {course.tagline}
        </p>

        {/* Short Description */}
        <p className="text-xs text-[#0F1B3D]/70 font-sans line-clamp-3 mt-3 leading-relaxed">
          {course.description}
        </p>

        {/* Highlights List preview */}
        <div className="mt-4 pt-4 border-t border-[#C8A15A]/15 space-y-1.5">
          {course.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[11px] text-[#0F1B3D]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A] shrink-0 mt-1.5" />
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metadata & CTAs */}
      <div className="mt-6 pt-5 border-t border-[#C8A15A]/20 relative z-10 flex flex-col gap-4">
        {/* Course Duration & Lectures Pills */}
        <div className="flex items-center justify-between text-xs text-[#0F1B3D]/70 font-sans">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>{course.lectureCount} Lectures</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span className="font-mono text-[11px]">{course.durationPlaceholder}</span>
          </div>
        </div>

        {/* Fees Placeholder & Action buttons */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-sans tracking-wider text-[#0F1B3D]/60 font-semibold">
              Tuition Fee
            </span>
            <span className="font-mono text-xs font-bold text-[#0F1B3D] tracking-tight">
              {course.feesPlaceholder}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/courses/${course.slug}`}
              className="px-4 py-2 rounded-full bg-[#0F1B3D] hover:bg-[#1A2E63] text-white text-xs font-sans font-medium transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <PlayCircle className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span>Watch Demo</span>
            </Link>

            <Link
              href={`/courses/${course.slug}`}
              className="w-8 h-8 rounded-full border border-[#C8A15A]/40 flex items-center justify-center text-[#0F1B3D] hover:bg-[#C8A15A]/15 hover:border-[#C8A15A] transition-colors"
              aria-label="View syllabus details"
            >
              <ArrowUpRight className="w-4 h-4 text-[#0F1B3D]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


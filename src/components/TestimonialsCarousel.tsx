"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles, User, Award } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function TestimonialsCarousel() {
  const testimonials = siteConfig.testimonials;
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIdx((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const current = testimonials[currentIdx];

  return (
    <section className="relative py-24 bg-[#F8F5EE] border-b border-[#C8A15A]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>Student Voices</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1B3D] tracking-tight">
            Mentorship That Transforms Fear into Excellence
          </h2>

          <p className="mt-3 text-xs font-mono uppercase tracking-widest text-[#C8A15A] font-semibold">
            [STUDENT EXPERIENCES & FEEDBACK]
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border-2 border-[#C8A15A]/30 p-8 md:p-14 shadow-xl overflow-hidden flex flex-col justify-between min-h-[300px]">
            {/* Watermark Quote Icon */}
            <Quote className="absolute right-8 bottom-8 w-28 h-28 text-[#C8A15A]/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#0F1B3D]/5 border border-[#0F1B3D]/10 text-[#0F1B3D] text-xs font-sans font-semibold">
                  {current.course}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#C8A15A]/15 text-[#9F7E3B] text-[11px] font-mono font-bold">
                  {current.scoreOrRank}
                </span>
              </div>

              <blockquote className="font-serif text-xl md:text-2xl text-[#0F1B3D] leading-relaxed italic">
                {current.quote}
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C8A15A]/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0F1B3D] text-[#C8A15A] flex items-center justify-center font-bold text-sm">
                  <User className="w-5 h-5 text-[#C8A15A]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#0F1B3D]">
                    {current.name}
                  </h4>
                  <p className="text-xs text-[#0F1B3D]/60 font-sans">
                    {current.year} • Elite Student
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#C8A15A]/40 bg-[#FBF9F4] hover:bg-[#C8A15A]/20 flex items-center justify-center text-[#0F1B3D] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-[#0F1B3D]/70 px-2">
                  {currentIdx + 1} / {testimonials.length}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#C8A15A]/40 bg-[#FBF9F4] hover:bg-[#C8A15A]/20 flex items-center justify-center text-[#0F1B3D] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


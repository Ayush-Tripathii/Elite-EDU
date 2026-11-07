"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function SubjectMarquee() {
  const subjects = siteConfig.marqueeSubjects;
  // Repeat array twice to create a seamless infinite loop
  const doubleList = [...subjects, ...subjects];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[#C8A15A]/20 bg-white/60 backdrop-blur-sm select-none">
      {/* Left/right soft feather fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FBF9F4] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FBF9F4] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 cursor-default">
        {doubleList.map((subject, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 shrink-0 px-4 py-1.5 rounded-full bg-white border border-[#C8A15A]/25 shadow-xs hover:border-[#C8A15A] transition-colors"
          >
            <Sparkles className="w-3 h-3 text-[#C8A15A]" />
            <span className="font-serif text-xs md:text-sm font-semibold tracking-wide text-[#0F1B3D]">
              {subject}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


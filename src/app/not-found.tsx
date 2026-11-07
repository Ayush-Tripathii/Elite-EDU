"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Home, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      {/* Floating mathematical blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#C8A15A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#0F1B3D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/30 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
          <span>Error 404 • Ledger Out of Balance</span>
        </div>

        <div className="font-serif text-8xl md:text-9xl font-bold text-gold-gradient tracking-tight">
          404
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1B3D]">
          Page Not In The Syllabus
        </h1>

        <p className="text-xs sm:text-sm text-[#0F1B3D]/70 font-sans leading-relaxed">
          The chapter or URL you are attempting to access does not exist or has been relocated to another curriculum section.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#0F1B3D] text-[#FBF9F4] text-xs font-sans font-bold tracking-wider uppercase hover:bg-[#1A2E63] transition-all shadow-md flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-[#C8A15A]" />
            <span>Return to Campus Home</span>
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-full bg-white border border-[#C8A15A]/40 text-[#0F1B3D] text-xs font-sans font-semibold hover:bg-[#FBF9F4] transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}


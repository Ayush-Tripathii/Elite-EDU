"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  Sparkles,
  Quote,
  CheckCircle2,
  Cpu,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { MagneticButton } from "./MagneticButton";

export function FacultySpotlight() {
  const { leadFaculty } = siteConfig.brand;

  return (
    <section className="relative py-24 bg-[#FBF9F4] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Card with Clearly Marked Placeholder (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gold decorative backdrop aura */}
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#C8A15A]/25 via-transparent to-[#0F1B3D]/10 blur-xl pointer-events-none" />

              <div className="relative rounded-[32px] bg-white border-2 border-[#C8A15A]/40 p-6 md:p-8 shadow-2xl overflow-hidden">
                {/* Hairline gold accent corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C8A15A]" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C8A15A]" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#C8A15A]" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#C8A15A]" />

                {/* Faculty Portrait Placeholder Canvas */}
                <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#F2ECE1] to-[#E5DBC7] border border-[#C8A15A]/30 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group">
                  {/* Subtle vector watermark */}
                  <div className="w-24 h-24 rounded-full bg-[#0F1B3D]/5 border border-[#C8A15A]/30 flex items-center justify-center mb-4 shadow-inner">
                    <GraduationCap className="w-12 h-12 text-[#0F1B3D]/70" />
                  </div>

                  <span className="font-serif text-lg font-bold text-[#0F1B3D]">
                    {leadFaculty.name}
                  </span>
                  
                  <span className="text-xs font-sans uppercase tracking-widest text-[#C8A15A] font-semibold mt-1">
                    Founder & Lead Faculty
                  </span>

                  {/* Clearly Marked Placeholder Badge */}
                  <div className="mt-4 px-3 py-1.5 rounded-full bg-white/80 border border-[#C8A15A]/40 text-[10px] font-mono font-bold text-[#0F1B3D] tracking-wider uppercase shadow-xs">
                    {siteConfig.placeholders.facultyExperienceYears}
                  </div>

                  <p className="text-[11px] font-mono text-[#0F1B3D]/60 mt-3 max-w-[220px]">
                    [PORTRAIT IMAGE PLACEHOLDER: Ready for faculty photography]
                  </p>
                </div>

                {/* Floating Quote Stamp */}
                <div className="mt-4 p-3 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/25 text-center">
                  <span className="text-xs font-serif italic text-[#0F1B3D] font-medium">
                    &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
                <span>Leadership & Pedagogy</span>
              </div>

              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
                Meet {leadFaculty.name}
              </h2>

              <p className="mt-2 text-base md:text-lg font-serif italic text-[#C8A15A] font-medium">
                &ldquo;{leadFaculty.motto}&rdquo;
              </p>
            </div>

            <p className="text-sm md:text-base text-[#0F1B3D]/80 font-sans leading-relaxed">
              With an engineering background, Prof. Manoj Kumar brings a structured, logic-first analytical methodology to CA, CMA, and CS education. While traditional teaching frequently overwhelms students with hundreds of formula sheets and abstract rules, Manoj Sir reverse-engineers each concept into memorable mental shortcuts.
            </p>

            <p className="text-sm md:text-base text-[#0F1B3D]/80 font-sans leading-relaxed">
              He is acclaimed across Mira Bhayandar and the Western Mumbai suburbs for making Mathematics, Quantitative Aptitude, and English Grammar effortlessly scoring for commerce students who previously considered them their weakest subjects.
            </p>

            {/* Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#C8A15A]/25 flex items-start gap-3 shadow-xs">
                <Cpu className="w-5 h-5 text-[#C8A15A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-serif font-bold text-[#0F1B3D] uppercase tracking-wider">
                    The Engineering Method
                  </h4>
                  <p className="text-xs text-[#0F1B3D]/70 mt-1 leading-normal">
                    Breaking multi-step calculations into 2-step visual pattern recognitions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#C8A15A]/25 flex items-start gap-3 shadow-xs">
                <Award className="w-5 h-5 text-[#C8A15A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-serif font-bold text-[#0F1B3D] uppercase tracking-wider">
                    High Exemption Track
                  </h4>
                  <p className="text-xs text-[#0F1B3D]/70 mt-1 leading-normal">
                    Hundreds of students scoring 60+ exemptions in Quantitative Aptitude & Tax.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton
                href="/about"
                variant="primary"
                size="md"
              >
                <span>Read Full Teaching Philosophy</span>
              </MagneticButton>

              <a
                href={siteConfig.contact.whatsapp.directLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white hover:bg-[#C8A15A]/10 text-[#0F1B3D] text-xs font-sans font-bold tracking-wider uppercase border border-[#C8A15A]/50 transition-colors flex items-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Talk with Manoj Sir</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


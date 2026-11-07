"use client";

import React from "react";
import Link from "next/link";
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  Medal,
  GraduationCap,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MagneticButton } from "@/components/MagneticButton";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-4">
              <Trophy className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span>Wall of Excellence</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
              Honoring Our Top <br className="hidden sm:inline" />
              <span className="text-gold-gradient font-normal italic">Rankers & Achievers</span>
            </h1>

            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-[#C8A15A] font-semibold">
              [ACADEMIC RESULTS & RANKER HONORS]
            </p>

            <p className="mt-4 text-sm md:text-base text-[#0F1B3D]/75 font-sans leading-relaxed">
              Every badge represents months of disciplined practice, scanner mastery, and the mentorship of Prof. Er. Manoj Kumar and faculty.
            </p>
          </div>
        </section>

        {/* Results Cards Grid (Clearly marked placeholders) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.results.map((item) => (
              <div
                key={item.id}
                className="relative rounded-3xl bg-white border border-[#C8A15A]/30 p-7 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#C8A15A] transition-all group overflow-hidden"
              >
                {/* Decorative gold ribbon corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C8A15A]/15 to-transparent rounded-bl-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#0F1B3D]/5 border border-[#0F1B3D]/10 text-[11px] font-sans font-semibold text-[#0F1B3D]">
                      {item.course}
                    </span>
                    <Medal className="w-5 h-5 text-[#C8A15A]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0F1B3D] tracking-tight group-hover:text-[#C8A15A] transition-colors">
                    {item.studentName}
                  </h3>

                  <div className="mt-2 text-xs font-serif italic text-[#C8A15A] font-medium">
                    {item.exam}
                  </div>

                  <div className="mt-4 p-3 rounded-2xl bg-[#FBF9F4] border border-[#C8A15A]/20">
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#0F1B3D]/60 font-semibold block">
                      Achievement / Honor
                    </span>
                    <span className="font-mono text-xs font-bold text-[#0F1B3D] mt-0.5 block">
                      {item.achievement}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C8A15A]/15 flex items-center justify-between text-[11px] font-mono text-[#0F1B3D]/60">
                  <span>Elite Education Alumnus</span>
                  <span className="text-[#C8A15A] font-semibold">Bhayandar Cohort</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to start your own ranker journey */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-white border-2 border-[#C8A15A]/40 shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1B3D]">
              Write Your Name on Our Next Hall of Fame
            </h3>
            <p className="text-xs md:text-sm text-[#0F1B3D]/75 mt-2 max-w-xl mx-auto font-sans leading-relaxed">
              Join the elite circle of students who conquer their fears in Mathematics, Accounting, and Law. Book your free demo seat today.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/courses" variant="gold" size="md">
                <Sparkles className="w-4 h-4" />
                <span>Start with a Free Demo</span>
              </MagneticButton>

              <MagneticButton href="/contact" variant="outline" size="md">
                <span>Visit Bhayandar Campus</span>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}


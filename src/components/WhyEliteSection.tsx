"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Wand2,
  Users2,
  HelpCircle,
  FileCheck2,
  Video,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface StoryPoint {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  hindiAccent?: string;
  description: string;
  details: string[];
  statLabel: string;
}

const storyPoints: StoryPoint[] = [
  {
    id: 1,
    icon: Lightbulb,
    tag: "01. Pedagogy",
    title: "Concept Clarity Rebuilt from First Principles",
    description:
      "We replace mechanical rote memorization with structural comprehension. Accounting entries, company law sections, and economic models are explained through real corporate case studies so you understand the 'Why' behind every standard.",
    details: [
      "No blind memorization of balance sheet formats",
      "Ind AS and Standards on Auditing explained with real annual reports",
      "Zero doubt carries over into the next lecture",
    ],
    statLabel: "100% Conceptual Clarity",
  },
  {
    id: 2,
    icon: Wand2,
    tag: "02. The Signature Edge",
    title: "Simple Tricks for Tough Mathematics & English",
    hindiAccent: "Maths aur English ko aasaan banate hain.",
    description:
      "Prof. Er. Manoj Kumar brings an engineer's systematic brain into commercial education. His legendary shortcut tricks turn complex Quantitative Aptitude, Calculus, and English grammar into effortless high-scoring papers.",
    details: [
      "10-second mental arithmetic and option-elimination methods",
      "Vedic maths shortcuts for CA Foundation & CMA math papers",
      "Visual timeline formulas for English tenses and sentence drafting",
    ],
    statLabel: "Manoj Sir's Signature Tricks",
  },
  {
    id: 3,
    icon: Users2,
    tag: "03. Cohort Integrity",
    title: "Intimate Cohorts of 20–25 Students — Never Crowded Auditoriums",
    description:
      "While commercial factories pack 200+ students into a single hall, Elite Education strictly caps each batch. Every student is personally known by name, target exam, and specific weak points.",
    details: [
      "Strict student-to-mentor ratio (1:25 max)",
      "Daily individual check-ins by faculty",
      "Tailored pacing for both fast and steady learners",
    ],
    statLabel: "Max 25 Per Batch",
  },
  {
    id: 4,
    icon: HelpCircle,
    tag: "04. Unconditional Support",
    title: "Uncompromising 1-on-1 Doubt Solving",
    description:
      "Doubt solving is not delegated to junior assistants. Prof. Manoj Sir and senior subject experts sit directly with you during scheduled clinic hours and via direct WhatsApp until your confusion is completely resolved.",
    details: [
      "Dedicated 30-minute post-lecture doubt clinics",
      "Direct teacher WhatsApp access for urgent revision questions",
      "Handwritten step-by-step solutions for complex scanner problems",
    ],
    statLabel: "Zero-Pending Doubts",
  },
  {
    id: 5,
    icon: FileCheck2,
    tag: "05. Exam Strategy",
    title: "Rigorous Exam-Oriented Practice & Scanner Mastery",
    description:
      "Clearing CA / CMA / CS demands exam temperament. We dissect the past 10 years of ICAI/ICMAI exam papers, RTPs, and MTPs, training you to finish 100-mark papers with 15 minutes to spare.",
    details: [
      "Weekly timed classroom mock tests modeled on council patterns",
      "Detailed examiner-level paper evaluation with line-by-line feedback",
      "Speed writing and presentation workshops for theoretical law papers",
    ],
    statLabel: "10 Years Exam Scanners",
  },
  {
    id: 6,
    icon: Video,
    tag: "06. Anytime Access",
    title: "High-Definition Recorded Lectures for Lifetime Revision",
    description:
      "Missed a batch due to illness, or need to revise standard costing before your exam? Every session is professionally recorded in HD and made available in your private student dashboard with zero buffering.",
    details: [
      "Crystal clear audio and board capture",
      "Organized chapter-wise playlists with progress tracking",
      "Speed controls (1x, 1.25x, 1.5x) for rapid exam-eve revision",
    ],
    statLabel: "HD Anytime Replays",
  },
];

export function WhyEliteSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = storyPoints[activeIdx];
  const IconComponent = activeItem.icon;

  return (
    <section className="relative py-24 bg-[#F8F5EE] border-y border-[#C8A15A]/25 overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>The Elite Standard</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
            Why Ambitious Aspirants Choose{" "}
            <span className="text-gold-gradient font-normal">Elite Education</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#0F1B3D]/70 font-sans leading-relaxed">
            We don&apos;t just prepare you to pass — we re-architect how you think, calculate, and present your answers for top honors.
          </p>
        </div>

        {/* Interactive Storyteller: Left Selector Tabs, Right Dynamic Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Progress Line + Step Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {storyPoints.map((point, index) => {
              const isSelected = index === activeIdx;
              const TabIcon = point.icon;

              return (
                <button
                  key={point.id}
                  onClick={() => setActiveIdx(index)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 relative border flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-[#C8A15A] shadow-md shadow-[#C8A15A]/10 -translate-y-0.5"
                      : "bg-white/50 border-[#C8A15A]/20 hover:bg-white hover:border-[#C8A15A]/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#0F1B3D] text-[#C8A15A]"
                        : "bg-[#0F1B3D]/5 text-[#0F1B3D]/60"
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-sans tracking-widest font-bold text-[#C8A15A]">
                        {point.tag}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#C8A15A] animate-pulse" />
                      )}
                    </div>
                    <div
                      className={`text-sm font-serif font-bold mt-0.5 transition-colors ${
                        isSelected ? "text-[#0F1B3D]" : "text-[#0F1B3D]/80"
                      }`}
                    >
                      {point.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Canvas Card (7 cols) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-3xl bg-white border border-[#C8A15A]/35 p-8 md:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
              {/* Subtle gold glow blob */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#C8A15A]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative z-10 flex flex-col gap-6"
                >
                  {/* Top Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1B3D]/5 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
                      <IconComponent className="w-3.5 h-3.5 text-[#C8A15A]" />
                      <span>{activeItem.tag}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1B3D] leading-snug">
                      {activeItem.title}
                    </h3>

                    {activeItem.hindiAccent && (
                      <p className="mt-2 text-sm font-serif italic text-[#C8A15A] font-semibold">
                        &ldquo;{activeItem.hindiAccent}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Body description */}
                  <p className="text-sm md:text-base text-[#0F1B3D]/75 font-sans leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Key points checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#0F1B3D]/60 font-sans">
                      Key Highlights:
                    </span>
                    {activeItem.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A15A] shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm text-[#0F1B3D]/85 font-sans font-medium">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Badge & Stat */}
                  <div className="mt-4 pt-6 border-t border-[#C8A15A]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#C8A15A]" />
                      <span className="font-serif text-xs font-bold text-[#0F1B3D] tracking-wide">
                        {activeItem.statLabel}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        setActiveIdx((prev) => (prev + 1) % storyPoints.length)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#0F1B3D] hover:text-[#C8A15A] transition-colors"
                    >
                      <span>Next Benefit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


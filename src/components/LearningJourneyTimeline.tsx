"use client";

import React from "react";
import {
  MessageSquare,
  PlayCircle,
  UserCheck,
  BookOpenCheck,
  FileCheck,
  Trophy,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const steps = [
  {
    step: "01",
    title: "Enquire",
    desc: "Connect via WhatsApp or visit our Bhayandar campus. Discuss your syllabus requirements and batch preferences.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Free Demo",
    desc: "Experience Prof. Manoj Sir's shortcut pedagogy. Watch the first lecture online or attend a live classroom trial.",
    icon: PlayCircle,
  },
  {
    step: "03",
    title: "Enrol",
    desc: "Join our intimate 20–25 student batch. Receive your comprehensive study scanners, notes, and LMS portal access.",
    icon: UserCheck,
  },
  {
    step: "04",
    title: "Learn",
    desc: "Systematic conceptual lectures, daily problem-solving, and continuous 1-on-1 doubt clearing clinics.",
    icon: BookOpenCheck,
  },
  {
    step: "05",
    title: "Test",
    desc: "Weekly timed mock tests simulating ICAI/ICMAI exam conditions with line-by-line faculty evaluation.",
    icon: FileCheck,
  },
  {
    step: "06",
    title: "Succeed",
    desc: "Walk into your examination hall with unshakable confidence, speed mastery, and rank-defining clarity.",
    icon: Trophy,
  },
];

export function LearningJourneyTimeline() {
  return (
    <section className="relative py-24 bg-white border-b border-[#C8A15A]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
            <span>The Roadmap to Ranks</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1B3D] tracking-tight">
            Your 6-Stage Learning Journey
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#0F1B3D]/70 font-sans">
            A battle-tested methodology transforming novice candidates into qualified professionals.
          </p>
        </div>

        {/* 6-Step Horizontal / Responsive Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {/* Subtle connecting gold line on desktop */}
          <div className="hidden lg:block absolute top-1/4 left-10 right-10 h-[2px] bg-gradient-to-r from-[#C8A15A]/10 via-[#C8A15A]/40 to-[#C8A15A]/10 -z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-[#FBF9F4] border border-[#C8A15A]/25 shadow-xs hover:border-[#C8A15A] hover:shadow-md transition-all group"
              >
                {/* Step badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#0F1B3D] border border-[#C8A15A]/40 flex items-center justify-center text-[#C8A15A] shadow-md group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono font-bold tracking-widest text-[#C8A15A] uppercase">
                  Step {item.step}
                </span>

                <h3 className="font-serif text-lg font-bold text-[#0F1B3D] mt-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[#0F1B3D]/70 font-sans leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


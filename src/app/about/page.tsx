"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Award,
  GraduationCap,
  Cpu,
  BookOpen,
  Users,
  Target,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MagneticButton } from "@/components/MagneticButton";

export default function AboutPage() {
  const { leadFaculty } = siteConfig.brand;

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span>About Elite Education</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
              Where Engineering Rigour Meets{" "}
              <span className="text-gold-gradient font-normal italic">Financial Mastery</span>
            </h1>

            <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white border border-[#C8A15A]/30 shadow-xs">
              <p className="font-serif text-base sm:text-lg text-[#0F1B3D] italic font-semibold">
                &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
              </p>
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#0F1B3D]/80 font-sans leading-relaxed">
              Founded on the belief that no student is inherently &ldquo;weak&rdquo; in mathematics, accounting, or law — they only lack a structured, logical mental framework.
            </p>
          </div>
        </section>

        {/* Founder Story Deep Dive */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-14 rounded-3xl bg-white border border-[#C8A15A]/30 shadow-lg">
            
            {/* Founder Visual Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#F2ECE1] to-[#E3D8C3] border border-[#C8A15A]/40 flex flex-col items-center justify-center p-6 text-center shadow-md">
                <div className="w-24 h-24 rounded-full bg-[#0F1B3D]/5 border border-[#C8A15A]/40 flex items-center justify-center mb-4">
                  <GraduationCap className="w-12 h-12 text-[#0F1B3D]/70" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0F1B3D]">
                  {leadFaculty.name}
                </h3>
                <span className="text-xs font-sans uppercase tracking-widest text-[#C8A15A] font-semibold mt-1">
                  Founder & Principal Educator
                </span>
                <span className="mt-3 px-3 py-1 rounded-full bg-white/80 border border-[#C8A15A]/30 text-[10px] font-mono font-bold text-[#0F1B3D]">
                  {siteConfig.placeholders.yearsOfExperience}
                </span>
                <p className="text-[11px] font-mono text-[#0F1B3D]/60 mt-3 max-w-[200px]">
                  [FACULTY PHOTOGRAPHY PLACEHOLDER]
                </p>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/25 text-center w-full">
                <span className="text-xs font-serif italic text-[#0F1B3D] font-medium">
                  &ldquo;{leadFaculty.motto}&rdquo;
                </span>
              </div>
            </div>

            {/* Founder Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#0F1B3D] leading-tight">
                An Engineer by Profession, <br />
                <span className="text-gold-gradient font-normal">A Teacher by Passion.</span>
              </h2>

              <p className="text-sm md:text-base text-[#0F1B3D]/80 font-sans leading-relaxed">
                Prof. Er. Manoj Kumar began with a radical observation: students struggle with professional commerce examinations (CA, CMA, CS) not because the syllabus is too vast, but because traditional coaching relies almost entirely on rote memorization without establishing the underlying logic.
              </p>

              <p className="text-sm md:text-base text-[#0F1B3D]/80 font-sans leading-relaxed">
                Leveraging his engineering foundation in analytical modeling, Manoj Sir developed a unique pedagogy that replaces arbitrary formula drills with visual intuition, mental arithmetic patterns, and 2-step elimination methods.
              </p>

              <div className="p-4 rounded-2xl bg-[#FBF9F4] border border-[#C8A15A]/25">
                <h4 className="font-serif text-sm font-bold text-[#0F1B3D] mb-1">
                  The Signature &lsquo;Zero Formula Rote&rsquo; Method
                </h4>
                <p className="text-xs text-[#0F1B3D]/70 leading-relaxed font-sans">
                  From Time Value of Money and Annuities in CA Foundation to Marginal Costing and Triangular Forex Arbitrage in Final levels, Manoj Sir&apos;s shortcuts have empowered thousands of students to score exemptions in quantitative and numerical papers.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href={siteConfig.contact.whatsapp.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Connect with Manoj Sir</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#0F1B3D]">
              Our Educational Pillars
            </h2>
            <p className="text-xs md:text-sm text-[#0F1B3D]/70 mt-1">
              The principles that govern every lecture delivered at Elite Education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <Cpu className="w-8 h-8 text-[#C8A15A] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0F1B3D]">1. Structural Logic</h3>
              <p className="text-xs text-[#0F1B3D]/70 font-sans mt-2 leading-relaxed">
                Every calculation and legal section is derived from first principles. When you understand the logic, you can solve any twisted exam problem.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <Users className="w-8 h-8 text-[#C8A15A] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0F1B3D]">2. Micro Cohorts</h3>
              <p className="text-xs text-[#0F1B3D]/70 font-sans mt-2 leading-relaxed">
                Never more than 20–25 students per batch. You are an individual with personal doubts and aspirations, not a face in a 300-person hall.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <Target className="w-8 h-8 text-[#C8A15A] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0F1B3D]">3. Scanner Mastery</h3>
              <p className="text-xs text-[#0F1B3D]/70 font-sans mt-2 leading-relaxed">
                Comprehensive dissection of past 10 years exam scanners, RTPs, and suggested answers from ICAI, ICMAI, and ICSI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C8A15A]/25 shadow-xs">
              <Award className="w-8 h-8 text-[#C8A15A] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#0F1B3D]">4. Unconditional Doubt Support</h3>
              <p className="text-xs text-[#0F1B3D]/70 font-sans mt-2 leading-relaxed">
                Direct faculty access post-class and via dedicated messaging until every concept is crystal clear.
              </p>
            </div>
          </div>
        </section>

        {/* Campus & Infrastructure */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#F8F5EE] border border-[#C8A15A]/30">
            <div className="max-w-3xl">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1B3D]">
                Our Bhayandar East Campus
              </h3>
              <p className="text-xs md:text-sm text-[#0F1B3D]/75 mt-2 leading-relaxed font-sans">
                Located right opposite the Bus Depot on Navghar Road in Chandan Nagar, Bhayandar East. Our center offers high-comfort air-conditioned lecture studios, interactive smart digital boards, dedicated study cubicles, and an exhaustive physical library of ICAI/ICMAI publications.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
                  <span>2 Minutes Walk from Bhayandar East Bus Depot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
                  <span>High-Speed WiFi & Digital Class Recording</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
                  <span>Quiet Doubt Solving Cabins</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}


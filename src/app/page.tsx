import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MessageCircle,
  PlayCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getAllCourses } from "@/data/courses";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroParallaxSymbols } from "@/components/HeroParallaxSymbols";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedStatCounter } from "@/components/AnimatedStatCounter";
import { SubjectMarquee } from "@/components/SubjectMarquee";
import { CourseCard } from "@/components/CourseCard";
import { WhyEliteSection } from "@/components/WhyEliteSection";
import { FacultySpotlight } from "@/components/FacultySpotlight";
import { LearningJourneyTimeline } from "@/components/LearningJourneyTimeline";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  const allCourses = getAllCourses();
  // Pick featured preview courses across tracks
  const previewCourses = [
    allCourses.find((c) => c.id === "ca-foundation"),
    allCourses.find((c) => c.id === "ca-intermediate"),
    allCourses.find((c) => c.id === "cma-intermediate"),
    allCourses.find((c) => c.id === "maths-made-easy"),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col selection:bg-[#C8A15A] selection:text-white">
      {/* 1. Glass Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Floating Parallax Mathematical & Commerce Elements */}
          <HeroParallaxSymbols />

          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C8A15A]/35 text-[#0F1B3D] shadow-sm backdrop-blur-md mb-6 hover:border-[#C8A15A] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#C8A15A] animate-pulse" />
              <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold">
                {siteConfig.brand.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#0F1B3D] leading-[1.08]">
              Master CA, CMA & CS — <br className="hidden sm:inline" />
              <span className="text-gold-gradient font-normal italic">the Elite way.</span>
            </h1>

            {/* Hindi Accent Line */}
            <div className="mt-4 px-4 py-1.5 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/30">
              <p className="font-serif text-base sm:text-xl text-[#0F1B3D] italic font-semibold">
                &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
              </p>
            </div>

            {/* Sub-description */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#0F1B3D]/80 max-w-2xl font-sans leading-relaxed">
              Directed by <strong className="text-[#0F1B3D]">{siteConfig.brand.leadFaculty.name}</strong>.
              Engineered for conceptual clarity, rapid problem-solving tricks, and personal batch mentorship in Bhayandar East.
            </p>

            {/* Hero CTAs: Watch Free Demo / Enquire on WhatsApp */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href="/courses"
                variant="gold"
                size="lg"
                className="text-sm font-bold shadow-xl"
              >
                <PlayCircle className="w-4 h-4 fill-[#0F1B3D]" />
                <span>Watch Free Demo</span>
              </MagneticButton>

              <a
                href={siteConfig.contact.whatsapp.directLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-sans font-bold tracking-wide uppercase shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#0F1B3D]/70 font-sans">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
                <span>No Credit Card Required for Demo</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#C8A15A]" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8A15A]" />
                <span>Specialised CA / CMA / CS Faculty</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#C8A15A]" />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C8A15A]" />
                <span>20–25 Max Student Batches</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Trust Strip: Stats Counters */}
        <section className="relative py-12 bg-white/60 border-y border-[#C8A15A]/25 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {siteConfig.stats.map((stat, idx) => (
                <AnimatedStatCounter
                  key={idx}
                  target={stat.numericTarget}
                  suffix={stat.suffix}
                  label={stat.label}
                  caption={stat.caption}
                  placeholder={stat.placeholder}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Subject Marquee Banner */}
        <SubjectMarquee />

        {/* 4. Course Tracks Preview */}
        <section className="relative py-24 bg-[#FBF9F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
                  <span>Structured Excellence</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1B3D] tracking-tight">
                  Academic Tracks & Flagships
                </h2>
                <p className="mt-3 text-sm md:text-base text-[#0F1B3D]/70 font-sans max-w-xl">
                  Comprehensive curriculum designed for first-attempt success across Chartered Accountancy, Cost & Management, Company Secretaryship, and Foundation Skills.
                </p>
              </div>

              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase text-[#0F1B3D] hover:text-[#C8A15A] transition-colors self-start md:self-auto"
              >
                <span>View Full Catalogue (10+ Programs)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grid of Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewCourses.map((course) => course && (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Elite Education (Scroll-driven / interactive storytelling) */}
        <WhyEliteSection />

        {/* 6. Meet the Faculty: Prof. Er. Manoj Kumar */}
        <FacultySpotlight />

        {/* 7. Learning Journey Timeline (Enquire → Demo → Enrol → Learn → Test → Succeed) */}
        <LearningJourneyTimeline />

        {/* 8. Testimonials Carousel (Clearly marked placeholders) */}
        <TestimonialsCarousel />

        {/* 9. FAQ Accordion */}
        <FaqAccordion />

        {/* 10. Big CTA Band */}
        <CtaBand />
      </main>

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}

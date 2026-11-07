"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Sparkles, MapPin, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { MagneticButton } from "./MagneticButton";

export function CtaBand() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FBF9F4] to-[#F2EFE8] border-b border-[#C8A15A]/25 overflow-hidden">
      {/* Background radiant mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#C8A15A]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/20 border border-[#C8A15A]/40 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
          <span>New Admissions Active</span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
          Step Into the Next League of{" "}
          <span className="text-gold-gradient font-normal">Rankers & Achievers</span>
        </h2>

        <p className="mt-4 text-base md:text-lg font-serif italic text-[#C8A15A] font-semibold">
          &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
        </p>

        <p className="mt-4 text-sm md:text-base text-[#0F1B3D]/75 font-sans max-w-2xl mx-auto leading-relaxed">
          Reserve your seat in our upcoming cohort at Bhayandar East. Experience the clarity, confidence, and mathematical shortcuts of Elite Education.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="/courses"
            variant="gold"
            size="lg"
            className="text-sm font-bold shadow-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>Watch Free Demo Lecture</span>
          </MagneticButton>

          <a
            href={siteConfig.contact.whatsapp.directLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-sans font-bold tracking-wide uppercase transition-all shadow-md hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

        {/* Quick contact strip */}
        <div className="mt-12 pt-8 border-t border-[#C8A15A]/20 flex flex-wrap items-center justify-center gap-6 text-xs text-[#0F1B3D]/80">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C8A15A]" />
            <a href={`tel:${siteConfig.contact.phone.tel}`} className="font-medium hover:text-[#C8A15A]">
              Direct Desk: {siteConfig.contact.phone.display}
            </a>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A]" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C8A15A]" />
            <span>Navghar Rd, Opp. Bus Depot, Bhayandar East</span>
          </div>
        </div>
      </div>
    </section>
  );
}


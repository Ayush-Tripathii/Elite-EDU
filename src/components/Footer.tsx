"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

// Custom Facebook and Instagram icons with thin-line luxury look
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#F4EFE6] border-t border-[#C8A15A]/25 text-[#0F1B3D] overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      {/* Subtle gold radiant accent wash */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#C8A15A]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C8A15A]/20">
          
          {/* Col 1: Institute Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F1B3D] border border-[#C8A15A]/40 flex items-center justify-center shadow-md">
                <span className="font-serif text-[#C8A15A] text-xl font-bold">EE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-[#0F1B3D] tracking-tight">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C8A15A] font-semibold">
                  CA • CMA • CS Specialised
                </span>
              </div>
            </Link>

            <p className="text-sm font-sans text-[#0F1B3D]/80 leading-relaxed max-w-sm mt-1">
              {siteConfig.brand.tagline}. Directed by Prof. Er. Manoj Kumar — &ldquo;An Engineer by profession, a Teacher by passion.&rdquo;
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#C8A15A]/30 text-xs text-[#0F1B3D] max-w-sm">
              <Award className="w-4 h-4 text-[#C8A15A] shrink-0" />
              <span className="italic font-serif text-[#0F1B3D]/90">
                &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
              </span>
            </div>

            {/* Social Links (Strictly Facebook & Instagram ONLY) */}
            <div className="mt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0F1B3D]/60">
                Connect:
              </span>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#C8A15A]/30 flex items-center justify-center text-[#0F1B3D] hover:text-[#C8A15A] hover:border-[#C8A15A] transition-all shadow-sm"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#C8A15A]/30 flex items-center justify-center text-[#0F1B3D] hover:text-[#C8A15A] hover:border-[#C8A15A] transition-all shadow-sm"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#0F1B3D] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A15A]" />
              Academic Tracks
            </h3>
            <ul className="space-y-2 text-xs font-sans text-[#0F1B3D]/80">
              <li>
                <Link href="/courses#ca" className="hover:text-[#C8A15A] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#C8A15A]" />
                  <span>CA Foundation, Inter & Final</span>
                </Link>
              </li>
              <li>
                <Link href="/courses#cma" className="hover:text-[#C8A15A] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#C8A15A]" />
                  <span>CMA Foundation & Inter</span>
                </Link>
              </li>
              <li>
                <Link href="/courses#cs" className="hover:text-[#C8A15A] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#C8A15A]" />
                  <span>CSEET & CS Executive</span>
                </Link>
              </li>
              <li>
                <Link href="/courses#foundations" className="hover:text-[#C8A15A] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#C8A15A]" />
                  <span>Maths Made Easy (Manoj Sir)</span>
                </Link>
              </li>
              <li>
                <Link href="/courses#foundations" className="hover:text-[#C8A15A] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#C8A15A]" />
                  <span>Vedic Maths & Speed Tricks</span>
                </Link>
              </li>
              <li>
                <Link href="/courses#foundations" className="hover:text-[#C8A15A] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#C8A15A]" />
                  <span>English Grammar & Drafting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus & Contact Desk (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#0F1B3D] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A15A]" />
              Bhayandar Campus & Admissions
            </h3>

            <div className="space-y-3 text-xs font-sans text-[#0F1B3D]/80">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A15A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#0F1B3D]">
                    {siteConfig.contact.address.line1}
                  </p>
                  <p>{siteConfig.contact.address.area}</p>
                  <p>{siteConfig.contact.address.cityStateZip}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A15A] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.tel}`}
                  className="font-medium text-[#0F1B3D] hover:text-[#C8A15A] transition-colors"
                >
                  {siteConfig.contact.phone.display}
                </a>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                  Admissions Open
                </span>
              </div>

              {/* WhatsApp direct */}
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={siteConfig.contact.whatsapp.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0F1B3D] hover:text-emerald-700 transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp: {siteConfig.contact.whatsapp.display}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Greyscale / light styled mini interactive map */}
            <div className="mt-2 w-full h-28 rounded-2xl overflow-hidden border border-[#C8A15A]/30 relative shadow-sm">
              <iframe
                title="Elite Education Campus Location"
                src={siteConfig.contact.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(70%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={siteConfig.contact.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-sans font-bold text-[#0F1B3D] border border-[#C8A15A]/40 shadow hover:bg-[#0F1B3D] hover:text-white transition-all flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#0F1B3D]/70 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C8A15A]" />
            <span>
              &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Specialised CA Coaching • Bhayandar East</span>
            <span className="w-1 h-1 rounded-full bg-[#C8A15A]" />
            <Link href="/about" className="hover:text-[#C8A15A] transition-colors">
              Pedagogy & Faculty
            </Link>
            <span className="w-1 h-1 rounded-full bg-[#C8A15A]" />
            <Link href="/contact" className="hover:text-[#C8A15A] transition-colors">
              Campus Visit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-[#FBF9F4] border-b border-[#C8A15A]/25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1B3D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[#0F1B3D]/70 font-sans">
            Everything you need to know about admissions, batch structures, and demo lectures.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#C8A15A]/30 overflow-hidden shadow-xs transition-colors hover:border-[#C8A15A]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base md:text-lg font-bold text-[#0F1B3D]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#C8A15A]/40 flex items-center justify-center text-[#0F1B3D] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#C8A15A]/20" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-[#0F1B3D]/80 font-sans leading-relaxed border-t border-[#C8A15A]/15">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


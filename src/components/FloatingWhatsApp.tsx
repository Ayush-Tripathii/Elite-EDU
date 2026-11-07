"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive mini bubble */}
      {tooltipVisible && (
        <div className="relative mb-2 px-3 py-2 bg-white rounded-2xl shadow-xl border border-[#C8A15A]/30 text-xs text-[#0F1B3D] flex items-center gap-2 max-w-[220px] animate-bounce duration-1000">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="font-sans font-medium text-[11px] leading-tight">
            Need admissions help? Chat with our faculty desk.
          </span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-[#C8A15A]/30 transform rotate-45" />
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={siteConfig.contact.whatsapp.directLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Elite Education on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none group-hover:opacity-60" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
}


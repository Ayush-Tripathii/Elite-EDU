"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedStatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption?: string;
  placeholder: string;
  duration?: number;
}

export function AnimatedStatCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  caption,
  placeholder,
  duration = 2,
}: AnimatedStatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-[#C8A15A]/25 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-baseline gap-0.5">
        <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B3D] tracking-tight">
          {prefix}
          {isInView ? count.toLocaleString() : "0"}
          {suffix}
        </span>
      </div>

      <div className="mt-2 text-xs md:text-sm font-serif font-bold text-[#0F1B3D]">
        {label}
      </div>

      {caption && (
        <div className="mt-1 text-[11px] font-sans text-[#0F1B3D]/70 max-w-[180px] leading-tight">
          {caption}
        </div>
      )}

      {/* Clearly marked placeholder indicator */}
      <span className="mt-2 text-[9px] font-mono uppercase tracking-wider text-[#C8A15A] px-2 py-0.5 rounded-full bg-[#C8A15A]/10 border border-[#C8A15A]/20">
        Config: {placeholder}
      </span>
    </div>
  );
}


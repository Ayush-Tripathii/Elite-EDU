"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SymbolItem {
  id: string;
  char: string;
  label?: string;
  top: string;
  left: string;
  size: string;
  color: string;
  delay: number;
  duration: number;
  factor: number;
}

const symbolsList: SymbolItem[] = [
  { id: "sum", char: "∑", label: "Sigma", top: "18%", left: "12%", size: "text-4xl md:text-5xl", color: "text-[#C8A15A]/60", delay: 0, duration: 6, factor: 25 },
  { id: "integral", char: "∫", label: "Calculus", top: "25%", left: "84%", size: "text-5xl md:text-6xl", color: "text-[#0F1B3D]/30", delay: 1, duration: 7, factor: -20 },
  { id: "rupee", char: "₹", label: "Accounting", top: "68%", left: "8%", size: "text-4xl md:text-5xl", color: "text-[#C8A15A]/50", delay: 1.5, duration: 5.5, factor: 30 },
  { id: "percent", char: "%", label: "Taxation", top: "72%", left: "88%", size: "text-3xl md:text-4xl", color: "text-[#0F1B3D]/25", delay: 0.5, duration: 8, factor: -25 },
  { id: "pi", char: "π", label: "Geometry", top: "12%", left: "45%", size: "text-3xl md:text-4xl", color: "text-[#C8A15A]/40", delay: 2, duration: 6.5, factor: 15 },
  { id: "grade", char: "A+", label: "Distinction", top: "45%", left: "92%", size: "text-2xl md:text-3xl", color: "text-[#C8A15A]/70 font-bold", delay: 0.8, duration: 7.2, factor: -18 },
  { id: "delta", char: "Δ", label: "Variance", top: "55%", left: "5%", size: "text-3xl md:text-4xl", color: "text-[#0F1B3D]/30", delay: 1.2, duration: 6.8, factor: 22 },
];

export function HeroParallaxSymbols() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Soft animated gradient mesh blobs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#C8A15A]/12 via-[#E8D6B5]/20 to-transparent rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#0F1B3D]/5 via-[#DCE8F2]/30 to-transparent rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#C8A15A]/8 rounded-full blur-3xl" />

      {/* Parallax Floating Mathematical & Commerce Symbols */}
      {symbolsList.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute font-serif ${item.size} ${item.color} hidden sm:flex items-center justify-center filter drop-shadow-sm`}
          style={{
            top: item.top,
            left: item.left,
          }}
          animate={{
            x: mouseOffset.x * item.factor,
            y: mouseOffset.y * item.factor,
            rotate: mouseOffset.x * (item.factor > 0 ? 8 : -8),
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 90,
            mass: 0.5,
          }}
        >
          <span>{item.char}</span>
        </motion.div>
      ))}
    </div>
  );
}


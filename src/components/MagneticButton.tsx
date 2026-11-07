"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-[#0F1B3D] text-[#FBF9F4] hover:bg-[#182852] border border-[#0F1B3D] shadow-md hover:shadow-lg hover:shadow-[#0F1B3D]/10",
    gold: "bg-gradient-to-r from-[#B89248] via-[#C8A15A] to-[#DFBA75] text-[#0F1B3D] font-bold shadow-md hover:shadow-xl hover:shadow-[#C8A15A]/25 border border-[#C8A15A]",
    outline:
      "bg-transparent text-[#0F1B3D] border border-[#C8A15A]/50 hover:border-[#C8A15A] hover:bg-[#C8A15A]/10",
    ghost:
      "bg-transparent text-[#0F1B3D] hover:bg-slate-100/60 border border-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-full",
    md: "px-6 py-3 text-sm rounded-full",
    lg: "px-8 py-4 text-base rounded-full",
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.1 }}
      className={`inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 shine-sweep cursor-pointer select-none group ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span className="relative z-10 flex items-center gap-2 font-medium">
        {children}
      </span>
    </motion.div>
  );

  if (href && !disabled) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block bg-transparent p-0 border-none outline-none focus:outline-none"
    >
      {content}
    </button>
  );
}


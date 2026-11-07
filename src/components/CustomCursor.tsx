"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "play">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop/laptops), not touch devices
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target has custom cursor hints
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr === "play") {
        setCursorVariant("play");
        setCursorText("PLAY");
      } else if (cursorAttr === "view") {
        setCursorVariant("view");
        setCursorText("VIEW");
      } else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isExpanded = cursorVariant === "view" || cursorVariant === "play";

  return (
    <>
      {/* Center sharp navy dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-[#0F1B3D]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isExpanded ? 0 : 1,
          scale: cursorVariant === "hover" ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
        style={{ width: 8, height: 8 }}
      />

      {/* Trailing luxury champagne gold ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border border-[#C8A15A] flex items-center justify-center font-sans font-semibold tracking-wider text-[9px] text-[#0F1B3D] backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - (isExpanded ? 32 : cursorVariant === "hover" ? 22 : 16),
          y: mousePosition.y - (isExpanded ? 32 : cursorVariant === "hover" ? 22 : 16),
          width: isExpanded ? 64 : cursorVariant === "hover" ? 44 : 32,
          height: isExpanded ? 64 : cursorVariant === "hover" ? 44 : 32,
          backgroundColor: isExpanded
            ? "rgba(200, 161, 90, 0.25)"
            : cursorVariant === "hover"
            ? "rgba(200, 161, 90, 0.12)"
            : "rgba(200, 161, 90, 0.04)",
          borderColor: isExpanded ? "#C8A15A" : "rgba(200, 161, 90, 0.6)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 220, mass: 0.2 }}
      >
        {cursorText}
      </motion.div>
    </>
  );
}


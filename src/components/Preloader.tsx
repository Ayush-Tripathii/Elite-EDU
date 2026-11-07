"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if shown in current session
    const hasLoaded = sessionStorage.getItem("ee_preloader_seen");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("ee_preloader_seen", "true");
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FBF9F4] select-none"
        >
          {/* Subtle noise grain */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

          {/* Golden monogram SVG with drawing stroke animation */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-36 h-36 flex items-center justify-center"
            >
              {/* Gold outer radiant ring */}
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="rgba(200, 161, 90, 0.2)"
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#C8A15A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ pathLength: 1, rotate: 270 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  style={{ transformOrigin: "60px 60px" }}
                />

                {/* Monogram EE Interlocked Stylized Path */}
                {/* First E */}
                <motion.path
                  d="M 40 38 L 56 38 M 40 38 L 40 82 M 40 60 L 52 60 M 40 82 L 56 82"
                  fill="none"
                  stroke="#0F1B3D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
                />

                {/* Second E in Gold */}
                <motion.path
                  d="M 64 38 L 80 38 M 64 38 L 64 82 M 64 60 L 76 60 M 64 82 L 80 82"
                  fill="none"
                  stroke="#C8A15A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            {/* Brand text reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-6 text-center"
            >
              <h1 className="text-xl md:text-2xl font-serif tracking-[0.25em] text-[#0F1B3D] uppercase font-bold">
                Elite Education
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A15A] mt-1 font-sans font-medium">
                CA • CMA • CS
              </p>
            </motion.div>

            {/* Subtle progress bar */}
            <motion.div
              className="w-48 h-[2px] bg-slate-200 mt-6 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#0F1B3D] via-[#C8A15A] to-[#DFBA75]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


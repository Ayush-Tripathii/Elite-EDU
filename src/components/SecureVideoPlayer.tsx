"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  MessageCircle,
  UserPlus,
  RotateCcw,
  SkipForward,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useAuth } from "@/context/AuthContext";
import { SecuredLecture } from "@/app/api/courses/[slug]/lectures/route";

interface SecureVideoPlayerProps {
  courseSlug: string;
  courseTitle: string;
  courseId: string;
  lecture: SecuredLecture;
  onNextLecture?: () => void;
  hasNextLecture?: boolean;
}

export function SecureVideoPlayer({
  courseSlug,
  courseTitle,
  courseId,
  lecture,
  onNextLecture,
  hasNextLecture = false,
}: SecureVideoPlayerProps) {
  const { user, updateWatchProgress } = useAuth();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showEndCard, setShowEndCard] = useState(false);
  const [progressSec, setProgressSec] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // If locked, reset states
  const isLocked = lecture.access === "locked" || !lecture.youtubeId;

  // Track progress periodically if playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isLocked) {
      interval = setInterval(() => {
        setProgressSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isLocked]);

  // Sync progress periodically outside state updater
  useEffect(() => {
    if (progressSec > 0 && progressSec % 5 === 0) {
      updateWatchProgress(courseId, lecture.order, progressSec);
    }
  }, [progressSec, courseId, lecture.order, updateWatchProgress]);

  // Send postMessage commands to YouTube IFrame API safely
  const sendIframeCommand = (command: string, args: unknown[] = []) => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args }),
      "*"
    );
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendIframeCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendIframeCommand("playVideo");
      setIsPlaying(true);
      setShowEndCard(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      sendIframeCommand("unMute");
      setIsMuted(false);
    } else {
      sendIframeCommand("mute");
      setIsMuted(true);
    }
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const markAsComplete = () => {
    updateWatchProgress(courseId, lecture.order, progressSec || 1800, true);
    setShowEndCard(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#0A1124] border border-[#C8A15A]/30 shadow-2xl flex items-center justify-center select-none"
    >
      {/* 1. LOCKED OVERLAY (Logged-out visitors or locked lectures) */}
      {isLocked ? (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0F1B3D]/95 via-[#1A2E63]/90 to-[#0F1B3D]/98 backdrop-blur-xl">
          {/* Subtle noise */}
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

          {/* Golden radiant ring */}
          <div className="w-16 h-16 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/40 flex items-center justify-center mb-4 shadow-lg shadow-[#C8A15A]/10">
            <Lock className="w-7 h-7 text-[#C8A15A]" />
          </div>

          <div className="max-w-md mx-auto space-y-2 relative z-10">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C8A15A] font-semibold">
              {lecture.lockReason === "signup_required"
                ? "Free Student Preview"
                : "Enrolled Cohort Lecture"}
            </span>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#FBF9F4] leading-tight">
              {lecture.title}
            </h3>

            <p className="text-xs md:text-sm text-[#FBF9F4]/70 font-sans leading-relaxed pt-1">
              {lecture.lockReason === "signup_required"
                ? "This course is open for demonstration. Create a free student account to instantly unlock and stream the flagship demo lecture."
                : "This full syllabus lecture is reserved for enrolled students. Enquire with Prof. Manoj Sir to unlock complete batch access."}
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 relative z-10">
            {lecture.lockReason === "signup_required" ? (
              <>
                <Link
                  href="/signup"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B89248] via-[#C8A15A] to-[#DFBA75] text-[#0F1B3D] text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up Free to Watch Demo</span>
                </Link>
                <Link
                  href="/login"
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF9F4] text-xs font-medium tracking-wide border border-white/20 transition-colors"
                >
                  Existing Student Login
                </Link>
              </>
            ) : (
              <>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.number}?text=${encodeURIComponent(
                    `Hi, I want to unlock the full course "${courseTitle}" at Elite Education. Please share the enrollment procedure.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enrol via WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-full bg-[#C8A15A]/20 hover:bg-[#C8A15A]/30 text-[#DFBA75] text-xs font-medium border border-[#C8A15A]/40 transition-colors"
                >
                  Campus Enquiry
                </Link>
              </>
            )}
          </div>

          <div className="mt-6 flex items-center gap-2 text-[11px] text-[#FBF9F4]/50">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8A15A]" />
            <span>Official Elite Education Stream • No public links</span>
          </div>
        </div>
      ) : (
        /* 2. UNLOCKED EMBED WITH BRANDED LAYER */
        <>
          {/* YouTube Embed via youtube-nocookie with custom controls hiding */}
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${lecture.youtubeId}?enablejsapi=1&rel=0&modestbranding=1&controls=0&showinfo=0&disablekb=0&iv_load_policy=3&playsinline=1`}
            title={lecture.title}
            className="w-full h-full border-0 pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Top Branded Bar (No YouTube channel/branding visible) */}
          <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-[#0F1B3D]/90 via-[#0F1B3D]/40 to-transparent flex items-center justify-between text-white pointer-events-auto z-20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A15A] animate-pulse" />
              <span className="font-serif text-xs font-bold tracking-wider text-[#C8A15A] uppercase">
                Elite Education
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/90 font-medium truncate max-w-[200px] sm:max-w-md">
                {lecture.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-[#C8A15A]/20 border border-[#C8A15A]/40 text-[#DFBA75] text-[10px] font-semibold tracking-wider uppercase">
                HD Masterclass
              </span>
            </div>
          </div>

          {/* End Card Overlay when lecture concludes */}
          {showEndCard && (
            <div className="absolute inset-0 z-30 bg-[#0F1B3D]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>

              <h4 className="font-serif text-xl font-bold">Lecture Completed</h4>
              <p className="text-xs text-white/70 max-w-sm mt-1">
                You&apos;ve completed &ldquo;{lecture.title}&rdquo;. Continue your journey towards ranker excellence.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => {
                    setShowEndCard(false);
                    sendIframeCommand("seekTo", [0, true]);
                    sendIframeCommand("playVideo");
                    setIsPlaying(true);
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium border border-white/20 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay</span>
                </button>

                {hasNextLecture && onNextLecture ? (
                  <button
                    onClick={() => {
                      setShowEndCard(false);
                      onNextLecture();
                    }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B89248] via-[#C8A15A] to-[#DFBA75] text-[#0F1B3D] text-xs font-bold flex items-center gap-1.5 shadow-lg"
                  >
                    <span>Next Lecture</span>
                    <SkipForward className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href={siteConfig.contact.whatsapp.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Contact Faculty Desk</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Bottom Custom Control Bar (Ivory/Navy/Gold Styled) */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0F1B3D]/95 via-[#0F1B3D]/60 to-transparent flex flex-col gap-2 pointer-events-auto z-20">
            {/* Custom Gold Progress Bar */}
            <div className="w-full h-1.5 bg-white/20 hover:h-2.5 transition-all rounded-full overflow-hidden cursor-pointer relative group">
              <div
                className="h-full bg-gradient-to-r from-[#C8A15A] to-[#DFBA75] rounded-full transition-all"
                style={{
                  width: `${Math.min(100, Math.max(5, (progressSec / 1800) * 100))}%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs pt-1">
              {/* Play / Pause / Next buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-[#C8A15A] hover:bg-[#DFBA75] text-[#0F1B3D] flex items-center justify-center shadow-md transition-transform active:scale-95"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-[#0F1B3D]" />
                  ) : (
                    <Play className="w-4 h-4 fill-[#0F1B3D] ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 text-white/80 hover:text-white transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[11px] text-white/70 font-mono">
                  {Math.floor(progressSec / 60)}:
                  {String(progressSec % 60).padStart(2, "0")} / {lecture.duration}
                </span>
              </div>

              {/* Mark Complete & Fullscreen */}
              <div className="flex items-center gap-3">
                <button
                  onClick={markAsComplete}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[10px] text-white/90 border border-white/20 font-medium transition-colors hidden sm:inline-flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Mark Done</span>
                </button>

                {hasNextLecture && onNextLecture && (
                  <button
                    onClick={onNextLecture}
                    className="p-1.5 text-white/80 hover:text-[#C8A15A] transition-colors"
                    title="Next Lecture"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={handleFullscreen}
                  className="p-1.5 text-white/80 hover:text-white transition-colors"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { siteConfig } from "@/config/siteConfig";

export default function SignupPage() {
  const router = useRouter();
  const { signup, loginWithGoogle } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courseInterest: "ca-foundation",
    city: "Bhayandar East",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    const res = await signup(formData);
    setLoading(false);
    if (res.success) {
      router.push("/courses");
    } else {
      setErrorMsg(res.error || "Failed to create account.");
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    const res = await loginWithGoogle();
    setLoading(false);
    if (res.success) {
      router.push("/courses");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] flex items-stretch">
      {/* Left Artwork Column */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#0F1B3D] via-[#1A2E63] to-[#0F1B3D] p-12 text-white flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

        {/* Ambient gold radiant circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#C8A15A]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#C8A15A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#0F1B3D] border border-[#C8A15A]/50 flex items-center justify-center">
              <span className="font-serif text-[#C8A15A] text-xl font-bold">EE</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              {siteConfig.brand.name}
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md my-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/20 border border-[#C8A15A]/40 text-[#DFBA75] text-xs font-sans font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Free Demo Access</span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
            Start Your Journey to <br />
            <span className="text-gold-gradient font-normal italic">Ranker Precision</span>
          </h2>

          <p className="font-serif text-base italic text-[#DFBA75]">
            &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-white/80 font-sans">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
              <span>Instant unlock of Lecture 1 across all 10+ course tracks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
              <span>Full syllabus breakdowns & scanner analysis</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#C8A15A]" />
              <span>Direct faculty mentorship access in Bhayandar East</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t border-white/10 text-xs text-white/60">
          Navghar Road, Opp. Bus Depot, Bhayandar East • +91 79000 96857
        </div>
      </div>

      {/* Right Form Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
        <div className="w-full max-w-md space-y-6 my-auto">
          {/* Top Brand for mobile */}
          <div className="flex lg:hidden items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0F1B3D] flex items-center justify-center text-[#C8A15A] font-bold">
                EE
              </div>
              <span className="font-serif text-lg font-bold text-[#0F1B3D]">
                {siteConfig.brand.name}
              </span>
            </Link>
            <Link href="/" className="text-xs text-[#0F1B3D]/70 hover:text-[#C8A15A]">
              Back to Home
            </Link>
          </div>

          <div>
            <h1 className="font-serif text-3xl font-bold text-[#0F1B3D]">
              Create Free Account
            </h1>
            <p className="text-xs sm:text-sm text-[#0F1B3D]/70 font-sans mt-1">
              Join Elite Education to unlock instant streaming of all demo lectures.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Priya Shah"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                  Mobile (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="priya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                  Primary Course Interest
                </label>
                <select
                  value={formData.courseInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, courseInterest: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                >
                  <option value="ca-foundation">CA Foundation</option>
                  <option value="ca-intermediate">CA Intermediate</option>
                  <option value="ca-final">CA Final</option>
                  <option value="cma-foundation">CMA Foundation</option>
                  <option value="cma-intermediate">CMA Intermediate</option>
                  <option value="cma-final">CMA Final</option>
                  <option value="cseet">CSEET (CS)</option>
                  <option value="cs-executive">CS Executive</option>
                  <option value="maths-made-easy">Maths Made Easy (Manoj Sir)</option>
                  <option value="vedic-maths-speed-tricks">Vedic Maths</option>
                  <option value="aptitude-maths-competitive">Quantitative Aptitude</option>
                  <option value="english-grammar-made-easy">English Grammar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                  City / Area
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bhayandar East / Mumbai"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#B89248] via-[#C8A15A] to-[#DFBA75] text-[#0F1B3D] text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-xl hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{loading ? "Creating..." : "Create Account & Unlock Demos"}</span>
            </button>
          </form>

          {/* Quick Google Sign Up option */}
          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#C8A15A]/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase font-sans">
              <span className="bg-[#FBF9F4] px-3 text-[#0F1B3D]/60 font-semibold">
                Or Continue With
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full py-2.5 rounded-full bg-white hover:bg-slate-50 border border-[#C8A15A]/30 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wide transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Sign up with Google</span>
          </button>

          <div className="text-center text-xs text-[#0F1B3D]/70 pt-2">
            Already registered?{" "}
            <Link
              href="/login"
              className="font-bold text-[#0F1B3D] hover:text-[#C8A15A] underline underline-offset-4"
            >
              Sign in to your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  KeyRound,
  GraduationCap,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { siteConfig } from "@/config/siteConfig";

export default function LoginPage() {
  const router = useRouter();
  const { loginWithEmail, loginWithGoogle, requestPhoneOtp, verifyPhoneOtp } = useAuth();

  const [authMethod, setAuthMethod] = useState<"otp" | "email">("otp");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handlePhoneRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    const res = await requestPhoneOtp(phone);
    setLoading(false);
    if (res.success) {
      setOtpSent(true);
      setOtp("123456"); // Pre-populate demo code for immediate testing
    }
  };

  const handlePhoneVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const res = await verifyPhoneOtp(phone, otp);
    setLoading(false);
    if (res.success) {
      router.push("/dashboard");
    } else {
      setErrorMsg(res.error || "Verification failed.");
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Please enter your email.");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    const res = await loginWithEmail(email, password);
    setLoading(false);
    if (res.success) {
      router.push("/dashboard");
    } else {
      setErrorMsg("Login failed.");
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const res = await loginWithGoogle();
    setLoading(false);
    if (res.success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] flex items-stretch">
      {/* Split Left Column: Animated Brand Artwork Canvas */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#0F1B3D] via-[#1A2E63] to-[#0F1B3D] p-12 text-white flex-col justify-between overflow-hidden">
        {/* Subtle noise */}
        <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

        {/* Ambient gold blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C8A15A]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C8A15A]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Brand Header */}
        <div className="relative z-10 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#0F1B3D] border border-[#C8A15A]/50 flex items-center justify-center">
              <span className="font-serif text-[#C8A15A] text-xl font-bold">EE</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              {siteConfig.brand.name}
            </span>
          </Link>
        </div>

        {/* Mid Hero Quote */}
        <div className="relative z-10 max-w-md my-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/20 border border-[#C8A15A]/40 text-[#DFBA75] text-xs font-sans font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student & Faculty Portal</span>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
            Elevating Commerce to an{" "}
            <span className="text-gold-gradient font-normal italic">Art Form</span>
          </h2>

          <p className="font-serif text-base italic text-[#DFBA75]">
            &ldquo;{siteConfig.brand.hindiSubline}&rdquo;
          </p>

          <p className="text-xs text-white/70 font-sans leading-relaxed">
            Access your registered demo lectures, chapter-wise recordings, and study scanners curated by Prof. Er. Manoj Kumar.
          </p>
        </div>

        {/* Bottom Faculty Stamp */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
          <span>Prof. Er. Manoj Kumar</span>
          <span>Bhayandar East, Mira Bhayandar</span>
        </div>
      </div>

      {/* Split Right Column: Interactive Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="w-full max-w-md space-y-8">
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
              Student Login
            </h1>
            <p className="text-xs sm:text-sm text-[#0F1B3D]/70 font-sans mt-1">
              Sign in to stream demo lectures and track your course syllabus.
            </p>
          </div>

          {/* Quick Method Switch Tabs: Phone OTP vs Email */}
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-white border border-[#C8A15A]/30">
            <button
              onClick={() => {
                setAuthMethod("otp");
                setErrorMsg("");
              }}
              className={`py-2 text-xs font-sans font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                authMethod === "otp"
                  ? "bg-[#0F1B3D] text-[#FBF9F4] shadow-xs"
                  : "text-[#0F1B3D]/70 hover:text-[#0F1B3D]"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Mobile OTP (Preferred)</span>
            </button>

            <button
              onClick={() => {
                setAuthMethod("email");
                setErrorMsg("");
              }}
              className={`py-2 text-xs font-sans font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                authMethod === "email"
                  ? "bg-[#0F1B3D] text-[#FBF9F4] shadow-xs"
                  : "text-[#0F1B3D]/70 hover:text-[#0F1B3D]"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email & Admin</span>
            </button>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {errorMsg}
            </div>
          )}

          {/* Form Method 1: Phone OTP */}
          {authMethod === "otp" && (
            <div className="space-y-4">
              {!otpSent ? (
                <form onSubmit={handlePhoneRequest} className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                      Mobile Number (WhatsApp)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-[#0F1B3D]/60">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98200 12345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#0F1B3D] hover:bg-[#1A2E63] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{loading ? "Sending OTP..." : "Send Verification OTP"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A15A]" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handlePhoneVerify} className="space-y-4">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                    6-digit code sent to +91 {phone}. For demo testing, code is <strong>123456</strong>.
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                      Enter 6-Digit OTP
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-3 text-center tracking-[0.5em] font-mono text-lg rounded-2xl bg-white border border-[#C8A15A]/30 text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#0F1B3D] hover:bg-[#1A2E63] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{loading ? "Verifying..." : "Verify & Continue"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="w-full text-center text-xs text-[#0F1B3D]/60 hover:text-[#0F1B3D]"
                  >
                    Change Phone Number
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Form Method 2: Email & Password / Admin Login */}
          {authMethod === "email" && (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. admin@eliteeducation.co.in or your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#C8A15A]/30 text-xs md:text-sm text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-[#0F1B3D]/60">Tip: Use admin@eliteeducation.co.in for admin access</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-[#0F1B3D] hover:bg-[#1A2E63] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{loading ? "Signing in..." : "Sign In with Email"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8A15A]" />
              </button>
            </form>
          )}

          {/* Google 1-Click Login Divider */}
          <div className="relative py-2">
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
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3 rounded-full bg-white hover:bg-slate-50 border border-[#C8A15A]/30 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wide transition-all shadow-xs flex items-center justify-center gap-2.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>

          {/* Link to Sign Up */}
          <div className="text-center text-xs text-[#0F1B3D]/70 pt-4">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-bold text-[#0F1B3D] hover:text-[#C8A15A] underline underline-offset-4"
            >
              Sign up free for demo access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


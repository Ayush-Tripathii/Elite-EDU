"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  GraduationCap,
  Sparkles,
  ArrowRight,
  LogOut,
  LayoutDashboard,
  ShieldAlert,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useAuth } from "@/context/AuthContext";
import { MagneticButton } from "./MagneticButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-nav shadow-sm shadow-[#0F1B3D]/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group select-none">
              <div className="relative w-10 h-10 rounded-xl bg-[#0F1B3D] border border-[#C8A15A]/40 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                <span className="font-serif text-[#C8A15A] text-xl font-bold tracking-tighter">
                  EE
                </span>
                <div className="absolute -inset-[1px] rounded-xl border border-[#C8A15A]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg md:text-xl font-bold text-[#0F1B3D] tracking-tight group-hover:text-[#C8A15A] transition-colors">
                    {siteConfig.brand.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A]" />
                </div>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C8A15A] font-medium hidden sm:inline-block">
                  CA • CMA • CS Specialised
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C8A15A]/25 shadow-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-sans tracking-wide uppercase transition-colors rounded-full ${
                      isActive
                        ? "text-[#0F1B3D] font-semibold"
                        : "text-[#0F1B3D]/70 hover:text-[#0F1B3D]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-[#C8A15A]/15 border border-[#C8A15A]/30 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Auth & CTA Right Wing */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F1B3D]/5 hover:bg-[#0F1B3D]/10 text-[#0F1B3D] text-xs font-sans font-medium border border-[#0F1B3D]/10 transition-colors"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 text-[#C8A15A]" />
                    <span>Dashboard</span>
                  </Link>

                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/40 text-[#0F1B3D] text-xs font-sans font-medium"
                      title="Admin Control Panel"
                    >
                      <ShieldAlert className="w-3.5 h-3.5 text-[#C8A15A]" />
                      <span>Admin</span>
                    </Link>
                  )}

                  <button
                    onClick={logout}
                    title="Log Out"
                    className="p-2 text-[#0F1B3D]/60 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-3 py-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#0F1B3D] hover:text-[#C8A15A] transition-colors flex items-center gap-1"
                >
                  <User className="w-3.5 h-3.5 text-[#C8A15A]" />
                  <span>Login</span>
                </Link>
              )}

              {/* Start Free Demo Gold CTA */}
              <MagneticButton
                href={user ? "/courses" : "/signup"}
                variant="gold"
                size="sm"
                className="text-xs tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{user ? "Explore Lectures" : "Start Free Demo"}</span>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center gap-2">
              {user && (
                <Link
                  href="/dashboard"
                  className="p-2 rounded-full bg-[#0F1B3D]/5 text-[#0F1B3D]"
                  aria-label="Dashboard"
                >
                  <LayoutDashboard className="w-4 h-4 text-[#C8A15A]" />
                </Link>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white border border-[#C8A15A]/30 text-[#0F1B3D] shadow-sm"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#FBF9F4]/98 backdrop-blur-xl border-b border-[#C8A15A]/30 shadow-xl px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="text-xs uppercase font-sans tracking-widest text-[#C8A15A] font-semibold mb-1">
                Navigation
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-sans font-medium border-b border-[#C8A15A]/15 ${
                    pathname === link.href ? "text-[#C8A15A] font-semibold" : "text-[#0F1B3D]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                {user ? (
                  <>
                    <div className="p-3 rounded-xl bg-white border border-[#C8A15A]/25 text-xs text-[#0F1B3D]">
                      <div className="font-bold">{user.name}</div>
                      <div className="text-xs text-[#0F1B3D]/70">{user.email}</div>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-2.5 rounded-full bg-[#0F1B3D] text-white text-center text-sm font-medium"
                    >
                      Go to Student Dashboard
                    </Link>
                    {user.role === "admin" && (
                      <Link
                        href="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full py-2.5 rounded-full bg-[#C8A15A]/20 text-[#0F1B3D] text-center text-sm font-medium border border-[#C8A15A]"
                      >
                        Admin Control Panel
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2 text-xs text-red-600 font-medium"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#B89248] via-[#C8A15A] to-[#DFBA75] text-[#0F1B3D] text-center text-sm font-bold shadow-md flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Start Free Demo</span>
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full py-2.5 rounded-full bg-white border border-[#0F1B3D]/20 text-[#0F1B3D] text-center text-sm font-medium"
                    >
                      Login to Existing Account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


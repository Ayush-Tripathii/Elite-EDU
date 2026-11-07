"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courseInterest: "ca-foundation",
    city: "Bhayandar East",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please enter your name and phone number.");
      return;
    }

    try {
      setSubmitting(true);
      setErrorMsg("");
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("Failed to submit enquiry. Please call or WhatsApp us directly.");
      }
    } catch {
      setErrorMsg("An unexpected error occurred. Please contact us via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span>Campus Admissions Desk</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
              Get in Touch with Our{" "}
              <span className="text-gold-gradient font-normal italic">Faculty Desk</span>
            </h1>

            <p className="mt-3 text-sm md:text-base text-[#0F1B3D]/75 font-sans leading-relaxed">
              Have questions regarding batch timings, demo lectures, or CA/CMA preparation strategy? We are here to guide you.
            </p>
          </div>
        </section>

        {/* Form + Direct Channels Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Contact Info & Direct Links (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-8 rounded-3xl bg-white border border-[#C8A15A]/35 shadow-md flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F1B3D]">
                    Bhayandar East Campus
                  </h3>
                  <p className="text-xs text-[#0F1B3D]/70 font-sans mt-1">
                    Walk-in counselling available Monday to Sunday.
                  </p>
                </div>

                <div className="space-y-4 text-xs md:text-sm font-sans">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0F1B3D]/5 text-[#C8A15A] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#0F1B3D] block">Address:</strong>
                      <p className="text-[#0F1B3D]/80 leading-relaxed mt-0.5">
                        {siteConfig.contact.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0F1B3D]/5 text-[#C8A15A] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#0F1B3D] block">Direct Phone:</strong>
                      <a
                        href={`tel:${siteConfig.contact.phone.tel}`}
                        className="text-[#0F1B3D] hover:text-[#C8A15A] font-medium"
                      >
                        {siteConfig.contact.phone.display}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#0F1B3D] block">WhatsApp Admissions:</strong>
                      <a
                        href={siteConfig.contact.whatsapp.directLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline font-medium inline-flex items-center gap-1"
                      >
                        <span>{siteConfig.contact.whatsapp.display}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0F1B3D]/5 text-[#C8A15A] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#0F1B3D] block">Office Hours:</strong>
                      <p className="text-[#0F1B3D]/80">9:00 AM – 8:00 PM (All 7 Days)</p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout Pill */}
                <div className="mt-2 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>Instant Query on WhatsApp</span>
                  </div>
                  <p className="text-emerald-800 text-[11px] leading-relaxed">
                    Prefer direct chat? Click below to start a prefilled enquiry with our admissions mentor.
                  </p>
                  <a
                    href={siteConfig.contact.whatsapp.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#20ba5a] transition-colors"
                  >
                    <span>Chat Now on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#C8A15A]/35 shadow-lg">
                <h3 className="font-serif text-2xl font-bold text-[#0F1B3D]">
                  Send an Admission Enquiry
                </h3>
                <p className="text-xs md:text-sm text-[#0F1B3D]/70 font-sans mt-1">
                  Fill in your details below and our lead coordinator will call you back within 2 business hours.
                </p>

                {submitted ? (
                  <div className="my-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
                    <h4 className="font-serif text-lg font-bold text-emerald-900">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs text-emerald-800 max-w-sm mt-1">
                      Thank you for contacting Elite Education. Our faculty team will reach out to your phone ({formData.phone}) shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          courseInterest: "ca-foundation",
                          city: "Bhayandar East",
                          message: "",
                        });
                      }}
                      className="mt-4 px-4 py-2 rounded-full bg-emerald-700 text-white text-xs font-medium"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98200 12345"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. student@gmail.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                          Area / City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Bhayandar East / Mira Road"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                        Course Track of Interest
                      </label>
                      <select
                        value={formData.courseInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, courseInterest: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                      >
                        <option value="ca-foundation">CA Foundation Comprehensive</option>
                        <option value="ca-intermediate">CA Intermediate (Group 1 & 2)</option>
                        <option value="ca-final">CA Final Specialized Prep</option>
                        <option value="cma-foundation">CMA Foundation</option>
                        <option value="cma-intermediate">CMA Intermediate</option>
                        <option value="cma-final">CMA Final</option>
                        <option value="cseet">CSEET (CS Entrance)</option>
                        <option value="cs-executive">CS Executive</option>
                        <option value="maths-made-easy">Maths Made Easy (Manoj Sir)</option>
                        <option value="vedic-maths-speed-tricks">Vedic Maths & Speed Tricks</option>
                        <option value="aptitude-maths-competitive">Quantitative Aptitude</option>
                        <option value="english-grammar-made-easy">English Grammar Made Easy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-[#0F1B3D] mb-1">
                        Any Specific Query / Previous Background
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. I need morning batch details, and want to attend a demo lecture for Quantitative Aptitude."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F4] border border-[#C8A15A]/30 text-xs text-[#0F1B3D] focus:border-[#C8A15A] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-full bg-[#0F1B3D] hover:bg-[#1A2E63] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C8A15A]" />
                      <span>{submitting ? "Sending..." : "Submit Enquiry"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Embedded Greyscale / Light Styled Google Map Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-[#C8A15A]/35 p-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#C8A15A]/20 gap-3">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#0F1B3D]">
                  Campus Location Map
                </h4>
                <p className="text-xs text-[#0F1B3D]/70 font-sans">
                  Coordinates: 19.3122497, 72.8534029 • Navghar Road, Opp. Bus Depot, Bhayandar East
                </p>
              </div>

              <a
                href={siteConfig.contact.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#0F1B3D] text-[#C8A15A] text-xs font-sans font-bold tracking-wider uppercase flex items-center gap-1.5 self-start sm:self-auto hover:bg-[#1A2E63] transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-4 w-full h-[380px] rounded-2xl overflow-hidden border border-[#C8A15A]/20 relative shadow-inner">
              <iframe
                title="Elite Education Detailed Campus Location"
                src={siteConfig.contact.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(65%) contrast(95%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}


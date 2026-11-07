"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, BookOpen } from "lucide-react";
import { getAllCourses, Course } from "@/data/courses";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const filterTabs = [
  { id: "all", label: "All Programs" },
  { id: "CA", label: "CA (Specialised)" },
  { id: "CMA", label: "CMA Track" },
  { id: "CS", label: "CS Track" },
  { id: "Foundations", label: "Maths & English" },
];

export default function CoursesPage() {
  const allCourses = useMemo(() => getAllCourses(), []);
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesTrack =
        selectedTrack === "all" || course.track === selectedTrack;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTrack && matchesSearch;
    });
  }, [allCourses, selectedTrack, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0F1B3D] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        {/* Header Banner */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A15A]/15 border border-[#C8A15A]/35 text-[#0F1B3D] text-xs font-sans font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A15A]" />
              <span>Full Curriculum Catalogue</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F1B3D] tracking-tight leading-tight">
              Explore Our <span className="text-gold-gradient font-normal italic">Flagship Programs</span>
            </h1>

            <p className="mt-3 text-sm md:text-base text-[#0F1B3D]/75 font-sans leading-relaxed">
              Every course features verified demo lectures by Prof. Er. Manoj Kumar and our core faculty. Choose your track to begin streaming.
            </p>
          </div>

          {/* Search Bar & Filter Tabs */}
          <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-3xl bg-white border border-[#C8A15A]/30 shadow-md">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F1B3D]/40" />
              <input
                type="text"
                placeholder="Search by subject, level or keyword (e.g. Accounting, Law, Vedic Maths)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#FBF9F4] text-xs md:text-sm font-sans text-[#0F1B3D] placeholder-[#0F1B3D]/50 border border-transparent focus:border-[#C8A15A] focus:outline-none transition-colors"
              />
            </div>

            {/* Track Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = selectedTrack === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTrack(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wide whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-[#0F1B3D] text-[#FBF9F4] shadow-sm"
                        : "bg-white text-[#0F1B3D]/70 hover:text-[#0F1B3D] hover:bg-[#FBF9F4] border border-[#C8A15A]/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 p-8 rounded-3xl bg-white border border-[#C8A15A]/25 max-w-lg mx-auto">
              <BookOpen className="w-12 h-12 text-[#C8A15A] mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold text-[#0F1B3D]">No programs found</h3>
              <p className="text-xs text-[#0F1B3D]/70 mt-1">
                Try adjusting your search query or reset the filter tabs.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTrack("all");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#0F1B3D] text-white text-xs font-medium"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}


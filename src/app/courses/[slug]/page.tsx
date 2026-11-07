import React, { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCourses, getCourseBySlug } from "@/data/courses";
import { CourseDetailClient } from "@/components/CourseDetailClient";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCourses().map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Elite Education",
    };
  }

  return {
    title: `${course.title} | Elite Education`,
    description: `${course.tagline} ${course.description}`,
    openGraph: {
      title: `${course.title} | Elite Education`,
      description: course.description,
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full border-2 border-[#C8A15A] border-t-transparent animate-spin mx-auto mb-3" />
            <p className="text-xs font-serif font-bold text-[#0F1B3D]">
              Loading Course Masterclass...
            </p>
          </div>
        </div>
      }
    >
      <CourseDetailClient slug={slug} />
    </Suspense>
  );
}

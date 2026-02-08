import { NextResponse } from "next/server";
import { services } from "@/data/services";

/**
 * GET /api/services - Returns all services in JSON format
 * This endpoint is designed for AI models to easily access structured service data
 */
export async function GET() {
  // Transform services data for AI-friendly format
  const servicesData = services.map((service) => ({
    slug: service.slug,
    title: service.title,
    shortTitle: service.shortTitle,
    description: service.description,
    excerpt: service.excerpt,
    url: `https://www.webcraft.tr/hizmetler/${service.slug}`,

    // SEO & Meta
    keywords: service.keywords,

    // Content
    what: service.whatSection.title,
    why: service.whySection.title,
    benefits: service.whySection.benefits,

    // Features
    features: service.features.map((f) => ({
      title: f.title,
      description: f.description,
    })),

    // Process
    process: service.process.map((p) => ({
      step: p.number,
      title: p.title,
      description: p.description,
    })),

    // FAQs
    faqs: service.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),

    // E-E-A-T
    experienceYears: service.experienceYears,
    projectCount: service.projectCount,
    expertise: service.expertise,

    // Related
    relatedServices: service.relatedServices,
  }));

  return NextResponse.json({
    success: true,
    count: servicesData.length,
    data: servicesData,
  });
}

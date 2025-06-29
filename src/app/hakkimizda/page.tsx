import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";

// Lazy load below-the-fold components
const AboutStatement = lazy(() => import("@/components/AboutStatement"));
const AboutValues = lazy(() => import("@/components/AboutValues"));
const AboutStudio = lazy(() => import("@/components/AboutStudio"));
const AboutTestimonials = lazy(() => import("@/components/AboutTestimonials"));
const AboutAwards = lazy(() => import("@/components/AboutAwards"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Web Tasarım Ajansı Hakkında | WebCraft - Profesyonel Web Tasarım ve SEO Hizmeti",
  description:
    "2015 yılından bu yana web tasarım, SEO hizmeti ve dijital pazarlama alanlarında uzmanlaşmış WebCraft ajansı. Profesyonel web tasarım ajansı olarak hizmet veriyoruz.",
  keywords:
    "web tasarım ajansı, SEO hizmeti, dijital pazarlama ajansı, web tasarım firması, sosyal medya yönetimi",
  openGraph: {
    title: "Web Tasarım Ajansı Hakkında | WebCraft",
    description:
      "2015 yılından bu yana web tasarım, SEO hizmeti ve dijital pazarlama alanlarında uzmanlaşmış WebCraft ajansı.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutStatement />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutValues />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-screen" />}>
        <AboutStudio />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutTestimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutAwards />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

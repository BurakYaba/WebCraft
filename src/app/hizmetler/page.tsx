import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import ServicesHero from "../../components/ServicesHero";

// Lazy load below-the-fold components
const ServiceBlocks = lazy(() => import("../../components/ServiceBlocks"));
const ServiceIndicator = lazy(
  () => import("../../components/ServiceIndicator")
);
const Footer = lazy(() => import("../../components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Web Tasarım ve Dijital Pazarlama Hizmetleri | WebCraft",
  description:
    "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri. Web tasarım fiyatları ve kurumsal web sitesi tasarımı hizmetleri.",
  keywords:
    "web tasarım, SEO hizmeti, sosyal medya yönetimi, dijital pazarlama ajansı, web tasarım fiyatları, kurumsal web sitesi tasarımı",
  openGraph: {
    title: "Web Tasarım ve Dijital Pazarlama Hizmetleri | WebCraft",
    description:
      "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#181716] relative overflow-hidden">
      <Header />
      <main>
        <ServicesHero />

        <Suspense fallback={<SectionSkeleton height="h-screen" />}>
          <ServiceBlocks />
        </Suspense>
      </main>

      <Suspense fallback={<SectionSkeleton height="h-32" />}>
        <ServiceIndicator />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

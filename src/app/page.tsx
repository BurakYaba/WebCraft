import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

// Lazy load below-the-fold components
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const BlogSection = lazy(() => import("../components/BlogSection"));
const Footer = lazy(() => import("../components/Footer"));

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
    "Web Tasarım ve Dijital Pazarlama Ajansı | WebCraft - SEO Hizmeti ve Sosyal Medya Yönetimi",
  description:
    "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri. Web tasarım fiyatları ve kurumsal web sitesi tasarımı hizmetleri. Ücretsiz teklif alın.",
  keywords:
    "web tasarım, SEO hizmeti, sosyal medya yönetimi, dijital pazarlama ajansı, web tasarım fiyatları, kurumsal web sitesi tasarımı, web tasarım ajansı",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://webcraft.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Tasarım ve Dijital Pazarlama Ajansı | WebCraft",
    description:
      "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri.",
    url: "https://webcraft.com.tr",
    siteName: "WebCraft",
    images: [
      {
        url: "/webcraftLogo.png",
        width: 1200,
        height: 630,
        alt: "WebCraft Web Tasarım ve Dijital Pazarlama Ajansı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Tasarım ve Dijital Pazarlama Ajansı | WebCraft",
    description:
      "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri.",
    images: ["/webcraftLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#181716] relative overflow-hidden z-0">
      <Header />
      <HeroSection />

      <Suspense fallback={<SectionSkeleton height="h-screen" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

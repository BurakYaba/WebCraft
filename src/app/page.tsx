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
  title: "Web Tasarım Fethiye | Profesyonel Web Sitesi Tasarımı | WebCraft",
  description:
    "Fethiye'de profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. Uygun fiyatlı paketler. Ücretsiz teklif alın. 5 yıldır Fethiye ve Muğla'da hizmet veriyoruz. Hemen iletişime geçin!",
  keywords:
    "web tasarım Fethiye, web tasarım Muğla, web tasarımcı Fethiye, web tasarım ajansı Fethiye, Fethiye web tasarım, Muğla web tasarım, web sitesi Fethiye, SEO hizmeti Fethiye, dijital pazarlama Fethiye, web tasarım fiyatları",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Tasarım Fethiye | Profesyonel Web Sitesi Tasarımı | WebCraft",
    description:
      "Fethiye'de profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. Ücretsiz teklif alın. 5 yıldır Fethiye ve Muğla'da hizmet veriyoruz.",
    url: "https://webcraft.com.tr",
    siteName: "WebCraft",
    images: [
      {
        url: "/webcraftLogo.png",
        width: 1200,
        height: 630,
        alt: "WebCraft Web Tasarım Fethiye - Profesyonel Web Sitesi Tasarımı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Tasarım Fethiye | Profesyonel Web Sitesi Tasarımı | WebCraft",
    description:
      "Fethiye'de profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. Ücretsiz teklif alın. 5 yıldır Fethiye ve Muğla'da hizmet veriyoruz.",
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

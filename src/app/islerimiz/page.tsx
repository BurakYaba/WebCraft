import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import ProjectsHero from "../../components/ProjectsHero";

// Lazy load below-the-fold components
const ProjectsGallery = lazy(() => import("../../components/ProjectsGallery"));
const ProjectsStats = lazy(() => import("../../components/ProjectsStats"));
const Footer = lazy(() => import("../../components/Footer"));

export const metadata: Metadata = {
  title: "Web Tasarım Projeleri ve Portföy | WebCraft - Tamamlanan İşlerimiz",
  description:
    "Web tasarım, SEO ve dijital pazarlama projelerimizi inceleyin. Kurumsal web sitesi tasarımı, e-ticaret ve mobil uygulama örnekleri. Profesyonel web tasarım ajansı portföyü.",
  keywords:
    "web tasarım projeleri, portföy, tamamlanan işler, web tasarım örnekleri, kurumsal web sitesi tasarımı, e-ticaret sitesi, mobil uygulama, dijital pazarlama projeleri",
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
    canonical: "/islerimiz",
  },
  openGraph: {
    title: "Web Tasarım Projeleri ve Portföy | WebCraft",
    description:
      "Web tasarım, SEO ve dijital pazarlama projelerimizi inceleyin. Kurumsal web sitesi tasarımı ve e-ticaret örnekleri.",
    url: "https://www.webcraft.tr/islerimiz",
    siteName: "WebCraft",
    images: [
      {
        url: "/webcraftLogo.png",
        width: 1200,
        height: 630,
        alt: "WebCraft Web Tasarım Projeleri ve Portföy",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@webcraft",
    creator: "@webcraft",
    title: "Web Tasarım Projeleri ve Portföy | WebCraft",
    description:
      "Web tasarım, SEO ve dijital pazarlama projelerimizi inceleyin. Kurumsal web sitesi tasarımı örnekleri.",
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

// Loading component for better UX
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export default function ProjectsPage() {
  // Portfolio/Work Schema for SEO
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "WebCraft Portföy ve Tamamlanan Projeler",
    description:
      "Web tasarım, SEO ve dijital pazarlama alanında tamamlanan projelerimiz",
    itemListElement: [
      {
        "@type": "CreativeWork",
        position: 1,
        name: "E-Ticaret Web Sitesi Projesi",
        description: "Modern e-ticaret web sitesi tasarımı ve geliştirme",
        creator: {
          "@type": "Organization",
          name: "WebCraft",
        },
        genre: "Web Design",
        keywords: "e-ticaret, web tasarım, online mağaza",
        dateCreated: "2024",
      },
      {
        "@type": "CreativeWork",
        position: 2,
        name: "Kurumsal Web Sitesi Projesi",
        description: "Profesyonel kurumsal web sitesi tasarımı",
        creator: {
          "@type": "Organization",
          name: "WebCraft",
        },
        genre: "Web Design",
        keywords: "kurumsal web sitesi, web tasarım, kurumsal kimlik",
        dateCreated: "2024",
      },
      {
        "@type": "CreativeWork",
        position: 3,
        name: "Mobil Uygulama Projesi",
        description: "iOS ve Android mobil uygulama geliştirme",
        creator: {
          "@type": "Organization",
          name: "WebCraft",
        },
        genre: "Mobile App Development",
        keywords: "mobil uygulama, iOS, Android, app geliştirme",
        dateCreated: "2024",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />
        <ProjectsHero />

        <Suspense fallback={<SectionSkeleton height="h-screen" />}>
          <ProjectsGallery />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <ProjectsStats />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

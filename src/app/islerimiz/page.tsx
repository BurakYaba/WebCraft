import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import ProjectsHero from "../../components/ProjectsHero";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

// Lazy load below-the-fold components
const ProjectsGallery = lazy(() => import("../../components/ProjectsGallery"));
const ProjectsStats = lazy(() => import("../../components/ProjectsStats"));
const Footer = lazy(() => import("../../components/Footer"));

export const metadata: Metadata = {
  title: "Web Tasarım Projeleri | Gerçek Müşteri Projeleri | WebCraft",
  description:
    "Türkiye'nin bir ucundan diğerine, eğitimden emlağa — projelerimiz ve müşteri sonuçları. Kreşten Yapay Zeka platformuna her projenin hikayesi.",
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
    title: "Web Tasarım Projeleri | Gerçek Müşteri Projeleri | WebCraft",
    description:
      "Türkiye'nin bir ucundan diğerine, eğitimden emlağa — projelerimiz ve müşteri sonuçları. Kreşten Yapay Zeka platformuna her projenin hikayesi.",
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
    title: "Web Tasarım Projeleri | Gerçek Müşteri Projeleri | WebCraft",
    description:
      "Türkiye'nin bir ucundan diğerine, eğitimden emlağa — projelerimiz ve müşteri sonuçları. Kreşten Yapay Zeka platformuna her projenin hikayesi.",
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
      "Türkiye'nin bir ucundan diğerine, eğitimden emlağa — WebCraft'ın tamamladığı projeler ve müşteri hikayeleri.",
    itemListElement: [
      {
        "@type": "CreativeWork",
        position: 1,
        name: "Fluenta — Yapay Zeka Destekli İngilizce Öğrenme Platformu",
        description:
          "AI destekli 3D avatarlarla interaktif İngilizce öğrenme deneyimi. Next.js, TypeScript, abonelik sistemi ve çoklu dil seviyesi ile kapsamlı eğitim platformu.",
        creator: { "@type": "Organization", name: "WebCraft" },
        about: { "@type": "Thing", name: "Fluenta" },
        genre: "EdTech Platform",
        url: "https://www.webcraft.tr/islerimiz/fluenta-ai",
        dateCreated: "2025",
      },
      {
        "@type": "CreativeWork",
        position: 2,
        name: "Home and Car — Edremit Emlak Platformu",
        description:
          "Balıkesir Edremit için kapsamlı mülk yönetim sistemi ve CMS. Next.js 16, TypeScript, PostgreSQL, 50+ mülk özelliği, yerel SEO optimizasyonu.",
        creator: { "@type": "Organization", name: "WebCraft" },
        about: { "@type": "Thing", name: "Home and Car" },
        genre: "Real Estate Platform",
        url: "https://www.webcraft.tr/islerimiz/home-and-car",
        dateCreated: "2026",
      },
      {
        "@type": "CreativeWork",
        position: 3,
        name: "Skoll Salon — Muğla Güzellik ve Bakım Salonu",
        description:
          "Modern web tasarım ve online randevu sistemi ile Muğla'nın önde gelen güzellik salonunun dijital vitrini. WhatsApp entegrasyonu ve SEO uyumlu yapı.",
        creator: { "@type": "Organization", name: "WebCraft" },
        about: { "@type": "Thing", name: "Skoll Salon" },
        genre: "Local Business Website",
        url: "https://www.webcraft.tr/islerimiz/skoll-beauty",
        dateCreated: "2025",
      },
      {
        "@type": "CreativeWork",
        position: 4,
        name: "Mentoria — Özel Ders Platformu",
        description:
          "Öğrenci ve öğretmenleri akıllı eşleştirme sistemiyle buluşturan güvenilir özel ders platformu. Next.js, TypeScript, TailwindCSS.",
        creator: { "@type": "Organization", name: "WebCraft" },
        about: { "@type": "Thing", name: "Mentoria" },
        genre: "EdTech Platform",
        url: "https://www.webcraft.tr/islerimiz/mentoria",
        dateCreated: "2025",
      },
      {
        "@type": "CreativeWork",
        position: 5,
        name: "Atlantis Kreş — Montessori Eğitim Merkezi Web Sitesi",
        description:
          "Muğla Menteşe'de Montessori, Reggio Emilia ve High Scope eğitim modelleriyle modern kreş web sitesi. Next.js ve TailwindCSS.",
        creator: { "@type": "Organization", name: "WebCraft" },
        about: { "@type": "Thing", name: "Atlantis Kreş" },
        genre: "Education Website",
        url: "https://www.webcraft.tr/islerimiz/atlantis",
        dateCreated: "2025",
      },
      {
        "@type": "CreativeWork",
        position: 6,
        name: "Yat Rehberi — Türkiye Mavi Yolculuk Platformu",
        description:
          "Türkiye'nin Ege ve Akdeniz kıyılarındaki rota, marina ve koy bilgilerini bir araya toplayan CMS yönetimli dijital rehber platformu.",
        creator: { "@type": "Organization", name: "WebCraft" },
        about: { "@type": "Thing", name: "Yat Rehberi" },
        genre: "Tourism Guide Platform",
        url: "https://www.webcraft.tr/islerimiz/yatrehberi",
        dateCreated: "2025",
      },
    ],
  };

  // Breadcrumb for projects page
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "İşlerimiz", url: "/islerimiz" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />
        <ProjectsHero />

        {/* ── Öne Çıkan Projeler ── */}
        <section className="py-16 md:py-24 bg-[#1a1918]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl mb-12">
              <p className="text-red-500 font-medium uppercase text-sm tracking-wide mb-3">
                Öne Çıkan Projeler
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Her Sektörde, Farklı Bir Çözüm
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Türkiye&apos;nin bir ucundan diğerine, eğitimden emlağa —
                projelerimiz ve müşteri sonuçları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Fluenta AI */}
              <Link
                href="/islerimiz/fluenta-ai"
                className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-red-400 uppercase tracking-wide bg-red-500/10 px-2.5 py-1 rounded-full">
                    EdTech · 2025
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">
                  Fluenta — Yapay Zeka İngilizce Platformu
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Sıfırdan tam ürün: AI destekli 3D avatar konuşma pratiği,
                  abonelik sistemi ve 4 farklı dil seviyesi — tek kod tabanında
                  web uygulaması.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Next.js", "TypeScript", "AI Entegrasyonu"].map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-red-400 text-sm font-medium group-hover:underline">
                  Projeyi İncele →
                </span>
              </Link>

              {/* Home and Car */}
              <Link
                href="/islerimiz/home-and-car"
                className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-red-400 uppercase tracking-wide bg-red-500/10 px-2.5 py-1 rounded-full">
                    Emlak · 2026
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">
                  Home and Car — Edremit Emlak Platformu
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Manuel ilan yönetiminden çıkış: 50+ mülk özelliği, yönetici
                  paneli ve yerel SEO ile bölgede dijital varlık sıfırdan
                  kuruldu.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Next.js 16", "PostgreSQL", "CMS", "Yerel SEO"].map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-red-400 text-sm font-medium group-hover:underline">
                  Projeyi İncele →
                </span>
              </Link>

              {/* Skoll Beauty */}
              <Link
                href="/islerimiz/skoll-beauty"
                className="group block bg-white/5 hover:bg-white/8 border border-white/10 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-red-400 uppercase tracking-wide bg-red-500/10 px-2.5 py-1 rounded-full">
                    Güzellik · Muğla · 2025
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">
                  Skoll Salon — Online Randevu ve Dijital Vitrin
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Telefonla randevu almaktan çıkış: WhatsApp entegrasyonlu
                  online rezervasyon akışı ile müşteri yönetimini dijitale
                  taşıdık.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Next.js", "Online Randevu", "SEO"].map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-red-400 text-sm font-medium group-hover:underline">
                  Projeyi İncele →
                </span>
              </Link>
            </div>

            {/* Blog links preserved */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm mb-3">İlgili okumalar</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <Link
                  href="/blog/online-magaza-kurulumu"
                  className="text-red-400 hover:text-red-300 text-sm underline underline-offset-4 transition-colors"
                >
                  Online Mağaza Kurulumu ile Dijital Satış Başarınızı Artırın
                </Link>
                <Link
                  href="/blog/minimalist-tasarim-yaklasimlari"
                  className="text-red-400 hover:text-red-300 text-sm underline underline-offset-4 transition-colors"
                >
                  Minimalist Tasarım Yaklaşımları ile Modern Web Siteleri
                </Link>
                <Link
                  href="/blog/guclu-marka-imaji-olusturma"
                  className="text-red-400 hover:text-red-300 text-sm underline underline-offset-4 transition-colors"
                >
                  Güçlü Marka İmajı Oluşturma ile Rakiplerinizden Öne Çıkın
                </Link>
              </div>
            </div>
          </div>
        </section>

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

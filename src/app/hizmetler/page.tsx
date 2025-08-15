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
  // Service Schema for Detailed Service Descriptions
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "WebCraft Hizmetleri",
    description:
      "Web tasarım, SEO, sosyal medya yönetimi ve dijital pazarlama hizmetleri",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Web Tasarım Hizmeti",
        description: "Modern, responsive ve SEO uyumlu web sitesi tasarımı",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "Profesyonel web sitesi",
        serviceAudience: "İşletmeler ve kurumlar",
        areaServed: "Turkey",
        serviceType: "Web Design",
        keywords: "web tasarım, responsive tasarım, web sitesi",
      },
      {
        "@type": "Service",
        position: 2,
        name: "SEO Hizmeti",
        description:
          "Arama motoru optimizasyonu ile Google'da üst sıralarda yer alma",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "Arama motorlarında üst sıralarda yer alma",
        serviceAudience: "Online görünürlük isteyen işletmeler",
        areaServed: "Turkey",
        serviceType: "SEO Service",
        keywords: "SEO, arama motoru optimizasyonu, Google",
      },
      {
        "@type": "Service",
        position: 3,
        name: "Sosyal Medya Yönetimi",
        description: "Sosyal platformlarda marka varlığı ve müşteri etkileşimi",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "Güçlü sosyal medya varlığı",
        serviceAudience: "Sosyal medyada aktif olmak isteyen markalar",
        areaServed: "Turkey",
        serviceType: "Social Media Management",
        keywords: "sosyal medya yönetimi, marka varlığı, müşteri etkileşimi",
      },
      {
        "@type": "Service",
        position: 4,
        name: "Dijital Pazarlama",
        description:
          "Kapsamlı dijital pazarlama stratejileri ve kampanya yönetimi",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "Artırılmış online satış ve marka bilinirliği",
        serviceAudience: "Dijital büyüme hedefleyen işletmeler",
        areaServed: "Turkey",
        serviceType: "Digital Marketing",
        keywords: "dijital pazarlama, online pazarlama, marka bilinirliği",
      },
      {
        "@type": "Service",
        position: 5,
        name: "E-Ticaret Geliştirme",
        description: "Online mağaza kurulumu ve e-ticaret çözümleri",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "Fonksiyonel e-ticaret web sitesi",
        serviceAudience: "Online satış yapmak isteyen işletmeler",
        areaServed: "Turkey",
        serviceType: "E-commerce Development",
        keywords: "e-ticaret, online mağaza, dijital satış",
      },
      {
        "@type": "Service",
        position: 6,
        name: "Mobil Uygulama Geliştirme",
        description: "iOS ve Android mobil uygulama tasarımı ve geliştirme",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "Mobil uygulama",
        serviceAudience: "Mobil platformda varlık isteyen işletmeler",
        areaServed: "Turkey",
        serviceType: "Mobile App Development",
        keywords: "mobil uygulama, iOS, Android, app geliştirme",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
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
    </>
  );
}

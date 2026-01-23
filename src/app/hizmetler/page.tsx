import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import ServicesHero from "../../components/ServicesHero";

// Lazy load below-the-fold components
const ServiceBlocks = lazy(() => import("../../components/ServiceBlocks"));
const ServiceIndicator = lazy(
  () => import("../../components/ServiceIndicator"),
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
    "Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. Ücretsiz teklif alın.",
  keywords:
    "web tasarım, SEO hizmeti, sosyal medya yönetimi, dijital pazarlama ajansı, web tasarım fiyatları, kurumsal web sitesi tasarımı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/hizmetler",
  },
  openGraph: {
    title: "Web Tasarım ve Dijital Pazarlama Hizmetleri | WebCraft",
    description:
      "Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. Ücretsiz teklif alın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function Services() {
  // Breadcrumb schema for services page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.webcraft.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmetler",
        item: "https://www.webcraft.tr/hizmetler",
      },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#181716] relative overflow-hidden">
        <Header />
        <main>
          <ServicesHero />

          {/* Additional Content Section for SEO */}
          <section className="py-16 md:py-24 bg-[#1a1918]">
            <div className="max-w-4xl mx-auto px-6 md:px-10 text-white/80">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Web Tasarım ve Dijital Pazarlama Hizmetlerimiz
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                WebCraft olarak, 2015 yılından bu yana web tasarım, SEO hizmeti
                ve dijital pazarlama alanlarında profesyonel çözümler sunuyoruz.
                Modern teknolojiler ve yaratıcı tasarım yaklaşımı ile
                işletmenizin dijital varlığını güçlendiriyoruz.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Kurumsal web sitesi tasarımından e-ticaret web tasarımına, SEO
                hizmetinden sosyal medya yönetimine kadar geniş bir hizmet
                yelpazesi sunuyoruz. Her projede, müşterilerimizin ihtiyaçlarına
                özel çözümler geliştiriyor ve dijital pazarlama başarısını
                hedefliyoruz.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Web tasarım fiyatları, projenin kapsamına ve özelliklerine göre
                belirlenir. Her işletme için en uygun çözümü sunmak amacıyla,
                detaylı analiz yaparak size özel teklifler hazırlıyoruz.
                Profesyonel ekibimiz, modern web teknolojileri ve SEO en iyi
                uygulamaları ile web sitenizin Google&apos;da üst sıralarda yer
                almasını sağlıyor.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Mobil uyumlu web tasarımı, hızlı yükleme süreleri ve kullanıcı
                dostu arayüzler ile web sitenizin hem görsel olarak çekici hem
                de fonksiyonel olmasını sağlıyoruz. Dijital pazarlama
                stratejileri ile markanızın online görünürlüğünü artırıyor ve
                organik trafiğinizi yükseltiyoruz.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Özel Hizmet Alanlarımız
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">
                      ⚡ Performans Odaklı Web
                    </h4>
                    <p className="text-white/70 text-sm">
                      Core Web Vitals optimizasyonu, hızlı yükleme ve Next.js
                      teknolojisi
                    </p>
                  </Link>
                  <Link
                    href="/hizmetler/kobi-web-tasarim"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">
                      🏢 KOBİ Web Tasarım
                    </h4>
                    <p className="text-white/70 text-sm">
                      Küçük işletmelere özel, uygun fiyatlı web tasarım
                      paketleri
                    </p>
                  </Link>
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">
                      🔍 SEO Uyumlu Web Sitesi
                    </h4>
                    <p className="text-white/70 text-sm">
                      Google&apos;da üst sıralarda yer alan, teknik SEO odaklı
                      web siteleri
                    </p>
                  </Link>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-8">
                  Yerel Hizmet Alanlarımız
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link
                    href="/fethiye-web-tasarim-hizmetleri"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">
                      📍 Fethiye Web Tasarım
                    </h4>
                    <p className="text-white/70 text-sm">
                      Fethiye&apos;deki işletmelere özel, turizm sektörüne
                      yönelik web tasarım ve dijital pazarlama hizmetleri
                    </p>
                  </Link>
                  <Link
                    href="/mugla-web-tasarim-seo-hizmetleri"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">
                      🌊 Muğla Web Tasarım
                    </h4>
                    <p className="text-white/70 text-sm">
                      Muğla&apos;nın tüm ilçelerinde (Fethiye, Bodrum, Marmaris)
                      web tasarım ve SEO hizmetleri
                    </p>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  İlgili Blog Yazılarımız
                </h3>
                <ul className="space-y-2 text-lg md:text-xl">
                  <li>
                    <Link
                      href="/blog/seo-uyumlu-web-tasarimi"
                      className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
                    >
                      SEO Uyumlu Web Tasarımı ile Google&apos;da Üst Sıralarda
                      Yer Alın
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/2024-seo-trendleri"
                      className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
                    >
                      2024&apos;te SEO Trendleri ve Arama Motoru Optimizasyonu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/web-sitesi-guvenligi"
                      className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
                    >
                      Web Sitesi Güvenliği ile Dijital Varlığınızı Koruyun
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/web-analitik-araclari"
                      className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
                    >
                      Web Analitik Araçları ile Dijital Performansınızı Ölçün
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

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

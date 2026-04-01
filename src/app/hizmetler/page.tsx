import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import ServicesHero from "../../components/ServicesHero";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

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
  // Breadcrumb for services page
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Hizmetler", url: "/hizmetler" },
    ]);

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
      {
        "@type": "Service",
        position: 7,
        name: "Yapay Zeka Chatbot Geliştirme",
        description:
          "İşletmeler için yapay zeka destekli chatbot ve müşteri hizmetleri otomasyonu",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput: "AI destekli chatbot ve otomasyon sistemi",
        serviceAudience:
          "Müşteri hizmetlerini otomatikleştirmek isteyen işletmeler",
        areaServed: "Turkey",
        serviceType: "AI Chatbot Development",
        keywords:
          "yapay zeka chatbot, AI chatbot, müşteri hizmetleri otomasyonu, WhatsApp chatbot",
      },
      {
        "@type": "Service",
        position: 8,
        name: "Yapay Zeka İş Otomasyonu",
        description:
          "AI destekli iş süreçleri otomasyonu, akıllı belge işleme ve veri analizi",
        provider: {
          "@type": "Organization",
          name: "WebCraft",
        },
        serviceOutput:
          "Otomatikleştirilmiş iş süreçleri ve AI otomasyon sistemleri",
        serviceAudience: "İş süreçlerini otomatikleştirmek isteyen işletmeler",
        areaServed: "Turkey",
        serviceType: "AI Business Automation",
        keywords:
          "yapay zeka otomasyon, AI otomasyon, iş süreçleri otomasyonu, akıllı belge işleme, RPA",
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
        <Breadcrumb items={breadcrumbItems} />
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
            </div>
          </section>

          <Suspense fallback={<SectionSkeleton height="h-screen" />}>
            <ServiceBlocks />
          </Suspense>

          {/* Special Services, Local Services, and Related Blog Posts */}
          <section className="py-16 md:py-24 bg-[#1a1918]">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Uzmanlaşmış Çözümler
                </h2>
                <p className="text-white/60 text-lg mb-8">
                  Sektörünüze ve ihtiyacınıza özel, derinlemesine geliştirilmiş
                  web ve dijital hizmetler.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="group block bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg hover:bg-gray-800/80 hover:border-red-800/50 transition-all"
                  >
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      Performans Odaklı Web
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Core Web Vitals optimizasyonu, Next.js ve 2 saniyenin
                      altında yükleme süresi.
                    </p>
                  </Link>
                  <Link
                    href="/hizmetler/kobi-web-tasarim"
                    className="group block bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg hover:bg-gray-800/80 hover:border-red-800/50 transition-all"
                  >
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      KOBİ Web Tasarım
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Küçük ve orta ölçekli işletmelere özel, bütçe dostu
                      profesyonel web siteleri.
                    </p>
                  </Link>
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="group block bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg hover:bg-gray-800/80 hover:border-red-800/50 transition-all"
                  >
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      SEO Uyumlu Web Sitesi
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Teknik SEO altyapısı yerleşik, schema markup ve site hızı
                      optimize edilmiş web siteleri.
                    </p>
                  </Link>
                  <Link
                    href="/kurumsal-web-sitesi"
                    className="group block bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg hover:bg-gray-800/80 hover:border-red-800/50 transition-all"
                  >
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      Kurumsal Web Sitesi
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Kurumsal kimlik, çok bölümlü yapı ve B2B müşteri güveni
                      için tasarlanmış kurumsal web siteleri.
                    </p>
                  </Link>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Yerel Hizmet Alanlarımız
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/fethiye-web-tasarim-hizmetleri"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      📍 Fethiye Web Tasarım
                    </h3>
                    <p className="text-white/70 text-sm">
                      Fethiye&apos;deki işletmelere özel, turizm sektörüne
                      yönelik web tasarım ve dijital pazarlama hizmetleri
                    </p>
                  </Link>
                  <Link
                    href="/mugla-web-tasarim-seo-hizmetleri"
                    className="block bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      🌊 Muğla Web Tasarım
                    </h3>
                    <p className="text-white/70 text-sm">
                      Muğla&apos;nın tüm ilçelerinde (Fethiye, Bodrum, Marmaris)
                      web tasarım ve SEO hizmetleri
                    </p>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  İlgili Blog Yazılarımız
                </h2>
                <ul className="space-y-3 text-lg md:text-xl">
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

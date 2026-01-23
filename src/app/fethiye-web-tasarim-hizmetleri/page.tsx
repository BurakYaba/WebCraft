import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Search,
  Users,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

// Lazy load components
const BentoGrid = lazy(() => import("@/components/BentoGrid"));
const Footer = lazy(() => import("@/components/Footer"));
const ServiceFAQSection = lazy(() => import("@/components/ServiceFAQSection"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Fethiye Web Tasarım Hizmetleri | Profesyonel Web Sitesi | WebCraft",
  description:
    "Fethiye'de profesyonel web tasarım hizmeti. Oteller, restoranlar ve turizm işletmeleri için özel web siteleri. SEO uyumlu, mobil uyumlu ve modern tasarımlar.",
  keywords:
    "fethiye web tasarım, fethiye web sitesi, fethiye dijital ajans, fethiye seo, fethiye web tasarım ajansı, otel web sitesi fethiye, turizm web tasarımı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/fethiye-web-tasarim-hizmetleri",
  },
  openGraph: {
    title: "Fethiye Web Tasarım Hizmetleri | Profesyonel Web Sitesi | WebCraft",
    description:
      "Fethiye'de profesyonel web tasarım hizmeti. Turizm sektörüne özel çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function FethiyeWebTasarimPage() {
  // Fethiye FAQ data
  const fethiyeFAQs = [
    {
      question: "Fethiye'de web tasarım hizmeti veriyor musunuz?",
      answer:
        "Evet, Fethiye'de yerleşik olarak profesyonel web tasarım hizmeti veriyoruz. Babataşı Mahallesi'ndeki ofisimizden Fethiye ve çevresindeki tüm işletmelere hizmet sunuyoruz. Oteller, restoranlar, tatil köyleri ve turizm işletmeleri için özel web tasarım çözümleri geliştiriyoruz.",
    },
    {
      question: "Fethiye'de hangi sektörlere web tasarım hizmeti veriyorsunuz?",
      answer:
        "Fethiye'de özellikle turizm sektörüne odaklanıyoruz: Oteller, butik oteller, pansiyonlar, restoranlar, tatil köyleri, transfer firmaları, tekne turları, su sporları işletmeleri ve yerel işletmeler için profesyonel web siteleri tasarlıyoruz. Her sektörün özel ihtiyaçlarına uygun çözümler sunuyoruz.",
    },
    {
      question: "Fethiye'deki otelimiz için web sitesi yapabilir misiniz?",
      answer:
        "Kesinlikle! Fethiye'deki oteller için profesyonel web tasarım hizmeti veriyoruz. Online rezervasyon sistemi, çok dilli destek, fotoğraf galerileri, oda tanıtımları ve booking.com entegrasyonu gibi özelliklerle otel web sitenizi tasarlıyoruz. Ayrıca, Google My Business ve yerel SEO optimizasyonu ile rezervasyon sayınızı artırıyoruz.",
    },
    {
      question: "Fethiye web tasarım hizmetiniz SEO optimizasyonu içeriyor mu?",
      answer:
        "Evet, tüm Fethiye web tasarım projelerimizde yerel SEO optimizasyonu bulunur. 'Fethiye otel', 'Fethiye restoran', 'Fethiye tatil' gibi yerel arama terimlerinde Google'da üst sıralarda yer almanızı sağlıyoruz. Google My Business entegrasyonu ve yerel arama optimizasyonu standart olarak dahildir.",
    },
    {
      question: "Fethiye web tasarım hizmeti sonrası destek veriyor musunuz?",
      answer:
        "Evet, Fethiye'deki ofisimizden sürekli teknik destek ve bakım hizmetleri sunuyoruz. Web sitesi güncellemeleri, içerik değişiklikleri, güvenlik güncellemeleri ve performans optimizasyonu hizmetlerimiz mevcuttur. Yüz yüze görüşme imkanı da sunuyoruz.",
    },
  ];

  // LocalBusiness Schema for Fethiye
  const fethiyeLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebCraft Fethiye Web Tasarım",
    description:
      "Fethiye'de profesyonel web tasarım ve dijital pazarlama hizmetleri",
    url: "https://www.webcraft.tr/fethiye-web-tasarim-hizmetleri",
    telephone: "+90-507-944-17-15",
    email: "info@webcraft.tr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Babataşı Mahallesi, 778 Sokak No: 32/A",
      addressLocality: "Fethiye",
      addressRegion: "Muğla",
      postalCode: "48300",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.6213",
      longitude: "29.1164",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Fethiye",
    },
  };

  // Service Schema
  const fethiyeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fethiye Web Tasarım Hizmeti",
    description:
      "Fethiye'de oteller, restoranlar ve turizm işletmeleri için profesyonel web tasarım hizmetleri",
    provider: {
      "@type": "LocalBusiness",
      name: "WebCraft",
    },
    serviceType: "Web Tasarım",
    areaServed: {
      "@type": "City",
      name: "Fethiye",
    },
  };

  // FAQ Schema
  const fethiyeFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    mainEntity: fethiyeFAQs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb Schema
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
        name: "Fethiye Web Tasarım Hizmetleri",
        item: "https://www.webcraft.tr/fethiye-web-tasarim-hizmetleri",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fethiyeLocalBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fethiyeServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Watermark background */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            F
          </div>

          {/* Decorative dots (SVG) */}
          <svg
            className="absolute right-4 md:right-56 top-1/3 z-10 w-8 h-8 md:w-12 md:h-12"
            fill="none"
            viewBox="0 0 60 60"
            aria-hidden="true"
          >
            <g>
              <circle cx="6" cy="6" r="2" fill="#f84525" />
              <circle cx="18" cy="8" r="1.5" fill="#fff" />
              <circle cx="30" cy="12" r="1.5" fill="#fff" />
              <circle cx="42" cy="18" r="1.5" fill="#fff" />
              <circle cx="54" cy="24" r="1.5" fill="#fff" />
              <circle cx="12" cy="24" r="1" fill="#fff" />
              <circle cx="24" cy="30" r="1" fill="#fff" />
              <circle cx="36" cy="36" r="1" fill="#fff" />
            </g>
          </svg>

          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
                  Fethiye Web Tasarım
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Fethiye&apos;nin
                  <br />
                  <span className="text-red-600">Dijital Ajansı</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Fethiye&apos;de 10 yıllık deneyimimizle oteller, restoranlar
                  ve turizm işletmeleri için profesyonel web tasarım hizmetleri
                  sunuyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Ücretsiz Teklif Al
                  </a>
                  <a
                    href="tel:+905079441715"
                    className="border border-gray-300 text-white hover:bg-gray-50 hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - Company Info Box */}
              <div className="lg:w-1/2">
                <div className="bg-[#1a1918] p-8 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Fethiye&apos;de Yerel Hizmet
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">
                        Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye - Muğla
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      <span className="text-white">+90 (507) 944 17 15</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      <span className="text-white">info@webcraft.tr</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">
                        Pazartesi-Cuma: 09:00-18:00
                        <br />
                        <span className="text-sm text-gray-400">
                          Yüz yüze görüşme imkanı
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Using BentoGrid */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fethiye Web Tasarım Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fethiye&apos;nin turizm sektörüne özel, profesyonel web tasarım
                ve dijital pazarlama hizmetleri. Online rezervasyon, çok dilli
                destek ve SEO optimizasyonu.
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <BentoGrid />
            </Suspense>
          </div>
        </section>

        {/* Why Fethiye Web Design Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden Fethiye&apos;de WebCraft?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Fethiye&apos;de yerel olarak hizmet veren profesyonel web
                tasarım ajansı. Turizm sektörünü yakından tanıyan ekibimizle
                işletmenizi dijital dünyada öne çıkarıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yerel Hizmet
                </h3>
                <p className="text-gray-300">
                  Fethiye&apos;de yerleşik ofisimizle yüz yüze görüşme imkanı ve
                  hızlı destek hizmeti sağlıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Turizm Uzmanlığı
                </h3>
                <p className="text-gray-300">
                  Oteller, restoranlar ve turizm işletmeleri için özel
                  tasarlanmış web çözümleri sunuyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yerel SEO
                </h3>
                <p className="text-gray-300">
                  &quot;Fethiye otel&quot;, &quot;Fethiye restoran&quot; gibi
                  yerel aramalarda Google&apos;da üst sıralarda yer almanızı
                  sağlıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Online Rezervasyon
                </h3>
                <p className="text-gray-300">
                  Booking.com entegrasyonu ve online rezervasyon sistemleri ile
                  doluluk oranınızı artırıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Çok Dilli Destek
                </h3>
                <p className="text-gray-300">
                  Türkçe, İngilizce, Almanca, Rusça gibi dillerde web
                  sitelerinizi hazırlıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Hızlı Teslimat
                </h3>
                <p className="text-gray-300">
                  Sezon öncesi acil projelerinizi 2-4 hafta içinde teslim
                  ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fethiye Tourism Focus */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Fethiye Turizm Sektörüne Özel Çözümler
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fethiye&apos;nin turizm potansiyelini bilen ekibimizle
                  oteller, butik oteller, pansiyonlar, restoranlar, transfer
                  firmaları ve su sporları işletmeleri için özel web tasarım
                  çözümleri sunuyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Otel Web Siteleri
                      </h4>
                      <p className="text-gray-600">
                        Online rezervasyon, oda tanıtımları, fotoğraf galerileri
                        ve booking.com entegrasyonu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Restoran Web Siteleri
                      </h4>
                      <p className="text-gray-600">
                        Online menü, rezervasyon sistemi, Google Maps
                        entegrasyonu ve sosyal medya yönetimi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Yerel İşletmeler
                      </h4>
                      <p className="text-gray-600">
                        Fethiye&apos;deki tüm yerel işletmeler için kurumsal web
                        tasarımı ve Google My Business optimizasyonu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Fethiye Web Tasarım Çözümlerimiz
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Temel Web Tasarım</h4>
                    <p className="text-red-100 text-sm">
                      Küçük işletmeler için profesyonel kurumsal web siteleri
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Otel Web Tasarımı</h4>
                    <p className="text-red-100 text-sm">
                      Online rezervasyon sistemli, çok dilli otel web siteleri
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Özel Projeler</h4>
                    <p className="text-red-100 text-sm">
                      E-ticaret ve özel fonksiyonlu büyük çaplı projeler
                    </p>
                  </div>
                </div>
                <a
                  href="/iletisim"
                  className="mt-6 block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                >
                  Ücretsiz Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fethiye&apos;de İşletmenizi Dijitalleştirin
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Fethiye&apos;nin yerel dijital ajansı olarak işletmenizi online
              dünyada temsil ediyoruz. Hemen iletişime geçin, ücretsiz teklif
              alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905079441715"
                className="border border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                +90 (507) 944 17 15
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <ServiceFAQSection faqs={fethiyeFAQs} schema={fethiyeFAQSchema} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

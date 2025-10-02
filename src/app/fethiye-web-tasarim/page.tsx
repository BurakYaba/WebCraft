import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import { MapPin, Phone, Mail, Clock, Award, Users } from "lucide-react";

// Lazy load BentoGrid
const BentoGrid = lazy(() => import("@/components/BentoGrid"));
// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Fethiye Web Tasarım Ajansı | WebCraft - Profesyonel Web Sitesi Tasarımı",
  description:
    "Fethiye'de profesyonel web tasarım hizmeti. Fethiye işletmeleri için modern, responsive ve SEO uyumlu web sitesi tasarımı. Yerel web tasarım ajansı.",
  keywords:
    "Fethiye web tasarım, Fethiye web sitesi, Fethiye web tasarım ajansı, Fethiye dijital pazarlama, Muğla web tasarım",
  openGraph: {
    title: "Fethiye Web Tasarım Ajansı | WebCraft",
    description:
      "Fethiye'de profesyonel web tasarım hizmeti. Modern, responsive ve SEO uyumlu web sitesi tasarımı.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function FethiyeWebTasarimPage() {
  // Local Business Schema for Fethiye
  const fethiyeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebCraft Fethiye Web Tasarım Ajansı",
    description:
      "Fethiye'de profesyonel web tasarım ve dijital pazarlama hizmetleri",
    url: "https://www.webcraft.tr/fethiye-web-tasarim",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Babataşı Mahallesi, 778 Sokak No: 32/A",
      addressLocality: "Fethiye",
      addressRegion: "Muğla",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.6213",
      longitude: "29.1164",
    },
    telephone: "+90-507-944-17-15",
    email: "info@webcraft.com.tr",
    areaServed: {
      "@type": "City",
      name: "Fethiye",
    },
    serviceType: "Web Tasarım ve Dijital Pazarlama",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fethiye Web Tasarım Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fethiye Web Sitesi Tasarımı",
            description:
              "Fethiye işletmeleri için profesyonel web sitesi tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fethiye SEO Hizmeti",
            description: "Fethiye'de arama motoru optimizasyonu hizmetleri",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fethiyeSchema) }}
      />
      <div className="min-h-screen bg-[#181716]">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 ">
          {/* Watermark background - optimized for performance */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            F
          </div>

          {/* Decorative dots (SVG) - simplified */}
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
                  Fethiye Web Tasarım Ajansı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Fethiye&apos;de
                  <br />
                  <span className="text-red-600">Profesyonel Web Tasarım</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Fethiye&apos;deki işletmeniz için modern, responsive ve SEO
                  uyumlu web sitesi tasarımı. Yerel web tasarım uzmanları ile
                  dijital varlığınızı güçlendirin.
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
                    className="border border-gray-300 text-white hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - Local Info */}
              <div className="lg:w-1/2">
                <div className="bg-[#181716] p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Fethiye&apos;de Hizmet Veriyoruz
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">
                        Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">+90 (507) 944 17 15</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">
                        info@webcraft.com.tr
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">
                        Pazartesi-Cuma: 09:00-18:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden Fethiye&apos;de WebCraft?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Fethiye&apos;deki işletmeniz için web tasarım hizmeti
                arıyorsanız, yerel uzmanlığımız ve deneyimimizle fark
                yaratıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yerel Uzmanlık
                </h3>
                <p className="text-gray-300">
                  Fethiye&apos;de yaşıyoruz ve yerel pazarı çok iyi biliyoruz.
                  Fethiye işletmelerinin ihtiyaçlarını anlıyoruz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Kanıtlanmış Başarı
                </h3>
                <p className="text-gray-300">
                  Fethiye&apos;de 50+ başarılı proje tamamladık.
                  Müşterilerimizin %98&apos;i memnuniyetini belirtiyor.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Kişisel Yaklaşım
                </h3>
                <p className="text-gray-300">
                  Her projede doğrudan iletişim kuruyoruz. Fethiye&apos;deki
                  ofisimizde yüz yüze görüşebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative bg-white py-20 md:py-32 z-10">
          <div className="relative z-10 w-full">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-[#1f1e1d]">
                Fethiye Web Tasarım Hizmetleri
              </h2>
              <p className="text-lg md:text-xl text-[#6f6f6f] max-w-3xl mx-auto font-body">
                Fethiye&apos;deki işletmeniz için{" "}
                <strong>profesyonel web tasarım</strong>,
                <strong>SEO hizmeti</strong>,{" "}
                <strong>e-ticaret çözümleri</strong> ve
                <strong>dijital pazarlama</strong> hizmetleri sunuyoruz.
              </p>
            </div>
            <BentoGrid />
          </div>
        </section>
        {/* Local Business Focus */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Fethiye İşletmeleri İçin Özel Çözümler
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Fethiye&apos;nin turizm, tarım ve ticaret sektörlerindeki
                  işletmeleri için özel olarak tasarlanmış web çözümleri
                  sunuyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Turizm İşletmeleri
                      </h4>
                      <p className="text-gray-300">
                        Otel, pansiyon ve turizm acenteleri için rezervasyon
                        sistemli web siteleri
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Tarım İşletmeleri
                      </h4>
                      <p className="text-gray-300">
                        Tarım ürünleri satışı için e-ticaret ve katalog siteleri
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Yerel Ticaret
                      </h4>
                      <p className="text-gray-300">
                        Fethiye&apos;deki mağaza ve işletmeler için profesyonel
                        web varlığı
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Fethiye&apos;deki İşletmeniz İçin Web Sitesi Hazırlayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Fethiye&apos;de profesyonel web tasarım hizmeti için hemen
              iletişime geçin. Ücretsiz danışmanlık ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-[#181716] text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905079441715"
                className="border border-white text-white hover:bg-[#181716] hover:text-red-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                +90 (507) 944 17 15
              </a>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

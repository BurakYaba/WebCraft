import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  Award,
  Trophy,
  Star,
  Users,
  Clock,
  Shield,
  Zap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

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
  title: "En İyi Web Tasarım Ajansı | WebCraft",
  description:
    "Türkiye'nin en iyi web tasarım ajansı WebCraft. Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. 50+ başarılı proje, %98 müşteri memnuniyeti.",
  keywords:
    "en iyi web tasarım ajansı, Türkiye web tasarım ajansı, lider web ajansı, profesyonel web tasarım, web tasarım şirketi",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/en-iyi-web-tasarim-ajansi",
  },
  openGraph: {
    title: "En İyi Web Tasarım Ajansı | WebCraft",
    description:
      "Türkiye'nin en iyi web tasarım ajansı. Profesyonel web tasarım ve dijital pazarlama hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function EnIyiWebTasarimAjansiPage() {
  // Best Web Design Agency Schema
  const bestAgencySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebCraft - En İyi Web Tasarım Ajansı",
    description: "Türkiye'nin en iyi web tasarım ajansı",
    url: "https://www.webcraft.tr/en-iyi-web-tasarim-ajansi",
    logo: "https://www.webcraft.tr/webcraftLogo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-507-944-17-15",
      contactType: "customer service",
    },
    sameAs: ["https://www.webcraft.tr"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Tasarım Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Tasarım",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Hizmeti",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Ticaret",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bestAgencySchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Watermark background - optimized for performance */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            W
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
                  En İyi Web Tasarım Ajansı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Türkiye&apos;nin
                  <br />
                  <span className="text-red-600">Lider Web Ajansı</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri
                  ile işletmenizi dijital dünyada öne çıkarın. 50+ başarılı
                  proje.
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
                    WebCraft Uzmanları
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">
                        Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye - Muğla
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">+90 (507) 944 17 15</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">info@webcraft.tr</span>
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

        {/* Services Section - Using BentoGrid */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                WebCraft Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Profesyonel web tasarımından SEO optimizasyonuna, e-ticaret
                çözümlerinden dijital pazarlamaya kadar tüm hizmetlerimiz.
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <BentoGrid />
            </Suspense>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden Türkiye&apos;nin En İyi Web Ajansı?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                WebCraft olarak müşteri memnuniyeti odaklı yaklaşımımız ve
                profesyonel ekibimizle fark yaratıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  %98 Müşteri Memnuniyeti
                </h3>
                <p className="text-gray-300">
                  Müşterilerimizin %98&apos;i hizmetlerimizden memnun kalıyor.
                  Kalite odaklı yaklaşımımızın sonucu.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  50+ Başarılı Proje
                </h3>
                <p className="text-gray-300">
                  Farklı sektörlerden 50&apos;den fazla başarılı proje
                  tamamladık. Deneyimimiz gücümüz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Profesyonel Ekip
                </h3>
                <p className="text-gray-300">
                  Alanında uzman, deneyimli tasarımcı ve geliştiricilerden
                  oluşan profesyonel ekibimiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Features */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  WebCraft&apos;ın Avantajları
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Türkiye&apos;nin en iyi web tasarım ajansı olarak
                  müşterilerimize sunduğumuz benzersiz avantajlar ve kaliteli
                  hizmetler.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Hızlı Teslimat
                      </h4>
                      <p className="text-gray-600">
                        Modern teknolojiler ve deneyimli ekibimizle
                        projelerinizi zamanında teslim ediyoruz
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Sürekli Destek
                      </h4>
                      <p className="text-gray-600">
                        Proje tesliminden sonra da sürekli destek ve bakım
                        hizmetleri sunuyoruz
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Uygun Fiyatlar
                      </h4>
                      <p className="text-gray-600">
                        Kaliteli hizmetleri uygun fiyatlarla sunuyoruz.
                        Bütçenize uygun çözümler üretiyoruz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agency Process */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                WebCraft Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Profesyonel web tasarım sürecimizden proje teslimine kadar adım
                adım nasıl çalıştığımızı keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Görüşme
                </h3>
                <p className="text-gray-300">
                  İhtiyaçlarınızı dinleriz. Hedeflerinizi ve beklentilerinizi
                  analiz ederiz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Planlama
                </h3>
                <p className="text-gray-300">
                  Projenizi detaylı olarak planlarız. Teknik gereksinimleri ve
                  zaman çizelgesini belirleriz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. Geliştirme
                </h3>
                <p className="text-gray-300">
                  Modern teknolojilerle web sitenizi geliştiririz. Tasarım ve
                  kodlama aşamalarını tamamlarız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Teslimat
                </h3>
                <p className="text-gray-300">
                  Projenizi teslim ederiz. Eğitim ve sürekli destek hizmetleri
                  sunarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Türkiye&apos;nin En İyi Web Ajansı ile Çalışın
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel web tasarım hizmetleri için hemen iletişime geçin.
              Ücretsiz analiz ve teklif alın.
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
      </main>
    </>
  );
}

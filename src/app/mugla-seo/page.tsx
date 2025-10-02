import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
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
  title: "Muğla SEO Hizmeti | WebCraft - Arama Motoru Optimizasyonu",
  description:
    "Muğla'da profesyonel SEO hizmeti. Muğla işletmeleri için Google'da üst sıralarda yer alma garantisi. Yerel SEO uzmanları ile organik trafik artırın.",
  keywords:
    "Muğla SEO, Muğla SEO hizmeti, Muğla arama motoru optimizasyonu, Fethiye SEO, Muğla dijital pazarlama",
  openGraph: {
    title: "Muğla SEO Hizmeti | WebCraft",
    description:
      "Muğla'da profesyonel SEO hizmeti. Google'da üst sıralarda yer alma garantisi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function MuglaSeoPage() {
  // Local SEO Schema for Muğla
  const muglaSeoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Muğla SEO Hizmeti",
    description: "Muğla'da profesyonel arama motoru optimizasyonu hizmetleri",
    provider: {
      "@type": "LocalBusiness",
      name: "WebCraft",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fethiye",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Muğla",
    },
    serviceType: "SEO Hizmeti",
    offers: {
      "@type": "Offer",
      description: "Muğla'da profesyonel SEO hizmeti paketleri",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(muglaSeoSchema) }}
      />
      <div className="min-h-screen bg-[#181716]">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Watermark background - optimized for performance */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            M
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
                  Muğla SEO Hizmeti
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Muğla&apos;da
                  <br />
                  <span className="text-red-600">SEO Uzmanı</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Muğla&apos;daki işletmeniz için profesyonel SEO hizmeti.
                  Google&apos;da üst sıralarda yer alın ve organik trafiğinizi
                  artırın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    SEO Analizi Yap
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
                    Muğla&apos;da Hizmet Veriyoruz
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

        {/* Services Section - Using BentoGrid */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Muğla&apos;da Sunduğumuz SEO Hizmetleri
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Muğla işletmeleri için kapsamlı SEO çözümleri sunuyoruz. Teknik
                SEO&apos;dan içerik optimizasyonuna kadar tüm hizmetlerimiz.
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <BentoGrid />
            </Suspense>
          </div>
        </section>

        {/* Why SEO Matters Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Muğla&apos;da SEO Neden Önemli?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Muğla&apos;daki işletmeniz için SEO, dijital pazarlamanın en
                etkili yöntemlerinden biridir. Yerel müşterilerinize daha kolay
                ulaşın.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yerel Arama Görünürlüğü
                </h3>
                <p className="text-gray-300">
                  Muğla&apos;da &quot;restoran&quot;, &quot;otel&quot;,
                  &quot;mağaza&quot; aramalarında işletmeniz ilk sıralarda
                  görünsün.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Organik Trafik Artışı
                </h3>
                <p className="text-gray-300">
                  Google&apos;da üst sıralarda yer alarak ücretsiz organik
                  trafik kazanın.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Hedefli Müşteri
                </h3>
                <p className="text-gray-300">
                  Arama yapan müşteriler, satın alma niyeti yüksek kaliteli
                  müşterilerdir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Muğla Sektörleri İçin Özel SEO Stratejileri
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Muğla&apos;nın turizm, tarım ve ticaret sektörlerindeki
                  işletmeleri için özel olarak geliştirilmiş SEO stratejileri
                  uyguluyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Turizm SEO
                      </h4>
                      <p className="text-gray-600">
                        Otel, pansiyon ve turizm acenteleri için sezonsal SEO
                        stratejileri
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tarım SEO</h4>
                      <p className="text-gray-600">
                        Tarım ürünleri satışı için e-ticaret odaklı SEO
                        optimizasyonu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Yerel Ticaret SEO
                      </h4>
                      <p className="text-gray-600">
                        Muğla&apos;daki mağaza ve işletmeler için yerel SEO
                        stratejileri
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Process */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Muğla SEO Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Muğla&apos;daki işletmeniz için SEO çalışması nasıl yapılır?
                Adım adım sürecimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Analiz
                </h3>
                <p className="text-gray-300">
                  Mevcut SEO durumunuzu analiz ederiz. Rakip analizi ve anahtar
                  kelime araştırması yaparız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Strateji
                </h3>
                <p className="text-gray-300">
                  İşletmenize özel SEO stratejisi geliştiririz. Hedeflerinizi
                  belirleriz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. Uygulama
                </h3>
                <p className="text-gray-300">
                  SEO stratejisini uygularız. Teknik optimizasyon ve içerik
                  çalışmaları yaparız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Takip
                </h3>
                <p className="text-gray-300">
                  Performansı takip ederiz. Düzenli raporlar ve optimizasyon
                  önerileri sunarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Muğla&apos;da SEO Başarınızı Birlikte Yakalayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Muğla&apos;da profesyonel SEO hizmeti için hemen iletişime geçin.
              Ücretsiz SEO analizi ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-[#181716] text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz SEO Analizi
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

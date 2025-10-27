import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  Building2,
  Award,
  Globe,
  Star,
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
  title:
    "Kurumsal Web Sitesi Tasarımı | WebCraft - Profesyonel Kurumsal Kimlik",
  description:
    "Profesyonel kurumsal web sitesi tasarımı. Kurumsal kimlik, güvenilirlik ve profesyonel görünüm için modern kurumsal web çözümleri. Kurumsal web tasarım.",
  keywords:
    "kurumsal web sitesi, kurumsal web tasarımı, kurumsal kimlik, profesyonel web sitesi, kurumsal web çözümleri",
  openGraph: {
    title: "Kurumsal Web Sitesi Tasarımı | WebCraft",
    description:
      "Profesyonel kurumsal web sitesi tasarımı. Kurumsal kimlik ve güvenilirlik için modern çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function KurumsalWebSitesiPage() {
  // Corporate Website Service Schema
  const corporateSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kurumsal Web Sitesi Tasarımı",
    description:
      "Profesyonel kurumsal web sitesi tasarımı ve kurumsal kimlik çözümleri",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
    },
    serviceType: "Kurumsal Web Tasarımı",
    areaServed: "Turkey",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kurumsal Web Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal Web Sitesi Tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal Kimlik Tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal İçerik Yönetimi",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
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
            K
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
                  Kurumsal Web Sitesi
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Profesyonel
                  <br />
                  <span className="text-red-600">Kurumsal Kimlik</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Kurumsal web siteniz ile profesyonel görünüm kazanın.
                  Güvenilirlik ve kurumsal kimlik için modern web çözümleri.
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
                    Kurumsal Uzmanları
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
                Kurumsal Web Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Profesyonel kurumsal web sitesi tasarımından içerik yönetimine
                kadar tüm hizmetlerimiz. Kurumsal kimliğinizi güçlendirin.
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <BentoGrid />
            </Suspense>
          </div>
        </section>

        {/* Why Corporate Website Matters Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden Kurumsal Web Sitesi?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Kurumsal web siteniz, şirketinizin dijital dünyadaki yüzüdür.
                Profesyonel görünüm ve güvenilirlik için vazgeçilmezdir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Profesyonel Görünüm
                </h3>
                <p className="text-gray-300">
                  Modern tasarım ile şirketinizin profesyonel imajını
                  güçlendirin. Müşterilerinize güven verin.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Güvenilirlik
                </h3>
                <p className="text-gray-300">
                  Kurumsal web siteniz müşterilerinize güven verir. Şirketinizin
                  ciddiyetini ve profesyonelliğini yansıtır.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Global Erişim
                </h3>
                <p className="text-gray-300">
                  7/24 erişilebilir web siteniz ile dünyanın her yerinden
                  müşterilerinize ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Features */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Kurumsal Web Sitenizin Özellikleri
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Modern kurumsal web sitenizde bulunması gereken tüm özellikler
                  ve teknolojiler ile donatılmış çözümler sunuyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Kurumsal Kimlik Tasarımı
                      </h4>
                      <p className="text-gray-600">
                        Logo, renk paleti ve tipografi ile tutarlı kurumsal
                        kimlik tasarımı
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        İçerik Yönetim Sistemi
                      </h4>
                      <p className="text-gray-600">
                        Kolay kullanımlı CMS ile içeriklerinizi güncelleyin,
                        yeni sayfalar ekleyin
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        SEO Optimizasyonu
                      </h4>
                      <p className="text-gray-600">
                        Arama motorlarında üst sıralarda yer alarak organik
                        trafik ve görünürlük artışı sağlayın
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Process */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Kurumsal Web Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Kurumsal web sitenizin tasarımından yayına alınmasına kadar adım
                adım sürecimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Analiz
                </h3>
                <p className="text-gray-300">
                  Şirketinizi ve hedef kitlenizi analiz ederiz. Kurumsal kimlik
                  ve web stratejisi belirleriz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Tasarım
                </h3>
                <p className="text-gray-300">
                  Kurumsal kimliğinize uygun, profesyonel web tasarımı
                  geliştiririz. Mobil uyumlu çözümler sunarız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. Geliştirme
                </h3>
                <p className="text-gray-300">
                  CMS entegrasyonu, güvenlik önlemleri ve performans
                  optimizasyonu ile tam fonksiyonel site geliştiririz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Yayın
                </h3>
                <p className="text-gray-300">
                  Siteyi yayına alırız. SEO optimizasyonu ve sürekli destek ile
                  kurumsal web varlığınızı güçlendiririz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Kurumsal Başarınızı Birlikte Yakalayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel kurumsal web sitesi için hemen iletişime geçin.
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
      </div>
    </>
  );
}

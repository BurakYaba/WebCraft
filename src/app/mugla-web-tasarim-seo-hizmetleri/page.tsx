import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

// Lazy load components
const BentoGrid = lazy(() => import("@/components/BentoGrid"));
const Footer = lazy(() => import("@/components/Footer"));
const ServiceFAQSection = lazy(() => import("@/components/ServiceFAQSection"));

// Loading component
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Muğla Web Tasarım ve SEO Hizmetleri | Dijital Ajans | WebCraft",
  description:
    "Muğla'da profesyonel web tasarım ve SEO hizmetleri. Fethiye, Bodrum, Marmaris, Datça'da işletmelere özel dijital çözümler. Yerel SEO ve dijital pazarlama.",
  keywords:
    "Muğla web tasarım, Muğla SEO, Muğla dijital ajans, Fethiye web tasarım, Bodrum web sitesi, Marmaris dijital pazarlama",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/mugla-web-tasarim-seo-hizmetleri",
  },
  openGraph: {
    title: "Muğla Web Tasarım ve SEO Hizmetleri | Dijital Ajans | WebCraft",
    description:
      "Muğla'da profesyonel web tasarım ve SEO hizmetleri. Fethiye, Bodrum, Marmaris'te işletmelere özel dijital çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function MuglaWebTasarimPage() {
  // FAQ data
  const muglaFAQs = [
    {
      question: "Muğla'da web tasarım hizmeti veriyor musunuz?",
      answer:
        "Evet, Muğla'nın tüm ilçelerinde (Fethiye, Bodrum, Marmaris, Datça, Köyceğiz, Ortaca, Dalaman, Ula, Milas) profesyonel web tasarım hizmeti veriyoruz. Muğla merkezli ofisimizden tüm bölgeye hizmet sağlıyoruz.",
    },
    {
      question: "Muğla'da yerel SEO hizmeti sunuyor musunuz?",
      answer:
        "Evet, Muğla'daki işletmeler için yerel SEO (Local SEO) hizmeti sunuyoruz. Google Haritalar optimizasyonu, yerel anahtar kelimeler ve bölgesel dijital pazarlama stratejileri ile işletmenizin Muğla'da online görünürlüğünü artırıyoruz.",
    },
    {
      question: "Muğla turizm sektörüne özel web tasarım yapıyor musunuz?",
      answer:
        "Evet, Muğla'nın turizm odaklı ekonomisi için özel çözümler sunuyoruz. Otel, pansiyon, restoran, tekne turları, transfer hizmetleri gibi turizm işletmeleri için rezervasyon sistemli, çok dilli ve mobil uyumlu web siteleri tasarlıyoruz.",
    },
    {
      question: "Muğla'da hangi dillerde web sitesi yapabilirsiniz?",
      answer:
        "Türkçe, İngilizce, Almanca, Rusça gibi turistlerin kullandığı dillerde çok dilli web siteleri tasarlıyoruz. Özellikle Bodrum, Marmaris ve Fethiye gibi turizm bölgelerinde çok dilli siteler büyük avantaj sağlar.",
    },
    {
      question: "Muğla'da e-ticaret sitesi kurulumu yapıyor musunuz?",
      answer:
        "Evet, Muğla'daki işletmeler için e-ticaret web sitesi kurulumu yapıyoruz. Online satış platformu, güvenli ödeme sistemleri, kargo entegrasyonu ve stok yönetimi ile tam fonksiyonel e-ticaret siteleri geliştiriyoruz.",
    },
  ];

  // FAQPage schema
  const muglaFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    mainEntity: muglaFAQs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebCraft - Muğla Web Tasarım ve SEO",
    description:
      "Muğla ilinde profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri",
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
    telephone: "+90-507-944-17-15",
    email: "info@webcraft.tr",
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: [
      {
        "@type": "State",
        name: "Muğla",
      },
      {
        "@type": "City",
        name: "Fethiye",
      },
      {
        "@type": "City",
        name: "Bodrum",
      },
      {
        "@type": "City",
        name: "Marmaris",
      },
      {
        "@type": "City",
        name: "Datça",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
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
            M
          </div>

          {/* Decorative dots */}
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
                  Muğla Web Tasarım ve SEO
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Muğla&apos;da
                  <br />
                  <span className="text-red-600">Dijital Çözümler</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Fethiye, Bodrum, Marmaris ve tüm Muğla&apos;da profesyonel web
                  tasarım ve SEO hizmetleri. Yerel işletmelere özel dijital
                  pazarlama çözümleri.
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

              {/* Right Content - Local Info */}
              <div className="lg:w-1/2">
                <div className="bg-[#181716] p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Muğla Dijital Ajans
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

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Muğla&apos;da Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Web tasarımdan dijital pazarlamaya, SEO&apos;dan sosyal medya
                yönetimine kadar tüm dijital hizmetlerimiz
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <BentoGrid />
            </Suspense>
          </div>
        </section>

        {/* Why Muğla Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden Muğla&apos;da WebCraft?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Muğla&apos;nın ekonomik yapısını ve turizm sektörünü yakından
                tanıyan ekibimiz, bölgeye özel dijital çözümler sunuyor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yerel Bilgi
                </h3>
                <p className="text-gray-300">
                  Muğla&apos;nın turizm sektörünü ve yerel işletmelerin
                  ihtiyaçlarını yakından biliyoruz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yerel SEO
                </h3>
                <p className="text-gray-300">
                  Google Haritalar ve yerel aramalar için optimize edilmiş
                  çözümler.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Turizm Uzmanı
                </h3>
                <p className="text-gray-300">
                  Otel, pansiyon, restoran için özel çözümler sunuyoruz.
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
                  Muğla&apos;da 50+ başarılı proje tamamladık.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hizmet Verdiğimiz Bölgeler
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Muğla&apos;nın tüm ilçelerinde profesyonel web tasarım ve SEO
                hizmeti veriyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fethiye Web Tasarım
                </h3>
                <p className="text-gray-600 mb-4">
                  Turizm merkezi Fethiye&apos;de özel web tasarım çözümleri.
                </p>
                <a
                  href="/fethiye-web-tasarim-hizmetleri"
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  Detaylı Bilgi →
                </a>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Bodrum Web Tasarım
                </h3>
                <p className="text-gray-600">
                  Lüks turizm merkezi Bodrum&apos;da profesyonel çözümler.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Marmaris Web Tasarım
                </h3>
                <p className="text-gray-600">
                  Marmaris&apos;te yat turizmi ve su sporları sektörüne özel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Muğla&apos;da Dijital Başarınızı Birlikte Yakalayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel web tasarım ve SEO hizmetleri için hemen iletişime
              geçin. Ücretsiz analiz ve teklif alın.
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
          <ServiceFAQSection faqs={muglaFAQs} schema={muglaFAQSchema} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

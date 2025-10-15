import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";

// Lazy load Footer
const Footer = lazy(() => import("../../components/Footer"));

// Loading component
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Fethiye'de Web Tasarım Hizmeti | Profesyonel Web Sitesi Tasarımı | WebCraft",
  description:
    "Fethiye'de profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. 5 yıldır Fethiye'de hizmet veriyoruz. Ücretsiz teklif alın!",
  keywords: [
    "web tasarım Fethiye",
    "Fethiye web tasarım",
    "web tasarımcı Fethiye",
    "web tasarım ajansı Fethiye",
    "profesyonel web tasarım Fethiye",
    "web sitesi tasarımı Fethiye",
    "responsive web tasarım Fethiye",
    "modern web sitesi Fethiye",
    "web tasarım fiyatları Fethiye",
    "kurumsal web sitesi Fethiye",
  ],
  openGraph: {
    title:
      "Fethiye'de Web Tasarım Hizmeti | Profesyonel Web Sitesi Tasarımı | WebCraft",
    description:
      "Fethiye'de profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. 5 yıldır Fethiye'de hizmet veriyoruz.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fethiye'de Web Tasarım Hizmeti | Profesyonel Web Sitesi Tasarımı | WebCraft",
    description:
      "Fethiye'de profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. 5 yıldır Fethiye'de hizmet veriyoruz.",
  },
  alternates: {
    canonical: "/fethiye-web-tasarim-hizmeti",
  },
};

const FethiyeWebTasarimPage = () => {
  // Local Business Schema for Fethiye
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebCraft Web Tasarım Ajansı",
    description:
      "Fethiye'de profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri",
    url: "https://www.webcraft.tr/fethiye-web-tasarim-hizmeti",
    telephone: "+90-507-944-17-15",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fethiye",
      addressRegion: "Muğla",
      addressCountry: "TR",
      streetAddress: "Babataşı Mahallesi 778 Sokak No:32/A",
      postalCode: "48300",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.6213",
      longitude: "29.1161",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "₺₺",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    areaServed: {
      "@type": "City",
      name: "Fethiye",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Tasarım Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Sitesi Tasarımı",
            description: "Modern, responsive ve SEO uyumlu web sitesi tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Ticaret Web Sitesi",
            description: "Online mağaza kurulumu ve e-ticaret çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Hizmeti",
            description:
              "Arama motoru optimizasyonu ve Google'da üst sıralarda yer alma",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-[180px] pb-[120px] md:pt-[116px] md:pb-[90px] bg-gradient-to-br from-[#f8fafc] to-[#ffffff]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-[#f84525] text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wider">
                    FETHIYE WEB TASARIM
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                  Fethiye&apos;de Profesyonel{" "}
                  <span className="text-[#f84525]">Web Tasarım</span> Hizmeti
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  5 yıldır Fethiye&apos;de hizmet veren WebCraft olarak, modern,
                  responsive ve SEO uyumlu web siteleri tasarlıyoruz. İşinizi
                  dijital dünyada öne çıkaracak profesyonel çözümler sunuyoruz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/iletisim"
                    className="bg-[#f84525] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e03e1f] transition-colors duration-300 text-center"
                  >
                    Ücretsiz Teklif Al
                  </Link>
                  <Link
                    href="/islerimiz"
                    className="border-2 border-[#f84525] text-[#f84525] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#f84525] hover:text-white transition-colors duration-300 text-center"
                  >
                    Projelerimizi İncele
                  </Link>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/bento/web-tasarım.jpg"
                    alt="Fethiye Web Tasarım Hizmeti - WebCraft"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Fethiye&apos;de Sunduğumuz Web Tasarım Hizmetleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fethiye&apos;deki işletmeniz için kapsamlı dijital çözümler
                sunuyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#f84525] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Kurumsal Web Sitesi
                </h3>
                <p className="text-gray-600 mb-4">
                  Fethiye&apos;deki işletmeniz için profesyonel kurumsal web
                  sitesi tasarımı. Modern tasarım ve kullanıcı dostu arayüz.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Responsive tasarım</li>
                  <li>• SEO optimizasyonu</li>
                  <li>• Hızlı yükleme</li>
                  <li>• Mobil uyumlu</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#f84525] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  E-Ticaret Web Sitesi
                </h3>
                <p className="text-gray-600 mb-4">
                  Online satış yapmak isteyen Fethiye&apos;işletmeleri için
                  e-ticaret web sitesi. Güvenli ödeme sistemleri ve stok
                  yönetimi.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Online mağaza kurulumu</li>
                  <li>• Güvenli ödeme</li>
                  <li>• Stok yönetimi</li>
                  <li>• Sipariş takibi</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#f84525] rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-xl font-bold text-black mb-4">
                  SEO Hizmeti
                </h3>
                <p className="text-gray-600 mb-4">
                  Fethiye&apos;de Google&apos;da üst sıralarda yer almak için
                  SEO optimizasyonu. Organik trafik artışı ve görünürlük.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Anahtar kelime optimizasyonu</li>
                  <li>• İçerik optimizasyonu</li>
                  <li>• Teknik SEO</li>
                  <li>• Yerel SEO</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Neden Fethiye&apos;de WebCraft&apos;ı Seçmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5 yıllık deneyimimiz ve Fethiye&apos;deki yerel bilgimizle fark
                yaratıyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Yıllık Deneyim
                </h3>
                <p className="text-gray-600">
                  Fethiye&apos;de 5 yıldır hizmet veriyoruz
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Tamamlanan Proje
                </h3>
                <p className="text-gray-600">
                  Fethiye&apos;de başarıyla tamamladığımız projeler
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Destek</h3>
                <p className="text-gray-600">
                  Fethiye&apos;deki müşterilerimize 7/24 destek
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">%100</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Müşteri Memnuniyeti
                </h3>
                <p className="text-gray-600">
                  Fethiye&apos;deki müşterilerimizin memnuniyet oranı
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f84525]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fethiye&apos;de Web Tasarım Projenizi Başlatalım
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fethiye&apos;deki işletmeniz için profesyonel web tasarım hizmeti
              almak istiyorsanız, hemen iletişime geçin ve ücretsiz teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-white text-[#f84525] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz Teklif Al
              </Link>
              <Link
                href="tel:+905079441715"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#f84525] transition-colors duration-300"
              >
                Hemen Ara: 0507 944 17 15
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default FethiyeWebTasarimPage;

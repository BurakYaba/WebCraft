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
  title: "Muğla SEO Ajansı | Google'da Üst Sıralarda Yer Alın | WebCraft",
  description:
    "Muğla'da profesyonel SEO hizmeti! Google'da üst sıralarda yer alın. 5 yıldır Muğla'da hizmet veriyoruz. Organik trafik artışı garantisi. Ücretsiz SEO analizi!",
  keywords: [
    "SEO ajansı Muğla",
    "Muğla SEO",
    "SEO hizmeti Muğla",
    "dijital pazarlama Muğla",
    "Google optimizasyonu Muğla",
    "arama motoru optimizasyonu Muğla",
    "organik trafik Muğla",
    "web tasarım Muğla",
    "SEO uzmanı Muğla",
    "dijital ajans Muğla",
  ],
  openGraph: {
    title: "Muğla SEO Ajansı | Google'da Üst Sıralarda Yer Alın | WebCraft",
    description:
      "Muğla'da profesyonel SEO hizmeti! Google'da üst sıralarda yer alın. 5 yıldır Muğla'da hizmet veriyoruz. Organik trafik artışı garantisi.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muğla SEO Ajansı | Google'da Üst Sıralarda Yer Alın | WebCraft",
    description:
      "Muğla'da profesyonel SEO hizmeti! Google'da üst sıralarda yer alın. 5 yıldır Muğla'da hizmet veriyoruz. Organik trafik artışı garantisi.",
  },
  alternates: {
    canonical: "/mugla-seo-ajansi",
  },
};

const MuglaSeoAjansiPage = () => {
  // Local Business Schema for Muğla
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebCraft SEO Ajansı",
    description: "Muğla'da profesyonel SEO ve dijital pazarlama hizmetleri",
    url: "https://www.webcraft.tr/mugla-seo-ajansi",
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
    areaServed: [
      {
        "@type": "City",
        name: "Muğla",
      },
      {
        "@type": "City",
        name: "Fethiye",
      },
      {
        "@type": "City",
        name: "Marmaris",
      },
      {
        "@type": "City",
        name: "Bodrum",
      },
      {
        "@type": "City",
        name: "Datça",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yerel SEO",
            description: "Muğla'da yerel aramalarda üst sıralarda yer alma",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teknik SEO",
            description: "Web sitesi teknik optimizasyonu ve hız artırma",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "İçerik SEO",
            description: "Anahtar kelime odaklı içerik optimizasyonu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Link Building",
            description: "Kaliteli backlink oluşturma ve otorite artırma",
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
                    MUĞLA SEO AJANSI
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                  Muğla&apos;da Profesyonel &apos;SEO Hizmeti
                  <span className="text-[#f84525]">SEO Hizmeti</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  5 yıldır Muğla&apos;da hizmet veren WebCraft olarak,
                  Google&apos;da üst sıralarda yer almanızı sağlıyoruz. Organik
                  trafik artışı ve görünürlük garantisi ile işinizi büyütün.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/iletisim"
                    className="bg-[#f84525] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e03e1f] transition-colors duration-300 text-center"
                  >
                    Ücretsiz SEO Analizi
                  </Link>
                  <Link
                    href="/islerimiz"
                    className="border-2 border-[#f84525] text-[#f84525] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#f84525] hover:text-white transition-colors duration-300 text-center"
                  >
                    SEO Başarı Hikayeleri
                  </Link>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/bento/dijital-pazarlama.jpg"
                    alt="Muğla SEO Ajansı - WebCraft"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Muğla&apos;da Sunduğumuz SEO Hizmetleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Muğla&apos;daki işletmeniz için kapsamlı SEO çözümleri sunuyoruz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Yerel SEO</h3>
                <p className="text-gray-600 mb-4">
                  Muğla&apos;da yerel aramalarda üst sıralarda yer alın. Google
                  My Business optimizasyonu ve yerel anahtar kelimeler.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Google My Business optimizasyonu</li>
                  <li>• Yerel anahtar kelimeler</li>
                  <li>• Yerel backlink oluşturma</li>
                  <li>• Yerel içerik stratejisi</li>
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Teknik SEO
                </h3>
                <p className="text-gray-600 mb-4">
                  Web sitenizin teknik altyapısını optimize ediyoruz. Hız,
                  güvenlik ve arama motoru uyumluluğu.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Site hızı optimizasyonu</li>
                  <li>• Mobil uyumluluk</li>
                  <li>• Core Web Vitals</li>
                  <li>• XML sitemap optimizasyonu</li>
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
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  İçerik SEO
                </h3>
                <p className="text-gray-600 mb-4">
                  Anahtar kelime odaklı içerik stratejisi. Blog yazıları, sayfa
                  içerikleri ve meta optimizasyonu.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Anahtar kelime araştırması</li>
                  <li>• İçerik stratejisi</li>
                  <li>• Meta tag optimizasyonu</li>
                  <li>• Blog yazısı optimizasyonu</li>
                </ul>
              </div>

              {/* Service 4 */}
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Link Building
                </h3>
                <p className="text-gray-600 mb-4">
                  Kaliteli backlink oluşturma ve domain otoritesi artırma. Doğal
                  ve güvenli link stratejileri.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Kaliteli backlink oluşturma</li>
                  <li>• Domain otoritesi artırma</li>
                  <li>• Link profili analizi</li>
                  <li>• Doğal link stratejileri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Muğla&apos;da SEO Sürecimiz Nasıl İşliyor?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5 yıllık deneyimimizle kanıtlanmış SEO sürecimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  SEO Analizi
                </h3>
                <p className="text-gray-600">
                  Mevcut durumunuzu analiz ediyoruz
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Strateji Geliştirme
                </h3>
                <p className="text-gray-600">
                  Size özel SEO stratejisi oluşturuyoruz
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Uygulama</h3>
                <p className="text-gray-600">SEO stratejisini uyguluyoruz</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Takip & Raporlama
                </h3>
                <p className="text-gray-600">
                  Sonuçları takip edip raporluyoruz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Muğla&apos;da SEO Başarılarımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5 yıldır Muğla&apos;da elde ettiğimiz başarılı sonuçlar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">300%</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Organik Trafik Artışı
                </h3>
                <p className="text-gray-600">Ortalama müşteri trafik artışı</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Anahtar Kelime
                </h3>
                <p className="text-gray-600">
                  İlk sayfada yer alan anahtar kelimeler
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">6 Ay</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Ortalama Süre
                </h3>
                <p className="text-gray-600">İlk sonuçları görme süresi</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#f84525] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">%100</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Müşteri Memnuniyeti
                </h3>
                <p className="text-gray-600">
                  Muğla&apos;daki müşterilerimizin memnuniyet oranı
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f84525]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Muğla&apos;da SEO Projenizi Başlatalım
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Muğla&apos;daki işletmeniz için profesyonel SEO hizmeti almak
              istiyorsanız, hemen iletişime geçin ve ücretsiz SEO analizi alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-white text-[#f84525] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz SEO Analizi
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

export default MuglaSeoAjansiPage;

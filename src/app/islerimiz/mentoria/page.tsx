import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Mentoria - Özel Ders Platformu | WebCraft Projesi",
  description:
    "Mentoria için geliştirdiğimiz akıllı eşleştirme sistemiyle öğrenci ve öğretmenleri buluşturan güvenilir özel ders platformu. Next.js, React, TypeScript ile modern web tasarım projesi.",
  keywords:
    "mentoria, özel ders platformu, profesyonel web tasarım, web tasarım hizmeti, eğitim platformu, akıllı eşleştirme, Next.js web geliştirme, React web uygulaması, TypeScript, responsive web tasarım, modern web sitesi, kurumsal web tasarım, SEO uyumlu web sitesi, eğitim teknolojisi, web yazılım geliştirme",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/islerimiz/mentoria",
  },
  openGraph: {
    title: "Mentoria - Özel Ders Platformu | WebCraft",
    description:
      "Akıllı eşleştirme sistemiyle öğrenci ve öğretmenleri buluşturan güvenilir özel ders platformu web tasarım projesi.",
    url: "https://www.webcraft.tr/islerimiz/mentoria",
    siteName: "WebCraft",
    images: [
      {
        url: "/projects/mentoria.webp",
        width: 1200,
        height: 630,
        alt: "Mentoria - Özel Ders Platformu",
      },
    ],
    locale: "tr_TR",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentoriaProjectPage() {
  // Breadcrumb for Mentoria project page
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "İşlerimiz", url: "/islerimiz" },
      { name: "Mentoria", url: "/islerimiz/mentoria" },
    ]);

  // WebPage schema for the project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mentoria - Özel Ders Platformu",
    description:
      "Mentoria için geliştirdiğimiz akıllı eşleştirme sistemiyle öğrenci ve öğretmenleri buluşturan güvenilir özel ders platformu. Next.js, React, TypeScript ile modern web tasarım projesi.",
    url: "https://www.webcraft.tr/islerimiz/mentoria",
    inLanguage: "tr",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-10 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 " />
          <div className="absolute top-20 left-10 w-72 h-72  rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96  rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-red-50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-200">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-500 text-sm font-medium">
                    Eğitim Teknolojisi Platformu
                  </span>
                </div>

                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-red-500">Mentoria</span>
                  <br />
                  <span className="text-gray-900">Özel Ders Platformu</span>
                </h1>

                <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Öğrenci ve öğretmenleri akıllı eşleştirme algoritmasıyla
                  buluşturan Mentoria için{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    profesyonel web tasarım
                  </Link>{" "}
                  ve güvenli özel ders platformu geliştirdik.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8">
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      93+
                    </div>
                    <div className="text-sm text-gray-600">PageSpeed Score</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      Akıllı
                    </div>
                    <div className="text-sm text-gray-600">
                      Eşleştirme Sistemi
                    </div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      %99.9
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.mentoria.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-base hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
                  >
                    Siteyi Ziyaret Et
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <Link
                    href="/islerimiz"
                    className="inline-flex items-center gap-2 bg-white backdrop-blur-sm text-gray-900 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-base hover:bg-gray-100 transition-all duration-300 border border-gray-300"
                  >
                    ← Tüm Projeler
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20 border border-gray-200">
                  <Image
                    src="/projects/mentoria.webp"
                    alt="Mentoria - Özel Ders Platformu"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72  rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72  rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
                Proje Özeti: Eğitimde Dijital Dönüşüm
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Mentoria</strong>, öğrenci
                  ve öğretmenleri akıllı eşleştirme algoritmasıyla buluşturan
                  yenilikçi özel ders platformudur. WebCraft olarak,{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    profesyonel web tasarım
                  </Link>{" "}
                  ve modern teknolojiler kullanarak güvenilir bir eğitim
                  platformu geliştirdik.
                </p>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">
                    Akıllı eşleştirme sistemi
                  </strong>
                  , güvenli ödeme altyapısı ve{" "}
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    SEO uyumlu yapı
                  </Link>{" "}
                  ile sıfırdan bir eşleştirme platformu inşa ettik.
                  Öğrenci-öğretmen eşleştirmelerinde %85 başarı oranı ile
                  sektörde öncü konumdayız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Challenge - Problem-Solution Format */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Müşteri İhtiyacı ve Çözümümüz
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Özel ders piyasasında güven ve kalite sorunlarına çözüm
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge */}
              <div className="bg-red-50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-red-200">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-2xl font-bold text-gray-900">
                    Zorluklar
                  </h3>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Öğrenciler için{" "}
                      <strong className="text-gray-900">
                        uygun öğretmen bulma
                      </strong>{" "}
                      zorluğu ve zaman kaybı
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">Güven problemi</strong>{" "}
                      - Öğretmen kalitesi ve güvenilirlik teyit edilemiyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">Ödeme güvenliği</strong>{" "}
                      endişesi ve şeffaf olmayan işlemler
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Randevu ve takip sürecinde{" "}
                      <strong className="text-gray-900">
                        organizasyon eksikliği
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        Pazar parçalılığı
                      </strong>{" "}
                      - Dağınık öğretmen profilleri ve merkezi platform
                      eksikliği
                    </span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-green-50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-green-200">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
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
                  <h3 className="text-base md:text-2xl font-bold text-gray-900">
                    Çözümlerimiz
                  </h3>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Akıllı eşleştirme algoritması
                      </strong>{" "}
                      ile tercih, bütçe ve konuma göre ideal öğretmen bulma
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Detaylı profil ve değerlendirme sistemi
                      </strong>{" "}
                      ile öğretmen kalitesinin teyit edilmesi
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Stripe/İyzico entegrasyonu
                      </strong>{" "}
                      ile güvenli ve şeffaf ödeme altyapısı
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Entegre randevu sistemi
                      </strong>{" "}
                      ile takvim senkronizasyonu ve otomatik hatırlatmalar
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/hizmetler/performans-odakli-web-tasarim"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Merkezi platform
                      </Link>{" "}
                      ile tüm öğretmen profillerinin tek noktadan erişimi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Approach */}
        <section className="py-12 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Tasarım Yaklaşımımız
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Güvenilir, profesyonel ve kullanıcı dostu platform tasarımı
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Design Element 1 */}
              <div className="group bg-gray-50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Güven Odaklı Tasarım
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Profesyonel görünüm, detaylı öğretmen profilleri ve kullanıcı
                  değerlendirmeleri ile{" "}
                  <strong className="text-gray-900">güven</strong> yaratıyoruz.
                  Şeffaf süreç ve iletişim her adımda ön planda.
                </p>
              </div>

              {/* Design Element 2 */}
              <div className="group bg-gray-50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8 text-gray-900"
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
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Hızlı Eşleştirme
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Akıllı algoritma ile saniyeler içinde en uygun öğretmenleri
                  bulma. Filtreleme ve öneri sistemi ile{" "}
                  <strong className="text-gray-900">
                    %85 eşleşme başarısı
                  </strong>
                  .
                </p>
              </div>

              {/* Design Element 3 */}
              <div className="group bg-gray-50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Mobil Öncelikli
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Kullanıcıların %70&apos;i mobil cihaz kullandığı için{" "}
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    mobil öncelikli tasarım
                  </Link>{" "}
                  ile mükemmel deneyim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features - Numbered List */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Öne Çıkan Özellikler
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Mentoria&apos;yı sektörün lideri yapan platform özellikleri
              </p>
            </div>

            <div className="space-y-4 md:space-y-8">
              {/* Feature 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Akıllı Eşleştirme Algoritması
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Machine learning tabanlı öneri sistemi ile öğrenci
                    tercihlerini (ders, bütçe, konum, zaman) analiz ederek en
                    uygun öğretmenleri buluyoruz. Gerçek zamanlı filtreleme ve
                    puanlama ile %85 eşleşme başarısı.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Machine Learning
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Smart Matching
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Real-time
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Güvenli Ödeme Altyapısı
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Stripe ve İyzico entegrasyonu ile PCI-DSS uyumlu güvenli
                    ödeme sistemi. Escrow (emanet) hesap sistemi ile öğrenci ve
                    öğretmen koruması. Şeffaf işlem takibi ve otomatik fatura.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Stripe
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      İyzico
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Escrow System
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Detaylı Profil ve Değerlendirme Sistemi
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Öğretmenler için kapsamlı profil sistemi: deneyim, eğitim,
                    uzmanlık alanları, portfolio. Öğrenci değerlendirmeleri ve
                    puanlama sistemi ile kalite garantisi.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Profile Management
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Rating System
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Portfolio
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Entegre Randevu ve Takip Sistemi
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Google Calendar entegrasyonu ile otomatik randevu planlama.
                    Email ve SMS hatırlatmaları. Ders notları ve ilerleme
                    takibi. Video konferans entegrasyonu ile online dersler.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Calendar Sync
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Auto Reminders
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Video Lessons
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Grid with Emojis */}
        <section className="py-12 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Kullanılan Teknolojiler
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Güvenilir ve ölçeklenebilir altyapı için modern teknolojiler
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  name: "Next.js 14",
                  logo: "/tech-logos/nextjs.svg",
                  desc: "React Framework",
                },
                {
                  name: "TypeScript",
                  logo: "/tech-logos/typescript.svg",
                  desc: "Type Safety",
                },
                {
                  name: "TailwindCSS",
                  logo: "/tech-logos/tailwindcss.svg",
                  desc: "Styling",
                },
                {
                  name: "Stripe",
                  logo: "/tech-logos/stripe.svg",
                  desc: "Payments",
                },
                {
                  name: "PostgreSQL",
                  logo: "/tech-logos/postgresql.svg",
                  desc: "Database",
                },
                {
                  name: "React Query",
                  logo: "/tech-logos/reactquery.svg",
                  desc: "Data Fetching",
                },
                {
                  name: "Vercel",
                  logo: "/tech-logos/vercel.svg",
                  desc: "Deployment",
                },
                {
                  name: "Google Analytics",
                  logo: "/tech-logos/googleanalytics.svg",
                  desc: "Insights",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 hover:border-red-200 transition-colors text-center group"
                >
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-9 h-9 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Sonuçlar ve Etki
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Mentoria platformu ile elde edilen ölçülebilir başarılar
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  93+
                </div>
                <div className="text-gray-600 font-medium">PageSpeed Score</div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  %85
                </div>
                <div className="text-gray-600 font-medium">
                  Eşleşme Başarısı
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  TypeScript
                </div>
                <div className="text-gray-600 font-medium">
                  Güvenli Platform
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  %99.9
                </div>
                <div className="text-gray-600 font-medium">Uptime</div>
              </div>
            </div>

            {/* Detailed Impact */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  📈 İş Sonuçları
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Akıllı eşleştirme sistemi <strong>sıfırdan</strong>{" "}
                      geliştirildi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Güvenli <strong>ödeme altyapısı</strong> entegre edildi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Öğrenci-öğretmen eşleştirmelerinde{" "}
                      <strong>%85 başarı</strong> oranı
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Platform <strong>%99.9 uptime</strong> ile kesintisiz
                      hizmet veriyor
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ⚡ Teknik Başarılar
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      <strong>93+ Google PageSpeed Score</strong> (mobil ve
                      masaüstü)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Akıllı eşleştirme algoritması{" "}
                      <strong>2 saniye altında</strong> sonuç veriyor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Güvenli ödeme sistemi ile <strong>0 güvenlik</strong>{" "}
                      sorunu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      <strong>%99.9 uptime</strong> ile kesintisiz hizmet
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 md:py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-200">
              <svg
                className="w-12 h-12 text-red-500 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base md:text-xl text-gray-800 leading-relaxed mb-6">
                &ldquo;WebCraft ekibi, Mentoria platformunu baştan sona mükemmel
                bir şekilde geliştirdi. Akıllı eşleştirme sistemi
                beklentilerimizin ötesinde çalışıyor ve kullanıcılarımız
                platformdan çok memnun. Bu projeyle hayalimizi gerçeğe
                taşıdılar. platformun ne kadar başarılı olduğunu
                gösteriyor.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-gray-900">Mehmet Demir</div>
                  <div className="text-gray-600">Kurucu Ortak, Mentoria</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why WebCraft Section */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden WebCraft ile Çalışmalısınız?
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                2015&apos;ten beri 200+ başarılı proje deneyimi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Güvenli Platform Geliştirme
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ödeme sistemleri, kullanıcı verileri ve işlem güvenliği için
                  PCI-DSS uyumlu altyapı. SSL sertifikası, veri şifreleme ve
                  güvenlik testleri ile sıfır güvenlik sorunu garantisi.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-gray-900"
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
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Ölçeklenebilir Altyapı
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Binlerce eşzamanlı kullanıcıya hizmet verebilen güçlü altyapı.
                  PostgreSQL, Redis ve CDN kullanımı ile yüksek performans.
                  Vercel Edge ile global erişim.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Modern Teknolojiler
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Next.js, TypeScript, TailwindCSS gibi güncel teknolojiler ile
                  gelecek odaklı çözümler. Responsive tasarım ve SEO
                  optimizasyonu her projemizde standart.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Sürekli Destek ve Geliştirme
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Proje teslim sonrası sürekli destek ve güncelleme hizmetleri.
                  Kullanıcı geri bildirimlerine göre yeni özellik eklemeleri.
                  7/24 teknik destek.
                </p>
              </div>
            </div>

            {/* Authority Content */}
            <div className="bg-red-50 rounded-2xl p-8 md:p-12 border border-red-200">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">WebCraft</strong> olarak, 2015
                yılından bu yana{" "}
                <Link
                  href="/hizmetler/web-tasarim"
                  className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                >
                  profesyonel web tasarım
                </Link>{" "}
                ve{" "}
                <Link
                  href="/hizmetler/yazilim-gelistirme"
                  className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                >
                  yazılım geliştirme hizmetleri
                </Link>{" "}
                sunuyoruz. 200+ başarılı proje deneyimimiz ile işletmenizin
                dijital varlığını güçlendiriyoruz.
              </p>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                Mentoria projesi, karmaşık eğitim platformlarında nasıl
                güvenilir, ölçeklenebilir ve kullanıcı dostu çözümler
                geliştirdiğimizi gösteriyor. Her projede, müşteri ihtiyaçlarına
                özel çözümler sunuyor ve dijital pazarlama başarısını
                hedefliyoruz.
              </p>
              <div className="text-center pt-6">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-base hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Ücretsiz Teklif Alın
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                İlgili Blog Yazıları
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Eğitim platformları ve web geliştirme hakkında daha fazla bilgi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/blog/kobi-dijital-donusum-rehberi"
                className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  KOBİ Dijital Dönüşüm Rehberi
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  İşletmenizi dijital dünyaya taşıyın. Platform geliştirme ve
                  dijital dönüşüm stratejileri.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>

              <Link
                href="/blog/teknik-seo-kontrol-listesi"
                className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Teknik SEO Kontrol Listesi
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Web sitenizin Google&apos;da üst sıralarda yer alması için
                  teknik SEO kontrol listesi.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>

              <Link
                href="/blog/web-sitesi-hizi-nasil-artirilir"
                className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Web Sitesi Hızı Nasıl Artırılır?
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Performans optimizasyonu teknikleri ile yükleme sürelerini
                  minimize edin.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Diğer Projelerimiz
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Başarıyla tamamladığımız projelerimizi keşfedin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link
                href="/islerimiz/fluenta-ai"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/fluenta.webp"
                    alt="Fluenta"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-red-500 font-medium">
                    AI Eğitim Platformu
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-500 transition-colors">
                    Fluenta İngilizce Öğrenme
                  </h3>
                  <p className="text-gray-600">
                    AI destekli 3D avatarlarla etkileşimli İngilizce öğrenme
                    platformu
                  </p>
                </div>
              </Link>

              <Link
                href="/islerimiz/skoll-beauty"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/skoll.webp"
                    alt="Skoll Salon"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-red-500 font-medium">
                    Güzellik Salonu
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-500 transition-colors">
                    Skoll Salon Dijital Dönüşüm
                  </h3>
                  <p className="text-gray-600">
                    Online randevu sistemi ve yerel SEO ile dijital varlık
                  </p>
                </div>
              </Link>

              <Link
                href="/islerimiz/atlantis"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/atlantis.webp"
                    alt="Atlantis Kreş"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-red-500 font-medium">
                    Eğitim Kurumu
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-500 transition-colors">
                    Atlantis Kreş Web Sitesi
                  </h3>
                  <p className="text-gray-600">
                    Montessori eğitim modeli ile modern kreş web sitesi
                  </p>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/islerimiz"
                className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-base hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Tüm Projeleri Görüntüle
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

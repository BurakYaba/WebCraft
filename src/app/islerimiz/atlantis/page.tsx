import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Atlantis Kreş - Modern Anaokulu Web Sitesi | WebCraft Projesi",
  description:
    "Atlantis Kreş için geliştirdiğimiz Montessori, Reggio Emilia ve High Scope eğitim modelleriyle modern kreş web sitesi. Veli portalı, online kayıt ve galeri sistemi.",
  keywords:
    "atlantis kreş, anaokulu web sitesi, profesyonel web tasarım, web tasarım hizmeti, kreş web sitesi, eğitim kurumu, montessori, Next.js web geliştirme, responsive web tasarım, modern web sitesi, kurumsal web tasarım, SEO uyumlu web sitesi, muğla kreş, web yazılım geliştirme",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/islerimiz/atlantis",
  },
  openGraph: {
    title: "Atlantis Kreş - Modern Anaokulu Web Sitesi | WebCraft",
    description:
      "Montessori eğitim modeli ile modern kreş web sitesi tasarımı. Veli portalı ve online kayıt sistemi.",
    url: "https://www.webcraft.tr/islerimiz/atlantis",
    siteName: "WebCraft",
    images: [
      {
        url: "/projects/atlantis.webp",
        width: 1200,
        height: 630,
        alt: "Atlantis Kreş ve Gündüz Bakımevi",
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

export default function AtlantisProjectPage() {
  // Breadcrumb for Atlantis project page
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "İşlerimiz", url: "/islerimiz" },
      { name: "Atlantis Kreş", url: "/islerimiz/atlantis" },
    ]);

  // WebPage schema for the project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Atlantis Kreş - Modern Anaokulu Web Sitesi",
    description:
      "Atlantis Kreş için geliştirdiğimiz Montessori, Reggio Emilia ve High Scope eğitim modelleriyle modern kreş web sitesi. Veli portalı, online kayıt ve galeri sistemi.",
    url: "https://www.webcraft.tr/islerimiz/atlantis",
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
                    Eğitim Kurumu Web Sitesi
                  </span>
                </div>

                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-red-500">Atlantis Kreş</span>
                  <br />
                  <span className="text-gray-900">Modern Anaokulu</span>
                </h1>

                <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Montessori, Reggio Emilia ve High Scope eğitim modelleriyle
                  Muğla&apos;nın önde gelen kreşi Atlantis için{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    modern web sitesi
                  </Link>{" "}
                  ve veli portalı geliştirdik.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8">
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      92+
                    </div>
                    <div className="text-sm text-gray-600">PageSpeed Score</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      Veli Portalı
                    </div>
                    <div className="text-sm text-gray-600">7/24 Erişim</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      Next.js 14
                    </div>
                    <div className="text-sm text-gray-600">Platform</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.atlantiskres.com/"
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
                    src="/projects/atlantis.webp"
                    alt="Atlantis Kreş ve Gündüz Bakımevi"
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
                Proje Özeti: Eğitimde Dijital Yenilik
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Atlantis Kreş</strong>,
                  Montessori, Reggio Emilia ve High Scope eğitim modelleriyle
                  Muğla&apos;nın önde gelen anaokullarından biridir. WebCraft
                  olarak,{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    profesyonel web tasarım
                  </Link>{" "}
                  ve veli portalı ile modern bir dijital deneyim oluşturduk.
                </p>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">
                    Online kayıt sistemi
                  </strong>
                  , günlük aktivite paylaşımları ve{" "}
                  <Link
                    href="/blog/yerel-seo-stratejileri"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    yerel SEO optimizasyonu
                  </Link>{" "}
                  ile velilerin bilgiye ve başvuru sürecine kolayca erişebildiği
                  kurumsal bir dijital varlık oluşturduk.
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
                Kreş sektöründe dijital varlık ve veli iletişimi zorlukları
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
                      Eski web sitesi{" "}
                      <strong className="text-gray-900">
                        mobil uyumlu değildi
                      </strong>{" "}
                      ve modern görünmüyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Veliler çocuklarının günlük aktivitelerini{" "}
                      <strong className="text-gray-900">
                        takip edemiyordu
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">Online kayıt</strong>{" "}
                      sistemi yoktu, her şey manuel yapılıyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Eğitim programları ve etkinlikler{" "}
                      <strong className="text-gray-900">
                        web sitesinde net değildi
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Google&apos;da{" "}
                      <strong className="text-gray-900">
                        &quot;Muğla kreş&quot; aramalarında
                      </strong>{" "}
                      görünmüyordu
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
                      <Link
                        href="/hizmetler/performans-odakli-web-tasarim"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Modern responsive tasarım
                      </Link>{" "}
                      ile tüm cihazlarda mükemmel görünüm
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">Veli portalı</strong>{" "}
                      ile günlük aktivite fotoğrafları ve raporlar
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Online kayıt formu
                      </strong>{" "}
                      ile 7/24 başvuru kabul sistemi
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Detaylı{" "}
                      <strong className="text-gray-900">
                        eğitim programı sayfaları
                      </strong>{" "}
                      (Montessori, Reggio, High Scope)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/blog/yerel-seo-stratejileri"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Yerel SEO optimizasyonu
                      </Link>{" "}
                      ile &quot;Muğla kreş&quot; aramalarında üst sıralarda yer
                      alma
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
                Çocuk dostu, güvenli ve modern eğitim kurumu tasarımı
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Çocuk Dostu Tasarım
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Canlı renkler, sevimli ikonlar ve eğlenceli animasyonlarla
                  çocukların ilgisini çeken, velilere güven veren profesyonel
                  görünüm.
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
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Görsel Hikaye Anlatımı
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Yüksek kaliteli fotoğraf galerisi ile günlük aktiviteler,
                  etkinlikler ve çocukların mutlu anlarını velilerle paylaşma.
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Güvenli Veli Portalı
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Şifreli giriş ile velilerin sadece kendi çocuklarının
                  fotoğraflarını ve raporlarını görebildiği güvenli sistem.
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
                Atlantis Kreş web sitesini özel kılan platform özellikleri
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
                  <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3">
                    Veli Portalı ve Günlük Raporlar
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Velilerin kendi hesaplarından çocuklarının günlük
                    aktivitelerini, fotoğraflarını ve gelişim raporlarını takip
                    edebildiği güvenli portal. Öğretmenler tarafından yüklenen
                    içerikler anında velilere bildirim olarak ulaşıyor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Parent Portal
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Daily Reports
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Photo Gallery
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
                  <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3">
                    Online Kayıt ve Başvuru Sistemi
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    7/24 erişilebilir online kayıt formu ile veliler istedikleri
                    zaman başvuru yapabiliyor. Otomatik email onayları ve kampüs
                    turu randevusu sistemi. Form verileri direkt CRM sistemine
                    aktarılıyor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Online Forms
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Auto Confirmation
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      CRM Integration
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
                  <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3">
                    Eğitim Programları Showcase
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Montessori, Reggio Emilia ve High Scope eğitim modellerinin
                    detaylı tanıtımı. Her program için ayrı sayfalar, fotoğraf
                    galerileri ve program avantajları. Velilerin doğru eğitim
                    modelini seçmesine yardımcı bilgilendirici içerikler.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Montessori
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Reggio Emilia
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      High Scope
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
                  <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3">
                    Yerel SEO ve Online Görünürlük
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    &quot;Muğla kreş&quot;, &quot;Fethiye anaokulu&quot;,
                    &quot;Montessori kreş Muğla&quot; gibi aramalarında
                    Google&apos;da üst sıralarda yer alma.{" "}
                    <Link
                      href="/blog/yerel-seo-stratejileri"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      Yerel SEO
                    </Link>{" "}
                    optimizasyonu ile &quot;Muğla kreş&quot; aramalarında üst
                    sıralarda görünürlük sağlandı.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Local SEO
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Google Maps
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Schema Markup
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
                Güvenli ve performanslı kreş web sitesi altyapısı
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Next.js 14", logo: "/tech-logos/nextjs.svg", desc: "React Framework" },
                { name: "TypeScript", logo: "/tech-logos/typescript.svg", desc: "Type Safety" },
                { name: "TailwindCSS", logo: "/tech-logos/tailwindcss.svg", desc: "Styling" },
                { name: "Cloudinary", logo: "/tech-logos/cloudinary.svg", desc: "Media Storage" },
                { name: "PostgreSQL", logo: "/tech-logos/postgresql.svg", desc: "Database" },
                { name: "Prisma ORM", logo: "/tech-logos/prisma.svg", desc: "Security & Auth" },
                { name: "Vercel", logo: "/tech-logos/vercel.svg", desc: "Deployment" },
                { name: "Google Analytics", logo: "/tech-logos/googleanalytics.svg", desc: "Insights" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 hover:border-red-200 transition-colors text-center group"
                >
                  <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={tech.logo} alt={tech.name} className="w-9 h-9 object-contain" loading="lazy" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{tech.name}</h3>
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
                Atlantis Kreş web sitesi ile elde edilen ölçülebilir başarılar
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  7/24
                </div>
                <div className="text-gray-600 font-medium">
                  Online Kayıt Erişimi
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  Veli Portalı
                </div>
                <div className="text-gray-600 font-medium">
                  Aktif Kullanımda
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  92+
                </div>
                <div className="text-gray-600 font-medium">PageSpeed Score</div>
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
                      Online başvuru sistemi{" "}
                      <strong>7/24 erişilir halde</strong> çalışıyor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Veli portalı üzerinden <strong>günlük aktivite</strong> ve
                      raporların paylaşımı aktif olarak yürütülüyor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Veli geri bildirimleri olumlu —{" "}
                      <strong>portal kullanımı sürekli artıyor</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      &quot;Muğla kreş&quot; aramalarında{" "}
                      <strong>ilk 3 sırada</strong> yer alıyor
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
                      <strong>92+ Google PageSpeed Score</strong> (mobil ve
                      masaüstü)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Veli portalı <strong>günde ortalama 150</strong> oturum
                      alıyor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Fotoğraf ve video yükleme sistemi{" "}
                      <strong>sorunsuz çalışıyor</strong>
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
                &ldquo;WebCraft ekibi, Atlantis Kreş için harika bir web sitesi
                oluşturdu. Veli portalı velilerimiz tarafından çok beğenildi ve
                sürekli kullanılıyor. Online başvuru ve veli iletişimi çok daha
                kolay hale geldi. Profesyonel yaklaşımları ve sürekli destek
                hizmetleri için çok teşekkür ederiz.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-gray-900">Erinç Uygar</div>
                  <div className="text-gray-600">
                    Kurucu Müdür, Atlantis Kreş
                  </div>
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Eğitim Sektörü Deneyimi
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Kreş, anaokulu ve eğitim kurumları için özel çözümler. Veli
                  portalı, online kayıt sistemleri ve eğitim içeriklerinde
                  uzmanız. Güvenli ve çocuk dostu tasarımlar.
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Yerel SEO Uzmanlığı
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <Link
                    href="/blog/yerel-seo-stratejileri"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    Yerel SEO
                  </Link>{" "}
                  stratejileriyle &quot;Muğla kreş&quot;, &quot;Fethiye
                  anaokulu&quot; gibi aramalarında üst sıralarda yer almanızı
                  sağlıyoruz. Google Maps ve yerel dizinler optimizasyonu.
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Güvenli Veli Portalları
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Şifreli giriş, rol bazlı erişim ve veri şifreleme ile güvenli
                  veli portalları. Çocuk fotoğrafları ve kişisel veriler için
                  KVKK uyumlu sistemler.
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Sürekli Destek ve Eğitim
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Proje teslim sonrası öğretmen ve yöneticilere sistem eğitimi.
                  Veli portalı kullanımı için video kılavuzlar. 7/24 teknik
                  destek ve düzenli güncellemeler.
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
                Atlantis Kreş projesi, eğitim kurumları için nasıl güvenli,
                kullanıcı dostu ve etkili dijital çözümler geliştirdiğimizi
                gösteriyor. Kreş, anaokulu ve eğitim kurumları için özel veli
                portalları ve online kayıt sistemleriyle dijital dönüşüm
                sağlıyoruz.
              </p>
              <div className="text-center pt-6">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-5 py-2.5 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
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
                Eğitim kurumları ve yerel SEO hakkında daha fazla bilgi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/blog/yerel-seo-stratejileri"
                className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  📍
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Yerel SEO Stratejileri
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  İşletmenizi bölgesel aramalarında öne çıkarın. Google Maps ve
                  yerel dizin optimizasyonu.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>

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
                href="/islerimiz/mentoria"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/mentoria.webp"
                    alt="Mentoria"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-red-500 font-medium">
                    Eğitim Platformu
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-500 transition-colors">
                    Mentoria Özel Ders Platformu
                  </h3>
                  <p className="text-gray-600">
                    Öğrenci-öğretmen eşleştirme sistemi ve güvenli platform
                  </p>
                </div>
              </Link>

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
            </div>

            <div className="text-center">
              <Link
                href="/islerimiz"
                className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-5 py-2.5 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
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

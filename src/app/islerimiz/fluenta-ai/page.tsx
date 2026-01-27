import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fluenta - AI Destekli İngilizce Öğrenme Platformu | WebCraft Projesi",
  description:
    "Fluenta için geliştirdiğimiz AI destekli 3D avatarlarla interaktif İngilizce öğrenme platformu. Next.js, React, TypeScript kullanarak modern web tasarım projesi.",
  keywords:
    "fluenta, profesyonel web tasarım, web tasarım hizmeti, AI destekli eğitim, yapay zeka, Next.js web geliştirme, React web uygulaması, TypeScript, responsive web tasarım, modern web sitesi, kurumsal web tasarım, SEO uyumlu web sitesi, ingilizce öğrenme platformu, web yazılım geliştirme",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/islerimiz/fluenta-ai",
  },
  openGraph: {
    title: "Fluenta - AI Destekli İngilizce Öğrenme Platformu | WebCraft",
    description:
      "AI destekli 3D avatarlarla interaktif İngilizce öğrenme platformu web tasarım projesi.",
    url: "https://www.webcraft.tr/islerimiz/fluenta-ai",
    siteName: "WebCraft",
    images: [
      {
        url: "/projects/fluenta.png",
        width: 1200,
        height: 630,
        alt: "Fluenta - AI Destekli İngilizce Öğrenme Platformu",
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

export default function FluentaProjectPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden">
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
                    AI Destekli Eğitim Platformu
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-red-500">Fluenta</span>
                  <br />
                  <span className="text-gray-900">İngilizce Öğrenme</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Yapay zeka destekli 3D avatarlarla etkileşimli İngilizce
                  öğrenme platformu Fluenta için{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    modern web tasarım
                  </Link>{" "}
                  ve{" "}
                  <Link
                    href="/hizmetler/yazilim-gelistirme"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    yazılım geliştirme
                  </Link>{" "}
                  hizmeti sunduk.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      95+
                    </div>
                    <div className="text-sm text-gray-600">PageSpeed Score</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      3000+
                    </div>
                    <div className="text-sm text-gray-600">Aktif Kullanıcı</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      4.8/5
                    </div>
                    <div className="text-sm text-gray-600">Memnuniyet</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.fluenta-ai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
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
                    className="inline-flex items-center gap-2 bg-white backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 border border-gray-300"
                  >
                    ← Tüm Projeler
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20 border border-gray-200">
                  <Image
                    src="/projects/fluenta.png"
                    alt="Fluenta - AI Destekli İngilizce Öğrenme Platformu"
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
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proje Özeti: AI ile Dil Öğreniminde Yeni Dönem
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Fluenta</strong>, İngilizce
                  öğrenmeyi yapay zeka teknolojisi ile birleştiren yenilikçi bir
                  eğitim platformudur. WebCraft olarak,{" "}
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    performans odaklı web tasarım
                  </Link>{" "}
                  ve modern teknolojiler kullanarak, kullanıcı deneyimini ön
                  planda tutan bir platform geliştirdik.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  3D avatarlarla etkileşimli öğrenme deneyimi,{" "}
                  <strong className="text-gray-900">
                    Next.js 15 ve TypeScript
                  </strong>{" "}
                  ile güçlü altyapı ve{" "}
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    SEO uyumlu yapı
                  </Link>{" "}
                  ile organik trafiği %200 artırdık. İlk 3 ayda 3000+ aktif
                  kullanıcıya ulaşan başarılı bir eğitim platformu oluşturduk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Challenge - Problem-Solution Format */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Müşteri İhtiyacı ve Çözümümüz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Online eğitim platformunda performans ve kullanıcı deneyimi
                zorlukları
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge */}
              <div className="bg-red-50 backdrop-blur-sm rounded-2xl p-8 border border-red-200">
                <div className="flex items-center gap-3 mb-6">
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    Zorluklar
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        3D avatarların performansı
                      </strong>{" "}
                      web tarayıcılarında optimize edilmeliydi
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Farklı öğrenme seviyelerinde{" "}
                      <strong className="text-gray-900">
                        karmaşık kullanıcı akışları
                      </strong>{" "}
                      sezgisel hale getirilmeliydi
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        Mobil cihazlarda performans
                      </strong>{" "}
                      sorunları ve yavaş yükleme süreleri
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Google&apos;da üst sıralarda{" "}
                      <strong className="text-gray-900">SEO görünürlüğü</strong>{" "}
                      eksikliği
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        Ölçeklenebilir altyapı
                      </strong>{" "}
                      ihtiyacı (binlerce eşzamanlı kullanıcı)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-green-50 backdrop-blur-sm rounded-2xl p-8 border border-green-200">
                <div className="flex items-center gap-3 mb-6">
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    Çözümlerimiz
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/blog/web-sitesi-hizi-nasil-artirilir"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        WebGL optimizasyonu
                      </Link>{" "}
                      ve progressive rendering ile 3D avatarlar sorunsuz
                      çalışıyor
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Sezgisel kullanıcı arayüzü
                      </strong>{" "}
                      ile iteratif tasarım ve kullanıcı testleri
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/hizmetler/performans-odakli-web-tasarim"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Mobil öncelikli responsive tasarım
                      </Link>{" "}
                      ve{" "}
                      <Link
                        href="/blog/core-web-vitals-rehberi"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Core Web Vitals
                      </Link>{" "}
                      optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/hizmetler/seo-uyumlu-web-sitesi"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Server-side rendering ve SEO
                      </Link>{" "}
                      ile Google&apos;da üst sıralarda yer alma
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Next.js 15 ve Vercel Edge
                      </strong>{" "}
                      ile küresel ölçekte hızlı ve güvenilir altyapı
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Approach */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tasarım Yaklaşımımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern, minimalist ve kullanıcı odaklı tasarım dili
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Design Element 1 */}
              <div className="group bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Minimalist Tasarım
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Temiz ve{" "}
                  <Link
                    href="/blog/minimalist-tasarim-yaklasimlari"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    minimalist tasarım yaklaşımı
                  </Link>{" "}
                  ile kullanıcıların odaklanmasını sağladık. Modern renk paleti
                  ve tipografi ile profesyonel görünüm.
                </p>
              </div>

              {/* Design Element 2 */}
              <div className="group bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-gray-900"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Responsive Deneyim
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mobil öncelikli yaklaşımla tüm cihazlarda mükemmel çalışan
                  arayüz. Tablet ve telefonda 3D avatarlar optimize edilmiş
                  performansla çalışıyor.
                </p>
              </div>

              {/* Design Element 3 */}
              <div className="group bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-gray-900"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hız Optimizasyonu
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <Link
                    href="/blog/core-web-vitals-rehberi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    Core Web Vitals
                  </Link>{" "}
                  optimizasyonu ile 95+ PageSpeed skoru. Code splitting, lazy
                  loading ve CDN kullanımı ile yıldırım hızı.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features - Numbered List */}
        <section className="py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Öne Çıkan Özellikler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fluenta platformunu benzersiz kılan teknik ve tasarım
                özellikleri
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-8 items-start bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    AI Destekli 3D Avatar Sistemi
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kullanıcılarla gerçek zamanlı konuşabilen, doğal dil işleme
                    teknolojisiyle güçlendirilmiş 3D avatarlar. WebGL
                    optimizasyonu ile tüm cihazlarda akıcı çalışma.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      WebGL
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      AI/ML
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Real-time
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-8 items-start bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Kişiselleştirilmiş Öğrenme Yolları
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kullanıcının seviyesine ve öğrenme hızına göre dinamik
                    olarak uyarlanan müfredat. AI algoritmaları ile zayıf yönler
                    tespit edilip özel egzersizler öneriliyor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Adaptive Learning
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Analytics
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Personalization
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-8 items-start bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Performans Odaklı Altyapı
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Next.js 15, TypeScript ve Vercel Edge ile küresel ölçekte
                    yüksek performans. Server-side rendering ve{" "}
                    <Link
                      href="/blog/core-web-vitals-rehberi"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      Core Web Vitals
                    </Link>{" "}
                    optimizasyonu ile 95+ PageSpeed skoru.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Next.js 15
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Vercel Edge
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-8 items-start bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-500 text-gray-900 rounded-2xl flex items-center justify-center text-3xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    SEO ve Organik Büyüme
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <Link
                      href="/hizmetler/seo-uyumlu-web-sitesi"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      SEO uyumlu yapı
                    </Link>
                    , schema markup ve semantic HTML ile arama motorlarında üst
                    sıralarda yer alma. İlk 3 ayda organik trafik %200 arttı.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Technical SEO
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Schema Markup
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-500 text-sm font-medium rounded-full">
                      Organic Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Grid with Emojis */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kullanılan Teknolojiler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern web teknolojileri ile güçlü ve ölçeklenebilir altyapı
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Tech items */}
              {[
                { name: "Next.js 15", emoji: "⚡", desc: "React Framework" },
                { name: "TypeScript", emoji: "📘", desc: "Type Safety" },
                { name: "TailwindCSS", emoji: "🎨", desc: "Styling" },
                { name: "Framer Motion", emoji: "✨", desc: "Animations" },
                { name: "WebGL", emoji: "🎮", desc: "3D Graphics" },
                { name: "AI/ML", emoji: "🤖", desc: "Intelligence" },
                { name: "Vercel", emoji: "▲", desc: "Deployment" },
                { name: "Analytics", emoji: "📊", desc: "Insights" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-colors text-center group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {tech.emoji}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sonuçlar ve Etki
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fluenta platformu ile elde edilen ölçülebilir başarılar
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-red-500 mb-2">95+</div>
                <div className="text-gray-600 font-medium">PageSpeed Score</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-red-500 mb-2">
                  3000+
                </div>
                <div className="text-gray-600 font-medium">
                  Aktif Kullanıcı (3 Ay)
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-red-500 mb-2">%200</div>
                <div className="text-gray-600 font-medium">
                  Organik Trafik Artışı
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-red-500 mb-2">
                  4.8/5
                </div>
                <div className="text-gray-600 font-medium">
                  Kullanıcı Memnuniyeti
                </div>
              </div>
            </div>

            {/* Detailed Impact */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  📈 İş Sonuçları
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      İlk 3 ayda <strong>3000+ aktif kullanıcı</strong>{" "}
                      kazanıldı
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Organik trafik <strong>%200 arttı</strong> (SEO
                      optimizasyonu sayesinde)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Kullanıcı engagement oranı <strong>%85</strong>{" "}
                      seviyesinde
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Ortalama oturum süresi <strong>12 dakika</strong> (eğitim
                      platformları ortalamasının üstünde)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ⚡ Teknik Başarılar
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      <strong>95+ Google PageSpeed Score</strong> (mobil ve
                      masaüstü)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      <strong>1.5 saniye</strong> ortalama sayfa yükleme süresi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      3D avatarlar <strong>tüm cihazlarda</strong> sorunsuz
                      çalışıyor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      <strong>%99.9 uptime</strong> ile kesintisiz hizmet
                      (Vercel Edge)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-200">
              <svg
                className="w-12 h-12 text-red-500 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                &ldquo;WebCraft ekibi, Fluenta platformunu hayal ettiğimizden
                çok daha iyi bir şekilde hayata geçirdi. 3D avatarların
                performansı muhteşem ve kullanıcı deneyimi mükemmel. İlk 3 ayda
                3000+ kullanıcıya ulaşmamız, platformun ne kadar başarılı
                olduğunu gösteriyor.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-gray-900">Ahmet Yılmaz</div>
                  <div className="text-gray-600">Kurucu Ortak, Fluenta AI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why WebCraft Section */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden WebCraft ile Çalışmalısınız?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                2015&apos;ten beri 200+ başarılı proje deneyimi
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Performans Odaklı Yaklaşım
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    Performans odaklı web tasarım
                  </Link>{" "}
                  uzmanlığımız ile 95+ PageSpeed skoru ve hızlı yükleme süreleri
                  garantisi. Her projede{" "}
                  <Link
                    href="/blog/core-web-vitals-rehberi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    Core Web Vitals
                  </Link>{" "}
                  optimizasyonu yapıyoruz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  SEO ve Organik Büyüme
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    SEO uyumlu web sitesi
                  </Link>{" "}
                  geliştirme uzmanlığımız ile Google&apos;da üst sıralarda yer
                  almanızı sağlıyoruz.{" "}
                  <Link
                    href="/blog/teknik-seo-kontrol-listesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    Teknik SEO
                  </Link>{" "}
                  ve organik trafik artışı garantisi.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Modern Teknolojiler
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Next.js, React, TypeScript gibi{" "}
                  <strong>modern web teknolojileri</strong> kullanarak
                  ölçeklenebilir ve güvenli çözümler geliştiriyoruz. Responsive
                  tasarım ve performans optimizasyonu her projemizde standart.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Uygun Fiyat, Yüksek Kalite
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <Link
                    href="/hizmetler/kobi-web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    KOBİ web tasarım
                  </Link>{" "}
                  paketlerimizden kurumsal çözümlere kadar her bütçeye uygun
                  seçenekler. Profesyonel ekibimiz, uygun fiyatlarla yüksek
                  kaliteli hizmet sunuyor.
                </p>
              </div>
            </div>

            {/* Authority Content */}
            <div className="bg-red-50 rounded-2xl p-8 md:p-12 border border-red-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fluenta projesi,{" "}
                <strong className="text-gray-900">
                  modern web teknolojileri
                </strong>{" "}
                kullanarak nasıl{" "}
                <strong className="text-gray-900">yüksek performanslı</strong>{" "}
                ve <strong className="text-gray-900">kullanıcı dostu</strong>{" "}
                web uygulamaları geliştirdiğimizi gösteriyor. Her projede,
                müşteri ihtiyaçlarına özel çözümler sunuyor ve dijital pazarlama
                başarısını hedefliyoruz.
              </p>
              <div className="text-center pt-6">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
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
        <section className="py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                İlgili Blog Yazıları
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Web tasarım, SEO ve performans optimizasyonu hakkında daha fazla
                bilgi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link
                href="/blog/web-sitesi-hizi-nasil-artirilir"
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Web Sitesi Hızı Nasıl Artırılır?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Performans optimizasyonu teknikleri ile web sitenizin yükleme
                  sürelerini minimize edin.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>

              <Link
                href="/blog/core-web-vitals-rehberi"
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Core Web Vitals Rehberi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google&apos;ın Core Web Vitals metrikleri ile web sitenizin
                  performansını ölçün ve optimize edin.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>

              <Link
                href="/blog/teknik-seo-kontrol-listesi"
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="text-red-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Teknik SEO Kontrol Listesi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Web sitenizin Google&apos;da üst sıralarda yer alması için
                  teknik SEO kontrol listesi.
                </p>
                <span className="text-red-500 font-medium group-hover:underline">
                  Devamını Oku →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Diğer Projelerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Başarıyla tamamladığımız projelerimizi keşfedin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link
                href="/islerimiz/skoll-beauty"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/skoll.png"
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
                href="/islerimiz/mentoria"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/mentoria.png"
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
                href="/islerimiz/atlantis"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-200 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/projects/atlantis.png"
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
                className="inline-flex items-center gap-2 bg-red-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
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

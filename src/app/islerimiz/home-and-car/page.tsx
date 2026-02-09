import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home and Car - Edremit Emlak Platformu | WebCraft Projesi",
  description:
    "Home and Car için geliştirdiğimiz modern emlak platformu. Next.js 16, TypeScript, PostgreSQL kullanarak kapsamlı CMS ve SEO uyumlu web tasarım projesi.",
  keywords:
    "home and car, emlak web sitesi, gayrimenkul platformu, edremit emlak, profesyonel web tasarım, Next.js 16, TypeScript, PostgreSQL, Prisma ORM, responsive web tasarım, modern web sitesi, kurumsal web tasarım, SEO uyumlu web sitesi, CMS sistemi, web yazılım geliştirme",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/islerimiz/home-and-car",
  },
  openGraph: {
    title: "Home and Car - Edremit Emlak Platformu | WebCraft",
    description:
      "Modern emlak platformu web tasarım projesi. CMS, SEO ve mülk yönetim sistemi.",
    url: "https://www.webcraft.tr/islerimiz/home-and-car",
    siteName: "WebCraft",
    images: [
      {
        url: "/projects/homeandcar.png",
        width: 1200,
        height: 630,
        alt: "Home and Car - Edremit Emlak Platformu",
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

export default function HomeAndCarProjectPage() {
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
                    Emlak & Gayrimenkul Platformu
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-red-500">Home and Car</span>
                  <br />
                  <span className="text-gray-900">Edremit Emlak</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Balıkesir Edremit bölgesi için kapsamlı mülk yönetim sistemi,
                  CMS ve SEO uyumlu{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-600 underline underline-offset-4 transition-colors font-semibold"
                  >
                    modern web tasarım
                  </Link>{" "}
                  ve{" "}
                  <Link
                    href="/hizmetler/yazilim-gelistirme"
                    className="text-red-500 hover:text-red-600 underline underline-offset-4 transition-colors font-semibold"
                  >
                    yazılım geliştirme
                  </Link>{" "}
                  hizmeti sunduk.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      90+
                    </div>
                    <div className="text-sm text-gray-600">
                      Lighthouse Score
                    </div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">
                      Mülk Özellikleri
                    </div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      &lt;2s
                    </div>
                    <div className="text-sm text-gray-600">Yükleme Süresi</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://homeandcar.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
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
                    src="/projects/homeandcar.png"
                    alt="Home and Car - Edremit Emlak Platformu"
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
                Proje Özeti: Emlak Sektöründe Dijital Dönüşüm
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Home and Car</strong>,
                  Balıkesir Edremit bölgesinde faaliyet gösteren emlak ofisi
                  için geliştirilmiş, modern ve kullanıcı dostu bir dijital
                  platform. WebCraft olarak,{" "}
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="text-red-500 hover:text-red-600 underline underline-offset-4 transition-colors"
                  >
                    performans odaklı web tasarım
                  </Link>{" "}
                  ve kapsamlı CMS ile satılık ve kiralık gayrimenkul ilanlarının
                  profesyonel sunumunu sağladık.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">
                    Next.js 16, TypeScript ve PostgreSQL
                  </strong>{" "}
                  ile güçlü altyapı,{" "}
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="text-red-500 hover:text-red-600 underline underline-offset-4 transition-colors"
                  >
                    yerel SEO uyumlu yapı
                  </Link>{" "}
                  ve 50+ mülk özelliği ile detaylı ilan yönetimi. Edremit, Akçay
                  ve Altınoluk bölgesinde emlak pazarında güçlü dijital varlık
                  oluşturduk.
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
                Geleneksel emlak ofisinin dijital dönüşüm ihtiyacı
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
                        Manuel ilan yönetimi
                      </strong>{" "}
                      zaman kaybına ve hatalara neden oluyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        Online görünürlük eksikliği
                      </strong>{" "}
                      yerel pazarda rekabet dezavantajı yaratıyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        Mülk özelliklerinin sunumu
                      </strong>{" "}
                      yetersiz ve profesyonel değildi
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">
                        Mobil uyumsuzluk
                      </strong>{" "}
                      potansiyel müşterilerin %60&apos;ının kaybına yol açıyordu
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
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Kapsamlı CMS sistemi
                      </strong>{" "}
                      ile kolay mülk ekleme ve düzenleme (50+ özellik)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">Yerel SEO</strong> ile
                      Google&apos;da &quot;edremit emlak&quot; aramasında üst
                      sıralarda yer alma
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Çoklu görsel yükleme
                      </strong>{" "}
                      ve Vercel Blob entegrasyonu ile profesyonel sunum
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Responsive tasarım
                      </strong>{" "}
                      ile mobil, tablet ve masaüstü uyumlu platform
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Öne Çıkan Özellikler
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern emlak platformu için kapsamlı çözümler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mülk Yönetim Sistemi
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  50+ özellik ile detaylı mülk bilgileri, çoklu görsel yükleme,
                  akıllı filtreleme ve dinamik slug yapısı.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span>
                    Drag & drop görsel yükleme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span>
                    Aktif/Pasif/Satıldı durumu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">•</span>
                    SEO-dostu URL yapısı
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  İçerik Yönetimi (CMS)
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Blog sistemi, referans yönetimi ve zengin metin editörü ile
                  kolay içerik yayınlama.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    TipTap zengin metin editörü
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Taslak/Yayın kontrolü
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Müşteri yorumları yönetimi
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-purple-500"
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
                  Yerel SEO Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Edremit, Akçay ve Altınoluk bölgesi için optimize edilmiş SEO
                  stratejisi.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    Google My Business entegre
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    Structured data (JSON-LD)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    Sitemap & robots.txt
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-green-500"
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
                  Responsive Tasarım
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mobil, tablet ve masaüstü uyumlu, dark mode destekli modern
                  arayüz.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span>
                    Mobile-first yaklaşım
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span>
                    Dark/Light tema geçişi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span>
                    Touch-friendly butonlar
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-yellow-600"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Güvenlik & Yetkilendirme
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NextAuth v4, JWT tabanlı güvenli oturum yönetimi ve rol bazlı
                  erişim.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">•</span>
                    Çoklu oturum açma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">•</span>
                    Admin/User rolleri
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">•</span>
                    Middleware koruması
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  İletişim & E-posta
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Resend entegrasyonu ile profesyonel e-posta gönderimi ve
                  WhatsApp entegrasyonu.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    Özel domain e-posta
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    Otomatik bildirim sistemi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    WhatsApp hızlı erişim
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Teknoloji Yığını
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern ve güvenilir teknolojilerle geliştirildi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    Next.js 16 + React 19
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    shadcn/ui
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    next-themes
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Backend & Database
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">▸</span>
                    Next.js App Router
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">▸</span>
                    PostgreSQL (Neon)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">▸</span>
                    Prisma ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">▸</span>
                    NextAuth v4
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Medya & E-posta
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    Vercel Blob
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    Resend Email
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    Custom Domain
                  </li>
                </ul>
              </div>

              {/* Deployment */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Deployment & SEO
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">▸</span>
                    Vercel Hosting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">▸</span>
                    GitHub CI/CD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">▸</span>
                    ISR (60s cache)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">▸</span>
                    JSON-LD Schema
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sonuçlar ve Başarılar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dijital dönüşüm ile ölçülebilir başarı
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-3">90+</div>
                <div className="text-lg text-gray-700 font-semibold mb-2">
                  Lighthouse Score
                </div>
                <p className="text-gray-600">
                  Performance, SEO ve Accessibility
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-3">
                  &lt;2s
                </div>
                <div className="text-lg text-gray-700 font-semibold mb-2">
                  Sayfa Yükleme
                </div>
                <p className="text-gray-600">
                  Hızlı yükleme ile kullanıcı memnuniyeti
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-3">100%</div>
                <div className="text-lg text-gray-700 font-semibold mb-2">
                  TypeScript
                </div>
                <p className="text-gray-600">Type-safe kod güvenliği</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                İş Sonuçları
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Teknik Başarılar
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Production-ready güvenlik standartları</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Zero-downtime deployment stratejisi</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Modular ve maintainable kod yapısı</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Comprehensive error handling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    SEO Performansı
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Google Search Console entegrasyonu</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Sitemap ve robots.txt optimizasyonu</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Meta tags ve structured data</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Yerel arama optimizasyonu (Edremit)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-[#f84525] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sizin İçin de Benzer Bir Proje Geliştirebiliriz
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Emlak, e-ticaret veya kurumsal web siteniz için{" "}
              <strong>modern, SEO uyumlu ve kapsamlı CMS</strong> çözümlerimizle
              dijital dönüşümünüzü gerçekleştirin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-white text-red-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/islerimiz"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Diğer Projeleri İncele
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

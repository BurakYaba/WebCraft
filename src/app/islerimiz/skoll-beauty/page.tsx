import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Skoll Salon Web Sitesi | Güzellik Salonu Dijital Çözümleri | WebCraft",
  description:
    "Skoll Salon için modern tasarım, online randevu sistemi ve yerel SEO ile Fethiye'nin öne çıkan güzellik salonu web sitesi. Profesyonel kuaför web tasarım hizmeti.",
  keywords:
    "güzellik salonu web sitesi, kuaför web tasarımı, online randevu sistemi, spa web sitesi, profesyonel web tasarım, yerel SEO, Fethiye web tasarım, beauty salon website",
  alternates: {
    canonical: "/islerimiz/skoll-beauty",
  },
  openGraph: {
    title: "Skoll Salon Web Sitesi | Güzellik Salonu Dijital Çözümleri",
    description:
      "Modern tasarım ve online randevu sistemi ile Fethiye'nin önde gelen güzellik salonunun dijital dönüşüm hikayesi.",
    type: "article",
    locale: "tr_TR",
  },
};

export default function SkollBeautyPage() {
  // Breadcrumb for Skoll Beauty project page
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "İşlerimiz", url: "/islerimiz" },
      { name: "Skoll Beauty", url: "/islerimiz/skoll-beauty" },
    ]);

  // WebPage schema for the project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Skoll Salon Web Sitesi | Güzellik Salonu Dijital Çözümleri",
    description:
      "Skoll Salon için modern tasarım, online randevu sistemi ve yerel SEO ile Fethiye'nin öne çıkan güzellik salonu web sitesi. Profesyonel kuaför web tasarım hizmeti.",
    url: "https://www.webcraft.tr/islerimiz/skoll-beauty",
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
                    Güzellik Salonu Web Sitesi
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-red-500">Skoll Salon</span>
                  <br />
                  <span className="text-gray-900">Dijital Dönüşüm</span>
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Fethiye&apos;nin önde gelen güzellik ve bakım salonlarından
                  Skoll Salon için modern{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    web tasarım
                  </Link>
                  , online randevu sistemi ve{" "}
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    yerel SEO
                  </Link>{" "}
                  çözümleriyle dijital varlıklarını güçlendirdik.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      %120
                    </div>
                    <div className="text-sm text-gray-600">
                      Online Randevu Artışı
                    </div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      3x
                    </div>
                    <div className="text-sm text-gray-600">Web Trafiği</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-4 border border-red-200">
                    <div className="text-3xl font-bold text-red-500 mb-1">
                      4.8/5
                    </div>
                    <div className="text-sm text-gray-600">
                      Müşteri Memnuniyeti
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://skollbeauty.com/"
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
                    src="/projects/skoll.webp"
                    alt="Skoll Salon Web Sitesi"
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

        {/* Project Overview - Beauty Industry Focused */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proje Özeti: Güzellik Sektöründe Dijital Dönüşüm
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Fethiye&apos;de saç, vücut ve tırnak bakımı alanında hizmet
                  veren <strong className="text-gray-900">Skoll Salon</strong>,
                  modern bir{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    web sitesi tasarımı
                  </Link>{" "}
                  ile müşteri deneyimini dijitale taşımak istedi. Güzellik
                  salonu sektöründe online görünürlük ve randevu yönetimi kritik
                  önem taşıyor.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  WebCraft olarak, Skoll Salon için estetik değerleri yansıtan
                  bir tasarım dili oluşturduk.{" "}
                  <strong className="text-gray-900">
                    Online randevu sistemi
                  </strong>
                  , <strong className="text-gray-900">hizmet galerisi</strong>{" "}
                  ve{" "}
                  <Link
                    href="/blog/yerel-seo-stratejileri"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    yerel SEO optimizasyonu
                  </Link>{" "}
                  ile müşteri edinme maliyetlerini düşürürken online
                  rezervasyonları %120 oranında artırdık.
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
                Güzellik sektöründe dijital varlık ve randevu yönetimi
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
                      Eski web sitesi mobil uyumlu değildi ve{" "}
                      <strong className="text-gray-900">
                        Google&apos;da görünmüyordu
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Randevular sadece telefonla alınıyor,{" "}
                      <strong className="text-gray-900">
                        mesai dışı kayıp
                      </strong>{" "}
                      yaşanıyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Hizmetler ve fiyatlar net değil,{" "}
                      <strong className="text-gray-900">
                        müşteri sorgulamaları
                      </strong>{" "}
                      çoktu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      <strong className="text-gray-900">Yerel rekabette</strong>{" "}
                      dijital varlık eksikliği dezavantaj yaratıyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Salon atmosferini ve hizmet kalitesini{" "}
                      <strong className="text-gray-900">
                        online yansıtamıyorlardı
                      </strong>
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
                        href="/hizmetler/performans-odakli-web-tasarim"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Mobil öncelikli responsive tasarım
                      </Link>{" "}
                      ile tüm cihazlarda mükemmel görünüm
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        7/24 online randevu sistemi
                      </strong>{" "}
                      ile mesai dışı rezervasyonlar
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Detaylı{" "}
                      <strong className="text-gray-900">
                        hizmet katalogu ve fiyat listesi
                      </strong>{" "}
                      ile şeffaflık
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/blog/yerel-seo-stratejileri"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        Yerel SEO optimizasyonu
                      </Link>{" "}
                      ile &quot;Fethiye güzellik salonu&quot; aramalarında üst
                      sıralarda yer alma
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Profesyonel galeri ve vitrin
                      </strong>{" "}
                      sistemi ile görsel hikaye anlatımı
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Approach - Visual Focus */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tasarım Yaklaşımımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lüks ve şıklığı yansıtan görsel tasarım dili
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
                  Lüks Renk Paleti
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Siyah, beyaz ve altın tonlarını kullanarak{" "}
                  <strong className="text-gray-900">sofistike ve lüks</strong>{" "}
                  bir atmosfer yarattık. Premium markalarda kullanılan bu klasik
                  renk kombinasyonu ile salonun fiziksel ambiyansını dijitale
                  taşıdık.
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Görsel Ağırlıklı İçerik
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Profesyonel fotoğraflarla{" "}
                  <strong className="text-gray-900">hizmet kalitesini</strong>{" "}
                  gösterdik. Her hizmet için detaylı görsel galeri oluşturduk.
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mobil Öncelikli
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kullanıcıların %75&apos;i mobil cihazdan eriştiği için{" "}
                  <strong className="text-gray-900">mobile-first</strong>{" "}
                  yaklaşımla tasarladık. Tek elle kullanım optimizasyonu yaptık.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features - Service-Specific */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Temel Özellikler ve Fonksiyonlar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Güzellik salonlarına özel dijital çözümler
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-gray-900">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Online Randevu Sistemi
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      7/24 erişilebilir randevu sistemi ile müşteriler
                      istedikleri zaman rezervasyon yapabiliyor. Personel bazlı
                      randevu yönetimi, otomatik hatırlatma SMS&apos;leri ve
                      yoğunluk analizi özellikleri ile operasyonel verimliliği
                      artırdık.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Takvim Entegrasyonu
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        SMS Hatırlatma
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Personel Yönetimi
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-gray-900">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Hizmet Katalogu ve Fiyatlandırma
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Saç, tırnak ve vücut bakımı hizmetlerinin detaylı
                      açıklamaları, süreleri ve fiyatları şeffaf bir şekilde
                      listelendi. Her hizmet için görsel örnekler ve
                      öncesi-sonrası fotoğrafları eklendi.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Detaylı Açıklamalar
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Fiyat Şeffaflığı
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Görsel Galeri
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-gray-900">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Yerel SEO ve Google Maps Entegrasyonu
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      &quot;Menteşe güzellik salonu&quot;, &quot;Menteşe saç
                      bakımı&quot; gibi yerel aramalarda üst sıralarda yer
                      alması için{" "}
                      <Link
                        href="/blog/yerel-seo-stratejileri"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        yerel SEO stratejileri
                      </Link>{" "}
                      uyguladık. Google My Business optimizasyonu ve yönlendirme
                      sistemi ile fiziksel ziyaretçi sayısını artırdık.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Google My Business
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Yerel Anahtar Kelimeler
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Harita Entegrasyonu
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-gray-900">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Sosyal Medya Entegrasyonu
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Instagram feed entegrasyonu ile güncel çalışmaları
                      otomatik olarak web sitesinde gösteriyoruz. Müşteri
                      yorumları ve değerlendirmeleri için sosyal kanıt bölümü
                      oluşturduk.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Instagram Feed
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Müşteri Yorumları
                      </span>
                      <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-sm">
                        Sosyal Paylaşım
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Beauty Industry Tools */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Teknoloji Yığını
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern web teknolojileri ve sektöre özel entegrasyonlar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tech 1 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Next.js & React
                </h3>
                <p className="text-gray-600 text-sm">
                  Hızlı ve SEO uyumlu web uygulaması altyapısı
                </p>
              </div>

              {/* Tech 2 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Randevu API
                </h3>
                <p className="text-gray-600 text-sm">
                  Özel geliştirilmiş randevu yönetim sistemi
                </p>
              </div>

              {/* Tech 3 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  TailwindCSS
                </h3>
                <p className="text-gray-600 text-sm">
                  Özelleştirilmiş tasarım sistemi ve animasyonlar
                </p>
              </div>

              {/* Tech 4 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Local SEO Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Google My Business ve yerel SEO entegrasyonu
                </p>
              </div>

              {/* Tech 5 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Instagram API
                </h3>
                <p className="text-gray-600 text-sm">
                  Otomatik feed entegrasyonu ve sosyal kanıt
                </p>
              </div>

              {/* Tech 6 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  WhatsApp Business
                </h3>
                <p className="text-gray-600 text-sm">
                  Direkt iletişim ve hızlı yanıt sistemi
                </p>
              </div>

              {/* Tech 7 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Müşteri davranışı ve randevu analizi
                </p>
              </div>

              {/* Tech 8 */}
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vercel</h3>
                <p className="text-gray-600 text-sm">
                  Hızlı ve güvenilir hosting altyapısı
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proje Sonuçları ve Etkisi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ölçülebilir başarı ve iş sonuçları
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                  %120
                </div>
                <div className="text-lg text-gray-700 mb-2">
                  Online Randevu Artışı
                </div>
                <div className="text-sm text-white/50">İlk 3 ayda</div>
              </div>

              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                  3x
                </div>
                <div className="text-lg text-gray-700 mb-2">Web Trafiği</div>
                <div className="text-sm text-white/50">Organik büyüme</div>
              </div>

              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                  %85
                </div>
                <div className="text-lg text-gray-700 mb-2">Mobil Kullanım</div>
                <div className="text-sm text-white/50">Responsive tasarım</div>
              </div>

              <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                  4.8/5
                </div>
                <div className="text-lg text-gray-700 mb-2">
                  Müşteri Memnuniyeti
                </div>
                <div className="text-sm text-white/50">
                  Online değerlendirmeler
                </div>
              </div>
            </div>

            {/* Detailed Impact */}
            <div className="bg-gray-50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                İş Sonuçları ve Dönüşümler
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-500 mb-4">
                    Dijital Dönüşüm
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Online rezervasyonlar{" "}
                        <strong className="text-gray-900">
                          toplam randevuların %45&apos;ini
                        </strong>{" "}
                        oluşturmaya başladı
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Mesai dışı randevu kayıpları{" "}
                        <strong className="text-gray-900">%60 azaldı</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Telefon aramalarından kaynaklanan iş yükü{" "}
                        <strong className="text-gray-900">%40 düştü</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        <strong className="text-gray-900">
                          Google&apos;da ilk sayfa
                        </strong>{" "}
                        sıralamasına ulaşıldı
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-500 mb-4">
                    Müşteri Deneyimi
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Hizmet araştırması yapan kullanıcılarda{" "}
                        <strong className="text-gray-900">
                          %30 dönüşüm oranı
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Ortalama site ziyaret süresi{" "}
                        <strong className="text-gray-900">4.5 dakika</strong>
                        &apos;ya çıktı
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Müşteri memnuniyeti anketlerinde{" "}
                        <strong className="text-gray-900">4.8/5 puan</strong>{" "}
                        aldı
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">→</span>
                      <span>
                        Sosyal medya etkileşimleri{" "}
                        <strong className="text-gray-900">%90 arttı</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-8xl text-red-500/10 font-serif">
                &quot;
              </div>

              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8 italic">
                  WebCraft ekibi, salonumuzun ruhunu ve estetiğini mükemmel
                  şekilde web sitesine yansıttı. Online randevu sistemi
                  sayesinde özellikle mesai dışı saatlerde ciddi bir müşteri
                  kazanımı sağladık. Google&apos;da üst sıralarda çıkmamız ve
                  sosyal medya entegrasyonu, yeni müşteri edinme maliyetlerimizi
                  yarıya indirdi.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                    S
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      Sevtap Wilk
                    </div>
                    <div className="text-gray-600">Salon Sahibi & Yönetici</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
            </div>
          </div>
        </section>

        {/* Why WebCraft - E-E-A-T Content */}
        <section className="py-20 px-6 md:px-10 bg-white0/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden WebCraft?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Güzellik sektörü için özel dijital çözümler
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🎨 Sektör Uzmanlığı
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    2015 yılından bu yana{" "}
                    <strong className="text-gray-900">
                      güzellik salonları, spa merkezleri ve wellness
                    </strong>{" "}
                    işletmeleri için özel web çözümleri geliştiriyoruz. Sektörün
                    dinamiklerini ve müşteri beklentilerini çok iyi biliyoruz.
                  </p>
                </div>

                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    📅 Randevu Sistemi Uzmanlığı
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Özel geliştirdiğimiz{" "}
                    <Link
                      href="/hizmetler/yazilim-gelistirme"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      randevu yönetim sistemleri
                    </Link>{" "}
                    ile güzellik salonlarının operasyonel verimliliğini
                    artırıyoruz. Personel bazlı randevu, otomatik hatırlatmalar
                    ve müşteri yönetimi.
                  </p>
                </div>

                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🔍 Yerel SEO Uzmanlığı
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <Link
                      href="/blog/fethiye-web-tasarim-rehberi"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      Fethiye ve Muğla bölgesi
                    </Link>{" "}
                    için özel yerel SEO stratejileri ile işletmenizi
                    Google&apos;da öne çıkarıyoruz. &quot;Fethiye güzellik
                    salonu&quot; gibi yerel aramalarında üst sıralarda yer
                    alıyorsunuz.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    📱 Mobil Optimizasyon
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Güzellik sektöründe müşterilerin büyük çoğunluğu mobil
                    cihazlardan randevu alıyor. Bu nedenle{" "}
                    <Link
                      href="/hizmetler/performans-odakli-web-tasarim"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      mobile-first yaklaşımla
                    </Link>{" "}
                    tasarım yapıyoruz ve mükemmel mobil deneyim sunuyoruz.
                  </p>
                </div>

                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🎯 Dönüşüm Odaklı Tasarım
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Her tasarım kararı,{" "}
                    <strong className="text-gray-900">
                      ziyaretçiyi müşteriye dönüştürme
                    </strong>{" "}
                    hedefiyle alınır. CTA (Call-to-Action) butonları, randevu
                    akışı ve kullanıcı deneyimi optimize edilir. Ölçülebilir
                    sonuçlar üretiyoruz.
                  </p>
                </div>

                <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    💎 Lüks ve Estetik Tasarım
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Güzellik sektörünün gerektirdiği{" "}
                    <strong className="text-gray-900">estetik değerleri</strong>{" "}
                    ve lüks atmosferi dijitale taşıyoruz. Markanızın kimliğini
                    yansıtan, müşterilerinizde güven uyandıran tasarımlar
                    yaratıyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Authority Content */}
            <div className="mt-12 bg-gray-50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Güzellik Sektöründe Dijital Başarı
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  WebCraft olarak, güzellik salonları, spa merkezleri, kuaförler
                  ve wellness işletmeleri için{" "}
                  <strong className="text-gray-900">
                    sektöre özel dijital çözümler
                  </strong>{" "}
                  sunuyoruz. 2015 yılından bu yana 50+ güzellik işletmesinin
                  dijital dönüşümünde rol aldık.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Skoll Salon projesi, güzellik sektöründeki uzmanlığımızı ve{" "}
                  <strong className="text-gray-900">
                    yerel SEO başarımızı
                  </strong>{" "}
                  gösteriyor. Online randevu sistemi, hizmet katalogu ve görsel
                  ağırlıklı içerik stratejisi ile müşteri edinme maliyetlerini
                  düşürüyor ve rezervasyon oranlarını artırıyoruz.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Güzellik işletmeniz için{" "}
                  <strong className="text-gray-900">modern web sitesi</strong>,{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    dijital pazarlama
                  </Link>{" "}
                  ve online randevu çözümlerine mi ihtiyacınız var? Ücretsiz
                  danışmanlık için{" "}
                  <Link
                    href="/iletisim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    bizimle iletişime
                  </Link>{" "}
                  geçin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                İlgili Blog Yazılarımız
              </h2>
              <p className="text-xl text-gray-600">
                Dijital pazarlama ve web tasarımı hakkında daha fazla bilgi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/blog/yerel-seo-stratejileri"
                className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group"
              >
                <div className="text-red-500 text-sm font-semibold mb-3">
                  SEO
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Yerel SEO Stratejileri ile Bölgenizdeki Müşterilere Ulaşın
                </h3>
                <p className="text-gray-600 text-sm">
                  Yerel işletmeler için Google&apos;da üst sıralarda yer alma
                  rehberi
                </p>
              </Link>

              <Link
                href="/blog/fethiye-web-tasarim-rehberi"
                className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group"
              >
                <div className="text-red-500 text-sm font-semibold mb-3">
                  Web Tasarım
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Fethiye İşletmeleri İçin Web Tasarım Rehberi
                </h3>
                <p className="text-gray-600 text-sm">
                  Turizm sektöründe dijital varlık oluşturma stratejileri
                </p>
              </Link>

              <Link
                href="/blog/online-magaza-kurulumu"
                className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 group"
              >
                <div className="text-red-500 text-sm font-semibold mb-3">
                  E-Ticaret
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  Online Mağaza Kurulumu: Başlangıçtan Satışa
                </h3>
                <p className="text-gray-600 text-sm">
                  E-ticaret sitenizi nasıl başarılı bir şekilde açarsınız?
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

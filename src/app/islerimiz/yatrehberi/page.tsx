import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Yat Rehberi - Türkiye Yat ve Tekne Rehberi | WebCraft Projesi",
  description:
    "Yat Rehberi için geliştirdiğimiz modern yat ve tekne rehberi platformu. Türkiye'nin mavi yolculuk rotaları, marina rehberi ve yat kiralama listeleri için kapsamlı dijital platform.",
  keywords:
    "yat rehberi, yat kiralama platformu, tekne turu, mavi yolculuk, marina rehberi, yelken rehberi, Türkiye yat, web tasarım, Next.js web geliştirme",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/islerimiz/yatrehberi",
  },
  openGraph: {
    title: "Yat Rehberi - Türkiye Yat ve Tekne Rehberi | WebCraft",
    description:
      "Türkiye'nin mavi yolculuk rotaları ve marina rehberi için modern dijital platform.",
    url: "https://www.webcraft.tr/islerimiz/yatrehberi",
    siteName: "WebCraft",
    images: [
      {
        url: "/projects/yatrehberi.webp",
        width: 1200,
        height: 630,
        alt: "Yat Rehberi - Türkiye Yat ve Tekne Rehberi",
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

export default function YatRehberiProjectPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "İşlerimiz", url: "/islerimiz" },
      { name: "Yat Rehberi", url: "/islerimiz/yatrehberi" },
    ]);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Yat Rehberi - Türkiye Yat ve Tekne Rehberi",
    description:
      "Yat Rehberi için geliştirdiğimiz modern yat ve tekne rehberi platformu. Türkiye mavi yolculuk rotaları, marina rehberi ve yat kiralama listeleri.",
    url: "https://www.webcraft.tr/islerimiz/yatrehberi",
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
          <div className="absolute inset-0 " />
          <div className="absolute top-20 left-10 w-72 h-72  rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96  rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-red-50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-200">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-500 text-sm font-medium">
                    Denizcilik & Turizm Platformu
                  </span>
                </div>

                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-red-500">Yat Rehberi</span>
                  <br />
                  <span className="text-gray-900">Mavi Yolculuk Platformu</span>
                </h1>

                <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Türkiye&apos;nin eşsiz mavi yolculuk rotalarını, marina ve
                  koylara ait bilgileri bir araya toplayan{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    modern web platformu
                  </Link>{" "}
                  için kapsamlı{" "}
                  <Link
                    href="/hizmetler/yazilim-gelistirme"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors font-semibold"
                  >
                    yazılım geliştirme
                  </Link>{" "}
                  hizmeti sunduk.
                </p>

                {/* Key Metrics - scope-based, no fabricated outcomes */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8">
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      95+
                    </div>
                    <div className="text-sm text-gray-600">PageSpeed Score</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      Next.js
                    </div>
                    <div className="text-sm text-gray-600">Platform</div>
                  </div>
                  <div className="bg-red-50 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-red-200">
                    <div className="text-base sm:text-2xl md:text-3xl font-bold text-red-500 mb-1">
                      SEO
                    </div>
                    <div className="text-sm text-gray-600">Uyumlu Yapı</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://yatrehberi.com/"
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
                    src="/projects/yatrehberi.webp"
                    alt="Yat Rehberi - Türkiye Yat ve Tekne Rehberi Platformu"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                  />
                </div>
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
                Proje Özeti: Türkiye&apos;nin Dijital Denizcilik Rehberi
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Yat Rehberi</strong>,
                  Türkiye&apos;nin Ege ve Akdeniz kıyılarındaki mavi yolculuk
                  rotalarını, marinaları ve koyları dijital ortama taşıyan
                  kapsamlı bir rehber platformudur. WebCraft olarak,{" "}
                  <Link
                    href="/hizmetler/performans-odakli-web-tasarim"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    performans odaklı web tasarım
                  </Link>{" "}
                  ve modern teknolojilerle platformu sıfırdan inşa ettik.
                </p>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  Kullanıcıların rota planlayabildiği, marina bilgilerine
                  ulaşabildiği ve denizcilik içeriklerini keşfedebildiği bu{" "}
                  <Link
                    href="/hizmetler/seo-uyumlu-web-sitesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    SEO uyumlu platform
                  </Link>
                  , Türkiye&apos;nin zengin denizcilik kültürünü dijital dünyada
                  temsil ediyor.
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
                Dağınık denizcilik bilgilerini tek çatı altında toplama zorluğu
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
                      Mavi yolculuk bilgileri{" "}
                      <strong className="text-gray-900">
                        dağınık kaynaklarda
                      </strong>{" "}
                      bulunuyor, tek merkezi platform yoktu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Marina ve koy bilgileri{" "}
                      <strong className="text-gray-900">
                        güncel tutulmuyor
                      </strong>
                      du, kullanıcılar yanlış bilgiye ulaşıyordu
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      Mobil kullanıcılar için{" "}
                      <strong className="text-gray-900">
                        optimize edilmiş
                      </strong>{" "}
                      bir denizcilik rehberi mevcut değildi
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>
                      &quot;Yat kiralama&quot; ve &quot;mavi yolculuk&quot;
                      aramalarında{" "}
                      <strong className="text-gray-900">
                        Google görünürlüğü
                      </strong>{" "}
                      yoktu
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
                        Performans odaklı
                      </Link>{" "}
                      Next.js platformu ile tüm rotaları tek çatı altında
                      topladık
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        İçerik yönetim sistemi (CMS)
                      </strong>{" "}
                      ile marina ve koy bilgilerini kolayca güncel
                      tutabiliyorlar
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <strong className="text-gray-900">
                        Mobile-first tasarım
                      </strong>{" "}
                      ile denizdeyken de hızlı erişim sağlandı
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      <Link
                        href="/hizmetler/seo-uyumlu-web-sitesi"
                        className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                      >
                        SEO uyumlu yapı
                      </Link>{" "}
                      ile denizcilik aramalarında Google&apos;da görünürlük
                      sağlandı
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Öne Çıkan Özellikler
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Yat Rehberi platformunu özel kılan geliştirmeler
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
                    Mavi Yolculuk Rota Rehberi
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Türkiye&apos;nin Ege ve Akdeniz kıyılarındaki popüler mavi
                    yolculuk rotaları, güzergah önerileri ve koy bilgileri
                    interaktif içeriklerle sunuluyor. Her rota için mesafe, süre
                    ve dikkat edilmesi gereken noktalara yer verildi.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Rota Rehberi
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Koy Bilgileri
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      İnteraktif İçerik
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
                    Marina ve Koy Kataloğu
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Türkiye kıyılarındaki marinalar ve doğal koylar için detaylı
                    profil sayfaları: su derinliği, olanak bilgileri, yakıt
                    istasyonu, koordinatlar ve fotoğraflar. CMS entegrasyonu
                    sayesinde içerikler kolayca güncellenebiliyor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Marina Kataloğu
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      CMS Yönetimi
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Konum Bilgileri
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
                    SEO ve Organik Görünürlük
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    <Link
                      href="/hizmetler/seo-uyumlu-web-sitesi"
                      className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      SEO uyumlu yapı
                    </Link>
                    , schema markup ve semantic HTML ile &quot;yat
                    kiralama&quot;, &quot;mavi yolculuk rotaları&quot; ve
                    &quot;marina rehberi&quot; aramalarında Google&apos;da
                    görünürlük sağlandı.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Technical SEO
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Schema Markup
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-500 text-xs font-medium rounded-full">
                      Core Web Vitals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 md:py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Kullanılan Teknolojiler
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Performanslı ve ölçeklenebilir denizcilik platformu altyapısı
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  name: "Next.js",
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
                  name: "Vercel",
                  logo: "/tech-logos/vercel.svg",
                  desc: "Deployment",
                },
                {
                  name: "WordPress CMS",
                  logo: "/tech-logos/wordpress.svg",
                  desc: "İçerik Yönetimi",
                },
                {
                  name: "Google Analytics",
                  logo: "/tech-logos/googleanalytics.svg",
                  desc: "Organik Büyüme",
                },
                {
                  name: "React",
                  logo: "/tech-logos/react.svg",
                  desc: "Responsive UI",
                },
                {
                  name: "Figma",
                  logo: "/tech-logos/figma.svg",
                  desc: "UI Tasarım",
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

        {/* Results */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Teslim Edilen Platform
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Yat Rehberi için geliştirdiğimiz dijital altyapı
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  95+
                </div>
                <div className="text-gray-600 font-medium">PageSpeed Score</div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  CMS
                </div>
                <div className="text-gray-600 font-medium">İçerik Yönetimi</div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  SEO
                </div>
                <div className="text-gray-600 font-medium">Uyumlu Yapı</div>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-8 text-center border border-gray-200">
                <div className="text-xl md:text-4xl font-bold text-red-500 mb-2">
                  %99.9
                </div>
                <div className="text-gray-600 font-medium">Uptime</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ✅ Teslim Edilen Özellikler
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Mavi yolculuk rota rehberi <strong>sıfırdan</strong>{" "}
                      geliştirildi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Marina ve koy kataloğu{" "}
                      <strong>CMS ile yönetilebilir</strong> yapıda
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      <strong>Mobile-first</strong> tasarım ile tüm cihazlarda
                      mükemmel deneyim
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Schema markup ve semantic HTML ile{" "}
                      <strong>güçlü SEO temeli</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ⚡ Teknik Detaylar
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
                      Next.js ile <strong>statik sayfa üretimi (SSG)</strong> —
                      hızlı yükleme, güçlü SEO
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      Vercel altyapısı ile <strong>%99.9 uptime</strong> ve
                      global CDN
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>
                      TypeScript ile <strong>güvenli ve sürdürülebilir</strong>{" "}
                      kod tabanı
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why WebCraft */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden WebCraft ile Çalışmalısınız?
              </h2>
              <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
                Turizm ve denizcilik sektöründe dijital varlık oluşturma
                deneyimi
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  Turizm Sektörü Deneyimi
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fethiye ve Muğla bölgesinde turizm işletmelerine özel dijital
                  çözümler üretiyoruz. Denizcilik, turizm ve yerel hizmet
                  sektöründe güçlü web varlığı oluşturma konusunda uzmanız.
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-3">
                  SEO Odaklı Geliştirme
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <Link
                    href="/blog/teknik-seo-kontrol-listesi"
                    className="text-red-500 hover:text-red-500 underline underline-offset-4 transition-colors"
                  >
                    Teknik SEO
                  </Link>{" "}
                  en başından mimari kararların bir parçası olarak tasarlıyoruz.
                  Schema markup, semantic HTML ve Core Web Vitals optimizasyonu
                  standart sürecimizin parçası.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siz de bir dijital platform mı kuruyorsunuz?
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Rehber sitesi, katalog platformu veya içerik yönetim sistemine
                ihtiyacınız varsa, birlikte konuşalım.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold text-xs md:text-base hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Ücretsiz Danışmanlık Al
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

        {/* Related Blog Posts */}
        <section className="py-12 md:py-20 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              İlgili İçerikler
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/blog/fethiye-web-tasarim-rehberi"
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all"
              >
                <span className="text-xs font-medium text-red-500 uppercase tracking-wide">
                  Blog
                </span>
                <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-red-500 transition-colors">
                  Fethiye ve Muğla bölgesi için Web Tasarım Rehberi
                </h3>
                <p className="text-gray-600 text-sm">
                  Turizm işletmeleri için web tasarım stratejileri →
                </p>
              </Link>
              <Link
                href="/blog/teknik-seo-kontrol-listesi"
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all"
              >
                <span className="text-xs font-medium text-red-500 uppercase tracking-wide">
                  Blog
                </span>
                <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-red-500 transition-colors">
                  Teknik SEO Kontrol Listesi
                </h3>
                <p className="text-gray-600 text-sm">
                  Platform siteniz için teknik SEO rehberi →
                </p>
              </Link>
              <Link
                href="/blog/core-web-vitals-rehberi"
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all"
              >
                <span className="text-xs font-medium text-red-500 uppercase tracking-wide">
                  Blog
                </span>
                <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-red-500 transition-colors">
                  Core Web Vitals Rehberi
                </h3>
                <p className="text-gray-600 text-sm">
                  Performans skorunu artırma rehberi →
                </p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

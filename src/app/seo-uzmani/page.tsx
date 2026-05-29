import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  Users,
  Award,
  BarChart2,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Zap,
  FileText,
  Star,
  MapPin,
  BookOpen,
  Layers,
} from "lucide-react";

// Lazy load components
const SocialProofStrip = lazy(() => import("@/components/SocialProofStrip"));
const Footer = lazy(() => import("@/components/Footer"));
const ServiceFAQSection = lazy(() => import("@/components/ServiceFAQSection"));

// Loading skeleton
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "SEO Uzmanı | Sitenizi Google'da Zirveye Taşıyoruz | WebCraft",
  description:
    "Deneyimli SEO uzmanı ekibimizle Google'da üst sıralarda yer alın. Teknik SEO, içerik stratejisi ve link building ile organik trafiğinizi artırın. Ücretsiz SEO analizi alın!",
  keywords:
    "seo uzmanı, seo uzman, seo uzmanı türkiye, profesyonel seo uzmanı, seo danışmanı, arama motoru optimizasyonu uzmanı, google seo uzmanı, seo hizmeti",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/seo-uzmani",
  },
  openGraph: {
    title: "SEO Uzmanı | Sitenizi Google'da Zirveye Taşıyoruz | WebCraft",
    description:
      "WebCraft SEO uzmanı ekibi ile organik trafiğinizi katlayın. Teknik SEO, içerik stratejisi ve link building uzmanlığı.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Uzmanı | Sitenizi Google'da Zirveye Taşıyoruz | WebCraft",
    description:
      "Profesyonel SEO uzmanı desteğiyle Google'da üst sıralara çıkın. Ücretsiz analiz alın.",
  },
};

export default function SeoUzmaniPage() {
  // FAQ data
  const faqs = [
    {
      question: "SEO uzmanı nedir ve ne iş yapar?",
      answer:
        "SEO uzmanı, web sitelerinin Google ve diğer arama motorlarında üst sıralarda yer alması için kapsamlı optimizasyon çalışmaları yürüten dijital pazarlama profesyonelidir. Teknik site denetimleri, anahtar kelime araştırması, içerik stratejisi, backlink analizi ve kampanya yönetimi başlıca görevleri arasındadır. WebCraft SEO uzmanları; teknik SEO, içerik optimizasyonu ve off-page SEO alanlarında uzmanlaşmış, 10+ yıl deneyime sahip profesyonellerden oluşur.",
    },
    {
      question: "SEO uzmanı ile SEO ajansı arasındaki fark nedir?",
      answer:
        "Freelancer bir SEO uzmanı, tek başına çalışan bir profesyoneldir — genellikle daha düşük maliyetlidir ancak kapsamı sınırlıdır. Bir SEO ajansı ise teknik uzman, içerik stratejisti, link builder ve veri analistinden oluşan çok disiplinli bir ekip sunar. WebCraft, ajans yapısıyla çalışan uzman bir ekibe sahiptir; böylece tek bir kişinin yetersiz kalabileceği karmaşık ve kapsamlı SEO projelerini başarıyla tamamlıyoruz.",
    },
    {
      question: "İyi bir SEO uzmanını nasıl tanırım?",
      answer:
        "Güvenilir bir SEO uzmanının şu özellikleri taşıması gerekir: Şeffaf raporlama ve net iletişim, kanıtlanmış başarı hikayeleri ve referanslar, yalnızca white-hat (etik) teknikler kullanımı, teknik SEO bilgisi (site hızı, schema, crawl bütçesi vb.), algoritma güncellemelerini yakından takip etme ve belirli sıralamalar için garanti vermeme (bu etik dışıdır). Anında sonuç veya 1. sıra garantisi veren uzmanlara karşı dikkatli olun.",
    },
    {
      question: "SEO uzmanı tutmanın maliyeti ne kadar?",
      answer:
        "SEO uzmanı maliyeti; projenin kapsamına, sitenin büyüklüğüne ve sektörün rekabet seviyesine göre değişir. WebCraft'ta aylık SEO danışmanlık paketleri 3.000 TL'den başlamaktadır. Kapsamlı projeler için özelleştirilmiş teklifler hazırlıyoruz. Ücretsiz SEO analizi için iletişime geçin.",
    },
    {
      question: "SEO uzmanı çalışmalarında hangi araçları kullanır?",
      answer:
        "Profesyonel SEO uzmanları genellikle şu araçları kullanır: Google Search Console (arama performansı takibi), Google Analytics 4 (trafik ve dönüşüm analizi), Ahrefs veya SEMrush (anahtar kelime ve backlink araştırması), Screaming Frog (teknik site taraması), PageSpeed Insights (hız analizi), Schema.org markup araçları. WebCraft'ta tüm bu araçlarla sürekli izleme ve optimizasyon sağlıyoruz.",
    },
    {
      question: "SEO çalışmalarının sonuçları ne zaman görülür?",
      answer:
        "SEO, uzun vadeli bir dijital yatırımdır. Teknik düzeltmeler ve on-page optimizasyonlar 4-8 hafta içinde Google tarafından algılanır. Sıralama iyileşmeleri rekabete bağlı olarak 3-6 ay içinde belirginleşir. Kapsamlı link building ve içerik stratejisinin tam etkisi ise 6-12 ayda zirveye ulaşır. Sabırla ve doğru stratejiyle SEO, ücretli reklamlara kıyasla çok daha yüksek ve sürdürülebilir ROI sağlar.",
    },
    {
      question: "Hangi sektörler için SEO uzmanlığı sunuyorsunuz?",
      answer:
        "E-ticaret, turizm (oteller, tatil köyleri, acenteler), sağlık, hukuk, eğitim, teknoloji, finans, inşaat ve yerel hizmet işletmeleri dahil olmak üzere tüm sektörlere SEO uzmanlığı sunuyoruz. Fethiye ve Muğla bölgesi turizm işletmeleri için yerel SEO konusunda özellikle derin bir deneyime sahibiz.",
    },
    {
      question: "Yerel SEO uzmanı ve ulusal SEO uzmanı farkı nedir?",
      answer:
        "Yerel SEO uzmanı; Google Maps optimizasyonu, Google Benim İşletmem yönetimi, 'yakınımda' aramaları ve bölgesel anahtar kelimeler konusunda uzmanlaşmıştır. Ulusal SEO uzmanı ise Türkiye genelinde rekabetçi anahtar kelimelerde sıralama almayı hedefler. WebCraft uzmanları her iki alanda da hizmet vermektedir. Özellikle Fethiye, Muğla ve Ege bölgesi işletmeleri için yerel SEO konusunda özel deneyimimiz mevcuttur.",
    },
  ];

  // Person schema for expert team
  const personSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kubilay Özışık",
      jobTitle: "SEO Uzmanı & Kurucu",
      worksFor: {
        "@type": "Organization",
        name: "WebCraft",
        url: "https://www.webcraft.tr",
      },
      url: "https://www.webcraft.tr/hakkimizda",
      knowsAbout: [
        "SEO",
        "Teknik SEO",
        "İçerik Stratejisi",
        "Web Tasarım",
        "Dijital Pazarlama",
      ],
      description:
        "10+ yıl deneyimli SEO uzmanı. 200+ başarılı proje. Teknik SEO, içerik stratejisi ve link building konularında uzman.",
    },
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Uzmanı Hizmeti",
    description:
      "Organik arama görünürlüğünüzü artıran profesyonel SEO uzmanı hizmeti. Teknik SEO, içerik optimizasyonu, link building ve yerel SEO.",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
      logo: "https://www.webcraft.tr/webcraftLogo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Babataşı Mahallesi, 778 Sokak No: 32/A",
        addressLocality: "Fethiye",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-507-944-17-15",
        contactType: "customer service",
        availableLanguage: "Turkish",
      },
    },
    serviceType: "SEO Hizmeti",
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "SEO Uzmanı", url: "/seo-uzmani" },
    ]);

  return (
    <>
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Watermark */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            S
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
                  SEO Uzmanı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  SEO Uzmanı Desteği ile
                  <br />
                  <span className="text-red-600">Sitenizi Zirveye</span>
                  <br />
                  Taşıyoruz
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Google&apos;da üst sıralarda yer alın. Deneyimli{" "}
                  <strong className="text-white">SEO uzmanı</strong>{" "}
                  ekibimizle organik trafiğinizi artırın, rakiplerinizin önüne
                  geçin. 10+ yıl deneyim, 200+ başarılı proje.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Ücretsiz SEO Analizi Al
                  </Link>
                  <a
                    href="tel:+905079441715"
                    className="border border-gray-300 text-white hover:bg-gray-50 hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - Stats Box */}
              <div className="lg:w-1/2">
                <div className="bg-[#1a1918] p-8 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    SEO Uzmanı Ekibimiz
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        10+
                      </div>
                      <div className="text-gray-400 text-sm">Yıl Deneyim</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        200+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Başarılı Proje
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        %85
                      </div>
                      <div className="text-gray-400 text-sm">
                        Ort. Trafik Artışı
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        4.9★
                      </div>
                      <div className="text-gray-400 text-sm">
                        Google Puanı
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                      Fethiye, Muğla — Türkiye geneli hizmet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO Uzmanı Nedir? ─────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  SEO Uzmanı Nedir?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  SEO uzmanı (Search Engine Optimization uzmanı), web
                  sitelerinin Google, Bing ve diğer arama motorlarında hedef
                  kitlesi tarafından kolaylıkla bulunabilmesi için kapsamlı
                  optimizasyon çalışmaları yürüten dijital pazarlama
                  profesyonelidir.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Bir SEO uzmanı; teknik site denetimleri, anahtar kelime
                  araştırması, içerik stratejisi geliştirme, backlink analizi ve
                  rakip analizi gibi çok boyutlu çalışmalarla sitenizin arama
                  motoru görünürlüğünü artırır. Modern SEO uzmanı artık yalnızca
                  anahtar kelime yerleştirme değil; kullanıcı deneyimi, E-E-A-T
                  (Deneyim, Uzmanlık, Otorite, Güvenilirlik) kriterleri ve
                  yapay zeka odaklı arama algoritmalarını da kapsamlı şekilde
                  ele almaktadır.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  WebCraft{" "}
                  <Link
                    href="/seo-ajansi"
                    className="text-red-600 hover:underline font-semibold"
                  >
                    SEO ajansı
                  </Link>{" "}
                  bünyesinde çalışan uzman ekibimiz, her müşteri için özelleştirilmiş
                  strateji geliştirerek sürdürülebilir organik büyüme sağlar.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Teknik SEO",
                    "İçerik SEO",
                    "Off-Page SEO",
                    "Yerel SEO",
                    "E-ticaret SEO",
                    "SEO Danışmanlığı",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats box */}
              <div className="bg-gradient-to-br from-[#181716] to-[#1a1918] p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-6">
                  SEO Uzmanı Ne Zaman Gereklidir?
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: <TrendingUp className="w-5 h-5 text-red-500" />,
                      text: "Organik trafiğiniz düşüyor veya durağan kalıyor",
                    },
                    {
                      icon: <Search className="w-5 h-5 text-red-500" />,
                      text: "Rakipler Google'da sizin önünüzde çıkıyor",
                    },
                    {
                      icon: <Globe className="w-5 h-5 text-red-500" />,
                      text: "Yeni web sitesi kuruyorsunuz ve doğru başlamak istiyorsunuz",
                    },
                    {
                      icon: <Zap className="w-5 h-5 text-red-500" />,
                      text: "Algoritma güncellemesi sonrası sıralamalarınız düştü",
                    },
                    {
                      icon: <Target className="w-5 h-5 text-red-500" />,
                      text: "Belirli anahtar kelimelerde ilk sayfada görünmek istiyorsunuz",
                    },
                    {
                      icon: <BarChart2 className="w-5 h-5 text-red-500" />,
                      text: "Ücretli reklamlara bağımlılığı azaltmak istiyorsunuz",
                    },
                  ].map(({ icon, text }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">{icon}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Uzman Ekibimiz (E-E-A-T) ──────────────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                SEO Uzmanı Ekibimizle Tanışın
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                WebCraft&apos;ın SEO ekibi, teknik SEO, içerik stratejisi ve
                off-page optimizasyon alanlarında uzmanlaşmış deneyimli
                profesyonellerden oluşmaktadır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Expert 1 */}
              <div className="bg-[#1a1918] rounded-lg border border-gray-800 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-white text-2xl font-bold">KÖ</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Kubilay Özışık
                </h3>
                <p className="text-red-500 text-sm font-medium mb-3">
                  SEO Uzmanı & Kurucu
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  10+ yıl SEO deneyimi. Teknik SEO, site mimarisi ve anahtar
                  kelime stratejisi konularında uzman. 200+ başarılı SEO projesi
                  yönetmiştir.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Teknik SEO", "İçerik Stratejisi", "Link Building"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Expert 2 */}
              <div className="bg-[#1a1918] rounded-lg border border-gray-800 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-white text-2xl font-bold">AY</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Ahmet Yılmaz
                </h3>
                <p className="text-red-500 text-sm font-medium mb-3">
                  İçerik Stratejisti & SEO Uzmanı
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  8+ yıl içerik pazarlama ve SEO deneyimi. E-E-A-T odaklı
                  içerik geliştirme, seo uyumlu metin yazarlığı ve içerik silo
                  yapısı konularında uzman.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["İçerik SEO", "Anahtar Kelime", "E-E-A-T"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expert 3 */}
              <div className="bg-[#1a1918] rounded-lg border border-gray-800 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-white text-2xl font-bold">SK</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Selin Kaya
                </h3>
                <p className="text-red-500 text-sm font-medium mb-3">
                  Teknik SEO Uzmanı
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  6+ yıl teknik SEO deneyimi. Core Web Vitals optimizasyonu,
                  schema markup, crawl bütçesi yönetimi ve site mimarisi
                  konularında uzman.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Core Web Vitals", "Schema Markup", "Crawl Bütçesi"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Certifications / Trust signals */}
            <div className="bg-[#1a1918] rounded-lg border border-gray-800 p-8">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Uzman Ekibimizin Yetkinlikleri
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Award className="w-6 h-6 text-yellow-400" />,
                    label: "Google Analytics Sertifikası",
                  },
                  {
                    icon: <Star className="w-6 h-6 text-yellow-400" />,
                    label: "Google Search Console Uzmanlığı",
                  },
                  {
                    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
                    label: "Semrush SEO Uzmanlığı",
                  },
                  {
                    icon: <Layers className="w-6 h-6 text-green-400" />,
                    label: "Schema.org Markup Uzmanlığı",
                  },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex-shrink-0">{icon}</div>
                    <span className="text-gray-300 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO Uzmanı Ne Yapar? ──────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SEO Uzmanı Ne Yapar?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Profesyonel bir SEO uzmanının yürüttüğü çalışma kapsamını
                detaylıca inceleyelim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Anahtar Kelime Araştırması
                </h3>
                <p className="text-gray-600">
                  Hedef kitlenizin arama alışkanlıklarını analiz eder.
                  Rekabeti düşük, dönüşüm potansiyeli yüksek anahtar kelimeleri
                  tespit eder. Long-tail ve semantik anahtar kelime stratejisi
                  geliştirir.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Teknik SEO Denetimi
                </h3>
                <p className="text-gray-600">
                  Site hızı (Core Web Vitals), mobil uyumluluk, XML sitemap,
                  robots.txt, canonical URL&apos;ler, hatalı yönlendirmeler ve
                  crawl sorunlarını tespit eder. Google&apos;ın sitenizi düzgün
                  taraması için teknik altyapıyı hazırlar.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  İçerik Optimizasyonu
                </h3>
                <p className="text-gray-600">
                  Mevcut içerikleri güçlendirir, yeni SEO odaklı içerikler
                  üretir. H1/H2/H3 hiyerarşisi, meta başlık ve açıklamalar, iç
                  linkleme yapısı ve E-E-A-T uyumlu içerik geliştirme yapar.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Link Building
                </h3>
                <p className="text-gray-600">
                  Otoriteli web sitelerinden kaliteli backlink kazanımı için
                  strateji geliştirir. Dijital PR, konuk yazarlık ve içerik
                  pazarlama yoluyla doğal ve sürdürülebilir link profili inşa
                  eder.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Yerel SEO Optimizasyonu
                </h3>
                <p className="text-gray-600">
                  Google Benim İşletmem optimizasyonu, yerel anahtar kelime
                  hedefleme, NAP (İsim, Adres, Telefon) tutarlılığı ve yerel
                  alıntı (citation) kazanımı ile bölgesel görünürlüğü artırır.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Performans Takibi & Raporlama
                </h3>
                <p className="text-gray-600">
                  Google Search Console, Google Analytics 4 ve Ahrefs/SEMrush
                  verileriyle aylık detaylı performans raporları hazırlar.
                  Organik trafik, sıralamalar, dönüşümler ve ROI&apos;yi
                  şeffaf şekilde raporlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO Uzmanı vs Freelancer vs Ajans ────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                SEO Uzmanı mı, Freelancer mı, Ajans mı?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Hangi seçenek işletmeniz için en uygundur? Karşılaştırmalı
                analizimize göz atın.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium w-1/4">
                      Kriter
                    </th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium w-1/4">
                      Freelancer SEO
                    </th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium w-1/4">
                      In-house Uzman
                    </th>
                    <th className="text-center py-4 px-4 text-red-500 font-semibold w-1/4">
                      WebCraft SEO Ajansı
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      kriter: "Maliyet",
                      freelancer: "Düşük–Orta",
                      inhouse: "Yüksek (maaş + araçlar)",
                      webcraft: "Esnek paketler",
                    },
                    {
                      kriter: "Teknik SEO kapsamı",
                      freelancer: "Sınırlı",
                      inhouse: "Orta",
                      webcraft: "Tam kapsamlı",
                    },
                    {
                      kriter: "İçerik üretimi",
                      freelancer: "Kısmi",
                      inhouse: "Evet",
                      webcraft: "Evet",
                    },
                    {
                      kriter: "Link building",
                      freelancer: "Kısmi",
                      inhouse: "Sınırlı",
                      webcraft: "Aktif kampanya",
                    },
                    {
                      kriter: "Raporlama",
                      freelancer: "Temel",
                      inhouse: "Değişken",
                      webcraft: "Aylık detaylı rapor",
                    },
                    {
                      kriter: "Süreklilik",
                      freelancer: "Riskit",
                      inhouse: "Yüksek",
                      webcraft: "Yüksek",
                    },
                    {
                      kriter: "Algoritma güncellemeleri",
                      freelancer: "Yavaş uyum",
                      inhouse: "Orta hız",
                      webcraft: "Anlık uyum",
                    },
                  ].map(({ kriter, freelancer, inhouse, webcraft }, i) => (
                    <tr
                      key={kriter}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? "bg-[#1a1918]/50" : ""}`}
                    >
                      <td className="py-4 px-4 text-gray-200 font-medium">
                        {kriter}
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-center">
                        {freelancer}
                      </td>
                      <td className="py-4 px-4 text-gray-400 text-center">
                        {inhouse}
                      </td>
                      <td className="py-4 px-4 text-red-400 text-center font-medium">
                        {webcraft}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/seo-ajansi"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold"
              >
                SEO Ajansımız Hakkında Detaylı Bilgi{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Başarı Hikayeleri ─────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SEO Uzmanlarımızın Başarı Hikayeleri
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Rakamlar konuşuyor. İşte WebCraft SEO uzmanlarının gerçek
                sonuçları.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">
                      Turizm Sektörü
                    </div>
                    <div className="font-semibold text-gray-900">
                      Fethiye Otel
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  +%320
                </div>
                <p className="text-gray-600 mb-4">
                  6 ayda organik trafik artışı. &quot;fethiye otel&quot; ve
                  &quot;fethiye konaklama&quot; aramalarında ilk 3&apos;e girdi.
                </p>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Teknik SEO + Yerel SEO + İçerik
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">
                      E-ticaret
                    </div>
                    <div className="font-semibold text-gray-900">
                      Online Mağaza
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  +%185
                </div>
                <p className="text-gray-600 mb-4">
                  12 ayda organik satış artışı. 150+ ürün sayfasında üst sayfa
                  sıralaması elde edildi.
                </p>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  E-ticaret SEO + İçerik + Link Building
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">
                      Hizmet Sektörü
                    </div>
                    <div className="font-semibold text-gray-900">
                      Muğla Hukuk Bürosu
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  +%240
                </div>
                <p className="text-gray-600 mb-4">
                  9 ayda organik lead artışı. &quot;muğla avukat&quot; ve
                  &quot;fethiye hukuk bürosu&quot; aramalarında 1. sayfaya çıktı.
                </p>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Yerel SEO + E-E-A-T İçerik + Schema
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Çalışma Süreci ────────────────────────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                SEO Uzmanı Çalışma Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                İlk analizden ölçülebilir sonuçlara — adım adım nasıl
                çalışıyoruz?
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Ücretsiz SEO Analizi & Keşif Görüşmesi",
                  desc: "Sitenizi teknik, içerik ve backlink açısından analiz ediyoruz. İşletme hedeflerinizi, hedef kitlenizi ve rakiplerinizi anlıyoruz. 30 dakikalık keşif görüşmesiyle başlıyoruz.",
                  color: "text-red-500",
                },
                {
                  step: "02",
                  title: "Kapsamlı SEO Denetimi & Rakip Analizi",
                  desc: "Teknik SEO sorunlarını, içerik boşluklarını ve kaçırılan fırsatları tespit ediyoruz. Rakiplerinizin neden sizi geçtiğini analiz ediyoruz.",
                  color: "text-orange-500",
                },
                {
                  step: "03",
                  title: "Özelleştirilmiş SEO Stratejisi Geliştirme",
                  desc: "Sektörünüze, rekabet düzeyinize ve bütçenize özel bir SEO yol haritası hazırlıyoruz. Öncelikli aksiyonlar, hedef anahtar kelimeler ve içerik planını belirliyoruz.",
                  color: "text-yellow-500",
                },
                {
                  step: "04",
                  title: "Uygulama: Teknik, İçerik & Off-Page",
                  desc: "Teknik sorunları gideriyoruz, içerikleri optimize ediyoruz ve link building kampanyası başlatıyoruz. Ekibimizin her üyesi kendi uzmanlık alanında aksiyona geçiyor.",
                  color: "text-green-500",
                },
                {
                  step: "05",
                  title: "İzleme, Raporlama & Sürekli Optimizasyon",
                  desc: "Aylık detaylı performans raporları sunuyoruz. Algoritma güncellemelerine anlık uyum sağlıyoruz. Sonuçlara göre stratejiyi sürekli iyileştiriyoruz.",
                  color: "text-blue-500",
                },
              ].map(({ step, title, desc, color }) => (
                <div
                  key={step}
                  className="flex gap-6 bg-[#1a1918] rounded-lg border border-gray-800 p-6 hover:border-red-900/50 transition-colors"
                >
                  <div
                    className={`text-4xl font-bold ${color} flex-shrink-0 w-12 text-center`}
                  >
                    {step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fiyatlandırma ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SEO Uzmanı Fiyatları
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                İşletmenizin büyüklüğüne ve hedeflerine göre esnek SEO paketleri
                sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="border border-gray-200 rounded-lg p-8 hover:border-red-300 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Başlangıç
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Küçük işletmeler için
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  3.000 TL
                  <span className="text-base font-normal text-gray-500">
                    /ay
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Aylık anahtar kelime takibi (50 kelime)",
                    "Teknik SEO denetimi",
                    "On-page optimizasyon (5 sayfa/ay)",
                    "Aylık performans raporu",
                    "Google Search Console entegrasyonu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className="block text-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-full transition-all"
                >
                  Teklif Al
                </Link>
              </div>

              {/* Professional */}
              <div className="border-2 border-red-600 rounded-lg p-8 relative shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  EN POPÜLER
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Profesyonel
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Büyüme hedefleyen KOBİ&apos;ler için
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  7.500 TL
                  <span className="text-base font-normal text-gray-500">
                    /ay
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Aylık anahtar kelime takibi (150 kelime)",
                    "Kapsamlı teknik SEO",
                    "On-page optimizasyon (15 sayfa/ay)",
                    "SEO uyumlu içerik üretimi (4 blog/ay)",
                    "Link building kampanyası",
                    "Rakip analizi",
                    "Aylık strateji görüşmesi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className="block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all"
                >
                  Hemen Başlayalım
                </Link>
              </div>

              {/* Enterprise */}
              <div className="border border-gray-200 rounded-lg p-8 hover:border-red-300 hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Kurumsal
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Büyük işletmeler ve e-ticaret için
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  15.000 TL+
                  <span className="text-base font-normal text-gray-500">
                    /ay
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Sınırsız anahtar kelime takibi",
                    "Tam kapsamlı teknik SEO",
                    "Sınırsız sayfa optimizasyonu",
                    "İçerik stratejisi + üretim",
                    "Agresif link building kampanyası",
                    "Haftalık strateji görüşmeleri",
                    "Özel hesap yöneticisi",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className="block text-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-full transition-all"
                >
                  Özel Teklif Al
                </Link>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Fiyatlar KDV hariçtir. Özel projeler için{" "}
              <Link href="/iletisim" className="text-red-600 hover:underline">
                bizimle iletişime geçin
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── Blog Kaynakları ───────────────────────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                SEO Uzmanlığı Kaynaklarımız
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                SEO ekibimizin hazırladığı kapsamlı rehberlere göz atın.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: "/blog/teknik-seo-kontrol-listesi",
                  title: "Teknik SEO Kontrol Listesi",
                  desc: "Web sitenizin teknik altyapısını Google için optimize etmek için kapsamlı rehber.",
                  tag: "Teknik SEO",
                },
                {
                  href: "/blog/yerel-seo-stratejileri",
                  title: "Yerel SEO Stratejileri",
                  desc: "Bölgesel aramalarda rakiplerinizin önüne geçmek için yerel SEO rehberi.",
                  tag: "Yerel SEO",
                },
                {
                  href: "/blog/profesyonel-seo-hizmeti",
                  title: "Profesyonel SEO Hizmeti",
                  desc: "Profesyonel SEO hizmetinden ne beklenmeli? Kapsamlı rehber.",
                  tag: "SEO Hizmeti",
                },
              ].map(({ href, title, desc, tag }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-[#1a1918] border border-gray-800 rounded-lg p-6 hover:border-red-900/50 transition-all group"
                >
                  <span className="text-xs bg-red-900/30 text-red-400 px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-3 mb-2 group-hover:text-red-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  <div className="flex items-center gap-1 text-red-500 text-sm mt-4 font-medium">
                    Okumaya devam et <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-4xl mx-auto px-6 sm:px-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              SEO Uzmanlarımızla Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Ücretsiz SEO analizi alın. Sitenizin eksiklerini tespit edelim ve
              organik büyüme yol haritanızı birlikte oluşturalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-white text-red-600 hover:bg-red-50 font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg"
              >
                Ücretsiz SEO Analizi Al
              </Link>
              <Link
                href="/hizmetler/seo-hizmeti"
                className="border-2 border-white text-white hover:bg-red-700 font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg"
              >
                SEO Hizmetimizi İncele
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <ServiceFAQSection faqs={faqs} />
        </Suspense>

        {/* ── Social Proof ──────────────────────────────────── */}
        <Suspense fallback={<SectionSkeleton height="h-32" />}>
          <SocialProofStrip />
        </Suspense>

        {/* ── Footer ────────────────────────────────────────── */}
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

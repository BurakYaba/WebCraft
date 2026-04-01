import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import RelatedServices from "@/components/RelatedServices";
import {
  CheckCircle,
  ArrowRight,
  Search,
  TrendingUp,
  Code2,
  Share2,
  Award,
  Settings,
} from "lucide-react";
import Link from "next/link";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer"));

// Loading component
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "SEO Uyumlu Web Sitesi | Google'da Üst Sıralara Çıkın | WebCraft",
  description:
    "SEO uyumlu web sitesi tasarımı ile Google'da üst sıralarda yer alın. Teknik SEO altyapısı, semantik HTML yapısı, schema markup ve Core Web Vitals optimizasyonu ile doğru temelden başlayın.",
  keywords:
    "seo uyumlu web sitesi, google seo, arama motoru optimizasyonu, teknik seo, seo web tasarım, google'da üst sıralara çıkma",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/hizmetler/seo-uyumlu-web-sitesi",
  },
  openGraph: {
    title: "SEO Uyumlu Web Sitesi | Google'da Üst Sıralara Çıkın | WebCraft",
    description:
      "SEO uyumlu web sitesi tasarımı ile Google'da üst sıralarda yer alın.",
    url: "https://www.webcraft.tr/hizmetler/seo-uyumlu-web-sitesi",
    siteName: "WebCraft",
    images: [
      {
        url: "/bento/web-tasarım.webp",
        width: 1200,
        height: 630,
        alt: "SEO Uyumlu Web Sitesi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Uyumlu Web Sitesi | Google'da Üst Sıralara Çıkın | WebCraft",
    description:
      "SEO uyumlu web sitesi tasarımı ile Google'da üst sıralarda yer alın.",
    images: ["/bento/web-tasarım.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SeoUyumluWebSitesiPage() {
  const faqs = [
    {
      question: "SEO uyumlu web sitesi nedir?",
      answer:
        "SEO uyumlu web sitesi, arama motorlarının (Google, Bing) kolayca tarayabildiği, anladığı ve sıraladığı web siteleridir. Teknik SEO standartlarına uygun kodlama, hızlı yükleme, mobil uyumluluk, semantik HTML yapısı ve kaliteli içerik ile Google'da üst sıralarda yer alır.",
    },
    {
      question: "SEO uyumlu web sitesi ne kadar sürer?",
      answer:
        "SEO uyumlu web sitesi projesi genellikle 3-6 hafta içinde tamamlanır. Teknik SEO kurulumu, schema markup, meta etiket yapılandırması, site haritası oluşturma ve test süreçleri dahildir. İlk organik sinyaller 2-3 ay içinde görülmeye başlar.",
    },
    {
      question: "Mevcut web sitemi SEO uyumlu hale getirebilir misiniz?",
      answer:
        "Evet, mevcut web sitenizin SEO uyumluluğunu analiz ediyor ve gerekli optimizasyonları yapıyoruz. Teknik SEO düzeltmeleri, içerik optimizasyonu, site hızlandırma ve mobil uyumluluk iyileştirmeleri ile web sitenizi Google için optimize ediyoruz.",
    },
    {
      question: "SEO uyumlu web sitesi ile ne kadar trafik artışı olur?",
      answer:
        "SEO uyumlu altyapıya sahip bir site, teknik engeller olmadan Google tarafından taranır ve daha hızlı sıralanmaya başlar. Trafik artışının büyüklüğü içerik kalitesine ve rekabete göre değişse de doğru teknik temel, her SEO çalışmasının verimliliğini artırır.",
    },
    {
      question: "SEO uyumlu web sitesi Google'da ne kadar sürede sıralanır?",
      answer:
        "Yeni web siteleri Google'da sıralanmaya 2-3 ay içinde başlar. İlk sonuçlar 3-6 ay içinde görülür. Rekabetçi anahtar kelimelerde üst sıralara çıkmak 6-12 ay sürebilir. Teknik altyapısı güçlü siteler bu süreçte daha avantajlı bir başlangıç noktasına sahip olur.",
    },
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Uyumlu Web Sitesi",
    description:
      "Google'da üst sıralarda yer alan, teknik SEO standartlarına uygun ve arama motoru optimize edilmiş web siteleri",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
      logo: "https://www.webcraft.tr/webcraftLogo.png",
    },
    serviceType: "SEO Uyumlu Web Tasarım",
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
      { name: "Hizmetler", url: "/hizmetler" },
      {
        name: "SEO Uyumlu Web Sitesi",
        url: "/hizmetler/seo-uyumlu-web-sitesi",
      },
    ]);

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <ServiceHero
          title="SEO Uyumlu Web Sitesi"
          subtitle="Google'da Üst Sıralara Çıkın"
          description="Teknik SEO altyapısı, semantik HTML yapısı, schema markup ve Core Web Vitals optimizasyonu ile Google'ın anlayabileceği web siteleri inşa ediyoruz. Başarı için doğru temeli hazırlıyoruz."
          watermark="S"
          backgroundImage="/bento/web-tasarım.webp"
        />

        {/* What Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              SEO Uyumlu Web Sitesi Nedir?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                SEO uyumlu web sitesi, arama motorlarının (Google, Bing) kolayca
                tarayabildiği, anladığı ve sıraladığı web siteleridir. Teknik
                SEO standartlarına uygun kodlama, hızlı yükleme, mobil
                uyumluluk, semantik HTML yapısı ve kaliteli içerik ile
                Google&apos;da üst sıralarda yer alır.
              </p>
              <p className="mb-4">
                WebCraft olarak, 2015 yılından bu yana SEO uyumlu web siteleri
                tasarlıyoruz. Her projede, anahtar kelime araştırması, içerik
                stratejisi, teknik SEO optimizasyonu ve performans optimizasyonu
                yapıyoruz. Müşterilerimizin %80&apos;i 6 ay içinde organik
                trafik artışı görür.
              </p>
              <p className="mb-4">
                SEO uyumlu web sitesi sadece arama motorları için değil, aynı
                zamanda kullanıcılar için de optimize edilmiştir. Hızlı yükleme
                süreleri, kolay navigasyon, mobil uyumluluk ve kaliteli içerik
                ile kullanıcı deneyimini maksimize ediyoruz. Bu sayede, hem
                arama motorları hem de kullanıcılar için en iyi web sitesini
                oluşturuyoruz.
              </p>
              <p className="mb-4">
                Teknik SEO optimizasyonu, site haritası oluşturma, robots.txt
                yapılandırması, schema markup, meta etiketler, alt etiketler,
                canonical URL&apos;ler ve breadcrumb navigasyonu gibi tüm SEO
                standartlarını uyguluyoruz. Google Search Console ve Google
                Analytics entegrasyonunu proje tesliminde kuruyoruz; izleme
                altyapınız baştan hazır olur.
              </p>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Neden SEO Uyumlu Web Sitesi?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Google&apos;da üst sıralarda yer almak, organik trafik ve müşteri
              artışı sağlar. SEO uyumlu web siteleri, arama motorlarında daha
              görünür olur, daha fazla ziyaretçi çeker ve dönüşüm oranlarını
              artırır. Uzun vadede en etkili ve sürdürülebilir dijital pazarlama
              yöntemidir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Google&apos;da üst sıralarda yer alma
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">%30-50 organik trafik artışı</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Uzun vadeli ve sürdürülebilir sonuçlar
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Reklamlara göre daha düşük maliyet
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Marka kredibilitesi ve güven artışı
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">Dönüşüm oranlarında iyileşme</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Mobil aramalarda öncelikli sıralama
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Yerel aramalarda üst sıralarda görünme
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SEO Uyumlu Web Sitesi Özellikleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Google&apos;da üst sıralarda yer almanızı sağlayan teknik SEO ve
                içerik optimizasyonu özellikleri
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Search className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Teknik SEO Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Site haritası, robots.txt, schema markup, meta etiketler ve
                  canonical URL&apos;ler ile Google&apos;ın web sitenizi kolayca
                  taramasını sağlama
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Code2 className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Semantik HTML Yapısı
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  H1–H6 başlık hiyerarşisi, anlamlı etiketler ve temiz URL
                  yapısı ile Google&apos;ın sayfanızı doğru yorumlamasını
                  sağlama
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  İçerik Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  SEO uyumlu başlıklar, alt metinler, içerik yapısı ve kaliteli
                  içerik ile arama motorlarında üst sıralarda yer alma
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Share2 className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Open Graph ve Sosyal Meta
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  og:title, og:description ve og:image etiketleri ile sosyal
                  medyada ve arama sonuçlarında güçlü bir görünüm sağlama
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Award className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Schema Markup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yapılandırılmış veri (schema.org) ile Google&apos;ın
                  içeriğinizi daha iyi anlamasını ve zengin sonuçlar
                  göstermesini sağlama
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Settings className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Search Console Kurulumu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Google Search Console ve Analytics hesaplarını sitenize
                  bağlıyor, doğrulama ve index isteklerini teslimde tamamlıyoruz
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Checklist Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                SEO Uyumlu Web Sitesi Kontrol Listesi
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Web sitenizin SEO uyumluluğunu kontrol etmek için 20 maddelik
                kapsamlı liste
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1918] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Teknik SEO
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      XML site haritası (sitemap.xml)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Robots.txt dosyası yapılandırması
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      HTTPS (SSL sertifikası)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Mobil uyumluluk (responsive tasarım)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Hızlı yükleme süresi (3 saniye altı)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Core Web Vitals optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Canonical URL yapılandırması
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Breadcrumb navigasyonu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      404 hata sayfası optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      URL yapısı optimizasyonu
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1a1918] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  İçerik SEO
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Benzersiz ve kaliteli içerik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Anahtar kelime optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Meta başlık ve açıklama etiketleri
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      H1, H2, H3 başlık hiyerarşisi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Alt etiketleri (image alt tags)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      İç bağlantı stratejisi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Schema markup (yapılandırılmış veri)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Open Graph meta etiketleri
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Sosyal medya entegrasyonu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Sayfa hız optimizasyonu (Core Web Vitals)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing SEO CTA Divider */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-900 font-semibold text-lg">
                Siteniz yayına girdikten sonra sürekli SEO yönetimi mi
                arıyorsunuz?
              </p>
              <p className="text-gray-600 mt-1">
                Anahtar kelime kampanyaları, backlink stratejisi ve aylık
                raporlama farklı bir uzmanlık gerektirir.
              </p>
            </div>
            <Link
              href="/hizmetler/seo-hizmeti"
              className="flex-shrink-0 inline-flex items-center bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-colors duration-300"
            >
              SEO Hizmetimiz
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SEO Uyumlu Web Tasarım Sürecimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                2015 yılından bu yana 10 yıllık deneyimimiz ile 200+ SEO uyumlu
                proje tamamladık
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hedef Kelime Analizi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sayfalarınızın hangi sorgulara yanıt vereceğini belirliyor,
                  içerik yapısını ve URL mimarisini buna göre planlıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Teknik SEO Kurulumu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Site haritası, robots.txt, schema markup ve meta etiketler ile
                  web sitenizi Google için optimize ediyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  İçerik Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  SEO uyumlu içerikler oluşturuyor, başlıklar ve meta
                  açıklamalar optimize ediyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kurulum ve Teslim
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Search Console doğrulaması, index isteği ve Analytics
                  kurulumunu tamamlayarak sitenizi izlemeye hazır teslim
                  ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neden WebCraft&apos;ı Tercih Etmelisiniz?
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Deneyim</h3>
                    <p className="text-red-100">
                      2015 yılından bu yana 10 yıllık deneyim ve 200+ SEO uyumlu
                      başarılı proje
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Uzmanlık</h3>
                    <p className="text-red-100">
                      Teknik SEO, Anahtar Kelime Stratejisi, İçerik
                      Optimizasyonu, Schema Markup, Google Analytics alanlarında
                      uzman ekibimiz
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Güvenilirlik</h3>
                    <p className="text-red-100">
                      %98 müşteri memnuniyeti ve teknik SEO standartlarını
                      eksiksiz uygulayan proje teslimleri
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/iletisim"
                className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz SEO Analizi Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQSection faqs={faqs} schema={faqSchema} />

        {/* Related Services */}
        <RelatedServices currentSlug="seo-uyumlu-web-sitesi" />

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Google&apos;da Üst Sıralarda Yer Alın
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              SEO uyumlu web tasarım hizmeti için hemen iletişime geçin.
              Ücretsiz SEO analizi ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz SEO Analizi
              </Link>
              <a
                href="tel:+905079441715"
                className="border border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                +90 (507) 944 17 15
              </a>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

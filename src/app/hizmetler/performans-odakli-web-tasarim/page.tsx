import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbSchema";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import RelatedServices from "@/components/RelatedServices";
import {
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Gauge,
  Target,
  Award,
  Code,
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
  title: "Performans Odaklı Web Tasarım | Hızlı Web Siteleri | WebCraft",
  description:
    "Performans odaklı web tasarım hizmeti. Core Web Vitals optimizasyonu, Next.js teknolojisi ve hızlı yükleme süreleri. Google'da üst sıralarda yer alın.",
  keywords:
    "performans odaklı web tasarım, hızlı web sitesi, core web vitals, next.js web tasarım, web sitesi hızlandırma, performans optimizasyonu",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/hizmetler/performans-odakli-web-tasarim",
  },
  openGraph: {
    title: "Performans Odaklı Web Tasarım | Hızlı Web Siteleri | WebCraft",
    description:
      "Performans odaklı web tasarım hizmeti. Core Web Vitals optimizasyonu ve hızlı yükleme süreleri.",
    url: "https://www.webcraft.tr/hizmetler/performans-odakli-web-tasarim",
    siteName: "WebCraft",
    images: [
      {
        url: "/bento/web-tasarım.jpg",
        width: 1200,
        height: 630,
        alt: "Performans Odaklı Web Tasarım",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performans Odaklı Web Tasarım | Hızlı Web Siteleri | WebCraft",
    description:
      "Performans odaklı web tasarım hizmeti. Core Web Vitals optimizasyonu ve hızlı yükleme süreleri.",
    images: ["/bento/web-tasarım.jpg"],
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

export default function PerformansOdakliWebTasarimPage() {
  const faqs = [
    {
      question: "Performans odaklı web tasarım nedir?",
      answer:
        "Performans odaklı web tasarım, web sitenizin hızlı yüklenmesini, kullanıcı deneyimini optimize eden ve Core Web Vitals metriklerini karşılayan bir yaklaşımdır. Modern teknolojiler (Next.js, React) kullanılarak geliştirilen web siteleri, arama motorlarında üst sıralarda yer alır ve dönüşüm oranlarını artırır.",
    },
    {
      question: "Core Web Vitals nedir ve neden önemlidir?",
      answer:
        "Core Web Vitals, Google'ın web sitesi performansını ölçmek için kullandığı metriklerdir: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift). Bu metriklerin optimize edilmesi, Google sıralamanızı yükseltir ve kullanıcı memnuniyetini artırır.",
    },
    {
      question: "Next.js neden performans için en iyi seçenektir?",
      answer:
        "Next.js, sunucu taraflı rendering (SSR), static site generation (SSG), otomatik kod bölme (code splitting), resim optimizasyonu ve hızlı yükleme gibi özellikler sunar. Bu özellikler sayesinde web siteniz 2-3 saniyede yüklenir ve Core Web Vitals metriklerinde yüksek skorlar alır.",
    },
    {
      question: "Mevcut web sitemi hızlandırabilir misiniz?",
      answer:
        "Evet, mevcut web sitenizin performans analizini yaparak optimizasyon önerileri sunuyoruz. Görsellerin optimize edilmesi, kod temizliği, caching stratejileri ve modern teknolojilere geçiş gibi çözümlerle web sitenizi hızlandırabiliriz.",
    },
    {
      question: "Performans odaklı web tasarım SEO'ya nasıl etki eder?",
      answer:
        "Google, web sitesi hızını sıralama faktörü olarak kullanır. Hızlı yüklenen web siteleri, arama motorlarında üst sıralarda yer alır. Core Web Vitals optimizasyonu, organik trafiğinizi %30-50 artırabilir ve dönüşüm oranlarınızı iyileştirir.",
    },
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Performans Odaklı Web Tasarım",
    description:
      "Hızlı yüklenen, Core Web Vitals optimize edilmiş ve Next.js teknolojisi ile geliştirilmiş web siteleri",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
      logo: "https://www.webcraft.tr/webcraftLogo.png",
    },
    serviceType: "Performans Odaklı Web Tasarım",
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

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Hizmetler", url: "/hizmetler" },
    {
      name: "Performans Odaklı Web Tasarım",
      url: "/hizmetler/performans-odakli-web-tasarim",
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

        {/* Hero Section */}
        <ServiceHero
          title="Performans Odaklı Web Tasarım"
          subtitle="Hızlı Web Siteleri"
          description="Core Web Vitals optimizasyonu ve Next.js teknolojisi ile 2 saniyede yüklenen, arama motorlarında üst sıralarda yer alan web siteleri geliştiriyoruz."
          watermark="P"
          backgroundImage="/bento/web-tasarım.jpg"
        />

        {/* What Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Performans Odaklı Web Tasarım Nedir?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Performans odaklı web tasarım, web sitenizin hızlı yüklenmesini,
                kullanıcı deneyimini optimize eden ve arama motorlarında üst
                sıralarda yer almanızı sağlayan bir yaklaşımdır. Google&apos;ın
                Core Web Vitals metriklerini temel alarak, web sitenizin
                performansını maksimize ediyoruz.
              </p>
              <p className="mb-4">
                Modern teknolojiler (Next.js 15, React, TypeScript) kullanarak,
                2-3 saniyede yüklenen, SEO uyumlu ve kullanıcı dostu web
                siteleri geliştiriyoruz. Sunucu taraflı rendering (SSR), static
                site generation (SSG), otomatik resim optimizasyonu ve akıllı
                caching stratejileri ile web sitenizin performansını en üst
                seviyeye çıkarıyoruz.
              </p>
              <p className="mb-4">
                Performans odaklı web tasarım, sadece hızlı yükleme anlamına
                gelmez. Aynı zamanda düşük bant genişliği tüketimi, mobil uyum,
                erişilebilirlik ve SEO optimizasyonu gibi faktörleri de içerir.
                Bu sayede, web siteniz hem kullanıcılar hem de arama motorları
                için optimize edilmiş olur.
              </p>
              <p className="mb-4">
                WebCraft olarak, 2015 yılından bu yana 200+ performans odaklı
                web projesi tamamladık. Her projede, Core Web Vitals
                metriklerinde %90+ skorlar elde ediyoruz ve müşterilerimizin
                organik trafiğini ortalama %40 artırıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Neden Performans Odaklı Web Tasarım?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Hızlı yüklenen web siteleri, arama motorlarında üst sıralarda yer
              alır, kullanıcı memnuniyetini artırır ve dönüşüm oranlarını
              yükseltir. Google&apos;ın araştırmalarına göre, web sitesi yükleme
              süresinde 1 saniyelik gecikme, dönüşüm oranlarını %7 azaltabilir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Google sıralamasında üst sıralara çıkış
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">%30-50 organik trafik artışı</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  2-3 saniyede hızlı yükleme süresi
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Core Web Vitals metriklerinde %90+ skor
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Mobil cihazlarda optimize edilmiş performans
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Düşük bant genişliği tüketimi
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Kullanıcı memnuniyeti ve sadakat artışı
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Dönüşüm oranlarında %20+ iyileşme
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
                Performans Odaklı Web Tasarım Özellikleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Web sitenizin performansını maksimize eden teknolojiler ve
                optimizasyon stratejileri
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Next.js 15 Teknolojisi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sunucu taraflı rendering (SSR), static site generation (SSG)
                  ve otomatik kod bölme ile ultra hızlı web siteleri
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Gauge className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Core Web Vitals Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  LCP, FID, CLS metriklerinde %90+ skorlar ile Google&apos;da
                  üst sıralarda yer alma garantisi
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hızlı Yükleme Süresi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  2-3 saniyede tam sayfa yüklemesi ile kullanıcı deneyimini
                  maksimize eden performans
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Target className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Resim Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  WebP/AVIF formatları, lazy loading ve responsive images ile
                  %70 daha küçük görsel boyutları
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Code className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Akıllı Caching
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  CDN entegrasyonu, browser caching ve service workers ile
                  tekrar ziyaretlerde anında yükleme
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Award className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Performans İzleme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Google Lighthouse, PageSpeed Insights ve Real User Monitoring
                  (RUM) ile sürekli performans takibi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Performans Odaklı Web Tasarım Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                2015 yılından bu yana 10 yıllık deneyimimiz ile 200+ başarılı
                proje tamamladık
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Performans Analizi
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Mevcut web sitenizin performans analizini yapıyor, Core Web
                  Vitals metriklerini ölçüyor ve optimizasyon planı
                  oluşturuyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Tasarım ve Geliştirme
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Next.js 15 ve modern teknolojilerle performans odaklı web
                  sitenizi geliştiriyor, resim optimizasyonu ve caching
                  stratejileri uyguluyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Test ve Optimizasyon
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Google Lighthouse ve PageSpeed Insights ile test ediyoruz.
                  Core Web Vitals metriklerinde %90+ skorlar elde ediyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Yayın ve İzleme
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Web sitenizi CDN ile yayınlıyoruz. Performans izleme araçları
                  ile sürekli optimizasyon ve raporlama yapıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Section */}
        <section className="py-20 bg-white">
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
                      2015 yılından bu yana 10 yıllık deneyim ve 200+ başarılı
                      performans odaklı proje
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Uzmanlık</h3>
                    <p className="text-red-100">
                      Next.js, React, Core Web Vitals Optimizasyonu, Performans
                      İzleme, CDN Entegrasyonu alanlarında uzman ekibimiz
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Güvenilirlik</h3>
                    <p className="text-red-100">
                      %98 müşteri memnuniyeti, %90+ Core Web Vitals skorları ve
                      sürekli performans izleme hizmetleri
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/iletisim"
                className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQSection faqs={faqs} schema={faqSchema} />

        {/* Related Services */}
        <RelatedServices currentSlug="performans-odakli-web-tasarim" />

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hızlı ve Performanslı Web Siteniz Hazır
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Performans odaklı web tasarım hizmeti için hemen iletişime geçin.
              Ücretsiz performans analizi ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Teklif Al
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

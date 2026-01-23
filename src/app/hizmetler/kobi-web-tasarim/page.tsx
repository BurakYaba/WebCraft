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
  DollarSign,
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Zap,
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
  title: "KOBİ Web Tasarım | Profesyonel Web Siteleri | WebCraft",
  description:
    "Küçük ve orta ölçekli işletmeler için profesyonel web tasarım hizmeti. SEO uyumlu ve mobil uyumlu, modern web siteleri.",
  keywords:
    "kobi web tasarım, küçük işletme web sitesi, profesyonel web tasarım, küçük işletme dijital çözümler, kurumsal web sitesi",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/hizmetler/kobi-web-tasarim",
  },
  openGraph: {
    title: "KOBİ Web Tasarım | Profesyonel Web Siteleri | WebCraft",
    description:
      "Küçük ve orta ölçekli işletmeler için profesyonel web tasarım hizmeti. İşletmenize özel çözümler.",
    url: "https://www.webcraft.tr/hizmetler/kobi-web-tasarim",
    siteName: "WebCraft",
    images: [
      {
        url: "/bento/web-tasarım.jpg",
        width: 1200,
        height: 630,
        alt: "KOBİ Web Tasarım",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOBİ Web Tasarım | Profesyonel Web Siteleri | WebCraft",
    description:
      "Küçük ve orta ölçekli işletmeler için profesyonel web tasarım hizmeti.",
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

export default function KobiWebTasarimPage() {
  const faqs = [
    {
      question: "KOBİ web tasarımı ne kadar sürer?",
      answer:
        "KOBİ web tasarım projesi genellikle 2-4 hafta içinde tamamlanır. Basit kurumsal web siteleri 2 hafta, daha karmaşık projeler 4 hafta sürer. Hızlı teslimat garantisi ile işletmenizi dijital dünyada hızla temsil ediyoruz.",
    },
    {
      question: "KOBİ web tasarımı hangi özellikleri içerir?",
      answer:
        "Tüm KOBİ web tasarım paketlerimiz responsive (mobil uyumlu) tasarım, SEO optimizasyonu, Google My Business entegrasyonu, iletişim formu, Google Analytics, sosyal medya entegrasyonu ve 1 yıl ücretsiz hosting içerir. Premium paketlerde blog sistemi ve e-ticaret özellikleri de mevcuttur.",
    },
    {
      question: "KOBİ için SEO hizmeti veriyor musunuz?",
      answer:
        "Evet, tüm KOBİ web tasarım paketlerimizde temel SEO optimizasyonu bulunur. Ayrıca, profesyonel SEO hizmetleri ile Google'da üst sıralarda yer almanızı sağlıyoruz. Yerel SEO, anahtar kelime araştırması ve içerik optimizasyonu hizmetlerimiz mevcuttur.",
    },
    {
      question: "KOBİ web tasarımı sonrası destek veriyor musunuz?",
      answer:
        "Evet, tüm KOBİ web tasarım projelerimizde 1 yıl ücretsiz teknik destek bulunur. İçerik güncellemeleri, hata düzeltmeleri ve teknik sorunlar için 7/24 destek ekibimiz her zaman yardımcı olmaya hazırdır. Ayrıca, aylık bakım paketleri ile web sitenizin güvenliğini ve performansını sürekli güncel tutuyoruz.",
    },
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "KOBİ Web Tasarım",
    description:
      "Küçük ve orta ölçekli işletmeler için profesyonel web tasarım hizmetleri",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
      logo: "https://www.webcraft.tr/webcraftLogo.png",
    },
    serviceType: "KOBİ Web Tasarım",
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
    { name: "KOBİ Web Tasarım", url: "/hizmetler/kobi-web-tasarim" },
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
          title="KOBİ Web Tasarım"
          subtitle="Profesyonel Web Siteleri"
          description="Küçük ve orta ölçekli işletmeler için profesyonel web tasarım hizmetleri. SEO uyumlu, mobil uyumlu ve modern tasarım çözümleri."
          watermark="K"
          backgroundImage="/bento/web-tasarım.jpg"
        />

        {/* What Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              KOBİ Web Tasarım Nedir?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                KOBİ web tasarım, küçük ve orta ölçekli işletmelere özel,
                profesyonel ve etkili web sitesi çözümleridir. İşletmenizin
                dijital varlığını oluşturmak, online görünürlüğünü artırmak ve
                müşterilerinize ulaşmak için özel web tasarım çözümleri
                sunuyoruz.
              </p>
              <p className="mb-4">
                WebCraft olarak, 2015 yılından bu yana 200+ KOBİ&apos;ye
                profesyonel web tasarım hizmetleri sunuyoruz. Küçük işletmelerin
                dijital dönüşümüne öncülük ediyor, modern teknolojiler ve SEO
                uyumlu yapılar ile web sitenizin Google&apos;da üst sıralarda
                yer almasını sağlıyoruz.
              </p>
              <p className="mb-4">
                KOBİ web tasarım hizmetlerimiz, responsive (mobil uyumlu)
                tasarım, SEO optimizasyonu, Google My Business entegrasyonu,
                iletişim formu, Google Analytics ve 1 yıl ücretsiz hosting
                içerir. İşletmenize özel profesyonel çözümler sunuyoruz.
              </p>
              <p className="mb-4">
                Küçük işletmelerin dijital dünyada büyümesini desteklemek için
                sadece web tasarımı değil, aynı zamanda dijital pazarlama, SEO
                hizmetleri ve sosyal medya yönetimi gibi tamamlayıcı hizmetler
                de sunuyoruz. İşletmenizin online başarısı için tam destek
                sağlıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Neden KOBİ Web Tasarım?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Küçük ve orta ölçekli işletmelerin dijital dünyada başarılı olması
              için profesyonel ve etkili web siteleri gereklidir. KOBİ web
              tasarım hizmetimiz, işletmenize özel, modern ve SEO uyumlu web
              siteleri sunar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  İşletmenize özel profesyonel çözümler
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  2-4 hafta içinde hızlı teslimat
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  SEO uyumlu ve mobil uyumlu tasarım
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  1 yıl ücretsiz hosting ve teknik destek
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">Esnek ödeme seçenekleri</span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Google My Business entegrasyonu
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  İletişim formu ve Google Analytics
                </span>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-white">
                  Profesyonel tasarım ve kullanıcı dostu arayüz
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
                KOBİ Web Tasarım Özellikleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Küçük işletmeler için özel olarak tasarlanmış web tasarım
                paketleri ve özellikleri
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <DollarSign className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Özel Çözümler
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  İşletmenizin ihtiyaçlarına özel tasarlanmış profesyonel web
                  siteleri. Esnek ödeme seçenekleri ile bütçenize uygun hizmet
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Briefcase className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Profesyonel Tasarım
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern ve kullanıcı dostu arayüz tasarımı. Markanızı yansıtan
                  profesyonel görünüm ve işlevsellik
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  SEO Optimizasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Google&apos;da üst sıralarda yer almanızı sağlayan temel SEO
                  optimizasyonu. Organik trafik ve müşteri artışı
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mobil Uyumlu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Responsive tasarım ile tüm cihazlarda (masaüstü, tablet,
                  mobil) mükemmel görünüm ve kullanıcı deneyimi
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Award className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ücretsiz Destek
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  1 yıl ücretsiz teknik destek ve hosting. İçerik güncellemeleri
                  ve hata düzeltmeleri dahil
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hızlı Teslimat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  2-4 hafta içinde web siteniz hazır. Hızlı teslimat garantisi
                  ile dijital dünyadaki yerinizi alın
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                KOBİ Web Tasarım Sürecimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                2015 yılından bu yana 10 yıllık deneyimimiz ile 200+ KOBİ
                başarılı proje tamamladık
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  İhtiyaç Analizi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  İşletmenizin ihtiyaçlarını analiz ediyor, hedef kitlenizi
                  belirliyoruz. Size en uygun çözümü öneriyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tasarım ve Onay
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Markanıza uygun tasarım oluşturuyor, onayınızı alıyoruz.
                  İstediğiniz değişiklikleri yapıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Geliştirme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern teknolojilerle web sitenizi geliştiriyor, SEO
                  optimizasyonu ve testleri yapıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Yayın ve Destek
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Web sitenizi yayına alıyoruz. 1 yıl ücretsiz hosting ve teknik
                  destek sağlıyoruz.
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
                      2015 yılından bu yana 10 yıllık deneyim ve 200+ KOBİ
                      başarılı proje
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Uzmanlık</h3>
                    <p className="text-red-100">
                      KOBİ Web Tasarım, SEO Optimizasyonu, Mobil Uyumlu Tasarım,
                      Dijital Pazarlama alanlarında uzman ekibimiz
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Güvenilirlik</h3>
                    <p className="text-red-100">
                      %98 müşteri memnuniyeti, 1 yıl ücretsiz destek ve esnek
                      ödeme seçenekleri
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
        <RelatedServices currentSlug="kobi-web-tasarim" />

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              İşletmenizi Dijital Dünyada Büyütün
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel KOBİ web tasarım hizmetimiz ile dijital dönüşümünüzü
              başlatın. İşletmenize özel çözümler için hemen teklif alın.
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

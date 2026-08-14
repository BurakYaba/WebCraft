import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import { CheckCircle, ArrowRight } from "lucide-react";

const Footer = lazy(() => import("@/components/Footer"));
const ServiceFAQSection = lazy(() => import("@/components/ServiceFAQSection"));
const SocialProofStrip = lazy(() => import("@/components/SocialProofStrip"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Fiyatlandırma | Web Tasarım, SEO ve E-Ticaret Fiyatları",
  description:
    "Web tasarım fiyatları, SEO hizmeti fiyatları, e-ticaret ve mobil uygulama paket fiyatlarımızı şeffaf şekilde inceleyin. Gizli maliyet yok. Ücretsiz teklif alın!",
  keywords:
    "web sitesi fiyatları, web tasarım fiyatları, kurumsal web sitesi fiyatları, profesyonel web sitesi fiyatları, seo hizmetleri fiyatları, e-ticaret sitesi fiyatı, mobil uygulama fiyatları",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/fiyatlandirma" },
  openGraph: {
    title: "Fiyatlandırma | Web Tasarım, SEO ve E-Ticaret Fiyatları | WebCraft",
    description:
      "Web tasarım, SEO, e-ticaret ve mobil uygulama paket fiyatlarımızı şeffaf şekilde inceleyin.",
    url: "https://www.webcraft.tr/fiyatlandirma",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "website",
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

const webPackages = [
  {
    name: "Temel",
    price: "15.000 - 25.000 TL",
    description: "Kurumsal tanıtım siteleri için",
    features: [
      "5-8 sayfa özel tasarım",
      "Responsive (mobil uyumlu) tasarım",
      "Temel SEO kurulumu",
      "İletişim formu",
      "1 yıl ücretsiz hosting",
    ],
    href: "/hizmetler/web-tasarim",
  },
  {
    name: "Profesyonel",
    price: "25.000 - 50.000 TL",
    description: "Büyüyen işletmeler ve e-ticaret için",
    features: [
      "10-15 sayfa özel tasarım",
      "E-ticaret / CMS entegrasyonu",
      "Gelişmiş SEO kurulumu",
      "Blog sistemi",
      "API entegrasyonları",
      "2 yıl ücretsiz hosting",
    ],
    href: "/hizmetler/e-ticaret",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "50.000 TL+",
    description: "Kurumsal ve özel yazılım ihtiyaçları için",
    features: [
      "Sınırsız sayfa / özel yazılım",
      "Özel API ve sistem entegrasyonları",
      "Mobil uygulama desteği",
      "KVKK uyumlu kurumsal altyapı",
      "Öncelikli destek",
    ],
    href: "/kurumsal-web-tasarim",
  },
];

const otherPricing = [
  {
    title: "SEO Hizmeti",
    price: "5.000 - 15.000 TL/ay",
    description:
      "Teknik SEO, anahtar kelime stratejisi, içerik ve backlink çalışması. Kapsam ve rekabet düzeyine göre kişiselleştirilir.",
    href: "/hizmetler/seo-hizmeti",
  },
  {
    title: "Sosyal Medya Yönetimi",
    price: "3.000 - 10.000 TL/ay",
    description: "İçerik üretimi, yayınlama takvimi ve aylık raporlama.",
    href: "/hizmetler/dijital-pazarlama",
  },
  {
    title: "Google Ads Yönetimi",
    price: "Reklam bütçesinin %15-20'si",
    description: "Kampanya kurulumu, optimizasyon ve performans raporlama.",
    href: "/hizmetler/dijital-pazarlama",
  },
  {
    title: "Mobil Uygulama",
    price: "40.000 TL'den başlayan fiyatlarla",
    description:
      "Basit uygulamalar 40-80.000 TL, çift platform 80-150.000 TL, kapsamlı backend/API gerektiren projeler 150.000 TL üzeri.",
    href: "/hizmetler/mobil-uygulama",
  },
];

const pricingFAQs = [
  {
    question: "Web sitesi fiyatları neye göre belirlenir?",
    answer:
      "Sayfa sayısı, özel tasarım ihtiyacı, fonksiyonlar (e-ticaret, rezervasyon, üyelik sistemi), içerik yönetimi, API entegrasyonları ve SEO çalışması kapsamı fiyatı belirleyen ana etkenlerdir. Yukarıdaki paket aralıkları başlangıç noktasıdır; net teklif için projenizi birlikte değerlendiriyoruz.",
  },
  {
    question: "Fiyata neler dahil, gizli maliyet var mı?",
    answer:
      "Teklifimizde belirtilen kapsam dışında hiçbir gizli ücret yoktur. Tasarım, geliştirme, temel SEO kurulumu ve belirtilen süre boyunca ücretsiz hosting paket fiyatına dahildir. Ek talepler (ör. ek entegrasyon, ek dil desteği) proje öncesinde ayrıca fiyatlandırılır.",
  },
  {
    question: "SEO hizmeti aylık mı, tek seferlik mi ücretlendiriliyor?",
    answer:
      "SEO, sonuç almak için sürekli bir çalışma gerektirdiğinden aylık paket olarak sunulur. Tek seferlik teknik SEO denetimi de talep üzerine ayrı bir hizmet olarak sunulabilir.",
  },
  {
    question: "Ödeme planı nasıl işliyor?",
    answer:
      "Web tasarım projelerinde genellikle proje başında %50, teslimde %50 şeklinde iki taksitli ödeme planı uyguluyoruz. Büyük kapsamlı projelerde proje aşamalarına bağlı özel ödeme planları oluşturabiliyoruz.",
  },
  {
    question: "En uygun paketi nasıl seçerim?",
    answer:
      "Emin değilseniz endişelenmeyin — ücretsiz analiz görüşmesinde ihtiyaçlarınızı, bütçenizi ve hedeflerinizi birlikte değerlendirip size en uygun paketi öneriyoruz. Hiçbir taahhüt gerektirmez.",
  },
];

const pricingFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage" as const,
  mainEntity: pricingFAQs.map((faq) => ({
    "@type": "Question" as const,
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: faq.answer,
    },
  })),
};

export default function FiyatlandirmaPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Fiyatlandırma", url: "/fiyatlandirma" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
              Fiyatlandırma
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Şeffaf Fiyatlandırma,
              <br />
              <span className="text-red-600">Gizli Maliyet Yok</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Web tasarım, SEO, e-ticaret ve mobil uygulama hizmetlerimizin
              paket fiyat aralıklarını aşağıda bulabilirsiniz. Her proje
              farklıdır — net teklif için ücretsiz analiz talep edin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Web Design Packages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Web Tasarım Paketleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kurumsal tanıtım sitesinden özel yazılım gerektiren büyük
                projelere kadar bütçenize uygun paket
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`p-8 rounded-2xl border-2 flex flex-col ${
                    pkg.highlighted
                      ? "border-red-600 bg-red-50 shadow-xl scale-105"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="self-start mb-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      EN ÇOK TERCİH EDİLEN
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-red-600 mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pkg.href}
                    className="text-center bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-6 rounded-full transition-all duration-300"
                  >
                    Detaylı Bilgi
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services pricing */}
        <section className="py-16 bg-[#181716]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Diğer Hizmet Fiyatları
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                SEO, sosyal medya, dijital reklam ve mobil uygulama
                hizmetlerimiz için başlangıç fiyat aralıkları
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPricing.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="p-6 bg-[#1a1918] rounded-lg border border-gray-800 hover:border-red-600 transition-colors duration-300 block"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="text-2xl font-bold text-red-600 mb-3">
                    {item.price}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-10">
              Fiyat aralıkları 2026 yılı standart paketlerimizi yansıtır ve
              proje kapsamına göre değişebilir. Kesin fiyat için ücretsiz
              analiz talep edin.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <ServiceFAQSection faqs={pricingFAQs} schema={pricingFAQSchema} />
        </Suspense>

        {/* Social proof */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <SocialProofStrip />
        </Suspense>

        {/* CTA */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Projenize Özel Net Fiyat Alın
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              24 saat içinde detaylı ve şeffaf teklif hazırlıyoruz. Hiçbir
              taahhüt gerektirmez.
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

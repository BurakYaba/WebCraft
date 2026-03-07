import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Link from "next/link";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Web Tasarım Karşılaştırmaları | Ajans vs Freelancer, Platform Analizi | WebCraft",
  description:
    "Web tasarım kararınızı kolaylaştıran detaylı karşılaştırmalar. Freelancer vs ajans, DIY yapıcılar vs profesyonel tasarım, WordPress vs Shopify vs özel kodlama. Uzman analizleri.",
  keywords:
    "web tasarım karşılaştırma, ajans vs freelancer, wix vs wordpress, shopify vs özel, diy web sitesi, profesyonel web tasarım farkı, web sitesi platformları karşılaştırma",
  authors: [{ name: "WebCraft Uzman Ekibi" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/karsilastirma",
  },
  openGraph: {
    title: "Web Tasarım Karşılaştırmaları | WebCraft",
    description:
      "Web tasarım kararınızı kolaylaştıran detaylı karşılaştırmalar: Freelancer vs Ajans, DIY vs Profesyonel, Platform analizleri.",
    url: "https://www.webcraft.tr/karsilastirma",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "website",
  },
};

const comparisons = [
  {
    title: "Freelancer vs Profesyonel Ajans",
    description:
      "Web tasarım projeniz için freelance tasarımcı mı yoksa profesyonel ajans mı? Güvenilirlik, uzmanlık, proje yönetimi, maliyet ve süreklilik açısından detaylı karşılaştırma.",
    href: "/karsilastirma/freelancer-vs-ajans",
    icon: "👥",
    tags: ["Güvenilirlik", "Maliyet", "Destek"],
    gradient: "from-blue-50 to-green-50",
    borderColor: "border-blue-500",
  },
  {
    title: "WebCraft vs DIY Web Sitesi Yapıcıları",
    description:
      "Profesyonel web tasarım ajansı mı yoksa Wix, Squarespace gibi kendin-yap araçlar mı? 5 yıllık maliyet analizi, SEO karşılaştırması ve performans değerlendirmesi.",
    href: "/karsilastirma/webcraft-vs-diy",
    icon: "⚡",
    tags: ["Performans", "SEO", "Sahiplik"],
    gradient: "from-red-50 to-purple-50",
    borderColor: "border-red-500",
  },
  {
    title: "Web Tasarım Platformları Karşılaştırması",
    description:
      "WordPress, Shopify, Wix, Squarespace ve özel kodlama (Next.js). 8 kritik kriterde 5 platformun kapsamlı değerlendirmesi, detaylı maliyet analizi ve uzman tavsiyeleri.",
    href: "/karsilastirma/platformlar",
    icon: "📊",
    tags: ["WordPress", "Shopify", "Next.js"],
    gradient: "from-gray-50 to-blue-50",
    borderColor: "border-gray-500",
  },
];

export default function KarsilastirmaPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Karşılaştırma", url: "/karsilastirma" },
    ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Tasarım Karşılaştırmaları",
    description:
      "Web tasarım kararınızı kolaylaştıran detaylı karşılaştırmalar ve uzman analizleri.",
    url: "https://www.webcraft.tr/karsilastirma",
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
    },
    hasPart: comparisons.map((c) => ({
      "@type": "Article",
      name: c.title,
      url: `https://www.webcraft.tr${c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-red-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center">
              <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                Uzman Karşılaştırmaları
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Web Tasarım
                <br />
                <span className="text-red-600">Karşılaştırmaları</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                İşletmeniz için doğru web tasarım kararını vermenize yardımcı
                olacak detaylı analizler ve uzman değerlendirmeleri
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="space-y-8">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.href}
                  href={comparison.href}
                  className={`block bg-gradient-to-r ${comparison.gradient} rounded-2xl p-8 md:p-10 border-l-4 ${comparison.borderColor} hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="text-5xl md:text-6xl">
                      {comparison.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        {comparison.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-4">
                        {comparison.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {comparison.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-red-600 group-hover:text-white transition-all">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Comparisons Matter - SEO Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Neden Bu Karşılaştırmalar Önemli?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Web tasarım projesi başlatmadan önce doğru kararları vermek, hem
                bütçenizi hem de zamanınızı korur. Yanlış platform seçimi veya
                yanlış hizmet sağlayıcı tercihi, projenizi başarısızlığa
                sürükleyebilir.
              </p>
              <p>
                <strong>Türkiye&apos;deki web tasarım pazarı</strong> oldukça
                geniş seçenekler sunar: freelance tasarımcılar, butik ajanslar,
                büyük dijital ajanslar, DIY web sitesi yapıcıları ve açık kaynak
                platformlar. Her birinin avantajları ve dezavantajları vardır.
              </p>
              <p>
                WebCraft olarak 10 yıllık sektör deneyimimizle, müşterilerimizin
                en çok sorduğu soruları yanıtlayan bu karşılaştırma sayfalarını
                hazırladık. Amacımız, sizin için en doğru kararı vermenize
                yardımcı olmaktır — bu karar WebCraft olmasa bile.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Decision Guide */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Hızlı Karar Rehberi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  🏢 Kurumsal işletme miyiz?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Marka imajı, güvenilirlik ve sürekli destek önemli.
                </p>
                <Link
                  href="/karsilastirma/freelancer-vs-ajans"
                  className="text-red-600 font-semibold text-sm hover:underline"
                >
                  Freelancer vs Ajans karşılaştırmasını inceleyin →
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  💰 Bütçemiz kısıtlı mı?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  DIY araçlar mı yoksa profesyonel çözüm mü daha ekonomik?
                </p>
                <Link
                  href="/karsilastirma/webcraft-vs-diy"
                  className="text-red-600 font-semibold text-sm hover:underline"
                >
                  WebCraft vs DIY karşılaştırmasını inceleyin →
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  ⚙️ Hangi teknolojiyi kullanmalıyız?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  WordPress, Shopify, Wix veya özel kodlama?
                </p>
                <Link
                  href="/karsilastirma/platformlar"
                  className="text-red-600 font-semibold text-sm hover:underline"
                >
                  Platform karşılaştırmasını inceleyin →
                </Link>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  🤔 Hâlâ kararsız mısınız?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Uzman ekibimiz ihtiyacınıza göre ücretsiz yönlendirme yapar.
                </p>
                <Link
                  href="/iletisim"
                  className="text-red-600 font-semibold text-sm hover:underline"
                >
                  Ücretsiz danışmanlık alın →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f84525] text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Doğru Kararı Birlikte Verelim
            </h2>
            <p className="text-xl mb-8 opacity-90">
              10 yıllık deneyimimizle projeniz için en uygun çözümü öneriyoruz.
              Ücretsiz danışmanlık ve maliyet analizi alın.
            </p>
            <Link
              href="/iletisim"
              className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

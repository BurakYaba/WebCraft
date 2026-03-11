import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
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
  title: "Web Analitik Araçları: Google Analytics ve Veri Analizi | WebCraft",
  description:
    "Web analitik araçları rehberi. Google Analytics, Search Console, Hotjar ve veri analizi stratejileri. Dijital performansınızı ölçün.",
  keywords:
    "web analitik, Google Analytics, Search Console, veri analizi, web metrikleri, dijital analiz",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/web-analitik-araclari" },
  openGraph: {
    title: "Web Analitik Araçları: Google Analytics ve Veri Analizi",
    description: "Web analitik araçları ve veri analizi rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-11-22T09:00:00Z",
    authors: ["WebCraft Analitik Uzmanı"],
  },
};

export default function WebAnalitikAraclari() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Web Analitik Araçları: Google Analytics ve Veri Analizi",
      url: "/blog/web-analitik-araclari",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.webcraft.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.webcraft.tr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web Analitik Araçları",
        item: "https://www.webcraft.tr/blog/web-analitik-araclari",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Web Analitik Araçları: Google Analytics ve Veri Analizi",
    description: "Web analitik araçları rehberi.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.webp",
    author: { "@type": "Person", name: "WebCraft Analitik Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-11-22T09:00:00Z",
    dateModified: "2024-11-22T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/web-analitik-araclari",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Web Analitik
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Analitik Araçları: Google Analytics ve Veri Analizi
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>22 Kasım 2024</span>
                <span>•</span>
                <span>16 dk okuma</span>
                <span>•</span>
                <span>WebCraft Analitik Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/dijital-pazarlama.webp"
                  alt="Web Analitik Araçları"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Web analitik araçları, web sitenizin performansını ölçmek,
                  kullanıcı davranışlarını anlamak ve veri odaklı kararlar almak
                  için kritik öneme sahiptir. Google Analytics, Search Console
                  ve diğer analitik araçlar ile dijital pazarlama
                  stratejilerinizi optimize edebilirsiniz.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, web analitik araçlarını, temel metrikleri ve veri
                  analizi stratejilerini detaylı olarak ele alacağız.{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Dijital pazarlama
                  </Link>{" "}
                  hizmeti ile veri odaklı çözümler sunuyoruz.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Web Analitik Nedir?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Web analitik, web sitesi ziyaretçilerinin davranışlarını
                  ölçme, analiz etme ve raporlama sürecidir. Bu veriler,
                  kullanıcı deneyimini iyileştirmek ve işletme hedeflerine
                  ulaşmak için kullanılır.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Neden Web Analitik Önemli?
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Veri odaklı kararlar</strong> - Tahminler yerine
                      verilerle karar verin
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Kullanıcı davranışını anlama</strong> -
                      Ziyaretçilerin ne yaptığını görün
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>ROI ölçümü</strong> - Pazarlama yatırımınızın
                      getirisini ölçün
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Optimizasyon fırsatları</strong> - İyileştirme
                      alanlarını belirleyin
                    </span>
                  </li>
                </ul>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Temel Web Analitik Araçları
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Google Analytics 4 (GA4)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Google&apos;ın ücretsiz web analitik aracı. Kullanıcı
                  davranışları, trafik kaynakları, dönüşüm oranları ve daha
                  fazlası hakkında detaylı veriler sağlar.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Google Search Console
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SEO performansınızı ölçen ücretsiz araç. Arama sorguları,
                  tıklama oranları, indeksleme durumu ve teknik sorunları görün.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. Hotjar
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kullanıcı davranışlarını görselleştiren araç. Heatmap, kayıt
                  ve anketler ile kullanıcı deneyimini anlayın.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. SEMrush / Ahrefs
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SEO ve rekabet analizi araçları. Anahtar kelime araştırması,
                  backlink analizi ve rakip analizi yapın.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Temel Web Metrikleri
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Trafik Metrikleri
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">
                    • <strong>Ziyaretçi sayısı:</strong> Toplam ve benzersiz
                    ziyaretçiler
                  </li>
                  <li className="text-gray-700">
                    • <strong>Sayfa görüntüleme:</strong> Toplam sayfa
                    görüntülenme sayısı
                  </li>
                  <li className="text-gray-700">
                    • <strong>Oturum süresi:</strong> Ortalama oturum süresi
                  </li>
                  <li className="text-gray-700">
                    • <strong>Hemen çıkma oranı:</strong> Tek sayfa ziyaretleri
                  </li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Dönüşüm Metrikleri
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">
                    • <strong>Dönüşüm oranı:</strong> Hedeflenen aksiyonların
                    tamamlanma oranı
                  </li>
                  <li className="text-gray-700">
                    • <strong>Ortalama sipariş değeri:</strong> E-ticaret için
                    önemli
                  </li>
                  <li className="text-gray-700">
                    • <strong>ROI:</strong> Yatırım getirisi
                  </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 Analitik İpucu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    Verileri toplamak yeterli değildir. Verileri analiz edin,
                    içgörüler çıkarın ve aksiyonlar alın. Düzenli raporlama ve
                    optimizasyon yapın.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Web analitik araçları ile performansınızı ölçün ve
                  iyileştirin.{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Dijital pazarlama
                  </Link>{" "}
                  hizmeti için WebCraft ile iletişime geçin!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="web-analitik-araclari"
            posts={[]}
            limit={3}
          />
        </main>
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

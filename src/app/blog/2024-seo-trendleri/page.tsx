import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Link from "next/link";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

const Footer = lazy(() => import("@/components/Footer"));
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "2024 SEO Trendleri ve Arama Motoru Optimizasyonu | WebCraft",
  description:
    "2024 yılının en güncel SEO trendleri. Google algoritma güncellemeleri, Core Web Vitals, AI içerik ve modern SEO stratejileri.",
  keywords:
    "2024 SEO trendleri, SEO stratejileri, Google algoritması, arama motoru optimizasyonu, SEO güncellemeleri",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/2024-seo-trendleri" },
  openGraph: {
    title: "2024 SEO Trendleri ve Arama Motoru Optimizasyonu",
    description: "2024 yılının en güncel SEO trendleri ve stratejileri.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-05T09:00:00Z",
    authors: ["WebCraft SEO Uzmanı"],
  },
};

export default function SeoTrendleri2024() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: "2024 SEO Trendleri", url: "/blog/2024-seo-trendleri" },
    ]);
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "2024 SEO Trendleri ve Arama Motoru Optimizasyonu",
    description: "2024 yılının en güncel SEO trendleri ve stratejileri.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.jpg",
    author: { "@type": "Person", name: "WebCraft SEO Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-12-05T09:00:00Z",
    dateModified: "2024-12-05T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/2024-seo-trendleri",
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
                  SEO Trendleri
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                2024 SEO Trendleri ve Arama Motoru Optimizasyonu
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>5 Aralık 2024</span>
                <span>•</span>
                <span>16 dk okuma</span>
                <span>•</span>
                <span>WebCraft SEO Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/dijital-pazarlama.jpg"
                  alt="2024 SEO Trendleri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  2024 yılı, arama motoru optimizasyonu için yeni fırsatlar ve
                  zorluklar getiriyor. Google algoritma güncellemeleri, yapay
                  zeka entegrasyonu ve kullanıcı deneyimi odaklı yaklaşımlar,
                  modern SEO stratejilerinin temelini oluşturuyor.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, 2024 yılının en önemli SEO trendlerini, Google
                  güncellemelerini ve başarılı SEO stratejilerini ele alacağız.{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    SEO hizmeti
                  </Link>{" "}
                  ile güncel trendleri takip edin.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  2024 Yılının En Önemli SEO Trendleri
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. AI ve Makine Öğrenmesi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Google&apos;ın AI tabanlı algoritmaları, içerik kalitesini ve
                  kullanıcı niyetini daha iyi anlamaya başladı. BERT ve MUM
                  güncellemeleri ile doğal dil işleme önem kazandı.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Core Web Vitals
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sayfa hızı, etkileşim ve görsel kararlılık metriклeri,
                  sıralama faktörü olarak kritik öneme sahip. LCP, FID ve CLS
                  değerlerini optimize etmek zorunlu.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. E-E-A-T (Experience, Expertise, Authoritativeness,
                  Trustworthiness)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Google, içerik kalitesini değerlendirirken deneyim, uzmanlık,
                  otorite ve güvenilirliği değerlendiriyor. Yazar kredibilitesi
                  ve içerik otoritesi önemli.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. Sesli Arama Optimizasyonu
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Akıllı hoparlörler ve sesli asistanlar yaygınlaştıkça, konuşma
                  diline yakın anahtar kelimeler ve uzun kuyruklu sorgular önem
                  kazanıyor.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  5. Video SEO
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Video içeriklerin popülaritesi artıyor. YouTube SEO, video
                  schema markup ve video sitemaps kritik.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 2024 SEO İpucu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    Kaliteli, kullanıcı odaklı içerik oluşturun. Google artık
                    içerik kalitesini daha iyi değerlendiriyor ve düşük kaliteli
                    içerikleri cezalandırıyor.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  2024 SEO trendlerini takip ederek Google&apos;da üst sıralarda
                  yer alın.{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    SEO hizmeti
                  </Link>{" "}
                  için WebCraft ile iletişime geçin!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="2024-seo-trendleri"
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

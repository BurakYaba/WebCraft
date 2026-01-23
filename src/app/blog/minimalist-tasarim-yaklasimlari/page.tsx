import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
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
  title: "Minimalist Tasarım Yaklaşımları ve Modern Web Tasarımı | WebCraft",
  description:
    "Minimalist web tasarım yaklaşımları. Az çoktur felsefesi, beyaz alan kullanımı ve kullanıcı odaklı minimalist tasarım stratejileri.",
  keywords:
    "minimalist tasarım, modern web tasarımı, minimalist web sitesi, beyaz alan, kullanıcı odaklı tasarım",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/minimalist-tasarim-yaklasimlari" },
  openGraph: {
    title: "Minimalist Tasarım Yaklaşımları ve Modern Web Tasarımı",
    description: "Minimalist web tasarım rehberi ve uygulamaları.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-03T09:00:00Z",
    authors: ["WebCraft Web Tasarım Uzmanı"],
  },
};

export default function MinimalistTasarim() {
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
        name: "Minimalist Tasarım",
        item: "https://www.webcraft.tr/blog/minimalist-tasarim-yaklasimlari",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Minimalist Tasarım Yaklaşımları ve Modern Web Tasarımı",
    description: "Minimalist web tasarım rehberi.",
    image: "https://www.webcraft.tr/bento/web-tasarım.jpg",
    author: { "@type": "Person", name: "WebCraft Web Tasarım Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-12-03T09:00:00Z",
    dateModified: "2024-12-03T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/minimalist-tasarim-yaklasimlari",
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
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Web Tasarım
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Minimalist Tasarım Yaklaşımları ve Modern Web Tasarımı
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>3 Aralık 2024</span>
                <span>•</span>
                <span>14 dk okuma</span>
                <span>•</span>
                <span>WebCraft Web Tasarım Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/web-tasarım.jpg"
                  alt="Minimalist Tasarım"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Minimalist tasarım yaklaşımı, &quot;az çoktur&quot;
                  felsefesine dayanır. Gereksiz öğeleri kaldırarak, önemli
                  içeriği öne çıkaran ve kullanıcı deneyimini önceliklendiren bu
                  yaklaşım, modern web tasarımının temel taşlarından biridir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, minimalist tasarım prensiplerini, uygulamalarını ve
                  başarılı minimalist web siteleri oluşturma yöntemlerini
                  detaylı olarak ele alacağız.{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Web tasarım
                  </Link>{" "}
                  hizmeti ile minimalist ve etkili çözümler sunuyoruz.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Minimalist Tasarım Nedir?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Minimalist tasarım, sadece gerekli öğeleri kullanarak sade,
                  temiz ve işlevsel tasarımlar oluşturmayı amaçlar. Bu yaklaşım,
                  karmaşıklığı azaltarak kullanıcı deneyimini iyileştirir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Minimalist Tasarımın Avantajları
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Hızlı yükleme süreleri</strong> - Az öğe, daha
                      hızlı sayfa yükleme demektir
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Gelişmiş kullanıcı deneyimi</strong> - Temiz
                      tasarım, kullanıcıların odaklanmasını kolaylaştırır
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Mobil uyumluluk</strong> - Basit tasarımlar mobil
                      cihazlarda daha iyi çalışır
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Uzun ömürlü tasarım</strong> - Minimalist
                      tasarımlar zamanla daha az eskir
                    </span>
                  </li>
                </ul>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Minimalist Tasarım Prensipleri
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Beyaz Alan (White Space)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyaz alan, tasarımdaki boş alanları ifade eder. Bu alanlar,
                  içeriğin nefes almasını ve önemli öğelerin öne çıkmasını
                  sağlar.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Sınırlı Renk Paleti
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Minimalist tasarımlar genellikle 2-3 ana renk kullanır. Bu,
                  görsel tutarlılık ve profesyonel görünüm sağlar.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. Basit Tipografi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Okunabilir, sade ve modern fontlar kullanın. Çok fazla font
                  çeşidi karmaşaya neden olur.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. Fonksiyonel Öğeler
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Her tasarım öğesi bir amaca hizmet etmelidir. Dekoratif
                  öğeleri minimumda tutun.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 Tasarım İpucu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    Minimalist tasarım, basit demek değildir. Her öğe dikkatle
                    seçilmeli ve stratejik olarak yerleştirilmelidir.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Minimalist tasarım ile modern ve etkili web siteleri
                  oluşturun.{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Web tasarım
                  </Link>{" "}
                  hizmeti için WebCraft ile iletişime geçin!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="minimalist-tasarim-yaklasimlari"
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

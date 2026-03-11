import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Link from "next/link";
import Image from "next/image";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler | WebCraft",
  description:
    "Web tasarım fiyatları hakkında detaylı bilgi. Uygun maliyetli web tasarım paketleri ve bütçenize uygun çözümler. Ücretsiz teklif alın!",
  keywords:
    "web tasarım fiyatları, web sitesi fiyatları, web tasarım maliyeti, uygun web tasarım, web tasarım paketleri",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/web-tasarim-fiyatlari" },
  openGraph: {
    title: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler",
    description: "Web tasarım fiyatları ve bütçenize uygun çözümler.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-08T09:00:00Z",
    authors: ["WebCraft Web Tasarım Uzmanı"],
  },
};

export default function WebTasarimFiyatlari() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler",
      url: "/blog/web-tasarim-fiyatlari",
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
        name: "Web Tasarım Fiyatları",
        item: "https://www.webcraft.tr/blog/web-tasarim-fiyatlari",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler",
    description: "Web tasarım fiyatları rehberi ve paket seçenekleri.",
    image: "https://www.webcraft.tr/bento/web-tasarım.webp",
    author: { "@type": "Person", name: "WebCraft Web Tasarım Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-12-08T09:00:00Z",
    dateModified: "2024-12-08T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/web-tasarim-fiyatlari",
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
                  Web Tasarım Fiyatları
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>8 Aralık 2024</span>
                <span>•</span>
                <span>15 dk okuma</span>
                <span>•</span>
                <span>WebCraft Web Tasarım Uzmanı</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/web-tasarım.webp"
                  alt="Web Tasarım Fiyatları"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Günümüzde dijital dünyada başarılı olmak, profesyonel bir web
                  sitesine sahip olmayı gerektirir. Web tasarım fiyatları,
                  işletmenizin dijital varlığını oluştururken en önemli
                  faktörlerden biridir. Doğru web tasarım ajansı seçimi ve uygun
                  maliyetli çözümler ile bütçenize uygun profesyonel web sitesi
                  oluşturabilirsiniz.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, web tasarım fiyatlarını etkileyen faktörleri,
                  farklı paket seçeneklerini ve bütçenize en uygun çözümü nasıl
                  bulabileceğinizi detaylı olarak ele alacağız.{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Web tasarım
                  </Link>{" "}
                  hizmeti ile bütçenize uygun çözümler sunuyoruz.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Web Tasarım Fiyatlarını Etkileyen Faktörler
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Web tasarım fiyatları, projenin kapsamına, gereksinimlerine ve
                  kalitesine göre değişiklik gösterir. Bu fiyatları etkileyen
                  ana faktörleri anlamak, doğru karar vermenize yardımcı olur.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Tasarım Karmaşıklığı
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Özel tasarım, sayfa sayısı, özel fonksiyonlar, responsive
                  tasarım ve animasyonlar fiyatı etkiler.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Teknik Gereksinimler
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  E-ticaret entegrasyonu, özel yazılım geliştirme, veritabanı,
                  API entegrasyonları ve güvenlik özellikleri ek maliyetler
                  getirir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. İçerik ve SEO
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CMS entegrasyonu, içerik oluşturma, SEO optimizasyonu, çoklu
                  dil desteği ve blog sistemi fiyatı etkiler.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Web Tasarım Paketleri
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Başlangıç Paketi
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">• 5-8 sayfa tasarımı</li>
                  <li className="text-gray-700">• Responsive tasarım</li>
                  <li className="text-gray-700">• Temel SEO</li>
                  <li className="text-gray-700">• İletişim formu</li>
                  <li className="text-gray-700">• 1 yıl ücretsiz hosting</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Kurumsal Paket
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">• 10-15 sayfa tasarımı</li>
                  <li className="text-gray-700">• Özel tasarım</li>
                  <li className="text-gray-700">• Gelişmiş SEO</li>
                  <li className="text-gray-700">• Blog sistemi</li>
                  <li className="text-gray-700">• Çoklu dil desteği</li>
                  <li className="text-gray-700">• 2 yıl ücretsiz hosting</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  E-Ticaret Paketi
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">• Sınırsız ürün ekleme</li>
                  <li className="text-gray-700">• Güvenli ödeme sistemleri</li>
                  <li className="text-gray-700">• Stok yönetimi</li>
                  <li className="text-gray-700">• Kargo entegrasyonu</li>
                  <li className="text-gray-700">• Mobil uygulama desteği</li>
                </ul>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-green-900 font-bold text-xl mb-3">
                    🚀 Özel Teklif
                  </h4>
                  <p className="text-green-800 text-lg leading-relaxed">
                    İlk müşterilerimize %20 indirim! Hemen ücretsiz teklif alın
                    ve bütçenize uygun web tasarım paketini keşfedin.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Web tasarım fiyatları, projenizin kapsamına göre değişir.
                  Bütçenize uygun{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    web tasarım
                  </Link>{" "}
                  çözümleri için WebCraft ile iletişime geçin!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="web-tasarim-fiyatlari"
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

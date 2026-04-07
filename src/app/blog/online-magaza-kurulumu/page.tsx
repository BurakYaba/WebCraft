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
  title: "Online Mağaza Kurulumu ve E-Ticaret Web Sitesi | WebCraft",
  description:
    "Online mağaza kurulumu rehberi. E-ticaret web sitesi nasıl yapılır? Ürün yönetimi, ödeme sistemleri ve satış stratejileri.",
  keywords:
    "online mağaza kurulumu, e-ticaret web sitesi, online satış, e-ticaret kurulumu, dijital mağaza",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/online-magaza-kurulumu" },
  openGraph: {
    title: "Online Mağaza Kurulumu ve E-Ticaret Web Sitesi",
    description: "E-ticaret web sitesi kurulumu rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-01T09:00:00Z",
    authors: ["WebCraft E-Ticaret Uzmanı"],
  },
};

export default function OnlineMagazaKurulumu() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Online Mağaza Kurulumu ve E-Ticaret Web Sitesi",
      url: "/blog/online-magaza-kurulumu",
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
        name: "Online Mağaza Kurulumu",
        item: "https://www.webcraft.tr/blog/online-magaza-kurulumu",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Online Mağaza Kurulumu ve E-Ticaret Web Sitesi",
    description: "E-ticaret web sitesi kurulumu rehberi.",
    image: "https://www.webcraft.tr/bento/web-tasarım.webp",
    author: { "@type": "Person", name: "WebCraft E-Ticaret Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-12-01T09:00:00Z",
    dateModified: "2024-12-01T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/online-magaza-kurulumu",
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
                  E-Ticaret
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Online Mağaza Kurulumu ve E-Ticaret Web Sitesi
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>1 Aralık 2024</span>
                <span>•</span>
                <span>17 dk okuma</span>
                <span>•</span>
                <span>WebCraft E-Ticaret Uzmanı</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/web-tasarım.webp"
                  alt="Online Mağaza Kurulumu"
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
                  Online mağaza kurulumu, dijital dünyada başarılı bir e-ticaret
                  işletmesi oluşturmanın ilk adımıdır. Doğru platform seçimi,
                  kullanıcı dostu tasarım ve güvenli ödeme sistemleri ile
                  başarılı bir online satış kanalı oluşturabilirsiniz.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, online mağaza kurulum sürecini, gerekli özellikleri
                  ve başarılı bir e-ticaret web sitesi oluşturma stratejilerini
                  detaylı olarak ele alacağız.{" "}
                  <Link
                    href="/e-ticaret-web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    E-ticaret web tasarım
                  </Link>{" "}
                  hizmeti ile profesyonel online mağazanızı oluşturun.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Online Mağaza Kurulum Adımları
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Platform Seçimi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  E-ticaret platformu seçimi kritik bir karardır. Shopify,
                  WooCommerce, Magento gibi platformlar farklı ihtiyaçlara hitap
                  eder. Bütçenize, teknik bilginize ve iş modelinize uygun
                  platformu seçin.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Domain ve Hosting
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Markanızı yansıtan bir domain adı seçin ve güvenilir hosting
                  hizmeti alın. E-ticaret siteleri için yüksek performans ve
                  güvenlik önemlidir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. Tasarım ve Kullanıcı Deneyimi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kullanıcı dostu, mobil uyumlu ve çekici bir tasarım oluşturun.
                  Kolay navigasyon, hızlı ödeme süreci ve güvenilir görünüm
                  kritik faktörlerdir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. Ödeme Sistemleri
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Güvenli ödeme sistemleri entegre edin. İyzico, PayTR gibi
                  Türkiye&apos;de yaygın kullanılan ödeme sistemlerini ekleyin.
                  Kredi kartı, banka kartı ve havale seçenekleri sunun.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  5. Ürün Yönetimi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ürünlerinizi kategorize edin, kaliteli ürün fotoğrafları ve
                  detaylı açıklamalar ekleyin. Stok yönetimi sistemi kurun.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  6. Kargo ve Lojistik
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kargo firmaları ile entegrasyon yapın. Aras Kargo, MNG,
                  Yurtiçi gibi firmalarla çalışarak hızlı ve güvenli teslimat
                  sağlayın.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-green-900 font-bold text-xl mb-3">
                    🚀 E-Ticaret İpucu
                  </h4>
                  <p className="text-green-800 text-lg leading-relaxed">
                    İlk 100 satışınız için özel kampanyalar düzenleyin. Müşteri
                    memnuniyeti ve olumlu yorumlar, online mağazanızın başarısı
                    için kritik öneme sahiptir.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Profesyonel online mağaza kurulumu ile e-ticaret başarısına
                  ulaşın.{" "}
                  <Link
                    href="/e-ticaret-web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    E-ticaret web tasarım hizmeti
                  </Link>{" "}
                  ile profesyonel online mağazanızı kurun!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="online-magaza-kurulumu"
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

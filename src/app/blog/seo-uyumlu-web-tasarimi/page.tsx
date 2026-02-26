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
  title:
    "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın | WebCraft",
  description:
    "SEO uyumlu web tasarımı ile Google'da üst sıralarda yer alın. Profesyonel web tasarım ajansı ile organik trafiğinızı artırın ve dijital pazarlama başarınızı katlayın.",
  keywords:
    "SEO uyumlu web tasarımı, web tasarım SEO, arama motoru optimizasyonu, Google sıralaması, organik trafik, SEO hizmeti",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/seo-uyumlu-web-tasarimi",
  },
  openGraph: {
    title: "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın",
    description:
      "SEO uyumlu web tasarımı rehberi. Organik trafiğinizi artırın ve Google'da üst sıralarda yer alın.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-15T09:00:00Z",
    authors: ["WebCraft Web Tasarım Uzmanı"],
  },
};

export default function SeoUyumluWebTasarimi() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın",
      url: "/blog/seo-uyumlu-web-tasarimi",
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
        name: "SEO Uyumlu Web Tasarımı",
        item: "https://www.webcraft.tr/blog/seo-uyumlu-web-tasarimi",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın",
    description:
      "SEO uyumlu web tasarımı rehberi. Organik trafiğinizi artırın.",
    image: "https://www.webcraft.tr/bento/web-tasarım.jpg",
    author: {
      "@type": "Person",
      name: "WebCraft Web Tasarım Uzmanı",
    },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-12-15T09:00:00Z",
    dateModified: "2024-12-15T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/seo-uyumlu-web-tasarimi",
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
                  Web Tasarım
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                SEO Uyumlu Web Tasarımı ile Google&apos;da Üst Sıralarda Yer
                Alın
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>15 Aralık 2024</span>
                <span>•</span>
                <span>16 dk okuma</span>
                <span>•</span>
                <span>WebCraft Web Tasarım Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/web-tasarım.jpg"
                  alt="SEO Uyumlu Web Tasarımı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Günümüzde başarılı bir web sitesi sadece güzel görünmekle
                  kalmaz, aynı zamanda arama motorlarında üst sıralarda yer
                  alarak hedef kitlenize ulaşmanızı sağlar. SEO uyumlu web
                  tasarımı, modern dijital pazarlama stratejilerinin temel
                  taşlarından biridir ve işletmenizin online başarısını doğrudan
                  etkiler.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, SEO uyumlu web tasarımının neden önemli olduğunu,
                  nasıl uygulanacağını ve işletmenize nasıl değer katacağını
                  detaylı olarak ele alacağız.{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    SEO hizmeti
                  </Link>{" "}
                  ile entegre çözümler sunarak markanızı dijital dünyada öne
                  çıkarıyoruz.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  SEO Uyumlu Web Tasarımı Nedir?
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SEO uyumlu web tasarımı, web sitenizin hem görsel olarak
                  çekici hem de arama motorları tarafından kolayca bulunabilir
                  ve indexlenebilir olmasını sağlayan tasarım yaklaşımıdır. Bu
                  yaklaşım, kullanıcı deneyimi ve arama motoru optimizasyonunu
                  bir araya getirir.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Neden SEO Uyumlu Web Tasarımı Önemli?
                </h3>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Organik trafiğinizi artırabilirsiniz</strong> -
                      Arama sonuçlarında üst sıralarda yer alarak ücretsiz
                      trafik çekersiniz
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Marka bilinirliğinizi artırırsınız</strong> -
                      Google&apos;da üst sıralarda yer almak markanızı
                      güçlendirir
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Müşteri güvenini kazanırsınız</strong> - Arama
                      sonuçlarında üst sıralarda yer alan siteler daha güvenilir
                      görünür
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Rekabet avantajı elde edersiniz</strong> -
                      Rakiplerinizden öne çıkarsınız
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  SEO Uyumlu Web Tasarımının Temel Unsurları
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Hızlı Sayfa Yükleme Süreleri
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kullanıcılar ve arama motorları hızlı web sitelerini sever.
                  Sayfa yükleme hızı, hem kullanıcı deneyimi hem de SEO
                  performansı için kritik öneme sahiptir.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Mobil Uyumlu Tasarım
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Google artık tüm web sitelerini mobil öncelikli olarak
                  değerlendiriyor. Mobil uyumlu web tasarımı, SEO başarınızın
                  temelini oluşturur. Responsive tasarım, tüm cihazlarda
                  mükemmel görünüm sağlar.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. Kaliteli ve Optimize Edilmiş İçerik
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  İçerik, SEO&apos;nun kralıdır. Hedef kitlenize değer katan,
                  anahtar kelime optimizasyonu yapılmış kaliteli içerikler
                  üretmek, arama motoru sıralamalarınızı doğrudan etkiler.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. Teknik SEO Optimizasyonu
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  URL yapısı, meta etiketler, başlık etiketleri, alt etiketleri
                  gibi teknik SEO unsurları, arama motorlarının sitenizi
                  anlamasına yardımcı olur.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 Uzman İpucu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    SEO, web sitenizin tasarım aşamasından itibaren
                    planlanmalıdır. Sonradan yapılan SEO çalışmaları, baştan
                    planlanan SEO&apos;ya göre daha az etkili olur.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  SEO uyumlu web tasarımı, dijital başarınızın temelidir.
                  Profesyonel{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    SEO hizmeti
                  </Link>{" "}
                  ile Google&apos;da üst sıralarda yer alın. WebCraft ile
                  iletişime geçin!
                </p>
              </div>
            </div>
          </section>

          <RelatedBlogPosts
            currentSlug="seo-uyumlu-web-tasarimi"
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

import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Link from "next/link";
import Image from "next/image";
import BlogTOC from "@/components/BlogTOC";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın | WebCraft",
  description:
    "Profesyonel SEO hizmeti ile Google'da üst sıralarda yer alın. Organik trafiğinizi artırın ve dijital pazarlama başarınızı katlayın. SEO uzmanı ekibimizle tanışın.",
  keywords:
    "profesyonel SEO hizmeti, SEO hizmeti, arama motoru optimizasyonu, Google sıralaması, organik trafik, SEO ajansı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/profesyonel-seo-hizmeti",
  },
  openGraph: {
    title: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın",
    description: "SEO uzmanı ekibimizle Google'da üst sıralarda yer alın.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-10T09:00:00Z",
    authors: ["Kubilay Özışık"],
  },
};

const TOC_ITEMS = [
  { id: "nedir", label: "Profesyonel SEO Nedir?" },
  { id: "neler-kapsar", label: "Neleri Kapsar?" },
  { id: "sonuc", label: "Sonuç" },
];

export default function ProfesyonelSeoHizmeti() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın",
      url: "/blog/profesyonel-seo-hizmeti",
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
        name: "Profesyonel SEO Hizmeti",
        item: "https://www.webcraft.tr/blog/profesyonel-seo-hizmeti",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın",
    description:
      "Profesyonel SEO hizmeti rehberi. Organik trafiğinizi artırın.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.webp",
    author: {
      "@type": "Person",
      name: "Kubilay Özışık",
      url: "https://www.webcraft.tr/hakkimizda",
    },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-12-10T09:00:00Z",
    dateModified: "2024-12-10T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/profesyonel-seo-hizmeti",
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
          <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  SEO Hizmeti
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span className="font-medium text-gray-900">
                  Kubilay Özışık
                </span>
                <span>•</span>
                <span>10 Aralık 2024</span>
                <span>•</span>
                <span>18 dk okuma</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/dijital-pazarlama.webp"
                  alt="Profesyonel SEO Hizmeti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          <article className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="flex gap-16 items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-red-500 pl-6 md:pl-10 py-3 mb-10">
                    Profesyonel SEO hizmeti, web sitenizin Google ve diğer arama
                    motorlarında üst sıralarda yer almasını sağlayan kapsamlı
                    bir dijital pazarlama stratejisidir. Doğru SEO uygulamaları
                    ile organik trafiğinizi artırabilir, marka bilinirliğinizi
                    yükseltebilir ve işletmenizin online başarısını
                    katlayabilirsiniz.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Bu yazıda, profesyonel SEO hizmetinin neden önemli olduğunu,
                    neleri kapsadığını ve işletmenize nasıl değer katacağını
                    detaylı olarak ele alacağız.{" "}
                    <Link
                      href="/hizmetler/dijital-pazarlama"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      SEO hizmeti
                    </Link>{" "}
                    ile Google&apos;da üst sıralarda yer alın.
                  </p>

                  <h2
                    id="nedir"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Profesyonel SEO Hizmeti Nedir?
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Profesyonel SEO hizmeti, web sitenizin arama motorları için
                    optimize edilmesini içeren kapsamlı bir süreçtir. Bu süreç,
                    teknik SEO, içerik optimizasyonu, link building, yerel SEO
                    ve sürekli analiz ve iyileştirmeleri kapsar.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Neden Profesyonel SEO Hizmeti Gerekli?
                  </h3>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Organik trafik artışı</strong> - Ücretsiz ve
                        sürdürülebilir trafik kaynağı
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Marka bilinirliği</strong> - Google&apos;da üst
                        sıralarda yer almak güven oluşturur
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Rekabet avantajı</strong> - Rakiplerinizden öne
                        çıkarsınız
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Yüksek ROI</strong> - Uzun vadede en yüksek
                        yatırım getirisini sağlar
                      </span>
                    </li>
                  </ul>

                  <h2
                    id="neler-kapsar"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Profesyonel SEO Hizmeti Neleri Kapsar?
                  </h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    1. Teknik SEO
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Web sitenizin teknik altyapısının optimize edilmesi. Site
                    hızı, mobil uyumluluk, SSL sertifikası, XML sitemap,
                    robots.txt ve yapısal veri işaretlemeleri gibi teknik
                    unsurların optimize edilmesi.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    2. Anahtar Kelime Araştırması
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Hedef kitlenizin arama yaparken kullandığı anahtar
                    kelimelerin belirlenmesi. Rekabet analizi, arama hacmi
                    araştırması ve long-tail anahtar kelime stratejileri.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    3. İçerik Optimizasyonu
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    SEO uyumlu içerik oluşturma ve mevcut içeriklerin optimize
                    edilmesi. Başlık etiketleri, meta açıklamalar, H1-H6
                    başlıkları ve içerik yapısının optimize edilmesi.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    4. Link Building
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Kaliteli backlink oluşturma stratejileri. Doğal link profili
                    oluşturma, guest posting, dijital PR ve içerik pazarlama ile
                    link kazanma.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    5. Yerel SEO
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Yerel aramalarda görünürlüğünüzü artırma. Google My Business
                    optimizasyonu, yerel anahtar kelimeler ve yerel içerik
                    stratejileri.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                    <h4 className="text-blue-900 font-bold text-xl mb-3">
                      💡 Uzman İpucu
                    </h4>
                    <p className="text-blue-800 text-lg leading-relaxed">
                      SEO, uzun vadeli bir yatırımdır. İlk sonuçlar genellikle
                      3-6 ay içinde görülmeye başlar, ancak sürekli ve tutarlı
                      çalışma ile maksimum başarı elde edilir.
                    </p>
                  </div>

                  <h2
                    id="sonuc"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Sonuç
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Profesyonel SEO hizmeti ile organik trafiğinizi artırın ve
                    Google&apos;da üst sıralarda yer alın.{" "}
                    <Link
                      href="/hizmetler/dijital-pazarlama"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      SEO hizmeti
                    </Link>{" "}
                    için WebCraft ile iletişime geçin!
                  </p>
                  {/* Author Bio */}
                  <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-4">
                    <div className="flex items-center gap-4 md:gap-5 mb-4">
                      <div className="bg-red-600 text-white font-bold text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                        KÖ
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">
                          Kubilay Özışık
                        </p>
                        <p className="text-red-600 text-sm font-medium mt-1">
                          WebCraft — SEO &amp; Dijital Büyüme Uzmanı
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      6 yılı aşkın süre boyunca Türkiye genelinde işletmelerin
                      organik arama görünürlüğünü büyüttüm. Teknik SEO, içerik
                      stratejisi ve anahtar kelime araştırması alanlarında
                      uzmanlaştım.{" "}
                      <Link
                        href="/hakkimizda"
                        className="text-red-600 hover:underline"
                      >
                        Hakkımızda sayfasında
                      </Link>{" "}
                      daha fazla bilgi bulabilirsiniz.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 mb-8">
                    Yayın tarihi: 10 Aralık 2024 • Bu yazı yazar tarafından
                    birinci elden deneyim ve araştırma temelinde hazırlanmıştır.
                  </div>
                </div>
                {/* end content column */}
                <BlogTOC items={TOC_ITEMS} />
              </div>
              {/* end flex */}
            </div>
            {/* end max-w-6xl */}
          </article>
          <RelatedBlogPosts
            currentSlug="profesyonel-seo-hizmeti"
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

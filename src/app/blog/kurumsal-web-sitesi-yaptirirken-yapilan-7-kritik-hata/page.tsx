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
  title: "Kurumsal Web Sitesi Yaptırırken Yapılan 7 Kritik Hata | WebCraft",
  description:
    "Kurumsal web sitesi yaptırırken yapılan en yaygın 7 kritik hatayı öğrenin. Profesyonel web tasarım ajansı deneyimiyle bu hatalardan kaçınarak başarılı bir kurumsal web sitesi oluşturun.",
  keywords:
    "kurumsal web sitesi, web tasarım hataları, profesyonel web tasarım, web tasarım ajansı, kurumsal web tasarımı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata",
  },
  openGraph: {
    title: "Kurumsal Web Sitesi Yaptırırken Yapılan 7 Kritik Hata",
    description:
      "Kurumsal web sitesi yaptırırken yapılan kritik hatalardan kaçının. Profesyonel web tasarım ajansı deneyimiyle başarılı proje rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2025-01-20T09:00:00Z",
    authors: ["Burak Yaba"],
  },
};

const TOC_ITEMS = [
  { id: "hata-1", label: "1. Hedef Kitle" },
  { id: "hata-2", label: "2. Mobil Uyumluluk" },
  { id: "hata-3", label: "3. SEO Hatası" },
  { id: "hata-4", label: "4. İçerik Stratejisi" },
  { id: "hata-5", label: "5. Güvenlik ve Performans" },
  { id: "hata-6", label: "6. Kullanıcı Deneyimi" },
  { id: "hata-7", label: "7. Bakım ve Güncelleme" },
  { id: "sonuc", label: "Sonuç" },
];

export default function KurumsalWebSitesiHatalari() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "7 Kritik Hata",
      url: "/blog/kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata",
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
        name: "Kurumsal Web Sitesi Hataları",
        item: "https://www.webcraft.tr/blog/kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Kurumsal Web Sitesi Yaptırırken Yapılan 7 Kritik Hata",
    description:
      "Kurumsal web sitesi yaptırırken yapılan kritik hatalardan kaçının.",
    image: "https://www.webcraft.tr/bento/web-tasarim.webp",
    author: {
      "@type": "Person",
      name: "Burak Yaba",
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
    datePublished: "2025-01-20T09:00:00Z",
    dateModified: "2025-01-20T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.webcraft.tr/blog/kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata",
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
          {/* Hero Section */}
          <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Web Tasarım
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kurumsal Web Sitesi Yaptırırken Yapılan 7 Kritik Hata
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span className="font-medium text-gray-900">Burak Yaba</span>
                <span>•</span>
                <span>20 Ocak 2025</span>
                <span>•</span>
                <span>18 dk okuma</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/web-tasarim.webp"
                  alt="Kurumsal Web Sitesi Hataları"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Content Section */}
          <article className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="flex gap-16 items-start">
                <div className="min-w-0 flex-1">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-red-500 pl-6 md:pl-10 py-3 mb-10">
                    Kurumsal web sitesi, modern işletmelerin dijital dünyadaki
                    vitrinidir. Ancak birçok işletme, web sitesi yaptırırken
                    kritik hatalar yaparak hem zaman hem de para kaybediyor. 8+
                    yıllık web tasarım deneyimimiz boyunca, yüzlerce kurumsal
                    web sitesi projesinde karşılaştığımız en yaygın hataları
                    sizinle paylaşıyoruz.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Bu yazıda, kurumsal web sitesi yaptırırken yapılan 7 kritik
                    hatayı detaylı olarak ele alacağız. Her hatanın neden sorun
                    olduğunu, nasıl önlenebileceğini ve doğru yaklaşımın ne
                    olduğunu açıklayacağız. Bu bilgiler,{" "}
                    <Link
                      href="/kurumsal-web-tasarim"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      kurumsal web sitesi
                    </Link>{" "}
                    projenizde maliyetli hatalardan kaçınmanıza yardımcı olacak.
                  </p>

                  <h2
                    id="hata-1"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    1. Hata: Hedef Kitle ve İş Hedeflerini Netleştirmemek
                  </h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Neden Bu Bir Hata?
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Birçok işletme, kurumsal web sitesi yaptırmaya başlarken
                    &quot;güzel bir web sitesi&quot; istediğini söyler, ancak
                    web sitesinin kime hitap edeceğini, hangi iş hedeflerine
                    hizmet edeceğini netleştirmez. Bu, sonuçta işlevsiz ve
                    etkisiz bir web sitesi ile sonuçlanır.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Yanlış ton ve dil kullanır:</strong> Teknik bir
                        kitleye hitap ederken sade bir dil kullanmak veya tam
                        tersi
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Yanlış içerik önceliklendirmesi yapar:</strong>{" "}
                        Hedef kitlenin ilgilenmediği bilgilere odaklanır
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Dönüşüm fırsatlarını kaçırır:</strong> Hedef
                        kitleyi anlamadığı için doğru çağrılara yer vermez
                      </span>
                    </li>
                  </ul>

                  <h2
                    id="hata-2"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    2. Hata: Mobil Uyumluluğu Göz Ardı Etmek
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Mobil cihazlardan web sitesi ziyaretleri, toplam trafiğin
                    %60&apos;ından fazlasını oluşturuyor. Mobil uyumsuz bir
                    kurumsal web sitesi, potansiyel müşterilerinizin çoğunu
                    kaybetmenize neden olur.
                  </p>

                  <h2
                    id="hata-3"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    3. Hata: SEO&apos;yu Göz Ardı Etmek
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Birçok işletme, web sitesi tasarlandıktan sonra SEO&apos;yu
                    düşünür. Ancak SEO, web sitesi tasarımının başından itibaren
                    planlanmalıdır. Arama motorları için optimize edilmemiş web
                    siteleri, organik trafikten yoksun kalır.
                  </p>

                  <h2
                    id="hata-4"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    4. Hata: İçerik Stratejisini İhmal Etmek
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Güzel tasarım önemlidir, ancak içerik kraldır. Kaliteli,
                    değerli ve düzenli olarak güncellenen içerik olmadan, web
                    siteniz sadece bir dijital broşür olur.
                  </p>

                  <h2
                    id="hata-5"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    5. Hata: Güvenlik ve Performansı Önemsememek
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Yavaş yüklenen veya güvenlik açıkları olan web siteleri, hem
                    kullanıcı deneyimini hem de SEO performansını olumsuz
                    etkiler. SSL sertifikası, düzenli güncellemeler ve hızlı
                    sunucu kritik öneme sahiptir.
                  </p>

                  <h2
                    id="hata-6"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    6. Hata: Kullanıcı Deneyimini Göz Ardı Etmek
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Karmaşık navigasyon, uzun formlar ve anlamsız tasarım
                    öğeleri kullanıcıları sıkar. Kullanıcı dostu, sezgisel ve
                    kolay kullanılabilir bir web sitesi tasarlamak önemlidir.
                  </p>

                  <h2
                    id="hata-7"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    7. Hata: Bakım ve Güncelleme Planı Olmaması
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Web sitesi yayına alındıktan sonra unutulmamalıdır. Düzenli
                    güncellemeler, içerik eklemeleri ve performans
                    iyileştirmeleri, web sitenizin başarılı olması için
                    gereklidir.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                    <h4 className="text-green-900 font-bold text-xl mb-3">
                      🚀 WebCraft&apos;tan Özel Teklif
                    </h4>
                    <p className="text-green-800 text-lg leading-relaxed">
                      Kurumsal web sitesi projeleriniz için %15 indirim fırsatı!
                      Profesyonel web tasarım ajansı ile bu kritik hatalardan
                      kaçınarak başarılı bir kurumsal web sitesi oluşturun.
                      Hemen teklif alın!
                    </p>
                  </div>

                  <h2
                    id="sonuc"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Sonuç
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Kurumsal web sitesi yaptırırken bu 7 kritik hatadan
                    kaçınarak, başarılı ve etkili bir dijital varlık
                    oluşturabilirsiniz. Profesyonel{" "}
                    <Link
                      href="/kurumsal-web-tasarim"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      kurumsal web sitesi
                    </Link>{" "}
                    için WebCraft ile iletişime geçin!
                  </p>
                  {/* Author Bio */}
                  <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-4">
                    <div className="flex items-center gap-4 md:gap-5 mb-4">
                      <div className="bg-red-600 text-white font-bold text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                        BY
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">
                          Burak Yaba
                        </p>
                        <p className="text-red-600 text-sm font-medium mt-1">
                          WebCraft — Kurucu &amp; Web Tasarım Uzmanı
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Web tasarım alanında 8 yılı aşkın deneyimle onlarca
                      işletmenin dijital varlığını WebCraft bünyesinde
                      kurguladım. Teknik mimari, UX ve performans odaklı tasarım
                      benim sorumluluk alanım.{" "}
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
                    Yayın tarihi: 20 Ocak 2025 • Bu yazı yazar tarafından
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
          {/* Related Blog Posts */}
          <RelatedBlogPosts
            currentSlug="kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata"
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

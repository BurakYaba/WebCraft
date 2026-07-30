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
  title: "Yerel SEO Sonuçlarımız: 11 Aylık Veri Analizi (Fethiye & Muğla)",
  description:
    "Kendi web sitemizin Google Search Console verileriyle yerel SEO çalışmasının gerçek sonuçları: hangi kelimede kaçıncı sıradayız, ne kadar sürdü, hangi faktörler işe yaradı.",
  keywords:
    "yerel seo sonuçları, yerel seo vaka analizi, muğla seo, fethiye web tasarım, marmaris seo, google search console analizi",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/yerel-seo-sonuclarimiz-veri-analizi" },
  openGraph: {
    title: "Yerel SEO Sonuçlarımız: 11 Aylık Veri Analizi",
    description:
      "Google Search Console verileriyle doğrulanmış yerel SEO sonuçlarımız — hangi kelimede kaçıncı sıradayız.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2026-07-30T09:00:00Z",
    authors: ["Burak Yaba"],
  },
};

const TOC_ITEMS = [
  { id: "metodoloji", label: "Metodoloji" },
  { id: "sonuclar", label: "Sıralama Sonuçları" },
  { id: "neden", label: "Yerel Neden Daha Hızlı?" },
  { id: "cihaz", label: "Cihaz ve Davranış Verisi" },
  { id: "cikarimlar", label: "İşletmeler İçin Çıkarımlar" },
];

export default function YerelSeoSonuclarimizPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Yerel SEO Sonuçlarımız",
      url: "/blog/yerel-seo-sonuclarimiz-veri-analizi",
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
        name: "Yerel SEO Sonuçlarımız",
        item: "https://www.webcraft.tr/blog/yerel-seo-sonuclarimiz-veri-analizi",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Yerel SEO Sonuçlarımız: 11 Aylık Veri Analizi",
    description:
      "Kendi web sitemizin Google Search Console verileriyle yerel SEO çalışmasının gerçek, doğrulanabilir sonuçları.",
    image: "https://www.webcraft.tr/bento/SEO.webp",
    author: {
      "@type": "Person",
      name: "Burak Yaba",
      url: "https://www.webcraft.tr/hakkimizda",
      jobTitle: "Kurucu & Web Tasarım Uzmanı",
      worksFor: {
        "@type": "Organization",
        name: "WebCraft",
        url: "https://www.webcraft.tr",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2026-07-30T09:00:00Z",
    dateModified: "2026-07-30T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/yerel-seo-sonuclarimiz-veri-analizi",
    },
  };

  // Original data table — sourced from our own Google Search Console export
  const rankingData = [
    { keyword: "muğla seo", position: "4.96", impressions: "99", scope: "Yerel" },
    { keyword: "muğla seo uzmanı", position: "6.19", impressions: "21", scope: "Yerel" },
    { keyword: "web tasarım ajansı nasıl seçilir", position: "9.65", impressions: "105", scope: "Rehber içerik" },
    { keyword: "marmaris web tasarım", position: "18.11", impressions: "63", scope: "Yerel" },
    { keyword: "marmaris seo", position: "19.04", impressions: "78", scope: "Yerel" },
    { keyword: "fethiye web tasarım", position: "15.09", impressions: "197", scope: "Yerel" },
    { keyword: "web tasarım ajansı", position: "30.48", impressions: "1.783", scope: "Ulusal" },
    { keyword: "profesyonel web tasarım", position: "21.76", impressions: "616", scope: "Ulusal" },
  ];

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
                  Vaka Analizi
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Yerel SEO Sonuçlarımız: 11 Aylık Veri Analizi
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span className="font-medium text-gray-900">Burak Yaba</span>
                <span>•</span>
                <span>30 Temmuz 2026</span>
                <span>•</span>
                <span>9 dk okuma</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/SEO.webp"
                  alt="Yerel SEO Sonuçlarımız - Veri Analizi"
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
                    SEO ajanslarının çoğu başkalarının vaka çalışmasını
                    gösterir. Biz bunun yerine kendi web sitemizin Google
                    Search Console verilerini olduğu gibi paylaşıyoruz —
                    başarılarımızı da, zayıf kaldığımız yerleri de. Bu yazı,
                    12 Ağustos 2025 - 27 Temmuz 2026 arası ~11 aylık dönemi
                    kapsıyor.
                  </p>

                  <h2
                    id="metodoloji"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Metodoloji
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Veriler doğrudan webcraft.tr&apos;nin Google Search
                    Console hesabından alınmıştır: sorgu bazlı ortalama
                    pozisyon ve gösterim sayıları, aynı 11 aylık pencere
                    içinde. Karşılaştırma için hem yerel amaçlı (Fethiye,
                    Muğla, Marmaris) hem ulusal rekabetçi (&quot;web tasarım
                    ajansı&quot; gibi) kelimeler bir arada gösterilmiştir.
                  </p>

                  <h2
                    id="sonuclar"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Sıralama Sonuçları
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Aşağıdaki tablo, aynı site için farklı kelime
                    gruplarındaki ortalama Google pozisyonunu gösteriyor:
                  </p>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="py-3 pr-4 text-gray-900 font-semibold">
                            Kelime
                          </th>
                          <th className="py-3 pr-4 text-gray-900 font-semibold">
                            Ort. Pozisyon
                          </th>
                          <th className="py-3 pr-4 text-gray-900 font-semibold">
                            Gösterim
                          </th>
                          <th className="py-3 text-gray-900 font-semibold">
                            Kapsam
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rankingData.map((row) => (
                          <tr key={row.keyword} className="border-b border-gray-100">
                            <td className="py-3 pr-4 text-gray-700">
                              {row.keyword}
                            </td>
                            <td className="py-3 pr-4 text-gray-700 font-semibold">
                              {row.position}
                            </td>
                            <td className="py-3 pr-4 text-gray-700">
                              {row.impressions}
                            </td>
                            <td className="py-3 text-gray-700">
                              {row.scope}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Kaynak: Google Search Console, webcraft.tr, 11 aylık
                    ortalama veri. Sıralamalar zaman içinde dalgalanabilir;
                    bu tablo yayın tarihindeki anlık durumu yansıtır.
                  </p>

                  <h2
                    id="neden"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Neden Yerel Kelimeler Daha Hızlı Sıralanıyor?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Veride açık bir örüntü var: &quot;muğla seo&quot; gibi
                    yerel odaklı kelimelerde ilk 5&apos;teyiz, ama
                    &quot;web tasarım ajansı&quot; gibi ulusal rekabetçi bir
                    kelimede 30. sıradayız — aynı site, aynı sayfa kalitesi,
                    çok farklı sonuç. Bunun sebebi içerik değil, rekabet
                    yoğunluğu: ulusal kelimede 10-25 yıllık domain
                    geçmişine sahip büyük ajanslarla yarışıyoruz; yerel
                    kelimede rakiplerin çoğu teknik olarak daha zayıf, küçük
                    işletmeler. Domain yaşı ~11 ay olan bir site için bu,
                    beklenen ve mantıklı bir dağılım.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Pratik çıkarım: yeni veya genç bir sitenin SEO stratejisi
                    önce dar, az rekabetli, yüksek niyetli kelimelerde (yerel
                    veya niş) otorite biriktirmeli; ulusal genel kelimeler bu
                    otorite üzerine zamanla inşa edilmeli.
                  </p>

                  <h2
                    id="cihaz"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Cihaz ve Davranış Verisi
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Trafiğimizin büyük çoğunluğu masaüstünden geliyor (14.841
                    gösterim, 121 tıklama) — B2B/ajans hizmeti arayan
                    kullanıcılar için beklenen bir dağılım. İlginç bir
                    bulgu: tablet trafiği düşük hacimli olmasına rağmen en
                    yüksek tıklama oranına (%3,49) sahip; bu, küçük
                    örneklemlerde dikkatli yorumlanması gereken ama izlemeye
                    değer bir sinyal.
                  </p>

                  <h2
                    id="cikarimlar"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    İşletmeler İçin Çıkarımlar
                  </h2>
                  <ul className="space-y-3 mb-8">
                    <li className="text-gray-700">
                      • Genç bir site için &quot;kaçıncı sırada olmalıyım?&quot;
                      sorusunun cevabı kelimenin rekabet düzeyine göre
                      tamamen değişir — tek bir hedef pozisyon yoktur.
                    </li>
                    <li className="text-gray-700">
                      • Yerel + niş kelimelerde erken kazanım, genel
                      otoriteyi artırarak ulusal kelimelere zemin hazırlar.
                    </li>
                    <li className="text-gray-700">
                      • Gösterim var ama tıklama yoksa (bizim ulusal
                      kelimelerimizde olduğu gibi), sorun genellikle içerik
                      değil, sıralamanın kullanıcıların tıkladığı ilk 10
                      sonucun dışında kalmasıdır.
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Kendi{" "}
                    <Link
                      href="/hizmetler/seo-hizmeti"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      SEO hizmetimizde
                    </Link>{" "}
                    uyguladığımız yöntem budur. Fethiye ve Muğla&apos;da
                    yerel SEO çalışması hakkında daha fazla bilgi için{" "}
                    <Link
                      href="/mugla-web-tasarim-seo-hizmetleri"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      Muğla sayfamızı
                    </Link>{" "}
                    inceleyebilirsiniz.
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
                      Web tasarım ve SEO alanında 8 yılı aşkın deneyimle
                      WebCraft&apos;ın kendi organik büyüme stratejisini de
                      bizzat yönetiyorum. Bu yazıdaki veriler webcraft.tr&apos;nin
                      kendi Google Search Console hesabından alınmıştır.{" "}
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
                    Yayın tarihi: 30 Temmuz 2026 • Bu yazı yazar tarafından
                    birinci elden veri ve deneyim temelinde hazırlanmıştır.
                  </div>
                </div>
                <BlogTOC items={TOC_ITEMS} />
              </div>
            </div>
          </article>
          <RelatedBlogPosts
            currentSlug="yerel-seo-sonuclarimiz-veri-analizi"
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

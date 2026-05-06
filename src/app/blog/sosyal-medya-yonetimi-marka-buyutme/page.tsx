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
  title: "Sosyal Medya Yönetimi ile Markanızı Büyütün | WebCraft",
  description:
    "Sosyal medya yönetimi ile markanızı büyütün. Instagram, Facebook, LinkedIn stratejileri. Profesyonel sosyal medya ajansı ile marka bilinirliğinizi artırın.",
  keywords:
    "sosyal medya yönetimi, sosyal medya pazarlama, Instagram yönetimi, Facebook yönetimi, marka büyütme, dijital pazarlama",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/sosyal-medya-yonetimi-marka-buyutme",
  },
  openGraph: {
    title: "Sosyal Medya Yönetimi ile Markanızı Büyütün",
    description:
      "Profesyonel sosyal medya yönetimi ile marka bilinirliğinizi artırın.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-12-12T09:00:00Z",
    authors: ["Serhat Kaya"],
  },
};

const TOC_ITEMS = [
  { id: "nedir", label: "Sosyal Medya Yönetimi Nedir?" },
  { id: "strateji", label: "Başarılı Strateji" },
  { id: "sonuc", label: "Sonuç" },
];

export default function SosyalMedyaYonetimi() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Sosyal Medya Yönetimi",
      url: "/blog/sosyal-medya-yonetimi-marka-buyutme",
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
        name: "Sosyal Medya Yönetimi",
        item: "https://www.webcraft.tr/blog/sosyal-medya-yonetimi-marka-buyutme",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Sosyal Medya Yönetimi ile Markanızı Büyütün",
    description:
      "Profesyonel sosyal medya yönetimi stratejileri ve uygulama rehberi.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.webp",
    author: {
      "@type": "Person",
      name: "Serhat Kaya",
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
    datePublished: "2024-12-12T09:00:00Z",
    dateModified: "2024-12-12T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/sosyal-medya-yonetimi-marka-buyutme",
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
                  Dijital Pazarlama
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sosyal Medya Yönetimi ile Markanızı Büyütün
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span className="font-medium text-gray-900">Serhat Kaya</span>
                <span>•</span>
                <span>12 Aralık 2024</span>
                <span>•</span>
                <span>17 dk okuma</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/dijital-pazarlama.webp"
                  alt="Sosyal Medya Yönetimi"
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
                    Sosyal medya, modern dijital pazarlama stratejilerinin
                    vazgeçilmez bir parçasıdır. Doğru sosyal medya yönetimi ile
                    markanızı büyütebilir, müşteri sadakati oluşturabilir ve
                    satışlarınızı artırabilirsiniz.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Bu yazıda, profesyonel sosyal medya yönetiminin temellerini,
                    stratejilerini ve başarılı kampanyalar oluşturma
                    yöntemlerini detaylı olarak ele alacağız.{" "}
                    <Link
                      href="/hizmetler/dijital-pazarlama"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      Dijital pazarlama
                    </Link>{" "}
                    hizmetlerimiz ile markanızı sosyal medyada öne çıkarın.
                  </p>

                  <h2
                    id="nedir"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Sosyal Medya Yönetimi Nedir?
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Sosyal medya yönetimi, markanızın sosyal medya
                    platformlarındaki varlığını planlamak, oluşturmak,
                    yayınlamak ve analiz etmek anlamına gelir. Bu süreç, içerik
                    stratejisi, topluluk yönetimi, reklam kampanyaları ve
                    performans analizi içerir.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Neden Sosyal Medya Yönetimi Önemli?
                  </h3>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Marka bilinirliğini artırır</strong> - Geniş
                        kitlelere ulaşarak markanızı tanıtırsınız
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Müşteri etkileşimi sağlar</strong> -
                        Müşterilerinizle doğrudan iletişim kurarsınız
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Satışları artırır</strong> - Hedefli kampanyalar
                        ile dönüşüm sağlarsınız
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700">
                        <strong>Müşteri sadakati oluşturur</strong> - Düzenli
                        etkileşim ile sadık müşteri kitlesi oluşturursunuz
                      </span>
                    </li>
                  </ul>

                  <h2
                    id="strateji"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Başarılı Sosyal Medya Stratejisi Nasıl Oluşturulur?
                  </h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    1. Hedef Kitle Analizi
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Sosyal medya stratejinizin ilk adımı, hedef kitlenizi
                    tanımaktır. Demografik özellikler, ilgi alanları, davranış
                    kalıpları ve hangi platformları kullandıklarını analiz edin.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    2. İçerik Stratejisi
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Değerli, ilgi çekici ve paylaşılabilir içerikler oluşturun.
                    Görsel içerikler, videolar, hikayeler ve kullanıcı kaynaklı
                    içerikler kullanın. İçerik takviminizi planlayın ve düzenli
                    paylaşımlar yapın.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    3. Platform Seçimi
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Her sosyal medya platformu farklı bir kitleye hitap eder.
                    İşletmenizin hedeflerine ve hedef kitlenize uygun
                    platformları seçin. Instagram genç kitleler için, LinkedIn
                    B2B pazarlaması için, Facebook geniş kitleler için idealdir.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    4. Topluluk Yönetimi
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Yorumlara yanıt verin, mesajları hızlıca cevaplayın ve
                    takipçilerinizle etkileşim kurun. Aktif bir topluluk
                    yönetimi, müşteri memnuniyetini ve marka sadakatini artırır.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    5. Reklam Kampanyaları
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Organik erişimin yanı sıra, hedefli reklam kampanyaları ile
                    daha geniş kitlelere ulaşın. Facebook Ads, Instagram Ads ve
                    LinkedIn Ads ile hedef kitlenize özel kampanyalar oluşturun.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                    <h4 className="text-green-900 font-bold text-xl mb-3">
                      🚀 WebCraft İpucu
                    </h4>
                    <p className="text-green-800 text-lg leading-relaxed">
                      Sosyal medyada başarı, tutarlılık ve sabır gerektirir.
                      Düzenli içerik paylaşımı, etkileşim ve analiz ile uzun
                      vadeli başarı sağlarsınız.
                    </p>
                  </div>

                  <h2
                    id="sonuc"
                    className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                  >
                    Sonuç
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Profesyonel sosyal medya yönetimi ile markanızı büyütün.{" "}
                    <Link
                      href="/hizmetler/dijital-pazarlama"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      Dijital pazarlama
                    </Link>{" "}
                    hizmetlerimiz ile sosyal medyada başarıya ulaşın. WebCraft
                    ile iletişime geçin!
                  </p>
                  {/* Author Bio */}
                  <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-4">
                    <div className="flex items-center gap-4 md:gap-5 mb-4">
                      <div className="bg-red-600 text-white font-bold text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                        SK
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">
                          Serhat Kaya
                        </p>
                        <p className="text-red-600 text-sm font-medium mt-1">
                          WebCraft — Dijital Pazarlama &amp; Marka Uzmanı
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Sosyal medya yönetimi, marka stratejisi ve içerik
                      pazarlaması alanlarında 5 yıllık deneyimle işletmelerin
                      dijital kanallardan müşteri kazanmasına yardımcı oluyorum.{" "}
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
                    Yayın tarihi: 12 Aralık 2024 • Bu yazı yazar tarafından
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
            currentSlug="sosyal-medya-yonetimi-marka-buyutme"
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

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
  title: "Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli? | WebCraft",
  description:
    "Profesyonel web tasarım nedir ve kimler için gereklidir? Küçük işletmelerden büyük kurumlara kadar profesyonel web tasarımın önemi, faydaları ve ne zaman gerekli olduğunu öğrenin.",
  keywords:
    "profesyonel web tasarım, web tasarım, kurumsal web sitesi, web tasarım ajansı, web sitesi tasarımı, SEO uyumlu web tasarım",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/profesyonel-web-tasarim-nedir-kimler-icin-gerekli",
  },
  openGraph: {
    title: "Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli?",
    description:
      "Profesyonel web tasarımın önemi, faydaları ve kimler için gerekli olduğunu öğrenin. 8+ yıllık deneyimle profesyonel web tasarım rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2025-01-22T09:00:00Z",
    authors: ["WebCraft Web Tasarım Uzmanı"],
  },
};

export default function ProfesyonelWebTasarimNedir() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli?",
      url: "/blog/profesyonel-web-tasarim-nedir-kimler-icin-gerekli",
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
        name: "Profesyonel Web Tasarım Nedir?",
        item: "https://www.webcraft.tr/blog/profesyonel-web-tasarim-nedir-kimler-icin-gerekli",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli?",
    description:
      "Profesyonel web tasarımın önemi, faydaları ve kimler için gerekli olduğunu öğrenin.",
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
    datePublished: "2025-01-22T09:00:00Z",
    dateModified: "2025-01-22T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.webcraft.tr/blog/profesyonel-web-tasarim-nedir-kimler-icin-gerekli",
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
          <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Web Tasarım
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli?
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>22 Ocak 2025</span>
                <span>•</span>
                <span>20 dk okuma</span>
                <span>•</span>
                <span>WebCraft Web Tasarım Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/web-tasarım.jpg"
                  alt="Profesyonel Web Tasarım"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Günümüz dijital dünyasında, bir web sitesine sahip olmak artık
                  bir lüks değil, bir zorunluluktur. Ancak sadece bir web
                  sitesine sahip olmak yeterli değildir. Profesyonel web
                  tasarım, işletmenizin dijital başarısının temelini oluşturur
                  ve markanızın online dünyadaki ilk izlenimini belirler.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, profesyonel web tasarımın ne olduğunu, kimler için
                  gerekli olduğunu ve neden önemli olduğunu detaylı olarak ele
                  alacağız. 8+ yıllık web tasarım deneyimimiz ve 200+ başarılı
                  projemizle, profesyonel{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    web tasarım
                  </Link>{" "}
                  hizmetlerinin işletmenize nasıl değer katacağını
                  açıklayacağız.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Profesyonel Web Tasarım Nedir?
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Profesyonel web tasarım, sadece görsel olarak çekici bir web
                  sitesi oluşturmak değildir. Kapsamlı bir süreçtir ve şu
                  unsurları içerir:
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Stratejik Planlama ve Analiz
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Profesyonel web tasarım, detaylı bir planlama süreci ile
                  başlar:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Hedef kitle analizi:</strong> Web sitenizin kime
                      hitap edeceğini belirlemek
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Rakip analizi:</strong> Sektörünüzdeki
                      rakiplerinizin web sitelerini incelemek
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>İş hedefleri belirleme:</strong> Web sitenizin
                      hangi amaçlara hizmet edeceğini netleştirmek
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>İçerik stratejisi:</strong> Hangi bilgilerin nasıl
                      sunulacağını planlamak
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Teknik gereksinimler:</strong> Web sitenizin hangi
                      özelliklere ihtiyaç duyduğunu belirlemek
                    </span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Kullanıcı Deneyimi (UX) Odaklı Tasarım
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Profesyonel web tasarım, kullanıcı deneyimini önceliklendirir:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Sezgisel navigasyon:</strong> Kullanıcıların
                      kolayca istedikleri bilgiyi bulabilmesi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Hızlı yükleme süreleri:</strong> Kullanıcıların
                      beklemek zorunda kalmaması
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Mobil uyumluluk:</strong> Tüm cihazlarda mükemmel
                      görünüm ve işlevsellik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Erişilebilirlik:</strong> Tüm kullanıcılar için
                      erişilebilir tasarım (WCAG standartları)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Dönüşüm odaklı tasarım:</strong> Kullanıcıları
                      istenen aksiyonlara yönlendiren tasarım
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Kimler İçin Profesyonel Web Tasarım Gerekli?
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Küçük ve Orta Ölçekli İşletmeler (KOBİ&apos;ler)
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Küçük ve orta ölçekli işletmeler için profesyonel web tasarım
                  kritik öneme sahiptir. Dijital varlık oluşturma, rekabet
                  avantajı, müşteri güveni ve maliyet etkin pazarlama için
                  profesyonel web sitesi gereklidir.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Kurumsal İşletmeler
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kurumsal işletmeler için profesyonel web tasarım, marka
                  itibarı ve kurumsal kimlik için gereklidir. Profesyonel
                  görünüm ile marka değerini artırma ve kurumsal sistemlerle
                  entegrasyon önemlidir.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. E-Ticaret İşletmeleri
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Online satış yapan işletmeler için profesyonel web tasarım,
                  satış başarısı için kritiktir. Güvenli ödeme sistemleri,
                  kullanıcı dostu alışveriş deneyimi ve mobil optimizasyon
                  gereklidir.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 Uzman İpucu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    Profesyonel web tasarım, sadece bir maliyet değil,
                    işletmenizin dijital başarısı için yapılan bir yatırımdır.
                    Doğru yatırım, uzun vadede önemli getiriler sağlar ve
                    işletmenizin büyümesine katkıda bulunur.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Profesyonel web tasarım, modern işletmeler için vazgeçilmez
                  bir gerekliliktir. Küçük işletmelerden büyük kurumlara kadar,
                  tüm işletmeler profesyonel web tasarımın faydalarından
                  yararlanabilir.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Profesyonel{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    web tasarım
                  </Link>{" "}
                  hizmeti ile markanızı dijital dünyada öne çıkarın. WebCraft
                  ile iletişime geçin!
                </p>
              </div>
            </div>
          </section>

          {/* Related Blog Posts */}
          <RelatedBlogPosts
            currentSlug="profesyonel-web-tasarim-nedir-kimler-icin-gerekli"
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

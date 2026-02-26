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
  title: "Güçlü Marka İmajı Oluşturma Stratejileri | WebCraft",
  description:
    "Güçlü marka imajı nasıl oluşturulur? Marka kimliği, logo tasarımı, kurumsal renk paleti ve marka stratejileri.",
  keywords:
    "marka imajı, marka kimliği, marka stratejisi, logo tasarımı, kurumsal kimlik",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/guclu-marka-imaji-olusturma" },
  openGraph: {
    title: "Güçlü Marka İmajı Oluşturma Stratejileri",
    description: "Marka kimliği ve imaj oluşturma rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-11-28T09:00:00Z",
    authors: ["WebCraft Marka Uzmanı"],
  },
};

export default function GuluMarkaImaji() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Güçlü Marka İmajı Oluşturma Stratejileri",
      url: "/blog/guclu-marka-imaji-olusturma",
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
        name: "Güçlü Marka İmajı",
        item: "https://www.webcraft.tr/blog/guclu-marka-imaji-olusturma",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Güçlü Marka İmajı Oluşturma Stratejileri",
    description: "Marka kimliği ve imaj oluşturma stratejileri.",
    image: "https://www.webcraft.tr/bento/web-tasarım.jpg",
    author: { "@type": "Person", name: "WebCraft Marka Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-11-28T09:00:00Z",
    dateModified: "2024-11-28T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/guclu-marka-imaji-olusturma",
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
                  Marka Stratejisi
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Güçlü Marka İmajı Oluşturma Stratejileri
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>28 Kasım 2024</span>
                <span>•</span>
                <span>16 dk okuma</span>
                <span>•</span>
                <span>WebCraft Marka Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/web-tasarım.jpg"
                  alt="Güçlü Marka İmajı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Güçlü bir marka imajı, işletmenizin pazardaki konumunu
                  belirler ve müşteri sadakati oluşturur. Marka kimliği,
                  değerlerinizi, misyonunuzu ve vizyonunuzu yansıtan tutarlı bir
                  görsel ve duygusal deneyimdir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, güçlü bir marka imajı oluşturmanın temellerini,
                  marka kimliği unsurlarını ve başarılı marka stratejilerini ele
                  alacağız.{" "}
                  <Link
                    href="/kurumsal-web-sitesi"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Kurumsal web sitesi
                  </Link>{" "}
                  ile marka imajınızı güçlendirin.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Marka İmajı Nedir?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Marka imajı, müşterilerin zihninde oluşan marka algısıdır. Bu
                  algı, görsel kimlik, müşteri deneyimi, iletişim ve marka
                  değerlerinin birleşimidir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Marka İmajının Önemi
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Müşteri güveni</strong> - Güçlü marka imajı güven
                      oluşturur
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Rekabet avantajı</strong> - Rakiplerinizden
                      farklılaşırsınız
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Müşteri sadakati</strong> - Güçlü marka bağlılık
                      oluşturur
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Yüksek fiyatlama gücü</strong> - Güçlü markalar
                      premium fiyat alabilir
                    </span>
                  </li>
                </ul>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Marka Kimliği Unsurları
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. Logo ve Görsel Kimlik
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Logo, markanızın görsel sembolüdür. Basit, akılda kalıcı ve
                  ölçeklenebilir bir logo tasarımı yapın.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Renk Paleti
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Marka renkleriniz, duygusal bağlantı oluşturur. Tutarlı bir
                  renk paleti kullanın ve marka kimliğinizi güçlendirin.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. Tipografi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Marka fontlarınız, kişiliğinizi yansıtır. Okunabilir ve
                  tutarlı fontlar kullanın.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. Marka Sesi ve Tonu
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Markanızın iletişim tarzı, kişiliğinizi yansıtır. Resmi,
                  samimi, teknik veya yaratıcı bir ton seçin ve tutarlı olun.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 Marka İpucu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    Marka tutarlılığı kritik öneme sahiptir. Tüm platformlarda
                    ve iletişim kanallarında aynı marka kimliğini kullanın.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Güçlü marka imajı ile müşteri güveni ve sadakati kazanın.{" "}
                  <Link
                    href="/kurumsal-web-sitesi"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Kurumsal web sitesi
                  </Link>{" "}
                  ile marka kimliğinizi oluşturun. WebCraft ile iletişime geçin!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="guclu-marka-imaji-olusturma"
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

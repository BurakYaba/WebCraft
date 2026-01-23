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
  title: "Web Sitesi Güvenliği: SSL, HTTPS ve Güvenlik Önlemleri | WebCraft",
  description:
    "Web sitesi güvenliği rehberi. SSL sertifikası, HTTPS, güvenlik duvarı, DDoS koruması ve veri güvenliği stratejileri.",
  keywords:
    "web sitesi güvenliği, SSL sertifikası, HTTPS, güvenlik duvarı, DDoS koruması, veri güvenliği",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/web-sitesi-guvenligi" },
  openGraph: {
    title: "Web Sitesi Güvenliği: SSL, HTTPS ve Güvenlik Önlemleri",
    description: "Web sitesi güvenliği rehberi ve uygulamaları.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-11-25T09:00:00Z",
    authors: ["WebCraft Güvenlik Uzmanı"],
  },
};

export default function WebSitesiGuvenligi() {
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
        name: "Web Sitesi Güvenliği",
        item: "https://www.webcraft.tr/blog/web-sitesi-guvenligi",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Web Sitesi Güvenliği: SSL, HTTPS ve Güvenlik Önlemleri",
    description: "Web sitesi güvenliği rehberi.",
    image: "https://www.webcraft.tr/bento/web-tasarım.jpg",
    author: { "@type": "Person", name: "WebCraft Güvenlik Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-11-25T09:00:00Z",
    dateModified: "2024-11-25T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/web-sitesi-guvenligi",
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
                  Güvenlik
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Sitesi Güvenliği: SSL, HTTPS ve Güvenlik Önlemleri
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>25 Kasım 2024</span>
                <span>•</span>
                <span>15 dk okuma</span>
                <span>•</span>
                <span>WebCraft Güvenlik Uzmanı</span>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/bento/web-tasarım.jpg"
                  alt="Web Sitesi Güvenliği"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Web sitesi güvenliği, modern dijital dünyada kritik öneme
                  sahiptir. Siber saldırılar, veri ihlalleri ve güvenlik
                  açıkları, işletmenizin itibarını ve müşteri güvenini tehlikeye
                  atabilir. Güvenli bir web sitesi, hem müşterilerinizi korur
                  hem de işletmenizi yasal sorumluluktan kurtarır.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Bu yazıda, web sitesi güvenliğinin temellerini, SSL
                  sertifikası, HTTPS, güvenlik duvarı ve diğer güvenlik
                  önlemlerini detaylı olarak ele alacağız.{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Web tasarım
                  </Link>{" "}
                  hizmeti ile güvenli web siteleri oluşturuyoruz.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Web Sitesi Güvenliği Neden Önemli?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Web sitesi güvenliği, sadece teknik bir konu değil,
                  işletmenizin itibarı ve müşteri güveni için kritik bir
                  faktördür.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Güvenlik Tehditleri
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>SQL injection</strong> - Veritabanı saldırıları
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>XSS (Cross-Site Scripting)</strong> - Kötü amaçlı
                      kod enjeksiyonu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>DDoS saldırıları</strong> - Hizmet dışı bırakma
                      saldırıları
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Malware ve virüsler</strong> - Kötü amaçlı
                      yazılımlar
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Brute force saldırıları</strong> - Şifre kırma
                      denemeleri
                    </span>
                  </li>
                </ul>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Temel Güvenlik Önlemleri
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  1. SSL Sertifikası ve HTTPS
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SSL (Secure Sockets Layer) sertifikası, web siteniz ile
                  ziyaretçileriniz arasındaki veri iletişimini şifreler. HTTPS
                  protokolü, güvenli bağlantı sağlar ve Google sıralamalarını
                  olumlu etkiler.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. Güvenlik Duvarı (Firewall)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Web application firewall (WAF), kötü amaçlı trafiği filtreler
                  ve saldırıları engeller. Cloudflare, Sucuri gibi hizmetler
                  koruma sağlar.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. Düzenli Güncellemeler
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CMS, eklentiler ve tema güncellemeleri güvenlik açıklarını
                  kapatır. Düzenli güncelleme kritik öneme sahiptir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  4. Güçlü Şifreler
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Karmaşık şifreler kullanın ve two-factor authentication (2FA)
                  etkinleştirin.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  5. Yedekleme
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Düzenli yedeklemeler ile veri kaybını önleyin. Otomatik
                  yedekleme sistemleri kurun.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-red-900 font-bold text-xl mb-3">
                    ⚠️ Güvenlik Uyarısı
                  </h4>
                  <p className="text-red-800 text-lg leading-relaxed">
                    Web sitesi güvenliği sürekli bir süreçtir. Tek seferlik
                    güvenlik önlemleri yeterli değildir. Düzenli güvenlik
                    taramaları ve güncellemeler yapın.
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Güvenli web sitesi ile müşteri güvenini kazanın ve işletmenizi
                  koruyun.{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    Web tasarım
                  </Link>{" "}
                  hizmeti ile güvenli çözümler için WebCraft ile iletişime
                  geçin!
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="web-sitesi-guvenligi"
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

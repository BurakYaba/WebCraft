import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import { Building2, Award, Globe, CheckCircle, Star } from "lucide-react";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Kurumsal Web Sitesi Tasarımı | WebCraft - Profesyonel Kurumsal Kimlik",
  description:
    "Profesyonel kurumsal web sitesi tasarımı. Kurumsal kimlik, güvenilirlik ve profesyonel görünüm için modern kurumsal web çözümleri. Kurumsal web tasarım.",
  keywords:
    "kurumsal web sitesi, kurumsal web tasarımı, kurumsal kimlik, profesyonel web sitesi, kurumsal web çözümleri",
  openGraph: {
    title: "Kurumsal Web Sitesi Tasarımı | WebCraft",
    description:
      "Profesyonel kurumsal web sitesi tasarımı. Kurumsal kimlik ve güvenilirlik için modern çözümler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function KurumsalWebSitesiPage() {
  // Corporate Website Service Schema
  const corporateSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kurumsal Web Sitesi Tasarımı",
    description:
      "Profesyonel kurumsal web sitesi tasarımı ve kurumsal kimlik çözümleri",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
    },
    serviceType: "Kurumsal Web Tasarımı",
    areaServed: "Turkey",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kurumsal Web Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal Web Sitesi Tasarımı",
            description: "Profesyonel kurumsal web sitesi tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal Kimlik Tasarımı",
            description: "Kurumsal kimlik ve marka tasarımı",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
                  Kurumsal Web Sitesi Tasarımı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Profesyonel
                  <br />
                  <span className="text-red-600">Kurumsal Kimlik</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mb-8">
                  Kurumsal web siteniz ile profesyonel görünüm kazanın.
                  Güvenilirlik, prestij ve kurumsal kimlik için modern web
                  çözümleri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Ücretsiz Teklif Al
                  </a>
                  <a
                    href="tel:+905079441715"
                    className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - Corporate Features */}
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Kurumsal Web Sitesi Özellikleri
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        %100
                      </div>
                      <div className="text-sm text-gray-600">
                        Profesyonel Tasarım
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Teknik Destek</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        SSL
                      </div>
                      <div className="text-sm text-gray-600">Güvenlik</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        SEO
                      </div>
                      <div className="text-sm text-gray-600">Optimizasyon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Corporate Website Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Neden Kurumsal Web Sitesi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kurumsal web siteniz, şirketinizin dijital dünyadaki yüzüdür.
                Profesyonel görünüm ve güvenilirlik için vazgeçilmezdir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Profesyonel Görünüm
                </h3>
                <p className="text-gray-600">
                  Kurumsal web siteniz ile profesyonel ve güvenilir bir imaj
                  oluşturun. Müşterilerinize güven verin.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Global Erişim
                </h3>
                <p className="text-gray-600">
                  Dünyanın her yerinden müşterilerinize ulaşın. 7/24
                  erişilebilir kurumsal bilgi merkeziniz olsun.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Rekabet Avantajı
                </h3>
                <p className="text-gray-600">
                  Rakiplerinizden öne çıkın. Modern ve profesyonel kurumsal web
                  siteniz ile fark yaratın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Website Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kurumsal Web Sitesi Özellikleri
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kurumsal web sitenizde bulunması gereken tüm özellikleri
                profesyonel olarak entegre ediyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Kurumsal Sayfalar
                </h3>
                <p className="text-gray-600 mb-6">
                  Şirketinizin kurumsal kimliğini yansıtan profesyonel sayfalar
                  tasarlıyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Hakkımızda sayfası</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Ekibimiz sayfası</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Misyon ve vizyon</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Kurumsal değerler</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  İletişim ve Bilgi
                </h3>
                <p className="text-gray-600 mb-6">
                  Müşterilerinizin size kolayca ulaşabilmesi için kapsamlı
                  iletişim çözümleri sunuyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">İletişim formu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Harita entegrasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Sosyal medya bağlantıları
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Canlı destek sistemi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Güvenlik ve Performans
                </h3>
                <p className="text-gray-600 mb-6">
                  Kurumsal web sitenizin güvenliği ve performansı için en yüksek
                  standartları uyguluyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SSL sertifikası</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Güvenlik duvarı</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Hızlı yükleme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Yedekleme sistemi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SEO ve Pazarlama
                </h3>
                <p className="text-gray-600 mb-6">
                  Kurumsal web sitenizin Google`&apos;`da görünürlüğünü artırmak
                  için SEO optimizasyonu yapıyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SEO optimizasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Google Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Sosyal medya entegrasyonu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      İçerik yönetim sistemi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kurumsal Web Sitesi Paketlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Şirketinizin büyüklüğüne ve ihtiyaçlarına uygun kurumsal web
                sitesi paketlerimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Temel Kurumsal
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  ₺12.000
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">5 sayfa tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Responsive tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SSL sertifikası</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Temel SEO</span>
                  </li>
                </ul>
                <a
                  href="/iletisim"
                  className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full transition-all duration-300 text-center block"
                >
                  Teklif Al
                </a>
              </div>

              <div className="bg-white border-2 border-red-500 p-8 rounded-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    En Popüler
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Profesyonel Kurumsal
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  ₺20.000
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">10 sayfa tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Gelişmiş tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      İçerik yönetim sistemi
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Kapsamlı SEO</span>
                  </li>
                </ul>
                <a
                  href="/iletisim"
                  className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-center block hover:bg-red-700"
                >
                  Teklif Al
                </a>
              </div>

              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Kurumsal Premium
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  ₺35.000
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Sınırsız sayfa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Özel tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Çoklu dil desteği</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">7/24 teknik destek</span>
                  </li>
                </ul>
                <a
                  href="/iletisim"
                  className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-full transition-all duration-300 text-center block"
                >
                  Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Kurumsal Web Sitesi Başarı Hikayelerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Müşterilerimizin kurumsal web siteleri ile elde ettikleri
                başarıları ve iş gelişimlerini keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  İnşaat Firması
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;Kurumsal web sitemiz ile profesyonel imajımız güçlendi.
                  Yeni projelerimiz %200 arttı.&quot;
                </p>
                <div className="text-lg font-bold text-red-600">
                  %200 Proje Artışı
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Danışmanlık Şirketi
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;Kurumsal web sitemiz ile müşteri güvenimiz arttı. Online
                  başvurularımız %300 yükseldi.&quot;
                </p>
                <div className="text-lg font-bold text-red-600">
                  %300 Başvuru Artışı
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Teknoloji Şirketi
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;Kurumsal web sitemiz ile teknoloji lideri olduğumuzu
                  gösterdik. Marka bilinirliğimiz %400 arttı.&quot;
                </p>
                <div className="text-lg font-bold text-red-600">
                  %400 Marka Artışı
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Kurumsal Web Sitenizi Birlikte Tasarlayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel kurumsal kimlik için modern web sitesi tasarımı.
              Ücretsiz danışmanlık ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905079441715"
                className="border border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                +90 (507) 944 17 15
              </a>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

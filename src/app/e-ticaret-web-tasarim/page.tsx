import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import { ShoppingCart, Package, Truck, CheckCircle, Star } from "lucide-react";

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
  title: "E-Ticaret Web Tasarımı | WebCraft - Online Mağaza Kurulumu",
  description:
    "Profesyonel e-ticaret web sitesi tasarımı. Online mağaza kurulumu, güvenli ödeme sistemleri ve mobil uyumlu e-ticaret çözümleri. Satışlarınızı artırın.",
  keywords:
    "e-ticaret web tasarımı, online mağaza kurulumu, e-ticaret sitesi, e-ticaret çözümleri, online satış sitesi",
  openGraph: {
    title: "E-Ticaret Web Tasarımı | WebCraft",
    description:
      "Profesyonel e-ticaret web sitesi tasarımı. Online mağaza kurulumu ve güvenli ödeme sistemleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function EticaretWebTasarimPage() {
  // E-commerce Service Schema
  const ecommerceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Ticaret Web Tasarımı",
    description:
      "Profesyonel e-ticaret web sitesi tasarımı ve online mağaza kurulumu hizmetleri",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
    },
    serviceType: "E-Ticaret Geliştirme",
    areaServed: "Turkey",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-Ticaret Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Mağaza Kurulumu",
            description: "Profesyonel e-ticaret web sitesi tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ödeme Sistemi Entegrasyonu",
            description: "Güvenli ödeme sistemleri entegrasyonu",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-green-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
                  E-Ticaret Web Tasarımı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Online Mağaza
                  <br />
                  <span className="text-red-600">Kurulumu</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mb-8">
                  Profesyonel e-ticaret web sitesi tasarımı ile online
                  satışlarınızı artırın. Güvenli ödeme sistemleri ve mobil
                  uyumlu tasarım.
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

              {/* Right Content - E-commerce Features */}
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    E-Ticaret Özellikleri
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Online Satış</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        %99.9
                      </div>
                      <div className="text-sm text-gray-600">
                        Uptime Garantisi
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        SSL
                      </div>
                      <div className="text-sm text-gray-600">Güvenlik</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        Mobil
                      </div>
                      <div className="text-sm text-gray-600">Uyumlu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why E-commerce Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Neden E-Ticaret Web Sitesi?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dijital dünyada satış yapmak artık bir zorunluluk. E-ticaret web
                siteniz ile 7/24 satış yapın ve müşteri tabanınızı genişletin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  7/24 Satış
                </h3>
                <p className="text-gray-600">
                  Mağazanız kapalı olsa bile satış yapmaya devam edin. Online
                  mağazanız her zaman açık.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Geniş Müşteri Kitlesi
                </h3>
                <p className="text-gray-600">
                  Sadece yerel değil, tüm Türkiye`&apos;`ye satış yapın. Müşteri
                  tabanınızı sınırsız genişletin.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Düşük İşletme Maliyeti
                </h3>
                <p className="text-gray-600">
                  Fiziksel mağaza maliyetlerinden kurtulun. Daha düşük maliyetle
                  daha fazla satış yapın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                E-Ticaret Web Sitesi Özellikleri
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Modern e-ticaret web sitenizde bulunması gereken tüm özellikleri
                profesyonel olarak entegre ediyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ödeme Sistemleri
                </h3>
                <p className="text-gray-600 mb-6">
                  Güvenli ve hızlı ödeme işlemleri için en güncel ödeme
                  sistemlerini entegre ediyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Kredi kartı ödemeleri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Banka kartı ödemeleri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Havale/EFT ödemeleri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Kapıda ödeme</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Stok Yönetimi
                </h3>
                <p className="text-gray-600 mb-6">
                  Ürün stoklarınızı otomatik olarak takip edin. Stok
                  tükendiğinde otomatik bildirimler alın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Otomatik stok takibi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Stok uyarı sistemi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Ürün kategorileri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Toplu ürün yükleme</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Güvenlik Önlemleri
                </h3>
                <p className="text-gray-600 mb-6">
                  Müşteri bilgilerinizi ve ödeme verilerinizi en yüksek güvenlik
                  standartları ile koruyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SSL sertifikası</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Güvenli ödeme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Veri şifreleme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Güvenlik duvarı</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Mobil Uyumluluk
                </h3>
                <p className="text-gray-600 mb-6">
                  Mobil cihazlarda mükemmel görünüm ve kullanım deneyimi. Mobil
                  müşterilerinizi kaçırmayın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Responsive tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Mobil ödeme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Hızlı yükleme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Kolay navigasyon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                E-Ticaret Paketlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                İşletmenizin büyüklüğüne ve ihtiyaçlarına uygun e-ticaret
                paketlerimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Başlangıç Paketi
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  ₺15.000
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">50 ürüne kadar</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Temel ödeme sistemleri
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Responsive tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SSL sertifikası</span>
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
                  Profesyonel Paket
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  ₺25.000
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">500 ürüne kadar</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Tüm ödeme sistemleri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Gelişmiş stok yönetimi
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SEO optimizasyonu</span>
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
                  Kurumsal Paket
                </h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  ₺45.000
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Sınırsız ürün</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Özel entegrasyonlar</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Çoklu mağaza desteği</span>
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
                E-Ticaret Başarı Hikayelerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Müşterilerimizin e-ticaret web siteleri ile elde ettikleri
                başarıları ve satış artışlarını keşfedin.
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
                  Moda Mağazası
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;E-ticaret sitemiz ile online satışlarımız %400 arttı.
                  Artık tüm Türkiye`&apos;`ye satış yapıyoruz.&quot;
                </p>
                <div className="text-lg font-bold text-red-600">
                  %400 Satış Artışı
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
                  Elektronik Mağaza
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;Mobil uyumlu e-ticaret sitemiz sayesinde mobil
                  müşterilerimiz %300 arttı.&quot;
                </p>
                <div className="text-lg font-bold text-red-600">
                  %300 Mobil Artış
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
                  Gıda Ürünleri
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;E-ticaret sitemiz ile ürünlerimizi tüm Türkiye`&apos;`ye
                  satabiliyoruz. Gelirimiz 5 kat arttı.&quot;
                </p>
                <div className="text-lg font-bold text-red-600">
                  5x Gelir Artışı
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              E-Ticaret Web Sitenizi Birlikte Kuralım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Online satışlarınızı artırmak için profesyonel e-ticaret web
              sitesi tasarımı. Ücretsiz danışmanlık ve teklif alın.
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

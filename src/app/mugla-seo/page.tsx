import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle,
  Award,
} from "lucide-react";

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
  title: "Muğla SEO Hizmeti | WebCraft - Arama Motoru Optimizasyonu",
  description:
    "Muğla'da profesyonel SEO hizmeti. Muğla işletmeleri için Google'da üst sıralarda yer alma garantisi. Yerel SEO uzmanları ile organik trafik artırın.",
  keywords:
    "Muğla SEO, Muğla SEO hizmeti, Muğla arama motoru optimizasyonu, Fethiye SEO, Muğla dijital pazarlama",
  openGraph: {
    title: "Muğla SEO Hizmeti | WebCraft",
    description:
      "Muğla'da profesyonel SEO hizmeti. Google'da üst sıralarda yer alma garantisi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function MuglaSeoPage() {
  // Local SEO Schema for Muğla
  const muglaSeoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Muğla SEO Hizmeti",
    description: "Muğla'da profesyonel arama motoru optimizasyonu hizmetleri",
    provider: {
      "@type": "LocalBusiness",
      name: "WebCraft",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fethiye",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Muğla",
    },
    serviceType: "SEO Hizmeti",
    offers: {
      "@type": "Offer",
      description: "Muğla'da profesyonel SEO hizmeti paketleri",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(muglaSeoSchema) }}
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
                  Muğla SEO Hizmeti
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Muğla`&apos;`da
                  <br />
                  <span className="text-red-600">SEO Uzmanı</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mb-8">
                  Muğla`&apos;`daki işletmeniz için profesyonel SEO hizmeti.
                  Google`&apos;`da üst sıralarda yer alın ve organik trafiğinizi
                  artırın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    SEO Analizi Yap
                  </a>
                  <a
                    href="tel:+905079441715"
                    className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - SEO Stats */}
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Muğla`&apos;`da SEO Başarılarımız
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        150%
                      </div>
                      <div className="text-sm text-gray-600">
                        Organik Trafik Artışı
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        85%
                      </div>
                      <div className="text-sm text-gray-600">
                        İlk Sayfa Başarısı
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">
                        Başarılı Proje
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">
                        Müşteri Memnuniyeti
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SEO Matters Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Muğla`&apos;`da SEO Neden Önemli?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Muğla`&apos;`daki işletmeniz için SEO, dijital pazarlamanın en
                etkili yöntemlerinden biridir. Yerel müşterilerinize daha kolay
                ulaşın.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Yerel Arama Görünürlüğü
                </h3>
                <p className="text-gray-600">
                  Muğla`&apos;`da &quot;restoran&quot;, &quot;otel&quot;,
                  &quot;mağaza&quot; aramalarında işletmeniz ilk sıralarda
                  görünsün.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Organik Trafik Artışı
                </h3>
                <p className="text-gray-600">
                  Google`&apos;`da üst sıralarda yer alarak ücretsiz organik
                  trafik kazanın.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hedefli Müşteri
                </h3>
                <p className="text-gray-600">
                  Arama yapan müşteriler, satın alma niyeti yüksek kaliteli
                  müşterilerdir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Muğla`&apos;`da Sunduğumuz SEO Hizmetleri
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Muğla işletmeleri için kapsamlı SEO çözümleri sunuyoruz. Teknik
                SEO`&apos;`dan içerik optimizasyonuna kadar tüm hizmetlerimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Yerel SEO Optimizasyonu
                </h3>
                <p className="text-gray-600 mb-6">
                  Muğla`&apos;`da Google Haritalar`&apos;`da görünürlük artırın.
                  Yerel müşterilerinize daha kolay ulaşın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Google My Business optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Yerel anahtar kelime optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Yerel dizin listeleme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Yerel backlink stratejisi
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Teknik SEO
                </h3>
                <p className="text-gray-600 mb-6">
                  Web sitenizin teknik altyapısını optimize edin.
                  Google`&apos;`ın sitenizi daha iyi anlamasını sağlayın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Site hızı optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Mobil uyumluluk</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Structured data işaretleme
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      XML sitemap optimizasyonu
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  İçerik SEO
                </h3>
                <p className="text-gray-600 mb-6">
                  Kaliteli içerik ile Google`&apos;`da üst sıralarda yer alın.
                  Müşterilerinizin aradığı bilgileri sağlayın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Anahtar kelime araştırması
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">İçerik optimizasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Blog içerik stratejisi
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Meta tag optimizasyonu
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SEO Analiz ve Raporlama
                </h3>
                <p className="text-gray-600 mb-6">
                  SEO performansınızı düzenli olarak takip edin. Veri odaklı
                  kararlar alın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Google Analytics kurulumu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Search Console optimizasyonu
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Aylık performans raporları
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Rekabet analizi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Muğla Sektörleri İçin Özel SEO Stratejileri
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Muğla`&apos;`nın turizm, tarım ve ticaret sektörlerindeki
                  işletmeleri için özel olarak geliştirilmiş SEO stratejileri
                  uyguluyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Turizm SEO
                      </h4>
                      <p className="text-gray-600">
                        Otel, pansiyon ve turizm acenteleri için sezonsal SEO
                        stratejileri
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tarım SEO</h4>
                      <p className="text-gray-600">
                        Tarım ürünleri satışı için e-ticaret odaklı SEO
                        optimizasyonu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Yerel Ticaret SEO
                      </h4>
                      <p className="text-gray-600">
                        Muğla`&apos;`daki mağaza ve işletmeler için yerel SEO
                        stratejileri
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Muğla`&apos;`da SEO Başarı Hikayelerimiz
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Muğla Otel</h4>
                    <p className="text-sm text-gray-600">
                      &quot;SEO çalışması sonrası organik rezervasyonlarımız
                      %250 arttı.&quot;
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">
                      Muğla Restoran
                    </h4>
                    <p className="text-sm text-gray-600">
                      &quot;Yerel SEO ile &apos;Muğla restoran&apos; aramasında
                      1. sıraya çıktık.&quot;
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">
                      Muğla Mağaza
                    </h4>
                    <p className="text-sm text-gray-600">
                      &quot;Google`&apos;`da görünürlüğümüz arttı, mağaza
                      trafiğimiz %180 yükseldi.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Muğla SEO Sürecimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Muğla`&apos;`daki işletmeniz için SEO çalışması nasıl yapılır?
                Adım adım sürecimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. Analiz
                </h3>
                <p className="text-gray-600">
                  Mevcut SEO durumunuzu analiz ederiz. Rakip analizi ve anahtar
                  kelime araştırması yaparız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. Strateji
                </h3>
                <p className="text-gray-600">
                  İşletmenize özel SEO stratejisi geliştiririz. Hedeflerinizi
                  belirleriz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. Uygulama
                </h3>
                <p className="text-gray-600">
                  SEO stratejisini uygularız. Teknik optimizasyon ve içerik
                  çalışmaları yaparız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. Takip
                </h3>
                <p className="text-gray-600">
                  Performansı takip ederiz. Düzenli raporlar ve optimizasyon
                  önerileri sunarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Muğla`&apos;`da SEO Başarınızı Birlikte Yakalayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Muğla`&apos;`da profesyonel SEO hizmeti için hemen iletişime
              geçin. Ücretsiz SEO analizi ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz SEO Analizi
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

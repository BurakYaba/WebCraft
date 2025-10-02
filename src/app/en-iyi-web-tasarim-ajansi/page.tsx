import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  Award,
  Trophy,
  Star,
  CheckCircle,
  Users,
  Clock,
  Shield,
  Zap,
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
  title: "En İyi Web Tasarım Ajansı | WebCraft - Türkiye'nin Lider Web Ajansı",
  description:
    "Türkiye'nin en iyi web tasarım ajansı WebCraft. Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. 50+ başarılı proje, %98 müşteri memnuniyeti.",
  keywords:
    "en iyi web tasarım ajansı, Türkiye web tasarım ajansı, lider web ajansı, profesyonel web tasarım, web tasarım şirketi",
  openGraph: {
    title: "En İyi Web Tasarım Ajansı | WebCraft",
    description:
      "Türkiye'nin en iyi web tasarım ajansı. Profesyonel web tasarım ve dijital pazarlama hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function EnIyiWebTasarimAjansiPage() {
  // Best Web Design Agency Schema
  const bestAgencySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebCraft - En İyi Web Tasarım Ajansı",
    description: "Türkiye'nin en iyi web tasarım ajansı",
    url: "https://www.webcraft.tr/en-iyi-web-tasarim-ajansi",
    logo: "https://www.webcraft.tr/webcraftLogo.png",
    foundingDate: "2015",
    awards: [
      "Türkiye'nin En İyi Web Tasarım Ajansı 2023",
      "Fethiye'de Güvenilir Dijital Ajans",
      "Muğla'da Kaliteli Hizmet Ödülü",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "En İyi Web Tasarım Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Profesyonel Web Tasarım",
            description: "Türkiye'nin en iyi web tasarım hizmeti",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Hizmeti",
            description: "Arama motoru optimizasyonu hizmetleri",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bestAgencySchema) }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-yellow-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
                  Türkiye`&apos;`nin En İyi Web Tasarım Ajansı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  En İyi
                  <br />
                  <span className="text-red-600">Web Tasarım Ajansı</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mb-8">
                  Türkiye`&apos;`nin en iyi web tasarım ajansı WebCraft ile
                  tanışın. 50+ başarılı proje, %98 müşteri memnuniyeti ve ödüllü
                  hizmet kalitesi.
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

              {/* Right Content - Awards & Stats */}
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Ödüller ve Başarılarımız
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
                      <span className="text-gray-700">
                        Türkiye`&apos;`nin En İyi Web Tasarım Ajansı 2023
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-6 h-6 text-blue-500 mr-3" />
                      <span className="text-gray-700">
                        Fethiye`&apos;`de Güvenilir Dijital Ajans
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        Muğla`&apos;`da Kaliteli Hizmet Ödülü
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
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
                        %98
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

        {/* Why We're The Best Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Neden Türkiye`&apos;`nin En İyi Web Tasarım Ajansıyız?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                WebCraft olarak, müşterilerimizin başarısı için sürekli
                kendimizi geliştiriyoruz. İşte bizi en iyi yapan özelliklerimiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Uzman Ekip
                </h3>
                <p className="text-gray-600">
                  8+ yıllık deneyime sahip uzman ekibimiz ile her projede
                  mükemmellik hedefliyoruz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hızlı Teslimat
                </h3>
                <p className="text-gray-600">
                  Projelerinizi zamanında teslim ediyoruz. Hızlı çözümlerle
                  işinizi aksatmıyoruz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Güvenilirlik
                </h3>
                <p className="text-gray-600">
                  Müşterilerimizin %98`&apos;`i memnuniyetini belirtiyor.
                  Güvenilir ve kaliteli hizmet sunuyoruz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Modern Teknolojiler
                </h3>
                <p className="text-gray-600">
                  En güncel teknolojileri kullanarak modern ve performanslı web
                  siteleri tasarlıyoruz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Ödüllü Kalite
                </h3>
                <p className="text-gray-600">
                  Türkiye`&apos;`nin en iyi web tasarım ajansı ödülü ile
                  kalitemizi kanıtladık.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sürekli Destek
                </h3>
                <p className="text-gray-600">
                  Proje tesliminden sonra da yanınızdayız. 7/24 teknik destek
                  sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Excellence */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                En İyi Web Tasarım Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Türkiye`&apos;`nin en iyi web tasarım ajansı olarak,
                müşterilerimize en kaliteli hizmetleri sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Web Tasarım ve Geliştirme
                </h3>
                <p className="text-gray-600 mb-6">
                  Modern, responsive ve kullanıcı dostu web siteleri
                  tasarlıyoruz. Her proje, müşteri ihtiyaçlarına özel olarak
                  geliştirilir.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Responsive tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Modern UI/UX tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Hızlı yükleme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SEO uyumlu yapı</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SEO ve Dijital Pazarlama
                </h3>
                <p className="text-gray-600 mb-6">
                  Google`&apos;`da üst sıralarda yer almanız için profesyonel
                  SEO hizmetleri sunuyoruz. Dijital pazarlama stratejileri ile
                  markanızı büyütün.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SEO optimizasyonu</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Sosyal medya yönetimi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">İçerik pazarlaması</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Analitik ve raporlama</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  E-Ticaret Çözümleri
                </h3>
                <p className="text-gray-600 mb-6">
                  Online satış yapmak için profesyonel e-ticaret web siteleri
                  tasarlıyoruz. Güvenli ödeme sistemleri ve stok yönetimi ile
                  satışlarınızı artırın.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Güvenli ödeme sistemleri
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Stok yönetimi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Mobil uyumlu tasarım</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">SEO optimizasyonu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Kurumsal Web Çözümleri
                </h3>
                <p className="text-gray-600 mb-6">
                  Kurumsal kimliğinizi yansıtan profesyonel web siteleri
                  tasarlıyoruz. Güvenilirlik ve prestij için modern kurumsal
                  çözümler.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Kurumsal kimlik tasarımı
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Profesyonel görünüm</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Güvenlik önlemleri</span>
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

        {/* Client Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Müşteri Yorumları
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Türkiye`&apos;`nin en iyi web tasarım ajansı olarak
                müşterilerimizin memnuniyetini önemsiyoruz. İşte
                müşterilerimizin görüşleri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ahmet Yılmaz
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;WebCraft gerçekten Türkiye`&apos;`nin en iyi web tasarım
                  ajansı. Projemizi zamanında teslim ettiler ve sonuç
                  mükemmeldi.&quot;
                </p>
                <div className="text-sm text-gray-500">Restoran Sahibi</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fatma Demir
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;E-ticaret sitemizi WebCraft`&apos;`a yaptırdık.
                  Satışlarımız %300 arttı. Kesinlikle en iyi ajans.&quot;
                </p>
                <div className="text-sm text-gray-500">E-Ticaret Sahibi</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mehmet Kaya
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  &quot;Kurumsal web sitemiz için WebCraft`&apos;`ı seçtik.
                  Profesyonel yaklaşımları ve kaliteli hizmetleri takdire
                  şayan.&quot;
                </p>
                <div className="text-sm text-gray-500">Şirket Sahibi</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Türkiye`&apos;`nin En İyi Web Tasarım Ajansı ile Çalışın
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              En iyi web tasarım ajansı olarak, projenizi mükemmelliğe
              taşıyalım. Ücretsiz danışmanlık ve teklif alın.
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

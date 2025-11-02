import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import {
  ShoppingCart,
  Package,
  Truck,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

// Lazy load BentoGrid
const BentoGrid = lazy(() => import("@/components/BentoGrid"));
// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer"));
// Lazy load ServiceFAQSection
const ServiceFAQSection = lazy(
  () => import("@/components/ServiceFAQSection")
);

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "E-Ticaret Web Tasarımı | WebCraft",
  description:
    "Profesyonel e-ticaret web sitesi tasarımı. Online mağaza kurulumu, güvenli ödeme sistemleri ve mobil uyumlu e-ticaret çözümleri. Satışlarınızı artırın.",
  keywords:
    "e-ticaret web tasarımı, online mağaza kurulumu, e-ticaret sitesi, e-ticaret çözümleri, online satış sitesi",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/e-ticaret-web-tasarim",
  },
  openGraph: {
    title: "E-Ticaret Web Tasarımı | WebCraft",
    description:
      "Profesyonel e-ticaret web sitesi tasarımı. Online mağaza kurulumu ve güvenli ödeme sistemleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function EticaretWebTasarimPage() {
  // E-commerce FAQ data
  const ecommerceFAQs = [
    {
      question: "E-ticaret web sitesi ne kadar sürer?",
      answer:
        "E-ticaret web sitesi projesi genellikle 4-8 hafta içinde tamamlanır. Süre, ürün sayısı, ödeme sistemi entegrasyonları ve özel isteklerinize bağlı olarak değişebilir. Profesyonel ekibimiz, projenizi zamanında teslim eder.",
    },
    {
      question: "E-ticaret web tasarım fiyatları nasıl belirlenir?",
      answer:
        "E-ticaret web tasarım fiyatları projenin kapsamına, ürün sayısına, ödeme sistemi entegrasyonlarına, kargo entegrasyonlarına ve özel özelliklere göre belirlenir. Her proje özel olarak değerlendirilir. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
    },
    {
      question: "Hangi ödeme sistemlerini entegre edebilirsiniz?",
      answer:
        "İyzico, PayTR, PayU, Stripe gibi tüm popüler ödeme sistemlerini entegre edebiliriz. Ayrıca, banka kartları, havale/EFT ve kapıda ödeme seçenekleri de mevcuttur.",
    },
    {
      question: "E-ticaret sitesi mobil uyumlu olur mu?",
      answer:
        "Evet, tüm e-ticaret web sitelerimiz responsive (mobil uyumlu) olarak tasarlanır. Masaüstü, tablet ve mobil cihazlarda mükemmel çalışır ve kullanıcı deneyimi sağlar.",
    },
    {
      question: "E-ticaret sitesi için kargo entegrasyonu yapıyor musunuz?",
      answer:
        "Evet, MNG Kargo, Yurtiçi Kargo, Aras Kargo, Sürat Kargo gibi popüler kargo firmaları ile entegrasyon sağlıyoruz. Kargo takip sistemi ve otomatik bildirimler de mevcuttur.",
    },
    {
      question: "E-ticaret sitesi güvenliği nasıl sağlanıyor?",
      answer:
        "Tüm e-ticaret web sitelerimiz SSL sertifikası ile korunur. Güvenli ödeme sistemleri, güvenlik duvarı ve düzenli yedekleme sistemleri ile verileriniz güvende tutulur.",
    },
    {
      question: "E-ticaret sitesi için içerik yönetimi nasıl çalışır?",
      answer:
        "Kolay kullanımlı admin paneli ile ürün ekleme, stok yönetimi, sipariş takibi ve raporlama işlemlerini kendiniz yapabilirsiniz. Ayrıca, teknik destek ekibimiz her zaman yardımcı olmaya hazırdır.",
    },
    {
      question: "E-ticaret sitesi SEO uyumlu mu?",
      answer:
        "Evet, tüm e-ticaret web sitelerimiz SEO uyumlu olarak geliştirilir. Ürün sayfaları, kategori sayfaları ve meta bilgileri optimize edilir. Ayrıca, SEO hizmeti ile Google'da üst sıralarda yer almanızı sağlıyoruz.",
    },
  ];

  // FAQPage schema for e-commerce
  const ecommerceFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    mainEntity: ecommerceFAQs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

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
            name: "E-Ticaret Web Sitesi Tasarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Mağaza Kurulumu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ödeme Sistemi Entegrasyonu",
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
      <div className="min-h-screen bg-[#181716]">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Watermark background - optimized for performance */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            E
          </div>

          {/* Decorative dots (SVG) - simplified */}
          <svg
            className="absolute right-4 md:right-56 top-1/3 z-10 w-8 h-8 md:w-12 md:h-12"
            fill="none"
            viewBox="0 0 60 60"
            aria-hidden="true"
          >
            <g>
              <circle cx="6" cy="6" r="2" fill="#f84525" />
              <circle cx="18" cy="8" r="1.5" fill="#fff" />
              <circle cx="30" cy="12" r="1.5" fill="#fff" />
              <circle cx="42" cy="18" r="1.5" fill="#fff" />
              <circle cx="54" cy="24" r="1.5" fill="#fff" />
              <circle cx="12" cy="24" r="1" fill="#fff" />
              <circle cx="24" cy="30" r="1" fill="#fff" />
              <circle cx="36" cy="36" r="1" fill="#fff" />
            </g>
          </svg>

          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
                  E-Ticaret Web Tasarımı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  Online Mağaza
                  <br />
                  <span className="text-red-600">Kurulumu</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Profesyonel e-ticaret web sitesi tasarımı ile online
                  satışlarınızı artırın. Güvenli ödeme sistemleri ve mobil
                  uyumlu çözümler.
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
                    className="border border-gray-300 text-white hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - Local Info */}
              <div className="lg:w-1/2">
                <div className="bg-[#181716] p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    E-Ticaret Uzmanları
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">
                        Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye - Muğla
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">+90 (507) 944 17 15</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">info@webcraft.tr</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-white">
                        Pazartesi-Cuma: 09:00-18:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Using BentoGrid */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                E-Ticaret Hizmetlerimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Profesyonel e-ticaret web sitesi tasarımından ödeme sistemi
                entegrasyonuna kadar tüm hizmetlerimiz. Online satışlarınızı
                artırın.
              </p>
            </div>
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <BentoGrid />
            </Suspense>
          </div>
        </section>

        {/* Why E-commerce Matters Section */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden E-Ticaret Web Sitesi?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                E-ticaret web siteniz, işletmenizin dijital dünyadaki
                vitrinidir. 7/24 satış yapabilir, müşterilerinize daha iyi
                hizmet verebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  7/24 Satış
                </h3>
                <p className="text-gray-300">
                  Online mağazanız 7 gün 24 saat açık. Müşterileriniz istediği
                  zaman alışveriş yapabilir.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Geniş Ürün Yelpazesi
                </h3>
                <p className="text-gray-300">
                  Fiziksel mağaza sınırları olmadan binlerce ürün
                  sergileyebilir, stok yönetimi yapabilirsiniz.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Kargo Entegrasyonu
                </h3>
                <p className="text-gray-300">
                  Otomatik kargo hesaplama ve takip sistemi ile müşteri
                  memnuniyetini artırın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Features */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  E-Ticaret Sitenizin Özellikleri
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Modern e-ticaret web sitenizde bulunması gereken tüm
                  özellikler ve teknolojiler ile donatılmış çözümler sunuyoruz.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Güvenli Ödeme Sistemleri
                      </h4>
                      <p className="text-gray-600">
                        SSL sertifikası ve güvenli ödeme entegrasyonları ile
                        müşteri bilgilerini koruyun
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Mobil Uyumlu Tasarım
                      </h4>
                      <p className="text-gray-600">
                        Responsive tasarım ile tüm cihazlarda mükemmel görünüm
                        ve kullanıcı deneyimi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        SEO Optimizasyonu
                      </h4>
                      <p className="text-gray-600">
                        Arama motorlarında üst sıralarda yer alarak organik
                        trafik ve satış artışı sağlayın
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Process */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                E-Ticaret Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                E-ticaret web sitenizin kurulumundan yayına alınmasına kadar
                adım adım sürecimizi keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  1. Analiz
                </h3>
                <p className="text-gray-300">
                  İşletmenizi ve hedef kitlenizi analiz ederiz. Ürün
                  kategorileri ve satış stratejisi belirleriz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  2. Tasarım
                </h3>
                <p className="text-gray-300">
                  Markanıza uygun, kullanıcı dostu e-ticaret tasarımı
                  geliştiririz. Mobil uyumlu çözümler sunarız.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  3. Geliştirme
                </h3>
                <p className="text-gray-300">
                  Ödeme sistemleri, kargo entegrasyonu ve güvenlik önlemleri ile
                  tam fonksiyonel site geliştiririz.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  4. Yayın
                </h3>
                <p className="text-gray-300">
                  Siteyi yayına alırız. SEO optimizasyonu ve performans takibi
                  ile sürekli destek sağlarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              E-Ticaret Başarınızı Birlikte Yakalayalım
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel e-ticaret web sitesi için hemen iletişime geçin.
              Ücretsiz analiz ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-[#181716] text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905079441715"
                className="border border-white text-white hover:bg-[#181716] hover:text-red-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                +90 (507) 944 17 15
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <ServiceFAQSection faqs={ecommerceFAQs} schema={ecommerceFAQSchema} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

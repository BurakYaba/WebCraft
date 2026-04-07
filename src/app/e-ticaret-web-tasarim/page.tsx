import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Shield,
  Smartphone,
  TrendingUp,
  Star,
} from "lucide-react";

const Footer = lazy(() => import("@/components/Footer"));
const RelatedServices = lazy(() => import("@/components/RelatedServices"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "E-Ticaret Web Tasarım | Online Mağaza Kurulumu | WebCraft",
  description:
    "Profesyonel e-ticaret web tasarımı ve online mağaza kurulumu. İyzico, PayTR ödeme entegrasyonu, kargo sistemi, SEO uyumlu. Satışlarınızı artıran, dönüşüm odaklı e-ticaret siteleri. Ücretsiz teklif alın.",
  keywords:
    "e-ticaret web tasarım, online mağaza kurulumu, e-ticaret sitesi, e-ticaret web sitesi, online satış sitesi, e-ticaret tasarım, online mağaza yapımı, e ticaret web tasarımı, e-ticaret çözümleri",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/e-ticaret-web-tasarim",
  },
  openGraph: {
    title: "E-Ticaret Web Tasarım | Online Mağaza Kurulumu | WebCraft",
    description:
      "Profesyonel e-ticaret web tasarımı. İyzico/PayTR ödeme, kargo entegrasyonu, SEO uyumlu. Dönüşüm odaklı online mağaza kurulumu.",
    url: "https://www.webcraft.tr/e-ticaret-web-tasarim",
    siteName: "WebCraft",
    images: [
      {
        url: "/bento/e-ticaret.webp",
        width: 1200,
        height: 630,
        alt: "E-Ticaret Web Tasarım — WebCraft",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Ticaret Web Tasarım | Online Mağaza Kurulumu | WebCraft",
    description:
      "Profesyonel e-ticaret web tasarımı. Ödeme entegrasyonu, kargo, SEO uyumlu online mağaza.",
    images: ["/bento/e-ticaret.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ETicaretWebTasarimPage() {
  const faqs = [
    {
      question: "E-ticaret web sitesi kurulumu ne kadar sürer?",
      answer:
        "Ürün sayısına ve gereksinimlere bağlı olarak genellikle 4–8 hafta içinde teslim edilir. Temel bir online mağaza (50 ürüne kadar, standart ödeme ve kargo entegrasyonu) 4 haftada, çok kategorili ve özel fonksiyonlu mağazalar 6–10 haftada tamamlanır. Keşif görüşmesinin ardından sabit takvim sözleşmeye bağlanır.",
    },
    {
      question: "Hangi ödeme sistemlerini entegre ediyorsunuz?",
      answer:
        "Türkiye'de yaygın kullanılan tüm ödeme sistemlerini entegre ediyoruz: İyzico, PayTR, PayU, Sipay. Kredi kartı, banka kartı, sanal pos, havale/EFT ve kapıda ödeme seçenekleri. Uluslararası satış planlıyorsanız Stripe veya PayPal entegrasyonu da mevcut.",
    },
    {
      question: "Kargo entegrasyonu yapıyor musunuz?",
      answer:
        "Evet, MNG Kargo, Yurtiçi Kargo, Aras Kargo, Sürat Kargo ve PTT Kargo ile API entegrasyonu yapıyoruz. Otomatik kargo takibi, müşteriye bildirim ve fatura oluşturma sistemleri standart olarak dahildir.",
    },
    {
      question: "Mevcut e-ticaret sitemin ürünlerini taşıyabilir misiniz?",
      answer:
        "Evet. Ticimax, İdeasoft, WooCommerce, Shopify ve diğer platformlardaki ürünlerinizi, müşteri verilerinizi ve sipariş geçmişinizi yeni platforma aktarabiliyoruz. Veri taşıma süreci keşif görüşmesinde detaylı planlanır.",
    },
    {
      question: "E-ticaret sitesi SEO için optimize ediliyor mu?",
      answer:
        "Evet, tüm e-ticaret projelerimizde teknik SEO standartları uygulanır: hızlı sayfa yükleme (Core Web Vitals), ürün şema işaretleri (Product Schema), kategoriler için canonical URL'ler, otomatik sitemap.xml ve mobil uyumluluk. Ayrıca başlangıç anahtar kelime optimizasyonu ve meta etikit yapılandırması da dahildir.",
    },
    {
      question:
        "E-ticaret sitesi kurulduktan sonra ürünleri nasıl yöneteceğiz?",
      answer:
        "Kolay kullanımlı admin panel ile teknik bilgi gerektirmeden ürün ekleyebilir, stok güncelleyebilir, siparişleri yönetebilirsiniz. Teslimatta canlı eğitim ve doküman sağlanır. Sonrasında da bakım paketlerimizle sürekli destek alabilirsiniz.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Ticaret Web Tasarım",
    description:
      "Profesyonel e-ticaret web tasarımı ve online mağaza kurulumu. Türkiye'de ödeme ve kargo entegrasyonu, SEO uyumlu platform.",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
      logo: "https://www.webcraft.tr/webcraftLogo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Babataşı Mahallesi, 778 Sokak No: 32/A",
        addressLocality: "Fethiye",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-507-944-17-15",
        contactType: "customer service",
        availableLanguage: "Turkish",
      },
    },
    serviceType: "E-Ticaret Web Tasarım",
    areaServed: { "@type": "Country", name: "Turkey" },
  };

  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "E-Ticaret Web Tasarım", url: "/e-ticaret-web-tasarim" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            E
          </div>
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="lg:w-3/5 text-center lg:text-left">
                <div className="text-sm font-medium text-red-500 uppercase tracking-wider mb-4">
                  Türkiye&apos;ye Özel · İyzico & PayTR · Kargo Entegrasyonu
                </div>
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  E-Ticaret Web Tasarım ve Online Mağaza Kurulumu
                </h1>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-3">
                  Ziyaretçi gelsin, baksın, gitsin — ya da satın alsın.
                </p>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8">
                  Fark, tasarımda değil dönüşüm mimarisinde. Kolay navigasyon,
                  güvenli ödeme ve hızlı yükleme — Türkiye&apos;nin e-ticaret
                  gerçeklerine göre kuruyoruz.
                </p>
                <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                  >
                    Ücretsiz Teklif Al
                  </Link>
                  <a
                    href="tel:+905079441715"
                    className="border border-white/40 text-white hover:bg-white/10 font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Feature checklist */}
              <div className="lg:w-2/5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Her Projede Standart Dahil
                  </h3>
                  {[
                    {
                      icon: CreditCard,
                      label: "Ödeme entegrasyonu",
                      sub: "İyzico, PayTR, PayU — kredi kartı, havale, kapıda ödeme",
                    },
                    {
                      icon: Package,
                      label: "Kargo entegrasyonu",
                      sub: "MNG, Yurtiçi, Aras — otomatik takip ve bildirim",
                    },
                    {
                      icon: Smartphone,
                      label: "Mobil uyumlu tasarım",
                      sub: "Siparişlerin %70'i mobil — her cihazda sorunsuz",
                    },
                    {
                      icon: BarChart3,
                      label: "SEO & analitik",
                      sub: "Ürün şema işaretleri, hızlı yükleme, Google Analytics",
                    },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {label}
                        </p>
                        <p className="text-gray-400 text-xs">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hangi İşletmeler ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                E-Ticaret Web Tasarımı Nedir?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                E-ticaret web tasarımı, ürün keşfinden ödemeye kadar tüm satın
                alma sürecini yöneten online mağaza oluşturmaktır. Güzel
                görünmek yeterli değil — ziyaretçiyi müşteriye dönüştüren bir
                yapı gerekir.
              </p>
              <p className="text-gray-600">
                2015&apos;ten bu yana 100&apos;den fazla e-ticaret projesi
                tamamladık. Türkiye&apos;deki ödeme altyapısını, kargo
                API&apos;lerini, tüketici alışkanlıklarını ve yasal
                gereklilikleri (KVKK, Mesafeli Satış) iyi bilen bir ekibiz.{" "}
                <Link
                  href="/hizmetler/e-ticaret"
                  className="text-red-600 hover:underline font-medium"
                >
                  E-ticaret hizmet detaylarımıza
                </Link>{" "}
                da bakabilirsiniz.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ShoppingCart,
                  title: "Ürün & Kategori Yönetimi",
                  desc: "Sınırsız ürün, özelleştirilebilir kategoriler, varyant yönetimi (renk, beden), toplu içe aktarma ve stok uyarıları.",
                },
                {
                  icon: CreditCard,
                  title: "Güvenli Ödeme Sistemleri",
                  desc: "İyzico, PayTR, PayU sanal pos entegrasyonu. 3D Secure, taksit seçenekleri ve kapıda ödeme. PCI DSS uyumlu.",
                },
                {
                  icon: Package,
                  title: "Kargo & Lojistik",
                  desc: "MNG, Yurtiçi, Aras, Sürat entegrasyonu. Otomatik takip numarası, SMS bildirimi ve iade yönetimi.",
                },
                {
                  icon: BarChart3,
                  title: "Satış Raporlama",
                  desc: "Gerçek zamanlı satış dashboard'u, bestseller analizi, müşteri segmentasyonu ve gelir trendi grafikleri.",
                },
                {
                  icon: Shield,
                  title: "Güvenlik & KVKK",
                  desc: "SSL sertifikası, güvenlik duvarı, KVKK uyumlu müşteri verisi işleme ve Mesafeli Satış Sözleşmesi şablonu.",
                },
                {
                  icon: TrendingUp,
                  title: "SEO & Dönüşüm Optimizasyonu",
                  desc: "Ürün şema markup'ı, hızlı yükleme (Core Web Vitals), SEO dostu URL yapısı ve dönüşüm izleme kurulumu.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 border border-gray-200 rounded-xl hover:border-red-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Türkiye'ye Özel ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-medium text-red-500 uppercase tracking-wider mb-4">
                  Türkiye&apos;ye Özel
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Türkiye&apos;nin E-Ticaret Gerçeklerine Göre Kuruyor
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Global e-ticaret platformlarının şablonları Türkiye&apos;nin
                  ödeme altyapısına, kargo ekosistemi ve tüketici beklentilerine
                  tam uymaz. Bizim yaklaşımımız yerelden başlar.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Yerel ödeme yöntemleri",
                      desc: "İyzico ve PayTR sanal pos, Türk bankalarının taksit seçenekleri, BKM Express — müşteriler alışkın oldukları sistemlerle ödeme yapar.",
                    },
                    {
                      title: "Yerli kargo entegrasyonu",
                      desc: "MNG, Yurtiçi, Aras, Sürat ve PTT API'leriyle doğrudan bağlantı. Kargo bedelini otomatik hesaplama ve sipariş takip sayfası.",
                    },
                    {
                      title: "KVKK uyumlu mimari",
                      desc: "Müşteri verisi işleme aydınlatma metni, çerez onayı ve Mesafeli Satış Sözleşmesi standart olarak eklenir.",
                    },
                    {
                      title: "Türkçe destek",
                      desc: "Admin paneli, müşteri bildirimleri ve destek — tamamı Türkçe. E-fatura entegrasyonu için de çözüm üretiyoruz.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium text-sm">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "100+", label: "E-ticaret projesi" },
                  { stat: "4–8 hf", label: "Ortalama teslim" },
                  {
                    stat: "%70",
                    label: "Sipariş mobilden — her site mobil öncelikli",
                  },
                  { stat: "2015", label: "E-ticaret deneyimi başlangıcı" },
                ].map(({ stat, label }) => (
                  <div
                    key={stat}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-red-500 mb-2">
                      {stat}
                    </p>
                    <p className="text-gray-300 text-xs leading-snug">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Paketler & Fiyatlar ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                E-Ticaret Web Tasarım Fiyatları 2026
              </h2>
              <p className="text-gray-500 text-sm">
                Fiyatlar projenin kapsamına, ürün sayısına ve entegrasyon
                ihtiyaçlarına göre değişir. Kesin fiyat keşif görüşmesinde
                belirlenir — aşağıdakiler referans aralığıdır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  name: "Başlangıç",
                  price: "18.000 – 30.000₺",
                  badge: null,
                  desc: "50 ürüne kadar, standart kategoriler, 1 ödeme sistemi, 1 kargo entegrasyonu. Hızlı başlangıç için.",
                  features: [
                    "Responsive tasarım (mobil öncelikli)",
                    "İyzico veya PayTR ödeme",
                    "1 kargo firması entegrasyonu",
                    "Ürün & stok yönetim paneli",
                    "SSL + KVKK uyumluluk",
                    "Google Analytics kurulumu",
                  ],
                },
                {
                  name: "Büyüme",
                  price: "30.000 – 60.000₺",
                  badge: "En Çok Tercih",
                  desc: "500 ürüne kadar, çoklu ödeme seçenekleri, tüm büyük kargo firmaları, satış raporlama. Büyüyen işletmeler için.",
                  features: [
                    "Tüm ödeme yöntemleri (kart, havale, kapıda)",
                    "Çoklu kargo entegrasyonu",
                    "Gelişmiş satış raporları",
                    "SEO başlangıç optimizasyonu",
                    "Ürün şema markup (Google Shopping)",
                    "Promosyon & kupon sistemi",
                  ],
                },
                {
                  name: "Kurumsal",
                  price: "60.000 – 120.000₺+",
                  badge: null,
                  desc: "Sınırsız ürün, çoklu depo, e-fatura entegrasyonu, özel CRM bağlantısı. Büyük hacimli operasyonlar için.",
                  features: [
                    "Çoklu depo & şube yönetimi",
                    "ERP / muhasebe entegrasyonu",
                    "E-fatura API bağlantısı",
                    "Özelleştirilmiş raporlama",
                    "SLA garantili öncelikli destek",
                    "Pazaryeri entegrasyonu",
                  ],
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative border rounded-2xl overflow-hidden flex flex-col ${
                    pkg.badge
                      ? "border-red-500 shadow-lg shadow-red-100"
                      : "border-gray-200"
                  }`}
                >
                  {pkg.badge && (
                    <div className="bg-red-600 text-white text-xs font-bold text-center py-1.5 tracking-wide">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">
                      {pkg.name}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mb-4">
                      {pkg.price}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {pkg.desc}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm">
              Nisan 2026 itibarıyla referans aralığı. Kesin fiyat için{" "}
              <Link href="/iletisim" className="text-red-600 hover:underline">
                ücretsiz teklif alın
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── Süreç ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Nasıl İlerliyor?
              </h2>
              <p className="text-gray-400">
                Her aşama sonunda sizin onayınız alınır.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "01",
                  title: "Keşif & Planlama",
                  desc: "Ürün yapısı, hedef kitle ve entegrasyon ihtiyaçları belirlenir. Sabit fiyat ve takvim sözleşmeye bağlanır.",
                },
                {
                  step: "02",
                  title: "Tasarım",
                  desc: "Ana sayfadan ürün sayfasına, sepetten ödemeye — dönüşüm odaklı wireframe ve tasarım.",
                },
                {
                  step: "03",
                  title: "Geliştirme",
                  desc: "Platform, ödeme ve kargo entegrasyonları, admin paneli. Gerçek ürün verileriyle test.",
                },
                {
                  step: "04",
                  title: "Test & Optimizasyon",
                  desc: "Gerçek ödeme testi, mobil uyumluluk, hız optimizasyonu ve güvenlik taraması.",
                },
                {
                  step: "05",
                  title: "Yayın & Eğitim",
                  desc: "Site yayına alınır, admin paneli eğitimi verilir. İlk ay yakın izleme ve destek.",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                    {step}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Neden WebCraft + CTA ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neden WebCraft?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "100+ tamamlanmış e-ticaret projesi",
                    desc: "Moda, gıda, hırdavat, kozmetik, turizm — farklı sektörlerden yüzlerce ürünlü mağazalar kurduk. Sorunları önceden biliyoruz.",
                  },
                  {
                    title: "Türkiye entegrasyonları canlı deneyimle",
                    desc: "İyzico, PayTR, MNG, Yurtiçi, Logo ERP — bunların API'lerini ilk kez denemiyoruz. Canlı projelerden bilgimiz var.",
                  },
                  {
                    title: "Teslimden sonra da yanınızdayız",
                    desc: "Bakım paketleri, içerik güncelleme, sezon öncesi yük testleri. E-ticaret bir kez kurulan değil, sürekli büyütülen bir yapıdır.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-red-100 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center bg-white text-red-600 font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/hizmetler/e-ticaret"
                  className="inline-flex items-center justify-center border border-white/60 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-8 rounded-full hover:bg-white/10 transition-colors duration-300 text-xs sm:text-base"
                >
                  Hizmet Detayları
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── İlgili Kaynaklar ── */}
        <section className="py-16 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              E-Ticaret İçin Hazırladığımız Kaynaklar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: "/blog/online-magaza-kurulumu",
                  label: "Rehber",
                  title: "Online Mağaza Kurulumu — Adım Adım",
                  desc: "Platform seçimi, ödeme sistemi kurulumu ve ilk satışa kadar pratik adımlar.",
                },
                {
                  href: "/blog/kobi-dijital-donusum-rehberi",
                  label: "Rehber",
                  title: "KOBİ Dijital Dönüşüm Rehberi",
                  desc: "Küçük işletmeler için e-ticaret, web sitesi ve dijital pazarlama stratejileri.",
                },
                {
                  href: "/hizmetler/yazilim-gelistirme",
                  label: "Hizmet",
                  title: "Özel Yazılım Çözümleri",
                  desc: "Standart e-ticaret platformlarının sınırlarını aşan, işletmenize özel çözümler.",
                },
              ].map(({ href, label, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block p-5 border border-gray-200 rounded-xl hover:border-red-200 hover:shadow-sm transition-all group"
                >
                  <span className="inline-block text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
                    {label}
                  </span>
                  <h3 className="text-gray-900 font-semibold text-sm mb-2 group-hover:text-red-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <ServiceFAQSection faqs={faqs} schema={faqSchema} />
        </Suspense>

        {/* ── Related Services ── */}
        <Suspense fallback={<SectionSkeleton height="h-48" />}>
          <RelatedServices currentSlug="e-ticaret" />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

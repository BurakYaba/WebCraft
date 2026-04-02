import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Link from "next/link";
import ChatbotFAQAccordion from "@/components/ChatbotFAQAccordion";
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Bot,
  Users,
  ChevronRight,
  Phone,
  ShoppingCart,
  Stethoscope,
  Building2,
  Database,
  Settings,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Yapay Zeka Chatbot Geliştirme | WhatsApp, Web, GPT Entegrasyonu | WebCraft",
  description:
    "İşletmenize özel yapay zeka chatbot çözümleri. WhatsApp Business, web widget, Telegram, Instagram DM entegrasyonu. GPT tabanlı, Türkçe, 7/24 otomatik müşteri desteği. Sektöre özel bilgi tabanı, insan devir protokolü. Ücretsiz keşif görüşmesi.",
  keywords:
    "yapay zeka chatbot, AI chatbot geliştirme, WhatsApp chatbot, GPT chatbot, chatbot fiyatları, müşteri hizmetleri otomasyonu, Türkçe chatbot, chatbot entegrasyonu, web sitesi chatbot, akıllı chatbot",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/hizmetler/yapay-zeka-chatbot",
  },
  openGraph: {
    title:
      "Yapay Zeka Chatbot Geliştirme | WhatsApp, Web, GPT Entegrasyonu | WebCraft",
    description:
      "İşletmenize özel yapay zeka chatbot. WhatsApp, web widget, Telegram entegrasyonu. GPT tabanlı Türkçe chatbot, 7/24 müşteri desteği.",
    url: "https://www.webcraft.tr/hizmetler/yapay-zeka-chatbot",
    siteName: "WebCraft",
    images: [
      {
        url: "/bento/chatbot.webp",
        width: 1200,
        height: 630,
        alt: "Yapay Zeka Chatbot Geliştirme — WebCraft",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka Chatbot Geliştirme | WebCraft",
    description:
      "WhatsApp, web, GPT tabanlı AI chatbot. Türkçe, 7/24, sektöre özel bilgi tabanı.",
    images: ["/bento/chatbot.webp"],
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

export default function YapayZekaChatbotPage() {
  const faqs = [
    {
      question: "Yapay zeka chatbot kaç haftada teslim edilir?",
      answer:
        "Kapsama bağlıdır: yalnızca web sitesi widget'ı + SSS bilgi tabanı içeren bir chatbot 2–3 haftada teslim edilir. WhatsApp Business API + CRM entegrasyonu + çoklu sektör bilgi tabanı gerektiren kapsamlı çözümler 5–8 hafta alır. Keşif görüşmesinden sonra sabit takvim ve kilometre taşları sözleşmeye bağlanır.",
    },
    {
      question:
        "Chatbot yanlış yanıt verirse ne olur — hallüsinasyon riski var mı?",
      answer:
        "Her proje tesliminde iki güvenlik katmanı kurulur: (1) Sınırlı bağlam — chatbot yalnızca size ait bilgi tabanı içinde yanıtlar; kendi yorumunu veya internetten bilgi üretmez. (2) Güven eşiği — chatbotun yanıt güveni %80'in altına düşerse otomatik olarak 'Bu konuda size yardımcı olmak için sizi insan temsilcimize bağlıyorum' mesajı gönderir. Yanlış bilgi vermek sıfır maliyeti olmayan bir risk; bu yüzden sınırlı bağlam mimarisi standart uygulamamızdır.",
    },
    {
      question: "WhatsApp Business API'si açma zorunluluğumuz var mı?",
      answer:
        "WhatsApp entegrasyonu için Meta onaylı bir WhatsApp Business API hesabı gerekir. Türkiye'de bu hesabın açılması için şirket belgeleri ve Meta başvuru süreci gerekiyor — yaklaşık 1–2 hafta. Bu süreci sizin adınıza yönetiyoruz. Web widget veya Telegram ilk aşamada daha hızlı başlangıç için alternatif olabilir.",
    },
    {
      question: "Bot ile mevcut CRM/ERP sistemimiz konuşabilir mi?",
      answer:
        "Evet. Chatbotu Salesforce, HubSpot, Zoho, Ticimax, Shopify ve Logo/Netsis gibi sistemlerle API üzerinden entegre ediyoruz. Pratik örnekler: müşteri siparişini CRM'den çekip anlık durum bildirimi yapmak, WooCommerce stok sorgusunu yanıtlamak, ya da sohbet sonunda formdaki lead kaydını HubSpot'a otomatik işlemek.",
    },
    {
      question: "Fiyatlandırma nasıl yapılıyor — aylık ücret var mı?",
      answer:
        "İki bileşen var: (1) Geliştirme ücreti — tek seferlik, kapsama göre değişir (aşağıdaki fiyatı etkileyen kalemler tablosuna bakın). (2) Aylık işletim — API kullanım maliyeti (OpenAI, Meta) + altyapı hosting + izleme. Ortalama bir KOBİ için aylık işletim maliyeti 1.500–4.000₺ arasında değişir. Yüksek konuşma hacminde token optimizasyonu yaparak bu maliyeti baskı altında tutuyoruz.",
    },
    {
      question:
        "Chatbotu sonradan güncelleyebilir miyiz — bilgi tabanına yeni konular ekleyebilir miyiz?",
      answer:
        "Her proje tesliminde basit bir içerik yönetim paneli veya Google Sheets tabanlı bilgi tabanı güncelleme arayüzü teslim edilir. Teknik bilgi gerektirmeden yeni SSS ekleyebilir, fiyatları güncelleyebilir ve ürün bilgilerini değiştirebilirsiniz. Büyük çaplı mimari değişiklikler için bakım paketi kapsamında destek sağlanır.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Yapay Zeka Chatbot Geliştirme",
    description:
      "İşletmelere özel GPT tabanlı AI chatbot çözümleri. WhatsApp Business, web widget, Telegram entegrasyonu. Türkçe doğal dil işleme, sektöre özel bilgi tabanı, insan devir protokolü.",
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
    serviceType: "Yapay Zeka Chatbot Geliştirme",
    areaServed: { "@type": "Country", name: "Turkey" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chatbot Çözümleri",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          itemOffered: {
            "@type": "Service",
            name: "Web Widget Chatbot",
            description:
              "Web sitesi için GPT tabanlı chatbot widget, SSS bilgi tabanı, lead toplama",
          },
        },
        {
          "@type": "Offer",
          position: 2,
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp Business Chatbot",
            description:
              "Meta onaylı WhatsApp Business API entegrasyonu, çok kanallı chatbot",
          },
        },
        {
          "@type": "Offer",
          position: 3,
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal Çok Kanallı Chatbot",
            description:
              "CRM/ERP entegrasyonu, rol tabanlı erişim, sektöre özel bilgi tabanı",
          },
        },
      ],
    },
  };

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

  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Hizmetler", url: "/hizmetler" },
      {
        name: "Yapay Zeka Chatbot",
        url: "/hizmetler/yapay-zeka-chatbot",
      },
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
            AI
          </div>
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="lg:w-3/5 text-center lg:text-left">
                <div className="text-sm font-medium text-red-500 uppercase tracking-wider mb-4">
                  WhatsApp · Web · GPT Entegrasyonu
                </div>
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  Yapay Zeka Chatbot Geliştirme Hizmeti — Sektörünüze Özel
                </h1>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-3">
                  &quot;Siparişim nerede?&quot;, &quot;Bu ürün stokta var
                  mı?&quot;, &quot;Hangi saatlerde açıksınız?&quot;
                </p>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8">
                  Bu soruların %70&apos;i aslında otomatik cevaplanabilir.
                  İşletmenizin kendi verisiyle eğitilmiş, yanlış bilgi üretmeyen
                  ve gerektiğinde insan temsilciye devreden bir yapay zeka
                  chatbot sistemi geliştiriyoruz.
                </p>
                <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                  >
                    Ücretsiz Keşif Görüşmesi
                  </Link>
                  <a
                    href="tel:+905079441715"
                    className="border border-white/40 text-white hover:bg-white/10 font-bold py-2.5 sm:py-3 px-5 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base whitespace-nowrap"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Stats/proof card */}
              <div className="lg:w-2/5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Ne İçeriyor?
                  </h3>
                  {[
                    {
                      icon: Bot,
                      label: "GPT tabanlı doğal dil modeli",
                      sub: "Türkçe anlama, bağlam tutma, çok turlu sohbet",
                    },
                    {
                      icon: MessageSquare,
                      label: "Web + WhatsApp + daha fazlası",
                      sub: "Web widget, WhatsApp, Telegram, Instagram DM",
                    },
                    {
                      icon: Users,
                      label: "İnsan devir protokolü",
                      sub: "Bot çözemezse konuşma geçmişiyle yönlendirme",
                    },
                    {
                      icon: Settings,
                      label: "CRM & e-ticaret entegrasyonu",
                      sub: "HubSpot, Shopify, WooCommerce, Logo ERP",
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

        {/* ── Sektör Vertikalleri ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                Hangi İşletmeler İçin Uygun?
              </h2>
              <p className="text-lg text-gray-600">
                Genel amaçlı bir chatbot değil — sektörünüzün terminolojisini,
                iş akışlarını ve müşteri sorularını bilen bir asistan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  Icon: ShoppingCart,
                  sector: "E-Ticaret & Perakende",
                  color: "text-purple-600",
                  bg: "bg-purple-50 border-purple-200",
                  problems: [
                    '"Siparişim nerede?" → kargo takip bilgisini anında yanıtlar',
                    '"Bu beden var mı?" → stok durumunu gerçek zamanlı sorgular',
                    '"İade nasıl yapılır?" → adım adım yönlendirir',
                  ],
                  kpi: "İlk yanıt süresi: 45 dk → 3 sn",
                },
                {
                  Icon: Stethoscope,
                  sector: "Sağlık & Klinik",
                  color: "text-green-600",
                  bg: "bg-green-50 border-green-200",
                  problems: [
                    '"Dr. X ne zaman müsait?" → randevu takvimini verir',
                    '"Muayene ücreti ne kadar?" → fiyat listesinden yanıtlar',
                    "Tıbbi tavsiye sınırını aşmadan bilgi verir",
                  ],
                  kpi: "Telefon trafiğinde %55 azalma",
                },
                {
                  Icon: Building2,
                  sector: "Gayrimenkul & Turizm",
                  color: "text-orange-600",
                  bg: "bg-orange-50 border-orange-200",
                  problems: [
                    '"Hangi daireler satışta?" → CRM\'den anlık müsaitlik',
                    '"Fethiye turu ne zaman?" → takvim ve rezervasyon',
                    "İletişim bilgilerini toplar, sıcak lead iletir",
                  ],
                  kpi: "Lead yanıt hızı: 4 saat → anlık",
                },
              ].map(({ Icon, sector, color, bg, problems, kpi }) => (
                <div
                  key={sector}
                  className={`border rounded-xl p-6 hover:shadow-md transition-all ${bg}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${color} flex-shrink-0`} />
                    <h3 className={`font-bold text-gray-900 text-base`}>
                      {sector}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {problems.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
                      >
                        <ChevronRight
                          className={`w-3.5 h-3.5 ${color} flex-shrink-0 mt-0.5`}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-current/10">
                    <p className="text-xs font-medium text-gray-500">{kpi}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-3">
                E-ticaret, sağlık, hukuk, eğitim, turizm ve daha fazlası
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline text-sm"
              >
                Sektörünüze özel görüşme yapın{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Chatbot Nasıl Çalışır ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-7 h-7 text-red-600" />
                <span className="text-red-600 font-medium uppercase text-sm tracking-wide">
                  Nasıl Çalışır?
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Chatbot Nasıl Çalışır?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                İşletmenizin verileri toplanır, bilgi tabanı oluşturulur ve
                chatbot yalnızca bu verilerle çalışır — rastgele bilgi üretmez,
                emin olamazsa insan temsilciye devreder.{" "}
                <strong>Riskli değil, kontrollü.</strong>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "1",
                  title: "Verileriniz toplanır",
                  desc: "SSS sayfanız, ürün kataloğunuz, fiyat listeniz ve politikalarınız bilgi tabanına dönüşür.",
                },
                {
                  step: "2",
                  title: "Chatbot eğitilir",
                  desc: "Yalnızca sizin verilerinizle çalışır. Tahmin yapmaz, uydurmaz.",
                },
                {
                  step: "3",
                  title: "Canlıya alınır",
                  desc: "Web, WhatsApp veya tercih ettiğiniz kanalda yayına girer. İlk yanıt 2–3 saniye.",
                },
                {
                  step: "4",
                  title: "Siz güncellersiniz",
                  desc: "Fiyat veya bilgi değiştiğinde Google Sheets veya CMS panelinden güncellersiniz. Teknik bilgi gerekmez.",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl bg-gray-50"
                >
                  <div className="w-10 h-10 min-w-[2.5rem] rounded-full border-2 border-red-600 bg-red-600/10 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-base">
                    {step}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm mb-1.5">
                      {title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Güvenlik Katmanı ── */}
        <section className="py-16 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                <span className="text-red-500 font-medium uppercase text-sm tracking-wide">
                  Güvenlik
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Bot Bitiyor, İnsan Başlıyor — Sessizce
              </h2>
              <p className="text-gray-300">
                Her projede standart olarak kurulur. Chatbot müşteri
                kaybettirmez.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: "Güven eşiği",
                  desc: "Bilgi tabanıyla örtüşme %80'in altına düşerse 'Sizi uzmanımıza bağlıyorum' mesajı otomatik gönderilir.",
                },
                {
                  icon: Users,
                  title: "Sıcak devir",
                  desc: "Temsilci tüm konuşma geçmişiyle devralır. Müşteri aynı şeyi iki kez anlatmaz.",
                },
                {
                  icon: Phone,
                  title: "Mesai dışı akış",
                  desc: "'Sizi yarın sabah arayacağız' + iletişim bilgisi toplama akışı otomatik devreye girer.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-white font-semibold text-sm mb-2">
                    {title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fiyatı Etkileyen Kalemler ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Yapay Zeka Chatbot Fiyatları 2026
              </h2>
              <p className="text-gray-500 text-sm">
                GPT tabanlı, bilgi tabanıyla eğitilmiş, gerçek entegrasyon
                içeren sistemler — hazır SaaS botlarla karıştırmayın. Her proje
                için keşif görüşmesinde sabit fiyat belirlenir.
              </p>
            </div>

            {/* ── Paket Sistemi ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  name: "Başlangıç Paketi",
                  price: "9.900 – 18.000₺",
                  badge: null,
                  monthly: "1.200 – 2.500₺/ay",
                  desc: "Tek kanallı web chatbot. SSS bilgi tabanı, GPT entegrasyonu, anlık yanıt — hızlı başlangıç.",
                  features: [
                    "Web sitesi widget",
                    "SSS & ürün bilgi tabanı",
                    "GPT tabanlı doğal dil",
                    "İnsan devir protokolü",
                    "Güncelleme arayüzü",
                  ],
                },
                {
                  name: "Büyüme Paketi",
                  price: "18.000 – 35.000₺",
                  badge: "En Çok Tercih",
                  monthly: "2.000 – 4.500₺/ay",
                  desc: "Web + WhatsApp çift kanal, CRM entegrasyonu ve lead toplama. KOBİ'lerin en çok tercih ettiği kapsam.",
                  features: [
                    "Web widget + WhatsApp Business",
                    "CRM entegrasyonu (HubSpot / Zoho)",
                    "Lead toplama & bildirim",
                    "Analitik dashboard",
                    "Aylık optimizasyon raporu",
                  ],
                },
                {
                  name: "Pro Paket",
                  price: "35.000 – 65.000₺+",
                  badge: null,
                  monthly: "3.500 – 7.000₺/ay",
                  desc: "Çok kanallı dağıtım, ERP/e-ticaret entegrasyonu ve kurumsal bilgi tabanı mimarisi.",
                  features: [
                    "3+ kanal (Web, WA, Telegram, IG)",
                    "CRM + ERP + e-ticaret API",
                    "Rol tabanlı erişim",
                    "Özel senaryo & akış tasarımı",
                    "SLA garantili destek",
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
                    <p className="text-2xl font-bold text-gray-900 mb-1">
                      {pkg.price}
                    </p>
                    <p className="text-xs text-gray-400 mb-4">
                      + {pkg.monthly} işletim
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

            {/* ── KOBİ H3 ── */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Küçük İşletmeler İçin Chatbot Maliyeti
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                KOBİ ve küçük işletmeler için yapay zeka chatbot geliştirme
                maliyeti genellikle 9.900 – 18.000₺ tek seferlik yatırım ve
                aylık 1.200 – 2.500₺ işletim gideriyle başlar. Bu rakamlar; web
                sitesine entegre, sektöre özel bilgi tabanıyla eğitilmiş, 7/24
                yanıt veren bir GPT çözümü içindir — hazır SaaS araçların
                sunduğu jenerik botlardan farklı olarak markanızın sesiyle
                konuşur. Küçük işletmeler için en yaygın giriş noktası{" "}
                <strong>Başlangıç Paketi</strong> olup ölçekle birlikte WhatsApp
                entegrasyonu ve CRM bağlantısı sonradan eklenebilir.
              </p>
            </div>

            <p className="text-center text-gray-400 text-sm">
              Fiyatlar Nisan 2026 itibarıyla referans aralığıdır. Kesin fiyat
              keşif görüşmesinde belirlenir ve sözleşmeye bağlanır.
            </p>
          </div>
        </section>

        {/* ── Süreç ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Teslim Süreci
              </h2>
              <p className="text-gray-400">
                4 aşama, her aşama sonunda sizin onayınız alınır.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Keşif & Kapsam",
                  desc: "Kanal tercihleri, mevcut sistemler ve bütçe görüşmesi. Sabit fiyatlı kapsam belgesi + takvim.",
                  weeks: "1 hafta",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Bilgi Tabanı & Prototip",
                  desc: "İçerik toplama ve yapılandırma. Demo ortamında test edersiniz, onay sonrası devam edilir.",
                  weeks: "1–2 hafta",
                  icon: Database,
                },
                {
                  step: "03",
                  title: "Entegrasyon & Test",
                  desc: "Kanal ve CRM bağlantıları, güven eşiği kalibrasyonu, 100+ test sohbeti ile doğruluk kontrolü.",
                  weeks: "1–3 hafta",
                  icon: Settings,
                },
                {
                  step: "04",
                  title: "Yayın & İzleme",
                  desc: "Canlıya geçiş. İlk 30 gün günlük izleme, sonrasında aylık optimizasyon.",
                  weeks: "Süregelen",
                  icon: TrendingUp,
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <span className="text-red-400 text-xs font-medium bg-red-600/10 px-2 py-1 rounded-full">
                      {step.weeks}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── E-E-A-T ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neden WebCraft?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Chatbot sadece sizin verinizle çalışır",
                    desc: "Bilgi uydurmaz, emin olmadığında devreder. Müşteri kaybettirmez — kontrollü çalışır.",
                  },
                  {
                    title: "Türkçe odaklı, sektöre özel",
                    desc: "Hazır SaaS araç değil. İşletmenizin sesiyle konuşan, gerçek sorularınıza cevap veren bir sistem.",
                  },
                  {
                    title: "Entegrasyon deneyimi",
                    desc: "WhatsApp Business API, Salesforce, HubSpot, WooCommerce, Logo ERP — bunların hepsini canlı projelerde entegre ettik.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
                  Ücretsiz Keşif Görüşmesi
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/hizmetler/yapay-zeka-otomasyon"
                  className="inline-flex items-center justify-center border border-white/60 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-8 rounded-full hover:bg-white/10 transition-colors duration-300 text-xs sm:text-base"
                >
                  AI Otomasyon Hizmeti
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Türkiye'de Yapay Zeka Chatbot Hizmeti ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Türkiye&apos;de Yapay Zeka Chatbot Hizmeti
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    WebCraft olarak Fethiye ve Muğla merkezimizden
                    Türkiye&apos;nin dört bir yanındaki işletmelere yapay zeka
                    chatbot geliştirme hizmeti sunuyoruz. Fethiye ve
                    Muğla&apos;daki işletmeler için yerinde analiz ve özel
                    entegrasyon desteği de sunuyoruz. Türkçe NLP&apos;nin
                    inceliklerini — ek tabanlı yapısını, sektörel jargonu ve
                    bölgesel diyalog kalıplarını — iyi anlayan bir ekibiz.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Global SaaS chatbot araçlarının aksine her projeyi sıfırdan
                    müşterinin kendi verisi ve bilgi tabanıyla eğitiyoruz.
                    Sonuç: jenerik yanıtlar vermeyen, markanızın sesiyle
                    konuşan, müşterinizin sorduğu gerçek soruları anlayan bir
                    chatbot. Projelerinize{" "}
                    <Link
                      href="/hizmetler/web-tasarim"
                      className="text-red-600 hover:underline font-medium"
                    >
                      web tasarım hizmetimizle
                    </Link>{" "}
                    ya da{" "}
                    <Link
                      href="/hizmetler/yapay-zeka-otomasyon"
                      className="text-red-600 hover:underline font-medium"
                    >
                      AI otomasyon çözümlerimizle
                    </Link>{" "}
                    entegre tam bir dijital altyapı sunuyoruz.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "İstanbul, Ankara, İzmir, Antalya — proje lokasyonu sınırsız",
                    "Fethiye / Muğla için yerinde analiz ve entegrasyon desteği",
                    "Türkçe odaklı NLP eğitimi ve prompt mühendisliği",
                    "KVKK uyumlu veri işleme ve Türkiye hosting seçeneği",
                    "Yerel ERP sistemleri (Logo, Netsis, Mikro) entegrasyon deneyimi",
                    "Türkçe müşteri desteği, sözleşme ve faturalama",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Chatbot vs Canlı Destek ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Yapay Zeka Chatbot vs Canlı Destek
              </h2>
              <p className="text-gray-300 mb-10">
                &quot;Chatbot mı, insan desteği mi?&quot; yanlış soru. Doğru
                soru şu: hangi sorular otomatikleştirilebilir, hangilerinde
                insana ihtiyaç var? Chatbot %70&apos;i kapsar; insan ekibiniz
                kalan %30&apos;a odaklanır.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left text-gray-400 font-medium pb-4 pr-6 text-base">
                        Kriter
                      </th>
                      <th className="text-center text-red-400 font-bold pb-4 px-4 text-base">
                        Yapay Zeka Chatbot
                      </th>
                      <th className="text-center text-gray-400 font-medium pb-4 pl-4 text-base">
                        Canlı Destek
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        kriter: "Yanıt hızı",
                        bot: "Anlık (0 sn)",
                        human: "2 dk – 4 saat",
                      },
                      {
                        kriter: "Çalışma saati",
                        bot: "7/24, tatil yok",
                        human: "Mesai saatleri",
                      },
                      {
                        kriter: "Eş zamanlı kapasite",
                        bot: "Sınırsız",
                        human: "Temsilci başına 1–3",
                      },
                      {
                        kriter: "Maliyet (aylık)",
                        bot: "1.500 – 8.000₺",
                        human: "15.000₺+ / kişi",
                      },
                      {
                        kriter: "Duygusal zeka",
                        bot: "Sınırlı",
                        human: "Güçlü",
                      },
                      {
                        kriter: "Karmaşık durumlar",
                        bot: "Eskalasyon yapar",
                        human: "Çözer",
                      },
                      {
                        kriter: "Tutarlılık",
                        bot: "Her zaman aynı",
                        human: "Değişken",
                      },
                    ].map(({ kriter, bot, human }) => (
                      <tr
                        key={kriter}
                        className="border-b border-white/5 last:border-0"
                      >
                        <td className="py-3 pr-6 text-gray-300 font-medium">
                          {kriter}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-white bg-red-600/20 px-3 py-1 rounded-full text-xs font-medium">
                            {bot}
                          </span>
                        </td>
                        <td className="py-3 pl-4 text-center text-gray-400">
                          {human}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white text-sm leading-relaxed">
                  <strong className="text-red-400">
                    Hibrit yaklaşım önerisi:
                  </strong>{" "}
                  Chatbotu ön hat olarak konuşlandırın — sık sorulan soruları,
                  lead toplamayı ve bilgi sorgularını otomatikleştirin. İnsan
                  ekibiniz yalnızca chatbotun eskalasyon yaptığı yüksek değerli
                  konuşmalara katılsın. Bu yapı müşteri memnuniyetini artırırken
                  destek maliyetini düşürür.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 text-center">
                Sık Sorulan Sorular
              </h2>
              <ChatbotFAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-red-600">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hemen Başlayın
            </h2>
            <p className="text-xl text-red-100 mb-3 max-w-2xl mx-auto">
              Chatbot kullanan işletmeler müşterilerine rakiplerinden önce yanıt
              veriyor.
            </p>
            <p className="text-lg text-red-200 mb-8 max-w-2xl mx-auto">
              Siz yanıt verene kadar müşteriniz çoktan rakibinize yazmış
              olabilir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Keşif Görüşmesi
              </Link>
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
      </main>
    </>
  );
}

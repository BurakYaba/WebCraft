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
  FileText,
  Mail,
  BarChart3,
  Workflow,
  Database,
  Settings,
  TrendingUp,
  Users,
  Clock,
  AlertTriangle,
  ShoppingCart,
  Building2,
  Briefcase,
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
  title: "Yapay Zeka İş Otomasyonu | AI Otomasyon Hizmeti | WebCraft",
  description:
    "Yapay zeka ile iş süreçleri otomasyonu. Akıllı belge işleme, e-posta otomasyonu, veri analizi ve iş akışı optimizasyonu. Fatura okuma, sipariş işleme, lead yönetimi otomasyonu. Tekrarlayan görevleri ortadan kaldırın — ücretsiz keşif görüşmesi.",
  keywords:
    "yapay zeka otomasyon, AI otomasyon, iş süreçleri otomasyonu, akıllı belge işleme, e-posta otomasyonu, iş akışı otomasyonu, RPA, yapay zeka entegrasyonu, otomasyon çözümleri, AI iş otomasyonu, süreç otomasyonu, fatura otomasyonu",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/hizmetler/yapay-zeka-otomasyon",
  },
  openGraph: {
    title: "Yapay Zeka İş Otomasyonu | AI Otomasyon Hizmeti | WebCraft",
    description:
      "Belge işleme, e-posta otomasyonu, veri analizi. Tekrarlayan iş görevlerini yapay zeka ile otomatikleştirin. Türkçe destek, yerel entegrasyon.",
    url: "https://www.webcraft.tr/hizmetler/yapay-zeka-otomasyon",
    siteName: "WebCraft",
    images: [
      {
        url: "/bento/automation.webp",
        width: 1200,
        height: 630,
        alt: "Yapay Zeka İş Otomasyonu — WebCraft",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka İş Otomasyonu | WebCraft",
    description:
      "Belge işleme, e-posta, veri analizi — tekrarlayan görevleri AI ile otomatikleştirin.",
    images: ["/bento/automation.webp"],
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

export default function YapayZekaOtomasyonPage() {
  const faqs = [
    {
      question: "AI otomasyon projesi ne kadar sürede tamamlanır?",
      answer:
        "Tek bir süreç otomasyonu (örneğin yalnızca fatura işleme veya yalnızca e-posta sınıflandırma) genellikle 2–4 haftada teslim edilir. 2–3 süreci kapsayan entegre otomasyon projesi 5–10 hafta alır. Büyük ölçekli kurumsal otomasyon 10–18 hafta. Her projede keşif görüşmesinin ardından sabit takvim ve kilometre taşları sözleşmeye bağlanır; süpriz olmaz.",
    },
    {
      question: "Hangi iş süreçleri otomatikleştirilebilir?",
      answer:
        "Basit kural: tekrarlayan, belirli bir mantığa uyan, veri girişi veya okuma içeren her şey otomatikleştirilebilir. Pratik örnekler: e-posta sınıflandırma ve önceliklendirme, fatura/dekont PDF'inden veri çıkarma, kargo takip bildirimleri, sipariş durum güncellemeleri, lead form verilerini CRM'e işleme, stok uyarıları, randevu hatırlatmaları, sosyal medya yorum sınıflandırma, rapor oluşturma.",
    },
    {
      question: "Mevcut sistemlerimizle (ERP, CRM) entegre olabilir mi?",
      answer:
        "Evet. API desteği olan her sistem entegre edilebilir: Salesforce, HubSpot, Zoho, Logo ERP, Netsis, Mikro, WooCommerce, Shopify, Ticimax, İdeasoft, Outlook/Gmail. API'si olmayan eski sistemlerde ise ekran okuma (RPA) yaklaşımı kullanılabilir. Her entegrasyon için keşif görüşmesinde fizibilite kontrol edilir.",
    },
    {
      question: "Otomasyon ne kadar güvenilir — hata yaparsa ne olur?",
      answer:
        "İyi tasarlanmış bir otomasyon %95+ doğrulukla çalışır. Kritik süreçlerde 'insan onayı' adımları (human-in-the-loop) eklenir; düşük güvenli işlemler sisteme işlenmez, insan incelemesine alınır. Ayrıca her projede anomali tespiti ve hata loglama kurulur — hata olduğunda sistem size bildirir, işlemi sessizce geçmez.",
    },
    {
      question: "Fiyatlandırma nasıl yapılıyor?",
      answer:
        "İki bileşen var: (1) Tek seferlik geliştirme ücreti — otomasyon edilecek süreç sayısı, karmaşıklığı ve entegrasyon ihtiyacına göre değişir. (2) Aylık işletim — altyapı hosting + API kullanım maliyeti + izleme. Aylık işletim tipik KOBİ için 800–3.000₺ arasında. Yatırım genellikle 3–6 ay içinde geri döner; keşif görüşmesinde size özel ROI analizi yaparız.",
    },
    {
      question: "Çalışanlarımızın işini alacak mı?",
      answer:
        "Hayır — çalışanların düşük değerli, sıkıcı görevlerden kurtulmasını sağlar. Pratik sonuç: muhasebe elemanı fatura kopyalamak yerine analiz yapar; satış ekibi lead takibini otomasyona bırakıp yalnızca sıcak adaylarla konuşur; operasyon ekibi e-posta yönetmek yerine müşteri sorunlarını çözer. Araştırmalar iş memnuniyetinin arttığını gösteriyor.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Yapay Zeka İş Otomasyonu",
    description:
      "Yapay zeka ile iş süreçleri otomasyonu. Akıllı belge işleme, e-posta otomasyonu, veri analizi ve iş akışı optimizasyonu.",
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
    serviceType: "Yapay Zeka İş Otomasyonu",
    areaServed: { "@type": "Country", name: "Turkey" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Otomasyon Çözümleri",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          itemOffered: {
            "@type": "Service",
            name: "Tek Süreç Otomasyonu",
            description:
              "Fatura işleme, e-posta sınıflandırma veya veri girişi gibi tek bir süreç otomasyonu",
          },
        },
        {
          "@type": "Offer",
          position: 2,
          itemOffered: {
            "@type": "Service",
            name: "Çok Süreçli Otomasyon + CRM Entegrasyonu",
            description:
              "2–3 süreç otomasyonu, CRM ve ERP entegrasyonu, raporlama dashboard'u",
          },
        },
        {
          "@type": "Offer",
          position: 3,
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal İş Akışı Otomasyonu",
            description:
              "Tam iş akışı otomasyonu, çok sistem entegrasyonu, özel AI model geliştirme",
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
        name: "Yapay Zeka İş Otomasyonu",
        url: "/hizmetler/yapay-zeka-otomasyon",
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
            AUTO
          </div>
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="lg:w-3/5 text-center lg:text-left">
                <div className="text-sm font-medium text-red-500 uppercase tracking-wider mb-4">
                  Belge İşleme · E-posta · Veri Analizi · İş Akışı
                </div>
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  Yapay Zeka ile İş Otomasyonu — Tekrarlayan Görevleri
                  AI&apos;ye Devredin
                </h1>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-3">
                  Her gün aynı faturaları elle işlemek, aynı e-postaları
                  kopyalamak, aynı raporları oluşturmak.
                </p>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8">
                  Bu görevlerin %70&apos;i otomatikleştirilebilir. İşletmenizin
                  kendi verisiyle çalışan, hata loglayan ve kritik durumlarda
                  sizi uyaran AI otomasyon sistemleri geliştiriyoruz.
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

              {/* Feature card */}
              <div className="lg:w-2/5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Ne Otomatikleştiriyoruz?
                  </h3>
                  {[
                    {
                      icon: FileText,
                      label: "Akıllı belge işleme",
                      sub: "Fatura, dekont, form, sözleşme — PDF/görüntüden veri çıkarma",
                    },
                    {
                      icon: Mail,
                      label: "E-posta ve iletişim otomasyonu",
                      sub: "Sınıflandırma, önceliklendirme, otomatik yanıt taslakları",
                    },
                    {
                      icon: Workflow,
                      label: "İş akışı ve onay süreçleri",
                      sub: "Görev atama, eskalasyon, durum güncellemeleri",
                    },
                    {
                      icon: BarChart3,
                      label: "Raporlama ve veri analizi",
                      sub: "Otomatik rapor oluşturma, anomali tespiti, tahminleme",
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

        {/* ── Sektör Kullanım Senaryoları ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                Hangi İşletmeler İçin Uygun?
              </h2>
              <p className="text-lg text-gray-600">
                Sektörünüzün dilini, iş süreçlerini ve veri yapısını bilen
                otomasyon. Genel amaçlı değil — sizin için.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  Icon: ShoppingCart,
                  sector: "E-Ticaret & Perakende",
                  color: "text-purple-600",
                  bg: "bg-purple-50 border-purple-200",
                  tasks: [
                    "Gelen sipariş e-postalarından veri çekip ERP'ye işleme",
                    "Fatura PDF'lerini otomatik muhasebe kaydına çevirme",
                    "Stok eşiği altına düşen ürünlerde otomatik tedarikçi bildirimi",
                    "İade taleplerini kargo firmasıyla otomatik senkronize etme",
                  ],
                  kpi: "Günlük 3–4 saatlik manuel veri girişi ortadan kalkar",
                },
                {
                  Icon: Building2,
                  sector: "Gayrimenkul & Turizm",
                  color: "text-orange-600",
                  bg: "bg-orange-50 border-orange-200",
                  tasks: [
                    "Rezervasyon formlarını takvim ve CRM'e otomatik işleme",
                    "Gelen soruları sınıflandırıp ilgili temsilciye yönlendirme",
                    "Müsaitlik değişikliklerini tüm kanallarda otomatik güncelleme",
                    "Misafir check-in sonrası anket ve değerlendirme akışı",
                  ],
                  kpi: "Lead yanıt süresi: 2 saat → 5 dakika",
                },
                {
                  Icon: Briefcase,
                  sector: "Hizmet Sektörü & KOBİ",
                  color: "text-blue-600",
                  bg: "bg-blue-50 border-blue-200",
                  tasks: [
                    "Teklif isteklerini otomatik sınıflandırıp ekibe atama",
                    "Hizmet sözleşmelerinden anahtar bilgileri çıkarma ve arşivleme",
                    "Müşteri takip e-postalarını şablondan kişiselleştirerek gönderme",
                    "Haftalık performans raporlarını otomatik derleme ve dağıtma",
                  ],
                  kpi: "Ofis yönetim maliyetinde %40 tasarruf",
                },
              ].map(({ Icon, sector, color, bg, tasks, kpi }) => (
                <div
                  key={sector}
                  className={`border rounded-xl p-6 hover:shadow-md transition-all ${bg}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${color} flex-shrink-0`} />
                    <h3 className="font-bold text-gray-900 text-base">
                      {sector}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {tasks.map((t, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
                      >
                        <CheckCircle
                          className={`w-3.5 h-3.5 ${color} flex-shrink-0 mt-0.5`}
                        />
                        {t}
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
                Muhasebe, hukuk, eğitim, lojistik ve daha fazlası için de çözüm
                üretiyoruz
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

        {/* ── Nasıl Çalışır? ── */}
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
                Sistemin Arkasında Ne Var?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AI otomasyon bir sihir değil — iş mantığı modelleriz, veriyi
                tanımlı kurallara ve AI akılına göre yönlendiririz, hata
                yönetimini baştan tasarlarız.{" "}
                <strong>Kontrollü, izlenebilir, geri çevrilebilir.</strong>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "1",
                  title: "Süreç haritalanır",
                  desc: "Mevcut iş akışınızı adım adım belgeleyip hangi adımın ne kadar zaman aldığını, nerede hata oluştuğunu ve hangi kararların kurala bağlı olduğunu tespit ederiz.",
                },
                {
                  step: "2",
                  title: "Otomasyon katmanı tasarlanır",
                  desc: "Hangi adımlar tam otomatik, hangileri insan onayı gerektirir belirleriz. AI model veya kural motoru seçimi yapılır; entegrasyon noktaları tanımlanır.",
                },
                {
                  step: "3",
                  title: "Geliştirilir ve bağlanır",
                  desc: "Otomasyon sistemi geliştirilir, mevcut ERP/CRM/e-posta sistemlerinize bağlanır. Gerçek verilerle test edilir; hata senaryoları simüle edilir.",
                },
                {
                  step: "4",
                  title: "Canlıya alınır ve izlenir",
                  desc: "Sistemin her adımı loglanır. İlk 30 gün yakın izleme yapılır, anormallikler anında bildirilir. Süre içinde doğruluk artar, müdahale azalır.",
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

        {/* ── Güvenlik & Hata Yönetimi ── */}
        <section className="py-16 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-7 h-7 text-red-500" />
                <span className="text-red-500 font-medium uppercase text-sm tracking-wide">
                  Kontrol & Güvenlik
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Otomasyon Hata Yaparsa — Sessizce Geçmez
              </h2>
              <p className="text-gray-300">
                Her projede standart olarak kurulur. Sistem başarısız işlemi
                görünmez kılmaz.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: "Güven eşiği",
                  desc: "AI'nin kararı belirsizse işlem otomasyona teslim edilmez — insan incelemesine alınır ve sizi bildirim gönderilir.",
                },
                {
                  icon: Clock,
                  title: "Tam loglama",
                  desc: "Her adım, her karar, her hata kayıt altına alınır. Neyin ne zaman neden yanlış gittiğini her zaman görebilirsiniz.",
                },
                {
                  icon: Users,
                  title: "İnsan onay adımları",
                  desc: "Kritik süreçlerde 'human-in-the-loop' kurulur. Yüksek değerli işlemler (büyük fatura, sözleşme girişi) onay bekler.",
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

        {/* ── Fiyatlar 2026 ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Yapay Zeka Otomasyon Fiyatları 2026
              </h2>
              <p className="text-gray-500 text-sm">
                Her proje kapsamı farklıdır — aşağıdaki rakamlar referans
                aralığıdır. Keşif görüşmesinde süreç analizi yapılır ve sabit
                fiyat sözleşmeye bağlanır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  name: "Tek Süreç",
                  price: "12.000 – 22.000₺",
                  badge: null,
                  monthly: "800 – 2.000₺/ay",
                  desc: "Tek bir iş sürecinin otomasyonu. Fatura işleme, e-posta sınıflandırma veya veri aktarımı gibi odaklı bir hedef.",
                  features: [
                    "1 süreç otomasyonu",
                    "Mevcut sisteme entegrasyon (API)",
                    "Hata loglama ve bildirim",
                    "Güven eşiği & insan onay adımı",
                    "30 gün yakın izleme",
                  ],
                },
                {
                  name: "Çok Süreçli",
                  price: "22.000 – 50.000₺",
                  badge: "En Çok Tercih",
                  monthly: "1.500 – 4.000₺/ay",
                  desc: "2–3 bağlantılı süreç otomasyonu, CRM veya ERP entegrasyonu ve operasyonel dashboard. KOBİ'lerin en çok tercih ettiği kapsam.",
                  features: [
                    "2–3 süreç otomasyonu",
                    "CRM / ERP entegrasyonu",
                    "Operasyonel izleme dashboard'u",
                    "Aylık optimizasyon raporu",
                    "Öncelikli destek",
                  ],
                },
                {
                  name: "Kurumsal",
                  price: "50.000 – 100.000₺+",
                  badge: null,
                  monthly: "3.000 – 8.000₺/ay",
                  desc: "Çok departmanlı tam iş akışı otomasyonu, özel AI model geliştirme, çok sistem entegrasyonu ve SLA garantili destek.",
                  features: [
                    "Sınırsız süreç kapsamı",
                    "Özel AI model geliştirme",
                    "Çok sistem entegrasyonu",
                    "Öncelikli SLA garantisi",
                    "Yerinde analiz & eğitim desteği",
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

            {/* KOBİ note */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                KOBİ&apos;ler İçin AI Otomasyon Maliyeti
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Küçük ve orta ölçekli işletmeler için yapay zeka otomasyon
                yatırımı genellikle 12.000 – 22.000₺ tek seferlik geliştirme ve
                aylık 800 – 2.000₺ işletim gideriyle başlar. Bu rakamlar; gerçek
                iş verilerinizle çalışan, mevcut sisteminize entegre, hata
                yönetimi kurulu bir otomasyon için geçerlidir — hazır SaaS
                araçların sunduğu şablonlardan farklı, size özel bir çözümdür.
                Tipik geri dönüş süresi 3–6 ay; keşif görüşmesinde size özel ROI
                hesabı yapıyoruz.
              </p>
            </div>

            <p className="text-center text-gray-400 text-sm">
              Fiyatlar Nisan 2026 itibarıyla referans aralığıdır. Kesin fiyat
              keşif görüşmesinde belirlenir ve sözleşmeye bağlanır.
            </p>
          </div>
        </section>

        {/* ── Teslim Süreci ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Teslim Süreci
              </h2>
              <p className="text-gray-400">
                4 aşama — her aşama sonunda sizin onayınız alınır.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Keşif & Süreç Analizi",
                  desc: "Mevcut iş akışları haritalanır, otomasyon fırsatları belirlenir, ROI tahmini yapılır. Sabit fiyatlı kapsam belgesi + takvim.",
                  weeks: "1 hafta",
                  icon: Settings,
                },
                {
                  step: "02",
                  title: "Tasarım & PoC",
                  desc: "Otomasyon mimarisi tasarlanır, küçük ölçekli kavram kanıtı (PoC) ile fizibilite doğrulanır. Canlı veriyle test edersiniz.",
                  weeks: "1–2 hafta",
                  icon: Database,
                },
                {
                  step: "03",
                  title: "Geliştirme & Entegrasyon",
                  desc: "Otomasyon geliştirme, sistem bağlantıları, hata yönetimi, test senaryoları ve 100+ gerçek kayıtla doğruluk kontrolü.",
                  weeks: "2–6 hafta",
                  icon: Workflow,
                },
                {
                  step: "04",
                  title: "Yayın & Sürekli İzleme",
                  desc: "Canlıya geçiş. İlk 30 gün günlük izleme, anomali bildirimi. Sonrasında aylık performans raporu ve optimizasyon.",
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

        {/* ── Neden WebCraft ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neden WebCraft?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Kontrollü otomasyon — kara kutu değil",
                    desc: "Sistemin her kararı loglanır, izlenebilir ve geri alınabilir. Sessizce hata yapan değil, şeffaf çalışan bir yapı kuruyoruz.",
                  },
                  {
                    title: "Gerçek entegrasyon deneyimi",
                    desc: "Logo, Netsis, Mikro, HubSpot, Shopify, WooCommerce — bunları canlı projelerde entegre ettik. İlk sefer denemiyoruz.",
                  },
                  {
                    title: "Web + AI birlikte",
                    desc: "Sadece otomasyon değil, veri toplayan web siteniz, otomasyon sisteminiz ve chatbotunuz birlikte çalışacak şekilde tasarlıyoruz.",
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
                  href="/hizmetler/yapay-zeka-chatbot"
                  className="inline-flex items-center justify-center border border-white/60 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-8 rounded-full hover:bg-white/10 transition-colors duration-300 text-xs sm:text-base"
                >
                  AI Chatbot Hizmeti
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Türkiye'de AI Otomasyon ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Türkiye&apos;de Yapay Zeka İş Otomasyonu Hizmeti
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    WebCraft olarak Fethiye ve Muğla merkezimizden
                    Türkiye&apos;nin her bölgesindeki işletmelere yapay zeka
                    otomasyon hizmeti sunuyoruz. Türkiye&apos;nin iş süreçlerine
                    özgü sistemleri — Logo ERP, Netsis, Mikro, yerel kargo
                    API&apos;leri, İyzico, PayTR ödeme altyapıları — bunları
                    canlı projelerde entegre etmiş bir ekibiz.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Global SaaS otomasyon araçlarının aksine, her projeyi
                    işletmenizin kendi verisi, mevcut sistemleri ve iş
                    mantığıyla kuruyoruz. Sonuç: şablondan gelen değil, sizi
                    tanıyan bir otomasyon. Projelerinizi{" "}
                    <Link
                      href="/hizmetler/yapay-zeka-chatbot"
                      className="text-red-600 hover:underline font-medium"
                    >
                      AI chatbot hizmetimizle
                    </Link>{" "}
                    ya da{" "}
                    <Link
                      href="/hizmetler/yazilim-gelistirme"
                      className="text-red-600 hover:underline font-medium"
                    >
                      özel yazılım geliştirme hizmetimizle
                    </Link>{" "}
                    entegre tam bir dijital altyapı sunuyoruz.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "İstanbul, Ankara, İzmir, Antalya — proje lokasyonu sınırsız",
                    "Fethiye / Muğla için yerinde analiz ve kurulum desteği",
                    "Türk ERP sistemleri (Logo, Netsis, Mikro) entegrasyon deneyimi",
                    "Yerel kargo ve ödeme API'leri (MNG, Yurtiçi, İyzico, PayTR)",
                    "KVKK uyumlu veri işleme ve Türkiye hosting seçeneği",
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

        {/* ── AI Otomasyon vs Manuel Süreç ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                AI Otomasyon vs Manuel Süreç
              </h2>
              <p className="text-gray-300 mb-10">
                &quot;Biz zaten yapıyoruz&quot; cevabı haklı olabilir. Ama kaç
                saat sürüyor, ne sıklıkla hata çıkıyor ve ölçeklenebiliyor mu?
                Karşılaştırma aşağıda.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left text-gray-400 font-medium pb-4 pr-6 text-base">
                        Kriter
                      </th>
                      <th className="text-center text-red-400 font-bold pb-4 px-4 text-base">
                        AI Otomasyon
                      </th>
                      <th className="text-center text-gray-400 font-medium pb-4 pl-4 text-base">
                        Manuel Süreç
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        kriter: "İşlem hızı",
                        auto: "Saniyeler içinde",
                        manual: "Dakika – saatler",
                      },
                      {
                        kriter: "Hata oranı",
                        auto: "<%2 (loglanır)",
                        manual: "%5–15",
                      },
                      {
                        kriter: "Çalışma kapasitesi",
                        auto: "7/24, tatil yok",
                        manual: "Mesai saatleri",
                      },
                      {
                        kriter: "Ölçeklenebilirlik",
                        auto: "Sınırsız hacim",
                        manual: "Personel bağımlı",
                      },
                      {
                        kriter: "Maliyet (aylık)",
                        auto: "800 – 4.000₺",
                        manual: "15.000₺+ / kişi",
                      },
                      {
                        kriter: "İzlenebilirlik",
                        auto: "Tam loglama",
                        manual: "El ile takip",
                      },
                      {
                        kriter: "Tutarlılık",
                        auto: "Her zaman aynı",
                        manual: "Değişken",
                      },
                    ].map(({ kriter, auto, manual }) => (
                      <tr
                        key={kriter}
                        className="border-b border-white/5 last:border-0"
                      >
                        <td className="py-3 pr-6 text-gray-300 font-medium">
                          {kriter}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-white bg-red-600/20 px-3 py-1 rounded-full text-xs font-medium">
                            {auto}
                          </span>
                        </td>
                        <td className="py-3 pl-4 text-center text-gray-400">
                          {manual}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white text-sm leading-relaxed">
                  <strong className="text-red-400">
                    Hibirt yaklaşım önerisi:
                  </strong>{" "}
                  Tüm süreci birden değiştirmek gerekmez. En çok zaman alan ve
                  en sık hata çıkan tek bir süreci pilotla başlayın — ROI görün,
                  ardından genişletin. Çoğu müşterimiz fatura işleme veya
                  e-posta sınıflandırmayla başlayıp 6–12 ay içinde 3–4 süreci
                  kapsamına almıştır.
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
              Her gün tekrarlayan o görevler için ekibiniz saatler harcıyor.
            </p>
            <p className="text-lg text-red-200 mb-8 max-w-2xl mx-auto">
              Keşif görüşmesinde süreç analizini yaparız, size özel ROI tahmini
              sunarız — ücretsiz.
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

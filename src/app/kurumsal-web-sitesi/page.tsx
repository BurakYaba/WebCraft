import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import {
  Building2,
  Shield,
  Database,
  Users,
  Lock,
  TrendingUp,
  Palette,
  CheckCircle,
  ChevronRight,
  FileText,
  Settings,
  Globe,
  Phone,
  Mail,
} from "lucide-react";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Kurumsal Web Sitesi Tasarımı | KVKK Uyumlu, ERP Entegrasyonlu | WebCraft",
  description:
    "Çok departmanlı yapı, yatırımcı ilişkileri sayfası, KVKK uyumlu gizlilik altyapısı, ERP/CRM entegrasyonu ve intranet çözümleri içeren kurumsal web sitesi tasarımı. Büyük ölçekli şirketler için.",
  keywords:
    "kurumsal web sitesi, KVKK uyumlu web sitesi, ERP entegrasyonlu web sitesi, yatırımcı ilişkileri sayfası, kurumsal kimlik sistemi, intranet web sitesi, çok departmanlı web sitesi, kurumsal web tasarımı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/kurumsal-web-sitesi",
  },
  openGraph: {
    title:
      "Kurumsal Web Sitesi Tasarımı | KVKK Uyumlu, ERP Entegrasyonlu | WebCraft",
    description:
      "Çok departmanlı yapı, KVKK uyumluluk, ERP/CRM entegrasyonu ve yatırımcı ilişkileri altyapısı ile kurumsal web sitesi çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function KurumsalWebSitesiPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Hizmetler", url: "/hizmetler" },
      { name: "Kurumsal Web Sitesi", url: "/kurumsal-web-sitesi" },
    ]);

  const corporateSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kurumsal Web Sitesi Tasarımı",
    description:
      "Çok departmanlı yapı, KVKK uyumlu gizlilik altyapısı, ERP/CRM entegrasyonu, yatırımcı ilişkileri sayfası ve intranet çözümleri içeren kurumsal web sitesi tasarımı.",
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
    },
    serviceType: "Kurumsal Web Sitesi Tasarımı",
    areaServed: "Turkey",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kurumsal Web Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Çok Departmanlı Yapı ve Ekip Sayfaları",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yatırımcı İlişkileri (IR) Sayfası",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KVKK / GDPR Uyumlu Gizlilik Altyapısı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kurumsal Kimlik Sistemi Entegrasyonu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "İntranet ve Şifreli Bölüm Çözümleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ERP/CRM Sistem Entegrasyonu",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kurumsal web sitesi ile normal web sitesi arasındaki fark nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kurumsal web sitesi; çok departmanlı sayfa yapısı, yönetim kurulu profilleri, yatırımcı ilişkileri bölümü, KVKK uyumlu gizlilik altyapısı, intranet bağlantısı ve SAP/Salesforce gibi kurumsal sistem entegrasyonları içerir. Normal web sitelerinde bu ihtiyaçlar bulunmaz.",
        },
      },
      {
        "@type": "Question",
        name: "Web siteniz KVKK uyumlu mu olacak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Her kurumsal web sitesine KVKK aydınlatma metni sayfası, çerez onay (cookie consent) mekanizması, gizlilik politikası ve kullanım koşulları sayfaları dahil edilir. Gerektiğinde kişisel veri envanteri ve başvuru formu da entegre edilir.",
        },
      },
      {
        "@type": "Question",
        name: "SAP, Salesforce veya Logo ERP ile entegrasyon mümkün mü?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. SAP, Salesforce, Microsoft Dynamics, Logo Tiger/Go, Netsis ve diğer ERP/CRM sistemleriyle API entegrasyonu yapabiliriz. Stok görüntüleme, müşteri portal erişimi veya satış formu entegrasyonu gibi senaryolar proje kapsamına göre değerlendirilir.",
        },
      },
      {
        "@type": "Question",
        name: "Yatırımcı ilişkileri (IR) sayfası ne içerir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IR sayfası tipik olarak şunları içerir: yıllık/çeyrekli finansal raporlar (PDF indirme), yönetim kurulu ve icra kurulu profilleri, genel kurul bilgileri, hisse senedi verileri, basın bültenleri ve analist sunumları. İçerik güncellemesini kolaylaştıran bir CMS paneli de teslim edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Çalışanlara özel intranet veya şifreli bölüm yapabilir misiniz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Şifreli giriş gerektiren çalışan portalları, departmana özel belge arşivleri, duyuru panoları ve online eğitim modülleri kurumsal web sitesine entegre edilebilir. Active Directory / Microsoft Entra ID ile SSO (tek oturum açma) desteği de sağlanabilir.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
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
            K
          </div>
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="lg:w-3/5">
                <div className="text-sm font-medium text-red-500 uppercase tracking-wider mb-4">
                  Büyük Ölçekli Şirketler İçin
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                  Kurumsal Web Sitesi —
                  <br />
                  <span className="text-red-500">
                    KVKK Uyumlu, ERP Entegrasyonlu,
                  </span>
                  <br />
                  Yatırımcıya Hazır
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
                  Şirketinizin iç yapısını, yasal yükümlülüklerini ve dış paydaş
                  beklentilerini karşılayan kurumsal web sitesi çözümleri. Çok
                  departmanlı sayfa mimarisi, yatırımcı ilişkileri bölümü, KVKK
                  uyumluluk sayfaları, şifreli intranet alanları ve SAP /
                  Salesforce / Logo ERP entegrasyonu tek bir çatı altında.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Ücretsiz Keşif Görüşmesi
                  </a>
                  <a
                    href="tel:+905079441715"
                    className="border border-white/40 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Stats card */}
              <div className="lg:w-2/5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Kurumsal Proje Kapsamı
                  </h3>
                  {[
                    {
                      icon: Users,
                      label: "Çok departmanlı sayfa yapısı",
                      sub: "İK, Finans, Satış, Yönetim Kurulu...",
                    },
                    {
                      icon: TrendingUp,
                      label: "Yatırımcı İlişkileri (IR) bölümü",
                      sub: "Finansal raporlar, YK profilleri, GK bilgileri",
                    },
                    {
                      icon: Shield,
                      label: "KVKK / GDPR altyapısı",
                      sub: "Aydınlatma metni, çerez onayı, başvuru formu",
                    },
                    {
                      icon: Lock,
                      label: "İntranet & şifreli alanlar",
                      sub: "SSO, Active Directory, belge arşivi",
                    },
                    {
                      icon: Database,
                      label: "ERP/CRM entegrasyonu",
                      sub: "SAP, Salesforce, Logo, Netsis, Dynamics",
                    },
                    {
                      icon: Palette,
                      label: "Kurumsal kimlik sistemi",
                      sub: "Marka rehberi, renk paleti, tipografi",
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

        {/* ── What separates enterprise from generic ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                Kurumsal Web Sitesi Neden Farklı?
              </h2>
              <p className="text-lg text-gray-600">
                KOBİ&apos;lere yapılan bir web sitesi ile 50+ çalışanlı, çok
                departmanlı bir şirkete yapılan web sitesi birbirinden köklü
                biçimde ayrışır. Aşağıdakilerden en az ikisi sizin için
                gerekliyse, ihtiyacınız kurumsal web sitesidir:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Birden fazla departman veya şube",
                  desc: "Her birimin ayrı sayfa, iletişim kanalı ve içerik yönetimi gereksinimi var.",
                },
                {
                  title: "Yatırımcı veya pay sahibi iletişimi",
                  desc: "Finansal raporları, genel kurul bildirilerini ve YK profillerini yayımlamanız gerekiyor.",
                },
                {
                  title: "KVKK / GDPR yasal yükümlülüğü",
                  desc: "KVKK Politikası, çerez onayı ve kişisel veri başvuru formu zorunlu.",
                },
                {
                  title: "Çalışanlara özel içerik alanı",
                  desc: "Bordro, insan kaynakları, eğitim materyalleri — dışarıdan erişilmez şifreli alanlar.",
                },
                {
                  title: "Mevcut ERP/CRM ile veri akışı",
                  desc: "Stok, sipariş, müşteri veya ihracat verilerini web üzerinden görüntüleme/yönetme.",
                },
                {
                  title: "Tutarlı kurumsal kimlik standartı",
                  desc: "Ana şirket + iştiraklerde renk, font, logo kullanımı için merkezi stil rehberi.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm pl-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 Enterprise Feature Sections ── */}

        {/* 1. Multi-department */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-7 h-7 text-red-500" />
                  <span className="text-red-500 font-medium uppercase text-sm tracking-wide">
                    Departman Mimarisi
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Çok Departmanlı Sayfa Yapısı ve Ekip Profilleri
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Kurumsal web siteniz şirketinizin iç hiyerarşisini yansıtmalı.
                  İnsan Kaynakları, Finans, Ar-Ge, Pazarlama, Satış; her
                  departman için ayrı kayan sayfa şablonları tasarlıyoruz. Üst
                  yönetimden hat yöneticilerine — tüm ekip profillerini
                  fotoğraf, biyografi ve iletişim bilgileriyle yönetilebilir bir
                  CMS paneli üzerinden yayımlayabilirsiniz.
                </p>
                <ul className="space-y-3">
                  {[
                    "Yönetim Kurulu ve Denetim Kurulu profil sayfaları",
                    "Departman bazlı alt sayfa mimarisi (İK, Finans, Satış...)",
                    "Şube / bölge ofis sayfaları (konum haritası dahil)",
                    "Kariyer sayfası ile iş ilanı CMS entegrasyonu",
                    "Medya & Basın odası (logo paketi, basın bültenleri)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
                  Örnek Sayfa Ağacı
                </p>
                <div className="space-y-2 font-mono text-sm">
                  {[
                    { depth: 0, label: "/ Ana Sayfa" },
                    { depth: 1, label: "hakkimizda/" },
                    { depth: 2, label: "yonetim-kurulu/" },
                    { depth: 2, label: "denetim-kurulu/" },
                    { depth: 2, label: "kurumsal-tarihce/" },
                    { depth: 1, label: "departmanlar/" },
                    { depth: 2, label: "insan-kaynaklari/" },
                    { depth: 2, label: "finans/" },
                    { depth: 2, label: "arge/" },
                    { depth: 1, label: "yatirimci-iliskileri/" },
                    { depth: 1, label: "kariyer/" },
                    { depth: 1, label: "basin-odasi/" },
                  ].map((node) => (
                    <div
                      key={node.label}
                      style={{ paddingLeft: `${node.depth * 20}px` }}
                      className="text-gray-300"
                    >
                      {node.depth > 0 && (
                        <span className="text-gray-600 mr-1">└─</span>
                      )}
                      {node.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Investor Relations */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-7 h-7 text-red-600" />
                  <span className="text-red-600 font-medium uppercase text-sm tracking-wide">
                    Yatırımcı İlişkileri
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                  Yatırımcı İlişkileri (IR) Bölümü
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Pay sahipleri, analistler ve olası yatırımcılar şirketinizi
                  ilk olarak web sitenizden değerlendirir. IR bölümü; şeffaflık
                  politikanızı dijitale taşır, yasal yükümlülükleri karşılar ve
                  kurumsal güveni somutlaştırır. Tüm dokümanlar CMS üzerinden
                  departman uzmanları tarafından teknik destek gerektirmeden
                  güncellenebilir.
                </p>
                <ul className="space-y-3">
                  {[
                    "Yıllık faaliyet raporu ve çeyreklik finansal tablolar (PDF indirme)",
                    "Yönetim kurulu & icra kurulu profilleri ve görev dönemleri",
                    "Genel kurul tarihleri, gündem ve kararlar arşivi",
                    "Analist sunumları ve yatırımcı toplantısı takvimi",
                    "Basın bültenleri ve önemli duyurular arşivi",
                    "Hissedar yapısı ve ortaklık bilgileri tablosu",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 space-y-4">
                {[
                  {
                    label: "Finansal Raporlar",
                    items: [
                      "2025 Yıllık Faaliyet Raporu",
                      "Q4 2025 Finansal Tablolar",
                      "Bağımsız Denetim Raporu",
                    ],
                  },
                  {
                    label: "Yönetim Kurulu",
                    items: [
                      "Ahmet Yılmaz — YK Başkanı",
                      "Fatma Demir — Bağımsız Üye",
                      "Mehmet Kaya — Genel Müdür",
                    ],
                  },
                  {
                    label: "Genel Kurul",
                    items: [
                      "30 Nisan 2025 OYAK Gündem",
                      "GK Kararları Arşivi (2018–2024)",
                    ],
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="border border-gray-200 rounded-xl p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      {card.label}
                    </p>
                    <ul className="space-y-2">
                      {card.items.map((i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <FileText className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. KVKK/GDPR */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-7 h-7 text-red-500" />
                  <span className="text-red-500 font-medium uppercase text-sm tracking-wide">
                    Yasal Uyumluluk
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  KVKK ve GDPR Uyumlu Gizlilik Altyapısı
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  6698 Sayılı KVKK kapsamındaki yükümlülüklerinizi web sitenizde
                  eksiksiz karşılamak artık bir tercih değil, zorunluluk.
                  Kurumsal web sitelerinde sadece &quot;Gizlilik
                  Politikası&quot; sayfası koymak yeterli değil; ziyaretçi
                  verilerinin nasıl toplandığı, işlendiği ve saklandığı teknik
                  altyapıyla birlikte belgelenmeli.
                </p>
                <ul className="space-y-3">
                  {[
                    "KVKK Aydınlatma Metni sayfası (veri kategorileri, amaç, saklama süreleri)",
                    "Çerez Politikası ve granüler çerez onay mekanizması (Consent Banner)",
                    "Kişisel Veri Sahibi Başvuru Formu (erişim, düzeltme, silme hakları)",
                    "Gizlilik Politikası ve Kullanım Koşulları sayfaları",
                    "Çerez kategorileri: Zorunlu / Analitik / Pazarlama (açık/kapalı seçimi)",
                    "Onay log kaydı — KVKK denetimine hazır raporlama",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white font-semibold mb-4">
                    Teslim Edilen KVKK Belgeleri
                  </p>
                  {[
                    { doc: "KVKK Aydınlatma Metni", status: "Zorunlu" },
                    { doc: "Çerez Politikası", status: "Zorunlu" },
                    { doc: "Gizlilik Politikası", status: "Zorunlu" },
                    { doc: "Kullanım Koşulları", status: "Zorunlu" },
                    {
                      doc: "Kişisel Veri Başvuru Formu",
                      status: "İleri Seviye",
                    },
                    {
                      doc: "Çerez Onay Banner (granüler)",
                      status: "İleri Seviye",
                    },
                    { doc: "Onay Log Kaydı Sistemi", status: "Kurumsal" },
                  ].map((row) => (
                    <div
                      key={row.doc}
                      className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                    >
                      <span className="text-gray-300 text-sm">{row.doc}</span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          row.status === "Zorunlu"
                            ? "bg-red-600/20 text-red-400"
                            : row.status === "İleri Seviye"
                              ? "bg-blue-600/20 text-blue-400"
                              : "bg-green-600/20 text-green-400"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs">
                  * KVKK içerikleri avukatınızla nihai onay için gözden
                  geçirilmelidir. WebCraft teknik altyapıyı ve şablon içerikleri
                  sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Corporate Identity System */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-7 h-7 text-red-600" />
                  <span className="text-red-600 font-medium uppercase text-sm tracking-wide">
                    Kurumsal Kimlik
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                  Kurumsal Kimlik Sistemi Entegrasyonu
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Büyük ölçekli şirketlerde web sitesi yalnızca bir kanal değil,
                  kurumsal kimliğin dijital standardıdır. Ana şirketten
                  iştiraklere, Türkiye ofisinden uluslararası temsilciliklere
                  tutarlı görsel dil sağlamak için kurumsal marka rehberini koda
                  entegre ediyoruz.
                </p>
                <ul className="space-y-3">
                  {[
                    "Kurumsal renk paleti (Pantone / CMYK / HEX / RGB değerleri) web'e uyarlaması",
                    "Onaylı kurumsal yazı tipi ailesi entegrasyonu (lisanslı veya Google Fonts)",
                    "Logo kullanım kuralları — minimum boyut, boşluk, onaylı arka plan renkleri",
                    "İştirak / alt marka uyarlamaları için dinamik tema sistemi",
                    "E-posta imzası standartı HTML şablonu",
                    "Sunum ve basılı materyal yönlendirmeli dijital marka rehberi sayfası",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <div className="border border-gray-200 rounded-xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Marka Renkleri
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { color: "bg-[#C1121F]", label: "Kırmızı" },
                      { color: "bg-[#1A1A2E]", label: "Lacivert" },
                      { color: "bg-[#F5F5F5]", label: "Açık" },
                      { color: "bg-[#6B7280]", label: "Gri" },
                    ].map((c) => (
                      <div key={c.label} className="text-center">
                        <div
                          className={`${c.color} w-full h-12 rounded-lg mb-1`}
                        />
                        <p className="text-xs text-gray-500">{c.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Tipografi Hiyerarşisi
                  </p>
                  <div className="space-y-2">
                    <p
                      style={{ fontWeight: 800, fontSize: 24 }}
                      className="text-gray-900"
                    >
                      H1 — Başlık (800)
                    </p>
                    <p
                      style={{ fontWeight: 600, fontSize: 18 }}
                      className="text-gray-800"
                    >
                      H2 — Alt Başlık (600)
                    </p>
                    <p
                      style={{ fontWeight: 400, fontSize: 15 }}
                      className="text-gray-600"
                    >
                      Gövde metni — Normal (400)
                    </p>
                    <p
                      style={{ fontWeight: 400, fontSize: 12 }}
                      className="text-gray-400 uppercase tracking-widest"
                    >
                      KÜÇÜK BAŞLIK (400 — Uppercase)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Intranet / Password-protected */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-7 h-7 text-red-500" />
                  <span className="text-red-500 font-medium uppercase text-sm tracking-wide">
                    Çalışan Portalı
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  İntranet ve Şifreli Bölüm Çözümleri
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Bazı içerikler — İK politikaları, bordro belgeleri, iç
                  eğitimler, satış fiyat listeleri — sadece yetkili çalışanların
                  erişmesi gereken alanlardır. Kurumsal web sitenizin içine
                  entegre, dışarıdan erişimi engelleyen şifreli çalışan
                  portalları yapıyoruz.
                </p>
                <ul className="space-y-3">
                  {[
                    "Microsoft Entra ID (Azure AD) / Google Workspace SSO entegrasyonu",
                    "Rol tabanlı erişim kontrolü — satın alma ekibi farklı içerik görür, yönetici farklı",
                    "Belge arşivi ve versiyon yönetimi (PDF, Excel, sunumlar)",
                    "İç duyuru panosu ve haber akışı",
                    "Online onboarding ve eğitim modülleri",
                    "Elektronik formlar — izin talebi, masraf bildirimi, teknik destek",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-5">
                  Erişim Mimarisi
                </p>
                <div className="space-y-3">
                  {[
                    {
                      group: "Ziyaretçi (anonim)",
                      access: "Ana sayfa, hizmetler, iletişim",
                      color: "bg-gray-500",
                    },
                    {
                      group: "Müşteri / İş Ortağı",
                      access: "Proje durumu, fatura portalı, destek sistemi",
                      color: "bg-blue-500",
                    },
                    {
                      group: "Çalışan (işe alım ile)",
                      access: "+ İK belgeleri, iç duyurular, eğitimler",
                      color: "bg-green-500",
                    },
                    {
                      group: "Yönetici / C-Level",
                      access:
                        "+ Finansal tablolar, board raporları, tam erişim",
                      color: "bg-red-500",
                    },
                  ].map((row) => (
                    <div key={row.group} className="flex items-start gap-3">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${row.color} mt-1.5 flex-shrink-0`}
                      />
                      <div>
                        <p className="text-white text-sm font-medium">
                          {row.group}
                        </p>
                        <p className="text-gray-400 text-xs">{row.access}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ERP/CRM Integration */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-7 h-7 text-red-600" />
                  <span className="text-red-600 font-medium uppercase text-sm tracking-wide">
                    Sistem Entegrasyonu
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
                  ERP ve CRM Sistem Entegrasyonu
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Web siteniz bir broşür olarak değil, şirketinizin operasyonel
                  altyapısıyla konuşan bir sistem olarak çalışabilir. Ürün
                  katalogları, stok durumu, müşteri portal erişimi, teklif formu
                  verileri ya da nakliye takibi — hepsini mevcut kurumsal
                  yazılımınızla entegre ediyoruz.
                </p>
                <ul className="space-y-3">
                  {[
                    "SAP S/4HANA ve SAP B1 API entegrasyonu",
                    "Salesforce CRM — potansiyel müşteri formu ve kayıt senkronizasyonu",
                    "Microsoft Dynamics 365 entegrasyonu",
                    "Logo Tiger / GO ve Netsis ERP bağlantısı",
                    "Ürün kataloğu ve stok durumu web'e yansıtma",
                    "Müşteri portal — sipariş durumu, fatura indirme, destek talebi",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  {
                    name: "SAP",
                    desc: "S/4HANA · B1",
                    color: "border-blue-200 bg-blue-50",
                  },
                  {
                    name: "Salesforce",
                    desc: "CRM · Sales Cloud",
                    color: "border-blue-200 bg-blue-50",
                  },
                  {
                    name: "MS Dynamics",
                    desc: "365 · Business Central",
                    color: "border-indigo-200 bg-indigo-50",
                  },
                  {
                    name: "Logo / Netsis",
                    desc: "Tiger · Go · Netsis",
                    color: "border-orange-200 bg-orange-50",
                  },
                  {
                    name: "WooCommerce",
                    desc: "Ürün & stok API",
                    color: "border-purple-200 bg-purple-50",
                  },
                  {
                    name: "REST / SOAP",
                    desc: "Özel API entegrasyonu",
                    color: "border-gray-200 bg-gray-50",
                  },
                ].map((s) => (
                  <div
                    key={s.name}
                    className={`border rounded-xl p-4 ${s.color}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Settings className="w-4 h-4 text-gray-500" />
                      <p className="font-semibold text-gray-900 text-sm">
                        {s.name}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Enterprise Process ── */}
        <section className="py-20 bg-[#181716]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Kurumsal Proje Sürecimiz
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                KOBİ projelerinden farklı olarak kurumsal projeler; çoklu paydaş
                onayı, aşamalı yayın ve kabul testleri gerektirir. Sürecimiz
                buna göre tasarlandı.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Keşif & Paydaş Analizi",
                  desc: "İK, BT, Hukuk, Pazarlama ve Üst Yönetim ile ayrı ayrı gereksinim toplantıları. Bütçe, takvim, entegrasyon haritası çıkarımı.",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Mimari & Uyumluluk Tasarımı",
                  desc: "Sayfa ağacı, erişim matrisi, KVKK altyapısı, entegrasyon noktaları ve Figma prototip hazırlığı.",
                  icon: Building2,
                },
                {
                  step: "03",
                  title: "Geliştirme & Entegrasyon",
                  desc: "Aşamalı sprint geliştirme. Her sprint sonunda paydaş demo. ERP/CRM bağlantıları kademeli test.",
                  icon: Settings,
                },
                {
                  step: "04",
                  title: "Kabul Testi (UAT)",
                  desc: "Her departman temsilcisi kendi bölümünü test eder. KVKK hukuk onayı. Güvenlik penetrasyon testi.",
                  icon: Shield,
                },
                {
                  step: "05",
                  title: "Kademeli Yayın & Destek",
                  desc: "DNS geçişi öncesi staging üzerinde son onay. Yayın sonrası 3 ay yoğun destek, sonrasında SLA sözleşmesi.",
                  icon: Globe,
                },
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 h-full">
                    <div className="text-red-500 font-bold text-2xl mb-3">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-gray-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Kurumsal web sitesi ile normal web sitesi arasındaki fark nedir?",
                    a: "Kurumsal web sitesi; çok departmanlı sayfa yapısı, yönetim kurulu profilleri, yatırımcı ilişkileri bölümü, KVKK uyumlu gizlilik altyapısı, intranet bağlantısı ve SAP/Salesforce gibi kurumsal sistem entegrasyonları içerir. Normal bir web sitesinde bu ihtiyaçlar bulunmaz.",
                  },
                  {
                    q: "Web siteniz KVKK uyumlu mu olacak?",
                    a: "Evet. Her kurumsal web sitesine KVKK aydınlatma metni sayfası, çerez onay mekanizması (cookie consent), gizlilik politikası ve kullanım koşulları sayfaları dahil edilir. Gerektiğinde kişisel veri başvuru formu ve onay log kaydı sistemi de entegre edilir.",
                  },
                  {
                    q: "SAP, Salesforce veya Logo ERP ile entegrasyon mümkün mü?",
                    a: "Evet. SAP S/4HANA ve B1, Salesforce, Microsoft Dynamics 365, Logo Tiger/Go ve Netsis ile API entegrasyonu sağlıyoruz. Stok görüntüleme, müşteri portal erişimi veya satış formu entegrasyonu gibi senaryolar proje kapsamına dahil edilir.",
                  },
                  {
                    q: "Yatırımcı ilişkileri (IR) sayfası ne içerir?",
                    a: "IR sayfası tipik olarak şunları içerir: yıllık/çeyrekli finansal raporlar (PDF indirme), yönetim kurulu ve icra kurulu profilleri, genel kurul bilgileri ve kararlar arşivi, basın bültenleri ve analist sunumları. CMS paneli sayesinde dokümanlar teknik destek gerektirmeden güncellenir.",
                  },
                  {
                    q: "Çalışanlara özel intranet veya şifreli bölüm yapabilir misiniz?",
                    a: "Evet. Microsoft Entra ID (Azure AD) veya Google Workspace SSO ile entegre, rol tabanlı erişim kontrolü sağlayan çalışan portalları yapıyoruz. Departmana özel belge arşivleri, iç duyuru panosu ve online eğitim modülleri kapsama dahil edilebilir.",
                  },
                  {
                    q: "Proje ne kadar sürer ve fiyatlandırma nasıl yapılır?",
                    a: "Kurumsal projeler 8–20 hafta arasında tamamlanır; bu süre entegrasyon sayısına, departman yapısına ve içerik hacmine göre değişir. Fiyatlandırma modüler yapıdadır: temel kurumsal site + seçilen eklentiler (IR bölümü, intranet, ERP entegrasyonu). Keşif görüşmesi sonrası sabit fiyatlı teklif sunulur.",
                  },
                ].map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-red-600">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Kurumsal Web Sitenizi Birlikte Tasarlayalım
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Çok departmanlı yapı, KVKK altyapısı, IR bölümü ve ERP
              entegrasyonuna ihtiyacınız varsa ilk adım olarak ücretsiz keşif
              görüşmesi ayarlayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-white text-red-600 hover:bg-red-50 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Keşif Görüşmesi
              </a>
              <a
                href="tel:+905079441715"
                className="border border-white/60 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +90 (507) 944 17 15
              </a>
              <a
                href="mailto:info@webcraft.tr"
                className="border border-white/60 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                info@webcraft.tr
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

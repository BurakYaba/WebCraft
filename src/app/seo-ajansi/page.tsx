import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  Users,
  Award,
  BarChart2,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Zap,
  FileText,
  Link2,
  MapPin,
} from "lucide-react";

// Lazy load components
const SocialProofStrip = lazy(() => import("@/components/SocialProofStrip"));
const Footer = lazy(() => import("@/components/Footer"));
const ServiceFAQSection = lazy(() => import("@/components/ServiceFAQSection"));

// Loading skeleton
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "SEO Ajansı | Organik Trafiğinizi Artırıyoruz | WebCraft",
  description:
    "Profesyonel SEO ajansı olarak Google'da üst sıralarda yer almanızı sağlıyoruz. Teknik SEO, içerik optimizasyonu ve link building ile organik trafiğinizi katlayın. Ücretsiz analiz alın!",
  keywords:
    "seo ajansı, seo ajansı türkiye, profesyonel seo hizmeti, google seo ajansı, organik trafik artırma, seo danışmanlık, arama motoru optimizasyonu ajansı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/seo-ajansi",
  },
  openGraph: {
    title: "SEO Ajansı | Organik Trafiğinizi Artırıyoruz | WebCraft",
    description:
      "Türkiye'nin güvenilir SEO ajansı. Organik trafiğinizi katlayın ve Google'da rakiplerinizin önüne geçin.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Ajansı | Organik Trafiğinizi Artırıyoruz | WebCraft",
    description:
      "Profesyonel SEO ajansı. Google'da üst sıralarda yer alın, organik trafiğinizi katlayın.",
  },
};

export default function SeoAjansiPage() {
  // FAQ data
  const faqs = [
    {
      question: "SEO ajansı nedir ve ne iş yapar?",
      answer:
        "SEO ajansı, işletmelerin arama motoru sonuç sayfalarında (SERP) üst sıralarda yer alması için teknik, içerik ve link bazlı optimizasyon çalışmaları yürüten profesyonel dijital pazarlama firmasıdır. WebCraft SEO ajansı olarak; teknik site denetimleri, anahtar kelime araştırması, içerik stratejisi, backlink kazanımı, yerel SEO ve sürekli performans izlemesi gibi kapsamlı hizmetler sunuyoruz.",
    },
    {
      question: "SEO ajansı seçerken nelere dikkat etmeli?",
      answer:
        "İyi bir SEO ajansı seçerken şu kriterlere dikkat edin: Şeffaf raporlama ve iletişim, kanıtlanmış başarı hikayeleri ve referanslar, yalnızca organik ve etik (white-hat) teknikler kullanımı, sektörünüze özgü deneyim, teknik SEO uzmanlığı ve içerik stratejisi yetkinliği. Garanti veren ya da anında sonuç vaad eden ajanslardan uzak durun — kaliteli SEO zaman alır.",
    },
    {
      question: "SEO çalışmalarının sonuçları ne zaman görülür?",
      answer:
        "SEO uzun vadeli bir yatırımdır. Teknik düzeltmeler ve on-page optimizasyonlar genellikle 4-8 hafta içinde Google tarafından algılanır. Sıralama iyileşmeleri ise rekabete ve sitenin mevcut durumuna bağlı olarak 3-6 ay içinde belirginleşmeye başlar. İçerik ve link building çalışmalarının tam etkisi 6-12 ayda en yüksek seviyeye ulaşır.",
    },
    {
      question: "SEO ajansı fiyatları ne kadar?",
      answer:
        "SEO ajansı fiyatları; web sitesinin büyüklüğü, sektörün rekabet düzeyi, hedef anahtar kelime sayısı ve gereken çalışmanın kapsamına göre değişir. WebCraft'ta aylık SEO paketleri 3.000 TL'den başlamaktadır. Her müşteri için özelleştirilmiş teklif hazırlıyoruz. Ücretsiz SEO analizi için iletişime geçin.",
    },
    {
      question: "SEO ajansı ile freelancer SEO uzmanı arasındaki fark nedir?",
      answer:
        "SEO ajansı; teknik SEO uzmanı, içerik stratejisti, link building uzmanı ve data analistinden oluşan çok disiplinli bir ekip sunar. Bu sayede tek bir kişinin kapsayamayacağı kapsamlı ve eş zamanlı optimizasyon çalışmaları yürütülür. Freelancer daha uygun maliyetli olabilir ancak bir ajansın bütüncül yaklaşımı, ölçeklenebilirliği ve sürekli destek imkanı genellikle daha yüksek ROI sağlar.",
    },
    {
      question: "Hangi sektörler için SEO hizmeti veriyorsunuz?",
      answer:
        "E-ticaret, turizm (oteller, tatil köyleri), sağlık, hukuk, eğitim, teknoloji, finans, yerel hizmet işletmeleri ve KOBİ'ler dahil olmak üzere tüm sektörlere SEO hizmeti veriyoruz. Fethiye başta olmak üzere Muğla bölgesi turizm işletmeleri için yerel SEO konusunda özellikle derin deneyimimiz bulunmaktadır.",
    },
    {
      question: "Belirli sıralamalar için garanti veriyor musunuz?",
      answer:
        "Etik bir SEO ajansı olarak belirli Google sıralamaları için garanti vermiyoruz — çünkü Google algoritmaları sürekli değişmekte olup hiçbir ajans bu değişkenlerin tamamını kontrol edemez. Ancak, kanıtlanmış metodolojilerimiz ve şeffaf süreçlerimizle organik trafik ve görünürlük artışı konusunda somut sonuçlar elde ettiğimizi verilerle gösterebiliriz.",
    },
    {
      question: "SEO çalışmalarını nasıl raporlandırırsınız?",
      answer:
        "Her ay detaylı SEO performans raporu sunuyoruz. Raporlarda; organik trafik değişimleri, anahtar kelime sıralamalarındaki gelişmeler, kazanılan backlink'ler, teknik SEO durumu, dönüşüm metrikleri ve bir sonraki ay için aksiyon planı yer alır. Ayrıca Google Search Console ve Analytics erişimi sağlıyoruz, böylece her veriye anında ulaşabilirsiniz.",
    },
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Ajansı Hizmeti",
    description:
      "Organik arama görünürlüğünüzü artıran profesyonel SEO ajansı hizmeti. Teknik SEO, içerik optimizasyonu, link building ve yerel SEO.",
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
    serviceType: "SEO Hizmeti",
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
  };

  // FAQ Schema
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

  // Breadcrumb
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "SEO Ajansı", url: "/seo-ajansi" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Watermark */}
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            S
          </div>

          {/* Decorative dots */}
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
                  SEO Ajansı
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  SEO Ajansı:
                  <br />
                  <span className="text-red-600">Organik Trafiğinizi</span>
                  <br />
                  Artırıyoruz
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md mb-8">
                  Google&apos;da üst sıralarda yer alın. Teknik SEO, içerik
                  optimizasyonu ve link building ile organik trafiğinizi
                  katlayın. 10+ yıllık deneyim, 200+ başarılı proje.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/iletisim"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Ücretsiz SEO Analizi Al
                  </Link>
                  <a
                    href="tel:+905079441715"
                    className="border border-gray-300 text-white hover:bg-gray-50 hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>

              {/* Right Content - Stats Box */}
              <div className="lg:w-1/2">
                <div className="bg-[#1a1918] p-8 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    SEO Performans Rakamlarımız
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        10+
                      </div>
                      <div className="text-gray-400 text-sm">Yıl Deneyim</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        200+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Başarılı Proje
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        %85
                      </div>
                      <div className="text-gray-400 text-sm">
                        Ort. Trafik Artışı
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-1">
                        %98
                      </div>
                      <div className="text-gray-400 text-sm">
                        Müşteri Memnuniyeti
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                      Fethiye, Muğla — Türkiye geneli hizmet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO Ajansı Nedir? ─────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  SEO Ajansı Nedir?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  SEO ajansı, işletmenizin Google ve diğer arama motorlarında
                  hedef kitlesi tarafından kolaylıkla bulunabilmesi için
                  kapsamlı arama motoru optimizasyonu çalışmaları yürüten
                  profesyonel dijital pazarlama firmasıdır.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Bir SEO ajansı; teknik SEO uzmanları, içerik stratejistleri,
                  link building uzmanları ve veri analistlerinden oluşan
                  multidisipliner ekibiyle, web sitenizin arama motoru
                  algoritmalarına uygunluğunu artırır. Böylece hedef anahtar
                  kelimelerinizde üst sıralarda yer alarak nitelikli organik
                  trafik kazanırsınız.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  SEO yalnızca anahtar kelime yerleştirmek değildir. Modern SEO;
                  teknik site sağlığı, kullanıcı deneyimi (UX), içerik
                  derinliği, otorite backlink kazanımı ve yerel görünürlük gibi
                  birbiriyle bağlantılı onlarca faktörü kapsar. Tüm bu
                  faktörleri bütüncül bir stratejiyle yönetmek için profesyonel
                  bir{" "}
                  <Link
                    href="/hizmetler/seo-hizmeti"
                    className="text-red-600 hover:underline font-semibold"
                  >
                    SEO hizmeti
                  </Link>{" "}
                  almak kritik önem taşır.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Teknik SEO",
                    "İçerik SEO",
                    "Link Building",
                    "Yerel SEO",
                    "E-ticaret SEO",
                    "SEO Analizi",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats box */}
              <div className="bg-gradient-to-br from-[#181716] to-[#1a1918] p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-6">
                  SEO Neden Bu Kadar Önemli?
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      stat: "%68",
                      text: "Online deneyimler bir arama motoruyla başlar",
                    },
                    {
                      stat: "%75",
                      text: "Kullanıcılar ikinci sayfaya hiç geçmez",
                    },
                    {
                      stat: "%5,4",
                      text: "Birinci sıranın ortalama tıklama oranı (CTR)",
                    },
                    {
                      stat: "14x",
                      text: "SEO'nun ücretli reklamlara kıyasla ortalama ROI'si",
                    },
                  ].map(({ stat, text }) => (
                    <div key={stat} className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-red-600 w-16 flex-shrink-0">
                        {stat}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Kaynaklar: BrightEdge, Backlinko, Search Engine Journal
                    araştırmaları
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Neden WebCraft? ───────────────────────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Neden WebCraft SEO Ajansı?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                2015&apos;ten bu yana 200&apos;den fazla işletmenin organik
                trafiğini artırdık. İşte bizi farklı kılan nedenler.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Teknik SEO Uzmanlığı
                </h3>
                <p className="text-gray-300">
                  Core Web Vitals, schema markup, crawl bütçesi optimizasyonu ve
                  site mimarisi — tüm teknik SEO faktörlerinde uzmanız.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Şeffaf Raporlama
                </h3>
                <p className="text-gray-300">
                  Her ay detaylı performans raporları. Google Search Console ve
                  Analytics verilerini yorumlayarak net bir tablo sunuyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Kanıtlanmış Sonuçlar
                </h3>
                <p className="text-gray-300">
                  200+ başarılı projede müşterilerimizin organik trafiğini
                  ortalama %85 oranında artırdık. Referanslarımız konuşuyor.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-yellow-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sektöre Özel Strateji
                </h3>
                <p className="text-gray-300">
                  E-ticaret, turizm, sağlık, hukuk, eğitim... Her sektörün
                  kendine özgü SEO dinamikleri var. Biz her sektöre özel
                  strateji geliştiriyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  White-Hat SEO
                </h3>
                <p className="text-gray-300">
                  Yalnızca Google&apos;ın onayladığı etik (white-hat) SEO
                  tekniklerini kullanıyoruz. Kısa vadeli taktikler yerine
                  kalıcı, sürdürülebilir büyüme sağlıyoruz.
                </p>
              </div>

              <div className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800">
                <div className="w-16 h-16 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sürekli Destek
                </h3>
                <p className="text-gray-300">
                  SEO süregelen bir süreçtir. Aylık optimizasyon, algoritma
                  güncellemelerine anlık uyum ve proaktif teknik destek ile
                  yanınızdayız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hizmet Kapsamı ────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SEO Hizmet Kapsamımız
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Organik görünürlüğünüzü artırmak için ihtiyaç duyduğunuz her SEO
                hizmetini tek çatı altında sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Teknik SEO
                </h3>
                <p className="text-gray-600 mb-4">
                  Site hızı (Core Web Vitals), mobil uyumluluk, XML sitemap,
                  robots.txt, canonical URL&apos;ler, schema markup ve crawl
                  bütçesi optimizasyonu. Web sitenizin teknik altyapısını
                  Google&apos;ın standartlarına göre yapılandırıyoruz.
                </p>
                <Link
                  href="/hizmetler/seo-uyumlu-web-sitesi"
                  className="text-red-600 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  SEO Uyumlu Web Sitesi <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  İçerik Optimizasyonu
                </h3>
                <p className="text-gray-600 mb-4">
                  Anahtar kelime araştırması, SEO uyumlu içerik üretimi, mevcut
                  sayfaların güçlendirilmesi ve içerik silo yapısı oluşturma.
                  Kullanıcı niyetiyle örtüşen, Google&apos;ın E-E-A-T
                  kriterlerine uygun içerikler hazırlıyoruz.
                </p>
                <Link
                  href="/blog/teknik-seo-kontrol-listesi"
                  className="text-red-600 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  Teknik SEO Rehberi <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Link2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Link Building
                </h3>
                <p className="text-gray-600 mb-4">
                  Otoriteli web sitelerinden kaliteli backlink kazanımı. Dijital
                  PR, konuk yazarlık ve içerik pazarlama yoluyla doğal link
                  profili oluşturma. Etik tekniklerle domain otoritenizi
                  artırıyoruz.
                </p>
                <Link
                  href="/blog/profesyonel-seo-hizmeti"
                  className="text-red-600 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  SEO Hizmeti Rehberi <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Yerel SEO
                </h3>
                <p className="text-gray-600 mb-4">
                  Google My Business optimizasyonu, yerel anahtar kelimeler, NAP
                  tutarlılığı ve yerel alıntı (citation) kazanımı ile bölgesel
                  aramalarda rakiplerinizin önüne geçin.
                </p>
                <Link
                  href="/blog/yerel-seo-stratejileri"
                  className="text-red-600 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  Yerel SEO Stratejileri <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  E-ticaret SEO
                </h3>
                <p className="text-gray-600 mb-4">
                  Ürün sayfası optimizasyonu, kategori yapısı, zengin snippet
                  (rich snippet) uygulaması ve e-ticaret platformuna özel teknik
                  SEO çalışmaları. Organik satışlarınızı artırıyoruz.
                </p>
                <Link
                  href="/e-ticaret-web-tasarim"
                  className="text-red-600 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  E-ticaret Çözümleri <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  SEO Analizi & Denetim
                </h3>
                <p className="text-gray-600 mb-4">
                  Mevcut sitenizin kapsamlı SEO denetimi: teknik sorunlar,
                  içerik boşlukları, rakip analizi ve büyüme fırsatları tespiti.
                  Öncelikli aksiyon planıyla süreci başlatıyoruz.
                </p>
                <Link
                  href="/hizmetler/seo-hizmeti"
                  className="text-red-600 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  SEO Hizmetimiz <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Başarı Hikayeleri ─────────────────────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                SEO Başarı Hikayelerimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Veriye dayalı SEO stratejilerimizle müşterilerimize sağladığımız
                somut sonuçlar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a1918] p-8 rounded-lg border border-gray-800">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  +312%
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Organik Trafik Artışı
                </h3>
                <p className="text-gray-400 mb-4">
                  Fethiye&apos;deki bir otel müşterimiz, 6 aylık SEO çalışması
                  sonucunda &quot;Fethiye otel&quot; aramasında ilk sayfaya
                  çıktı ve organik rezervasyonlarını %312 artırdı.
                </p>
                <div className="text-sm text-gray-500">
                  Sektör: Turizm &amp; Konaklama
                </div>
              </div>

              <div className="bg-[#1a1918] p-8 rounded-lg border border-gray-800">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  +178%
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Anahtar Kelime Sıralaması
                </h3>
                <p className="text-gray-400 mb-4">
                  Muğla&apos;daki bir KOBİ müşterimizin hedef anahtar
                  kelimelerinde ilk sayfada yer alan kelime sayısı 4 ayda
                  12&apos;den 33&apos;e çıktı.
                </p>
                <div className="text-sm text-gray-500">
                  Sektör: B2B Hizmetler
                </div>
              </div>

              <div className="bg-[#1a1918] p-8 rounded-lg border border-gray-800">
                <div className="text-5xl font-bold text-red-600 mb-2">
                  +240%
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Dönüşüm Artışı
                </h3>
                <p className="text-gray-400 mb-4">
                  Teknik SEO ve CRO odaklı çalışmamızla bir e-ticaret
                  müşterimizin organik kanaldan gelen satışları 5 ayda 2,4
                  katına çıktı.
                </p>
                <div className="text-sm text-gray-500">Sektör: E-ticaret</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Çalışma Süreci ────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SEO Çalışma Sürecimiz
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Şeffaf ve sistematik bir süreçle çalışıyoruz. Her adımı size
                raporluyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  num: "01",
                  title: "SEO Denetimi",
                  desc: "Mevcut site durumu, rakip analizi ve anahtar kelime fırsatları tespiti",
                },
                {
                  num: "02",
                  title: "Strateji",
                  desc: "Öncelikli hedefler, anahtar kelime haritası ve içerik planı oluşturma",
                },
                {
                  num: "03",
                  title: "Teknik Optimizasyon",
                  desc: "Site hızı, crawlability, schema markup ve mobil uyumluluk iyileştirmeleri",
                },
                {
                  num: "04",
                  title: "İçerik & Link",
                  desc: "SEO uyumlu içerik üretimi ve kaliteli backlink kazanım çalışmaları",
                },
                {
                  num: "05",
                  title: "İzleme & Optimizasyon",
                  desc: "Aylık raporlama, A/B testleri ve algoritma güncellemelerine adaptasyon",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {num}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

        {/* ── SEO vs Alternatifler ──────────────────────────── */}
        <section className="py-20 bg-[#181716]">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  SEO Ajansı mı, Freelancer mı?
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  SEO hizmetini freelancer bir uzman ya da bir ajans
                  aracılığıyla alabilirsiniz. Her iki seçeneğin avantaj ve
                  dezavantajları vardır, ancak büyüyen işletmeler için ajans
                  yaklaşımı genellikle daha etkilidir.
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  WebCraft gibi bir{" "}
                  <strong className="text-white">SEO ajansı</strong> ile
                  çalıştığınızda; birden fazla uzmanın birikiminden,
                  ölçeklenebilir süreçlerden ve sürekli güncel araç setlerinden
                  yararlanırsınız. Freelancer ise genellikle daha uygun
                  maliyetlidir ancak tek kişilik kapasitesi kısıtlayıcı
                  olabilir.
                </p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  Ücretsiz Danışmanlık Al <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Çok disiplinli uzman ekibi",
                    ajans: true,
                    freelancer: false,
                  },
                  {
                    label: "Ölçeklenebilir kapasite",
                    ajans: true,
                    freelancer: false,
                  },
                  {
                    label: "Düşük başlangıç maliyeti",
                    ajans: false,
                    freelancer: true,
                  },
                  {
                    label: "Kapsamlı araç seti",
                    ajans: true,
                    freelancer: false,
                  },
                  {
                    label: "Tutarlı süreç ve raporlama",
                    ajans: true,
                    freelancer: false,
                  },
                  {
                    label: "Doğrudan iletişim kolaylığı",
                    ajans: true,
                    freelancer: true,
                  },
                ].map(({ label, ajans, freelancer }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between bg-[#1a1918] p-4 rounded-lg border border-gray-800"
                  >
                    <span className="text-gray-300 text-sm">{label}</span>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Ajans</div>
                        <CheckCircle
                          className={`w-5 h-5 ${ajans ? "text-green-400" : "text-gray-600"}`}
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">
                          Freelancer
                        </div>
                        <CheckCircle
                          className={`w-5 h-5 ${freelancer ? "text-green-400" : "text-gray-600"}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Organik Büyümenizi Bugün Başlatın
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Ücretsiz SEO analizi ile web sitenizin mevcut durumunu ve büyüme
              potansiyelini değerlendiriyoruz. Hiçbir taahhüt gerektirmez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz SEO Analizi Al
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

        {/* ── Social Proof ──────────────────────────────────── */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <SocialProofStrip />
        </Suspense>

        {/* ── Related Blog Posts ────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              SEO Hakkında Kapsamlı Kaynaklar
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              SEO çalışmalarınıza yön verecek pratik rehberler.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: "/blog/teknik-seo-kontrol-listesi",
                  label: "Rehber",
                  title: "Teknik SEO Kontrol Listesi",
                  desc: "Web sitenizi teknik SEO açısından değerlendirin. XML sitemap, robots.txt, schema markup ve site hızı rehberi.",
                },
                {
                  href: "/blog/yerel-seo-stratejileri",
                  label: "Rehber",
                  title: "Yerel SEO Stratejileri",
                  desc: "Google My Business optimizasyonu ve yerel arama sıralamalarında üst sıralara çıkmak için kanıtlanmış stratejiler.",
                },
                {
                  href: "/blog/profesyonel-seo-hizmeti",
                  label: "Makale",
                  title: "Profesyonel SEO Hizmeti Nedir?",
                  desc: "Profesyonel SEO hizmetinin kapsamı, süreçleri ve işletmenize nasıl değer kattığı hakkında kapsamlı rehber.",
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
                  <span className="inline-flex items-center gap-1 text-xs text-red-500 mt-3 font-medium">
                    Okuyun <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <ServiceFAQSection faqs={faqs} schema={faqSchema} />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Link from "next/link";
import { Check, X, Minus } from "lucide-react";

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
    "Web Tasarım Platformları Karşılaştırması 2026 | WordPress vs Shopify vs Wix vs Özel Yazılım",
  description:
    "WordPress, Shopify, Wix, Squarespace ve özel kodlama karşılaştırması. Hangisi sizin projeniz için en uygun? SEO, hız, maliyet, ölçeklenebilirlik detaylı analiz.",
  keywords:
    "wordpress vs shopify, wix vs wordpress, web tasarım platformları, en iyi web sitesi platformu, shopify vs özel e-ticaret, wordpress avantajları dezavantajları, squarespace alternatifi, web sitesi nasıl yapılır 2026",
  authors: [{ name: "WebCraft Uzman Ekibi" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/karsilastirma/platformlar",
  },
  openGraph: {
    title: "Web Tasarım Platformları Karşılaştırması 2026",
    description:
      "WordPress, Shopify, Wix, Squarespace ve özel kodlama: Hangisi sizin için doğru seçim? Detaylı karşılaştırma tablosu ve uzman analizi.",
    url: "https://www.webcraft.tr/karsilastirma/platformlar",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "article",
  },
};

const platforms = [
  {
    name: "Özel Kodlama",
    subtitle: "Next.js / React",
    highlight: true,
    color: "red",
  },
  { name: "WordPress", subtitle: "CMS", highlight: false, color: "blue" },
  {
    name: "Shopify",
    subtitle: "E-Ticaret",
    highlight: false,
    color: "green",
  },
  { name: "Wix", subtitle: "DIY Yapıcı", highlight: false, color: "purple" },
  {
    name: "Squarespace",
    subtitle: "DIY Yapıcı",
    highlight: false,
    color: "gray",
  },
];

type Rating = "excellent" | "good" | "average" | "poor";

interface ComparisonRow {
  criteria: string;
  ratings: Rating[];
  details: string[];
}

const comparisons: ComparisonRow[] = [
  {
    criteria: "Sayfa Hızı",
    ratings: ["excellent", "average", "good", "poor", "average"],
    details: [
      "95+ PageSpeed",
      "60-85 (eklenti bağımlı)",
      "75-85 ortalama",
      "55-70 (yavaş)",
      "65-80 ortalama",
    ],
  },
  {
    criteria: "SEO Performansı",
    ratings: ["excellent", "good", "average", "poor", "average"],
    details: [
      "Tam kontrol, teknik SEO",
      "Eklentilerle iyi (Yoast/RankMath)",
      "Temel SEO, e-ticaret odaklı",
      "Sınırlı, temel SEO",
      "Orta düzey SEO desteği",
    ],
  },
  {
    criteria: "Özelleştirme",
    ratings: ["excellent", "good", "average", "poor", "poor"],
    details: [
      "Sınırsız, tam özgürlük",
      "Tema + eklentilerle geniş",
      "Tema tabanlı, sınırlı",
      "Sürükle-bırak, şablon",
      "Şablon tabanlı, sınırlı",
    ],
  },
  {
    criteria: "Güvenlik",
    ratings: ["excellent", "average", "good", "good", "good"],
    details: [
      "Özel güvenlik önlemleri",
      "Eklenti bağımlı, saldırılara açık",
      "Platform tarafından yönetilir",
      "Platform standart",
      "Platform standart",
    ],
  },
  {
    criteria: "Ölçeklenebilirlik",
    ratings: ["excellent", "good", "average", "poor", "poor"],
    details: [
      "Sınırsız büyüme",
      "Hosting'e bağlı, genişleyebilir",
      "E-ticaret için iyi, genel amaç sınırlı",
      "Ciddi kısıtlamalar",
      "Büyük projeler için yetersiz",
    ],
  },
  {
    criteria: "Bakım Kolaylığı",
    ratings: ["good", "poor", "excellent", "excellent", "excellent"],
    details: [
      "Geliştirici gerekli",
      "Sürekli güncelleme, eklenti uyumu",
      "Platform yönetir",
      "Kullanıcı yönetir, kolay",
      "Kullanıcı yönetir, kolay",
    ],
  },
  {
    criteria: "E-Ticaret",
    ratings: ["excellent", "good", "excellent", "average", "average"],
    details: [
      "Özel çözümler, sınırsız",
      "WooCommerce ile güçlü",
      "En iyi e-ticaret platformu",
      "Temel mağaza özellikleri",
      "Sınırlı e-ticaret",
    ],
  },
  {
    criteria: "Sahiplik",
    ratings: ["excellent", "excellent", "poor", "poor", "poor"],
    details: [
      "Tam sahiplik, taşınabilir",
      "Açık kaynak, tam sahiplik",
      "Platform bağımlı",
      "Platform bağımlı",
      "Platform bağımlı",
    ],
  },
];

const costData = [
  {
    platform: "Özel Kodlama (WebCraft)",
    setup: "15.000 - 100.000₺",
    monthly: "250 - 800₺",
    yearly5: "55.000 - 150.000₺",
    highlight: true,
  },
  {
    platform: "WordPress",
    setup: "5.000 - 50.000₺",
    monthly: "200 - 1.500₺",
    yearly5: "25.000 - 130.000₺",
    highlight: false,
  },
  {
    platform: "Shopify",
    setup: "3.000 - 20.000₺",
    monthly: "1.000 - 5.000₺",
    yearly5: "65.000 - 320.000₺",
    highlight: false,
  },
  {
    platform: "Wix",
    setup: "0 - 5.000₺",
    monthly: "300 - 1.500₺",
    yearly5: "20.000 - 95.000₺",
    highlight: false,
  },
  {
    platform: "Squarespace",
    setup: "0 - 3.000₺",
    monthly: "400 - 1.800₺",
    yearly5: "25.000 - 110.000₺",
    highlight: false,
  },
];

function RatingIcon({ rating }: { rating: Rating }) {
  switch (rating) {
    case "excellent":
      return <Check className="w-6 h-6 text-green-600" />;
    case "good":
      return <Check className="w-6 h-6 text-blue-600" />;
    case "average":
      return <Minus className="w-6 h-6 text-yellow-600" />;
    case "poor":
      return <X className="w-6 h-6 text-red-600" />;
  }
}

function RatingLabel({ rating }: { rating: Rating }) {
  const labels: Record<Rating, string> = {
    excellent: "Mükemmel",
    good: "İyi",
    average: "Orta",
    poor: "Zayıf",
  };
  const colors: Record<Rating, string> = {
    excellent: "text-green-700 bg-green-50",
    good: "text-blue-700 bg-blue-50",
    average: "text-yellow-700 bg-yellow-50",
    poor: "text-red-700 bg-red-50",
  };
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors[rating]}`}
    >
      {labels[rating]}
    </span>
  );
}

export default function PlatformlarPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Karşılaştırma", url: "/karsilastirma" },
      { name: "Platformlar", url: "/karsilastirma/platformlar" },
    ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Web sitesi için en iyi platform hangisi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En iyi platform projenizin ihtiyaçlarına bağlıdır. Kurumsal web siteleri ve büyüme hedefleyen işletmeler için özel kodlama (Next.js/React) en iyi performansı, SEO'yu ve esnekliği sunar. E-ticaret odaklı projeler için Shopify hızlı başlangıç sağlar. Blog ve içerik siteleri için WordPress güçlü bir seçenektir. Hobi siteleri ve basit projeler için Wix veya Squarespace yeterlidir.",
        },
      },
      {
        "@type": "Question",
        name: "WordPress mu yoksa özel kodlama mı tercih etmeliyim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress, hızlıca kurulabilen ve eklentilerle genişletilebilen bir CMS'dir ancak güvenlik güncellemeleri, eklenti uyumsuzlukları ve performans sorunlarıyla karşılaşabilirsiniz. Özel kodlama (Next.js gibi) tam kontrol, üstün performans ve gelişmiş SEO sunar, ancak geliştirici desteği gerektirir. Büyüyen işletmeler ve uzun vadeli projeler için özel kodlama daha iyi bir yatırımdır.",
        },
      },
      {
        "@type": "Question",
        name: "Shopify mı yoksa özel e-ticaret mi yapmalıyım?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shopify hızlı başlangıç, güvenli ödeme altyapısı ve kolay yönetim sunar. Ancak aylık abonelik ücretleri, işlem komisyonları ve özelleştirme kısıtlamaları vardır. Yüksek hacimli satış, özel iş süreçleri veya tam marka deneyimi istiyorsanız özel e-ticaret çözümü daha avantajlıdır. WebCraft, her iki yaklaşım için de uzman rehberlik sunar.",
        },
      },
      {
        "@type": "Question",
        name: "Wix ile profesyonel bir web sitesi yapılabilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wix ile temel düzeyde web siteleri oluşturulabilir ancak profesyonel işletme siteleri için ciddi kısıtlamalar vardır: yavaş sayfa hızı (Core Web Vitals sorunları), sınırlı SEO kontrolü, şablon tabanlı tasarım, platform bağımlılığı ve ölçeklenme zorlukları. Profesyonel görünüm ve Google sıralaması önemliyse, Wix yerine özel kodlama veya WordPress tercih edilmelidir.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                2026 Güncel Karşılaştırma
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Web Tasarım Platformları
                <br />
                <span className="text-red-600">Karşılaştırması</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                WordPress, Shopify, Wix, Squarespace ve özel kodlama: Hangisi
                sizin projeniz için en doğru seçim?
              </p>
            </div>

            {/* Platform Badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={`px-5 py-3 rounded-xl shadow-md ${
                    p.highlight
                      ? "bg-red-600 text-white border-2 border-red-600"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  <span className="font-bold">{p.name}</span>
                  <span
                    className={`text-sm ml-1 ${p.highlight ? "text-red-100" : "text-gray-500"}`}
                  >
                    ({p.subtitle})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Content - SEO Text */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Doğru Platformu Seçmek Neden Önemli?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Web siteniz için doğru platform seçimi, işletmenizin dijital
                başarısını doğrudan etkiler. Yanlış platform seçimi; yavaş sayfa
                hızları, düşük Google sıralaması, güvenlik açıkları ve yüksek
                uzun vadeli maliyetler anlamına gelebilir.
              </p>
              <p>
                2026 itibarıyla web tasarım dünyasında beş ana yaklaşım öne
                çıkıyor: <strong>özel kodlama</strong> (Next.js, React gibi
                modern framework&apos;ler), <strong>WordPress</strong> (dünyanın
                en popüler CMS&apos;i), <strong>Shopify</strong> (e-ticaret
                odaklı platform), <strong>Wix</strong> ve{" "}
                <strong>Squarespace</strong> (sürükle-bırak yapıcılar). Her
                birinin güçlü ve zayıf yönleri vardır.
              </p>
              <p>
                Bu karşılaştırmada, her platformu performans, SEO, özelleştirme,
                güvenlik, maliyet ve ölçeklenebilirlik açısından detaylıca
                analiz ediyoruz. Böylece işletmeniz için en doğru kararı
                verebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Detaylı Karşılaştırma Tablosu
              </h2>
              <p className="text-lg text-gray-600">
                8 kritik kriterde 5 platformun kapsamlı değerlendirmesi
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-4 py-4 text-left font-bold min-w-[140px]">
                        Kriter
                      </th>
                      {platforms.map((p) => (
                        <th
                          key={p.name}
                          className={`px-4 py-4 text-center font-bold ${p.highlight ? "bg-red-700" : ""}`}
                        >
                          <div>{p.name}</div>
                          <div className="text-xs font-normal opacity-70">
                            {p.subtitle}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisons.map((row) => (
                      <tr key={row.criteria} className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">
                          {row.criteria}
                        </td>
                        {row.ratings.map((rating, i) => (
                          <td
                            key={`${row.criteria}-${platforms[i].name}`}
                            className={`px-4 py-4 text-center ${i === 0 ? "bg-red-50/50" : ""}`}
                          >
                            <div className="flex flex-col items-center gap-1.5">
                              <RatingIcon rating={rating} />
                              <RatingLabel rating={rating} />
                              <span className="text-xs text-gray-500 mt-1">
                                {row.details[i]}
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Deep Dives */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Her Platformun Detaylı Analizi
            </h2>

            <div className="space-y-12">
              {/* Custom Coding */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-600">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Özel Kodlama (Next.js / React)
                  </h3>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                    EN İYİ PERFORMANS
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Next.js ve React gibi modern framework&apos;lerle oluşturulan
                  web siteleri, performans, SEO ve ölçeklenebilirlik açısından
                  en üstün sonuçları sunar. Google&apos;ın Core Web Vitals
                  metriklerinde 95+ skor elde etmek, özel kodlama ile doğal bir
                  sonuçtur.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">
                      ✅ Avantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• En hızlı sayfa yükleme süreleri</li>
                      <li>• Gelişmiş teknik SEO kontrolü</li>
                      <li>• Sınırsız özelleştirme ve esneklik</li>
                      <li>• Tam kod sahipliği, platform bağımsız</li>
                      <li>• Güvenlik açıklarına karşı tam kontrol</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">
                      ❌ Dezavantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Profesyonel geliştirici gerektirir</li>
                      <li>• Başlangıç maliyeti daha yüksek</li>
                      <li>• Geliştirme süresi daha uzun</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>İdeal kullanım:</strong> Büyüyen işletmeler, kurumsal
                  siteler, yüksek trafikli projeler, özel fonksiyonlar
                  gerektiren proje.
                </p>
              </div>

              {/* WordPress */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    WordPress
                  </h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    EN POPÜLER CMS
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Dünya genelinde web sitelerinin yaklaşık %43&apos;ü WordPress
                  ile çalışır. Geniş eklenti ekosistemi ve tema seçenekleri
                  sunar, ancak performans ve güvenlik konusunda dikkatli yönetim
                  gerektirir.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">
                      ✅ Avantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 60.000+ ücretsiz eklenti</li>
                      <li>• Açık kaynak, tam sahiplik</li>
                      <li>• Geniş topluluk desteği</li>
                      <li>• Yoast/RankMath ile iyi SEO imkanı</li>
                      <li>• WooCommerce ile güçlü e-ticaret</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">
                      ❌ Dezavantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Güvenlik saldırılarına açık (en çok hacklenen)</li>
                      <li>• Eklenti uyumsuzlukları ve çakışmalar</li>
                      <li>• Sürekli güncelleme gerektir</li>
                      <li>• Eklentilerle yavaşlayabilir</li>
                      <li>• Kaliteli hosting şart</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>İdeal kullanım:</strong> Blog siteleri, içerik
                  ağırlıklı siteler, orta ölçekli e-ticaret (WooCommerce),
                  teknik bilgisi olan kullanıcılar.
                </p>
              </div>

              {/* Shopify */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Shopify</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    EN İYİ E-TİCARET
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Shopify, e-ticaret odaklı en popüler platformdur. Hızlı mağaza
                  kurulumu, güvenli ödeme altyapısı ve entegre lojistik
                  çözümleri sunar. Ancak aylık abonelik ücretleri ve işlem
                  komisyonları maliyeti artırabilir.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">
                      ✅ Avantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• E-ticaret için en kapsamlı altyapı</li>
                      <li>• Güvenli ödeme sistemi dahil</li>
                      <li>• 8.000+ uygulama mağazası</li>
                      <li>• Hızlı kurulum (1-2 gün)</li>
                      <li>• 7/24 destek</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">
                      ❌ Dezavantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • Yüksek aylık maliyet (özellikle Türkiye&apos;de)
                      </li>
                      <li>• İşlem başına %0.5-2 komisyon</li>
                      <li>• SEO kısıtlamaları (URL yapısı sabit)</li>
                      <li>• Platform bağımlılığı</li>
                      <li>• Tasarım özelleştirme sınırlı</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>İdeal kullanım:</strong> Hızlıca online mağaza açmak
                  isteyenler, dropshipping, uluslararası satış, teknik bilgisi
                  olmayan e-ticaret girişimcileri.
                </p>
              </div>

              {/* Wix & Squarespace */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-600">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Wix & Squarespace
                  </h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                    EN KOLAY BAŞLANGIÇ
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Sürükle-bırak web sitesi yapıcıları, teknik bilgi
                  gerektirmeden hızlıca web sitesi oluşturmanıza olanak tanır.
                  Ancak profesyonel işletmeler için ciddi kısıtlamaları vardır.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">
                      ✅ Avantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Hiç kod bilmeden site oluşturma</li>
                      <li>• Düşük başlangıç maliyeti</li>
                      <li>• Hazır şablonlar ve görseller</li>
                      <li>• Hosting ve SSL dahil</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">
                      ❌ Dezavantajları
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Yavaş sayfa hızı (Core Web Vitals başarısız)</li>
                      <li>• SEO kontrolü çok sınırlı</li>
                      <li>• Ölçeklenme imkanı yok</li>
                      <li>• Şablon görünümü, özgün değil</li>
                      <li>• Platform bağımlılığı (kod alamazsınız)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  <strong>İdeal kullanım:</strong> Kişisel bloglar, hobi
                  siteleri, portfolio, geçici event siteleri, MVP testleri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Maliyet Karşılaştırması (5 Yıllık Toplam)
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Kurulum, aylık ücret ve 5 yıllık toplam sahip olma maliyeti
            </p>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 text-left font-bold">
                        Platform
                      </th>
                      <th className="px-6 py-4 text-center font-bold">
                        Kurulum
                      </th>
                      <th className="px-6 py-4 text-center font-bold">Aylık</th>
                      <th className="px-6 py-4 text-center font-bold">
                        5 Yıl Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {costData.map((row) => (
                      <tr
                        key={row.platform}
                        className={
                          row.highlight
                            ? "bg-red-50 hover:bg-red-100"
                            : "hover:bg-gray-50"
                        }
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {row.platform}
                          {row.highlight && (
                            <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">
                              ÖNERİLİR
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-900">
                          {row.setup}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-900">
                          {row.monthly}
                        </td>
                        <td className="px-6 py-4 text-center font-bold text-gray-900">
                          {row.yearly5}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl">
              <p className="font-bold text-gray-900 mb-2">
                💡 Uzun Vadeli Maliyet Analizi
              </p>
              <p className="text-gray-700">
                Başlangıçta ucuz görünen platformlar, aylık abonelik ücretleri,
                eklenti maliyetleri ve zaman kaybı nedeniyle uzun vadede daha
                pahalıya mal olabilir. Özel kodlama ile yapılan profesyonel web
                sitesi, tek seferlik yatırımla uzun yıllar boyunca güçlü
                performans sunar ve{" "}
                <strong>platform bağımlılığını ortadan kaldırır</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Hangi Platformu Seçmelisiniz?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kurumsal İşletme
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Marka imajı, performans ve ölçeklenebilirlik önemli
                </p>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-bold">
                  → Özel Kodlama (WebCraft)
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  E-Ticaret Mağazası
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Online satış, ödeme sistemi, stok yönetimi
                </p>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-bold">
                  → Özel E-Ticaret veya Shopify
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Blog / İçerik Sitesi
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  İçerik odaklı, düzenli yayın, SEO önemli
                </p>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-bold">
                  → WordPress veya Özel Kodlama
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Startup / MVP
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Hızlı piyasaya çıkış, test, iterasyon
                </p>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-bold">
                  → Özel Kodlama (WebCraft)
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  KOBİ Web Sitesi
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Profesyonel görünüm, bütçe dostu çözüm
                </p>
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-bold">
                  → WebCraft KOBİ Paketi
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kişisel / Hobi Sitesi
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Düşük bütçe, basit ihtiyaçlar, öğrenme amaçlı
                </p>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-bold">
                  → Wix veya Squarespace
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Web sitesi için en iyi platform hangisi?
                </h3>
                <p className="text-gray-700">
                  En iyi platform projenizin ihtiyaçlarına bağlıdır. Kurumsal
                  web siteleri ve büyüme hedefleyen işletmeler için özel kodlama
                  (Next.js/React) en iyi performansı, SEO&apos;yu ve esnekliği
                  sunar. E-ticaret odaklı projeler için Shopify hızlı başlangıç
                  sağlar. Blog ve içerik siteleri için WordPress güçlü bir
                  seçenektir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  WordPress mu yoksa özel kodlama mı tercih etmeliyim?
                </h3>
                <p className="text-gray-700">
                  WordPress hızlıca kurulabilen ve eklentilerle genişletilebilen
                  bir CMS&apos;dir ancak güvenlik güncellemeleri ve performans
                  sorunlarıyla karşılaşabilirsiniz. Özel kodlama tam kontrol,
                  üstün performans ve gelişmiş SEO sunar. Büyüyen işletmeler ve
                  uzun vadeli projeler için özel kodlama daha iyi bir
                  yatırımdır.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Shopify mı yoksa özel e-ticaret mi yapmalıyım?
                </h3>
                <p className="text-gray-700">
                  Shopify hızlı başlangıç ve güvenli ödeme altyapısı sunar ancak
                  aylık abonelik ücretleri ve işlem komisyonları maliyeti
                  artırır. Yüksek hacimli satış ve tam marka deneyimi
                  istiyorsanız özel e-ticaret çözümü daha avantajlıdır.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Wix ile profesyonel bir web sitesi yapılabilir mi?
                </h3>
                <p className="text-gray-700">
                  Wix ile temel düzeyde web siteleri oluşturulabilir ancak
                  profesyonel işletme siteleri için ciddi kısıtlamalar vardır:
                  yavaş sayfa hızı, sınırlı SEO kontrolü, şablon tabanlı tasarım
                  ve platform bağımlılığı. Profesyonel görünüm ve Google
                  sıralaması önemliyse özel kodlama veya WordPress tercih
                  edilmelidir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Diğer Karşılaştırmalar
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/karsilastirma/freelancer-vs-ajans"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Freelancer vs Ajans →
              </Link>
              <Link
                href="/karsilastirma/webcraft-vs-diy"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                WebCraft vs DIY Yapıcılar →
              </Link>
              <Link
                href="/hizmetler/web-tasarim"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Web Tasarım Hizmetleri →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f84525] text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Projeniz İçin En Doğru Platformu Birlikte Belirleyelim
            </h2>
            <p className="text-xl mb-8 opacity-90">
              10 yıllık deneyimimizle işletmenize en uygun çözümü öneriyoruz.
              Ücretsiz danışmanlık ve maliyet analizi alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/iletisim"
                className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Ücretsiz Danışmanlık Alın
              </Link>
              <Link
                href="/islerimiz"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Projelerimizi İnceleyin
              </Link>
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

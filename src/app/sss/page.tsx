import { Metadata } from "next";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) | WebCraft - Web Tasarım ve SEO Hizmeti",
  description:
    "Web tasarım, SEO hizmeti ve dijital pazarlama hakkında sıkça sorulan sorular. Web tasarım fiyatları, SEO hizmeti, e-ticaret web tasarımı ve daha fazlası hakkında merak ettiğiniz her şey.",
  keywords:
    "web tasarım SSS, SEO SSS, web tasarım soruları, web tasarım fiyatları, SEO hizmeti soruları, e-ticaret SSS",
  openGraph: {
    title: "Sıkça Sorulan Sorular (SSS) | WebCraft",
    description:
      "Web tasarım, SEO hizmeti ve dijital pazarlama hakkında sıkça sorulan sorular ve cevapları.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function FAQPage() {
  // Breadcrumb schema for FAQ page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.webcraft.tr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sıkça Sorulan Sorular",
        item: "https://www.webcraft.tr/sss",
      },
    ],
  };

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Web tasarım hizmeti ne kadar sürer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Web tasarım projesi süresi, projenin kapsamına ve karmaşıklığına bağlıdır. Basit kurumsal web siteleri 2-4 hafta içinde, e-ticaret siteleri 4-8 hafta içinde tamamlanır. Profesyonel ekibimiz, belirlediğiniz teslim tarihine uygun olarak projeleri zamanında teslim eder.",
        },
      },
      {
        "@type": "Question",
        name: "Web tasarım fiyatları nasıl belirlenir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Web tasarım fiyatları projenin kapsamına, özelliklerine ve ihtiyaçlarınıza göre belirlenir. Her proje özel olarak değerlendirilir ve size en uygun teklif sunulur. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "SEO hizmeti ile Google'da üst sıralarda yer alabilir miyim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, profesyonel SEO hizmetimiz ile web siteniz Google'da üst sıralarda yer alabilir. SEO uzman ekibimiz, arama motoru algoritmalarını yakından takip ederek web sitenizi optimize eder. Organik trafiğinizi artırmak için site içi ve site dışı SEO teknikleri uygularız.",
        },
      },
      {
        "@type": "Question",
        name: "Mobil uyumlu web tasarım yapıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, tüm web sitelerimiz responsive (mobil uyumlu) olarak tasarlanır. Modern web tasarım standartlarına uygun olarak, web siteleriniz masaüstü, tablet ve mobil cihazlarda mükemmel görünür ve çalışır.",
        },
      },
      {
        "@type": "Question",
        name: "Web tasarım projesi sonrası destek veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, web tasarım projesi teslim sonrası teknik destek sağlıyoruz. Bakım ve güncelleme paketlerimiz ile web sitenizin güvenliğini, performansını ve içeriklerini sürekli güncel tutuyoruz. 7/24 destek hizmetimiz ile her zaman yanınızdayız.",
        },
      },
      {
        "@type": "Question",
        name: "E-ticaret web sitesi için hangi ödeme sistemlerini entegre edebilirsiniz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "E-ticaret web siteleriniz için tüm popüler ödeme sistemlerini entegre edebiliriz. İyzico, PayTR, PayU, Stripe gibi ödeme sistemleri ile çalışıyoruz. Ayrıca, banka kartları ve havale/EFT ödeme seçenekleri de mevcuttur.",
        },
      },
      {
        "@type": "Question",
        name: "Web tasarım projesi için içerik sağlıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, web tasarım projeniz için profesyonel içerik yazım hizmeti sunuyoruz. SEO uyumlu metin yazımı, görsel içerik oluşturma ve sosyal medya içerikleri hazırlıyoruz. İsterseniz, kendi içeriklerinizi de kullanabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Web sitesi tasarımında hangi teknolojileri kullanıyorsunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern web teknolojileri kullanıyoruz. Next.js, React, TypeScript gibi güncel teknolojiler ile performanslı ve SEO uyumlu web siteleri geliştiriyoruz. Ayrıca, WordPress, Shopify gibi CMS sistemleri ile de çalışıyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Sosyal medya yönetimi hizmeti veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, profesyonel sosyal medya yönetimi hizmeti sunuyoruz. Instagram, Facebook, LinkedIn, Twitter gibi platformlarda içerik oluşturma, paylaşım planlaması ve topluluk yönetimi hizmetleri sağlıyoruz. Markanızın sosyal medya varlığını güçlendiriyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Web tasarım ajansınız nerede bulunuyor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WebCraft web tasarım ajansı Fethiye - Muğla'da bulunuyor. Ancak, Türkiye genelinde ve uluslararası müşterilere uzaktan web tasarım, SEO ve dijital pazarlama hizmetleri sunuyoruz. Online toplantılar ve dijital iletişim kanalları ile projelerimizi yürütüyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Web sitesi tasarımında copyright ve telif hakları nasıl işliyor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tamamlanan web tasarım projesi, proje sahibinin mülkiyetindedir. Tasarım hakları, içerik hakları ve kod hakları müşteriye aittir. Ancak, kullandığımız üçüncü parti yazılımlar ve görseller için gerekli lisansları temin ediyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Web tasarım projesi için ödeme planı yapıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, web tasarım projeleri için esnek ödeme planları sunuyoruz. Genellikle %50 peşin, %50 teslim şeklinde çalışıyoruz. Daha büyük projeler için taksitli ödeme planları da mevcuttur. Ödeme şekillerini proje kapsamına göre birlikte belirliyoruz.",
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
        <div className="pt-32 pb-20">
          <FAQSection />
        </div>
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}


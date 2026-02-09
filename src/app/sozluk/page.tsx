import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Book } from "lucide-react";

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
    "Web Tasarım ve Dijital Pazarlama Sözlüğü | Teknik Terimler | WebCraft",
  description:
    "Web tasarım, SEO ve dijital pazarlama terimleri sözlüğü. Teknik terimler, açıklamalar ve kullanım örnekleri. A'dan Z'ye kapsamlı rehber.",
  keywords:
    "web tasarım sözlük, seo terimleri, dijital pazarlama terimleri, teknik terimler, responsive design nedir, api nedir, cms nedir",
  authors: [{ name: "WebCraft Uzman Ekibi" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/sozluk",
  },
  openGraph: {
    title: "Web Tasarım ve Dijital Pazarlama Sözlüğü",
    description:
      "A'dan Z'ye web tasarım, SEO ve dijital pazarlama terimleri. Kapsamlı açıklamalar ve örnekler.",
    url: "https://www.webcraft.tr/sozluk",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "website",
  },
};

interface Term {
  turkish: string;
  english: string;
  definition: string;
  related?: string[];
}

const terms: Record<string, Term[]> = {
  A: [
    {
      turkish: "Alt Etiketi (Alt Text)",
      english: "Alt Text / Alternative Text",
      definition:
        "Görsellere eklenen açıklayıcı metin. Görme engelli kullanıcılar için erişilebilirlik sağlar ve SEO için önemlidir. Görseller yüklenemediğinde bu metin görüntülenir.",
      related: ["SEO", "Erişilebilirlik", "Görsel Optimizasyonu"],
    },
    {
      turkish: "Anchor Text",
      english: "Anchor Text",
      definition:
        "Bir bağlantının (link) tıklanabilir görünen metin kısmı. SEO için önemlidir çünkü arama motorları bu metni hedef sayfanın içeriği hakkında ipucu olarak kullanır.",
      related: ["Backlink", "İç Bağlantılar", "SEO"],
    },
    {
      turkish: "API (Uygulama Programlama Arayüzü)",
      english: "API - Application Programming Interface",
      definition:
        "Farklı yazılım uygulamalarının birbirleriyle iletişim kurmasını sağlayan arayüz. Örneğin, ödeme API'si ile web siteniz kredi kartı işlemleri yapabilir.",
      related: ["Backend", "REST API", "GraphQL"],
    },
    {
      turkish: "A/B Testi",
      english: "A/B Testing",
      definition:
        "İki farklı versiyonun (A ve B) performansını karşılaştırarak hangisinin daha iyi sonuç verdiğini belirleme yöntemi. Web tasarım, e-posta pazarlama ve reklamlarda kullanılır.",
      related: ["Dönüşüm Oranı", "Kullanıcı Deneyimi", "Optimizasyon"],
    },
  ],
  B: [
    {
      turkish: "Backend (Arka Uç)",
      english: "Backend",
      definition:
        "Web sitesinin kullanıcılar tarafından görünmeyen sunucu tarafı. Veritabanı, sunucu mantığı ve uygulama fonksiyonları backend'de çalışır.",
      related: ["Frontend", "API", "Veritabanı"],
    },
    {
      turkish: "Backlink (Geri Bağlantı)",
      english: "Backlink",
      definition:
        "Başka bir web sitesinden kendi web sitenize verilen bağlantı. SEO için çok önemlidir. Kaliteli backlink'ler Google sıralamasını olumlu etkiler.",
      related: ["SEO", "PageRank", "Off-Page SEO"],
    },
    {
      turkish: "Breadcrumb (İçerik Haritası)",
      english: "Breadcrumb Navigation",
      definition:
        "Kullanıcının web sitesinde bulunduğu konumu gösteren navigasyon elemanı. Örnek: Ana Sayfa > Hizmetler > Web Tasarım. SEO ve kullanıcı deneyimi için faydalıdır.",
      related: ["Navigasyon", "SEO", "Kullanıcı Deneyimi"],
    },
  ],
  C: [
    {
      turkish: "Cache (Önbellek)",
      english: "Cache",
      definition:
        "Sık kullanılan verilerin geçici olarak saklandığı alan. Web sitelerinde hız artışı sağlar. Tarayıcı cache, sunucu cache ve CDN cache türleri vardır.",
      related: ["CDN", "Performans", "Sayfa Hızı"],
    },
    {
      turkish: "Canonical URL",
      english: "Canonical URL",
      definition:
        "Aynı içeriğin birden fazla URL'de bulunması durumunda, arama motorlarına hangisinin orijinal olduğunu bildiren etiket. Duplicate content sorununu önler.",
      related: ["SEO", "Duplicate Content", "Meta Etiketleri"],
    },
    {
      turkish: "CDN (İçerik Dağıtım Ağı)",
      english: "CDN - Content Delivery Network",
      definition:
        "Web sitesi içeriklerini (görseller, CSS, JS dosyaları) dünya genelinde dağıtık sunucularda tutan sistem. Kullanıcılara en yakın sunucudan içerik servis edilir, hız artar.",
      related: ["Performans", "Sayfa Hızı", "Hosting"],
    },
    {
      turkish: "CLS (Cumulative Layout Shift)",
      english: "CLS - Cumulative Layout Shift",
      definition:
        "Google Core Web Vitals metriklerinden biri. Sayfa yüklenirken görsel öğelerin beklenmedik şekilde kaymasını ölçer. İdeal değer: 0.1'in altı. Kullanıcı deneyimi için önemlidir.",
      related: ["Core Web Vitals", "LCP", "FID", "Performans"],
    },
    {
      turkish: "CMS (İçerik Yönetim Sistemi)",
      english: "CMS - Content Management System",
      definition:
        "Web sitesi içeriğini kod bilgisi olmadan yönetmeyi sağlayan sistem. WordPress, Drupal, Joomla örnekleri. WebCraft, Next.js ile headless CMS çözümleri sunar.",
      related: ["WordPress", "Headless CMS", "Backend"],
    },
    {
      turkish: "Cookie (Çerez)",
      english: "Cookie",
      definition:
        "Web sitelerinin tarayıcıda sakladığı küçük veri parçaları. Kullanıcı tercihleri, oturum bilgileri ve analitik veriler için kullanılır. KVKK/GDPR uyumu gereklidir.",
      related: ["Session", "Gizlilik", "KVKK"],
    },
    {
      turkish: "Core Web Vitals",
      english: "Core Web Vitals",
      definition:
        "Google'ın kullanıcı deneyimini ölçen üç temel metriği: LCP (yükleme hızı), FID (etkileşim hızı), CLS (görsel kararlılık). SEO sıralaması için önemlidir.",
      related: ["LCP", "FID", "CLS", "SEO", "Performans"],
    },
    {
      turkish: "CTR (Tıklama Oranı)",
      english: "CTR - Click-Through Rate",
      definition:
        "Bir içeriğin (reklam, arama sonucu, e-posta) kaç kez görüntülendiğine göre kaç kez tıklandığını gösteren oran. Yüksek CTR, içeriğin ilgi çekici olduğunu gösterir.",
      related: ["Google Ads", "SEO", "E-posta Pazarlama"],
    },
  ],
  D: [
    {
      turkish: "Domain (Alan Adı)",
      english: "Domain Name",
      definition:
        "Web sitesinin internet adresi. Örnek: www.webcraft.tr. Alan adı, web sunucusunun IP adresine işaret eder. Marka için önemli bir dijital varlıktır.",
      related: ["Hosting", "DNS", "SSL"],
    },
    {
      turkish: "Dönüşüm Oranı",
      english: "Conversion Rate",
      definition:
        "Web sitesi ziyaretçilerinin belirlenen hedef eylemi (satın alma, form doldurma, kayıt) gerçekleştirme oranı. %2-5 arası sektör ortalamasıdır.",
      related: ["Landing Page", "A/B Testi", "Kullanıcı Deneyimi"],
    },
  ],
  E: [
    {
      turkish: "E-ticaret",
      english: "E-commerce",
      definition:
        "Ürün ve hizmetlerin internet üzerinden alınıp satıldığı ticaret şekli. Online mağaza, ödeme sistemleri, stok yönetimi içerir.",
      related: ["Shopify", "WooCommerce", "Ödeme Gateway"],
    },
    {
      turkish: "Erişilebilirlik (WCAG)",
      english: "Accessibility (WCAG)",
      definition:
        "Web sitesinin engelli kullanıcılar (görme, işitme, motor engelliler) için kullanılabilir olması. WCAG 2.1 AA standartları uluslararası erişilebilirlik kriteri.",
      related: ["Alt Etiketi", "ARIA", "Kullanıcı Deneyimi"],
    },
  ],
  F: [
    {
      turkish: "FID (First Input Delay)",
      english: "FID - First Input Delay",
      definition:
        "Google Core Web Vitals metriklerinden biri. Kullanıcının sayfada ilk etkileşimi (tıklama, tuşa basma) ile tarayıcının yanıt vermesi arasındaki süre. İdeal değer: 100ms altı.",
      related: ["Core Web Vitals", "LCP", "CLS", "Performans"],
    },
    {
      turkish: "Frontend (Ön Uç)",
      english: "Frontend",
      definition:
        "Web sitesinin kullanıcılar tarafından görülen ve etkileşimde bulunulan kısmı. HTML, CSS, JavaScript kullanılarak oluşturulur. React, Next.js gibi frameworkler kullanılır.",
      related: ["Backend", "React", "HTML/CSS", "JavaScript"],
    },
  ],
  G: [
    {
      turkish: "Google Analytics",
      english: "Google Analytics",
      definition:
        "Google'ın ücretsiz web analitik aracı. Web sitesi trafiği, kullanıcı davranışları, dönüşüm oranları gibi verileri izler. GA4 en güncel versiyonudur.",
      related: ["Web Analitik", "GTM", "Dönüşüm Oranı"],
    },
    {
      turkish: "GraphQL",
      english: "GraphQL",
      definition:
        "API için sorgu dili. REST API'ye alternatif. Kullanıcılar ihtiyaç duydukları veriyi tam olarak belirtebilir, gereksiz veri transferini önler.",
      related: ["API", "REST API", "Backend"],
    },
  ],
  H: [
    {
      turkish: "Headless CMS",
      english: "Headless CMS",
      definition:
        "Frontend'den ayrık çalışan içerik yönetim sistemi. İçerik API aracılığıyla sunulur. Contentful, Strapi, Sanity örnekleri. Modern web siteleri için tercih edilir.",
      related: ["CMS", "API", "JAMstack"],
    },
    {
      turkish: "Hosting (Barındırma)",
      english: "Web Hosting",
      definition:
        "Web sitesinin dosyalarının saklandığı sunucu hizmeti. Shared hosting, VPS, dedicated server, cloud hosting türleri vardır. WebCraft, Vercel ve AWS kullanır.",
      related: ["Domain", "Sunucu", "CDN"],
    },
  ],
  I: [
    {
      turkish: "ISR (Incremental Static Regeneration)",
      english: "ISR",
      definition:
        "Next.js özelliği. Statik sayfaları belirli aralıklarla otomatik günceller. SSR performansı + SSG hızını birleştirir.",
      related: ["Next.js", "SSR", "SSG"],
    },
  ],
  J: [
    {
      turkish: "JAMstack",
      english: "JAMstack",
      definition:
        "JavaScript, API, Markup tabanlı modern web mimarisi. Statik site generatörleri (Next.js, Gatsby) kullanılır. Hızlı, güvenli ve ölçeklenebilir web siteleri için tercih edilir.",
      related: ["Next.js", "Headless CMS", "SSG"],
    },
    {
      turkish: "JavaScript",
      english: "JavaScript",
      definition:
        "Web sitelerine interaktivite kazandıran programlama dili. Frontend ve backend (Node.js) geliştirmede kullanılır. React, Vue, Angular gibi frameworklerin temeli.",
      related: ["React", "TypeScript", "Frontend"],
    },
    {
      turkish: "JSON-LD",
      english: "JSON-LD (Structured Data)",
      definition:
        "Yapılandırılmış veri formatı. Google gibi arama motorlarına web sayfası içeriği hakkında detaylı bilgi verir. Rich snippets ve knowledge graph için kullanılır.",
      related: ["Schema Markup", "SEO", "Structured Data"],
    },
  ],
  K: [
    {
      turkish: "Kullanıcı Deneyimi (UX)",
      english: "User Experience (UX)",
      definition:
        "Kullanıcının web sitesi ile etkileşiminde yaşadığı deneyim. Kolay navigasyon, hızlı yükleme, sezgisel tasarım UX'in parçalarıdır. İyi UX, dönüşüm oranını artırır.",
      related: ["UI", "Responsive Design", "Erişilebilirlik"],
    },
    {
      turkish: "Kullanıcı Arayüzü (UI)",
      english: "User Interface (UI)",
      definition:
        "Web sitesinin görsel tasarımı. Renkler, tipografi, düğmeler, formlar gibi görsel elemanlar UI'ın parçası. UI tasarımı, UX stratejisini görsel olarak hayata geçirir.",
      related: ["UX", "Web Tasarım", "Responsive Design"],
    },
  ],
  L: [
    {
      turkish: "Landing Page (Açılış Sayfası)",
      english: "Landing Page",
      definition:
        "Reklam veya kampanya için özel olarak tasarlanmış tek sayfa. Dönüşüm odaklıdır. Net CTA (call-to-action) içerir. A/B testi yapılarak optimize edilir.",
      related: ["Dönüşüm Oranı", "CTA", "Google Ads"],
    },
    {
      turkish: "Lazy Loading (Tembel Yükleme)",
      english: "Lazy Loading",
      definition:
        "Sayfa yüklenirken sadece görüntülenen alanın yüklenmesi, diğer içeriklerin gerektiğinde yüklenmesi tekniği. Performans ve sayfa hızı için önemlidir.",
      related: ["Performans", "Core Web Vitals", "Görsel Optimizasyonu"],
    },
    {
      turkish: "LCP (Largest Contentful Paint)",
      english: "LCP",
      definition:
        "Google Core Web Vitals metriklerinden biri. Sayfanın en büyük içerik elemanının yüklenme süresi. İdeal değer: 2.5 saniye altı. Sayfa hızı ve kullanıcı deneyimi için kritik.",
      related: ["Core Web Vitals", "FID", "CLS", "Performans"],
    },
    {
      turkish: "Local SEO (Yerel SEO)",
      english: "Local SEO",
      definition:
        "İşletmenin belirli bir coğrafi alanda (şehir, ilçe) arama motorlarında görünür olmasını sağlayan SEO stratejisi. Google My Business önemlidir.",
      related: ["SEO", "Google My Business", "NAP"],
    },
  ],
  M: [
    {
      turkish: "Meta Etiketleri",
      english: "Meta Tags",
      definition:
        "HTML head bölümündeki web sayfası hakkında bilgi veren etiketler. Title, description, keywords, og:image gibi. SEO ve sosyal medya paylaşımı için önemlidir.",
      related: ["SEO", "OpenGraph", "Title Etiketi"],
    },
    {
      turkish: "Minifikasyon",
      english: "Minification",
      definition:
        "CSS, JavaScript dosyalarından gereksiz boşluklar, yorumlar kaldırılarak boyutun küçültülmesi. Sayfa hızını artırır.",
      related: ["Performans", "Compression", "Sayfa Hızı"],
    },
    {
      turkish: "Mobile-First (Mobil Öncelikli)",
      english: "Mobile-First Design",
      definition:
        "Web tasarımının önce mobil cihazlar için, sonra masaüstü için yapılması yaklaşımı. Google mobile-first indexing kullanır, bu nedenle mobil optimizasyon kritiktir.",
      related: ["Responsive Design", "SEO", "Kullanıcı Deneyimi"],
    },
  ],
  N: [
    {
      turkish: "NAP (Name, Address, Phone)",
      english: "NAP",
      definition:
        "İşletme adı, adresi ve telefon bilgisi. Yerel SEO için bu bilgilerin web sitesi, Google My Business ve dizinlerde tutarlı olması önemlidir.",
      related: ["Local SEO", "Google My Business"],
    },
    {
      turkish: "Next.js",
      english: "Next.js",
      definition:
        "React tabanlı modern web framework. SSR, SSG, ISR desteği. SEO uyumlu, performanslı web siteleri için ideal. WebCraft, Next.js 15 kullanır.",
      related: ["React", "SSR", "SSG", "TypeScript"],
    },
  ],
  O: [
    {
      turkish: "OAuth",
      english: "OAuth",
      definition:
        "Güvenli yetkilendirme protokolü. Kullanıcıların şifre paylaşmadan üçüncü parti uygulamalara erişim izni vermesini sağlar. 'Google ile Giriş Yap' özelliği OAuth kullanır.",
      related: ["API", "Güvenlik", "Authentication"],
    },
    {
      turkish: "OpenGraph",
      english: "OpenGraph Protocol",
      definition:
        "Facebook tarafından geliştirilen, web sayfası içeriğinin sosyal medyada nasıl görüneceğini belirleyen meta etiketleri. og:title, og:description, og:image içerir.",
      related: ["Meta Etiketleri", "Sosyal Medya", "SEO"],
    },
  ],
  P: [
    {
      turkish: "PageRank",
      english: "PageRank",
      definition:
        "Google'ın web sayfalarını önem sırasına göre sıraladığı algoritma. Kaliteli backlink'ler PageRank'i artırır. Artık resmi bir metrik değil ama konsept hala geçerli.",
      related: ["Backlink", "SEO", "Google"],
    },
    {
      turkish: "PPC (Pay-Per-Click)",
      english: "PPC - Pay-Per-Click",
      definition:
        "Tıklama başına ödeme reklam modeli. Google Ads ve sosyal medya reklamları PPC kullanır. Reklam sadece tıklandığında ücret alınır.",
      related: ["Google Ads", "SEM", "CTR"],
    },
    {
      turkish: "PWA (Progressive Web App)",
      english: "PWA",
      definition:
        "Web teknolojileri ile geliştirilen ama mobil uygulama gibi çalışan web siteleri. Offline çalışabilir, bildirim gönderebilir, cihaza yüklenebilir.",
      related: ["Mobile-First", "Web Uygulama", "Service Worker"],
    },
  ],
  R: [
    {
      turkish: "React",
      english: "React",
      definition:
        "Meta (Facebook) tarafından geliştirilen JavaScript kütüphanesi. Kullanıcı arayüzü (UI) oluşturmak için kullanılır. Next.js, React tabanlıdır.",
      related: ["Next.js", "JavaScript", "Frontend"],
    },
    {
      turkish: "Responsive Design (Duyarlı Tasarım)",
      english: "Responsive Design",
      definition:
        "Web sitesinin tüm cihaz boyutlarında (masaüstü, tablet, mobil) otomatik olarak uyum sağlaması. CSS media queries kullanılarak yapılır. Modern web tasarımın temel özelliğidir.",
      related: ["Mobile-First", "UI/UX", "Web Tasarım"],
    },
    {
      turkish: "REST API",
      english: "REST API",
      definition:
        "REpresentational State Transfer - Web servisleri için mimari stil. HTTP protokolü kullanılır. GET, POST, PUT, DELETE metodları ile veri alışverişi yapılır.",
      related: ["API", "GraphQL", "Backend"],
    },
    {
      turkish: "Robots.txt",
      english: "Robots.txt",
      definition:
        "Web sitesinin kök dizininde bulunan, arama motoru botlarına hangi sayfaların taranacağını bildiren metin dosyası. SEO için önemlidir.",
      related: ["SEO", "Sitemap", "Crawling"],
    },
  ],
  S: [
    {
      turkish: "Schema Markup (Yapılandırılmış Veri)",
      english: "Schema Markup",
      definition:
        "Web sayfası içeriğinin anlamını arama motorlarına açıklayan kod. JSON-LD formatında eklenir. Rich snippets (zengin sonuçlar) oluşturur.",
      related: ["JSON-LD", "SEO", "Rich Snippets"],
    },
    {
      turkish: "SEM (Arama Motoru Pazarlama)",
      english: "SEM - Search Engine Marketing",
      definition:
        "Arama motorlarında ücretli reklam vererek görünürlük artırma. Google Ads, Bing Ads gibi. SEO'dan farklı olarak ücretli bir yöntemdir.",
      related: ["Google Ads", "PPC", "SEO"],
    },
    {
      turkish: "SEO (Arama Motoru Optimizasyonu)",
      english: "SEO - Search Engine Optimization",
      definition:
        "Web sitesinin arama motorlarında organik (ücretsiz) olarak üst sıralarda yer almasını sağlayan teknik ve içerik optimizasyonları. Teknik SEO, On-Page SEO, Off-Page SEO olmak üzere üçe ayrılır.",
      related: ["Backlink", "Anahtar Kelime", "Google"],
    },
    {
      turkish: "Session (Oturum)",
      english: "Session",
      definition:
        "Kullanıcının web sitesinde geçirdiği süre boyunca sakl tutulan veriler. Kullanıcı siteyi kapatınca veya oturum süresi dolunca silinir.",
      related: ["Cookie", "Authentication", "Backend"],
    },
    {
      turkish: "Sitemap (Site Haritası)",
      english: "Sitemap",
      definition:
        "Web sitesinin tüm sayfalarını listeleyen XML dosyası. Arama motorlarının siteyi daha iyi taramasını sağlar. Google Search Console'a gönderilir.",
      related: ["SEO", "Robots.txt", "Google Search Console"],
    },
    {
      turkish: "SPA (Single Page Application)",
      english: "SPA",
      definition:
        "Tek sayfada çalışan web uygulaması. Sayfa yenilenmeden içerik değişir. React, Vue, Angular ile geliştirilir. Hızlı ve akıcı kullanıcı deneyimi sağlar.",
      related: ["React", "Next.js", "Frontend"],
    },
    {
      turkish: "SSL Sertifikası",
      english: "SSL Certificate",
      definition:
        "Web sitesi ile kullanıcı arasındaki veri iletişimini şifreleyen güvenlik sertifikası. HTTPS protokolü için gereklidir. Google, SSL'li siteleri tercih eder.",
      related: ["HTTPS", "Güvenlik", "Domain"],
    },
    {
      turkish: "SSG (Static Site Generation)",
      english: "SSG",
      definition:
        "Statik site oluşturma. Sayfalar build aşamasında HTML olarak oluşturulur. Çok hızlıdır, CDN'de servis edilebilir. Next.js SSG destekler.",
      related: ["Next.js", "SSR", "JAMstack"],
    },
    {
      turkish: "SSR (Server-Side Rendering)",
      english: "SSR",
      definition:
        "Sunucu taraflı render. Sayfa HTML'i her istekte sunucuda oluşturulur. SEO için avantajlıdır. Next.js SSR destekler.",
      related: ["Next.js", "SSG", "SEO"],
    },
  ],
  T: [
    {
      turkish: "TypeScript",
      english: "TypeScript",
      definition:
        "JavaScript'in tip güvenliği eklenmiş hali. Microsoft tarafından geliştirildi. Hataları kod aşamasında yakalar. Modern projeler için tercih edilir. WebCraft, TypeScript kullanır.",
      related: ["JavaScript", "React", "Next.js"],
    },
  ],
  U: [
    {
      turkish: "URL (Uniform Resource Locator)",
      english: "URL",
      definition:
        "Web sayfasının adresi. Örnek: https://www.webcraft.tr/hizmetler. Temiz, anlaşılır URL'ler SEO için önemlidir.",
      related: ["Domain", "SEO", "Canonical URL"],
    },
  ],
  W: [
    {
      turkish: "WCAG (Web İçeriği Erişilebilirlik Kılavuzu)",
      english: "WCAG - Web Content Accessibility Guidelines",
      definition:
        "Engelli kullanıcılar için web erişilebilirlik standartları. WCAG 2.1 AA seviyesi uluslararası kabul görmüştür. Görme, işitme, motor engeliler için gerekli uygulamalar içerir.",
      related: ["Erişilebilirlik", "Alt Etiketi", "UX"],
    },
  ],
};

export default function SozlukPage() {
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
        name: "Sözlük",
        item: "https://www.webcraft.tr/sozluk",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
                <Book className="w-6 h-6 text-blue-600" />
                <span className="text-blue-700 font-bold">50+ Terim</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Web Tasarım ve Dijital Pazarlama Sözlüğü
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                A&apos;dan Z&apos;ye teknik terimler, açıklamalar ve kullanım
                örnekleri
              </p>
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Web tasarım, SEO ve dijital pazarlama dünyasında kullanılan
                teknik terimlerin kapsamlı açıklamalarını bulabileceğiniz
                sözlük. WebCraft uzman ekibi tarafından hazırlanmıştır.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>İpucu:</strong> Bir terimle ilgili daha detaylı bilgi
                  için{" "}
                  <Link
                    href="/kaynak-merkezi"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    Kaynak Merkezi
                  </Link>{" "}
                  sayfamızı ziyaret edebilir veya{" "}
                  <Link
                    href="/iletisim"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    bizimle iletişime
                  </Link>{" "}
                  geçebilirsiniz.
                </p>
              </div>
            </div>

            {/* Alphabetical Index */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                {Object.keys(terms).map((letter) => (
                  <a
                    key={letter}
                    href={`#${letter}`}
                    className="w-12 h-12 flex items-center justify-center bg-red-100 hover:bg-red-600 text-red-600 hover:text-white font-bold rounded-lg transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Terms by Letter */}
            {Object.entries(terms).map(([letter, termList]) => (
              <div key={letter} id={letter} className="mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-red-600 inline-block">
                  {letter}
                </h2>
                <div className="space-y-6">
                  {termList.map((term, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {term.turkish}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 italic">
                        {term.english}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {term.definition}
                      </p>
                      {term.related && term.related.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-sm text-gray-600 font-semibold">
                            İlgili Terimler:
                          </span>
                          {term.related.map((relatedTerm, idx) => (
                            <span
                              key={idx}
                              className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                            >
                              {relatedTerm}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="mt-16 bg-[#f84525] rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hala Sorularınız mı Var?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Web tasarım, SEO ve dijital pazarlama hakkında merak
                ettiklerinizi bize sorun.
              </p>
              <Link
                href="/iletisim"
                className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Bize Ulaşın
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

import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import { CheckCircle, XCircle, ExternalLink, ChevronRight } from "lucide-react";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Web Tasarım Ajansı Nasıl Seçilir? 7 Kriter | WebCraft",
  description:
    "Web tasarım ajansı seçerken mutlaka sormanız gereken 7 kriter. Portföy, teknik altyapı, SEO bilgisi, şeffaf fiyatlandırma ve daha fazlası. Bilinçli karar verin.",
  keywords:
    "web tasarım ajansı nasıl seçilir, ajans seçme kriterleri, web tasarım ajansı değerlendirme, iyi web ajansı nasıl bulunur, web tasarım şirketi seçimi",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/en-iyi-web-tasarim-ajansi",
  },
  openGraph: {
    title: "Web Tasarım Ajansı Nasıl Seçilir? 7 Kriter | WebCraft",
    description:
      "Ajans seçerken mutlaka sormanız gereken 7 kriter. Portföy, teknik altyapı, SEO bilgisi ve şeffaf fiyatlandırma rehberi.",
    type: "article",
    locale: "tr_TR",
  },
};

const criteria = [
  {
    number: "01",
    title: "Gerçek Portföy ve Referanslar",
    question: "Çalıştığınız işleri görebilir miyim?",
    what: "İyi bir ajans, teslim ettiği siteleri açıkça paylaşır. Genel mockup'lar veya 'örnek tasarım' değil — gerçek URL'ler, gerçek müşteriler.",
    redFlags: [
      "Portföy yok ya da 'gizli' ibaresi var",
      "Sadece screenshot var, canlı link yok",
      "Tüm projeler aynı şablondan",
    ],
    webcraft:
      "200+ tamamlanan projemizi portföy sayfamızda inceleyebilirsiniz. Atlantis, Fluenta AI, Mentoria gibi gerçek müşteri sitelerimiz canlı olarak erişilebilir.",
    link: { href: "/islerimiz", label: "Portföyümüzü İnceleyin" },
  },
  {
    number: "02",
    title: "Teknik Altyapı ve Performans",
    question: "Siteniz Core Web Vitals'ta nasıl skor alıyor?",
    what: "Hız doğrudan Google sıralamasını etkiler. Ajansın kendi sitesi ve teslim ettiği siteler PageSpeed'de 90+ alıyorsa bu ciddi bir teknik yetkinlik göstergesidir.",
    redFlags: [
      "Ajansın kendi sitesi yavaş",
      "WordPress + ağır sayfa yapıcı kullanıyorlar",
      "Mobile uyumluluk ikincil plana atılmış",
    ],
    webcraft:
      "Next.js ve statik üretim (SSG) kullanıyoruz. Sayfalarımız 3 saniyenin altında açılıyor. Performans odaklı yaklaşımımızı teknik blog yazılarımızda belgeliyoruz.",
    link: {
      href: "/hizmetler/performans-odakli-web-tasarim",
      label: "Performans Yaklaşımımız",
    },
  },
  {
    number: "03",
    title: "SEO Bilgisi ve Uygulaması",
    question: "Teknik SEO'yu kim yapıyor, ayrı bir ücret var mı?",
    what: "Tasarım ve SEO ayrı değil — schema markup, canonical URL'ler, Core Web Vitals, mobil uyumluluk ve hız tamamı tasarım sürecinin parçası olmalı.",
    redFlags: [
      "'SEO ayrı paket' diyorlarsa temel entegrasyon yok",
      "Meta tag'leri bile manuel ekliyorlar",
      "Structured data bilmiyorlar",
    ],
    webcraft:
      "Her sayfaya JSON-LD schema, canonical URL, Open Graph ve hız optimizasyonu standart olarak ekliyoruz. SEO ek ücret değil, temel hizmetin parçası.",
    link: {
      href: "/hizmetler/seo-uyumlu-web-sitesi",
      label: "SEO Yaklaşımımız",
    },
  },
  {
    number: "04",
    title: "Şeffaf ve Net Fiyatlandırma",
    question: "Teklif kalemler bazında mı, yoksa tek satır mı?",
    what: "Güvenilir ajanslar neyin ne kadara mal olduğunu açıkça yazar. 'Duruma göre değişir' veya fiyat vermeyi erteleme ciddi bir uyarı işareti.",
    redFlags: [
      "Teklif tek satır toplam fiyat",
      "Bakım/destek ücreti sonradan çıkıyor",
      "Domain, hosting 'dahil' ama detay yok",
    ],
    webcraft:
      "Tekliflerimiz tasarım, geliştirme, SEO kurulumu ve launch sonrası destek olarak ayrı ayrı kalemlendirilir. Sürpriz fatura yok.",
    link: { href: "/iletisim", label: "Teklif Alın" },
  },
  {
    number: "05",
    title: "Launch Sonrası Destek",
    question: "Site yayına girdikten sonra ne olur?",
    what: "Web sitesi teslim ile bitmez. Güvenlik güncellemeleri, küçük düzeltmeler, içerik güncellemeleri — bunlar için ajansın ulaşılabilir olması gerekir.",
    redFlags: [
      "Launch sonrası destek politikası belirsiz",
      "Her değişiklik ayrı proje sayılıyor",
      "Yanıt süresi garanti edilmiyor",
    ],
    webcraft:
      "Tüm projelerimize launch sonrası destek paketi sunuyoruz. Küçük düzeltmeler, içerik güncellemeleri ve teknik sorular için doğrudan iletişim kanalı açık kalır.",
    link: { href: "/iletisim", label: "Destek Paketleri" },
  },
  {
    number: "06",
    title: "İletişim Hızı ve Proje Yönetimi",
    question: "Mesajlarınıza kaç saatte dönüyorlar?",
    what: "İlk teklif görüşmesindeki yanıt hızı, proje boyunca yaşayacağınızın habercisidir. Hızlı, net, yazılı iletişim kuran ajanslarla çalışmak çok daha verimlidir.",
    redFlags: [
      "İlk yanıt 2 günden fazla sürdü",
      "WhatsApp'tan yönetiyorlar, yazılı kayıt yok",
      "Kim sizin proje yöneticiniz belli değil",
    ],
    webcraft:
      "İlk iletişimde 24 saat içinde geri dönüyoruz. Her proje için tek bir sorumlu kişi atanır ve tüm kararlar yazılı olarak onaylanır.",
    link: { href: "/iletisim", label: "Hemen İletişime Geçin" },
  },
  {
    number: "07",
    title: "Sonuç Odaklılık ve Ölçüm",
    question: "Sitenin başarısını nasıl ölçeceğiz?",
    what: "İyi tasarım güzel göründüğü için değil, ziyaretçiyi müşteriye dönüştürdüğü için değerlidir. Analytics kurulumu, dönüşüm takibi ve raporlama standart olmalı.",
    redFlags: [
      "Analytics kurulumundan bahsetmiyorlar",
      "Başarı kriteri tanımlanmıyor",
      "Sadece estetik konuşuluyor, trafik/dönüşüm yok",
    ],
    webcraft:
      "Her projede GA4 entegrasyonu, dönüşüm hedefleri ve 3 aylık performans takibi standart. Sitenizin trafiği ve dönüşümleri ölçülebilir olacak.",
    link: {
      href: "/hizmetler/dijital-pazarlama",
      label: "Dijital Pazarlama Hizmetleri",
    },
  },
];

const comparisons = [
  {
    title: "Freelancer mı, Ajans mı?",
    desc: "Hangisi sizin için doğru? Güvenilirlik, maliyet ve süreklilik açısından karşılaştırma.",
    href: "/karsilastirma/freelancer-vs-ajans",
  },
  {
    title: "WebCraft vs DIY Araçlar",
    desc: "Wix, Squarespace ile profesyonel geliştirme arasındaki fark nedir?",
    href: "/karsilastirma/webcraft-vs-diy",
  },
  {
    title: "Platform Karşılaştırması",
    desc: "WordPress, Shopify, Next.js — hangi platform hangi iş için doğru?",
    href: "/karsilastirma/platformlar",
  },
];

export default function WebTasarimAjansiSecimPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Karşılaştırma & Rehberler", url: "/karsilastirma" },
      { name: "Ajans Seçme Kriterleri", url: "/en-iyi-web-tasarim-ajansi" },
    ]);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Web Tasarım Ajansı Nasıl Seçilir?",
    description:
      "Web tasarım ajansı seçerken dikkat etmeniz gereken 7 temel kriter.",
    url: "https://www.webcraft.tr/en-iyi-web-tasarim-ajansi",
    step: criteria.map((c, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: c.title,
      text: c.what,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#181716]">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div
            className="watermark select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            A
          </div>
          <div className="relative z-20 w-full max-w-4xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <div className="text-sm font-medium text-red-500 uppercase tracking-wider mb-6">
              Ajans Seçme Rehberi
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Web Tasarım Ajansı
              <br />
              <span className="text-red-500">Nasıl Seçilir?</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              &ldquo;En iyi ajans&rdquo; diye bir evrensel cevap yok — ama doğru
              ajansı bulmak için sormanız gereken{" "}
              <strong className="text-white">7 somut soru</strong> var. Her
              kriterde WebCraft&apos;ın nasıl konumlandığını da açıkça
              paylaşıyoruz; kendiniz karar verin.
            </p>
            <div className="flex flex-wrap gap-3">
              {criteria.map((c) => (
                <span
                  key={c.number}
                  className="text-xs text-gray-400 border border-gray-700 rounded-full px-3 py-1"
                >
                  {c.number} {c.title}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24 space-y-20">
            {criteria.map((c, idx) => (
              <div
                key={c.number}
                className="scroll-mt-24"
                id={`kriter-${idx + 1}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-5xl font-black text-red-100 leading-none select-none">
                    {c.number}
                  </span>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {c.title}
                    </h2>
                    <p className="text-gray-500 italic">
                      &ldquo;{c.question}&rdquo;
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {c.what}
                </p>

                <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-6">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
                    Dikkat edin — uyarı işaretleri
                  </p>
                  <ul className="space-y-2">
                    {c.redFlags.map((flag) => (
                      <li
                        key={flag}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    WebCraft&apos;ta bu nasıl çalışır
                  </p>
                  <div className="flex items-start gap-2 text-gray-800 mb-4">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>{c.webcraft}</p>
                  </div>
                  <Link
                    href={c.link.href}
                    className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                  >
                    {c.link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison links */}
        <section className="bg-[#181716] py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
            <h2 className="text-3xl font-bold text-white mb-4">
              Daha Fazla Karşılaştırma
            </h2>
            <p className="text-gray-400 mb-10">
              Ajans türleri ve platformlar arasındaki farkları detaylı
              inceleyin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparisons.map((comp) => (
                <Link
                  key={comp.href}
                  href={comp.href}
                  className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-xl p-6 transition-all duration-200"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-red-400 transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {comp.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-red-500 text-sm font-medium">
                    Okuyun <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-red-600">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Kriterleri okudunuz — şimdi sorun
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Yukarıdaki 7 soruyu WebCraft&apos;a da sorun. Açık, yazılı
              cevaplar veriyoruz. Ücretsiz ön görüşme için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Görüşme Al
              </Link>
              <Link
                href="/islerimiz"
                className="border border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Portföyümüzü Gör
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

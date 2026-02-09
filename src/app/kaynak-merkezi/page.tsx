import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import {
  CheckCircle,
  Search,
  TrendingUp,
  Users,
  Code,
  Lightbulb,
  Target,
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
    "Kaynak Merkezi | Web Tasarım ve Dijital Pazarlama Rehberleri | WebCraft",
  description:
    "Web tasarım, SEO ve dijital pazarlama hakkında kapsamlı rehberler. Profesyonel içeriklerle işletmenizi dijital dünyada büyütün. WebCraft uzman ekibinden.",
  keywords:
    "web tasarım rehberi, SEO rehberi, dijital pazarlama rehberi, web sitesi nasıl yapılır, SEO nedir, dijital pazarlama stratejileri",
  authors: [{ name: "WebCraft Uzman Ekibi" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/kaynak-merkezi",
  },
  openGraph: {
    title: "Kaynak Merkezi | Web Tasarım ve Dijital Pazarlama Rehberleri",
    description:
      "Web tasarım, SEO ve dijital pazarlama hakkında kapsamlı rehberler ve profesyonel içerikler.",
    url: "https://www.webcraft.tr/kaynak-merkezi",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "website",
  },
};

export default function KaynakMerkeziPage() {
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
        name: "Kaynak Merkezi",
        item: "https://www.webcraft.tr/kaynak-merkezi",
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
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Kaynak Merkezi
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Web tasarım, SEO ve dijital pazarlama hakkında kapsamlı
                rehberler ve profesyonel içerikler
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Web Design 101 Guide */}
            <article className="mb-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Web Tasarım 101: Başlangıç Rehberi
                  </h2>
                  <p className="text-gray-600 mt-1">
                    WebCraft Uzman Ekibi | Son Güncelleme: Şubat 2026
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Profesyonel Web Tasarım Nedir?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Profesyonel web tasarım, bir işletmenin dijital kimliğini
                  yansıtan, kullanıcı dostu ve işlevsel bir web sitesi oluşturma
                  sürecidir. Sadece görsel olarak çekici değil, aynı zamanda
                  kullanıcı deneyimini (UX) optimize eden, arama motorları için
                  uyumlu (SEO) ve işletme hedeflerinize ulaşmanızı sağlayan
                  kapsamlı bir hizmettir.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  WebCraft olarak 2015 yılından bu yana 200+ başarılı projeyle
                  Türkiye&apos;nin önde gelen web tasarım ajansıyız. Modern
                  teknolojiler (Next.js 15, React 19, TypeScript) kullanarak
                  yüksek performanslı web siteleri geliştiriyoruz.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  İşletmeniz İçin Web Sitesi Neden Gerekli?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">
                      7/24 Online Varlık
                    </h4>
                    <p className="text-gray-600">
                      Müşterileriniz sizi her zaman bulabilir, ürün ve
                      hizmetlerinizi inceleyebilir.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">
                      Marka Kredibilitesi
                    </h4>
                    <p className="text-gray-600">
                      Profesyonel web sitesi, işletmenizin güvenilirliğini ve
                      ciddiyetini gösterir.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">Daha Geniş Kitle</h4>
                    <p className="text-gray-600">
                      Coğrafi sınırlar olmadan Türkiye ve dünya genelinde
                      müşterilere ulaşın.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">
                      Düşük Maliyetli Pazarlama
                    </h4>
                    <p className="text-gray-600">
                      Geleneksel reklamlara göre daha ekonomik ve ölçülebilir
                      pazarlama.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Web Tasarım vs Web Geliştirme: Fark Nedir?
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                  <p className="text-gray-700 mb-3">
                    <strong>Web Tasarım:</strong> Görsel tasarım, kullanıcı
                    deneyimi (UX/UI), renk paleti, tipografi, düzen ve estetiği
                    kapsar. Web sitesinin nasıl göründüğü ile ilgilidir.
                  </p>
                  <p className="text-gray-700">
                    <strong>Web Geliştirme:</strong> Kodlama, veritabanı
                    yönetimi, sunucu yapılandırması, fonksiyonellik ve teknik
                    altyapıyı kapsar. Web sitesinin nasıl çalıştığı ile
                    ilgilidir.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  WebCraft&apos;ta hem web tasarım hem de web geliştirme
                  hizmetleri sunuyoruz. Bu sayede projeleriniz görsel olarak
                  etkileyici olduğu kadar teknik olarak da kusursuz çalışır.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Web Tasarım Ajansı Seçerken Nelere Dikkat Edilmeli?
                </h3>
                <ol className="list-decimal list-inside space-y-4 mb-6 text-gray-700">
                  <li className="leading-relaxed">
                    <strong>Portföy ve Referanslar:</strong> Ajansın geçmiş
                    projelerini inceleyin. WebCraft&apos;ın{" "}
                    <Link
                      href="/islerimiz"
                      className="text-red-600 hover:underline"
                    >
                      200+ başarılı projesini
                    </Link>{" "}
                    inceleyebilirsiniz.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Teknoloji Altyapısı:</strong> Güncel teknolojiler
                    (Next.js, React) kullanıyor mu? Eski teknolojiler performans
                    ve güvenlik sorunları yaratabilir.
                  </li>
                  <li className="leading-relaxed">
                    <strong>SEO Uyumlu Çalışma:</strong> Web sitesi sadece güzel
                    değil, aynı zamanda Google&apos;da üst sıralarda yer almalı.
                    Teknik SEO önemlidir.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Proje Sonrası Destek:</strong> Bakım, güncelleme ve
                    teknik destek hizmetleri sunuyor mu? WebCraft 7/24 destek
                    sağlar.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Şeffaf Fiyatlandırma:</strong> Gizli maliyetler var
                    mı? Proje kapsamı net tanımlanıyor mu?
                  </li>
                  <li className="leading-relaxed">
                    <strong>İletişim ve İşbirliği:</strong> Ajans düzenli
                    bilgilendirme yapıyor mu? Geri bildirimlerinizi dikkate
                    alıyor mu?
                  </li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Modern Web Tasarım Standartları (2026)
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Responsive (Mobil Uyumlu) Tasarım:</strong> Web
                      siteniz tüm cihazlarda mükemmel görünmeli. Google&apos;ın
                      %60+ trafiği mobilden gelir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Hızlı Yükleme (Core Web Vitals):</strong> Web
                      sitesi 2-3 saniyede yüklenmeli. Yavaş siteler
                      kullanıcıları kaybeder.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>SEO Optimizasyonu:</strong> Arama motorları için
                      optimize edilmiş yapı, meta etiketler, semantik HTML.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Erişilebilirlik (WCAG):</strong> Engelli
                      kullanıcılar için erişilebilir tasarım (WCAG 2.1 AA
                      standartları).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Güvenlik (HTTPS, SSL):</strong> SSL sertifikası,
                      güvenli bağlantı, veri koruma.
                    </span>
                  </li>
                </ul>

                <div className="bg-red-50 p-6 rounded-xl mt-8">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">
                    WebCraft ile Profesyonel Web Tasarım
                  </h4>
                  <p className="text-gray-700 mb-4">
                    2015 yılından bu yana 200+ başarılı projeyle
                    Türkiye&apos;nin güvenilir web tasarım ajansı. Next.js 15,
                    React 19 gibi modern teknolojilerle performanslı, SEO uyumlu
                    web siteleri geliştiriyoruz.
                  </p>
                  <Link
                    href="/iletisim"
                    className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                  >
                    Ücretsiz Teklif Alın
                  </Link>
                </div>
              </div>
            </article>

            {/* SEO Checklist */}
            <article className="mb-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    SEO Kontrol Listesi: Google&apos;da Üst Sıralara Çıkın
                  </h2>
                  <p className="text-gray-600 mt-1">
                    SEO Uzmanı: WebCraft Dijital Pazarlama Ekibi
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  SEO (Search Engine Optimization - Arama Motoru Optimizasyonu),
                  web sitenizin Google gibi arama motorlarında üst sıralarda yer
                  almasını sağlayan tekniklerdir. Bu kapsamlı kontrol listesi
                  ile web sitenizin SEO performansını artırabilirsiniz.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Teknik SEO Kontrol Listesi
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    {
                      item: "SSL Sertifikası (HTTPS)",
                      desc: "Web siteniz güvenli HTTPS protokolü kullanmalı. Google güvenli siteleri tercih eder.",
                    },
                    {
                      item: "Mobil Uyumluluk",
                      desc: "Google Mobile-First indexing kullanıyor. Siteniz mobilde mükemmel çalışmalı.",
                    },
                    {
                      item: "Sayfa Hızı Optimizasyonu",
                      desc: "Core Web Vitals metrikleri (LCP < 2.5s, FID < 100ms, CLS < 0.1) karşılanmalı.",
                    },
                    {
                      item: "XML Sitemap",
                      desc: "sitemap.xml dosyası oluşturun ve Google Search Console&apos;a gönderin.",
                    },
                    {
                      item: "Robots.txt Dosyası",
                      desc: "Arama motorlarının hangi sayfaları tarayacağını belirleyin.",
                    },
                    {
                      item: "Kırık Link Kontrolü",
                      desc: "404 hataları kullanıcı deneyimini ve SEO&apos;yu olumsuz etkiler.",
                    },
                    {
                      item: "Canonical URL Kullanımı",
                      desc: "Duplicate content sorununu önlemek için canonical etiketleri kullanın.",
                    },
                    {
                      item: "Structured Data (Schema Markup)",
                      desc: "JSON-LD formatında yapılandırılmış veri ekleyin (Organization, LocalBusiness, FAQPage).",
                    },
                    {
                      item: "Resim Optimizasyonu",
                      desc: "WebP formatı, alt etiketleri, lazy loading kullanın.",
                    },
                    {
                      item: "URL Yapısı",
                      desc: "Temiz, anlaşılır ve anahtar kelime içeren URL&apos;ler kullanın.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">{item.item}</p>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  On-Page SEO Kontrol Listesi
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    {
                      item: "Title (Başlık) Etiketi",
                      desc: "Her sayfa için benzersiz, 50-60 karakter, anahtar kelime içeren başlık.",
                    },
                    {
                      item: "Meta Description",
                      desc: "150-160 karakter, özet bilgi, harekete geçirici (CTA) içeren açıklama.",
                    },
                    {
                      item: "H1-H6 Başlık Hiyerarşisi",
                      desc: "Her sayfada tek bir H1, ardından H2, H3 düzeninde başlıklar.",
                    },
                    {
                      item: "Anahtar Kelime Yoğunluğu",
                      desc: "%1-2 anahtar kelime yoğunluğu, doğal kullanım. Keyword stuffing yapmayın.",
                    },
                    {
                      item: "İç Bağlantılar (Internal Links)",
                      desc: "İlgili sayfalara bağlantılar verin. Anchor text anahtar kelime içermeli.",
                    },
                    {
                      item: "Dış Bağlantılar (External Links)",
                      desc: "Otoriteli kaynaklara (Wikipedia, resmi siteler) bağlantı verin.",
                    },
                    {
                      item: "İçerik Uzunluğu",
                      desc: "En az 1000 kelime, kapsamlı, değer katan içerik. Uzun içerikler daha iyi sıralanır.",
                    },
                    {
                      item: "İçerik Güncelliği",
                      desc: "Düzenli güncelleme yapın. Google taze içerikleri sever.",
                    },
                    {
                      item: "Alt Etiketleri (Image Alt Text)",
                      desc: "Tüm görsellere açıklayıcı alt etiketleri ekleyin.",
                    },
                    {
                      item: "Kullanıcı Deneyimi (UX)",
                      desc: "Kolay navigasyon, okunabilir yazı tipi, yeterli boşluk.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">{item.item}</p>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Off-Page SEO Stratejileri
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    {
                      item: "Kaliteli Backlink Kazanımı",
                      desc: "Otoriteli sitelerden doğal backlink kazanın. Guest posting, içerik pazarlama.",
                    },
                    {
                      item: "Google My Business",
                      desc: "Yerel işletmeler için GMB profili oluşturun ve optimize edin.",
                    },
                    {
                      item: "Sosyal Medya Varlığı",
                      desc: "Sosyal medyada aktif olun. Sosyal sinyaller SEO&apos;ya dolaylı etki eder.",
                    },
                    {
                      item: "Online İtibar Yönetimi",
                      desc: "Müşteri yorumlarına yanıt verin. Pozitif yorumları teşvik edin.",
                    },
                    {
                      item: "Yerel Dizinler",
                      desc: "Yerel iş dizinlerine (Yandex Haritalar, Foursquare) kaydolun.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">{item.item}</p>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-6 rounded-xl mt-8">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">
                    WebCraft SEO Hizmetleri
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Profesyonel SEO hizmetimiz ile web siteniz Google&apos;da
                    üst sıralara çıkar. 10 yıllık deneyim, kanıtlanmış
                    stratejiler.{" "}
                    <Link
                      href="/hizmetler/seo-uyumlu-web-sitesi"
                      className="text-green-700 font-bold hover:underline"
                    >
                      SEO uyumlu web sitesi hizmetimizi
                    </Link>{" "}
                    inceleyin.
                  </p>
                  <Link
                    href="/iletisim"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
                  >
                    SEO Analizi İsteyin
                  </Link>
                </div>
              </div>
            </article>

            {/* Digital Marketing Handbook */}
            <article className="mb-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Dijital Pazarlama El Kitabı
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Dijital Pazarlama Uzmanı: WebCraft Ekibi
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dijital pazarlama, internet ve dijital teknolojiler
                  kullanılarak yapılan pazarlama faaliyetlerinin tümünü kapsar.
                  Bu kapsamlı rehberde, dijital pazarlamanın tüm yönlerini
                  öğreneceksiniz.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Sosyal Medya Pazarlama Stratejileri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sosyal medya, markanızı büyütmek ve müşterilerle etkileşim
                  kurmak için en güçlü araçlardan biridir. İşte başarılı sosyal
                  medya pazarlama stratejileri:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      1. Platform Seçimi
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Hedef kitlenizin en aktif olduğu platformlarda bulunun:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • <strong>Instagram:</strong> Görsel içerik, genç kitle
                        (18-35 yaş)
                      </li>
                      <li>
                        • <strong>Facebook:</strong> Geniş kitle, 25-55 yaş
                        arası
                      </li>
                      <li>
                        • <strong>LinkedIn:</strong> B2B pazarlama,
                        profesyoneller
                      </li>
                      <li>
                        • <strong>Twitter/X:</strong> Haber, gündem, anlık
                        paylaşım
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      2. İçerik Stratejisi
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • <strong>80/20 Kuralı:</strong> %80 değer katan, %20
                        satış içeriği
                      </li>
                      <li>
                        • <strong>Tutarlılık:</strong> Düzenli paylaşım (günde
                        1-3 post)
                      </li>
                      <li>
                        • <strong>Görseller:</strong> Yüksek kaliteli, marka
                        kimliğine uygun
                      </li>
                      <li>
                        • <strong>Hikaye Anlatımı:</strong> Müşteri hikayeleri,
                        başarı öyküleri
                      </li>
                      <li>
                        • <strong>Video İçerik:</strong> Reels, Shorts, canlı
                        yayınlar
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      3. Etkileşim Yönetimi
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Yorumlara 1 saat içinde yanıt verin</li>
                      <li>
                        • Mesajları hızlı cevaplayın (chatbot kullanabilirsiniz)
                      </li>
                      <li>• Kullanıcı içeriğini (UGC) paylaşın</li>
                      <li>• Anketler ve sorular ile etkileşim yaratın</li>
                      <li>• Influencer işbirlikleri yapın</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      4. Analitik ve Raporlama
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Takipçi artışı ve demografik analiz</li>
                      <li>• Etkileşim oranları (beğeni, yorum, paylaşım)</li>
                      <li>• Erişim ve gösterim sayıları</li>
                      <li>• En iyi performans gösteren içerikler</li>
                      <li>• Dönüşüm oranları (web sitesi ziyareti, satış)</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  İçerik Pazarlama Rehberi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  İçerik pazarlama, hedef kitlenizi çekmek, etkileşim kurmak ve
                  sadık müşteriler kazanmak için değerli, ilgili içerikler
                  oluşturma ve paylaşma stratejisidir.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-purple-600 pl-6 py-2">
                    <h4 className="font-bold text-lg mb-2">Blog Yazıları</h4>
                    <p className="text-gray-600 text-sm">
                      SEO uyumlu, uzun form içerikler (1500+ kelime). Haftada en
                      az 1 blog yazısı yayınlayın. Anahtar kelime araştırması
                      yapın, başlıkları dikkat çekici yapın.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 py-2">
                    <h4 className="font-bold text-lg mb-2">
                      E-Kitaplar ve Kılavuzlar
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Kapsamlı rehberler (3000+ kelime) hazırlayın. Lead
                      generation için e-posta karşılığında indirilebilir yapın.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 py-2">
                    <h4 className="font-bold text-lg mb-2">İnfografikler</h4>
                    <p className="text-gray-600 text-sm">
                      Karmaşık bilgiyi görsel olarak basitleştirin. Sosyal
                      medyada paylaşılma oranı yüksektir.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 py-2">
                    <h4 className="font-bold text-lg mb-2">Video İçerikler</h4>
                    <p className="text-gray-600 text-sm">
                      Ürün tanıtımı, nasıl yapılır videoları, müşteri
                      testimonialları. YouTube ve sosyal medya için optimize
                      edin.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 py-2">
                    <h4 className="font-bold text-lg mb-2">Podcast</h4>
                    <p className="text-gray-600 text-sm">
                      Sektörünüz hakkında konuşun, uzmanlarla röportaj yapın.
                      Dinleyici kitlesine ulaşın.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  E-posta Pazarlama En İyi Uygulamaları
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  E-posta pazarlama, en yüksek ROI (yatırım getirisi) sağlayan
                  dijital pazarlama kanallarından biridir. Her 1 TL yatırım için
                  ortalama 42 TL getiri sağlar.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-lg mb-3">
                    E-posta Listesi Oluşturma
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      ✓ Web sitenize e-posta kayıt formu ekleyin (pop-up,
                      footer, sidebar)
                    </li>
                    <li>
                      ✓ İndirilebilir içerik (e-kitap, checklist) karşılığında
                      e-posta toplayın
                    </li>
                    <li>
                      ✓ Webinar ve etkinlik kayıtlarından e-posta listesi
                      oluşturun
                    </li>
                    <li>
                      ✓ Sosyal medyada e-posta listesine katılım kampanyaları
                      yapın
                    </li>
                    <li>
                      ✗ Satın alınan e-posta listeleri kullanmayın (spam, düşük
                      dönüşüm)
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Google Ads Temelleri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google Ads (eski adıyla Google AdWords), arama motoru
                  pazarlama (SEM) için en etkili platformdur. Kullanıcılar bir
                  şey aradığında reklamlarınız görünür.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Target className="w-8 h-8 text-red-600 mb-3" />
                    <h4 className="font-bold mb-2">
                      Anahtar Kelime Araştırması
                    </h4>
                    <p className="text-sm text-gray-600">
                      Google Keyword Planner kullanın. Uzun kuyruk (long-tail)
                      anahtar kelimeler seçin. Rekabet düşük, dönüşüm yüksek
                      kelimeler bulun.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Lightbulb className="w-8 h-8 text-yellow-600 mb-3" />
                    <h4 className="font-bold mb-2">Reklam Metni Yazımı</h4>
                    <p className="text-sm text-gray-600">
                      Dikkat çekici başlık, değer vurgulayan açıklama, net CTA
                      (call-to-action). A/B testi yapın.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Users className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-bold mb-2">Hedefleme ve Bütçe</h4>
                    <p className="text-sm text-gray-600">
                      Coğrafi hedefleme, demografik hedefleme, zaman hedefleme
                      yapın. Günlük bütçe belirleyin ve optimize edin.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl mt-8">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">
                    WebCraft Dijital Pazarlama Hizmetleri
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Kapsamlı dijital pazarlama hizmetimiz ile markanızı büyütün.
                    SEO, sosyal medya yönetimi, Google Ads, içerik pazarlama.{" "}
                    <Link
                      href="/hizmetler/dijital-pazarlama"
                      className="text-purple-700 font-bold hover:underline"
                    >
                      Dijital pazarlama hizmetlerimizi
                    </Link>{" "}
                    inceleyin.
                  </p>
                  <Link
                    href="/iletisim"
                    className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
                  >
                    Dijital Pazarlama Teklifi Alın
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

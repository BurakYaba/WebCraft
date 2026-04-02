import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Link from "next/link";
import Image from "next/image";

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
    "Web Analitik Araçları Rehberi: GA4, Search Console ve Veri Analizi | WebCraft",
  description:
    "Google Analytics 4 kurulumu, Search Console entegrasyonu, Hotjar heatmap ve SEMrush kullanımı. Web sitesi performansınızı ölçün ve iyileştirin.",
  keywords:
    "google analytics 4 kurulumu, web analitik araçları, search console kullanımı, hotjar heatmap, web sitesi metrikleri, dijital analiz rehberi",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/web-analitik-araclari" },
  openGraph: {
    title: "Web Analitik Araçları Rehberi: GA4, Search Console ve Veri Analizi",
    description:
      "GA4 kurulumu, Search Console ve Hotjar ile web sitesi performansınızı ölçün.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-11-22T09:00:00Z",
    modifiedTime: "2026-04-02T09:00:00Z",
    authors: ["WebCraft Analitik Uzmanı"],
  },
};

export default function WebAnalitikAraclari() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Web Analitik Araçları: Google Analytics ve Veri Analizi",
      url: "/blog/web-analitik-araclari",
    },
  ];

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
        name: "Blog",
        item: "https://www.webcraft.tr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web Analitik Araçları",
        item: "https://www.webcraft.tr/blog/web-analitik-araclari",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Web Analitik Araçları Rehberi: GA4, Search Console ve Veri Analizi",
    description:
      "GA4 kurulumu, Search Console ve Hotjar ile web sitesi performansınızı ölçün.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.webp",
    author: { "@type": "Person", name: "WebCraft Analitik Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-11-22T09:00:00Z",
    dateModified: "2026-04-02T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/web-analitik-araclari",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Web Analitik
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Analitik Araçları Rehberi: GA4, Search Console ve Veri
                Analizi
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>Güncellendi: 2 Nisan 2026</span>
                <span>•</span>
                <span>20 dk okuma</span>
                <span>•</span>
                <span>WebCraft Analitik Uzmanı</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/dijital-pazarlama.webp"
                  alt="Web Analitik Araçları"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Web siteniz her gün yüzlerce sinyal üretiyor: hangi sayfalar
                  ziyaret ediliyor, kullanıcılar nerede takılıp çıkıyor, hangi
                  trafik kaynağı gerçek müşteri getiriyor. Bu verileri okumak ve
                  aksiyona dönüştürmek, dijital büyümenin en hızlı yoludur. Bu
                  rehberde Google Analytics 4 kurulumundan Search Console
                  yorumlamaya, Hotjar ısı haritalarından rakip analizine kadar
                  tüm araçları somut adımlarla ele aldık.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Veri odaklı{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    dijital pazarlama
                  </Link>{" "}
                  hizmeti ile web sitenizin potansiyelini tam olarak ortaya
                  çıkarın.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    İçindekiler
                  </h2>
                  <ol className="space-y-2 text-red-600">
                    <li>1. Google Analytics 4 — Kurulum ve Temel Raporlar</li>
                    <li>2. Google Search Console — SEO İçgörüleri</li>
                    <li>3. Hotjar — Kullanıcı Davranışını Görselleştirin</li>
                    <li>4. SEMrush / Ahrefs — Rakip Analizi</li>
                    <li>5. Temel Metrikler ve Yorumlama</li>
                    <li>6. Haftalık Analitik Rutini</li>
                    <li>Sık Sorulan Sorular</li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  1. Google Analytics 4 — Kurulum ve Temel Raporlar
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  GA4, Universal Analytics&apos;ın yerini 2023&apos;te devralan
                  yeni nesil analitik platformudur. Olay tabanlı (event-based)
                  veri modeli sayesinde kullanıcı yolculuğunu çok daha doğru
                  takip ediyor.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  GA4 Kurulumu Adım Adım
                </h3>
                <ol className="space-y-4 mb-8 list-decimal pl-6">
                  <li className="text-gray-700">
                    <strong>analytics.google.com</strong>&apos;u açın → Yönetici
                    → Hesap Oluştur.
                  </li>
                  <li className="text-gray-700">
                    Mülk (Property) oluşturun, zaman dilimi olarak{" "}
                    <strong>Türkiye (UTC+3)</strong> seçin.
                  </li>
                  <li className="text-gray-700">
                    Veri akışı &rarr; Web &rarr; Sitenizin URL&apos;ini girin.
                  </li>
                  <li className="text-gray-700">
                    <strong>Ölçüm ID&apos;nizi</strong> (G-XXXXXXXX) kopyalayın.
                    Next.js&apos;te bunu{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      NEXT_PUBLIC_GA_ID
                    </code>{" "}
                    env değişkenine atayın ve Google Tag Manager aracılığıyla
                    sayfaya ekleyin.
                  </li>
                  <li className="text-gray-700">
                    Gerçek zamanlı rapora bakarak verinin geldiğini doğrulayın.
                  </li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  En Önemli GA4 Raporları
                </h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-200 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Rapor
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Ne Gösterir?
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Sık Kullanım
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Kullanıcı Edinimi
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Hangi kanaldan (organik, ücretli, sosyal) kullanıcı
                          geldiği
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Haftalık
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Etkileşim → Sayfalar
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          En çok ziyaret edilen sayfalar, ortalama etkileşim
                          süresi
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Haftalık
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Dönüşümler
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Form gönderimi, telefon tıklaması gibi hedef olaylar
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Günlük
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Kullanıcı Gezintisi
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Ziyaretçilerin site içi yolu, hangi sayfada çıktıkları
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Aylık
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Teknoloji → Cihazlar
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Masaüstü / tablet / mobil dağılımı
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Aylık
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Dönüşüm Olayı Kurulumu
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  GA4&apos;ün en güçlü özelliği özel dönüşüm olayı takibidir.
                  &quot;İletişim formu gönderildi&quot; veya &quot;telefon
                  numarası tıklandı&quot; gibi olaylar:
                </p>
                <ol className="space-y-3 mb-8 list-decimal pl-6">
                  <li className="text-gray-700">
                    GA4 → Yönetici → Olaylar → Olay Oluştur adımlarını izleyin.
                  </li>
                  <li className="text-gray-700">
                    Form gönderimini takip etmek için teşekkür sayfasına (örn.{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /tesekkurler
                    </code>
                    ) bir sayfa görüntüleme olayı tanımlayın.
                  </li>
                  <li className="text-gray-700">
                    Oluşturduğunuz olayı &quot;Dönüşüm&quot; olarak işaretleyin.
                  </li>
                  <li className="text-gray-700">
                    Raporlarda &quot;Dönüşüm Oranı&quot; sütununu ekleyerek her
                    sayfanın kaça mal olduğunu görün.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  2. Google Search Console — SEO İçgörüleri
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Search Console (GSC), Google&apos;ın gözünden sitenizi
                  görmenizi sağlayan ücretsiz araçtır. GA4&apos;ten farklı
                  olarak yalnızca Google aramasından gelen trafik verisini
                  gösterir; ancak bu veri SEO açısından son derece değerlidir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  GSC&apos;de Takip Edilmesi Gereken Raporlar
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1 font-bold">▸</span>
                    <div>
                      <strong className="text-gray-900">
                        Performans → Arama Sonuçları:
                      </strong>
                      <p className="text-gray-700 mt-1">
                        Hangi sorgular için gösterildiğinizi, tıklama oranınızı
                        (CTR) ve ortalama konumunuzu görün. Tıklanma oranı düşük
                        ama yüksek sırada olan sorgular için meta başlık ve
                        açıklamanızı güçlendirin.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1 font-bold">▸</span>
                    <div>
                      <strong className="text-gray-900">
                        Kapsam (Coverage):
                      </strong>
                      <p className="text-gray-700 mt-1">
                        Hangi sayfaların indekslendiğini, hangilerinin
                        indekslenmediğini ve neden sorun yaşandığını gösterir.
                        &quot;Tarandı - şu anda dizine eklenmedi&quot; uyarısı
                        içerik kalitesi sorununun işaretidir.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1 font-bold">▸</span>
                    <div>
                      <strong className="text-gray-900">
                        Core Web Vitals:
                      </strong>
                      <p className="text-gray-700 mt-1">
                        Alan verisi (field data) bazlı CWV raporunu burada
                        bulabilirsiniz. Mobil ve masaüstü için ayrı ayrı takip
                        edin.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1 font-bold">▸</span>
                    <div>
                      <strong className="text-gray-900">
                        Bağlantılar (Links):
                      </strong>
                      <p className="text-gray-700 mt-1">
                        En çok backlink alan sayfalarınızı ve sizi en çok link
                        veren domainleri görün. Rakiplerinizi Ahrefs ile analiz
                        edip bu listeyi genişletebilirsiniz.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold text-xl mb-3">
                    💡 GA4 + GSC Entegrasyonu
                  </h4>
                  <p className="text-blue-800 text-lg leading-relaxed">
                    GA4 ile GSC&apos;yi bağladığınızda, Analytics raporlarında
                    arama sorgularını, tıklama oranlarını ve sıralamaları
                    görebilirsiniz. Bağlamak için: GA4 → Yönetici → Ürün
                    Bağlantıları → Search Console Bağlantıları.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  3. Hotjar — Kullanıcı Davranışını Görselleştirin
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hotjar, sayıların gösteremediğini gösterir: kullanıcılar
                  sayfada nereye tıklar, nereyi okur, nerede takılır? Bu
                  bilgiler dönüşüm optimizasyonu için altın değerdir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Hotjar&apos;ın Temel Özellikleri
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <div>
                      <strong className="text-gray-900">
                        Heatmap (Isı Haritası):
                      </strong>
                      <p className="text-gray-700 mt-1">
                        Click, move ve scroll haritaları ile sayfanın hangi
                        bölümünün dikkat çektiğini görün. Hizmet sayfanızda CTA
                        butonunun görünürlük alanı dışında kaldığı haritada
                        hemen belli oluyor.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <div>
                      <strong className="text-gray-900">
                        Kayıtlar (Recordings):
                      </strong>
                      <p className="text-gray-700 mt-1">
                        Gerçek kullanıcıların fare hareketlerini ve
                        tıklamalarını kayıt olarak izleyin. Hatalı bağlantı veya
                        kırık öğeleri bu yöntemle tespit ettik.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <div>
                      <strong className="text-gray-900">Funnel Analizi:</strong>
                      <p className="text-gray-700 mt-1">
                        Ziyaretçilerin dönüşüm sürecinde hangi adımda
                        düşüldüğünü görün. Örnek: Anasayfa → Hizmetler →
                        İletişim yolculuğunda %60 kayıp varsa Hizmetler
                        sayfasında sorun var demektir.
                      </p>
                    </div>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  4. SEMrush / Ahrefs — Rakip Analizi ve Anahtar Kelime
                  Araştırması
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  GA4 ve GSC sitenizin kendi verisini gösterirken, SEMrush ve
                  Ahrefs rakiplerinizin verisini görmenizi sağlar. Hangi anahtar
                  kelimelerden organik trafik aldıklarını, backlink profillerini
                  ve içerik boşluklarını ortaya çıkarır.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Rakip Analizi Nasıl Yapılır?
                </h3>
                <ol className="space-y-3 mb-8 list-decimal pl-6">
                  <li className="text-gray-700">
                    SEMrush&apos;ta &quot;Domain Overview&quot;e rakibinizin
                    URL&apos;ini girin.
                  </li>
                  <li className="text-gray-700">
                    &quot;Organic Keywords&quot; raporunda rakibin trafik aldığı
                    ama sizin almadığınız anahtar kelimeleri belirleyin (Keyword
                    Gap özelliği).
                  </li>
                  <li className="text-gray-700">
                    Bu anahtar kelimeler için içerik planı oluşturun.
                  </li>
                  <li className="text-gray-700">
                    &quot;Backlink Analytics&quot; ile rakibin en değerli
                    backlink kaynaklarını görün ve benzer kaynaklardan link
                    almak için outreach yapın.
                  </li>
                </ol>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  5. Temel Metrikler ve Yorumlama
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Veri bolluğu içinde kaybolmamak için hangi metriğin ne anlama
                  geldiğini ve ne zaman endişe duymanız gerektiğini bilmek
                  önemlidir.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-200 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Metrik
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          İyi Değer (Sektör Ortalaması)
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Düşükse Ne Yapılır?
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Hemen Çıkma Oranı (Bounce Rate)
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          %40-60
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          İçerik ve tasarım eşleşmesini iyileştirin
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Ortalama Etkileşim Süresi
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          &gt;1 dakika
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          İçerik derinliğini artırın
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Organik Trafik CTR
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          %2-5 (konum 1-3)
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Meta başlık ve açıklamayı güçlendirin
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Dönüşüm Oranı
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          %1-3 (hizmet siteleri)
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          CTA konumunu ve mesajını test edin
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          Mobil / Masaüstü Oranı
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          %60-70 mobil
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Mobil deneyimi öncelikleyin
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  6. Haftalık Analitik Rutini
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Veri toplamak sürekli; veri yorumlamak ise planlı bir rutin
                  gerektiriyor. Önerilen haftalık kontrol listesi:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Her gün (5 dk):</strong> GA4 gerçek zamanlı raporu
                      — aktif kullanıcı sayısı ve dönüşümler
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Her hafta (30 dk):</strong> GSC Performans raporu
                      — tıklama, gösterim, CTR değişimleri
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Her hafta (20 dk):</strong> GA4 Kullanıcı Edinimi
                      — hangi kanal büyüyor / azalıyor?
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Her ay (1 saat):</strong> Hotjar kayıtları gözden
                      geçirme ve funnel analizi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Her ay (1 saat):</strong> SEMrush ile rakip
                      anahtar kelime karşılaştırması
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sık Sorulan Sorular
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Google Analytics 4 ücretsiz mi?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Evet, standart GA4 tamamen ücretsizdir. Günde 1 milyonun
                      üzerinde olay işleyen ve gelişmiş veri saklama ihtiyacı
                      olan kurumsal kullanıcılar için ücretli GA4 360 versiyonu
                      mevcuttur.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      GA4 veri saklama süresi ne kadar?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Varsayılan olarak 2 aydır. Yönetici → Veri Ayarları → Veri
                      Saklama bölümünden 14 aya çıkarabilirsiniz. Özel
                      raporlarda tarih aralığı bu süreyle sınırlıdır; bu nedenle
                      mümkün olan en kısa sürede 14 aya çıkarmanızı öneririz.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Search Console verisi neden GA4&apos;ten farklı?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      GSC yalnızca Google organik tıklamalarını sayarken GA4 tüm
                      kanalları dahil eder. Ayrıca GSC bot ve spam filtresi
                      uygular; GA4 ise varsayılan olarak daha kapsamlı izler.
                      Küçük farklılıklar normaldir; büyük (%30+) farklılıklar
                      GA4&apos;te filtre hatası veya çift etiket varlığına
                      işaret edebilir.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      GDPR açısından Google Analytics kullanımı sorun yaratır
                      mı?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      AB&apos;deki kullanıcılar için dikkatli olunmalı. IP
                      anonimleştirme GA4&apos;te varsayılan olarak açıktır.
                      Türkiye merkezli sitelerde KVKK uyumu açısından çerez
                      politikanızda analitik çerezlere onay alınmasını öneririz.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  GA4, Search Console, Hotjar ve rekabet analizi araçlarının
                  birlikte kullanımı, sitenizin tam bir diagnostik haritasını
                  çıkarır. Veri sadece rapor değil, aksiyon listesidir:
                  görüntüleme süresi düşükse içerik iyileştirmesi, CTR düşükse
                  meta yazısı güncellemesi, dönüşüm azsa CTA testi yapılır.
                  Profesyonel{" "}
                  <Link
                    href="/hizmetler/dijital-pazarlama"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    dijital pazarlama
                  </Link>{" "}
                  hizmeti ile bu süreçleri sizin için yönetiyoruz. WebCraft ile
                  iletişime geçin.
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="web-analitik-araclari"
            posts={[]}
            limit={3}
          />
        </main>
        <Suspense fallback={<SectionSkeleton height="h-96" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

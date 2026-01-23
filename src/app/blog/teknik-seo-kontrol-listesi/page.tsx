import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import Link from "next/link";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Teknik SEO Kontrol Listesi: 2026 Kapsamlı Rehber | WebCraft",
  description:
    "Teknik SEO kontrol listesi ile web sitenizi Google için optimize edin. XML sitemap, robots.txt, canonical tags, schema markup ve site hızı optimizasyonu rehberi.",
  keywords:
    "teknik seo, seo kontrol listesi, xml sitemap, robots.txt, canonical tags, schema markup, site yapısı, mobil optimizasyon, site hızı",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/teknik-seo-kontrol-listesi",
  },
  openGraph: {
    title: "Teknik SEO Kontrol Listesi: 2026 Kapsamlı Rehber",
    description:
      "Web sitenizi Google için optimize edin. XML sitemap, robots.txt, canonical tags ve schema markup ile teknik SEO rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2026-01-12T09:00:00Z",
    authors: ["WebCraft SEO Uzmanı"],
  },
};

export default function TeknikSEOKontrolListesi() {
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
        name: "Teknik SEO Kontrol Listesi",
        item: "https://www.webcraft.tr/blog/teknik-seo-kontrol-listesi",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Teknik SEO Kontrol Listesi: 2026 Kapsamlı Rehber",
    description:
      "Teknik SEO kontrol listesi ile web sitenizi Google için optimize edin. XML sitemap, robots.txt, canonical tags ve schema markup rehberi.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.jpg",
    author: {
      "@type": "Person",
      name: "WebCraft SEO Uzmanı",
    },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2026-01-12T09:00:00Z",
    dateModified: "2026-01-12T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/teknik-seo-kontrol-listesi",
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

        <main>
          <article className="pt-32 pb-16">
            <div className="max-w-screen-xl mx-auto px-6 md:px-10">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <div className="mb-8">
                    <Link
                      href="/blog"
                      className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors mb-6"
                    >
                      <span>← Blog&apos;a Geri Dön</span>
                    </Link>

                    <div className="mb-6">
                      <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                        SEO Rehberi
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                      Teknik SEO Kontrol Listesi: 2026 Kapsamlı Rehber
                    </h1>

                    <div className="flex items-center gap-4 text-black/60 text-sm">
                      <span>WebCraft SEO Uzmanı</span>
                      <span>•</span>
                      <span>12 Ocak 2026</span>
                      <span>•</span>
                      <span>19 dk okuma</span>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={{
                        __html: `
      <p>Teknik SEO, web sitenizin arama motorları tarafından doğru şekilde anlaşılması, indexlenmesi ve sıralanması için kritik öneme sahiptir. İçerik kalitesi ve backlink'ler ne kadar güçlü olursa olsun, teknik SEO temelleri sağlam değilse, Google'da üst sıralarda yer almak neredeyse imkansızdır. Bu kapsamlı rehberde, 2026 yılı için güncel teknik SEO kontrol listesini adım adım ele alacağız.</p>
      
      <p><a href="/hizmetler/seo-uyumlu-web-sitesi" class="text-[#f84525] hover:underline font-semibold">SEO uyumlu web sitesi</a> oluşturmak, sadece anahtar kelimeleri doğru kullanmaktan ibaret değildir. Site yapısından mobil uyumluluğa, sayfa hızından schema markup'a kadar birçok teknik faktörü doğru şekilde yapılandırmanız gerekir.</p>
      
      <h2>Teknik SEO Nedir ve Neden Önemlidir?</h2>
      
      <p>Teknik SEO, web sitenizin arama motorları tarafından crawl (tarama), index (indeksleme) ve rank (sıralama) edilmesini optimize etmek için yapılan çalışmaların tümüdür. On-page SEO (sayfa içi) ve off-page SEO'nun (sayfa dışı) aksine, teknik SEO tamamen web sitenizin altyapısına odaklanır.</p>
      
      <h3>Teknik SEO'nun İşletmenize Faydaları</h3>
      
      <ul>
        <li><strong>Daha iyi Google sıralaması:</strong> Google, teknik olarak sağlam siteleri ödüllendirir</li>
        <li><strong>Hızlı indexlenme:</strong> Crawl verimliliği artar, yeni içerikler hızla indexlenir</li>
        <li><strong>Kullanıcı deneyimi iyileştirmesi:</strong> Hızlı, güvenli ve mobil uyumlu siteler</li>
        <li><strong>Organik trafik artışı:</strong> Daha fazla sayfa indexlenir ve sıralanır</li>
        <li><strong>Dönüşüm oranı artışı:</strong> İyi teknik altyapı, kullanıcı deneyimini artırır</li>
        <li><strong>Rekabet avantajı:</strong> Rakiplerinizin teknik eksikliklerinden yararlanın</li>
      </ul>
      
      <h2>1. Site Yapısı ve URL Optimizasyonu</h2>
      
      <p>Web sitenizin yapısı, hem kullanıcılar hem de arama motorları için kritik öneme sahiptir. İyi planlanmış bir site yapısı, crawl verimliliğini artırır ve kullanıcı deneyimini iyileştirir.</p>
      
      <h3>Site Yapısı Best Practice'leri</h3>
      
      <ul>
        <li><strong>Düz hiyerarşi:</strong> Ana sayfadan herhangi bir sayfaya maksimum 3 tıklama ile ulaşılabilir olmalı</li>
        <li><strong>Mantıklı kategorileme:</strong> İçerikler konularına göre gruplanmalı</li>
        <li><strong>Breadcrumb navigasyonu:</strong> Kullanıcı ve bot'lar için kolay navigasyon</li>
        <li><strong>Internal linking stratejisi:</strong> İlgili sayfalar birbirine bağlanmalı</li>
        <li><strong>Siloed content:</strong> Konuları birbirinden ayrı, derinlemesine işleyin</li>
      </ul>
      
      <h3>SEO Dostu URL Yapısı</h3>
      
      <p><strong>✅ İyi URL Örnekleri:</strong></p>
      
      <ul>
        <li>webcraft.tr/hizmetler/web-tasarim</li>
        <li>webcraft.tr/blog/teknik-seo-rehberi</li>
        <li>webcraft.tr/urunler/kategori/urun-adi</li>
      </ul>
      
      <p><strong>❌ Kötü URL Örnekleri:</strong></p>
      
      <ul>
        <li>webcraft.tr/index.php?id=123&cat=45</li>
        <li>webcraft.tr/sayfa1234</li>
        <li>webcraft.tr/ürünler/çözümler/türkçe-karakterler</li>
      </ul>
      
      <p><strong>URL Optimizasyon Kuralları:</strong></p>
      
      <ul>
        <li><strong>Kısa ve açıklayıcı:</strong> 50-60 karakter arası ideal</li>
        <li><strong>Küçük harf kullanın:</strong> Büyük harf karışıklığı duplicate content yaratabilir</li>
        <li><strong>Tire kullanın:</strong> Kelime ayıracı olarak tire (-) kullanın, underscore (_) değil</li>
        <li><strong>Türkçe karakter kullanmayın:</strong> URL encoding sorunlarını önleyin</li>
        <li><strong>Anahtar kelime ekleyin:</strong> Hedef anahtar kelimeyi URL'ye dahil edin</li>
        <li><strong>Gereksiz parametrelerden kaçının:</strong> Temiz URL yapısı tercih edin</li>
      </ul>
      
      <h2>2. XML Sitemap Optimizasyonu</h2>
      
      <p>XML sitemap, web sitenizin haritasını Google'a sunan bir dosyadır. Doğru yapılandırılmış bir sitemap, crawl verimliliğini artırır ve yeni içeriklerin hızla indexlenmesini sağlar.</p>
      
      <h3>XML Sitemap Best Practice'leri</h3>
      
      <ul>
        <li><strong>Sadece indexlenebilir sayfalar:</strong> Noindex, 404, redirect olan sayfaları dahil etmeyin</li>
        <li><strong>Öncelik belirleme:</strong> Priority değeri ile önemli sayfaları vurgulayın</li>
        <li><strong>Güncelleme sıklığı:</strong> Changefreq değeri ile güncelleme sıklığını belirtin</li>
        <li><strong>Lastmod tarihi:</strong> Son güncelleme tarihini ekleyin</li>
        <li><strong>50.000 URL limiti:</strong> Her sitemap dosyasında maksimum 50.000 URL olabilir</li>
        <li><strong>Canonical URL'ler:</strong> Her sayfanın canonical versiyonunu ekleyin</li>
      </ul>
      
      <p><strong>Örnek XML Sitemap Yapısı:</strong></p>
      
      <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.webcraft.tr/hizmetler/web-tasarim&lt;/loc&gt;
    &lt;lastmod&gt;2026-01-12&lt;/lastmod&gt;
    &lt;changefreq&gt;monthly&lt;/changefreq&gt;
    &lt;priority&gt;0.8&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</code></pre>
      
      <h3>Sitemap Çeşitleri</h3>
      
      <ul>
        <li><strong>Ana sitemap:</strong> Tüm sayfaları listeleyen genel sitemap</li>
        <li><strong>Blog sitemap:</strong> Blog yazıları için ayrı sitemap</li>
        <li><strong>Görsel sitemap:</strong> Görsellerin indexlenmesi için</li>
        <li><strong>Video sitemap:</strong> Video içerikler için özel sitemap</li>
        <li><strong>Haber sitemap:</strong> Google News için özel format</li>
      </ul>
      
      <p><strong>Sitemap'i Google Search Console'a Gönderin:</strong></p>
      
      <ol>
        <li>Google Search Console'a giriş yapın</li>
        <li>Sol menüden "Sitemaps" bölümüne gidin</li>
        <li>Sitemap URL'nizi girin (örn: sitemap.xml)</li>
        <li>"Gönder" butonuna tıklayın</li>
        <li>Durum kontrolü yapın ve hataları düzeltin</li>
      </ol>
      
      <h2>3. Robots.txt Optimizasyonu</h2>
      
      <p>Robots.txt dosyası, arama motoru botlarına hangi sayfaların taranacağını, hangilerinin taranmayacağını söyleyen bir direktif dosyasıdır. Doğru yapılandırma, crawl bütçenizi optimize eder.</p>
      
      <h3>Robots.txt Best Practice'leri</h3>
      
      <ul>
        <li><strong>Root dizinde bulundurma:</strong> domain.com/robots.txt olarak erişilebilir olmalı</li>
        <li><strong>Kritik sayfaları engellemeyin:</strong> Ana sayfalar ve önemli içerikler erişilebilir olmalı</li>
        <li><strong>Duplicate content engelleme:</strong> Parametre sayfaları ve filter sayfaları disallow edin</li>
        <li><strong>Admin panelleri koruma:</strong> /admin, /wp-admin gibi yönetim panellerini engelleme</li>
        <li><strong>Sitemap referansı:</strong> Sitemap lokasyonunu robots.txt'de belirtin</li>
      </ul>
      
      <p><strong>Örnek Robots.txt Dosyası:</strong></p>
      
      <pre><code>User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*?*utm_*
Disallow: /*?*sort=*

# Sitemap Lokasyonu
Sitemap: https://www.webcraft.tr/sitemap.xml

# Özel Bot Kuralları
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1</code></pre>
      
      <h3>Robots.txt ile Yaygın Hatalar</h3>
      
      <ul>
        <li><strong>❌ CSS ve JS dosyalarını engelleme:</strong> Google'ın render etmesini engeller</li>
        <li><strong>❌ Sitemap'i engellemek:</strong> Sitemap erişilebilir olmalı</li>
        <li><strong>❌ Tüm siteyi disallow etmek:</strong> Yanlışlıkla tüm siteyi kapatmak</li>
        <li><strong>❌ Noindex yerine robots.txt kullanımı:</strong> Sensitive bilgiler için robots meta tag kullanın</li>
      </ul>
      
      <h2>4. Canonical Tags (Kanonik Etiketler)</h2>
      
      <p>Canonical tag'ler, duplicate content sorununu çözmek için kullanılan HTML etiketleridir. Aynı veya benzer içeriğe sahip birden fazla URL varsa, hangisinin orijinal olduğunu Google'a bildirirsiniz.</p>
      
      <h3>Canonical Tag Kullanım Durumları</h3>
      
      <ul>
        <li><strong>Parametre URL'ler:</strong> ?sort=, ?filter= gibi parametrelerle oluşan sayfalar</li>
        <li><strong>WWW vs Non-WWW:</strong> www.site.com ve site.com arasında tercih</li>
        <li><strong>HTTP vs HTTPS:</strong> Güvenli versiyonu canonical olarak belirleme</li>
        <li><strong>Trailing slash:</strong> /sayfa ve /sayfa/ arasındaki farkı yönetme</li>
        <li><strong>Mobile versiyonlar:</strong> m.site.com ve site.com arasında yönlendirme</li>
        <li><strong>Print versiyonları:</strong> /sayfa/print gibi özel versiyonlar</li>
      </ul>
      
      <p><strong>Canonical Tag Implementasyonu:</strong></p>
      
      <pre><code>&lt;!-- HTML Head Bölümüne Eklenir --&gt;
&lt;link rel="canonical" href="https://www.webcraft.tr/hizmetler/web-tasarim" /&gt;</code></pre>
      
      <h3>Canonical Tag Best Practice'leri</h3>
      
      <ul>
        <li><strong>Self-referencing canonical:</strong> Her sayfa kendi URL'sine canonical tag içermelidir</li>
        <li><strong>Absolute URL kullanın:</strong> Relative URL yerine tam URL kullanın</li>
        <li><strong>HTTPS tercih edin:</strong> Güvenli versiyonu canonical yapın</li>
        <li><strong>Tutarlı olun:</strong> Internal linkler canonical URL'yi göstermeli</li>
        <li><strong>Pagination yönetimi:</strong> Sayfalandırılmış içeriklerde doğru canonical kullanımı</li>
        <li><strong>Cross-domain canonical:</strong> Syndicated content için çapraz alan canonical'ları</li>
      </ul>
      
      <h2>5. Schema Markup (Yapılandırılmış Veri)</h2>
      
      <p>Schema markup, web sitenizin içeriğini arama motorlarına daha iyi anlatmak için kullanılan yapılandırılmış veri formatıdır. Rich snippets elde etmek ve SERP görünürlüğünü artırmak için kritiktir.</p>
      
      <h3>2026'da Önemli Schema Türleri</h3>
      
      <ul>
        <li><strong>Organization Schema:</strong> İşletme bilgileri, logo, iletişim</li>
        <li><strong>LocalBusiness Schema:</strong> Yerel işletmeler için konum, çalışma saatleri</li>
        <li><strong>Article/BlogPosting Schema:</strong> Blog yazıları için yazar, tarih, görsel</li>
        <li><strong>Product Schema:</strong> Ürün bilgileri, fiyat, stok durumu</li>
        <li><strong>FAQ Schema:</strong> Sıkça sorulan sorular için rich snippets</li>
        <li><strong>HowTo Schema:</strong> Adım adım rehberler için</li>
        <li><strong>BreadcrumbList Schema:</strong> Site navigasyonu için</li>
        <li><strong>Review Schema:</strong> Ürün/hizmet değerlendirmeleri</li>
        <li><strong>Event Schema:</strong> Etkinlikler için tarih, konum, bilet bilgileri</li>
      </ul>
      
      <p><strong>Örnek Organization Schema (JSON-LD):</strong></p>
      
      <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WebCraft",
  "url": "https://www.webcraft.tr",
  "logo": "https://www.webcraft.tr/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-507-944-17-15",
    "contactType": "customer service",
    "areaServed": "TR",
    "availableLanguage": "Turkish"
  },
  "sameAs": [
    "https://www.facebook.com/webcraft",
    "https://www.instagram.com/webcraft",
    "https://www.linkedin.com/company/webcraft"
  ]
}
&lt;/script&gt;</code></pre>
      
      <h3>Schema Markup Araçları</h3>
      
      <ul>
        <li><strong>Google Schema Markup Testing Tool:</strong> Schema kodlarını test edin</li>
        <li><strong>Rich Results Test:</strong> Rich snippet uygunluğunu kontrol edin</li>
        <li><strong>Schema.org:</strong> Tüm schema türleri için dokümantasyon</li>
        <li><strong>JSON-LD Generator:</strong> Schema kodları otomatik oluşturma</li>
      </ul>
      
      <h2>6. Site Hızı Optimizasyonu</h2>
      
      <p>Site hızı, hem kullanıcı deneyimi hem de SEO için kritik bir ranking faktörüdür. Google'ın Core Web Vitals metrikleri, site hızını ölçmenin standart yolu haline geldi.</p>
      
      <h3>Core Web Vitals Optimizasyonu</h3>
      
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> En büyük içeriğin 2.5 saniye içinde yüklenmesi</li>
        <li><strong>FID (First Input Delay):</strong> Kullanıcı etkileşimine 100ms içinde yanıt</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Görsel stabilite skoru 0.1'in altında</li>
        <li><strong>INP (Interaction to Next Paint):</strong> 2024'te FID'nin yerini alacak yeni metrik</li>
      </ul>
      
      <p>Detaylı site hızı optimizasyonu için <a href="/hizmetler/performans-odakli-web-tasarim" class="text-[#f84525] hover:underline font-semibold">performans odaklı web tasarım hizmetlerimize</a> göz atabilirsiniz.</p>
      
      <h3>Site Hızını Artırma Stratejileri</h3>
      
      <ul>
        <li><strong>Görsel optimizasyonu:</strong> WebP, AVIF formatları kullanın</li>
        <li><strong>Kod minify:</strong> CSS, JavaScript ve HTML dosyalarını sıkıştırın</li>
        <li><strong>Lazy loading:</strong> Görselleri ve iframe'leri gerektiğinde yükleyin</li>
        <li><strong>CDN kullanımı:</strong> İçeriği coğrafi olarak dağıtın</li>
        <li><strong>Caching:</strong> Browser ve server cache'i optimize edin</li>
        <li><strong>HTTP/2 veya HTTP/3:</strong> Modern protokoller kullanın</li>
        <li><strong>Database optimizasyonu:</strong> Sorguları optimize edin</li>
        <li><strong>Hosting kalitesi:</strong> Performanslı sunucu kullanın</li>
      </ul>
      
      <h2>7. Mobil Optimizasyon</h2>
      
      <p>Google'ın mobile-first indexing yaklaşımı ile birlikte, mobil optimizasyon artık opsiyonel değil, zorunludur. Web sitenizin mobil versiyonu, desktop versiyonundan daha önemlidir.</p>
      
      <h3>Mobil SEO Kontrol Listesi</h3>
      
      <ul>
        <li><strong>Responsive tasarım:</strong> Tüm cihazlarda uyumlu görünüm</li>
        <li><strong>Mobil sayfa hızı:</strong> 3 saniye altında yükleme</li>
        <li><strong>Dokunmatik uyumluluk:</strong> Butonlar ve linkler kolay tıklanabilir</li>
        <li><strong>Viewport meta tag:</strong> &lt;meta name="viewport" content="width=device-width"&gt;</li>
        <li><strong>Okunabilir fontlar:</strong> Minimum 16px font boyutu</li>
        <li><strong>Pop-up'ları sınırla:</strong> Intrusive interstitials'dan kaçının</li>
        <li><strong>Mobile-friendly navigation:</strong> Hamburger menü ve kolay gezinme</li>
      </ul>
      
      <h3>Google Mobile-Friendly Test</h3>
      
      <p>Web sitenizi <strong>Google Mobile-Friendly Test</strong> aracıyla test edin:</p>
      
      <ol>
        <li>search.google.com/test/mobile-friendly adresine gidin</li>
        <li>Web sitenizin URL'sini girin</li>
        <li>"Test URL" butonuna tıklayın</li>
        <li>Sonuçları inceleyin ve önerileri uygulayın</li>
      </ol>
      
      <h2>8. HTTPS ve Güvenlik</h2>
      
      <p>HTTPS, web sitenizin güvenli bir şekilde sunulmasını sağlar ve Google tarafından ranking faktörü olarak kullanılır. SSL sertifikası olmayan siteler, tarayıcılarda "Güvenli Değil" uyarısı alır.</p>
      
      <h3>HTTPS Implementasyonu</h3>
      
      <ul>
        <li><strong>SSL sertifikası alın:</strong> Let's Encrypt ücretsiz sertifika sunar</li>
        <li><strong>Tüm sayfaları HTTPS'e taşıyın:</strong> Mixed content sorunlarını çözün</li>
        <li><strong>301 redirect kurun:</strong> HTTP'den HTTPS'e yönlendirme</li>
        <li><strong>Internal linkleri güncelleyin:</strong> Tüm linkler HTTPS olmalı</li>
        <li><strong>Canonical tag'leri güncelleyin:</strong> HTTPS versiyonunu gösterin</li>
        <li><strong>Sitemap'i güncelleyin:</strong> HTTPS URL'leri ekleyin</li>
        <li><strong>Google Search Console'u güncelleyin:</strong> HTTPS property ekleyin</li>
      </ul>
      
      <h2>9. Hreflang Tags (Çok Dilli Siteler İçin)</h2>
      
      <p>Eğer web siteniz birden fazla dilde veya birden fazla ülke için hizmet veriyorsa, hreflang tag'leri kullanmalısınız. Bu, Google'a hangi dilin hangi kullanıcılar için olduğunu bildirir.</p>
      
      <h3>Hreflang Implementasyonu</h3>
      
      <pre><code>&lt;link rel="alternate" hreflang="tr" href="https://www.webcraft.tr/" /&gt;
&lt;link rel="alternate" hreflang="en" href="https://www.webcraft.tr/en/" /&gt;
&lt;link rel="alternate" hreflang="de" href="https://www.webcraft.tr/de/" /&gt;
&lt;link rel="alternate" hreflang="x-default" href="https://www.webcraft.tr/" /&gt;</code></pre>
      
      <h2>10. Crawl Bütçesi Optimizasyonu</h2>
      
      <p>Crawl bütçesi, Google'ın belirli bir sürede web sitenizden kaç sayfa taradığını ifade eder. Özellikle büyük siteler için crawl bütçesi optimizasyonu kritiktir.</p>
      
      <h3>Crawl Bütçesini Optimize Etme</h3>
      
      <ul>
        <li><strong>Duplicate content'i azaltın:</strong> Canonical tag'ler ve parametre yönetimi</li>
        <li><strong>404 sayfalarını düzeltin:</strong> Kırık linkleri temizleyin</li>
        <li><strong>Redirect zincirlerinden kaçının:</strong> Doğrudan 301 redirect kullanın</li>
        <li><strong>Gereksiz sayfaları noindex yapın:</strong> Değersiz sayfaları indexden çıkarın</li>
        <li><strong>Sayfa hızını artırın:</strong> Hızlı siteler daha çok taranır</li>
        <li><strong>Internal linking optimize edin:</strong> Önemli sayfaları öne çıkarın</li>
      </ul>
      
      <h2>Teknik SEO Araçları</h2>
      
      <p>Teknik SEO çalışmalarınızı kolaylaştıracak profesyonel araçlar:</p>
      
      <h3>Ücretsiz Araçlar</h3>
      
      <ul>
        <li><strong>Google Search Console:</strong> Indexleme, crawl hataları, performans</li>
        <li><strong>Google PageSpeed Insights:</strong> Site hızı ve Core Web Vitals</li>
        <li><strong>Google Mobile-Friendly Test:</strong> Mobil uyumluluk kontrolü</li>
        <li><strong>Bing Webmaster Tools:</strong> Bing için SEO analizi</li>
        <li><strong>Screaming Frog SEO Spider (Free):</strong> 500 sayfaya kadar crawl</li>
      </ul>
      
      <h3>Ücretli Araçlar</h3>
      
      <ul>
        <li><strong>Screaming Frog SEO Spider (Paid):</strong> Sınırsız sayfa crawl</li>
        <li><strong>Ahrefs Site Audit:</strong> Kapsamlı teknik SEO analizi</li>
        <li><strong>Semrush Site Audit:</strong> Otomatik teknik SEO raporları</li>
        <li><strong>Sitebulb:</strong> Detaylı teknik SEO crawling</li>
        <li><strong>DeepCrawl:</strong> Enterprise seviye teknik SEO</li>
      </ul>
      
      <h2>Teknik SEO Uygulama Planı</h2>
      
      <p>Teknik SEO çalışmalarını adım adım uygulamak için şu planı izleyin:</p>
      
      <h3>1. Hafta: Temel Altyapı</h3>
      
      <ul>
        <li>HTTPS implementasyonu</li>
        <li>XML sitemap oluşturma ve gönderme</li>
        <li>Robots.txt optimize etme</li>
        <li>Google Search Console kurulumu</li>
      </ul>
      
      <h3>2. Hafta: Site Yapısı</h3>
      
      <ul>
        <li>URL yapısı optimize etme</li>
        <li>Internal linking stratejisi</li>
        <li>Breadcrumb navigasyon ekleme</li>
        <li>Canonical tag'leri kontrol etme</li>
      </ul>
      
      <h3>3. Hafta: Performans</h3>
      
      <ul>
        <li>Core Web Vitals optimize etme</li>
        <li>Görsel optimizasyonu</li>
        <li>Kod minify ve sıkıştırma</li>
        <li>CDN kurulumu</li>
      </ul>
      
      <h3>4. Hafta: İleri Seviye</h3>
      
      <ul>
        <li>Schema markup implementasyonu</li>
        <li>Mobil optimizasyon iyileştirmeleri</li>
        <li>Hreflang (gerekiyorsa)</li>
        <li>Crawl bütçesi optimizasyonu</li>
      </ul>
      
      <h2>Sonuç</h2>
      
      <p>Teknik SEO, web sitenizin Google'da başarılı olması için vazgeçilmez bir temeldir. Bu kontrol listesindeki tüm maddeleri uyguladığınızda, web siteniz arama motorları tarafından daha iyi anlaşılacak, daha hızlı indexlenecek ve daha üst sıralarda yer alacaktır.</p>
      
      <p><a href="/hizmetler/seo-uyumlu-web-sitesi" class="text-[#f84525] hover:underline font-semibold">Profesyonel SEO uyumlu web sitesi</a> hizmetimiz ile teknik SEO çalışmalarınızı uzman ekibimize bırakabilirsiniz. Ayrıca, <a href="/hizmetler/web-tasarim" class="text-[#f84525] hover:underline font-semibold">web tasarım hizmetlerimizde</a> tüm teknik SEO best practice'lerini uygulayarak, Google'da üst sıralarda yer alan web siteleri oluşturuyoruz.</p>
      
      <p>Teknik SEO, sürekli güncellenen bir alan olduğu için düzenli olarak sitenizi denetlemeli ve Google'ın yeni algoritmalarına uyum sağlamalısınız. Başarılar dileriz!</p>
      `,
                      }}
                    />
                  </div>
                </div>

                <aside className="md:w-80">
                  <div className="sticky top-32">
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="font-bold text-lg mb-4 text-black">
                        İçindekiler
                      </h3>
                      <ul className="space-y-2 text-sm text-black/70">
                        <li>
                          <a
                            href="#teknik-seo-nedir"
                            className="hover:text-red-600 transition-colors"
                          >
                            Teknik SEO Nedir?
                          </a>
                        </li>
                        <li>
                          <a
                            href="#site-yapisi"
                            className="hover:text-red-600 transition-colors"
                          >
                            Site Yapısı ve URL
                          </a>
                        </li>
                        <li>
                          <a
                            href="#xml-sitemap"
                            className="hover:text-red-600 transition-colors"
                          >
                            XML Sitemap
                          </a>
                        </li>
                        <li>
                          <a
                            href="#robots-txt"
                            className="hover:text-red-600 transition-colors"
                          >
                            Robots.txt
                          </a>
                        </li>
                        <li>
                          <a
                            href="#canonical-tags"
                            className="hover:text-red-600 transition-colors"
                          >
                            Canonical Tags
                          </a>
                        </li>
                        <li>
                          <a
                            href="#schema-markup"
                            className="hover:text-red-600 transition-colors"
                          >
                            Schema Markup
                          </a>
                        </li>
                        <li>
                          <a
                            href="#site-hizi"
                            className="hover:text-red-600 transition-colors"
                          >
                            Site Hızı
                          </a>
                        </li>
                        <li>
                          <a
                            href="#mobil-optimizasyon"
                            className="hover:text-red-600 transition-colors"
                          >
                            Mobil Optimizasyon
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-2 text-black">
                        SEO Hizmetimiz
                      </h3>
                      <p className="text-sm text-black/70 mb-4">
                        Profesyonel SEO hizmetimiz ile web sitenizi
                        Google&apos;da üst sıralara taşıyın.
                      </p>
                      <Link
                        href="/iletisim"
                        className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                      >
                        Ücretsiz Teklif Alın
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </article>

          <RelatedBlogPosts
            currentSlug="teknik-seo-kontrol-listesi"
            posts={[]}
            limit={3}
          />
        </main>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

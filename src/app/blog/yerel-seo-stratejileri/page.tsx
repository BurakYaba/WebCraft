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
  title: "Yerel SEO Stratejileri: Google Haritalar'da Üst Sıralarda Yer Alın",
  description:
    "Yerel SEO stratejileri ile Google My Business, Google Haritalar ve yerel aramalarında üst sıralarda yer alın. NAP tutarlılığı, müşteri yorumları ve yerel anahtar kelimeler rehberi.",
  keywords:
    "yerel seo, local seo, google my business, google haritalar, yerel arama, nap tutarlılığı, müşteri yorumları, yerel anahtar kelimeler",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/yerel-seo-stratejileri",
  },
  openGraph: {
    title: "Yerel SEO Stratejileri: Google Haritalar'da Üst Sıralarda Yer Alın",
    description:
      "Google My Business ve yerel SEO stratejileri ile yerel aramalarında üst sıralara çıkın. Profesyonel yerel SEO rehberi.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2026-01-10T09:00:00Z",
    authors: ["WebCraft SEO Uzmanı"],
  },
};

export default function YerelSEOStratejileri() {
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
        name: "Yerel SEO Stratejileri",
        item: "https://www.webcraft.tr/blog/yerel-seo-stratejileri",
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Yerel SEO Stratejileri: Google Haritalar'da Üst Sıralarda Yer Alın",
    description:
      "Yerel SEO stratejileri ile Google My Business, Google Haritalar ve yerel aramalarında üst sıralarda yer alın. NAP tutarlılığı ve müşteri yorumları rehberi.",
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
    datePublished: "2026-01-10T09:00:00Z",
    dateModified: "2026-01-10T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/yerel-seo-stratejileri",
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
                        Yerel SEO
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                      Yerel SEO Stratejileri: Google Haritalar&apos;da Üst
                      Sıralarda Yer Alın
                    </h1>

                    <div className="flex items-center gap-4 text-black/60 text-sm">
                      <span>WebCraft SEO Uzmanı</span>
                      <span>•</span>
                      <span>10 Ocak 2026</span>
                      <span>•</span>
                      <span>19 dk okuma</span>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={{
                        __html: `
      <p>Yerel SEO (Local SEO), işletmenizin belirli bir coğrafi bölgedeki müşterilere ulaşmasını sağlayan dijital pazarlama stratejilerinin tümüdür. Google'da "yakınımdaki" aramalarının %76'sı 24 saat içinde mağaza ziyaretine dönüşüyor. Bu istatistik, yerel SEO'nun küçük ve orta ölçekli işletmeler için ne kadar kritik olduğunu gösteriyor.</p>
      
      <p>Bu kapsamlı rehberde, Google My Business optimizasyonundan NAP tutarlılığına, müşteri yorumlarından yerel anahtar kelimelere kadar tüm yerel SEO stratejilerini detaylı olarak ele alacağız. <a href="/fethiye-web-tasarim-hizmetleri" class="text-[#f84525] hover:underline font-semibold">Fethiye web tasarım hizmetlerimiz</a> ve <a href="/mugla-web-tasarim-seo-hizmetleri" class="text-[#f84525] hover:underline font-semibold">Muğla web tasarım ve SEO hizmetlerimiz</a> ile yerel işletmelere özel çözümler sunuyoruz.</p>
      
      <h2>Yerel SEO Nedir ve Neden Önemlidir?</h2>
      
      <p>Yerel SEO, işletmenizin belirli bir coğrafi konumda arama sonuçlarında görünür olmasını sağlayan optimizasyon çalışmalarıdır. "Fethiye'de restoran", "Muğla web tasarım" veya "yakınımdaki kuaför" gibi aramalar yerel SEO kapsamındadır.</p>
      
      <h3>Yerel SEO'nun İşletmenize Faydaları</h3>
      
      <ul>
        <li><strong>Hedefli müşteri trafiği:</strong> Sadece hizmet verdiğiniz bölgedeki potansiyel müşterilere ulaşın</li>
        <li><strong>Yüksek dönüşüm oranları:</strong> Yerel aramalar %80 dönüşüm oranına sahiptir</li>
        <li><strong>Mobil aramaları yakalama:</strong> Mobil aramaların %50'si yerel aramalardır</li>
        <li><strong>Rekabet avantajı:</strong> Yerel rakiplerinizin önüne geçin</li>
        <li><strong>Google Haritalar görünürlüğü:</strong> Harita paketinde (map pack) yer alın</li>
        <li><strong>Müşteri güveni:</strong> Yorumlar ve değerlendirmeler güven oluşturur</li>
        <li><strong>Uygun maliyetli pazarlama:</strong> Ulusal SEO'ya göre daha düşük rekabet</li>
      </ul>
      
      <h2>1. Google My Business (Google İşletmem) Optimizasyonu</h2>
      
      <p>Google My Business (GMB), yerel SEO'nun temel taşıdır. GMB kaydınız, Google Haritalar ve yerel arama sonuçlarında görünmenizi sağlar.</p>
      
      <h3>Google My Business Profil Oluşturma</h3>
      
      <p><strong>Adım Adım GMB Kurulumu:</strong></p>
      
      <ol>
        <li><strong>Google My Business'a kaydolun:</strong> business.google.com adresinden işletmenizi ekleyin</li>
        <li><strong>İşletme bilgilerini girin:</strong> İsim, kategori, adres, telefon, web sitesi</li>
        <li><strong>Doğrulama yapın:</strong> Posta kartı, telefon veya e-posta ile doğrulama</li>
        <li><strong>Profili tamamlayın:</strong> Açıklama, fotoğraflar, çalışma saatleri ekleyin</li>
        <li><strong>Özellikler ekleyin:</strong> Hizmetler, ürünler, özellikler belirtin</li>
      </ol>
      
      <h3>GMB Profil Optimizasyonu</h3>
      
      <ul>
        <li><strong>Doğru kategori seçimi:</strong> Ana kategori ve 9 ikincil kategori seçin</li>
        <li><strong>Detaylı işletme açıklaması:</strong> 750 karakter limit, anahtar kelime kullanın</li>
        <li><strong>Çalışma saatlerini belirtin:</strong> Tatil günlerini ve özel saatleri ekleyin</li>
        <li><strong>Hizmet alanını tanımlayın:</strong> Hizmet verdiğiniz bölgeleri ekleyin</li>
        <li><strong>Özellikler ekleyin:</strong> Wifi, otopark, erişilebilirlik gibi özellikler</li>
        <li><strong>Booking/rezervasyon entegrasyonu:</strong> Direkt rezervasyon imkanı</li>
        <li><strong>Ürün ve hizmetler:</strong> Sunduğunuz ürün/hizmetleri listeye ekleyin</li>
      </ul>
      
      <h3>GMB Fotoğraf Stratejisi</h3>
      
      <p>Fotoğraflı GMB profilleri, fotoğrafsız olanlara göre %42 daha fazla yol tarifi isteği alır.</p>
      
      <p><strong>Eklemeniz Gereken Fotoğraf Türleri:</strong></p>
      
      <ul>
        <li><strong>Logo:</strong> Yüksek çözünürlüklü, şeffaf arka planlı</li>
        <li><strong>Kapak fotoğrafı:</strong> İşletmenizin en iyi açısından çekilmiş görsel</li>
        <li><strong>Dış mekan fotoğrafları:</strong> İşletmenizin dıştan görünümü</li>
        <li><strong>İç mekan fotoğrafları:</strong> İçerideki atmosferi yansıtan görseller</li>
        <li><strong>Ürün/hizmet fotoğrafları:</strong> Sunduğunuz ürün ve hizmetlerin görselleri</li>
        <li><strong>Ekip fotoğrafları:</strong> Çalışanlarınızın profesyonel fotoğrafları</li>
        <li><strong>Müşteri deneyimi:</strong> Müşterilerinizin işletmenizde çekilmiş fotoğrafları</li>
      </ul>
      
      <p><strong>Fotoğraf Optimizasyonu:</strong></p>
      
      <ul>
        <li>Minimum 720x720 piksel çözünürlük</li>
        <li>JPG veya PNG formatı</li>
        <li>Dosya boyutu 5MB'ın altında</li>
        <li>Profesyonel kalitede, iyi aydınlatılmış</li>
        <li>Düzenli olarak yeni fotoğraflar ekleyin (ayda 3-5 fotoğraf)</li>
      </ul>
      
      <h3>GMB Gönderileri (Posts)</h3>
      
      <p>GMB gönderileri, müşterilere kampanya, etkinlik ve haberlerinizi duyurmanın harika bir yoludur.</p>
      
      <p><strong>Gönderi Türleri:</strong></p>
      
      <ul>
        <li><strong>Haberler:</strong> Genel güncellemeler ve duyurular</li>
        <li><strong>Etkinlikler:</strong> Düzenlediğiniz etkinlikler</li>
        <li><strong>Teklifler:</strong> İndirim ve promosyonlar</li>
        <li><strong>Ürünler:</strong> Yeni ürün tanıtımları</li>
      </ul>
      
      <p><strong>Gönderi Best Practice'leri:</strong></p>
      
      <ul>
        <li>Haftada 2-3 gönderi yayınlayın</li>
        <li>Görseller ekleyin (1200x900 piksel önerilir)</li>
        <li>CTA butonları kullanın (Şimdi Ara, Rezervasyon Yap, vb.)</li>
        <li>100-300 kelime arası kısa ve öz açıklama</li>
        <li>Gönderileri 7 gün sonra güncelleyin (Google gönderileri 7 gün sonra kaldırır)</li>
      </ul>
      
      <h2>2. NAP Tutarlılığı (Name, Address, Phone)</h2>
      
      <p>NAP tutarlılığı, işletmenizin ismi, adresi ve telefon numarasının internetteki tüm kaynaklarda aynı formatta yer almasıdır. Google, NAP tutarlılığını yerel sıralama faktörü olarak kullanır.</p>
      
      <h3>NAP Tutarlılığı Nasıl Sağlanır?</h3>
      
      <p><strong>Standart Format Belirleyin:</strong></p>
      
      <pre><code>İşletme Adı: WebCraft Web Tasarım Ajansı
Adres: Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye, Muğla 48300
Telefon: +90 507 944 17 15
E-posta: info@webcraft.tr</code></pre>
      
      <p><strong>NAP Tutarlılığı Kontrol Listesi:</strong></p>
      
      <ul>
        <li><strong>Tam aynı format kullanın:</strong> "Sokak" vs "Sk." gibi kısaltma farklılıklarından kaçının</li>
        <li><strong>Tutarlı telefon formatı:</strong> +90 507 944 17 15 veya (507) 944-17-15 gibi tek format seçin</li>
        <li><strong>İşletme adı tutarlılığı:</strong> "WebCraft" vs "Web Craft" vs "Webcraft" farklılıklarına dikkat</li>
        <li><strong>PO Box kullanmayın:</strong> Fiziksel adres kullanın</li>
        <li><strong>Yerel telefon numarası:</strong> Mümkünse yerel alan kodu kullanın</li>
      </ul>
      
      <h3>NAP Citation (Alıntı) Kaynakları</h3>
      
      <p>NAP bilgilerinizi şu platformlarda tutarlı şekilde yayınlayın:</p>
      
      <ul>
        <li><strong>Google My Business:</strong> En önemli kaynak</li>
        <li><strong>Bing Places:</strong> Bing için yerel kayıt</li>
        <li><strong>Yandex İşletme:</strong> Yandex kullanıcıları için</li>
        <li><strong>Facebook Business Page:</strong> Sosyal medya citation</li>
        <li><strong>Foursquare:</strong> Konum tabanlı platform</li>
        <li><strong>Yelp:</strong> Müşteri yorumları ve değerlendirmeler</li>
        <li><strong>Yerel dizinler:</strong> 11880, Enuygun, Heryerdeyim gibi</li>
        <li><strong>Sektörel dizinler:</strong> Sektörünüze özel dizinler</li>
        <li><strong>Ticaret odası:</strong> Yerel ticaret odası web sitesi</li>
        <li><strong>Gazeteler ve yerel medya:</strong> Yerel basın kayıtları</li>
      </ul>
      
      <h2>3. Müşteri Yorumları ve Değerlendirmeler</h2>
      
      <p>Müşteri yorumları, yerel SEO'nun en kritik ranking faktörlerinden biridir. Araştırmalar gösteriyor ki tüketicilerin %87'si yerel işletmeler için online yorumları okuyor.</p>
      
      <h3>Yorum Yönetimi Stratejisi</h3>
      
      <p><strong>1. Müşteri Yorumu Toplama</strong></p>
      
      <ul>
        <li><strong>Yorum isteme zamanlaması:</strong> Satış sonrası 2-3 gün içinde yorum isteyin</li>
        <li><strong>E-posta kampanyaları:</strong> Otomatik yorum isteme e-postaları</li>
        <li><strong>SMS ile yorum linki:</strong> Satış sonrası SMS ile Google yorum linki</li>
        <li><strong>QR kod kartları:</strong> Fiziksel mağazada QR kod ile yorum isteme</li>
        <li><strong>Web sitesi entegrasyonu:</strong> Web sitenizde yorum bırakma bölümü</li>
        <li><strong>Teşvik etme (dikkatli):</strong> İndirim veya hediye ile (Google kurallarına dikkat)</li>
      </ul>
      
      <p><strong>2. Yorumlara Yanıt Verme</strong></p>
      
      <ul>
        <li><strong>48 saat içinde yanıt verin:</strong> Hızlı yanıt müşteri memnuniyetini artırır</li>
        <li><strong>Pozitif yorumlara teşekkür edin:</strong> Müşteriyi takdir edin</li>
        <li><strong>Negatif yorumlara profesyonel yaklaşın:</strong> Özür dileyin ve çözüm sunun</li>
        <li><strong>Kişiselleştirin:</strong> "Değerli müşterimiz" yerine isim kullanın</li>
        <li><strong>Anahtar kelime kullanın:</strong> Yanıtlarınızda hedef anahtar kelimeleri kullanın</li>
      </ul>
      
      <p><strong>Örnek Yanıtlar:</strong></p>
      
      <p><em>Pozitif Yorum Yanıtı:</em></p>
      
      <blockquote>
      <p>"Merhaba [İsim], yorumunuz için çok teşekkür ederiz! <a href="/fethiye-web-tasarim-hizmetleri" class="text-[#f84525] hover:underline font-semibold">Fethiye web tasarım hizmetlerimizden</a> memnun kaldığınızı duymak bizi çok mutlu etti. Gelecekte de sizlere profesyonel hizmet sunmaya devam edeceğiz. İyi günler dileriz!"</p>
      </blockquote>
      
      <p><em>Negatif Yorum Yanıtı:</em></p>
      
      <blockquote>
      <p>"Merhaba [İsim], deneyiminizden dolayı özür dileriz. Müşteri memnuniyeti bizim için en önemli önceliktir. Sorununuzu çözmek için sizinle iletişime geçmek istiyoruz. Lütfen bizi [telefon] numarasından arayın. Teşekkürler."</p>
      </blockquote>
      
      <h3>Yorum Platformları</h3>
      
      <ul>
        <li><strong>Google My Business:</strong> En önemli platform</li>
        <li><strong>Facebook:</strong> Sosyal kanıt için</li>
        <li><strong>Yelp:</strong> Türkiye'de az kullanılsa da önemli</li>
        <li><strong>Foursquare:</strong> Özellikle restoran ve kafeler için</li>
        <li><strong>TripAdvisor:</strong> Turizm sektörü için kritik</li>
        <li><strong>Booking.com:</strong> Otel ve konaklama için</li>
        <li><strong>Web sitenizde yorum bölümü:</strong> Kendi sitenizde testimonials</li>
      </ul>
      
      <h2>4. Yerel Anahtar Kelime Araştırması</h2>
      
      <p>Yerel anahtar kelimeler, coğrafi konum bilgisi içeren arama terimleridir. Doğru yerel anahtar kelimeleri hedeflemek, yerel SEO başarısının temelidir.</p>
      
      <h3>Yerel Anahtar Kelime Türleri</h3>
      
      <p><strong>1. Şehir + Hizmet:</strong></p>
      
      <ul>
        <li>"Fethiye web tasarım"</li>
        <li>"Muğla SEO hizmeti"</li>
        <li>"İstanbul dijital pazarlama"</li>
      </ul>
      
      <p><strong>2. "Yakınımdaki" Aramaları:</strong></p>
      
      <ul>
        <li>"Yakınımdaki web tasarım ajansı"</li>
        <li>"Near me web design agency"</li>
        <li>"Civardaki restoran"</li>
      </ul>
      
      <p><strong>3. Mahalle/İlçe Bazlı:</strong></p>
      
      <ul>
        <li>"Çalış web tasarım"</li>
        <li>"Ölüdeniz dijital pazarlama"</li>
        <li>"Bodrum web sitesi"</li>
      </ul>
      
      <p><strong>4. İşletme Türü + Konum:</strong></p>
      
      <ul>
        <li>"Fethiye'de web tasarım ajansı"</li>
        <li>"Muğla'da SEO uzmanı"</li>
        <li>"İstanbul'da mobil uygulama geliştirici"</li>
      </ul>
      
      <h3>Yerel Anahtar Kelime Araştırma Araçları</h3>
      
      <ul>
        <li><strong>Google Keyword Planner:</strong> Yerel arama hacimleri için</li>
        <li><strong>Google Trends:</strong> Yerel trendleri analiz etmek için</li>
        <li><strong>Google Search Console:</strong> Mevcut anahtar kelime performansı</li>
        <li><strong>Ahrefs/Semrush:</strong> Rakip analizi ve anahtar kelime fikirleri</li>
        <li><strong>Google Autocomplete:</strong> "Fethiye web..." yazarak önerileri görün</li>
        <li><strong>People Also Ask:</strong> İlgili sorular bölümü</li>
        <li><strong>Related Searches:</strong> Google'ın arama sonuçları altındaki ilgili aramalar</li>
      </ul>
      
      <h3>Yerel Anahtar Kelime Optimizasyonu</h3>
      
      <p><strong>On-Page Kullanım:</strong></p>
      
      <ul>
        <li><strong>Title Tag:</strong> "Fethiye Web Tasarım | Profesyonel Web Sitesi | WebCraft"</li>
        <li><strong>Meta Description:</strong> "Fethiye'de profesyonel web tasarım hizmeti..."</li>
        <li><strong>H1 Başlık:</strong> "Fethiye Web Tasarım Hizmetleri"</li>
        <li><strong>H2/H3 Alt Başlıklar:</strong> "Fethiye'de Web Tasarım Neden Önemli?"</li>
        <li><strong>İçerik:</strong> Doğal şekilde yerel anahtar kelimeler kullanın</li>
        <li><strong>Alt Text:</strong> Görsellerde yerel anahtar kelimeler</li>
        <li><strong>URL:</strong> /fethiye-web-tasarim-hizmetleri</li>
      </ul>
      
      <h2>5. Yerel Backlink Stratejisi</h2>
      
      <p>Yerel backlink'ler, aynı coğrafi bölgedeki web sitelerinden aldığınız bağlantılardır. Yerel backlink'ler, yerel sıralamada güçlü bir faktördür.</p>
      
      <h3>Yerel Backlink Kaynakları</h3>
      
      <ul>
        <li><strong>Yerel haber siteleri:</strong> Yerel gazeteler ve haber portallarından haberler</li>
        <li><strong>Ticaret odası:</strong> Fethiye Ticaret Odası, Muğla Sanayi Odası web siteleri</li>
        <li><strong>Yerel bloglar:</strong> Yerel influencer ve blog yazarları</li>
        <li><strong>Sponsorluklar:</strong> Yerel etkinliklere sponsor olun</li>
        <li><strong>İş birlikleri:</strong> Yerel işletmelerle partnership</li>
        <li><strong>Belediye web siteleri:</strong> Belediye etkinliklerine katılım</li>
        <li><strong>Yerel dernekler:</strong> Sektörel dernekler ve birlikler</li>
        <li><strong>Yerel dizinler:</strong> Fethiye.bel.tr gibi yerel dizinler</li>
      </ul>
      
      <h3>Yerel Backlink Oluşturma Taktikleri</h3>
      
      <ul>
        <li><strong>Yerel içerik oluşturun:</strong> "Fethiye'de En İyi Kahve Dükkanları" gibi içerikler</li>
        <li><strong>Yerel etkinliklere katılın:</strong> Sponsorluk ve katılım backlink sağlar</li>
        <li><strong>Basın bültenleri:</strong> Yerel haberlere konu olun</li>
        <li><strong>Guest posting:</strong> Yerel bloglarda misafir yazarlık</li>
        <li><strong>Yerel kaynak sayfaları:</strong> "Resources" sayfalarında yer alın</li>
        <li><strong>Broken link building:</strong> Yerel sitelerdeki kırık linkleri düzeltin</li>
      </ul>
      
      <h2>6. Yerel İçerik Stratejisi</h2>
      
      <p>Yerel içerik, hedef coğrafi bölgeye özel oluşturulmuş içeriklerdir. Yerel içerik, hem kullanıcılar hem de Google için değerlidir.</p>
      
      <h3>Yerel İçerik Fikirleri</h3>
      
      <ul>
        <li><strong>Şehir rehberleri:</strong> "Fethiye'de Gezilecek Yerler Rehberi"</li>
        <li><strong>Yerel haberler:</strong> Şehirdeki güncel haberler ve gelişmeler</li>
        <li><strong>Vaka çalışmaları:</strong> Yerel müşterilerinizle başarı hikayeleri</li>
        <li><strong>Yerel etkinlikler:</strong> "Fethiye'de Bu Hafta Neler Var?"</li>
        <li><strong>Yerel SEO rehberleri:</strong> "Fethiye İşletmeleri için SEO Rehberi"</li>
        <li><strong>Sektörel yerel içerikler:</strong> "Fethiye Turizm Sektörü Analizi"</li>
        <li><strong>Karşılaştırma içerikleri:</strong> "Fethiye vs Bodrum: Tatil Karşılaştırması"</li>
      </ul>
      
      <p>Örneğin, <a href="/fethiye-web-tasarim-hizmetleri" class="text-[#f84525] hover:underline font-semibold">Fethiye web tasarım hizmetleri sayfamızda</a> Fethiye'ye özel içerik ve hizmetler sunuyoruz.</p>
      
      <h2>7. Google Haritalar Optimizasyonu</h2>
      
      <p>Google Haritalar, yerel aramalarda görünmenin en etkili yoludur. Map pack (harita paketi) üç işletmeyi gösterir ve bu alana girmek organik trafiği katlanarak artırır.</p>
      
      <h3>Map Pack'e Girme Stratejileri</h3>
      
      <ul>
        <li><strong>GMB profilini tam doldurun:</strong> Tüm bilgileri eksiksiz doldurun</li>
        <li><strong>Müşteri yorumları toplayın:</strong> Yüksek puan ve yorum sayısı</li>
        <li><strong>NAP tutarlılığı:</strong> Tüm platformlarda tutarlı NAP</li>
        <li><strong>Yakınlık faktörü:</strong> Arayan kişinin konumuna yakınlık</li>
        <li><strong>Kategori optimizasyonu:</strong> Doğru kategorileri seçin</li>
        <li><strong>Düzenli gönderi paylaşın:</strong> GMB gönderileri ile aktif olun</li>
        <li><strong>Fotoğraf ekleyin:</strong> Düzenli fotoğraf güncellemeleri</li>
      </ul>
      
      <h2>8. Mobil Optimizasyon ve "Near Me" Aramaları</h2>
      
      <p>"Near me" aramalarının %80'i mobil cihazlardan yapılıyor. Mobil optimizasyon, yerel SEO için kritiktir.</p>
      
      <h3>Mobil Yerel SEO Optimizasyonu</h3>
      
      <ul>
        <li><strong>Responsive tasarım:</strong> Mobil uyumlu web sitesi</li>
        <li><strong>Hızlı yükleme:</strong> 3 saniye altında yükleme</li>
        <li><strong>Click-to-call buton:</strong> Tek tıkla arama özelliği</li>
        <li><strong>Kolay navigasyon:</strong> Mobilde kolay menü</li>
        <li><strong>Konum izni:</strong> Kullanıcının konumunu tespit etme</li>
        <li><strong>Harita entegrasyonu:</strong> Google Maps entegrasyonu</li>
        <li><strong>Mobil friendly forms:</strong> Kolay doldurulabilir formlar</li>
      </ul>
      
      <h2>9. Yerel Schema Markup</h2>
      
      <p>Yerel işletmeler için özel schema markup türleri:</p>
      
      <h3>LocalBusiness Schema</h3>
      
      <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WebCraft Web Tasarım Ajansı",
  "image": "https://www.webcraft.tr/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Babataşı Mahallesi, 778 Sokak No: 32/A",
    "addressLocality": "Fethiye",
    "addressRegion": "Muğla",
    "postalCode": "48300",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.6213",
    "longitude": "29.1164"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "telephone": "+905079441715",
  "priceRange": "$$"
}
&lt;/script&gt;</code></pre>
      
      <h2>10. Yerel SEO Performans Takibi</h2>
      
      <p>Yerel SEO çalışmalarınızın sonuçlarını düzenli olarak takip edin:</p>
      
      <h3>Takip Edilecek Metrikler</h3>
      
      <ul>
        <li><strong>Google My Business insights:</strong> Profil görüntülenmeleri, tıklamalar, aramalar</li>
        <li><strong>Local pack sıralaması:</strong> Harita paketinde sıralamanız</li>
        <li><strong>Organik arama trafiği:</strong> Yerel anahtar kelimelerden trafik</li>
        <li><strong>Yönlendirme istekleri:</strong> Kaç kişi yol tarifi aldı</li>
        <li><strong>Telefon aramaları:</strong> GMB'den gelen aramalar</li>
        <li><strong>Web sitesi ziyaretleri:</strong> GMB'den web sitenize tıklamalar</li>
        <li><strong>Yorum sayısı ve puanı:</strong> Toplam yorum ve ortalama puan</li>
        <li><strong>Citation sayısı:</strong> NAP alıntılarının sayısı</li>
      </ul>
      
      <h3>Yerel SEO Araçları</h3>
      
      <ul>
        <li><strong>Google My Business:</strong> Ücretsiz, en önemli araç</li>
        <li><strong>Google Search Console:</strong> Organik performans takibi</li>
        <li><strong>Moz Local:</strong> Citation yönetimi</li>
        <li><strong>BrightLocal:</strong> Yerel SEO takip ve raporlama</li>
        <li><strong>Whitespark:</strong> Citation building aracı</li>
        <li><strong>Yext:</strong> Çoklu platform yönetimi</li>
      </ul>
      
      <h2>Sonuç</h2>
      
      <p>Yerel SEO, özellikle küçük ve orta ölçekli işletmeler için en etkili dijital pazarlama stratejilerinden biridir. Google My Business optimizasyonundan NAP tutarlılığına, müşteri yorumlarından yerel içerik stratejisine kadar bu rehberdeki tüm adımları uygulayarak, Google Haritalar'da ve yerel aramalarda üst sıralarda yer alabilirsiniz.</p>
      
      <p><a href="/mugla-web-tasarim-seo-hizmetleri" class="text-[#f84525] hover:underline font-semibold">Muğla web tasarım ve SEO hizmetlerimiz</a> ile yerel işletmelerin dijital varlıklarını güçlendiriyoruz. Ayrıca, <a href="/hizmetler/dijital-pazarlama" class="text-[#f84525] hover:underline font-semibold">dijital pazarlama hizmetlerimizde</a> yerel SEO stratejilerini profesyonel olarak uyguluyoruz.</p>
      
      <p>Yerel SEO sürekli güncellenen bir alan olduğu için düzenli olarak GMB profilinizi güncellemeli, müşteri yorumlarına yanıt vermeli ve yerel içerik üretmeye devam etmelisiniz. Başarılar dileriz!</p>
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
                            href="#yerel-seo-nedir"
                            className="hover:text-red-600 transition-colors"
                          >
                            Yerel SEO Nedir?
                          </a>
                        </li>
                        <li>
                          <a
                            href="#google-my-business"
                            className="hover:text-red-600 transition-colors"
                          >
                            Google My Business
                          </a>
                        </li>
                        <li>
                          <a
                            href="#nap-tutarliligi"
                            className="hover:text-red-600 transition-colors"
                          >
                            NAP Tutarlılığı
                          </a>
                        </li>
                        <li>
                          <a
                            href="#musteri-yorumlari"
                            className="hover:text-red-600 transition-colors"
                          >
                            Müşteri Yorumları
                          </a>
                        </li>
                        <li>
                          <a
                            href="#yerel-anahtar-kelimeler"
                            className="hover:text-red-600 transition-colors"
                          >
                            Yerel Anahtar Kelimeler
                          </a>
                        </li>
                        <li>
                          <a
                            href="#yerel-backlink"
                            className="hover:text-red-600 transition-colors"
                          >
                            Yerel Backlink
                          </a>
                        </li>
                        <li>
                          <a
                            href="#google-haritalar"
                            className="hover:text-red-600 transition-colors"
                          >
                            Google Haritalar
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-2 text-black">
                        Yerel SEO Hizmetimiz
                      </h3>
                      <p className="text-sm text-black/70 mb-4">
                        Yerel SEO hizmetimiz ile Google Haritalar&apos;da üst
                        sıralara çıkın.
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
            currentSlug="yerel-seo-stratejileri"
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

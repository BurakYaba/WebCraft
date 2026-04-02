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
    "Web Sitesi Güvenliği Rehberi: SSL, HTTPS, Güvenlik Duvarı ve Daha Fazlası | WebCraft",
  description:
    "Web sitesi güvenliği kapsamlı rehberi. SSL kurulumu, WAF, güvenlik başlıkları, yedekleme ve KVKK uyumu. Sitenizi siber saldırılara karşı koruyun.",
  keywords:
    "web sitesi güvenliği, ssl sertifikası kurulumu, https yönlendirme, web uygulama güvenlik duvarı, ddos koruması, kvkk uyumu, güvenlik başlıkları csp hsts",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: { canonical: "/blog/web-sitesi-guvenligi" },
  openGraph: {
    title:
      "Web Sitesi Güvenliği Rehberi: SSL, HTTPS, Güvenlik Duvarı ve Daha Fazlası",
    description:
      "SSL kurulumu, WAF, güvenlik başlıkları ve KVKK uyumu ile sitenizi koruyun.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2024-11-25T09:00:00Z",
    modifiedTime: "2026-04-02T09:00:00Z",
    authors: ["WebCraft Güvenlik Uzmanı"],
  },
};

export default function WebSitesiGuvenligi() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Web Sitesi Güvenliği: SSL, HTTPS ve Güvenlik Önlemleri",
      url: "/blog/web-sitesi-guvenligi",
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
        name: "Web Sitesi Güvenliği",
        item: "https://www.webcraft.tr/blog/web-sitesi-guvenligi",
      },
    ],
  };
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Web Sitesi Güvenliği Rehberi: SSL, HTTPS, Güvenlik Duvarı ve Daha Fazlası",
    description:
      "SSL kurulumu, WAF, güvenlik başlıkları ve KVKK uyumu ile sitenizi koruyun.",
    image: "https://www.webcraft.tr/bento/web-tasarım.webp",
    author: { "@type": "Person", name: "WebCraft Güvenlik Uzmanı" },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2024-11-25T09:00:00Z",
    dateModified: "2026-04-02T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/web-sitesi-guvenligi",
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
                  Güvenlik
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Sitesi Güvenliği Rehberi: SSL, HTTPS ve Kapsamlı Koruma
                Önlemleri
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <span>Güncellendi: 2 Nisan 2026</span>
                <span>•</span>
                <span>15 dk okuma</span>
                <span>•</span>
                <span>WebCraft Güvenlik Uzmanı</span>
              </div>
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bento/web-tasarım.webp"
                  alt="Web Sitesi Güvenliği"
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
                  2025 yılında dünya genelinde her 39 saniyede bir siber saldırı
                  gerçekleşiyor. Küçük işletmelerin hedef alınma oranı tüm
                  saldırıların %43&apos;ünü oluşturuyor. Web sitesi güvenliği
                  artık büyük şirketlerin sorunu değil; bir iletişim formu
                  barındıran her web sitesi potansiyel hedeftir. Bu rehberde,
                  teknik detayları atlayan değil, adım adım uygulayabileceğiniz
                  somut önlemleri ele aldık.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Profesyonel{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    web tasarım
                  </Link>{" "}
                  hizmetimizde güvenlik, proje başından itibaren planlanır.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    İçindekiler
                  </h2>
                  <ol className="space-y-2 text-red-600">
                    <li>1. SSL Sertifikası ve HTTPS Yönlendirmesi</li>
                    <li>2. Web Uygulama Güvenlik Duvarı (WAF)</li>
                    <li>3. HTTP Güvenlik Başlıkları</li>
                    <li>4. Güçlü Kimlik Doğrulama</li>
                    <li>5. Düzenli Yedekleme Stratejisi</li>
                    <li>6. CMS ve Eklenti Güvenliği</li>
                    <li>7. DDoS Saldırılarına Karşı Koruma</li>
                    <li>8. Güvenlik Denetimi Kontrol Listesi</li>
                    <li>Sık Sorulan Sorular</li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  1. SSL Sertifikası ve HTTPS Yönlendirmesi
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SSL/TLS, tarayıcı ile sunucu arasındaki trafiği şifreleyerek
                  şifre, kredi kartı numarası gibi hassas verilerin üçüncü
                  şahıslar tarafından ele geçirilmesini önler. HTTPS olmayan
                  siteler Chrome&apos;da &quot;Güvenli Değil&quot; uyarısıyla
                  karşılar ve Google sıralamalarında negatif etkilenir.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  SSL Türleri
                </h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-200 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Tür
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Doğrulama
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Kimler İçin?
                        </th>
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                          Maliyet
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          DV (Domain Validated)
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Yalnızca domain
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Blog, portfolio
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Ücretsiz (Let&apos;s Encrypt)
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          OV (Organization Validated)
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Domain + Şirket
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Kurumsal siteler
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Yıllık ~100-500 TL
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-3 font-medium">
                          EV (Extended Validation)
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Kapsamlı kurum doğrulama
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Bankalar, e-ticaret
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          Yıllık ~500-2000 TL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  HTTP → HTTPS Yönlendirmesi
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  SSL kurulumu sonrasında tüm HTTP trafiğinin HTTPS&apos;e
                  yönlendirilmesi zorunludur. Next.js projelerinde{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    next.config.ts
                  </code>
                  &apos;te headers veya Vercel&apos;in otomatik HTTPS
                  yönlendirmesiyle sağlanır. Apache için:
                </p>
                <div className="bg-gray-900 text-green-400 rounded-xl p-4 mb-6 overflow-x-auto text-sm font-mono">
                  <pre>{`RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}</pre>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  2. Web Uygulama Güvenlik Duvarı (WAF)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  WAF (Web Application Firewall), SQL injection, XSS ve diğer
                  OWASP Top 10 saldırılarını HTTP katmanında engeller. Klasik
                  güvenlik duvarından farkı, uygulama trafiğini anlıyor
                  olmasıdır.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Önerilen WAF Çözümleri
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <div>
                      <strong className="text-gray-900">
                        Cloudflare (Ücretsiz Başlangıç):
                      </strong>
                      <p className="text-gray-700 mt-1">
                        DNS&apos;inizi Cloudflare&apos;e yönetin. Ücretsiz plan
                        bile DDoS koruma, HTTPS ve temel WAF kuralları sunuyor.
                        Pro plan ($20/ay) daha gelişmiş WAF kuralları içeriyor.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <div>
                      <strong className="text-gray-900">Sucuri:</strong>
                      <p className="text-gray-700 mt-1">
                        WordPress ve diğer CMS&apos;ler için özelleşmiş WAF ve
                        malware tarama. Saldırı sonrası temizleme hizmeti de
                        sunuyor.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <div>
                      <strong className="text-gray-900">
                        AWS WAF / Azure Application Gateway:
                      </strong>
                      <p className="text-gray-700 mt-1">
                        Cloud altyapısı kullanan kurumsal projeler için managed
                        WAF çözümleri. IP blocklist, rate limiting ve bot
                        yönetimi içeriyor.
                      </p>
                    </div>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  3. HTTP Güvenlik Başlıkları
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Güvenlik başlıkları, tarayıcıya sitenizin nasıl davranması
                  gerektiğini söyleyen HTTP yanıt başlıklarıdır. Ücretsiz,
                  etkili ve çoğu zaman göz ardı edilen bir güvenlik katmanıdır.
                </p>
                <div className="bg-gray-900 text-green-400 rounded-xl p-4 mb-6 overflow-x-auto text-sm font-mono">
                  <pre>{`# next.config.ts headers yapılandırması
{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
},
{
  key: 'X-Frame-Options',
  value: 'DENY'
},
{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
},
{
  key: 'Referrer-Policy',
  value: 'strict-origin-when-cross-origin'
},
{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=()'
}`}</pre>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>HSTS (Strict-Transport-Security):</strong>{" "}
                      Tarayıcıya &quot;her zaman HTTPS kullan&quot; talimatı
                      verir. Bir kez ayarlandı mı, HTTPS olmadan bağlantı kabul
                      edilmez.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>X-Frame-Options: DENY:</strong> Sitenizin başka
                      bir sitede iframe içinde gösterilmesini engeller.
                      Clickjacking saldırılarına karşı koruma.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Content-Security-Policy (CSP):</strong> Hangi
                      kaynaklardan script, stil ve medya yüklenebileceğini
                      tanımlar. XSS saldırılarını büyük ölçüde önler. Dikkatli
                      yapılandırma gerektirir; yanlış CSP sitenizi bozabilir.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Mevcut başlıklarınızı test etmek için{" "}
                  <strong>securityheaders.com</strong>&apos;u kullanın.
                  Ücretsiz, 10 saniyede sonuç veriyor.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  4. Güçlü Kimlik Doğrulama
                </h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>İki faktörlü kimlik doğrulama (2FA):</strong>{" "}
                      Admin paneline erişimde Google Authenticator veya TOTP
                      uygulaması ekleyin. Şifre çalınsa bile hesaba girilemez.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Giriş denemesi sınırlama:</strong> 5 başarısız
                      denemeden sonra IP bloklama veya CAPTCHA. Brute force
                      saldırılarını engeller.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Admin URL değiştirme:</strong> WordPress&apos;te{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        /wp-admin
                      </code>
                      &apos;ı varsayılan bırakmayın. Bot saldırılarının
                      %90&apos;ı bu URL&apos;yi hedef alıyor.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Parola politikası:</strong> Minimum 12 karakter,
                      büyük/küçük harf, rakam ve özel karakter. Ekip üyeleri
                      için parola yöneticisi zorunlu kılın.
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  5. Düzenli Yedekleme Stratejisi
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Yedekleme, siber saldırı senaryosunda son savunma hattıdır.
                  Fidye yazılımı (ransomware) saldırısında sitenizi sıfırdan
                  kurmak yerine temiz yedeği geri yükleyebilirsiniz.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3-2-1 Yedekleme Kuralı
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>3</strong> kopya yedek oluşturun
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>2</strong> farklı medya/lokasyonda saklayın
                      (sunucu + bulut)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>1</strong> kopya fiziksel olarak farklı bir
                      lokasyonda (offline)
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Vercel, Netlify gibi modern platformlar otomatik deployment
                  snapshot&apos;ları tutar. Veritabanı olan projelerde ek olarak
                  AWS S3, Backblaze veya Google Cloud Storage&apos;a günlük
                  otomatik dump gönderin.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  6. CMS ve Eklenti Güvenliği
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  WordPress sitelerin hacklenmesinin %56&apos;sı güncel
                  tutulmayan eklentilerden kaynaklanıyor. Güvenlik açıkları,
                  popüler eklentilerin eski sürümlerinde kamuya açıklanıyor ve
                  robotlar bu sürümleri tespit edip otomatik saldırı yapıyor.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Otomatik güncelleme aktif edin:</strong> Minor
                      güncellemeleri otomatik, major güncellemeleri test
                      ortamında uygulayın.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Kullanılmayan eklentileri kaldırın:</strong>{" "}
                      Deaktif eklentiler bile güvenlik açığı taşıyabilir.
                      Yalnızca gerçekten kullandıklarınızı tutun.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Eklenti güvenilirliğini kontrol edin:</strong> 5
                      yıldır güncellenmemiş, az indirilen eklentilerden kaçının.
                      WPScan veya Wordfence ile tarama yapın.
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  7. DDoS Saldırılarına Karşı Koruma
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  DDoS (Distributed Denial of Service), sunucunuza normalin çok
                  üzerinde istek göndererek sitenizi çevrimdışı bırakan saldırı
                  türüdür. E-ticaret siteleri en sık hedeflenenler arasında.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Cloudflare Under Attack Mode:</strong> Aniden
                      yoğun trafik geldiğinde aktifleştirin. Her ziyaretçiye
                      CAPTCHA sorar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Rate limiting:</strong> Belirli bir IP&apos;den
                      dakikada maksimum istek sayısı tanımlayın. API
                      endpoint&apos;leri için zorunlu.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>CDN kullanımı:</strong> İçeriği coğrafi olarak
                      dağıtılmış sunuculara yüklemek hem hızı artırır hem de
                      saldırı trafiğini dağıtır.
                    </span>
                  </li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8 rounded-r-lg">
                  <h4 className="text-red-900 font-bold text-xl mb-3">
                    8. Güvenlik Denetimi Kontrol Listesi
                  </h4>
                  <ul className="space-y-2 text-red-800">
                    <li>
                      ✓ SSL sertifikası kurulu ve HTTP → HTTPS yönlendirme aktif
                    </li>
                    <li>
                      ✓ Güvenlik başlıkları (HSTS, X-Frame-Options, CSP)
                      yapılandırıldı
                    </li>
                    <li>✓ WAF (Cloudflare veya benzeri) aktif</li>
                    <li>✓ Admin panelinde 2FA etkin</li>
                    <li>✓ Giriş denemesi sınırlaması var</li>
                    <li>✓ Yedekleme otomatik ve 3-2-1 kuralına uygun</li>
                    <li>✓ CMS ve eklentiler güncel</li>
                    <li>✓ Kullanılmayan eklentiler kaldırıldı</li>
                    <li>✓ Rate limiting API endpoint&apos;lerinde aktif</li>
                    <li>✓ securityheaders.com&apos;dan A+ puan alındı</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sık Sorulan Sorular
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Let&apos;s Encrypt ücretsiz SSL yeterli mi?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Blog, portfolio ve kurumsal tanıtım siteleri için evet,
                      tamamen yeterli. Kişisel veya finansal veri işleyen
                      e-ticaret siteleri için OV veya EV sertifikası tercih
                      edilmeli. Let&apos;s Encrypt 90 günde bir yenilenir;
                      Certbot veya hosting paneli bunu otomatikleştirebilir.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Web sitem küçük bir işletme — ben neden hedef olayım?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Büyük şirketlerin güvenliği iyi olduğu için saldırganlar
                      küçük siteleri hedef alıyor. Küçük siteler spam göndermek,
                      kripto para madenciliği yapmak veya başka sitelere
                      saldırmak için &quot;aracı&quot; olarak kullanılıyor.
                      Siteniz hacklense bile müşteri fırsatı kaybediyorsunuz.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      KVKK açısından web sitesi güvenliği nasıl sağlanır?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      KVKK, kişisel verilerin korunması için teknik tedbirler
                      alınmasını zorunlu kılıyor. SSL, güvenli iletişim
                      zorunluluğunu karşılar. Form güvenliği, veri minimizasyonu
                      (yalnızca gerekli veri toplama) ve veri ihlali bildirim
                      prosedürü KVKK uyumunun temel bileşenleridir.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Siteniz hacklendiyse ilk yapılması gerekenler neler?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      1) Temiz yedeği belirleyin ve sitenin yedeğini alın. 2)
                      Hosting paneline giriş şifresini değiştirin. 3) Zararlı
                      dosyaları tespit etmek için Sucuri SiteCheck&apos;i
                      çalıştırın. 4) Temiz yedeği geri yükleyin. 5) Güvenlik
                      açığını kapatın (güncel olmayan eklenti, zayıf şifre vb.).
                      6) Google Search Console&apos;dan &quot;Güvenlik
                      Sorunları&quot; raporunu inceleyin ve &quot;İnceleme
                      İste&quot;yi gönderin.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Sonuç
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Web sitesi güvenliği tek seferlik bir proje değil, süregelen
                  bir süreçtir. SSL kurulumu, güvenlik başlıkları ve WAF ile
                  temel katmanı oluşturduktan sonra düzenli güncelleme,
                  yedekleme ve güvenlik denetimi rutin haline getirilmelidir.
                  Profesyonel{" "}
                  <Link
                    href="/hizmetler/web-tasarim"
                    className="text-red-600 hover:text-red-700 font-semibold underline"
                  >
                    web tasarım
                  </Link>{" "}
                  hizmetimizde tüm bu önlemleri baştan planlayarak güvenli web
                  siteleri inşa ediyoruz. WebCraft ile iletişime geçin.
                </p>
              </div>
            </div>
          </section>
          <RelatedBlogPosts
            currentSlug="web-sitesi-guvenligi"
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

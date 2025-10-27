import React from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Çerez Politikası | WebCraft - Cookie Kullanımı ve Gizlilik",
  description:
    "WebCraft çerez politikası. Web sitemizde kullanılan çerezler, amaçları ve nasıl kontrol edileceği hakkında detaylı bilgi. GDPR uyumlu çerez yönetimi.",
  keywords:
    "çerez politikası, cookie policy, webcraft çerez, çerez kullanımı, gdpr çerez",
  openGraph: {
    title: "Çerez Politikası | WebCraft",
    description: "WebCraft çerez politikası ve cookie kullanım bilgileri.",
    type: "website",
    locale: "tr_TR",
  },
};

// Cookie Policy Schema
const cookiePolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Çerez Politikası",
  description: "WebCraft çerez politikası ve cookie kullanım bilgileri",
  url: "https://www.webcraft.tr/cerez-politikasi",
  publisher: {
    "@type": "Organization",
    name: "WebCraft",
    url: "https://www.webcraft.tr",
  },
  mainEntity: {
    "@type": "Article",
    headline: "WebCraft Çerez Politikası",
    description: "Çerez kullanımı ve yönetimi hakkında bilgi",
    author: {
      "@type": "Organization",
      name: "WebCraft",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-12-20",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicySchema) }}
      />
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-[#181716] via-[#1a1918] to-[#1c1b1a]">
        {/* Page Header */}
        <section className="relative pt-[180px] pb-[120px] md:pt-[116px] md:pb-[90px] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#f84525]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#f84525] to-orange-500 rounded-2xl mb-8 shadow-2xl">
                <span className="text-4xl">🍪</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Çerez Politikası
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Web sitemizde kullanılan çerezler hakkında kapsamlı bilgi.
                Çerezlerin ne olduğu, nasıl kullanıldığı ve nasıl kontrol
                edileceği hakkında detaylı açıklama.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            {/* Update Info Card */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-12 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-green-400 font-bold text-xl mb-2">
                    Güncelleme Tarihi
                  </h3>
                  <p className="text-green-300">
                    Bu çerez politikası son olarak 20 Aralık 2024 tarihinde
                    güncellenmiştir.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Section 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🍪</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    1. Çerez Nedir?
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Çerezler (cookies), web sitemizi ziyaret ettiğinizde
                  tarayıcınıza gönderilen küçük metin dosyalarıdır. Bu dosyalar,
                  web sitesinin daha iyi çalışmasını sağlar ve kullanıcı
                  deneyimini iyileştirir.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    2. Çerezlerin Kullanım Amacı
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  WebCraft web sitesinde çerezler aşağıdaki amaçlarla
                  kullanılır:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <strong className="text-green-400">
                        Gerekli Çerezler:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Web sitesinin temel işlevlerini yerine getirmek için
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <strong className="text-blue-400">
                        Performans Çerezleri:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Site performansını analiz etmek ve iyileştirmek için
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <strong className="text-purple-400">
                        Fonksiyonel Çerezler:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Kullanıcı tercihlerini hatırlamak için
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <strong className="text-orange-400">
                        Analitik Çerezler:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Ziyaretçi davranışlarını anlamak için
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <strong className="text-red-400">
                        Pazarlama Çerezleri:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Hedefli reklamlar göstermek için
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    3. Kullandığımız Çerez Türleri
                  </h2>
                </div>

                {/* 3.1 Gerekli Çerezler */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-green-400">
                      3.1 Gerekli Çerezler
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Bu çerezler web sitesinin çalışması için zorunludur:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Session Çerezleri:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Oturum bilgilerini tutmak için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">
                        Güvenlik Çerezleri:
                      </strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Güvenlik doğrulaması için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Form Çerezleri:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        İletişim formlarının çalışması için
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3.2 Analitik Çerezler */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      3.2 Analitik Çerezler
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Site performansını analiz etmek için kullanılır:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Google Analytics:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Ziyaretçi istatistikleri için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Sayfa Görüntüleme:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Hangi sayfaların ziyaret edildiğini takip etmek için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">
                        Kullanıcı Davranışı:
                      </strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Site içi navigasyon analizi için
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3.3 Fonksiyonel Çerezler */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-purple-400">
                      3.3 Fonksiyonel Çerezler
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Kullanıcı deneyimini iyileştirmek için:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Dil Tercihi:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Seçilen dil ayarını hatırlamak için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Tema Tercihi:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Görsel tema seçimini hatırlamak için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">Form Verileri:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Form doldurma sürecini kolaylaştırmak için
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    4. Üçüncü Taraf Çerezler
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Web sitemizde aşağıdaki üçüncü taraf hizmetler
                  kullanılmaktadır:
                </p>

                {/* 4.1 Google Analytics */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      4.1 Google Analytics
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Google Analytics, web sitesi trafiğini analiz etmek için
                    kullanılır. Bu hizmet aşağıdaki çerezleri kullanır:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">_ga:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        2 yıl süreyle kullanıcıları ayırt etmek için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">_gid:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        24 saat süreyle kullanıcıları ayırt etmek için
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <strong className="text-white">_gat:</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        İstek oranını sınırlamak için
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4.2 Google Fonts */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-green-400">
                      4.2 Google Fonts
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Google Fonts, web sitesinde kullanılan yazı tiplerini
                    yüklemek için kullanılır. Bu hizmet kullanıcı tercihlerini
                    hatırlamak için çerezler kullanabilir.
                  </p>
                </div>
              </div>

              <h2>5. Çerezlerin Saklanma Süresi</h2>
              <p>Çerezlerin saklanma süreleri türlerine göre değişir:</p>
              <ul>
                <li>
                  <strong>Session Çerezleri:</strong> Tarayıcı kapatıldığında
                  silinir
                </li>
                <li>
                  <strong>Kalıcı Çerezler:</strong> Belirlenen süre boyunca
                  saklanır
                </li>
                <li>
                  <strong>Analitik Çerezler:</strong> 2 yıla kadar saklanabilir
                </li>
                <li>
                  <strong>Pazarlama Çerezleri:</strong> 1 yıla kadar
                  saklanabilir
                </li>
              </ul>

              <h2>6. Çerezleri Kontrol Etme</h2>
              <p>
                Çerezleri kontrol etmek için aşağıdaki yöntemleri
                kullanabilirsiniz:
              </p>

              <h3>6.1 Tarayıcı Ayarları</h3>
              <ul>
                <li>
                  <strong>Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik →
                  Çerezler
                </li>
                <li>
                  <strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik →
                  Çerezler
                </li>
                <li>
                  <strong>Safari:</strong> Tercihler → Gizlilik → Çerezler
                </li>
                <li>
                  <strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri
                </li>
              </ul>

              <h3>6.2 Çerez Yönetim Araçları</h3>
              <p>
                Web sitemizde çerez tercihlerinizi yönetmek için çerez
                banner&apos;ı kullanılmaktadır. Bu banner ile hangi çerez
                türlerini kabul ettiğinizi seçebilirsiniz.
              </p>

              <h2>7. GDPR ve KVKK Uyumluluğu</h2>
              <p>
                Çerez politikamız, Avrupa Birliği Genel Veri Koruma Yönetmeliği
                (GDPR) ve Türkiye Kişisel Verilerin Korunması Kanunu (KVKK)
                kapsamında uyumlu olarak hazırlanmıştır.
              </p>

              <h3>7.1 Açık Rıza</h3>
              <p>
                Analitik ve pazarlama çerezleri için açık rızanız alınmaktadır.
                Bu çerezler sadece onayınız sonrasında kullanılır.
              </p>

              <h3>7.2 Veri Sahibi Hakları</h3>
              <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul>
                <li>
                  <strong>Bilgi Alma:</strong> Hangi çerezlerin kullanıldığını
                  öğrenme
                </li>
                <li>
                  <strong>Erişim:</strong> Çerez verilerine erişim
                </li>
                <li>
                  <strong>Silme:</strong> Çerez verilerinin silinmesi
                </li>
                <li>
                  <strong>İtiraz:</strong> Çerez kullanımına itiraz etme
                </li>
              </ul>

              <h2>8. Çerez Güvenliği</h2>
              <p>Çerez güvenliği için aşağıdaki önlemler alınmaktadır:</p>
              <ul>
                <li>
                  <strong>HTTPS Kullanımı:</strong> Tüm çerezler güvenli
                  bağlantı üzerinden gönderilir
                </li>
                <li>
                  <strong>HttpOnly Bayrağı:</strong> Hassas çerezler JavaScript
                  erişiminden korunur
                </li>
                <li>
                  <strong>Secure Bayrağı:</strong> Çerezler sadece güvenli
                  bağlantılar üzerinden gönderilir
                </li>
                <li>
                  <strong>SameSite Politikası:</strong> Cross-site request
                  forgery saldırılarına karşı koruma
                </li>
              </ul>

              <h2>9. Çerez Politikası Güncellemeleri</h2>
              <p>
                Bu çerez politikası, gerekli görüldüğü takdirde güncellenebilir.
                Önemli değişiklikler olduğunda:
              </p>
              <ul>
                <li>Web sitemizde yayınlanacak</li>
                <li>E-posta ile bilgilendirme yapılacak</li>
                <li>
                  Çerez banner&apos;ında güncelleme bildirimi gösterilecek
                </li>
                <li>
                  Yeni rıza alınması gereken durumlarda bildirim yapılacak
                </li>
              </ul>

              <h2>10. İletişim ve Sorular</h2>
              <p>Çerez politikası hakkında sorularınız için:</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="mb-3">
                  <strong className="text-white">E-posta:</strong>
                  <span className="text-[#f84525] ml-2">kvkk@webcraft.tr</span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Telefon:</strong>
                  <span className="text-[#f84525] ml-2">+90-507-944-17-15</span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Adres:</strong>
                  <span className="text-[#f84525] ml-2">
                    Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye/Muğla
                  </span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Web Sitesi:</strong>
                  <span className="text-[#f84525] ml-2">www.webcraft.tr</span>
                </p>
              </div>

              <h2>11. Faydalı Linkler</h2>
              <p>Çerezler hakkında daha fazla bilgi için:</p>
              <ul>
                <li>
                  <a
                    href="/gizlilik-politikasi"
                    className="text-blue-600 hover:underline"
                  >
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a
                    href="/kullanim-sartlari"
                    className="text-blue-600 hover:underline"
                  >
                    Kullanım Şartları
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.allaboutcookies.org"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    All About Cookies (İngilizce)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youronlinechoices.com"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Your Online Choices (İngilizce)
                  </a>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                <h3 className="text-blue-800 font-semibold mb-2">
                  🍪 Çerez Kullanımı Hakkında
                </h3>
                <p className="text-blue-700">
                  Çerezler, web sitemizin daha iyi çalışmasını ve size daha iyi
                  bir kullanıcı deneyimi sunmasını sağlar. Çerez kullanımı
                  hakkında herhangi bir endişeniz varsa, lütfen bizimle
                  iletişime geçin.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <h3 className="text-green-800 font-semibold mb-2">
                  ✅ Şeffaflık Taahhüdümüz
                </h3>
                <p className="text-green-700">
                  WebCraft olarak, çerez kullanımı konusunda tam şeffaflık
                  sağlamayı taahhüt ediyoruz. Hangi çerezlerin kullanıldığı ve
                  ne amaçla kullanıldığı konusunda açık ve net bilgi veriyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

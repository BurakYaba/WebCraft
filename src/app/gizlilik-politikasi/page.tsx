import React from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
export const metadata: Metadata = {
  title: "Gizlilik Politikası | WebCraft",
  description:
    "WebCraft gizlilik politikası. Kişisel verilerinizin nasıl korunduğu, toplandığı ve kullanıldığı hakkında detaylı bilgi. KVKK uyumlu veri koruma.",
  keywords:
    "gizlilik politikası, veri koruma, KVKK, kişisel veri, webcraft gizlilik, veri güvenliği",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  openGraph: {
    title: "Gizlilik Politikası | WebCraft",
    description: "WebCraft gizlilik politikası ve veri koruma bilgileri.",
    type: "website",
    locale: "tr_TR",
  },
};

// Privacy Policy Schema
const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gizlilik Politikası",
  description: "WebCraft gizlilik politikası ve veri koruma bilgileri",
  url: "https://www.webcraft.tr/gizlilik-politikasi",
  publisher: {
    "@type": "Organization",
    name: "WebCraft",
    url: "https://www.webcraft.tr",
  },
  mainEntity: {
    "@type": "Article",
    headline: "WebCraft Gizlilik Politikası",
    description: "Kişisel verilerinizin korunması ve işlenmesi hakkında bilgi",
    author: {
      "@type": "Organization",
      name: "WebCraft",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-12-20",
  },
};

export default function PrivacyPolicyPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Gizlilik Politikası", url: "/gizlilik-politikasi" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <Breadcrumb items={breadcrumbItems} />

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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#f84525] to-blue-500 rounded-2xl mb-8 shadow-2xl">
                <span className="text-4xl">🔒</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Gizlilik Politikası
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Kişisel verilerinizin güvenliği bizim için çok önemli. Bu
                politika, verilerinizin nasıl korunduğu ve işlendiği hakkında
                bilgi verir.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            {/* Update Info Card */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold text-xl mb-2">
                    Güncelleme Tarihi
                  </h3>
                  <p className="text-blue-300">
                    Bu gizlilik politikası son olarak 20 Aralık 2024 tarihinde
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
                    <span className="text-2xl">📋</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    1. Genel Bilgiler
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  WebCraft Web Tasarım ve Dijital Pazarlama Ajansı olarak,
                  kişisel verilerinizin güvenliği ve gizliliği bizim için son
                  derece önemlidir. Bu gizlilik politikası, 6698 sayılı Kişisel
                  Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat kapsamında
                  verilerinizin nasıl toplandığını, kullanıldığını ve
                  korunduğunu açıklar.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    2. Veri Sorumlusu
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <strong className="text-blue-400">Şirket Adı:</strong>
                    </div>
                    <p className="text-gray-300">
                      WebCraft Web Tasarım ve Dijital Pazarlama Ajansı
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <strong className="text-green-400">Adres:</strong>
                    </div>
                    <p className="text-gray-300">
                      Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye - Muğla
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <strong className="text-purple-400">Telefon:</strong>
                    </div>
                    <p className="text-gray-300">+90-507-944-17-15</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <strong className="text-orange-400">E-posta:</strong>
                    </div>
                    <p className="text-gray-300">info@webcraft.tr</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <strong className="text-red-400">Web Sitesi:</strong>
                    </div>
                    <p className="text-gray-300">www.webcraft.tr</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    3. Toplanan Kişisel Veriler
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hizmetlerimizi sunarken aşağıdaki kişisel verileri
                  toplayabiliriz:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <strong className="text-blue-400">
                        Kimlik Bilgileri:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Ad, soyad, e-posta adresi, telefon numarası
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <strong className="text-green-400">
                        İletişim Bilgileri:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Adres, şehir, ülke bilgileri
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <strong className="text-purple-400">İş Bilgileri:</strong>
                    </div>
                    <p className="text-gray-300">
                      Şirket adı, pozisyon, sektör bilgileri
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <strong className="text-orange-400">
                        Teknik Veriler:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      IP adresi, tarayıcı bilgileri, çerez verileri
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <strong className="text-red-400">İçerik Verileri:</strong>
                    </div>
                    <p className="text-gray-300">
                      Web sitesi içerikleri, proje detayları
                    </p>
                  </div>
                </div>
              </div>

              <h2>4. Kişisel Verilerin Toplanma Yöntemi</h2>
              <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanır:</p>
              <ul>
                <li>
                  <strong>Doğrudan İletişim:</strong> E-posta, telefon, iletişim
                  formları
                </li>
                <li>
                  <strong>Web Sitesi:</strong> Çerezler, analitik araçları
                </li>
                <li>
                  <strong>Hizmet Süreci:</strong> Proje geliştirme ve yönetim
                  süreçleri
                </li>
                <li>
                  <strong>Üçüncü Taraflar:</strong> İş ortakları ve hizmet
                  sağlayıcıları
                </li>
              </ul>

              <h2>5. Kişisel Verilerin İşlenme Amaçları</h2>
              <p>Toplanan verileriniz aşağıdaki amaçlarla işlenir:</p>
              <ul>
                <li>
                  <strong>Hizmet Sunumu:</strong> Web tasarım, SEO ve dijital
                  pazarlama hizmetleri
                </li>
                <li>
                  <strong>İletişim:</strong> Müşteri hizmetleri ve proje takibi
                </li>
                <li>
                  <strong>Kalite İyileştirme:</strong> Hizmet kalitesinin
                  artırılması
                </li>
                <li>
                  <strong>Yasal Yükümlülükler:</strong> Mevzuat gereği tutulması
                  gereken kayıtlar
                </li>
                <li>
                  <strong>Güvenlik:</strong> Sistem güvenliği ve dolandırıcılık
                  önleme
                </li>
              </ul>

              <h2>6. Kişisel Verilerin Aktarılması</h2>
              <p>
                Kişisel verileriniz, yukarıda belirtilen amaçların
                gerçekleştirilmesi doğrultusunda aşağıdaki taraflarla
                paylaşılabilir:
              </p>
              <ul>
                <li>
                  <strong>Hizmet Sağlayıcıları:</strong> Hosting, domain,
                  analitik hizmetleri
                </li>
                <li>
                  <strong>İş Ortakları:</strong> Proje işbirlikleri ve ortak
                  hizmetler
                </li>
                <li>
                  <strong>Yasal Otoriteler:</strong> Yasal yükümlülük gereği
                </li>
                <li>
                  <strong>Müşteri Onayı:</strong> Açık rıza verilen durumlar
                </li>
              </ul>

              <h2>7. Kişisel Verilerin Saklanma Süresi</h2>
              <p>
                Kişisel verileriniz, işlenme amaçlarına uygun olarak aşağıdaki
                süreler boyunca saklanır:
              </p>
              <ul>
                <li>
                  <strong>Müşteri Verileri:</strong> Hizmet süresi + 10 yıl
                </li>
                <li>
                  <strong>İletişim Verileri:</strong> 3 yıl
                </li>
                <li>
                  <strong>Teknik Veriler:</strong> 2 yıl
                </li>
                <li>
                  <strong>Yasal Kayıtlar:</strong> Mevzuat gereği belirlenen
                  süreler
                </li>
              </ul>

              <h2>8. Çerez (Cookie) Politikası</h2>
              <p>
                Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler
                kullanılır. Çerezler hakkında detaylı bilgi için{" "}
                <a
                  href="/cerez-politikasi"
                  className="text-blue-600 hover:underline"
                >
                  Çerez Politikası
                </a>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>

              <h2>9. KVKK Kapsamındaki Haklarınız</h2>
              <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul>
                <li>
                  <strong>Bilgi Alma Hakkı:</strong> Verilerinizin işlenip
                  işlenmediğini öğrenme
                </li>
                <li>
                  <strong>Erişim Hakkı:</strong> Verilerinize erişim ve kopya
                  alma
                </li>
                <li>
                  <strong>Düzeltme Hakkı:</strong> Yanlış verilerin düzeltilmesi
                </li>
                <li>
                  <strong>Silme Hakkı:</strong> Verilerinizin silinmesi
                </li>
                <li>
                  <strong>İşlemeyi Sınırlama:</strong> Veri işlemenin
                  sınırlandırılması
                </li>
                <li>
                  <strong>Veri Taşınabilirliği:</strong> Verilerinizin başka
                  sisteme aktarılması
                </li>
                <li>
                  <strong>İtiraz Hakkı:</strong> Otomatik işleme karşı itiraz
                </li>
              </ul>

              <h2>10. Güvenlik Önlemleri</h2>
              <p>
                Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari
                önlemler alınır:
              </p>
              <ul>
                <li>
                  <strong>Teknik Önlemler:</strong> SSL şifreleme, güvenlik
                  duvarları
                </li>
                <li>
                  <strong>Fiziksel Önlemler:</strong> Ofis güvenliği, erişim
                  kontrolü
                </li>
                <li>
                  <strong>İdari Önlemler:</strong> Çalışan eğitimi, gizlilik
                  sözleşmeleri
                </li>
                <li>
                  <strong>Düzenli Denetimler:</strong> Güvenlik testleri ve risk
                  değerlendirmeleri
                </li>
              </ul>

              <h2>11. İletişim ve Başvuru</h2>
              <p>
                Gizlilik politikamız hakkında sorularınız veya KVKK kapsamındaki
                haklarınızı kullanmak istiyorsanız aşağıdaki kanallardan bizimle
                iletişime geçebilirsiniz:
              </p>
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
                    Babataşı Mahallesi, 778 Sokak No: 32/A, Türkiye
                  </span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Başvuru Formu:</strong>{" "}
                  <a
                    href="/iletisim"
                    className="text-[#f84525] hover:text-white hover:underline transition-colors duration-300"
                  >
                    İletişim Sayfası
                  </a>
                </p>
              </div>

              <h2>12. Değişiklikler</h2>
              <p>
                Bu gizlilik politikası, gerekli görüldüğü takdirde
                güncellenebilir. Önemli değişiklikler olduğunda, web sitemizde
                yayınlanacak ve gerekli durumlarda e-posta ile bilgilendirme
                yapılacaktır.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
                <h3 className="text-green-800 font-semibold mb-2">
                  🔒 Veri Güvenliği Taahhüdümüz
                </h3>
                <p className="text-green-700">
                  WebCraft olarak, kişisel verilerinizin güvenliği ve gizliliği
                  konusunda en yüksek standartları uyguluyoruz. KVKK ve
                  uluslararası veri koruma standartlarına tam uyum sağlayarak
                  hizmet veriyoruz.
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

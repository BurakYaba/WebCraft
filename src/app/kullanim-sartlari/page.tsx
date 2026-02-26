import React from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Kullanım Şartları | WebCraft",
  description:
    "WebCraft kullanım şartları. Web tasarım, SEO ve dijital pazarlama hizmetlerimizin kullanım koşulları, haklar ve yükümlülükler hakkında detaylı bilgi.",
  keywords:
    "kullanım şartları, hizmet koşulları, webcraft şartlar, yasal koşullar, hizmet anlaşması",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/kullanim-sartlari",
  },
  openGraph: {
    title: "Kullanım Şartları | WebCraft",
    description: "WebCraft hizmet kullanım şartları ve yasal koşullar.",
    type: "website",
    locale: "tr_TR",
  },
};

// Terms of Use Schema
const termsOfUseSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kullanım Şartları",
  description: "WebCraft hizmet kullanım şartları ve yasal koşullar",
  url: "https://www.webcraft.tr/kullanim-sartlari",
  publisher: {
    "@type": "Organization",
    name: "WebCraft",
    url: "https://www.webcraft.tr",
  },
  mainEntity: {
    "@type": "Article",
    headline: "WebCraft Kullanım Şartları",
    description: "Hizmet kullanım koşulları ve yasal şartlar",
    author: {
      "@type": "Organization",
      name: "WebCraft",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-12-20",
  },
};

export default function TermsOfUsePage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Kullanım Şartları", url: "/kullanim-sartlari" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsOfUseSchema) }}
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#f84525] to-orange-500 rounded-2xl mb-8 shadow-2xl">
                <span className="text-4xl">📋</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Kullanım Şartları
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                WebCraft hizmetlerini kullanırken uymanız gereken koşullar ve
                yasal şartlar. Hizmetlerimizden yararlanmadan önce bu şartları
                okumanız önemlidir.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            {/* Update Info Card */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-12 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold text-xl mb-2">
                    Güncelleme Tarihi
                  </h3>
                  <p className="text-orange-300">
                    Bu kullanım şartları son olarak 20 Aralık 2024 tarihinde
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
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    1. Genel Hükümler
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Bu kullanım şartları, WebCraft Web Tasarım ve Dijital
                  Pazarlama Ajansı (&ldquo;WebCraft&rdquo;, &ldquo;biz&rdquo;,
                  &ldquo;şirket&rdquo;) ile müşterilerimiz
                  (&ldquo;müşteri&rdquo;, &ldquo;siz&rdquo;) arasındaki hizmet
                  ilişkisini düzenler. Web sitesimizi ziyaret ederek ve
                  hizmetlerimizi kullanarak bu şartları kabul etmiş
                  sayılırsınız.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    2. Hizmet Kapsamı
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  WebCraft olarak aşağıdaki hizmetleri sunmaktayız:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <strong className="text-blue-400">
                        Web Tasarım ve Geliştirme:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Kurumsal web siteleri, e-ticaret siteleri
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <strong className="text-green-400">SEO Hizmeti:</strong>
                    </div>
                    <p className="text-gray-300">
                      Arama motoru optimizasyonu ve organik trafik artırma
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <strong className="text-purple-400">
                        Sosyal Medya Yönetimi:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Sosyal platformlarda marka yönetimi
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <strong className="text-orange-400">
                        Dijital Pazarlama:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Google Ads ve pazarlama stratejileri
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <strong className="text-red-400">
                        Mobil Uygulama Geliştirme:
                      </strong>
                    </div>
                    <p className="text-gray-300">iOS ve Android uygulamaları</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <strong className="text-indigo-400">
                        Yazılım Geliştirme:
                      </strong>
                    </div>
                    <p className="text-gray-300">Özel yazılım çözümleri</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    3. Müşteri Yükümlülükleri
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hizmetlerimizi kullanırken aşağıdaki yükümlülüklere uymanız
                  gerekir:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <strong className="text-green-400">Doğru Bilgi:</strong>
                    </div>
                    <p className="text-gray-300">
                      Bize verdiğiniz tüm bilgilerin doğru ve güncel olması
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <strong className="text-blue-400">İşbirliği:</strong>
                    </div>
                    <p className="text-gray-300">
                      Proje sürecinde gerekli bilgi ve materyalleri sağlama
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <strong className="text-gray-400">
                        Zamanında Ödeme:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Anlaşılan ödeme planına uygun ödeme yapma
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <strong className="text-orange-400">
                        Yasal Uyumluluk:
                      </strong>
                    </div>
                    <p className="text-gray-300">
                      Proje içeriğinin yasalara uygun olması
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <strong className="text-red-400">Gizlilik:</strong>
                    </div>
                    <p className="text-gray-300">
                      Proje detaylarının gizli tutulması
                    </p>
                  </div>
                </div>
              </div>

              <h2>4. Hizmet Süreci ve Teslimat</h2>
              <p>Hizmet sürecimiz aşağıdaki aşamalardan oluşur:</p>
              <ul>
                <li>
                  <strong>Planlama:</strong> Proje gereksinimleri ve hedeflerin
                  belirlenmesi
                </li>
                <li>
                  <strong>Tasarım:</strong> Görsel tasarım ve kullanıcı deneyimi
                  planlaması
                </li>
                <li>
                  <strong>Geliştirme:</strong> Teknik geliştirme ve kodlama
                  süreci
                </li>
                <li>
                  <strong>Test:</strong> Kalite kontrolü ve kullanıcı testleri
                </li>
                <li>
                  <strong>Teslimat:</strong> Proje teslimi ve eğitim
                </li>
                <li>
                  <strong>Destek:</strong> Teslimat sonrası teknik destek
                </li>
              </ul>

              <h2>5. Ödeme Koşulları</h2>
              <p>Ödeme koşullarımız aşağıdaki gibi düzenlenmiştir:</p>
              <ul>
                <li>
                  <strong>Ön Ödeme:</strong> Proje başlangıcında %50 ön ödeme
                </li>
                <li>
                  <strong>Ara Ödeme:</strong> Tasarım onayı sonrası %30 ödeme
                </li>
                <li>
                  <strong>Final Ödeme:</strong> Proje teslimi sonrası %20 ödeme
                </li>
                <li>
                  <strong>Ödeme Yöntemleri:</strong> Banka transferi, kredi
                  kartı, nakit
                </li>
                <li>
                  <strong>Vergi:</strong> Tüm fiyatlara KDV dahildir
                </li>
              </ul>

              <h2>6. Fikri Mülkiyet Hakları</h2>
              <p>Fikri mülkiyet hakları aşağıdaki gibi düzenlenir:</p>
              <ul>
                <li>
                  <strong>Müşteri İçeriği:</strong> Müşteri tarafından sağlanan
                  içerikler müşteriye aittir
                </li>
                <li>
                  <strong>WebCraft Tasarımları:</strong> Özel tasarım
                  çalışmaları WebCraft&apos;a aittir
                </li>
                <li>
                  <strong>Lisans:</strong> Tamamlanan proje müşteriye
                  lisanslanır
                </li>
                <li>
                  <strong>Portföy Hakkı:</strong> WebCraft projeyi portföyünde
                  gösterebilir
                </li>
                <li>
                  <strong>Üçüncü Taraf Yazılım:</strong> Lisans koşullarına
                  tabidir
                </li>
              </ul>

              <h2>7. Gizlilik ve Veri Güvenliği</h2>
              <p>
                Müşteri bilgilerinin gizliliği ve güvenliği bizim için çok
                önemlidir. Detaylı bilgi için{" "}
                <a
                  href="/gizlilik-politikasi"
                  className="text-blue-600 hover:underline"
                >
                  Gizlilik Politikası
                </a>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>

              <h2>8. Hizmet Kalitesi ve Garanti</h2>
              <p>Hizmet kalitemiz ve garanti koşullarımız:</p>
              <ul>
                <li>
                  <strong>Kalite Standartları:</strong> Endüstri standartlarında
                  hizmet kalitesi
                </li>
                <li>
                  <strong>Hata Düzeltme:</strong> Teslimat sonrası 30 gün
                  ücretsiz hata düzeltme
                </li>
                <li>
                  <strong>Teknik Destek:</strong> 3 ay ücretsiz teknik destek
                </li>
                <li>
                  <strong>Güncelleme:</strong> 1 yıl ücretsiz güvenlik
                  güncellemeleri
                </li>
                <li>
                  <strong>Eğitim:</strong> Proje teslimi sonrası kullanım
                  eğitimi
                </li>
              </ul>

              <h2>9. Sorumluluk Sınırları</h2>
              <p>WebCraft&apos;ın sorumluluk sınırları:</p>
              <ul>
                <li>
                  <strong>Hizmet Sorumluluğu:</strong> Sadece anlaşılan
                  hizmetler kapsamında
                </li>
                <li>
                  <strong>Dolaylı Zarar:</strong> Dolaylı zararlardan sorumlu
                  değiliz
                </li>
                <li>
                  <strong>Maksimum Sorumluluk:</strong> Ödenen ücret tutarı
                  kadar
                </li>
                <li>
                  <strong>Üçüncü Taraf Hizmetler:</strong> Üçüncü taraf
                  hizmetlerinden sorumlu değiliz
                </li>
                <li>
                  <strong>Müşteri Hataları:</strong> Müşteri hatalarından
                  kaynaklanan sorunlardan sorumlu değiliz
                </li>
              </ul>

              <h2>10. Hizmet Süresi ve Fesih</h2>
              <p>Hizmet süresi ve fesih koşulları:</p>
              <ul>
                <li>
                  <strong>Hizmet Süresi:</strong> Proje türüne göre 2-8 hafta
                </li>
                <li>
                  <strong>Uzatma:</strong> Müşteri talebi ile süre uzatılabilir
                </li>
                <li>
                  <strong>Müşteri Feshi:</strong> %30 iptal ücreti ile
                  feshedilebilir
                </li>
                <li>
                  <strong>WebCraft Feshi:</strong> Müşteri yükümlülüklerini
                  yerine getirmediğinde
                </li>
                <li>
                  <strong>Fesih Sonrası:</strong> Tamamlanan işler için ödeme
                  yapılır
                </li>
              </ul>

              <h2>11. Uyuşmazlık Çözümü</h2>
              <p>Uyuşmazlık durumunda izlenecek yol:</p>
              <ul>
                <li>
                  <strong>Görüşme:</strong> Öncelikle karşılıklı görüşme ile
                  çözüm
                </li>
                <li>
                  <strong>Arabuluculuk:</strong> Gerekirse arabuluculuk süreci
                </li>
                <li>
                  <strong>Yasal Yol:</strong> Son çare olarak yasal yollara
                  başvuru
                </li>
                <li>
                  <strong>Yetkili Mahkeme:</strong> Türkiye Cumhuriyeti
                  Mahkemeleri
                </li>
                <li>
                  <strong>Uygulanacak Hukuk:</strong> Türk Hukuku
                </li>
              </ul>

              <h2>12. Değişiklikler ve Güncellemeler</h2>
              <p>
                Bu kullanım şartları, gerekli görüldüğü takdirde
                güncellenebilir. Önemli değişiklikler olduğunda, web sitemizde
                yayınlanacak ve gerekli durumlarda e-posta ile bilgilendirme
                yapılacaktır.
              </p>

              <h2>13. İletişim Bilgileri</h2>
              <p>Kullanım şartları hakkında sorularınız için:</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="mb-3">
                  <strong className="text-white">E-posta:</strong>
                  <span className="text-[#f84525] ml-2">info@webcraft.tr</span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Telefon:</strong>
                  <span className="text-[#f84525] ml-2">+90-507-944-17-15</span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Adres:</strong>
                  <span className="text-[#f84525] ml-2">
                    Babataşı Mahallesi, 778 Sokak No: 32/A, Fethiye - Muğla
                  </span>
                </p>
                <p className="mb-3">
                  <strong className="text-white">Web Sitesi:</strong>
                  <span className="text-[#f84525] ml-2">www.webcraft.tr</span>
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                <h3 className="text-blue-800 font-semibold mb-2">
                  📋 Önemli Not
                </h3>
                <p className="text-blue-700">
                  Bu kullanım şartları, hizmetlerimizi kullanmaya başlamadan
                  önce dikkatle okunmalıdır. Hizmetlerimizi kullanarak bu
                  şartları kabul etmiş sayılırsınız.
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

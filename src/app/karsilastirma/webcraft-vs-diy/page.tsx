import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import Link from "next/link";
import { Check, X } from "lucide-react";

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
    "WebCraft vs DIY Web Sitesi Yapıcıları | Wix, Squarespace Karşılaştırması",
  description:
    "Profesyonel web tasarım ajansı mı yoksa DIY (kendin yap) web sitesi yapıcıları mı? WebCraft vs Wix, Squarespace, Weebly karşılaştırması. Detaylı analiz.",
  keywords:
    "webcraft vs wix, profesyonel web tasarım, diy web sitesi, wix vs profesyonel, squarespace alternatifleri, web sitesi yapıcıları",
  authors: [{ name: "WebCraft Uzman Ekibi" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/karsilastirma/webcraft-vs-diy",
  },
  openGraph: {
    title: "WebCraft vs DIY Web Sitesi Yapıcıları Karşılaştırması",
    description:
      "Profesyonel web tasarım vs DIY yapıcılar. Hangi seçenek sizin için uygun? Detaylı karşılaştırma.",
    url: "https://www.webcraft.tr/karsilastirma/webcraft-vs-diy",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "article",
  },
};

export default function WebCraftVsDIYPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Karşılaştırma", url: "/karsilastirma" },
      { name: "WebCraft vs DIY", url: "/karsilastirma/webcraft-vs-diy" },
    ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wix vs profesyonel web tasarım hangisi daha iyi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İşletmeniz için uzun vadeli yatırım yapıyorsanız, SEO önemliyse, özelleştirilmiş tasarım istiyorsanız ve ölçeklenebilirlik gerekliyse profesyonel web tasarım daha iyi bir seçimdir. Wix gibi DIY araçlar hobi siteleri, kişisel bloglar veya MVP testleri için uygundur.",
        },
      },
      {
        "@type": "Question",
        name: "DIY web sitesi yapıcıları ile profesyonel ajans arasındaki fark nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DIY yapıcılar şablon tabanlı, sınırlı özelleştirme ve kendisi kodlamadır. Profesyonel ajans tamamen özel tasarım, ileri teknik özellikler, SEO optimizasyonu, sürekli destek ve uzman ekip sunar. Profesyonel ajans, işletme hedeflerinize özel stratejik çözümler geliştirir.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                WebCraft vs DIY Web Sitesi Yapıcıları
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                Profesyonel web tasarım mı yoksa Wix, Squarespace gibi DIY
                araçlar mı? Detaylı karşılaştırma
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="font-bold text-red-600">WebCraft:</span>{" "}
                  <span className="text-gray-900">Profesyonel Ajans</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="font-bold text-purple-600">DIY:</span>{" "}
                  <span className="text-gray-900">
                    Wix, Squarespace, Weebly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Detaylı Karşılaştırma Tablosu
              </h2>
              <p className="text-xl text-gray-600">
                İşletmeniz için en doğru kararı vermeniz için tüm kriterleri
                karşılaştırdık
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 text-left font-bold">Kriter</th>
                      <th className="px-6 py-4 text-center font-bold">
                        WebCraft (Profesyonel)
                      </th>
                      <th className="px-6 py-4 text-center font-bold">
                        DIY Yapıcılar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Özelleştirme
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            Sınırsız özel tasarım
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm text-gray-900">
                            Şablon tabanlı, sınırlı
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        SEO Performansı
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            Gelişmiş teknik SEO
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm text-gray-900">
                            Temel SEO, kısıtlı
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Sayfa Hızı
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            95+ PageSpeed (Core Web Vitals)
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm text-gray-900">
                            60-75 ortalama (yavaş)
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Ölçeklenebilirlik
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            Sınırsız büyüme
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm text-gray-900">
                            Platform kısıtları
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Sahiplik
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            Tam sahiplik (kod + tasarım)
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm text-gray-900">
                            Platform bağımlılığı
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Özelleştirme
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            Sınırsız özel tasarım
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm text-gray-900">
                            Şablon tabanlı, sınırlı
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Güvenlik
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm text-gray-900">
                            Özel güvenlik önlemleri
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-yellow-600" />
                          <span className="text-sm text-gray-900">
                            Platform standart güvenlik
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Başlangıç Maliyeti
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            15.000 - 100.000₺
                          </span>
                          <span className="text-sm text-gray-600">
                            Bir kerelik
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            0 - 2.000₺
                          </span>
                          <span className="text-sm text-gray-600">
                            İlk ay düşük
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Yıllık Maliyet
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            3.000 - 10.000₺
                          </span>
                          <span className="text-sm text-gray-600">
                            Hosting + bakım (opsiyonel)
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            5.000 - 15.000₺
                          </span>
                          <span className="text-sm text-gray-600">
                            Abonelik zorunlu
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose DIY */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-purple-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🛠️ DIY Yapıcılar Ne Zaman Uygun?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Düşük Bütçe</p>
                      <p className="text-sm text-gray-600">
                        5.000₺ altı bütçeniz varsa
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">
                        Basit Web Sitesi
                      </p>
                      <p className="text-sm text-gray-600">
                        5-10 sayfa, temel içerik
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">
                        Kısa Vadeli Proje
                      </p>
                      <p className="text-sm text-gray-600">
                        Event sitesi, test projesi, hobi
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Zaman Var</p>
                      <p className="text-sm text-gray-600">
                        Kendi başınıza öğrenip yapabilirsiniz
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">
                        SEO Öncelikli Değil
                      </p>
                      <p className="text-sm text-gray-600">
                        Google sıralaması önemli değil
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🚀 WebCraft Ne Zaman Uygun?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">
                        İşletme Büyümesi
                      </p>
                      <p className="text-sm text-gray-600">
                        Ciddi büyüme hedefleri var
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Özel Özellikler</p>
                      <p className="text-sm text-gray-600">
                        Rezervasyon, ödeme, API entegrasyonu
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">
                        Profesyonel Görünüm
                      </p>
                      <p className="text-sm text-gray-600">
                        Marka imajı çok önemli
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">SEO Kritik</p>
                      <p className="text-sm text-gray-600">
                        Google&apos;da üst sıralarda olmalısınız
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">
                        Uzun Vadeli Yatırım
                      </p>
                      <p className="text-sm text-gray-600">
                        5+ yıl kullanacağınız bir varlık
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              💰 Gerçek Maliyet Analizi (5 Yıl)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-6">
                  DIY (Wix Premium)
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">İlk yıl abonelik</span>
                    <span className="font-bold text-gray-900">5.000₺</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">
                      2-5. yıl abonelik (x4)
                    </span>
                    <span className="font-bold text-gray-900">40.000₺</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">
                      Eklentiler (e-ticaret, SEO tools)
                    </span>
                    <span className="font-bold text-gray-900">15.000₺</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">
                      Zaman maliyeti (öğrenme, yönetim)
                    </span>
                    <span className="font-bold text-gray-900">25.000₺</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold">
                    <span className="text-gray-900">TOPLAM (5 Yıl)</span>
                    <span className="text-purple-600">85.000₺</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    ⚠️ Platform bağımlılığı, SEO kısıtları, yavaş performans,
                    şablon görünümü
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-red-600">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-red-600">
                    WebCraft Profesyonel
                  </h3>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                    ÖNERİLİR
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">
                      Web tasarım (bir kerelik)
                    </span>
                    <span className="font-bold text-gray-900">30.000₺</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">
                      Hosting + bakım (5 yıl)
                    </span>
                    <span className="font-bold text-gray-900">25.000₺</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Eklenti maliyeti</span>
                    <span className="font-bold">0₺</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Zaman maliyeti</span>
                    <span className="font-bold">0₺</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-xl font-bold">
                    <span className="text-gray-900">TOPLAM (5 Yıl)</span>
                    <span className="text-red-600">55.000₺</span>
                  </div>
                  <p className="text-sm text-green-700 mt-4 font-bold">
                    ✓ TAM SAHİPLİK + HIZLI SEO + ÖZEL TASARIM + 7/24 DESTEK
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-xl">
              <p className="font-bold text-lg mb-2">💡 Uzman Tavsiyesi</p>
              <p className="text-gray-700">
                Uzun vadede WebCraft gibi profesyonel ajans çözümü hem daha
                ekonomik hem de çok daha değerlidir. Tam sahiplik, hızlı SEO
                performansı, özel tasarım ve sürekli destek ile web siteniz
                gerçek bir dijital varlık olur.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f84525] text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Profesyonel Web Sitesi ile Büyüyün
            </h2>
            <p className="text-xl mb-8 opacity-90">
              WebCraft ile 10 yıllık deneyim, 200+ başarılı proje. Ücretsiz
              danışmanlık ve teklif alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/iletisim"
                className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Ücretsiz Teklif Alın
              </Link>
              <Link
                href="/islerimiz"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Projelerimizi İnceleyin
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

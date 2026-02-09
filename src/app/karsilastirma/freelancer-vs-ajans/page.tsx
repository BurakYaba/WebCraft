import { Metadata } from "next";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Check, X, Users, User } from "lucide-react";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Freelancer vs Ajans | Web Tasarım Hangisi Daha İyi? | WebCraft",
  description:
    "Freelance web tasarımcı mı yoksa profesyonel ajans mı? Avantajlar, dezavantajlar, maliyet karşılaştırması. İşiniz için en doğru kararı verin.",
  keywords:
    "freelancer vs ajans, web tasarım ajansı, freelance web tasarımcı, profesyonel web tasarım, ajans farkı",
  authors: [{ name: "WebCraft Uzman Ekibi" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/karsilastirma/freelancer-vs-ajans",
  },
  openGraph: {
    title: "Freelancer vs Ajans Web Tasarım Karşılaştırması",
    description:
      "Freelance web tasarımcı mı yoksa profesyonel ajans mı? Detaylı karşılaştırma.",
    url: "https://www.webcraft.tr/karsilastirma/freelancer-vs-ajans",
    siteName: "WebCraft",
    locale: "tr_TR",
    type: "article",
  },
};

export default function FreelancerVsAjansPage() {
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
        name: "Karşılaştırma",
        item: "https://www.webcraft.tr/karsilastirma",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Freelancer vs Ajans",
        item: "https://www.webcraft.tr/karsilastirma/freelancer-vs-ajans",
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

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-green-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Freelancer vs Profesyonel Ajans
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Web tasarım projesi için freelance tasarımcı mı yoksa ajans mı?
                Detaylı karşılaştırma
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 text-left font-bold">Kriter</th>
                      <th className="px-6 py-4 text-center font-bold">
                        <User className="w-6 h-6 inline-block mr-2" />
                        Freelancer
                      </th>
                      <th className="px-6 py-4 text-center font-bold">
                        <Users className="w-6 h-6 inline-block mr-2" />
                        Ajans (WebCraft)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Güvenilirlik</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-yellow-600" />
                          <span className="text-sm">Değişken</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm">Kurumsal güvence</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">
                        Uzmanlık Yelpazesi
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm">Tek kişi, sınırlı</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm">
                            Ekip: Tasarımcı, Developer, SEO
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">
                        Proje Yönetimi
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-yellow-600" />
                          <span className="text-sm">Temel takip</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm">
                            Profesyonel süreç yönetimi
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">
                        Süreklilik / Destek
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm">
                            Hasta/tatil/projeden çıkma riski
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm">
                            7/24 kesintisiz destek
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Yasal Koruma</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-red-600" />
                          <span className="text-sm">Bireysel sözleşme</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm">
                            Kurumsal sözleşme + garanti
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">
                        Zaman Çizelgesi
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <X className="w-6 h-6 text-yellow-600" />
                          <span className="text-sm">Esnek ama belirsiz</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Check className="w-6 h-6 text-green-600" />
                          <span className="text-sm">
                            Net milestones + deadline
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Maliyet</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            5.000 - 25.000₺
                          </span>
                          <span className="text-sm text-gray-600">
                            Genellikle daha düşük
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">
                            15.000 - 100.000₺
                          </span>
                          <span className="text-sm text-gray-600">
                            Profesyonel ekip dahil
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

        {/* Decision Matrix */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Hangi Seçenek Sizin İçin Uygun?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-10 h-10 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-600">
                    Freelancer Seçin
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Bütçeniz kısıtlı (10.000₺ altı)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Basit web sitesi (5-10 sayfa)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Aciliyet yok, esnek zaman çizelgesi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Kişisel proje, MVP testi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Tanıdığınız, güvendiğiniz bir freelancer var</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Not:</strong> Freelancer seçerken portföy,
                    referanslar ve iletişim becerilerini mutlaka kontrol edin.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-red-600">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-10 h-10 text-red-600" />
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-red-600">
                      Ajans Seçin
                    </h3>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                      ÖNERİLİR
                    </span>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>Kurumsal/büyüyen işletmesiniz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>
                      Karmaşık fonksiyonlar (e-ticaret, API, özel özellikler)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>Net deadline, zamanında teslim kritik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>SEO, performans, güvenlik önemli</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>Sürekli destek ve bakım gerekli</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>Uzun vadeli dijital varlık inşa ediyorsunuz</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 rounded-xl border-l-4 border-green-600">
                  <p className="text-sm text-green-900 font-bold">
                    ✓ WebCraft: 10 yıl deneyim + 200+ proje + 7/24 destek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#f84525] text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WebCraft ile Güvenilir Ortaklık
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kurumsal güvence, profesyonel ekip, zamanında teslim. Ücretsiz
              danışmanlık alın.
            </p>
            <Link
              href="/iletisim"
              className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

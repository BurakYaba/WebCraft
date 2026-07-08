import { lazy, Suspense } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import BlogTOC from "@/components/BlogTOC";
import Link from "next/link";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

const TOC_ITEMS = [
  { id: "chatbot-nedir", label: "Yapay Zeka Chatbot Nedir?" },
  { id: "otomasyon-nedir", label: "AI Otomasyon Nedir?" },
  { id: "hangisi", label: "Chatbot mu, Otomasyon mu?" },
  { id: "faydalar", label: "Somut Faydalar" },
  { id: "surecler", label: "Otomatikleştirilebilir Süreçler" },
  { id: "kanallar", label: "Chatbot Kanalları" },
  { id: "uygulama", label: "Uygulama Süreci" },
  { id: "maliyet", label: "Maliyet ve ROI" },
  { id: "endiseler", label: "Yaygın Endişeler" },
  { id: "faq", label: "Sık Sorulan Sorular" },
];

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Yapay Zeka Chatbot ve Otomasyon: İşletmeniz İçin Ne Anlama Geliyor?",
  description:
    "Yapay zeka chatbot ve iş otomasyonu işletmenize somut olarak ne katar? Maliyet, süreç, ROI ve hangisini önce kuracağınıza dair 2026 rehberi.",
  keywords:
    "yapay zeka chatbot, ai chatbot geliştirme, chatbot entegrasyonu, yapay zeka otomasyon, iş süreçleri otomasyonu, ai iş süreci otomasyonu, whatsapp chatbot, akıllı belge işleme, işletmeler için chatbot",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/yapay-zeka-chatbot-ve-otomasyon-rehberi",
  },
  openGraph: {
    title:
      "Yapay Zeka Chatbot ve Otomasyon: İşletmeniz İçin Ne Anlama Geliyor?",
    description:
      "Chatbot mu, iş süreci otomasyonu mu? Maliyet, ROI ve doğru başlangıç noktasını somut verilerle anlatıyoruz.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2026-07-08T09:00:00Z",
    authors: ["Burak Yaba"],
  },
};

const relatedPosts = [
  {
    id: 20,
    category: "SEO & Yapay Zeka",
    title: "SEO, GEO ve AEO Nedir? Arama Optimizasyonunun Üç Boyutu",
    excerpt:
      "SEO, GEO ve AEO arasındaki farkları ve ChatGPT, Google AI Overview gibi yapay zeka sistemlerinde nasıl görünür olacağınızı öğrenin.",
    image: "/bento/dijital-pazarlama.webp",
    slug: "seo-geo-aeo-nedir",
    date: "6 Mayıs 2026",
    readTime: "25 dk",
  },
  {
    id: 15,
    category: "Dijital Dönüşüm",
    title: "KOBİ Dijital Dönüşüm Rehberi: Küçük İşletmeler için Stratejiler",
    excerpt:
      "Küçük ve orta ölçekli işletmeler için dijital dönüşüm rehberi. Web sitesi, e-ticaret ve dijital pazarlama ile işletmenizi büyütün.",
    image: "/bento/yazılım-geliştirme.webp",
    slug: "kobi-dijital-donusum-rehberi",
    date: "15 Ocak 2026",
    readTime: "20 dk",
  },
  {
    id: 10,
    category: "Web Analitik",
    title: "2025'te En İyi Web Analitik Araçları",
    excerpt:
      "En iyi web analitik araçları ve nasıl kullanılacağı. Veriye dayalı karar almak için detaylı rehber.",
    image: "/bento/dijital-pazarlama.webp",
    slug: "web-analitik-araclari",
    date: "22 Kasım 2024",
    readTime: "20 dk",
  },
];

export default function YapayZekaChatbotVeOtomasyonRehberi() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Blog", url: "/blog" },
      {
        name: "Yapay Zeka Chatbot ve Otomasyon Rehberi",
        url: "/blog/yapay-zeka-chatbot-ve-otomasyon-rehberi",
      },
    ]);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Yapay Zeka Chatbot ve Otomasyon: İşletmeniz İçin Ne Anlama Geliyor?",
    description:
      "Yapay zeka chatbot ve iş otomasyonu işletmenize somut olarak ne katar? Maliyet, süreç, ROI ve doğru başlangıç noktası.",
    image: "https://www.webcraft.tr/bento/chatbot.webp",
    author: {
      "@type": "Person",
      name: "Burak Yaba",
      url: "https://www.webcraft.tr/hakkimizda",
    },
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      logo: {
        "@type": "ImageObject",
        url: "https://www.webcraft.tr/webcraftLogo.png",
      },
    },
    datePublished: "2026-07-08T09:00:00Z",
    dateModified: "2026-07-08T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/yapay-zeka-chatbot-ve-otomasyon-rehberi",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Yapay zeka chatbot ile iş otomasyonu arasındaki fark nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chatbot, müşterilerinizle doğal dilde iletişim kuran ve soruları yanıtlayan bir arayüzdür — web sitenizde, WhatsApp'ta veya Instagram'da çalışır. İş otomasyonu ise fatura işleme, e-posta sınıflandırma, veri girişi gibi arka plandaki tekrarlayan iş süreçlerini otomatikleştirir. Chatbot müşteriyle konuşur, otomasyon işi yapar. Birçok işletme ikisini birlikte kullanır: chatbot müşteri talebini alır, otomasyon o talebi arka planda işler.",
        },
      },
      {
        "@type": "Question",
        name: "Küçük bir işletme için hangisiyle başlamalı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Müşteri sorularınızın çoğu tekrarlayan nitelikteyse (fiyat, çalışma saatleri, randevu) chatbot ile başlamak daha hızlı sonuç verir — 2-3 haftada devreye alınabilir. Asıl kaybınız manuel veri girişi, fatura işleme veya e-posta yönetimindeyse iş otomasyonu önceliklidir. Emin değilseniz, en çok zaman kaybettiğiniz tek bir süreci seçip küçük bir pilot proje (PoC) ile başlamanızı öneririz.",
        },
      },
      {
        "@type": "Question",
        name: "Yapay zeka chatbot ve otomasyon ne kadara mal olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Temel bir chatbot 15.000₺'den, kurumsal çok kanallı çözümler 50.000₺ ve üzerinden başlıyor. Tek süreçlik otomasyon projeleri 20.000₺'den, kapsamlı kurumsal otomasyonlar 75.000₺ ve üzerinden başlıyor. Kesin fiyat kapsam ve entegrasyon sayısına göre değişir; yatırım genellikle 3-6 ay içinde geri dönüyor.",
        },
      },
      {
        "@type": "Question",
        name: "Chatbot veya otomasyon çalışanlarımın işini elinden alır mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır, amaç bu değil. Tekrarlayan ve düşük değerli görevler (veri girişi, sık sorulan sorular, belge tarama) otomatikleştirilirken ekibiniz müşteri ilişkileri, strateji ve yaratıcı işler gibi yüksek değerli görevlere odaklanır. Doğru kurgulanan bir otomasyon projesi genellikle iş memnuniyetini düşürmez, tam tersine artırır.",
        },
      },
      {
        "@type": "Question",
        name: "Chatbot yanlış bilgi verirse ne olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İyi kurgulanmış bir AI chatbot, yalnızca kendisine verilen bilgi tabanı (ürün kataloğu, SSS, fiyat listesi) içinde yanıt üretir ve emin olmadığı sorularda 'bilmiyorum, sizi bir temsilciye yönlendiriyorum' der. Bu 'halüsinasyon koruma' mekanizması sayesinde eğitildiği konularda %90-95 doğruluk oranına ulaşılır ve karmaşık sorular otomatik olarak insan desteğine devredilir.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />

        <main>
          {/* Hero */}
          <section className="pt-24 md:pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Yapay Zeka &amp; Otomasyon
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Yapay Zeka Chatbot ve Otomasyon:{" "}
                <span className="text-red-600">
                  İşletmeniz İçin Ne Anlama Geliyor?
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 text-sm">
                <span className="font-medium text-gray-900">Burak Yaba</span>
                <span>•</span>
                <span>8 Temmuz 2026</span>
                <span>•</span>
                <span>20 dk okuma</span>
              </div>
              <div className="relative w-full h-56 sm:h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/bento/chatbot.webp"
                  alt="Yapay Zeka Chatbot ve İş Otomasyonu Rehberi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-red-500 pl-6 md:pl-10 py-3">
                Son bir yılda müşterilerimizden aldığım en sık soru şu oldu:
                &quot;Bizim de bir chatbot&apos;a ihtiyacımız var mı, yoksa
                asıl sorunumuz süreçlerimizin manuel olması mı?&quot; Bu yazıda
                ikisi arasındaki farkı, gerçek maliyetleri ve nereden
                başlamanız gerektiğini uygulamalı örneklerle anlatıyorum.
              </p>
            </div>
          </section>

          {/* Article body — two-column on xl screens */}
          <article className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="flex gap-16 items-start">
                {/* ── Main content column ── */}
                <div className="min-w-0 flex-1">
                  {/* --- Section 1: Chatbot --- */}
                  <h2
                    id="chatbot-nedir"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    1. Yapay Zeka Chatbot Nedir?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Yapay zeka chatbot, doğal dil işleme (NLP) ve büyük dil
                    modelleri (LLM) kullanarak müşterilerinizle otomatik
                    olarak iletişim kuran akıllı bir sistemdir. Klasik kural
                    tabanlı botların aksine (&quot;1 yazın, 2 yazın&quot;
                    mantığı), GPT
                    tabanlı bir chatbot konuşmanın bağlamını anlar, karmaşık
                    soruları yanıtlar ve markanızın tonuna uygun, doğal
                    cümleler kurar.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Kurduğumuz{" "}
                    <Link
                      href="/hizmetler/yapay-zeka-chatbot"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      yapay zeka chatbot
                    </Link>{" "}
                    çözümleri, işletmenizin ürün kataloğu, SSS&apos;leri ve
                    şirket politikalarıyla eğitilir. Böylece chatbot genel
                    geçer cevaplar değil, sizin işletmenize özel, doğru
                    bilgiler verir — ve web sitesi, WhatsApp Business,
                    Instagram DM ve Telegram üzerinden aynı anda çalışabilir.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-2xl mb-3">💬</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Ne Yapar?
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        7/24 müşteri sorularını yanıtlar, ürün önerir, fiyat
                        teklifi oluşturur, randevu planlar ve karmaşık
                        talepleri insan temsilciye akıllıca yönlendirir.
                      </p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-2xl mb-3">🎯</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Kimler İçin Uygun?
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Yoğun müşteri sorusu alan e-ticaret siteleri, hizmet
                        işletmeleri, oteller/pansiyonlar ve satış hunisinde
                        hızlı yanıt vermesi gereken her işletme.
                      </p>
                    </div>
                  </div>

                  {/* --- Section 2: Automation --- */}
                  <h2
                    id="otomasyon-nedir"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    2. Yapay Zeka İş Otomasyonu Nedir?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    İş otomasyonu, chatbot&apos;un aksine müşteriyle
                    doğrudan konuşmaz — arka planda, işletmenizin tekrarlayan
                    ve zaman alıcı görevlerini yapay zeka ile üstlenir. Fatura
                    işlemeden müşteri e-postalarının sınıflandırılmasına, veri
                    girişinden rapor oluşturmaya kadar birçok süreç bu
                    kapsama girer.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Geleneksel otomasyon araçlarından (basit kurallara dayalı
                    RPA) farkı şu: yapay zeka destekli{" "}
                    <Link
                      href="/hizmetler/yapay-zeka-otomasyon"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      iş süreci otomasyonu
                    </Link>{" "}
                    karar verebilir, öğrenebilir ve yapılandırılmamış veriyi
                    (bir faturanın taranmış görüntüsü, serbest metinli bir
                    e-posta) anlamlı bilgiye dönüştürebilir.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 md:pl-8 pr-6 py-5 rounded-r-xl mb-10">
                    <p className="text-blue-900 font-semibold mb-2">
                      📌 Önemli Not
                    </p>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Chatbot ve otomasyon rakip değil, tamamlayıcı
                      çözümlerdir. Örneğin bir müşteri chatbot üzerinden
                      sipariş iptali talep ettiğinde, chatbot talebi alır;
                      arka plandaki otomasyon ise iade sürecini muhasebe
                      sisteminize otomatik olarak işler. En güçlü kurgular
                      ikisini birlikte kullanır.
                    </p>
                  </div>

                  {/* --- Section 3: Which one --- */}
                  <h2
                    id="hangisi"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    3. Chatbot mu, Otomasyon mu? Hangisiyle Başlamalısınız?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Müşterilerimize her zaman aynı soruyu soruyorum:
                    &quot;Ekibinizin zamanı nerede tükeniyor — müşteriyle
                    konuşurken mi, yoksa konuştuktan sonraki kağıt işinde
                    mi?&quot; Cevap, doğru başlangıç noktasını belirliyor.
                  </p>

                  <div className="overflow-x-auto mb-10">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            Durumunuz
                          </th>
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            Önerilen Başlangıç
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Aynı sorular sürekli tekrarlanıyor (fiyat, saat,
                            stok)
                          </td>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Chatbot
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Fatura, sözleşme, form işlemede saatler kayboluyor
                          </td>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Otomasyon
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            E-posta kutunuz yanıtsız taleplerle dolu
                          </td>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Otomasyon (e-posta sınıflandırma)
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Satış hunisinde potansiyel müşteri kaybediyorsunuz
                          </td>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Chatbot (lead toplama)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Her ikisi de doğruysa
                          </td>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            En çok zaman kaybettiren tek süreçle pilot başlayın
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* --- Section 4: Benefits --- */}
                  <h2
                    id="faydalar"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    4. Somut Faydalar: Rakamlarla
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Soyut vaatler yerine, projelerimizde gözlemlediğimiz ve
                    sektör araştırmalarıyla desteklenen aralıkları paylaşmayı
                    tercih ediyoruz:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        %30-50
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Chatbot kullanan işletmelerde müşteri hizmetleri
                        maliyetlerinde tasarruf
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        %60-80
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Otomatikleştirilen süreçlerde zaman tasarrufu
                        (belge işleme, veri girişi)
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        %90
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        AI otomasyonla azaltılabilen insan hatası oranı
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        %90-95
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        İşletmeye özel eğitilmiş chatbot&apos;ların yanıt
                        doğruluk oranı
                      </p>
                    </div>
                  </div>

                  {/* --- Section 5: Processes --- */}
                  <h2
                    id="surecler"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    5. Hangi Süreçler Otomatikleştirilebilir?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Genel kural basit: <strong>tekrarlayan ve kural
                    tabanlı her süreç</strong> otomatikleştirilmeye adaydır.
                    En sık karşılaştığımız örnekler:
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Akıllı belge işleme:</strong> Fatura,
                        sözleşme ve form gibi belgeleri OCR ve NLP ile
                        otomatik tanıma, veri çıkarma ve sisteme kaydetme.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>E-posta ve iletişim otomasyonu:</strong> Gelen
                        e-postaları otomatik sınıflandırma, önceliklendirme
                        ve ilgili departmana yönlendirme.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Veri analizi ve raporlama:</strong> Büyük veri
                        setlerini analiz etme, trend tespiti ve otomatik
                        rapor/dashboard oluşturma.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>CRM ve ERP entegrasyonu:</strong>{" "}
                        Salesforce, HubSpot gibi sistemlerle veri
                        senkronizasyonu ve otomatik kayıt/süreç tetikleme.
                      </span>
                    </li>
                  </ul>

                  {/* --- Section 6: Channels --- */}
                  <h2
                    id="kanallar"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    6. Chatbot Hangi Kanallarda Çalışır?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Türkiye&apos;deki işletmeler için en kritik nokta,
                    chatbot&apos;un müşterinin zaten bulunduğu yerde
                    çalışması. Tek bir &quot;AI beyin&quot;, aşağıdaki
                    kanalların tümünde tutarlı bir deneyim sunabilir:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {[
                      "Web Sitesi",
                      "WhatsApp Business",
                      "Instagram DM",
                      "Telegram",
                    ].map((ch) => (
                      <div
                        key={ch}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
                      >
                        <p className="font-semibold text-gray-900 text-sm">
                          {ch}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    WhatsApp özellikle Türkiye pazarında kritik — müşterilerin
                    büyük kısmı işletmelerle önce WhatsApp üzerinden temas
                    kurmayı tercih ediyor. Bu yüzden{" "}
                    <Link
                      href="/hizmetler/yapay-zeka-chatbot"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      chatbot projelerimizin
                    </Link>{" "}
                    çoğunda WhatsApp Business API entegrasyonu ilk sırada yer
                    alıyor.
                  </p>

                  {/* --- Section 7: Process --- */}
                  <h2
                    id="uygulama"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    7. Uygulama Süreci: Nereden Başlanır?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Her iki çözüm türünde de benzer bir yol izliyoruz — fark,
                    ilk adımın kapsamında:
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-4">
                      <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">
                          İhtiyaç analizi ve strateji
                        </p>
                        <p className="text-gray-700 text-sm mt-1">
                          Süreçlerinizi, sıkça sorulan soruları ve hedefleri
                          birlikte analiz ederiz; kapsam ve önceliği belirleriz.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Bilgi tabanı / küçük ölçekli kavram kanıtı (PoC)
                        </p>
                        <p className="text-gray-700 text-sm mt-1">
                          Chatbot için ürün/SSS bilgi tabanını, otomasyon için
                          küçük bir pilot süreci hazırlarız — fizibiliteyi
                          erkenden doğrularsınız.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Geliştirme ve entegrasyon
                        </p>
                        <p className="text-gray-700 text-sm mt-1">
                          Web sitesi, WhatsApp, CRM ve ERP sistemlerinizle
                          bağlantıları kurar, kapsamlı testler yaparız.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                        4
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Yayın, izleme ve sürekli iyileştirme
                        </p>
                        <p className="text-gray-700 text-sm mt-1">
                          Performansı gerçek zamanlı izler, aylık raporlarla
                          doğruluk ve verimliliği artırmaya devam ederiz.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Temel bir chatbot 2-3 haftada, kapsamlı çok kanallı
                    çözümler 4-8 haftada devreye alınıyor. Tek süreçlik
                    otomasyon projeleri 2-4 hafta, kapsamlı kurumsal
                    otomasyonlar 6-12 hafta sürüyor.
                  </p>

                  {/* --- Section 8: Cost --- */}
                  <h2
                    id="maliyet"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    8. Maliyet ve ROI
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Fiyatlandırma her zaman kapsam ve entegrasyon sayısına
                    göre değişir, ama size gerçekçi bir referans aralığı
                    vermek istiyoruz:
                  </p>
                  <div className="overflow-x-auto mb-10">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            Çözüm
                          </th>
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            Başlangıç Fiyatı
                          </th>
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            Kurumsal Kapsam
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Chatbot
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            15.000₺&apos;den
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            50.000₺ ve üzeri
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            İş Otomasyonu
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            20.000₺&apos;den
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            75.000₺ ve üzeri
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Aylık bakım ve API kullanım ücretleri ayrıca
                    değerlendirilir. Projelerimizde gözlemlediğimiz genel
                    eğilim, yatırımın <strong>3-6 ay içinde</strong> geri
                    döndüğü yönünde — özellikle müşteri hizmetleri veya veri
                    girişi gibi doğrudan işçilik maliyeti içeren süreçlerde.
                  </p>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 md:p-8 mb-14 text-center">
                    <h3 className="text-2xl font-bold mb-3">
                      Hangi sürecinizin otomatikleşmeye hazır olduğunu birlikte belirleyelim
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                      Ücretsiz bir görüşmede süreçlerinizi analiz edip somut
                      bir ROI tahmini paylaşıyoruz — taahhüt gerekmez.
                    </p>
                    <Link
                      href="/iletisim"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                      Ücretsiz Danışmanlık Alın
                    </Link>
                  </div>

                  {/* --- Section 9: Concerns --- */}
                  <h2
                    id="endiseler"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    9. Yaygın Endişeler ve Yanlış Anlamalar
                  </h2>
                  <div className="space-y-5 mb-10">
                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          &quot;Çalışanlarımızın işini elinden alacak&quot;
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Amaç, ekibinizi tekrarlayan görevlerden kurtarıp
                          müşteri ilişkileri ve stratejik işlere
                          yönlendirmek. Doğru kurgulanan projelerde iş
                          memnuniyeti düşmez, genellikle artar.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          &quot;Chatbot müşterilere yanlış bilgi verir&quot;
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          İşletmenize özel eğitilen ve &quot;bilmediğini kabul
                          etme&quot; mantığıyla kurulan bir chatbot, emin
                          olmadığı konularda insan desteğine yönlendirir.
                          Genel amaçlı, eğitilmemiş bir chatbot ile
                          karıştırılmamalı.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          &quot;Mevcut sistemlerimizle uyumlu olmaz&quot;
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Çözümlerimiz API&apos;ler aracılığıyla Salesforce,
                          HubSpot, Shopify, WooCommerce ve muhasebe
                          yazılımlarıyla entegre olacak şekilde tasarlanır.
                          Özel entegrasyon ihtiyaçları için de çözüm üretiyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* --- Section 10: FAQ --- */}
                  <h2
                    id="faq"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    10. Sık Sorulan Sorular
                  </h2>
                  <div className="space-y-6 mb-14">
                    {[
                      {
                        q: "Yapay zeka chatbot ile iş otomasyonu arasındaki fark nedir?",
                        a: "Chatbot, müşterilerinizle doğal dilde iletişim kuran ve soruları yanıtlayan bir arayüzdür. İş otomasyonu ise arka plandaki tekrarlayan süreçleri (belge işleme, veri girişi) otomatikleştirir. Chatbot müşteriyle konuşur, otomasyon işi yapar — birçok işletme ikisini birlikte kullanır.",
                      },
                      {
                        q: "Küçük bir işletme için hangisiyle başlamalı?",
                        a: "Müşteri sorularınızın çoğu tekrarlayan nitelikteyse chatbot ile başlamak daha hızlı sonuç verir. Asıl kaybınız manuel veri girişi veya belge işlemedeyse iş otomasyonu önceliklidir. Emin değilseniz en çok zaman kaybettiğiniz tek bir süreçle küçük bir pilot proje başlatmanızı öneririz.",
                      },
                      {
                        q: "Yapay zeka chatbot ve otomasyon ne kadara mal olur?",
                        a: "Temel bir chatbot 15.000₺'den, kurumsal çözümler 50.000₺ ve üzerinden başlıyor. Tek süreçlik otomasyon projeleri 20.000₺'den, kapsamlı kurumsal otomasyonlar 75.000₺ ve üzerinden başlıyor. Yatırım genellikle 3-6 ay içinde geri dönüyor.",
                      },
                      {
                        q: "Chatbot veya otomasyon çalışanlarımın işini elinden alır mı?",
                        a: "Hayır. Tekrarlayan görevler otomatikleştirilirken ekibiniz müşteri ilişkileri ve stratejik işlere odaklanır. Doğru kurgulanan bir proje iş memnuniyetini genellikle artırır.",
                      },
                      {
                        q: "Chatbot yanlış bilgi verirse ne olur?",
                        a: "İyi kurgulanmış bir chatbot yalnızca kendi bilgi tabanı içinde yanıt üretir ve emin olmadığı sorularda insan temsilciye yönlendirir. Bu sayede eğitildiği konularda %90-95 doğruluk oranına ulaşılır.",
                      },
                    ].map(({ q, a }, i) => (
                      <details
                        key={i}
                        className="border border-gray-200 rounded-xl overflow-hidden group"
                      >
                        <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                          <span>{q}</span>
                          <span className="text-red-600 ml-4 shrink-0 text-xl group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed text-sm border-t border-gray-100">
                          {a}
                        </div>
                      </details>
                    ))}
                  </div>

                  {/* Author box */}
                  <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-4">
                    <div className="flex items-center gap-4 md:gap-5 mb-4">
                      <div className="bg-red-600 text-white font-bold text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                        BY
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">
                          Burak Yaba
                        </p>
                        <p className="text-red-600 text-sm font-medium mt-1">
                          WebCraft — Kurucu &amp; Web Tasarım Uzmanı
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      2015&apos;ten bu yana web tasarım, SEO ve son yıllarda
                      yapay zeka destekli chatbot/otomasyon projeleri
                      yürütüyorum.{" "}
                      <Link
                        href="/hakkimizda"
                        className="text-red-600 hover:underline"
                      >
                        Hakkımızda sayfasında
                      </Link>{" "}
                      daha fazla bilgi bulabilirsiniz.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 mt-2 mb-8">
                    Yayın tarihi: 8 Temmuz 2026 • Bu yazı, müşteri
                    projelerimizden edinilen birinci elden deneyime
                    dayanmaktadır.
                  </div>
                </div>
                {/* end main content column */}

                {/* ── Sticky TOC sidebar right (xl+) ── */}
                <BlogTOC items={TOC_ITEMS} />
              </div>
              {/* end flex row */}
            </div>
            {/* end max-w-6xl */}
          </article>

          {/* Related Posts */}
          <RelatedBlogPosts
            currentSlug="yapay-zeka-chatbot-ve-otomasyon-rehberi"
            posts={relatedPosts}
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

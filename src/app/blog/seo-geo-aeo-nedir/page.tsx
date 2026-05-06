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
  { id: "seo-nedir", label: "SEO Nedir?" },
  { id: "aeo-nedir", label: "AEO Nedir?" },
  { id: "geo-nedir", label: "GEO Nedir?" },
  { id: "farklar", label: "Farklar ve Örtüşmeler" },
  { id: "seo-stratejisi", label: "SEO Stratejisi 2026" },
  { id: "aeo-stratejisi", label: "AEO Stratejisi" },
  { id: "geo-stratejisi", label: "GEO Stratejisi" },
  { id: "birlikte", label: "Üçünü Birlikte Kullanmak" },
  { id: "hatalar", label: "Yaygın Hatalar" },
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
  title: "SEO, GEO ve AEO Nedir? Arama Optimizasyonunun Üç Boyutu | WebCraft",
  description:
    "SEO, GEO (Generative Engine Optimization) ve AEO (Answer Engine Optimization) arasındaki farkları ve bu üç stratejiyi bir arada nasıl uygulayacağınızı öğrenin. 2026 için kapsamlı rehber.",
  keywords:
    "seo nedir, geo nedir, aeo nedir, generative engine optimization, answer engine optimization, yapay zeka seo, ai arama optimizasyonu, chatgpt seo, google ai overview",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/blog/seo-geo-aeo-nedir",
  },
  openGraph: {
    title: "SEO, GEO ve AEO Nedir? Arama Optimizasyonunun Üç Boyutu",
    description:
      "SEO, GEO ve AEO: 2026'da dijital görünürlüğün üç boyutunu anlayın. ChatGPT, Google AI Overview ve sesli arama için stratejiler.",
    type: "article",
    locale: "tr_TR",
    publishedTime: "2026-05-06T09:00:00Z",
    authors: ["Burak Yaba"],
  },
};

const relatedPosts = [
  {
    id: 13,
    category: "SEO Trendleri",
    title: "2025-2026 SEO Trendleri: Güncel Arama Motoru Optimizasyonu Rehberi",
    excerpt:
      "AI Overview, E-E-A-T ve Core Web Vitals dahil 2025-2026 yılının tüm SEO trendleri.",
    image: "/bento/dijital-pazarlama.webp",
    slug: "2024-seo-trendleri",
    date: "2 Nisan 2026",
    readTime: "22 dk",
  },
  {
    id: 16,
    category: "Teknik SEO",
    title: "Teknik SEO Kontrol Listesi: 2026 Kapsamlı Rehber",
    excerpt:
      "2026 yılı için kapsamlı teknik SEO kontrol listesi. Site hızı, mobil uyumluluk, yapılandırılmış veri ve Core Web Vitals optimizasyonu stratejileri.",
    image: "/bento/web-tasarim.webp",
    slug: "teknik-seo-kontrol-listesi",
    date: "12 Ocak 2026",
    readTime: "22 dk",
  },
  {
    id: 17,
    category: "Yerel SEO",
    title: "Yerel SEO Stratejileri: Google Haritalar'da Üst Sıralarda Yer Alın",
    excerpt:
      "Yerel SEO stratejileri ile Google Haritalar'da üst sıralarda yer alın. Google My Business optimizasyonu ve bölgesel anahtar kelime stratejileri.",
    image: "/bento/dijital-pazarlama.webp",
    slug: "yerel-seo-stratejileri",
    date: "10 Ocak 2026",
    readTime: "18 dk",
  },
];

export default function SeoGeoAeoNedir() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Blog", url: "/blog" },
      {
        name: "SEO, GEO ve AEO Nedir?",
        url: "/blog/seo-geo-aeo-nedir",
      },
    ]);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "SEO, GEO ve AEO Nedir? Arama Optimizasyonunun Üç Boyutu",
    description:
      "SEO, GEO ve AEO arasındaki farkları ve bu üç stratejiyi 2026'da nasıl bir arada uygulayacağınızı öğrenin.",
    image: "https://www.webcraft.tr/bento/dijital-pazarlama.webp",
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
    datePublished: "2026-05-06T09:00:00Z",
    dateModified: "2026-05-06T09:00:00Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.webcraft.tr/blog/seo-geo-aeo-nedir",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "SEO, GEO ve AEO arasındaki temel fark nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO (Search Engine Optimization) Google gibi klasik arama motorlarında organik sıralama elde etmeye odaklanır. AEO (Answer Engine Optimization) öne çıkan snippet'ler, sesli arama ve Google AI Overview gibi doğrudan cevap veren sistemler için optimize etmeyi kapsar. GEO (Generative Engine Optimization) ise ChatGPT, Claude, Gemini ve Perplexity gibi yapay zeka sistemlerinin ürettiği yanıtlarda kaynak olarak gösterilmeyi hedefler.",
        },
      },
      {
        "@type": "Question",
        name: "GEO stratejisi için içerik nasıl yazılmalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yapay zeka modellerinin yanıtlarında yer almak için içeriğinizin özlü, güvenilir ve alıntılanabilir olması gerekir. Her bölümün kendi başına anlamlı olduğu modüler bir yapı kullanın, istatistiklere ve birincil kaynaklara atıf yapın, markanızın adını içerik içinde doğal biçimde geçirin ve açık metin formatlaması tercih edin (tablolar, maddeli listeler). E-E-A-T sinyalleri güçlü siteler AI sistemleri tarafından daha sık kaynak gösterilir.",
        },
      },
      {
        "@type": "Question",
        name: "AEO ile featured snippet almak mümkün mü?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Featured snippet (öne çıkan snippet) en temel AEO taktiğidir. Bunun için: hedef soruyu tam metin olarak H2/H3 başlığı yapın, sorunun cevabını hemen altında 40-60 kelimelik özlü bir paragrafta verin, ardından detaylı açıklamaya geçin. FAQ schema markup eklemek, Google'ın içeriğinizi cevap kutusunda kullanma olasılığını önemli ölçüde artırır.",
        },
      },
      {
        "@type": "Question",
        name: "Küçük işletmeler SEO, GEO ve AEO'yu eş zamanlı uygulayabilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, bu üç yaklaşım birbirini destekler ve aynı içerik üzerinde uygulanabilir. Öncelik sırası şu şekilde olabilir: önce teknik SEO altyapısını sağlamlaştırın, sonra her içerik parçasını soru-cevap formatında yapılandırarak AEO'yu entegre edin, son olarak E-E-A-T sinyallerini güçlendirerek GEO için zemin hazırlayın. Doğru bir içerik stratejisiyle tek bir kaliteli yazı, her üç kanalda da görünür olabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Türkçe içerik ChatGPT ve Gemini tarafından kaynak olarak kullanılıyor mu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, ancak İngilizce içeriklere kıyasla daha sınırlı ölçüde. Türkçe pazarda GEO henüz erken aşamada olduğu için rekabet düşük, dolayısıyla şimdi doğru adımları atan markalar önemli bir avantaj yakalayabilir. Yapay zeka modellerinin Türkçe veri setleri giderek genişliyor; yapılandırılmış, güvenilir ve kaynak gösteren Türkçe içerikler bu sistemlerin tercih ettiği formata uyum sağlıyor.",
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
                  SEO &amp; Yapay Zeka
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                SEO, GEO ve AEO Nedir?{" "}
                <span className="text-red-600">
                  Arama Optimizasyonunun Üç Boyutu
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 text-sm">
                <span className="font-medium text-gray-900">Burak Yaba</span>
                <span>•</span>
                <span>6 Mayıs 2026</span>
                <span>•</span>
                <span>25 dk okuma</span>
              </div>
              <div className="relative w-full h-56 sm:h-72 md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/bento/dijital-pazarlama.webp"
                  alt="SEO, GEO ve AEO — Arama Optimizasyonunun Üç Boyutu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-red-500 pl-6 md:pl-10 py-3">
                Yıllardır web tasarım ve SEO alanında çalışıyorum ve son iki
                yılda sektörün en hızlı değişimini yaşadığını söyleyebilirim.
                Google aramalarının yanı sıra insanlar artık ChatGPT&apos;ye,
                Gemini&apos;ye ve Perplexity&apos;ye de danışıyor. Bu yazıda
                SEO, GEO ve AEO kavramlarını gereksiz jargon olmadan, somut
                örneklerle açıklıyorum.
              </p>
            </div>
          </section>

          {/* Article body — two-column on xl screens */}
          <article className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <div className="flex gap-16 items-start">
                {/* ── Main content column ── */}
                <div className="min-w-0 flex-1">
                  {/* --- Section 1: SEO --- */}
                  <h2
                    id="seo-nedir"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    1. SEO (Arama Motoru Optimizasyonu) Nedir?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    SEO, yani Search Engine Optimization, web sitenizin Google,
                    Bing veya Yandex gibi klasik arama motorlarında belirli
                    anahtar kelimeler için organik (reklamsız) sıralamada üst
                    sıralarda yer alması için yapılan çalışmaların tümüdür.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Ben bu işe başladığımda SEO, büyük ölçüde sayfa içi anahtar
                    kelime yoğunluğu ve backlink miktarıyla özetlenebilirdi. O
                    günden bu yana Google 200&apos;den fazla sıralama sinyali
                    kullanan, makine öğrenmesi destekli bir sistem haline geldi.
                    Ama temelde değişmeyen bir şey var: Google kullanıcıya en
                    iyi cevabı vermek istiyor. Siz de buna hizmet eden içerik
                    üretirseniz arama motorları sizi ödüllendiriyor.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    SEO&apos;nun Üç Ana Ayağı
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-2xl mb-3">🔧</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Teknik SEO
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Site hızı, mobil uyumluluk, crawlability, HTTPS, Core
                        Web Vitals, XML sitemap, yapılandırılmış veri. Bunlar
                        olmadan içeriğiniz ne kadar iyi olursa olsun
                        Google&apos;ın gözünden kaçabilir.
                      </p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-2xl mb-3">📝</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        İçerik SEO
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Hedef kitlenizin aradığı soruları yanıtlayan,
                        derinlikli, özgün içerikler. Anahtar kelime araştırması,
                        başlık hiyerarşisi, iç linkleme ve konu otoritesi bu
                        kategoriye girer.
                      </p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6">
                      <div className="text-2xl mb-3">🔗</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Otorite (Off-Page) SEO
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Güvenilir sitelerden alınan backlink&apos;ler, marka
                        söylemleri, sosyal kanıtlar ve dijital PR. Domain
                        otoritesi, özellikle GEO&apos;da da kritik rol oynuyor.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    SEO hâlâ dijital pazarlamanın temel taşı. Müşterilerimizde
                    gözlemlediğim en büyük hata, SEO&apos;nun &quot;bir kere
                    yapılıp biten&quot; bir iş olduğunu sanmak. Oysa arama
                    algoritmaları sürekli güncelleniyor; iyi{" "}
                    <Link
                      href="/hizmetler/dijital-pazarlama"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      dijital pazarlama
                    </Link>{" "}
                    stratejisi bu değişimlere uyum sağlamayı gerektiriyor.
                  </p>

                  {/* --- Section 2: AEO --- */}
                  <h2
                    id="aeo-nedir"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    2. AEO (Cevap Motoru Optimizasyonu) Nedir?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AEO, yani Answer Engine Optimization (Cevap Motoru
                    Optimizasyonu), içeriğinizin doğrudan bir cevap formatında
                    sunulduğu sistemler için optimize edilmesini kapsar. Bu
                    sistemlerin başında Google&apos;ın öne çıkan
                    snippet&apos;leri (featured snippets), &quot;Kişiler Şunu da
                    Sordu&quot; (People Also Ask) kutuları, Google AI Overview
                    ve sesli arama asistanları (Siri, Google Assistant, Alexa)
                    geliyor.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AEO&apos;yu ilk kez duyduğumda &quot;bu zaten SEO&apos;nun
                    bir parçası değil mi?&quot; diye düşünmüştüm. Kısmen evet —
                    ama aradaki fark, hedefte yatıyor. SEO kullanıcıyı sitenize
                    çekmeyi amaçlarken, AEO kullanıcının sorusunu{" "}
                    <em>sitenize gelmesine gerek kalmadan</em> yanıtlamanızı
                    sağlıyor. Bu kulağa paradoksal gelebilir; ama araştırmalar,
                    snippet&apos;te yer alan sayfaların hem marka bilinirliğini
                    artırdığını hem de sesli arama trafiğinden aldığı organik
                    pay sayesinde uzun vadede daha fazla ziyaretçi çektiğini
                    gösteriyor.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    AEO Neden Giderek Daha Kritik Hale Geliyor?
                  </h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Google AI Overview genişliyor:</strong> Google,
                        2024&apos;ün sonundan itibaren AI Overview kutularını
                        Türkçe sorgularda da göstermeye başladı. Bu kutular
                        sayfanın en üstünde yer aldığından, altındaki organik
                        sonuçların tıklanma oranı düşüyor. Ama kaynak olarak
                        gösterilen siteler için durum tam tersi.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Sesli arama büyümeye devam ediyor:</strong>{" "}
                        Akıllı hoparlörler ve mobil asistanlar yalnızca tek bir
                        cevap veriyor. Sesli aramada &quot;mavi linkler&quot;
                        yok; ya sizin içeriğiniz okunuyor ya da rakibinizinki.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">→</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Sıfır tıklama aramaları artıyor:</strong> Bazı
                        analizler, tüm Google aramalarının yarısından fazlasının
                        tıklama olmaksızın sonuçlandığını gösteriyor. Bu ortamda
                        görünür olmanın yolu, cevap formatında olmaktan geçiyor.
                      </span>
                    </li>
                  </ul>

                  {/* --- Section 3: GEO --- */}
                  <h2
                    id="geo-nedir"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    3. GEO (Üretken Motor Optimizasyonu) Nedir?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    GEO, yani Generative Engine Optimization (Üretken Motor
                    Optimizasyonu), içerik ve marka stratejinizin ChatGPT,
                    Google Gemini, Claude, Perplexity ve benzeri büyük dil
                    modellerinin (LLM) ürettiği yanıtlarda kaynak veya öneri
                    olarak yer almasını hedefleyen, görece yeni bir optimizasyon
                    dalıdır.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Dürüst olmak gerekirse, GEO&apos;yu ciddiye almaya
                    başladığım an bir müşterimizin şu sorusuyla oldu:
                    &quot;ChatGPT&apos;ye &apos;Fethiye&apos;de web tasarım
                    ajansı&apos; diye sorduğumda neden rakibimin adı çıkıyor da
                    bizim adımız çıkmıyor?&quot; Bu soru beni uzun süreli bir
                    araştırmaya itti.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    LLM&apos;ler bir soruya yanıt üretirken eğitim verisini,
                    gerçek zamanlı web aramasını (Perplexity, ChatGPT Search,
                    Gemini gibi araçlarda) ve önceki bağlamı kullanır. Sitenizin
                    bu sistemlerde kaynak olarak görünmesi için içeriğinizin şu
                    özellikleri taşıması gerekiyor: güvenilir, alıntılanabilir,
                    yapılandırılmış ve E-E-A-T sinyalleri güçlü.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 md:pl-8 pr-6 py-5 rounded-r-xl mb-10">
                    <p className="text-blue-900 font-semibold mb-2">
                      📌 Önemli Not
                    </p>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      GEO, SEO&apos;dan bağımsız bir strateji değildir. Güçlü
                      bir SEO altyapısı — yüksek domain otoritesi, güvenilir
                      içerik, net yazar kimliği — aynı zamanda en iyi GEO
                      zeminini oluşturur. İkisini birbirinin rakibi gibi görmek
                      yerine, GEO&apos;yu SEO&apos;nun evrilmiş bir uzantısı
                      olarak konumlandırmanızı öneririm.
                    </p>
                  </div>

                  {/* --- Section 4: Differences --- */}
                  <h2
                    id="farklar"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    4. SEO, AEO ve GEO: Temel Farklar ve Örtüşen Noktalar
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Bu üç kavramı yan yana koyduğumuzda hem belirgin
                    farklılıklar hem de güçlü örtüşmeler görüyoruz. Aşağıdaki
                    tablo pratik bir karşılaştırma sunuyor:
                  </p>

                  <div className="overflow-x-auto mb-10">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            Kriter
                          </th>
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            SEO
                          </th>
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            AEO
                          </th>
                          <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                            GEO
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Hedef Platform
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Google, Bing, Yandex
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Featured snippets, AI Overview, sesli arama
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            ChatGPT, Gemini, Claude, Perplexity
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Temel Hedef
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Organik sıralama, tıklama
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Doğrudan cevap vermek, görünürlük
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            LLM yanıtlarında kaynak/marka olarak yer almak
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            İçerik Formatı
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Uzun form, anahtar kelime odaklı
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Soru-cevap, özlü paragraflar
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Modüler, alıntılanabilir, kanıta dayalı
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Başarı Ölçütü
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Sıralama pozisyonu, organik trafik
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Snippet kazanımı, sesli arama payı
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            AI yanıtlarında marka anılması, referans sayısı
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            E-E-A-T Önemi
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Yüksek
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Yüksek
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Çok Yüksek
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Teknik Altyapı
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Zorunlu
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Önemli (schema markup)
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Destekleyici
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            Olgunluk Seviyesi
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Olgun, köklü
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Gelişen
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-gray-700">
                            Erken aşama
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Tabloya bakınca bir şey dikkat çekiyor: üç yaklaşımın ortak
                    paydası <strong>E-E-A-T</strong> (Deneyim, Uzmanlık,
                    Otorite, Güvenilirlik). Google kalite değerlendirmecilerinin
                    kullandığı bu çerçeve, hem klasik arama hem de yapay zeka
                    sistemlerinin içerik seçiminde başvurduğu temel kriter
                    haline geldi.
                  </p>

                  {/* --- Section 5: SEO Strategy --- */}
                  <h2
                    id="seo-stratejisi"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    5. SEO Stratejisi: 2026&apos;da Hâlâ Geçerli Olan Temeller
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    GEO ve AEO&apos;nun yükselişi, bazı kesimlerde &quot;SEO
                    öldü&quot; söylemini beraberinde getirdi. Bu fikre
                    katılmıyorum — ve rakamlar da katılmıyor. Organik arama hâlâ
                    dönüşüm getiren en büyük trafik kanallarından biri.{" "}
                    <Link
                      href="/hizmetler/seo-uyumlu-web-sitesi"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      SEO uyumlu bir web sitesi
                    </Link>{" "}
                    olmadan dijital görünürlük inşa etmek, sağlam temeli olmayan
                    bir bina dikmek gibidir.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    2026 SEO Öncelikleri
                  </h3>
                  <ul className="space-y-5 mb-10">
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Topical Authority (Konu Otoritesi):
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          Tek tek anahtar kelimeleri değil, bir konuyu bütünsel
                          olarak işleyin. Örneğin sadece &quot;web tasarım
                          fiyatları&quot; değil, web tasarım sürecinin her
                          yönünü ele alan birbirine bağlı bir içerik kümesi
                          oluşturun. Google bu konu derinliğini otoriteyle
                          özdeşleştiriyor.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Kullanıcı Amacına (Search Intent) Uyum:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          Anahtar kelime araştırmasından önce niyeti anlayın.
                          &quot;Web tasarım fiyatları&quot; arayan biri ne
                          istiyor — bütçe planlaması mı, karşılaştırma mı, yoksa
                          hemen bir teklif almak mı? İçeriğinizin formatını ve
                          derinliğini bu niyete göre belirleyin.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Core Web Vitals ve Sayfa Deneyimi:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          LCP, INP ve CLS metriklerini hedef değerlerde tutun.
                          Google&apos;ın sıralama faktörlerinde sayfa
                          deneyiminin ağırlığı artmaya devam ediyor. Özellikle
                          mobil performans kritik — Türkiye&apos;de web
                          trafiğinin büyük çoğunluğu mobil cihazlardan geliyor.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                        4
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          İç Linkleme Stratejisi:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          Birbirine bağlı içerik kümeleri (content clusters),
                          hem kullanıcı deneyimini hem de Google&apos;ın site
                          yapısını anlama kapasitesini artırıyor. Her yeni
                          içerik, mevcut sayfalardan contextual linklerle
                          desteklenmelidir.
                        </p>
                      </div>
                    </li>
                  </ul>

                  {/* --- Section 6: AEO Strategy --- */}
                  <h2
                    id="aeo-stratejisi"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    6. AEO Stratejisi: Doğrudan Cevap Kutularına Girmek
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    AEO&apos;nun özü şu: kullanıcı bir soru soruyor ve Google
                    (veya başka bir sistem) en doğru, en açık cevabı en az
                    çabayla bulunan sayfadan seçiyor. Sayfa hiyerarşinizi ve
                    içerik formatınızı buna göre düzenlemek, snippet&apos;lere
                    giden en kısa yol.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    Pratik AEO Taktikleri
                  </h3>

                  <div className="space-y-6 mb-10">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        📋 Soru-Cevap Formatı
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        Hedef soruyu tam metin olarak H2 veya H3 başlığı yapın.
                        Hemen altında 40–60 kelimelik özlü bir cevap paragrafı
                        yazın. Sonrasında detaylandırabilirsiniz, ama cevabı öne
                        koyun. Bunu &quot;inverted pyramid&quot; (ters piramit)
                        yazı stili olarak düşünebilirsiniz.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-800">
                        <p className="text-green-700 font-bold">
                          ✅ İyi Örnek:
                        </p>
                        <p className="mt-1">
                          H2: Web Tasarım Fiyatları Ne Kadar?
                        </p>
                        <p className="mt-1 text-gray-600">
                          &quot;Türkiye&apos;de kurumsal web sitesi fiyatları
                          2026 yılında 15.000 – 150.000 TL arasında değişiyor.
                          Fiyatı belirleyen başlıca faktörler şunlardır:
                          [liste]...&quot;
                        </p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        🏷️ Schema Markup (Yapılandırılmış Veri)
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        FAQ, HowTo, Article ve BreadcrumbList schema&apos;ları
                        eklemek, Google&apos;ın içeriğinizin yapısını anlamasını
                        kolaylaştırır. Bu sayfada kullandığım FAQPage
                        schema&apos;sı buna somut bir örnek. Yapılandırılmış
                        veri, AI Overview&apos;a girme olasılığınızı doğrudan
                        artıran en somut teknik adımlardan biridir.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        🎙️ Sesli Arama Optimizasyonu
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Sesli aramalar konuşma dilinde yapılır. &quot;web
                        tasarım fiyatı&quot; yerine &quot;web sitesi yaptırmak
                        ne kadar tutar?&quot; formatında sorguları hedefleyin.
                        Yerel işletmeler için &quot;yakınımdaki web tasarım
                        ajansı&quot; gibi konum bazlı sorgular kritik önem
                        taşıyor. Google My Business profilinizin eksiksiz olması
                        bu trafiği yakalamanın önkoşulu.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        📊 &quot;People Also Ask&quot; Fırsatları
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Google&apos;ın &quot;Kişiler Şunu da Sordu&quot;
                        kutuları, hedeflediğiniz anahtar kelimenin etrafındaki
                        ilgili soruları keşfetmek için altın bir kaynaktır. Bu
                        soruları sistematik biçimde cevaplayarak hem AEO hem de
                        içerik derinliği elde edersiniz. Bir içeriğin bu kutuda
                        yer alması, sayfanın birkaç pozisyon yukarı çıkmasından
                        daha değerli olabilir.
                      </p>
                    </div>
                  </div>

                  {/* --- Section 7: GEO Strategy --- */}
                  <h2
                    id="geo-stratejisi"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    7. GEO Stratejisi: Yapay Zeka Yanıtlarında Kaynak Olmak
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Şunu açıkça söylemek istiyorum: GEO, SEO gibi doğrudan
                    ölçülebilen mekaniklere sahip değil. ChatGPT&apos;nin hangi
                    siteleri kaynak seçtiğini belirleyen algoritmayı birebir
                    bilemiyoruz. Ama pratikte neyin işe yaradığını gösteren
                    yeterince ipucu var.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    GEO İçin Kanıtlanmış Yaklaşımlar
                  </h3>
                  <ul className="space-y-5 mb-10">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-lg mt-0.5">
                        ①
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Alıntılanabilir İstatistikler ve Birincil Veriler:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed text-sm">
                          LLM&apos;ler, somut rakamlar içeren içerikleri
                          özellikle tercih ediyor. &quot;E-ticaret siteleri
                          yavaş yüklenmeden kaynaklanan sepet terkini %70&apos;e
                          kadar azaltabilir&quot; gibi spesifik veriler, hem
                          okuyucunun güvenini hem de yapay zekanın sizi kaynak
                          seçme olasılığını artırıyor. Kendi müşteri
                          verilerinizden ürettiğiniz istatistikler en değerli
                          olanlar — çünkü benzersiz ve doğrulanamaz, bu da AI
                          sistemlerinin sizi özgün kaynak olarak
                          nitelendirmesine yol açıyor.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-lg mt-0.5">
                        ②
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Marka Adını İçerik İçinde Doğal Geçirin:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed text-sm">
                          Yapay zeka modelleri, bir markanın web varlığında
                          tutarlı biçimde anıldığını fark ediyor. Kendi
                          içeriklerinizde, müşteri yorumlarında, basın
                          haberlerinde ve sektör listelerinde markanızın adının
                          geçmesi, GEO&apos;nun en güçlü sinyallerinden biri.
                          &quot;WebCraft olarak bu projede şunu yaptık&quot;
                          biçimindeki doğal atıflar, anonim &quot;ajans&quot;
                          veya &quot;biz&quot; ifadelerinden çok daha etkili.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-lg mt-0.5">
                        ③
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Modüler ve Bağımsız İçerik Blokları:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed text-sm">
                          LLM&apos;ler içeriğinizin bir bölümünü keserek
                          yanıtlarına ekleyebilir. Bu nedenle her H2 bölümünün,
                          sayfanın geri kalanından bağımsız okunduğunda da anlam
                          ifade etmesi gerekiyor. &quot;Yukarıda belirtildiği
                          gibi&quot; veya &quot;Daha önce bahsettiğimiz&quot;
                          gibi geçişler yerine her bölümde bağlamı yeniden
                          kurun.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-lg mt-0.5">
                        ④
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Güvenilir Harici Kaynak Gösterme:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed text-sm">
                          Google, Search Engine Journal, Moz veya Think with
                          Google gibi otoriter kaynaklara atıf yapmak,
                          içeriğinizin güvenilirliğini artırıyor. Bu aynı
                          zamanda okuyucuya da yararlanabileceği ek kaynaklar
                          sunuyor — Google&apos;ın yardımsever içerik kriterinin
                          tam merkezinde bu var.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-lg mt-0.5">
                        ⑤
                      </span>
                      <div>
                        <strong className="text-gray-900">
                          Wikipedia ve Wikidata Varlığı:
                        </strong>
                        <p className="text-gray-700 mt-1 leading-relaxed text-sm">
                          LLM&apos;lerin eğitim verilerinde Wikipedia büyük yer
                          tutuyor. Markanız veya sektörünüzle ilgili Wikipedia
                          sayfalarının doğru bilgi içermesi, GEO açısından göz
                          ardı edilmemesi gereken bir faktör. Kendiniz
                          Wikipedia&apos;ya yazamassınız; ancak sektörle ilgili
                          konuları ele alan sayfalara güvenilir kaynak olarak
                          eklenebilirsiniz.
                        </p>
                      </div>
                    </li>
                  </ul>

                  {/* --- Section 8: Together --- */}
                  <h2
                    id="birlikte"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    8. Üç Yaklaşımı Bir Arada Kullanmak
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Müşterilerimle çalışırken en sık sorduğum soru şu:
                    &quot;Sınırlı kaynakla başlangıç noktası neresi
                    olmalı?&quot; Cevabım değişmeden kalıyor: SEO olmadan
                    GEO&apos;ya sıçramak, henüz yürümeyi öğrenmeden koşmaya
                    çalışmak gibidir. Önce teknik altyapıyı ve içerik kalitesini
                    oturtunsunuz, AEO ve GEO kendiliğinden gelişmeye başlar.
                  </p>

                  <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 mb-10">
                    <h3 className="text-xl font-bold mb-6 text-red-400">
                      Önerilen Uygulama Sırası
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          1
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            Teknik SEO altyapısını sağlamlaştırın
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Site hızı, mobil uyumluluk, canonicalization, XML
                            sitemap, robots.txt
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          2
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            Konu otoritesi inşa edin
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Birbirine bağlı içerik kümeleri, derinlikli
                            rehberler, özgün bakış açısı
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          3
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            Her içeriği AEO prensiplerine göre formatlayın
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Soru-cevap yapısı, FAQ schema, soru başlıkları, özlü
                            cevap paragrafları
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          4
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            E-E-A-T sinyallerini güçlendirin
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Gerçek yazar biyografileri, birincil veri, harici
                            atıflar, marka bilinirliği
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          5
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            GEO sinyallerini yerleştirin
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Alıntılanabilir istatistikler, marka adı
                            tutarlılığı, modüler içerik blokları
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="bg-red-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          6
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            Ölçün ve uyarlayın
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            GSC raporları, AI Overview izleme, markanızı AI
                            araçlarında test etme
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Bu stratejiyi bir müşterimizle uyguladığımızda şöyle bir
                    sonuç gördük: teknik SEO düzenlemelerini tamamladıktan ve
                    içerikleri AEO formatında yeniden yazmanın ardından üç ay
                    içinde birkaç hedef anahtar kelimede featured snippet aldık.
                    Altı ay sonra, müşterimizi bana anlatan bir yeni müşteri
                    &quot;ChatGPT&apos;de araştırırken sizi gördüm&quot; dedi.
                    GEO&apos;nun etkisi ölçülmesi güç ama somut.
                  </p>

                  {/* --- Section 9: Mistakes --- */}
                  <h2
                    id="hatalar"
                    className="text-3xl font-bold text-gray-900 mt-14 mb-6 scroll-mt-24"
                  >
                    9. Yaygın Hatalar ve Kaçınılması Gerekenler
                  </h2>

                  <div className="space-y-5 mb-10">
                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          &quot;AI trafik çalmadan önce hızlı içerik
                          üretelim&quot; panik stratejisi
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Google&apos;ın yardımsever içerik kılavuzu bunu açıkça
                          söylüyor: hacim değil, kalite. Düşük kaliteli, hızla
                          üretilmiş içerikler hem SEO&apos;ya hem de GEO&apos;ya
                          zarar verir. Yapay zeka modelleri ince içerikleri
                          kaynak olarak seçmiyor; seçmiş gibi görünse bile bu
                          alıntılar sitenize güvenilirlik değil itibar kaybı
                          getirebilir.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          Anonim içerik üretmek
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          &quot;Yazar: Admin&quot; veya hiç yazar bilgisi
                          olmayan içerikler, E-E-A-T açısından kör noktadır.
                          Google kalite değerlendirmecileri, yazarın gerçek bir
                          kişi olup olmadığını ve o konuda uzmanlığı bulunup
                          bulunmadığını kontrol ediyor. Ben de kendi bloglarıma
                          ve müşteri içeriklerine her zaman gerçek yazar bilgisi
                          ve kısa biyografi ekliyorum.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          Yalnızca featured snippet&apos;e odaklanıp içerik
                          derinliğini ihmal etmek
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Snippet kazanmak için özlü cevap vermek şart; ama
                          sayfanın geri kalanının değersiz olması, kullanıcı
                          sayfaya geldiğinde hayal kırıklığı yaratır. Hemen
                          çıkma oranı yükselirse Google snippet&apos;i geri
                          alır. AEO ve kullanıcı deneyimi birbirini
                          desteklemeli, birbirinin kurbanı olmamalı.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-red-50 rounded-xl p-5">
                      <span className="text-2xl shrink-0">❌</span>
                      <div>
                        <strong className="text-gray-900 block mb-1">
                          GEO&apos;yu ölçülemez saydığı için yok saymak
                        </strong>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          &quot;Bunu nasıl ölçeceğiz?&quot; sorusu meşru; ancak
                          cevap &quot;hiç uğraşmayalım&quot; olmamalı. Markanızı
                          ve rakiplerinizi düzenli olarak ChatGPT, Gemini ve
                          Perplexity&apos;de test edin. Hangi soruların hangi
                          kaynakları önerdiğini kaydedin. Bu basit izleme, GEO
                          yolculuğunuzun en değerli verisi olacak.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 md:p-8 mb-14 text-center">
                    <h3 className="text-2xl font-bold mb-3">
                      SEO, GEO ve AEO stratejinizi birlikte planlayalım
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                      WebCraft olarak sadece web sitesi değil, arama
                      ekosisteminin her katmanında görünür bir dijital varlık
                      inşa ediyoruz.
                    </p>
                    <Link
                      href="/iletisim"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                      Ücretsiz Strateji Görüşmesi
                    </Link>
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
                        q: "SEO, GEO ve AEO arasındaki temel fark nedir?",
                        a: "SEO, Google gibi klasik arama motorlarında organik sıralama elde etmeye odaklanır. AEO, öne çıkan snippet'ler, AI Overview ve sesli arama gibi doğrudan cevap veren sistemler için optimize etmeyi kapsar. GEO ise ChatGPT, Gemini ve Perplexity gibi yapay zeka araçlarının ürettiği yanıtlarda kaynak olarak görünmeyi hedefler. Üçü birbirini dışlamaz; en etkili strateji, bu yaklaşımları birlikte uygulamaktır.",
                      },
                      {
                        q: "GEO stratejisi için içerik nasıl yazılmalıdır?",
                        a: "Her bölümün bağımsız okunduğunda da anlam taşıdığı modüler bir yapı kullanın. İstatistiklere ve birincil kaynaklara atıf yapın. Markanızın adını içerik içinde doğal biçimde geçirin. Tablolar ve maddeli listeler gibi açık metin formatlaması tercih edin. Güçlü E-E-A-T sinyalleri (gerçek yazar, birinci elden deneyim, harici atıflar) taşıyan siteler AI sistemleri tarafından daha sık kaynak gösterilir.",
                      },
                      {
                        q: "AEO ile featured snippet almak mümkün mü?",
                        a: "Evet. Featured snippet en temel AEO taktiğidir. Hedef soruyu tam metin olarak H2/H3 başlığı yapın, sorunun cevabını hemen altında 40–60 kelimelik özlü bir paragrafta verin, ardından detaylı açıklamaya geçin. FAQ schema markup eklemek, Google'ın içeriğinizi cevap kutusunda kullanma olasılığını önemli ölçüde artırır.",
                      },
                      {
                        q: "Küçük işletmeler SEO, GEO ve AEO'yu eş zamanlı uygulayabilir mi?",
                        a: "Evet, bu üç yaklaşım birbirini destekler ve aynı içerik üzerinde uygulanabilir. Önce teknik SEO altyapısını sağlamlaştırın, sonra içerikleri soru-cevap formatında yazarak AEO'yu entegre edin, ardından E-E-A-T sinyallerini güçlendirerek GEO zemini hazırlayın. Doğru bir içerik stratejisiyle tek bir kaliteli yazı, her üç kanalda da görünür olabilir.",
                      },
                      {
                        q: "Türkçe içerik ChatGPT ve Gemini tarafından kaynak olarak kullanılıyor mu?",
                        a: "Evet, ancak İngilizce içeriklere kıyasla daha sınırlı ölçüde. Türkçe pazarda GEO henüz erken aşamada olduğu için rekabet düşük; şimdi doğru adımları atan markalar önemli bir avantaj yakalayabilir. Yapılandırılmış, güvenilir ve kaynak gösteren Türkçe içerikler, bu sistemlerin giderek büyüyen Türkçe veri setine daha fazla katkıda bulunuyor.",
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
                        KÖ
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">
                          Kubilay Özışık
                        </p>
                        <p className="text-red-600 text-sm font-medium mt-1">
                          WebCraft — SEO &amp; Dijital Büyüme Uzmanı
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      6 yılı aşkın süre boyunca Türkiye genelinde işletmelerin
                      organik arama görünürlüğünü büyüttüm. Teknik SEO, içerik
                      stratejisi ve anahtar kelime araştırması alanlarında
                      uzmanlaştım.{" "}
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
                    Yayın tarihi: 6 Mayıs 2026 • Bu yazı yazar tarafından
                    birinci elden deneyim ve araştırma temelinde hazırlanmıştır.
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
            currentSlug="seo-geo-aeo-nedir"
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

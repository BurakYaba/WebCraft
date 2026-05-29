import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  BarChart2,
  Layers,
  Search,
  Smartphone,
} from "lucide-react";

export default function HomeInfoSection() {
  const processSteps = [
    {
      step: "01",
      title: "Ücretsiz Keşif & Analiz",
      desc: "İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. İhtiyaçlarınızı anlamak için kapsamlı bir keşif görüşmesi yapıyoruz.",
      color: "text-red-500",
    },
    {
      step: "02",
      title: "Strateji & Tasarım",
      desc: "SEO uyumlu, dönüşüm odaklı ve markaya özel bir web sitesi stratejisi geliştiriyoruz. Kullanıcı deneyimini ön planda tutan tasarımlar hazırlıyoruz.",
      color: "text-orange-500",
    },
    {
      step: "03",
      title: "Geliştirme & Test",
      desc: "Tasarımı hız optimizasyonlu, mobil uyumlu ve Core Web Vitals gereksinimlerini karşılayan bir web sitesine dönüştürüyoruz.",
      color: "text-yellow-500",
    },
    {
      step: "04",
      title: "Yayın & SEO Kurulumu",
      desc: "Web sitenizi yayına alıyoruz, Google Search Console ve Analytics kurulumunu yapıyoruz, teknik SEO temelini atıyoruz.",
      color: "text-green-500",
    },
    {
      step: "05",
      title: "Büyüme & Destek",
      desc: "Sürekli SEO optimizasyonu, içerik güncellemeleri ve teknik destek ile web sitenizin büyümesini birlikte yönetiyoruz.",
      color: "text-blue-500",
    },
  ];

  const caseStudies = [
    {
      sector: "Turizm",
      client: "Fethiye Otel",
      metric: "+%320",
      metricLabel: "Organik Trafik",
      period: "6 ayda",
      desc: "Teknik SEO ve yerel SEO çalışmalarıyla ilk 3 sıraya girdi.",
    },
    {
      sector: "E-ticaret",
      client: "Online Mağaza",
      metric: "+%185",
      metricLabel: "Organik Satış",
      period: "12 ayda",
      desc: "150+ ürün sayfasında üst sayfa sıralaması elde edildi.",
    },
    {
      sector: "KOBİ",
      client: "Muğla Hukuk Bürosu",
      metric: "+%240",
      metricLabel: "Organik Lead",
      period: "9 ayda",
      desc: "Yerel SEO ve E-E-A-T içerik stratejisiyle bölgesel 1. sayfaya çıktı.",
    },
  ];

  return (
    <>
      {/* ── Web Tasarım Ajansı Nedir? ───────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
                Neden WebCraft?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
                Web Tasarım Ajansı Nedir ve Neden Gereklidir?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Profesyonel bir <strong>web tasarım ajansı</strong>, işletmenizin
                dijital yüzünü oluşturur; modern, hızlı ve SEO uyumlu web
                siteleri tasarlayarak potansiyel müşterilerinizi siteye çeker ve
                dönüşüme yönlendirir.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kendi başınıza bir web sitesi kurabilirsiniz — ancak Wix veya
                Squarespace gibi hazır platformlar çoğunlukla yavaş, SEO açısından
                zayıf ve markanıza özgü değildir. WebCraft gibi bir ajans; hız,
                güvenlik, SEO ve kullanıcı deneyimini birlikte optimize ederek
                uzun vadede daha yüksek organik trafik ve dönüşüm sağlar.
              </p>
              <div className="space-y-3">
                {[
                  "Markanıza özel tasarım, hazır şablon değil",
                  "Core Web Vitals optimizasyonu ile hız",
                  "Teknik SEO temelli, Google'a uyumlu yapı",
                  "Mobil öncelikli (mobile-first) geliştirme",
                  "Güvenlik, bakım ve sürekli destek",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Globe className="w-6 h-6 text-red-600" />,
                  title: "Web Tasarım",
                  desc: "Markanıza özel, modern ve dönüşüm odaklı web siteleri",
                  href: "/hizmetler/web-tasarim",
                },
                {
                  icon: <Search className="w-6 h-6 text-red-600" />,
                  title: "SEO Hizmeti",
                  desc: "Google'da üst sıralara çıkmak için kapsamlı optimizasyon",
                  href: "/hizmetler/seo-hizmeti",
                },
                {
                  icon: <Zap className="w-6 h-6 text-red-600" />,
                  title: "Dijital Pazarlama",
                  desc: "Sosyal medya, içerik ve performans pazarlama",
                  href: "/hizmetler/dijital-pazarlama",
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-red-600" />,
                  title: "Mobil Uygulama",
                  desc: "iOS ve Android için kullanıcı dostu mobil uygulamalar",
                  href: "/hizmetler/mobil-uygulama",
                },
              ].map(({ icon, title, desc, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-red-200 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Çalışma Sürecimiz ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#181716]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
              Nasıl Çalışıyoruz?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Çalışma Sürecimiz
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              İlk görüşmeden yayına — şeffaf, sonuç odaklı ve işbirlikçi bir süreç.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map(({ step, title, desc, color }) => (
              <div
                key={step}
                className="flex gap-6 bg-[#1a1918] rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors"
              >
                <div
                  className={`text-4xl font-bold ${color} flex-shrink-0 w-12 text-center leading-none pt-1`}
                >
                  {step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold"
            >
              Ekibimiz hakkında daha fazla bilgi{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Başarı Hikayeleri ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
              Kanıtlanmış Sonuçlar
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
              Müşterilerimizin Başarı Hikayeleri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gerçek projeler, gerçek sonuçlar. İşte WebCraft&apos;ın müşteri
              başarılarından örnekler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map(
              ({ sector, client, metric, metricLabel, period, desc }) => (
                <div
                  key={client}
                  className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
                >
                  <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-3">
                    {sector}
                  </div>
                  <div className="font-semibold text-gray-900 mb-4">{client}</div>
                  <div className="text-4xl font-bold text-red-600 mb-1">
                    {metric}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {metricLabel} — {period}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              )
            )}
          </div>

          <div className="text-center">
            <Link
              href="/islerimiz"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Tüm Projelerimizi İnceleyin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fiyat Rehberi ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#181716]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
              Fiyatlandırma
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Web Tasarım Fiyatları
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Her bütçeye uygun, şeffaf fiyatlandırma. İhtiyacınıza göre
              özelleştirilmiş teklif için iletişime geçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "Başlangıç",
                price: "15.000 TL",
                desc: "Küçük işletmeler ve kişisel markalar için",
                features: [
                  "5–10 sayfa, responsive tasarım",
                  "Temel SEO kurulumu",
                  "İletişim formu",
                  "3 ay teknik destek",
                ],
                cta: "Teklif Al",
                highlight: false,
              },
              {
                name: "Kurumsal",
                price: "35.000 TL",
                desc: "Büyüyen KOBİ ve kurumsal şirketler için",
                features: [
                  "15–30 sayfa, özel tasarım",
                  "Kapsamlı SEO optimizasyonu",
                  "Blog / içerik yönetimi",
                  "Performans optimizasyonu",
                  "1 yıl teknik destek",
                ],
                cta: "Hemen Başlayalım",
                highlight: true,
              },
              {
                name: "E-ticaret",
                price: "50.000 TL+",
                desc: "Online mağaza ve e-ticaret platformları için",
                features: [
                  "Sınırsız ürün, özel e-ticaret tasarımı",
                  "Ödeme entegrasyonu",
                  "E-ticaret SEO",
                  "Stok ve sipariş yönetimi",
                  "Öncelikli destek",
                ],
                cta: "Özel Teklif Al",
                highlight: false,
              },
            ].map(({ name, price, desc, features, cta, highlight }) => (
              <div
                key={name}
                className={`rounded-xl p-8 ${highlight ? "bg-red-600 text-white" : "bg-[#1a1918] border border-gray-800 text-white"}`}
              >
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p
                  className={`text-sm mb-4 ${highlight ? "text-red-100" : "text-gray-400"}`}
                >
                  {desc}
                </p>
                <div className="text-3xl font-bold mb-6">
                  {price}
                  <span
                    className={`text-sm font-normal ml-1 ${highlight ? "text-red-200" : "text-gray-400"}`}
                  >
                  &apos;den başlayan
                  </span>
                </div>
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? "text-red-200" : "text-green-500"}`}
                      />
                      <span
                        className={highlight ? "text-red-50" : "text-gray-300"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className={`block text-center font-bold py-3 px-6 rounded-full transition-all ${highlight ? "bg-white text-red-600 hover:bg-red-50" : "border border-gray-700 text-white hover:border-gray-500"}`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm">
            Fiyatlar KDV hariçtir. Daha fazla bilgi için{" "}
            <Link
              href="/blog/web-tasarim-fiyatlari"
              className="text-red-500 hover:underline"
            >
              Web Tasarım Fiyatları rehberimizi
            </Link>{" "}
            inceleyin.
          </p>
        </div>
      </section>

      {/* ── SEO Ajansı & Uzmanı Vurgusu ─────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/seo-ajansi"
              className="group flex gap-5 items-start bg-gray-50 border border-gray-200 rounded-xl p-7 hover:border-red-200 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart2 className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  SEO Ajansı Hizmetleri
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Google&apos;da üst sıralarda yer alın. Teknik SEO, içerik
                  stratejisi ve link building ile organik trafiğinizi katlayın.
                </p>
                <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold">
                  SEO Ajansı sayfamız <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>

            <Link
              href="/seo-uzmani"
              className="group flex gap-5 items-start bg-gray-50 border border-gray-200 rounded-xl p-7 hover:border-red-200 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  SEO Uzmanı Desteği
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Deneyimli SEO uzmanı ekibimizle tanışın. Sitenizi zirveye
                  taşımak için kişisel danışmanlık ve strateji geliştirme.
                </p>
                <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold">
                  SEO Uzmanı sayfamız <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

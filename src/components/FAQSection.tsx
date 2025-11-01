"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Web tasarım hizmeti ne kadar sürer?",
    answer:
      "Web tasarım projesi süresi, projenin kapsamına ve karmaşıklığına bağlıdır. Basit kurumsal web siteleri 2-4 hafta içinde, e-ticaret siteleri 4-8 hafta içinde tamamlanır. Profesyonel ekibimiz, belirlediğiniz teslim tarihine uygun olarak projeleri zamanında teslim eder.",
  },
  {
    question: "Web tasarım fiyatları nasıl belirlenir?",
    answer:
      "Web tasarım fiyatları projenin kapsamına, özelliklerine ve ihtiyaçlarınıza göre belirlenir. Her proje özel olarak değerlendirilir ve size en uygun teklif sunulur. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
  },
  {
    question: "SEO hizmeti ile Google'da üst sıralarda yer alabilir miyim?",
    answer:
      "Evet, profesyonel SEO hizmetimiz ile web siteniz Google'da üst sıralarda yer alabilir. SEO uzman ekibimiz, arama motoru algoritmalarını yakından takip ederek web sitenizi optimize eder. Organik trafiğinizi artırmak için site içi ve site dışı SEO teknikleri uygularız.",
  },
  {
    question: "Mobil uyumlu web tasarım yapıyor musunuz?",
    answer:
      "Evet, tüm web sitelerimiz responsive (mobil uyumlu) olarak tasarlanır. Modern web tasarım standartlarına uygun olarak, web siteleriniz masaüstü, tablet ve mobil cihazlarda mükemmel görünür ve çalışır.",
  },
  {
    question: "Web tasarım projesi sonrası destek veriyor musunuz?",
    answer:
      "Evet, web tasarım projesi teslim sonrası teknik destek sağlıyoruz. Bakım ve güncelleme paketlerimiz ile web sitenizin güvenliğini, performansını ve içeriklerini sürekli güncel tutuyoruz. 7/24 destek hizmetimiz ile her zaman yanınızdayız.",
  },
  {
    question: "E-ticaret web sitesi için hangi ödeme sistemlerini entegre edebilirsiniz?",
    answer:
      "E-ticaret web siteleriniz için tüm popüler ödeme sistemlerini entegre edebiliriz. İyzico, PayTR, PayU, Stripe gibi ödeme sistemleri ile çalışıyoruz. Ayrıca, banka kartları ve havale/EFT ödeme seçenekleri de mevcuttur.",
  },
  {
    question: "Web tasarım projesi için içerik sağlıyor musunuz?",
    answer:
      "Evet, web tasarım projeniz için profesyonel içerik yazım hizmeti sunuyoruz. SEO uyumlu metin yazımı, görsel içerik oluşturma ve sosyal medya içerikleri hazırlıyoruz. İsterseniz, kendi içeriklerinizi de kullanabilirsiniz.",
  },
  {
    question: "Web sitesi tasarımında hangi teknolojileri kullanıyorsunuz?",
    answer:
      "Modern web teknolojileri kullanıyoruz. Next.js, React, TypeScript gibi güncel teknolojiler ile performanslı ve SEO uyumlu web siteleri geliştiriyoruz. Ayrıca, WordPress, Shopify gibi CMS sistemleri ile de çalışıyoruz.",
  },
  {
    question: "Sosyal medya yönetimi hizmeti veriyor musunuz?",
    answer:
      "Evet, profesyonel sosyal medya yönetimi hizmeti sunuyoruz. Instagram, Facebook, LinkedIn, Twitter gibi platformlarda içerik oluşturma, paylaşım planlaması ve topluluk yönetimi hizmetleri sağlıyoruz. Markanızın sosyal medya varlığını güçlendiriyoruz.",
  },
  {
    question: "Web tasarım ajansınız nerede bulunuyor?",
    answer:
      "WebCraft web tasarım ajansı Fethiye - Muğla'da bulunuyor. Ancak, Türkiye genelinde ve uluslararası müşterilere uzaktan web tasarım, SEO ve dijital pazarlama hizmetleri sunuyoruz. Online toplantılar ve dijital iletişim kanalları ile projelerimizi yürütüyoruz.",
  },
  {
    question: "Web sitesi tasarımında copyright ve telif hakları nasıl işliyor?",
    answer:
      "Tamamlanan web tasarım projesi, proje sahibinin mülkiyetindedir. Tasarım hakları, içerik hakları ve kod hakları müşteriye aittir. Ancak, kullandığımız üçüncü parti yazılımlar ve görseller için gerekli lisansları temin ediyoruz.",
  },
  {
    question: "Web tasarım projesi için ödeme planı yapıyor musunuz?",
    answer:
      "Evet, web tasarım projeleri için esnek ödeme planları sunuyoruz. Genellikle %50 peşin, %50 teslim şeklinde çalışıyoruz. Daha büyük projeler için taksitli ödeme planları da mevcuttur. Ödeme şekillerini proje kapsamına göre birlikte belirliyoruz.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan
              <br />
              <span className="text-red-500">Sorular</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Web tasarım, SEO hizmeti ve dijital pazarlama hakkında merak
              ettiğiniz soruların cevapları
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-red-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Aradığınız cevabı bulamadınız mı?
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Bize Sorun
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}


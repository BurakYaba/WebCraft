export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  heroImage: string;
  watermark: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string;

  // Content sections
  whatSection: {
    title: string;
    content: string;
  };
  whySection: {
    title: string;
    content: string;
    benefits: string[];
  };
  features: ServiceFeature[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];

  // E-E-A-T
  experienceYears: number;
  projectCount: string;
  expertise: string[];

  // Related services
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "web-tasarim",
    title: "Web Tasarım",
    shortTitle: "Web Tasarım",
    description:
      "Modern ve kullanıcı dostu web siteleri tasarlıyoruz. Responsive tasarım, UI/UX optimizasyonu ve SEO dostu yapı ile markanızı dijital dünyada güçlü bir şekilde temsil ediyoruz.",
    excerpt:
      "Profesyonel web tasarım hizmeti ile modern, responsive ve SEO uyumlu web siteleri oluşturuyoruz. 2015 yılından bu yana 200+ başarılı proje tamamladık.",
    heroImage: "/bento/web-tasarım.jpg",
    watermark: "W",

    metaTitle:
      "Web Tasarım Hizmeti | Profesyonel Web Sitesi Tasarımı | WebCraft",
    metaDescription:
      "Profesyonel web tasarım hizmeti. Modern, responsive ve SEO uyumlu web siteleri. UI/UX optimizasyonu ve performans odaklı çözümler. 2015'ten beri 200+ başarılı proje.",
    keywords:
      "web tasarım, profesyonel web tasarım, web sitesi tasarımı, responsive web tasarım, modern web sitesi, UI/UX tasarım, SEO uyumlu web tasarım",

    whatSection: {
      title: "Web Tasarım Nedir?",
      content: `Web tasarım, bir web sitesinin görsel ve fonksiyonel özelliklerinin planlanması, tasarlanması ve geliştirilmesi sürecidir. Profesyonel web tasarım, sadece görsel olarak çekici bir site oluşturmak değil, aynı zamanda kullanıcı deneyimini (UX) optimize etmek, arama motorları için optimize etmek (SEO) ve işletmenizin dijital hedeflerine ulaşmasını sağlamaktır.

WebCraft olarak, 2015 yılından bu yana web tasarım alanında uzmanlaşmış bir ekibiz. Modern teknolojiler (Next.js, React, TypeScript) kullanarak, performanslı, güvenli ve SEO uyumlu web siteleri geliştiriyoruz. Her projede, müşterilerimizin ihtiyaçlarına özel çözümler sunuyor ve dijital varlıklarını güçlendiriyoruz.

Profesyonel web tasarımımız şunları içerir:
- Responsive (mobil uyumlu) tasarım
- Kullanıcı deneyimi (UX) optimizasyonu
- Arama motoru optimizasyonu (SEO)
- Hızlı yükleme süreleri
- Modern ve çekici görsel tasarım
- Güvenlik standartları
- Kolay içerik yönetimi`,
    },

    whySection: {
      title: "Neden Profesyonel Web Tasarım?",
      content: `Profesyonel web tasarım, işletmenizin dijital dünyadaki yüzüdür. İlk izlenim çok önemlidir ve web siteniz, potansiyel müşterilerinizin sizin hakkınızda ilk bilgi edindikleri yerdir. İyi tasarlanmış bir web sitesi, müşteri güvenini artırır, marka değerinizi yükseltir ve işletmenizin büyümesine katkıda bulunur.`,
      benefits: [
        "Müşteri güveni ve kredibilite artışı",
        "Arama motorlarında üst sıralarda yer alma (SEO)",
        "Mobil kullanıcılar için optimize edilmiş deneyim",
        "Hızlı yükleme süreleri ile kullanıcı memnuniyeti",
        "Marka kimliğinizi yansıtan profesyonel görünüm",
        "Dönüşüm oranlarını artıran tasarım",
        "Güvenli ve güncel teknolojiler",
        "Sürekli destek ve bakım hizmetleri",
      ],
    },

    features: [
      {
        title: "Responsive Tasarım",
        description:
          "Tüm cihazlarda (masaüstü, tablet, mobil) mükemmel görünüm ve kullanıcı deneyimi sağlayan responsive web tasarımı.",
      },
      {
        title: "UI/UX Optimizasyonu",
        description:
          "Kullanıcı odaklı tasarım yaklaşımı ile sezgisel navigasyon ve kolay kullanım sağlayan arayüz tasarımı.",
      },
      {
        title: "SEO Dostu Yapı",
        description:
          "Arama motorları için optimize edilmiş yapı, hızlı yükleme süreleri ve teknik SEO standartlarına uyum.",
      },
      {
        title: "Modern Teknolojiler",
        description:
          "Next.js, React, TypeScript gibi güncel teknolojiler ile performanslı ve güvenli web siteleri.",
      },
      {
        title: "Performans Optimizasyonu",
        description:
          "Hızlı yükleme süreleri, optimize edilmiş görseller ve kod yapısı ile üstün performans.",
      },
      {
        title: "Güvenlik Standartları",
        description:
          "SSL sertifikası, güvenlik duvarı ve düzenli güncellemeler ile güvenli web siteleri.",
      },
    ],

    process: [
      {
        number: 1,
        title: "Analiz ve Planlama",
        description:
          "İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ederiz. Web stratejinizi belirler ve detaylı bir plan oluştururuz.",
      },
      {
        number: 2,
        title: "Tasarım ve Prototip",
        description:
          "Marka kimliğinize uygun, kullanıcı dostu tasarım oluştururuz. Wireframe ve prototip aşamalarında sizinle birlikte çalışırız.",
      },
      {
        number: 3,
        title: "Geliştirme ve Test",
        description:
          "Modern teknolojilerle web sitenizi geliştiririz. Tüm cihazlarda test eder ve performans optimizasyonu yaparız.",
      },
      {
        number: 4,
        title: "Yayın ve Destek",
        description:
          "Web sitenizi yayına alırız. SEO optimizasyonu yapar ve sürekli destek hizmetleri sunarız.",
      },
    ],

    faqs: [
      {
        question: "Web tasarım projesi ne kadar sürer?",
        answer:
          "Web tasarım projesi süresi, projenin kapsamına ve karmaşıklığına bağlıdır. Basit kurumsal web siteleri 2-4 hafta içinde, daha karmaşık projeler 4-8 hafta içinde tamamlanır. Profesyonel ekibimiz, belirlediğiniz teslim tarihine uygun olarak projeleri zamanında teslim eder.",
      },
      {
        question: "Web tasarım fiyatları nasıl belirlenir?",
        answer:
          "Web tasarım fiyatları projenin kapsamına, özelliklerine ve ihtiyaçlarınıza göre belirlenir. Her proje özel olarak değerlendirilir ve size en uygun teklif sunulur. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
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
        question: "Web sitesi tasarımında hangi teknolojileri kullanıyorsunuz?",
        answer:
          "Modern web teknolojileri kullanıyoruz. Next.js, React, TypeScript gibi güncel teknolojiler ile performanslı ve SEO uyumlu web siteleri geliştiriyoruz. Ayrıca, WordPress, Shopify gibi CMS sistemleri ile de çalışıyoruz.",
      },
      {
        question: "SEO uyumlu web tasarım yapıyor musunuz?",
        answer:
          "Evet, tüm web sitelerimiz SEO uyumlu olarak geliştirilir. Arama motoru optimizasyonu için teknik SEO standartlarına uyum, hızlı yükleme süreleri, mobil uyumluluk ve semantik HTML yapısı gibi özellikler dahildir.",
      },
    ],

    experienceYears: 10,
    projectCount: "200+",
    expertise: [
      "Responsive Web Tasarım",
      "UI/UX Tasarım",
      "SEO Optimizasyonu",
      "Next.js ve React Geliştirme",
      "Performans Optimizasyonu",
      "Erişilebilirlik (WCAG)",
    ],

    relatedServices: ["dijital-pazarlama", "e-ticaret", "yazilim-gelistirme"],
  },

  {
    slug: "dijital-pazarlama",
    title: "Dijital Pazarlama",
    shortTitle: "Dijital Pazarlama",
    description:
      "Markanızı dijital dünyada öne çıkarıyoruz. SEO/SEM stratejileri, sosyal medya yönetimi ve içerik pazarlaması ile hedef kitlenize ulaşmanızı sağlıyoruz.",
    excerpt:
      "Profesyonel dijital pazarlama hizmeti ile markanızı dijital dünyada öne çıkarın. SEO, sosyal medya yönetimi ve içerik pazarlaması çözümleri. 2015'ten beri 200+ başarılı proje.",
    heroImage: "/bento/dijital-pazarlama.jpg",
    watermark: "D",

    metaTitle:
      "Dijital Pazarlama Hizmeti | SEO ve Sosyal Medya Yönetimi | WebCraft",
    metaDescription:
      "Profesyonel dijital pazarlama hizmeti. SEO, sosyal medya yönetimi, içerik pazarlaması ve Google Ads yönetimi. Organik trafik artışı ve marka bilinirliği. 2015'ten beri uzman ekibimizle.",
    keywords:
      "dijital pazarlama, SEO hizmeti, sosyal medya yönetimi, Google Ads, içerik pazarlaması, arama motoru optimizasyonu, dijital pazarlama ajansı",

    whatSection: {
      title: "Dijital Pazarlama Nedir?",
      content: `Dijital pazarlama, internet ve dijital teknolojiler kullanılarak yapılan pazarlama faaliyetlerinin tümünü kapsar. Günümüzde, işletmelerin başarısı için dijital pazarlama vazgeçilmez bir unsurdur. Dijital pazarlama, geleneksel pazarlama yöntemlerine göre daha ölçülebilir, hedef kitleye daha etkili ulaşan ve daha düşük maliyetli bir yaklaşımdır.

WebCraft olarak, 2015 yılından bu yana dijital pazarlama alanında uzmanlaşmış bir ekibiz. SEO (Arama Motoru Optimizasyonu), sosyal medya yönetimi, içerik pazarlaması, Google Ads yönetimi ve web analitik hizmetleri sunuyoruz. Veri odaklı yaklaşımımızla, müşterilerimizin dijital pazarlama hedeflerine ulaşmalarını sağlıyoruz.

Dijital pazarlama hizmetlerimiz şunları içerir:
- SEO (Arama Motoru Optimizasyonu)
- Google Ads ve SEM yönetimi
- Sosyal medya yönetimi ve içerik oluşturma
- İçerik pazarlaması ve blog yönetimi
- E-posta pazarlaması
- Web analitik ve raporlama
- Dijital pazarlama stratejisi geliştirme`,
    },

    whySection: {
      title: "Neden Dijital Pazarlama?",
      content: `Dijital pazarlama, işletmenizin online görünürlüğünü artırır, hedef kitlenize daha etkili ulaşmanızı sağlar ve ölçülebilir sonuçlar üretir. Geleneksel pazarlama yöntemlerine göre daha düşük maliyetli ve daha yüksek ROI (yatırım getirisi) sağlar.`,
      benefits: [
        "Arama motorlarında üst sıralarda yer alma (SEO)",
        "Organik trafik artışı ve marka bilinirliği",
        "Hedef kitleye etkili ulaşım",
        "Ölçülebilir sonuçlar ve ROI takibi",
        "Geleneksel pazarlamaya göre daha düşük maliyet",
        "7/24 online varlık ve erişilebilirlik",
        "Sosyal medyada güçlü marka varlığı",
        "Veri odaklı karar verme ve optimizasyon",
      ],
    },

    features: [
      {
        title: "SEO Hizmeti",
        description:
          "Arama motorlarında üst sıralarda yer almanızı sağlayan teknik ve içerik SEO optimizasyonu.",
      },
      {
        title: "Google Ads Yönetimi",
        description:
          "Hedef kitleye etkili ulaşan, dönüşüm odaklı Google Ads kampanyaları yönetimi.",
      },
      {
        title: "Sosyal Medya Yönetimi",
        description:
          "Instagram, Facebook, LinkedIn gibi platformlarda içerik oluşturma, paylaşım planlaması ve topluluk yönetimi.",
      },
      {
        title: "İçerik Pazarlaması",
        description:
          "SEO uyumlu blog yazıları, makaleler ve içerikler ile organik trafik artışı sağlama.",
      },
      {
        title: "Web Analitik",
        description:
          "Google Analytics ve diğer analitik araçları ile performans takibi ve raporlama.",
      },
      {
        title: "E-posta Pazarlaması",
        description:
          "Hedef kitleye özel e-posta kampanyaları ile müşteri sadakati ve dönüşüm artışı.",
      },
    ],

    process: [
      {
        number: 1,
        title: "Analiz ve Strateji",
        description:
          "Mevcut durumunuzu analiz eder, hedef kitlenizi belirler ve dijital pazarlama stratejinizi oluştururuz.",
      },
      {
        number: 2,
        title: "İçerik ve Kampanya Oluşturma",
        description:
          "SEO uyumlu içerikler, sosyal medya paylaşımları ve reklam kampanyaları oluştururuz.",
      },
      {
        number: 3,
        title: "Yayın ve Optimizasyon",
        description:
          "İçerikleri yayınlar, kampanyaları yönetir ve performans verilerine göre sürekli optimizasyon yaparız.",
      },
      {
        number: 4,
        title: "Raporlama ve Geliştirme",
        description:
          "Düzenli raporlama ile sonuçları paylaşır ve stratejileri geliştirerek sürekli iyileştirme sağlarız.",
      },
    ],

    faqs: [
      {
        question: "SEO hizmeti ile Google'da üst sıralarda yer alabilir miyim?",
        answer:
          "Evet, profesyonel SEO hizmetimiz ile web siteniz Google'da üst sıralarda yer alabilir. SEO uzman ekibimiz, arama motoru algoritmalarını yakından takip ederek web sitenizi optimize eder. Organik trafiğinizi artırmak için site içi ve site dışı SEO teknikleri uygularız. Sonuçlar genellikle 3-6 ay içinde görülmeye başlar.",
      },
      {
        question: "Dijital pazarlama hizmeti ne kadar sürer?",
        answer:
          "Dijital pazarlama sürekli bir süreçtir. İlk sonuçlar genellikle 1-3 ay içinde görülmeye başlar, ancak optimal sonuçlar için en az 6-12 ay sürekli çalışma gereklidir. SEO ve organik büyüme zaman alır, ancak uzun vadede en etkili ve sürdürülebilir pazarlama yöntemidir.",
      },
      {
        question: "Sosyal medya yönetimi hizmeti veriyor musunuz?",
        answer:
          "Evet, profesyonel sosyal medya yönetimi hizmeti sunuyoruz. Instagram, Facebook, LinkedIn, Twitter gibi platformlarda içerik oluşturma, paylaşım planlaması ve topluluk yönetimi hizmetleri sağlıyoruz. Markanızın sosyal medya varlığını güçlendiriyoruz.",
      },
      {
        question: "Google Ads kampanyaları yönetiyor musunuz?",
        answer:
          "Evet, Google Ads kampanyaları yönetiyoruz. Hedef kitle analizi, anahtar kelime araştırması, reklam oluşturma, teklif yönetimi ve performans optimizasyonu hizmetleri sunuyoruz. Dönüşüm odaklı kampanyalar ile ROI'nizi maksimize ediyoruz.",
      },
      {
        question: "Dijital pazarlama sonuçları nasıl ölçülür?",
        answer:
          "Dijital pazarlama sonuçları, Google Analytics, Google Search Console ve sosyal medya analitik araçları ile ölçülür. Düzenli raporlama ile organik trafik, dönüşüm oranları, sosyal medya etkileşimleri ve ROI gibi metrikleri paylaşırız.",
      },
      {
        question: "Dijital pazarlama fiyatları nasıl belirlenir?",
        answer:
          "Dijital pazarlama fiyatları, hizmet kapsamına (SEO, sosyal medya, Google Ads), proje büyüklüğüne ve süreye göre belirlenir. Her proje özel olarak değerlendirilir ve size en uygun paket sunulur. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
      },
    ],

    experienceYears: 10,
    projectCount: "200+",
    expertise: [
      "SEO ve Arama Motoru Optimizasyonu",
      "Google Ads ve SEM Yönetimi",
      "Sosyal Medya Yönetimi",
      "İçerik Pazarlaması",
      "Web Analitik ve Raporlama",
      "Dijital Pazarlama Stratejisi",
    ],

    relatedServices: ["web-tasarim", "e-ticaret", "yazilim-gelistirme"],
  },

  {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama",
    shortTitle: "Mobil Uygulama",
    description:
      "iOS ve Android uygulamaları geliştiriyoruz. Native ve cross-platform çözümler ile kullanıcılarınıza en iyi mobil deneyimi sunuyoruz.",
    excerpt:
      "Profesyonel mobil uygulama geliştirme hizmeti. iOS ve Android uygulamaları, native ve cross-platform çözümler. 2015'ten beri 50+ mobil uygulama projesi tamamladık.",
    heroImage: "/bento/mobil-uygulama.jpg",
    watermark: "M",

    metaTitle:
      "Mobil Uygulama Geliştirme | iOS ve Android Uygulamaları | WebCraft",
    metaDescription:
      "Profesyonel mobil uygulama geliştirme hizmeti. iOS ve Android native uygulamaları, cross-platform çözümler. App Store optimizasyonu ve performans odaklı geliştirme. 2015'ten beri 50+ proje.",
    keywords:
      "mobil uygulama, iOS uygulama, Android uygulama, mobil app geliştirme, native uygulama, cross-platform uygulama, app store optimizasyonu",

    whatSection: {
      title: "Mobil Uygulama Geliştirme Nedir?",
      content: `Mobil uygulama geliştirme, iOS (iPhone/iPad) ve Android cihazlar için uygulamalar oluşturma sürecidir. Günümüzde, mobil uygulamalar işletmelerin müşterilerine ulaşmak, hizmet sunmak ve marka değerini artırmak için en etkili yollardan biridir.

WebCraft olarak, 2015 yılından bu yana mobil uygulama geliştirme alanında uzmanlaşmış bir ekibiz. Native (iOS ve Android için ayrı) ve cross-platform (React Native, Flutter) çözümler sunuyoruz. Kullanıcı deneyimini ön planda tutarak, performanslı ve güvenli mobil uygulamalar geliştiriyoruz.

Mobil uygulama geliştirme hizmetlerimiz şunları içerir:
- iOS uygulama geliştirme (Swift, Objective-C)
- Android uygulama geliştirme (Kotlin, Java)
- Cross-platform uygulama geliştirme (React Native, Flutter)
- App Store ve Google Play Store optimizasyonu
- Push bildirimleri ve offline çalışma
- API entegrasyonları
- Uygulama bakımı ve güncellemeleri`,
    },

    whySection: {
      title: "Neden Mobil Uygulama?",
      content: `Mobil uygulamalar, işletmenizin müşterilerine 7/24 erişim sağlar, marka bilinirliğini artırır ve müşteri sadakati oluşturur. Mobil uygulamalar, web sitelerine göre daha hızlı, daha etkileşimli ve daha kişiselleştirilmiş bir deneyim sunar.`,
      benefits: [
        "7/24 müşteri erişimi ve etkileşimi",
        "Marka bilinirliği ve görünürlük artışı",
        "Push bildirimleri ile müşteri iletişimi",
        "Offline çalışma özelliği",
        "Kişiselleştirilmiş kullanıcı deneyimi",
        "App Store ve Google Play'de görünürlük",
        "Müşteri sadakati ve tekrar ziyaret",
        "Gelir artışı potansiyeli (in-app satın alma)",
      ],
    },

    features: [
      {
        title: "Native Geliştirme",
        description:
          "iOS (Swift) ve Android (Kotlin) için native uygulamalar ile en iyi performans ve kullanıcı deneyimi.",
      },
      {
        title: "Cross-Platform",
        description:
          "React Native ve Flutter ile tek kod tabanından hem iOS hem Android uygulamaları geliştirme.",
      },
      {
        title: "Push Bildirimler",
        description:
          "Kullanıcıları bilgilendiren ve etkileşimi artıran push bildirim sistemi entegrasyonu.",
      },
      {
        title: "Offline Çalışma",
        description:
          "İnternet bağlantısı olmadan da çalışabilen, veri senkronizasyonu özellikli uygulamalar.",
      },
      {
        title: "App Store Optimizasyonu",
        description:
          "App Store ve Google Play Store'da üst sıralarda yer almak için ASO (App Store Optimization) hizmeti.",
      },
      {
        title: "API Entegrasyonu",
        description:
          "Backend sistemlerinizle entegre çalışan, güvenli API bağlantıları ile veri yönetimi.",
      },
    ],

    process: [
      {
        number: 1,
        title: "Konsept ve Tasarım",
        description:
          "Uygulama konseptini belirler, kullanıcı akışlarını tasarlar ve wireframe/prototip oluştururuz.",
      },
      {
        number: 2,
        title: "Geliştirme",
        description:
          "Native veya cross-platform teknolojilerle uygulamayı geliştirir, API entegrasyonları yaparız.",
      },
      {
        number: 3,
        title: "Test ve Optimizasyon",
        description:
          "Kapsamlı testler yapar, performans optimizasyonu yapar ve kullanıcı geri bildirimlerini alırız.",
      },
      {
        number: 4,
        title: "Yayın ve Destek",
        description:
          "App Store ve Google Play Store'a yayınlarız. Sürekli güncelleme ve destek hizmetleri sunarız.",
      },
    ],

    faqs: [
      {
        question: "Mobil uygulama geliştirme ne kadar sürer?",
        answer:
          "Mobil uygulama geliştirme süresi, uygulamanın karmaşıklığına, özelliklerine ve platform seçimine (native vs cross-platform) bağlıdır. Basit uygulamalar 2-3 ay, orta karmaşıklıktaki uygulamalar 3-6 ay, karmaşık uygulamalar 6-12 ay sürebilir.",
      },
      {
        question: "Native mi yoksa cross-platform mu tercih etmeliyim?",
        answer:
          "Her iki yaklaşımın da avantajları vardır. Native uygulamalar daha iyi performans ve platform özelliklerine erişim sunar. Cross-platform uygulamalar daha hızlı geliştirilir ve maliyet etkindir. Projenizin ihtiyaçlarına göre en uygun çözümü birlikte belirleriz.",
      },
      {
        question: "App Store ve Google Play Store'a yayınlama yapıyor musunuz?",
        answer:
          "Evet, uygulamanızı App Store ve Google Play Store'a yayınlama sürecini yönetiyoruz. Store optimizasyonu (ASO), açıklama yazma, görsel hazırlama ve yayın sürecini tamamen biz yönetiriz.",
      },
      {
        question: "Mobil uygulama geliştirme fiyatları nasıl belirlenir?",
        answer:
          "Mobil uygulama geliştirme fiyatları, uygulamanın karmaşıklığına, özelliklerine, platform seçimine (iOS, Android, her ikisi) ve tasarım gereksinimlerine göre belirlenir. Her proje özel olarak değerlendirilir. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
      },
      {
        question: "Uygulama geliştirme sonrası destek veriyor musunuz?",
        answer:
          "Evet, uygulama geliştirme sonrası sürekli destek hizmetleri sunuyoruz. Hata düzeltmeleri, güncellemeler, yeni özellik eklemeleri ve performans optimizasyonu hizmetleri sağlıyoruz.",
      },
      {
        question: "Push bildirimleri ekleyebilir misiniz?",
        answer:
          "Evet, push bildirim sistemi entegrasyonu yapıyoruz. Kullanıcıları bilgilendiren, etkileşimi artıran ve müşteri sadakati oluşturan push bildirimleri ekleyebiliriz.",
      },
    ],

    experienceYears: 10,
    projectCount: "50+",
    expertise: [
      "iOS Uygulama Geliştirme (Swift)",
      "Android Uygulama Geliştirme (Kotlin)",
      "React Native Geliştirme",
      "Flutter Geliştirme",
      "App Store Optimizasyonu (ASO)",
      "API Entegrasyonları",
    ],

    relatedServices: ["web-tasarim", "yazilim-gelistirme", "dijital-pazarlama"],
  },

  {
    slug: "yazilim-gelistirme",
    title: "Yazılım Geliştirme",
    shortTitle: "Yazılım Geliştirme",
    description:
      "Özel yazılım çözümleri sunuyoruz. Web uygulamaları, API entegrasyonları ve kurumsal yazılımlar ile iş süreçlerinizi dijitalleştiriyoruz.",
    excerpt:
      "Profesyonel yazılım geliştirme hizmeti. Özel web uygulamaları, API entegrasyonları ve kurumsal yazılım çözümleri. 2015'ten beri 100+ yazılım projesi tamamladık.",
    heroImage: "/bento/yazılım-geliştirme.jpg",
    watermark: "Y",

    metaTitle: "Yazılım Geliştirme Hizmeti | Özel Yazılım Çözümleri | WebCraft",
    metaDescription:
      "Profesyonel yazılım geliştirme hizmeti. Özel web uygulamaları, API entegrasyonları, kurumsal yazılım çözümleri. Ölçeklenebilir ve güvenli yazılımlar. 2015'ten beri 100+ proje.",
    keywords:
      "yazılım geliştirme, özel yazılım, web uygulaması, API entegrasyonu, kurumsal yazılım, yazılım çözümleri, custom software development",

    whatSection: {
      title: "Yazılım Geliştirme Nedir?",
      content: `Yazılım geliştirme, işletmenizin özel ihtiyaçlarına göre tasarlanmış, özel yazılım çözümleri oluşturma sürecidir. Hazır yazılımlar her zaman işletmenizin tüm ihtiyaçlarını karşılamayabilir. Özel yazılım geliştirme, iş süreçlerinize tam uyum sağlayan, ölçeklenebilir ve güvenli çözümler sunar.

WebCraft olarak, 2015 yılından bu yana yazılım geliştirme alanında uzmanlaşmış bir ekibiz. Modern teknolojiler ve best practice'ler kullanarak, performanslı, güvenli ve ölçeklenebilir yazılım çözümleri geliştiriyoruz. Her projede, müşterilerimizin iş süreçlerini analiz eder ve en uygun çözümü sunarız.

Yazılım geliştirme hizmetlerimiz şunları içerir:
- Özel web uygulamaları geliştirme
- API (Application Programming Interface) geliştirme ve entegrasyonu
- Kurumsal yazılım çözümleri
- Veritabanı tasarımı ve yönetimi
- Sistem entegrasyonları (CRM, ERP, vb.)
- Yazılım bakımı ve güncellemeleri
- Teknik dokümantasyon ve eğitim`,
    },

    whySection: {
      title: "Neden Özel Yazılım Geliştirme?",
      content: `Özel yazılım geliştirme, işletmenizin özel ihtiyaçlarına tam uyum sağlar, iş süreçlerinizi optimize eder ve verimliliği artırır. Hazır yazılımların aksine, özel yazılımlar tamamen sizin işletmenize özeldir ve gelecekteki büyümenize uyum sağlayabilir.`,
      benefits: [
        "İş süreçlerinize tam uyum",
        "Ölçeklenebilir ve esnek yapı",
        "Güvenli ve özel çözümler",
        "Verimlilik ve otomasyon artışı",
        "Rakiplerinizden farklılaşma",
        "Uzun vadeli maliyet tasarrufu",
        "Tam kontrol ve özelleştirme",
        "Sürekli geliştirme ve güncelleme",
      ],
    },

    features: [
      {
        title: "Web Uygulamaları",
        description:
          "Modern teknolojilerle (Next.js, React, Node.js) özel web uygulamaları geliştirme.",
      },
      {
        title: "API Entegrasyonu",
        description:
          "Üçüncü parti sistemlerle (CRM, ERP, ödeme sistemleri) güvenli API entegrasyonları.",
      },
      {
        title: "Kurumsal Yazılım",
        description:
          "Büyük ölçekli işletmeler için ölçeklenebilir ve güvenli kurumsal yazılım çözümleri.",
      },
      {
        title: "Veritabanı Tasarımı",
        description:
          "Optimize edilmiş veritabanı tasarımı ve yönetimi ile hızlı ve güvenli veri işleme.",
      },
      {
        title: "Sistem Entegrasyonları",
        description:
          "Mevcut sistemlerinizle (CRM, ERP, muhasebe) entegre çalışan yazılım çözümleri.",
      },
      {
        title: "Bakım ve Destek",
        description:
          "Sürekli bakım, güncelleme ve teknik destek hizmetleri ile yazılımınızın her zaman güncel kalması.",
      },
    ],

    process: [
      {
        number: 1,
        title: "İhtiyaç Analizi",
        description:
          "İş süreçlerinizi analiz eder, gereksinimleri belirler ve teknik dokümantasyon oluştururuz.",
      },
      {
        number: 2,
        title: "Tasarım ve Mimari",
        description:
          "Yazılım mimarisini tasarlar, veritabanı yapısını oluşturur ve geliştirme planını hazırlarız.",
      },
      {
        number: 3,
        title: "Geliştirme ve Test",
        description:
          "Modern teknolojilerle yazılımı geliştirir, kapsamlı testler yapar ve optimizasyon yaparız.",
      },
      {
        number: 4,
        title: "Yayın ve Eğitim",
        description:
          "Yazılımı yayına alırız, kullanıcı eğitimi verir ve sürekli destek hizmetleri sunarız.",
      },
    ],

    faqs: [
      {
        question: "Yazılım geliştirme projesi ne kadar sürer?",
        answer:
          "Yazılım geliştirme projesi süresi, projenin karmaşıklığına, özelliklerine ve kapsamına bağlıdır. Basit web uygulamaları 1-3 ay, orta karmaşıklıktaki projeler 3-6 ay, karmaşık kurumsal yazılımlar 6-12 ay veya daha uzun sürebilir.",
      },
      {
        question: "Hangi teknolojileri kullanıyorsunuz?",
        answer:
          "Modern web teknolojileri kullanıyoruz: Next.js, React, TypeScript, Node.js, Python, PostgreSQL, MongoDB gibi. Projenizin ihtiyaçlarına göre en uygun teknoloji stack'ini belirleriz.",
      },
      {
        question: "API entegrasyonu yapıyor musunuz?",
        answer:
          "Evet, API geliştirme ve entegrasyonu hizmetleri sunuyoruz. CRM sistemleri (Salesforce, HubSpot), ERP sistemleri, ödeme sistemleri (İyzico, PayTR) ve diğer üçüncü parti sistemlerle entegrasyon yapıyoruz.",
      },
      {
        question: "Yazılım geliştirme fiyatları nasıl belirlenir?",
        answer:
          "Yazılım geliştirme fiyatları, projenin karmaşıklığına, özelliklerine, teknoloji seçimine ve süreye göre belirlenir. Her proje özel olarak değerlendirilir ve size en uygun teklif sunulur. Detaylı fiyat teklifi için ücretsiz teklif alabilirsiniz.",
      },
      {
        question: "Yazılım geliştirme sonrası destek veriyor musunuz?",
        answer:
          "Evet, yazılım geliştirme sonrası sürekli destek hizmetleri sunuyoruz. Hata düzeltmeleri, güncellemeler, yeni özellik eklemeleri, performans optimizasyonu ve teknik destek hizmetleri sağlıyoruz.",
      },
      {
        question: "Kurumsal yazılım çözümleri sunuyor musunuz?",
        answer:
          "Evet, büyük ölçekli işletmeler için kurumsal yazılım çözümleri sunuyoruz. Ölçeklenebilir mimari, güvenlik standartları, yüksek performans ve sistem entegrasyonları ile kurumsal ihtiyaçlara uygun çözümler geliştiriyoruz.",
      },
    ],

    experienceYears: 10,
    projectCount: "100+",
    expertise: [
      "Web Uygulaması Geliştirme",
      "API Geliştirme ve Entegrasyonu",
      "Kurumsal Yazılım Çözümleri",
      "Veritabanı Tasarımı",
      "Sistem Entegrasyonları",
      "Yazılım Mimarisi",
    ],

    relatedServices: ["web-tasarim", "mobil-uygulama", "dijital-pazarlama"],
  },

  {
    slug: "e-ticaret",
    title: "E-Ticaret Web Tasarımı",
    shortTitle: "E-Ticaret",
    description:
      "Profesyonel e-ticaret web sitesi tasarımı ve online mağaza kurulumu. Güvenli ödeme sistemleri, stok yönetimi ve mobil uyumlu tasarım ile satışlarınızı artırıyoruz.",
    excerpt:
      "E-ticaret web sitesi ve online mağaza kurulumu hizmeti. Güvenli ödeme, kargo entegrasyonu, stok yönetimi. 2015'ten beri 100+ e-ticaret projesi.",
    heroImage: "/bento/e-ticaret.jpg",
    watermark: "E",

    metaTitle: "E-Ticaret Web Tasarımı | Online Mağaza Kurulumu | WebCraft",
    metaDescription:
      "Profesyonel e-ticaret web sitesi tasarımı. Online mağaza kurulumu, güvenli ödeme sistemleri, kargo entegrasyonu. Satışlarınızı artırın. 2015'ten beri 100+ proje.",
    keywords:
      "e-ticaret web tasarımı, online mağaza kurulumu, e-ticaret sitesi, online satış platformu, e-ticaret çözümleri, ödeme sistemi entegrasyonu",

    whatSection: {
      title: "E-Ticaret Web Tasarımı Nedir?",
      content: `E-ticaret web tasarımı, ürünlerinizi online satışa sunabileceğiniz, güvenli ödeme sistemleri ile entegre, stok ve sipariş yönetimi yapabileceğiniz profesyonel web siteleridir. Modern ve kullanıcı dostu tasarım ile müşteri deneyimini optimize eder, satışları artırır.

WebCraft olarak, 2015 yılından bu yana e-ticaret ve online mağaza kurulumu alanında uzmanlaşmış bir ekibiz. İyzico, PayTR gibi güvenli ödeme sistemleri, MNG, Yurtiçi, Aras Kargo entegrasyonları ve kolay yönetilebilir admin paneli ile satışlarınızı artırıyoruz.

E-ticaret web tasarım hizmetlerimiz şunları içerir:
- Modern ve kullanıcı dostu tasarım
- Güvenli ödeme sistemi entegrasyonları (İyzico, PayTR, Stripe)
- Kargo entegrasyonları (MNG, Yurtiçi, Aras, Sürat Kargo)
- Ürün ve stok yönetimi
- Sipariş takip sistemi
- Mobil uyumlu responsive tasarım
- SEO optimizasyonu
- SSL sertifikası ve güvenlik`,
    },

    whySection: {
      title: "Neden E-Ticaret?",
      content: `E-ticaret, işletmenizin 7/24 satış yapmasını sağlar, geniş müşteri kitlesine ulaşmanızı mümkün kılar ve operasyonel maliyetlerinizi düşürür. Online mağazanız ile fiziksel mağaza sınırlamalarından kurtulur, Türkiye genelinde veya dünya çapında satış yapabilirsiniz.`,
      benefits: [
        "7/24 kesintisiz satış imkanı",
        "Geniş müşteri kitlesine erişim",
        "Düşük operasyonel maliyet",
        "Otomatik stok ve sipariş yönetimi",
        "Detaylı satış raporları ve analizler",
        "Müşteri sadakati programları",
        "Çoklu ödeme seçenekleri",
        "Güvenli ve hızlı teslimat",
      ],
    },

    features: [
      {
        title: "Güvenli Ödeme Sistemleri",
        description:
          "İyzico, PayTR, Stripe gibi güvenli ödeme sistemleri entegrasyonu. Kredi kartı, banka kartı, havale/EFT seçenekleri.",
      },
      {
        title: "Kargo Entegrasyonu",
        description:
          "MNG, Yurtiçi, Aras, Sürat Kargo entegrasyonları. Otomatik kargo takip ve bildirim sistemleri.",
      },
      {
        title: "Ürün Yönetimi",
        description:
          "Kolay ürün ekleme, kategori yönetimi, stok takibi, fiyat güncelleme ve toplu işlem özellikleri.",
      },
      {
        title: "Sipariş Yönetimi",
        description:
          "Sipariş takibi, durum güncelleme, otomatik e-posta bildirimleri ve detaylı sipariş raporları.",
      },
      {
        title: "Müşteri Paneli",
        description:
          "Üye girişi, sipariş geçmişi, favori ürünler, adres defteri ve kolay sipariş tekrarı özellikleri.",
      },
      {
        title: "Raporlama ve Analitik",
        description:
          "Detaylı satış raporları, ürün performans analizleri, müşteri davranış analizleri ve envanter raporları.",
      },
    ],

    process: [
      {
        number: 1,
        title: "İhtiyaç Analizi",
        description:
          "E-ticaret ihtiyaçlarınızı, ürün yapınızı, hedef kitlenizi ve bütçenizi analiz ediyoruz.",
      },
      {
        number: 2,
        title: "Tasarım ve Planlama",
        description:
          "Marka kimliğinize uygun modern tasarım, kullanıcı deneyimi tasarımı ve kategori yapısı oluşturuyoruz.",
      },
      {
        number: 3,
        title: "Geliştirme",
        description:
          "E-ticaret platformu geliştirme, ödeme ve kargo entegrasyonları, admin paneli oluşturma.",
      },
      {
        number: 4,
        title: "Test ve Optimizasyon",
        description:
          "Ödeme testi, sipariş süreci testi, performans optimizasyonu ve güvenlik kontrolü.",
      },
      {
        number: 5,
        title: "Yayına Alma ve Eğitim",
        description:
          "Siteyi yayına alıyoruz ve admin paneli kullanımı için detaylı eğitim sağlıyoruz.",
      },
      {
        number: 6,
        title: "Destek ve Bakım",
        description:
          "7/24 teknik destek, düzenli güncellemeler, güvenlik yamaları ve performans takibi.",
      },
    ],

    faqs: [
      {
        question: "E-ticaret web sitesi ne kadar sürer?",
        answer:
          "E-ticaret projesi genellikle 4-8 hafta içinde tamamlanır. Ürün sayısı, ödeme/kargo entegrasyonları ve özel isteklere göre süre değişebilir.",
      },
      {
        question: "Hangi ödeme sistemlerini entegre edebilirsiniz?",
        answer:
          "İyzico, PayTR, PayU, Stripe gibi tüm popüler ödeme sistemlerini entegre ederiz. Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçenekleri mevcuttur.",
      },
      {
        question: "E-ticaret sitesi mobil uyumlu olur mu?",
        answer:
          "Evet, tüm e-ticaret sitelerimiz responsive tasarım ile masaüstü, tablet ve mobil cihazlarda mükemmel çalışır.",
      },
      {
        question: "Kargo entegrasyonu yapıyor musunuz?",
        answer:
          "Evet, MNG, Yurtiçi, Aras, Sürat Kargo gibi tüm popüler kargo firmaları ile entegrasyon sağlıyoruz. Otomatik kargo takip ve bildirim sistemleri dahildir.",
      },
      {
        question: "E-ticaret güvenliği nasıl sağlanıyor?",
        answer:
          "SSL sertifikası, güvenli ödeme gateway'leri, güvenlik duvarı, düzenli yedekleme ve güvenlik güncellemeleri ile verileriniz tam güvende.",
      },
      {
        question: "Mevcut e-ticaret sitemi taşıyabilir misiniz?",
        answer:
          "Evet, mevcut e-ticaret sitenizi (Ticimax, İdeasoft, WooCommerce, Shopify) yeni platformumuza ürünler, müşteriler ve siparişlerle birlikte taşıyabiliriz.",
      },
    ],

    experienceYears: 10,
    projectCount: "100+",
    expertise: [
      "E-Ticaret Platform Geliştirme",
      "Ödeme Sistemi Entegrasyonu",
      "Kargo Entegrasyonu",
      "Stok ve Sipariş Yönetimi",
      "E-Ticaret SEO",
      "Performans Optimizasyonu",
    ],

    relatedServices: ["web-tasarim", "dijital-pazarlama", "yazilim-gelistirme"],
  },

  {
    slug: "yapay-zeka-chatbot",
    title: "Yapay Zeka Chatbot Geliştirme",
    shortTitle: "AI Chatbot",
    description:
      "İşletmeniz için yapay zeka destekli chatbot çözümleri geliştiriyoruz. 7/24 otomatik müşteri desteği, satış asistanlığı ve lead toplama ile iş süreçlerinizi otomatikleştirin.",
    excerpt:
      "Yapay zeka chatbot geliştirme hizmeti ile müşteri hizmetlerinizi otomatikleştirin. GPT tabanlı akıllı chatbot, WhatsApp entegrasyonu ve çok dilli destek. İş verimliliğinizi %40 artırın.",
    heroImage: "/chatbot.webp",
    watermark: "AI",

    metaTitle: "Yapay Zeka Chatbot Geliştirme | AI Chatbot Hizmeti | WebCraft",
    metaDescription:
      "İşletmeniz için yapay zeka destekli chatbot geliştirme. GPT entegrasyonu, WhatsApp chatbot, 7/24 otomatik müşteri desteği ve satış asistanlığı. Müşteri memnuniyetini artırın, maliyetleri düşürün.",
    keywords:
      "yapay zeka chatbot, AI chatbot geliştirme, chatbot hizmeti, WhatsApp chatbot, GPT chatbot, müşteri hizmetleri otomasyonu, chatbot fiyatları, akıllı chatbot, yapay zeka asistan, işletme chatbot",

    whatSection: {
      title: "Yapay Zeka Chatbot Nedir?",
      content: `Yapay zeka chatbot, doğal dil işleme (NLP) ve makine öğrenimi teknolojileri kullanarak müşterilerinizle otomatik olarak iletişim kuran akıllı yazılım sistemidir. Geleneksel kural tabanlı botların aksine, AI chatbotlar konuşmanın bağlamını anlar, karmaşık soruları yanıtlar ve zamanla öğrenerek kendini geliştirir.

WebCraft olarak, GPT ve benzeri büyük dil modelleri (LLM) üzerine özelleştirilmiş chatbot çözümleri geliştiriyoruz. Her chatbot, işletmenizin bilgi tabanı, ürün kataloğu ve iş süreçlerine göre eğitilir. Böylece müşterilerinize 7/24 doğru, tutarlı ve markanıza uygun yanıtlar sunar.

AI chatbot çözümlerimiz şunları kapsar:
- GPT tabanlı doğal dil anlama ve yanıt üretme
- İşletmenize özel bilgi tabanı entegrasyonu
- Web sitesi, WhatsApp, Instagram ve Telegram entegrasyonu
- Çok dilli destek (Türkçe, İngilizce ve daha fazlası)
- Satış hunisi otomasyonu ve lead toplama
- Canlı destek ekibine akıllı yönlendirme
- Analitik dashboard ve konuşma raporlama`,
    },

    whySection: {
      title: "Neden Yapay Zeka Chatbot?",
      content: `Müşterileriniz 7/24 hızlı yanıt bekliyor. Geleneksel müşteri hizmetleri yöntemleri hem maliyetli hem de ölçeklenemez. Yapay zeka chatbot, müşteri deneyimini iyileştirirken operasyonel maliyetlerinizi önemli ölçüde düşürür. Araştırmalara göre, AI chatbot kullanan işletmeler müşteri hizmetleri maliyetlerini %30-50 oranında azaltabilir.`,
      benefits: [
        "7/24 kesintisiz otomatik müşteri desteği",
        "Müşteri hizmetleri maliyetlerinde %30-50 tasarruf",
        "Anlık yanıt süreleri ile müşteri memnuniyeti artışı",
        "Eş zamanlı sınırsız müşteri görüşmesi kapasitesi",
        "Satış süreçlerini otomatikleştirme ve lead toplama",
        "Çok kanallı iletişim (web, WhatsApp, sosyal medya)",
        "Veri odaklı müşteri içgörüleri ve analitik",
        "İnsan hatalı yanıtları ortadan kaldırma",
      ],
    },

    features: [
      {
        title: "GPT Tabanlı Akıllı Yanıtlar",
        description:
          "OpenAI GPT ve benzeri LLM teknolojileri ile doğal, bağlama uygun ve insan benzeri yanıtlar üreten chatbot. İşletmenizin bilgi tabanına göre özelleştirilmiş.",
      },
      {
        title: "Çok Kanallı Entegrasyon",
        description:
          "Web siteniz, WhatsApp Business, Instagram DM, Telegram ve Facebook Messenger üzerinden tek bir chatbot ile müşterilerinize ulaşın.",
      },
      {
        title: "Özel Bilgi Tabanı Eğitimi",
        description:
          "Chatbotunuz, ürün kataloğunuz, SSS'leriniz, fiyat listeniz ve şirket politikalarınızla eğitilir. Her zaman doğru ve güncel bilgi sunar.",
      },
      {
        title: "Satış Asistanlığı",
        description:
          "Müşterilerinizi satış hunisinde yönlendiren, ürün öneren, fiyat teklifi oluşturan ve randevu planlayan akıllı satış asistanı.",
      },
      {
        title: "Canlı Desteğe Akıllı Yönlendirme",
        description:
          "Chatbotun çözemediği karmaşık soruları otomatik olarak insan temsilcisine yönlendiren akıllı eskalasyon sistemi. Tüm konuşma geçmişi aktarılır.",
      },
      {
        title: "Analitik ve Raporlama",
        description:
          "Konuşma metrikleri, müşteri memnuniyeti skoru, sıkça sorulan sorular ve dönüşüm oranları ile chatbot performansını gerçek zamanlı takip edin.",
      },
    ],

    process: [
      {
        number: 1,
        title: "İhtiyaç Analizi ve Strateji",
        description:
          "İşletmenizin müşteri hizmetleri süreçlerini, sıkça sorulan soruları ve hedeflerinizi analiz ederiz. Chatbot stratejisi ve kapsamını birlikte belirleriz.",
      },
      {
        number: 2,
        title: "Bilgi Tabanı ve Eğitim",
        description:
          "Ürün kataloğunuz, SSS'leriniz ve şirket bilgilerinizle chatbotun bilgi tabanını oluştururuz. AI modelini işletmenize özel olarak eğitiriz.",
      },
      {
        number: 3,
        title: "Geliştirme ve Entegrasyon",
        description:
          "Chatbotu geliştirip web sitenize, WhatsApp'a ve diğer kanallara entegre ederiz. CRM, e-ticaret ve diğer sistemlerle bağlantıları kurarız.",
      },
      {
        number: 4,
        title: "Test, Yayın ve Optimizasyon",
        description:
          "Kapsamlı testler sonrası chatbotu yayına alırız. Konuşma analitiğini takip eder, yanıt kalitesini sürekli iyileştiririz. Aylık performans raporları sunarız.",
      },
    ],

    faqs: [
      {
        question: "Yapay zeka chatbot ne kadar sürede hazır olur?",
        answer:
          "Projenin kapsamına bağlı olarak, temel bir AI chatbot 2-3 haftada, kapsamlı çok kanallı chatbot çözümleri 4-8 haftada tamamlanır. Bilgi tabanı eğitimi ve entegrasyonlar süreyi etkileyen ana faktörlerdir.",
      },
      {
        question: "Chatbot hangi platformlarda çalışır?",
        answer:
          "Geliştirdiğimiz chatbotlar web sitenizde, WhatsApp Business, Instagram DM, Facebook Messenger, Telegram ve özel mobil uygulamalarda çalışabilir. Tek bir AI beyin, tüm kanallarda tutarlı deneyim sunar.",
      },
      {
        question: "Chatbot Türkçe anlıyor mu?",
        answer:
          "Evet, chatbotlarımız Türkçe doğal dil işleme konusunda özelleştirilmiştir. Türkçe dilbilgisi, günlük konuşma kalıpları ve sektörel terminolojiyi anlayarak doğal yanıtlar üretir. Ayrıca İngilizce ve diğer dillerde de destek sunabilir.",
      },
      {
        question: "Mevcut sistemlerimizle entegre olabilir mi?",
        answer:
          "Evet, chatbotlarımız CRM sistemleri (Salesforce, HubSpot), e-ticaret platformları (Shopify, WooCommerce), ödeme sistemleri, randevu sistemleri ve özel API'ler ile entegre edilebilir. Mevcut iş akışlarınıza sorunsuz bağlanır.",
      },
      {
        question: "Yapay zeka chatbot ne kadar maliyetlidir?",
        answer:
          "Chatbot maliyeti projenin kapsamına, entegrasyon sayısına ve özel gereksinimlere göre belirlenir. Temel chatbot paketleri 15.000₺'den başlayıp, kurumsal çözümler 50.000₺ ve üzerine çıkabilir. Aylık bakım ve API kullanım ücretleri ayrıca değerlendirilir. Detaylı fiyat teklifi için ücretsiz danışmanlık alabilirsiniz.",
      },
      {
        question: "Chatbot ne kadar doğru yanıt verir?",
        answer:
          "İşletmenizin bilgi tabanıyla eğitilen chatbotlarımız, eğitildikleri konularda %90-95 doğruluk oranına sahiptir. Yanlış bilgi vermemesi için 'hallusiasyon koruma' mekanizmaları ve 'bilmediğini kabul etme' mantığı kurulur. Sürekli öğrenme ile doğruluk oranı zamanla artar.",
      },
    ],

    experienceYears: 10,
    projectCount: "50+",
    expertise: [
      "GPT ve LLM Entegrasyonu",
      "Doğal Dil İşleme (NLP)",
      "WhatsApp Business API",
      "Çok Kanallı Chatbot Mimarisi",
      "Konuşma Tasarımı (Conversation Design)",
      "AI Model Eğitimi ve Fine-tuning",
    ],

    relatedServices: ["yazilim-gelistirme", "web-tasarim", "e-ticaret"],
  },

  {
    slug: "yapay-zeka-otomasyon",
    title: "Yapay Zeka ile İş Otomasyonu",
    shortTitle: "AI Otomasyon",
    description:
      "Yapay zeka destekli iş süreçleri otomasyonu ile tekrarlayan görevleri ortadan kaldırın. Akıllı belge işleme, e-posta otomasyonu, veri analizi ve iş akışı optimizasyonu ile verimliliğinizi %60'a kadar artırın.",
    excerpt:
      "AI otomasyon hizmeti ile iş süreçlerinizi akıllı hale getirin. Belge işleme, veri analizi, e-posta otomasyonu ve iş akışı optimizasyonu. Tekrarlayan görevleri otomatikleştirin, maliyetleri düşürün.",
    heroImage: "/automation.webp",
    watermark: "AUTO",

    metaTitle: "Yapay Zeka İş Otomasyonu | AI Otomasyon Hizmeti | WebCraft",
    metaDescription:
      "Yapay zeka ile iş süreçleri otomasyonu. Akıllı belge işleme, e-posta otomasyonu, veri analizi ve iş akışı optimizasyonu. Tekrarlayan görevleri ortadan kaldırın, verimliliği %60 artırın.",
    keywords:
      "yapay zeka otomasyon, AI otomasyon, iş süreçleri otomasyonu, akıllı belge işleme, RPA, iş akışı otomasyonu, yapay zeka entegrasyonu, otomasyon çözümleri, AI iş otomasyonu, süreç otomasyonu",

    whatSection: {
      title: "Yapay Zeka ile İş Otomasyonu Nedir?",
      content: `Yapay zeka iş otomasyonu, makine öğrenimi, doğal dil işleme ve bilgisayarlı görü gibi AI teknolojilerini kullanarak iş süreçlerini otomatikleştirme ve optimize etme sürecidir. Geleneksel otomasyon araçlarından farklı olarak, AI otomasyon sistemleri karar verebilir, öğrenebilir ve karmaşık, yapılandırılmamış verileri işleyebilir.

WebCraft olarak, işletmenizin tekrarlayan ve zaman alıcı görevlerini yapay zeka ile otomatikleştiriyoruz. Fatura işlemeden müşteri e-postalarının sınıflandırılmasına, veri girişinden rapor oluşturmaya kadar birçok iş sürecini akıllı hale getiriyoruz. Böylece ekibiniz stratejik ve yaratıcı işlere odaklanabilir.

AI otomasyon çözümlerimiz şunları kapsar:
- Akıllı belge işleme (fatura, sözleşme, form tanıma)
- E-posta sınıflandırma ve otomatik yanıtlama
- Veri çıkarma, dönüştürme ve analiz
- İş akışı otomasyonu ve süreç optimizasyonu
- CRM ve ERP sistemleri ile entegrasyon
- Raporlama ve dashboard otomasyonu
- Tahmine dayalı analitik ve karar destek sistemleri`,
    },

    whySection: {
      title: "Neden Yapay Zeka Otomasyonu?",
      content: `İşletmeler her gün saatlerini tekrarlayan, düşük değerli görevlere harcıyor. Manuel veri girişi, belge işleme, e-posta yönetimi ve rapor oluşturma gibi görevler hem zaman kaybına hem de insan hatalarına yol açıyor. AI otomasyon, bu süreçleri %60-80 oranında hızlandırabilir ve hata oranını %90'a kadar azaltabilir.`,
      benefits: [
        "Tekrarlayan görevlerde %60-80 zaman tasarrufu",
        "İnsan hatalarını %90'a kadar azaltma",
        "Operasyonel maliyetlerde önemli düşüş",
        "Ekibinizin stratejik işlere odaklanması",
        "7/24 kesintisiz süreç işleme kapasitesi",
        "Ölçeklenebilir ve tutarlı iş çıktıları",
        "Veriye dayalı karar alma ve öngörüler",
        "Hızlı ROI ve kısa geri ödeme süresi",
      ],
    },

    features: [
      {
        title: "Akıllı Belge İşleme",
        description:
          "Fatura, sözleşme, form ve diğer belgeleri AI ile otomatik tanıma, veri çıkarma ve sisteme kaydetme. OCR ve NLP teknolojileri ile yapılandırılmamış verileri anlamlı bilgiye dönüştürme.",
      },
      {
        title: "E-posta ve İletişim Otomasyonu",
        description:
          "Gelen e-postaları otomatik sınıflandırma, önceliklendirme ve yanıtlama. Müşteri taleplerini kategorize etme ve ilgili departmana yönlendirme.",
      },
      {
        title: "İş Akışı Optimizasyonu",
        description:
          "Mevcut iş süreçlerinizi analiz ederek darboğazları tespit etme ve AI destekli otomatik iş akışları oluşturma. Onay süreçleri, görev atama ve takibi otomatikleştirme.",
      },
      {
        title: "Veri Analizi ve Raporlama",
        description:
          "Büyük veri setlerini AI ile analiz etme, trendleri tespit etme ve otomatik rapor oluşturma. Gerçek zamanlı dashboard'lar ve tahmine dayalı analitik.",
      },
      {
        title: "CRM ve ERP Entegrasyonu",
        description:
          "Mevcut CRM (Salesforce, HubSpot) ve ERP sistemlerinizle sorunsuz entegrasyon. Veri senkronizasyonu, otomatik kayıt oluşturma ve süreç tetikleme.",
      },
      {
        title: "Özel AI Model Geliştirme",
        description:
          "İşletmenize özel makine öğrenimi modelleri geliştirme. Tahmine dayalı bakım, talep tahmini, fiyatlandırma optimizasyonu ve anomali tespiti.",
      },
    ],

    process: [
      {
        number: 1,
        title: "Süreç Analizi ve Keşif",
        description:
          "Mevcut iş süreçlerinizi detaylı olarak analiz eder, otomasyon fırsatlarını belirler ve ROI potansiyelini hesaplarız. Öncelikli otomasyon alanlarını birlikte belirleriz.",
      },
      {
        number: 2,
        title: "Çözüm Tasarımı ve PoC",
        description:
          "Belirlenen süreçler için AI otomasyon çözümünü tasarlar ve küçük ölçekli bir kavram kanıtı (PoC) ile fizibilitesini doğrularız. Sonuçları birlikte değerlendiririz.",
      },
      {
        number: 3,
        title: "Geliştirme ve Entegrasyon",
        description:
          "AI modellerini geliştirip eğitir, otomasyon iş akışlarını kurar ve mevcut sistemlerinize entegre ederiz. Kapsamlı testler ile güvenilirliği doğrularız.",
      },
      {
        number: 4,
        title: "Yayın, İzleme ve Sürekli İyileştirme",
        description:
          "Otomasyon çözümünü yayına alır, performansını gerçek zamanlı izleriz. Düzenli optimizasyonlar ve yeni otomasyon fırsatları ile sürekli iyileştirme sağlarız.",
      },
    ],

    faqs: [
      {
        question: "AI otomasyon projesi ne kadar sürede tamamlanır?",
        answer:
          "Projenin kapsamına bağlı olarak, tek bir süreç otomasyonu 2-4 haftada, kapsamlı çok süreçli otomasyon projeleri 6-12 haftada tamamlanır. Kavram kanıtı (PoC) aşaması genellikle 1-2 hafta sürer ve hızlı sonuç almanızı sağlar.",
      },
      {
        question: "Hangi iş süreçleri otomatikleştirilebilir?",
        answer:
          "Belge işleme (fatura, sözleşme), e-posta sınıflandırma ve yanıtlama, veri girişi ve doğrulama, rapor oluşturma, müşteri segmentasyonu, envanter yönetimi, onay süreçleri ve çok daha fazlası otomatikleştirilebilir. Genel kural olarak, tekrarlayan ve kural tabanlı her süreç AI ile otomatikleştirilebilir.",
      },
      {
        question: "AI otomasyon mevcut sistemlerimizle uyumlu mu?",
        answer:
          "Evet, otomasyon çözümlerimiz API'ler aracılığıyla mevcut CRM (Salesforce, HubSpot), ERP, muhasebe yazılımları, e-posta sistemleri ve diğer iş uygulamalarınızla sorunsuz entegre olur. Özel entegrasyon ihtiyaçları için de çözüm üretiriz.",
      },
      {
        question: "AI otomasyon ne kadar güvenilir?",
        answer:
          "AI otomasyon sistemlerimiz %95+ doğruluk oranıyla çalışır. Kritik süreçlerde insan onayı adımları eklenebilir (human-in-the-loop). Ayrıca anomali tespiti ve hata yönetimi mekanizmalarıyla beklenmedik durumlar otomatik olarak ele alınır.",
      },
      {
        question: "AI otomasyon maliyeti ne kadar?",
        answer:
          "Otomasyon maliyeti, otomatikleştirilecek süreç sayısı, karmaşıklık düzeyi ve entegrasyon gereksinimlerine göre belirlenir. Temel tek süreç otomasyonları 20.000₺'den başlayıp, kapsamlı kurumsal çözümler 75.000₺ ve üzerine çıkabilir. Genellikle yatırım 3-6 ay içinde geri döner. Ücretsiz danışmanlık ile ROI analizi yapabiliriz.",
      },
      {
        question: "Çalışanlarımızın işini alacak mı?",
        answer:
          "AI otomasyon, çalışanların işini almak için değil, değerli zamanlarını serbest bırakmak için tasarlanır. Tekrarlayan ve düşük değerli görevler otomatikleştirilirken, çalışanlarınız müşteri ilişkileri, strateji geliştirme ve yaratıcı işler gibi yüksek değerli görevlere odaklanabilir. Araştırmalar, AI otomasyonun iş memnuniyetini artırdığını göstermektedir.",
      },
    ],

    experienceYears: 10,
    projectCount: "30+",
    expertise: [
      "İş Süreçleri Otomasyonu (BPA)",
      "Akıllı Belge İşleme (IDP)",
      "Makine Öğrenimi ve AI Modelleme",
      "RPA ve AI Entegrasyonu",
      "İş Akışı Tasarımı ve Optimizasyonu",
      "API Entegrasyonu ve Sistem Bağlantıları",
    ],

    relatedServices: [
      "yapay-zeka-chatbot",
      "yazilim-gelistirme",
      "web-tasarim",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}

export function getRelatedServices(
  currentSlug: string,
  limit: number = 3,
): Service[] {
  const currentService = getService(currentSlug);
  if (!currentService) return [];

  return services
    .filter(
      (service) =>
        service.slug !== currentSlug &&
        currentService.relatedServices.includes(service.slug),
    )
    .slice(0, limit);
}

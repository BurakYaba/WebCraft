import { NextResponse } from "next/server";

/**
 * GET /api/projects - Returns all projects in JSON format
 * This endpoint is designed for AI models to easily access structured project data
 */
export async function GET() {
  const projects = [
    {
      slug: "fluenta-ai",
      title: "Fluenta AI - AI Destekli Dil Öğrenme Platformu",
      shortTitle: "Fluenta AI",
      category: "E-Eğitim & AI",
      url: "https://www.webcraft.tr/islerimiz/fluenta-ai",
      description:
        "3D avatarlı interaktif dil öğrenme platformu. AI destekli sohbet, kişiselleştirilmiş öğrenme yolu, interaktif alıştırmalar.",

      metrics: {
        users: "3000+",
        userSatisfaction: "92%",
        pageSpeed: "95+/100",
        retention: "80%",
      },

      technologies: [
        "Next.js 15",
        "React 19",
        "Three.js",
        "AI/ML",
        "TypeScript",
        "Tailwind CSS",
      ],

      features: [
        "3D avatarlı interaktif öğrenme",
        "AI destekli sohbet",
        "Kişiselleştirilmiş öğrenme yolu",
        "Interaktif alıştırmalar",
        "Gerçek zamanlı ilerleme takibi",
      ],

      results: [
        "3000+ aktif kullanıcı",
        "%92 kullanıcı memnuniyeti",
        "Google PageSpeed 95+/100",
        "%80 kullanıcı sadakati",
      ],
    },
    {
      slug: "mentoria",
      title: "Mentoria - Özel Ders ve Danışmanlık Platformu",
      shortTitle: "Mentoria",
      category: "E-Eğitim",
      url: "https://www.webcraft.tr/islerimiz/mentoria",
      description:
        "Öğrenci ve öğretmenleri bir araya getiren akıllı eşleştirme platformu. Güvenli ödeme sistemi, ders rezervasyonu, video konferans.",

      metrics: {
        users: "5000+",
        matchSuccessRate: "85%",
        bookingIncrease: "200%",
        averageRating: "4.8/5",
      },

      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "TypeScript",
        "Payment APIs",
      ],

      features: [
        "Akıllı eşleştirme algoritması",
        "Güvenli ödeme sistemi",
        "Video konferans entegrasyonu",
        "Ders rezervasyon sistemi",
        "Değerlendirme ve puanlama",
      ],

      results: [
        "5000+ aktif kullanıcı",
        "%85 başarılı eşleşme oranı",
        "Ders rezervasyonlarında %200 artış",
        "Ortalama 4.8/5 değerlendirme",
      ],
    },
    {
      slug: "atlantis",
      title: "Atlantis Kreş - Eğitim Kurumu Web Sitesi",
      shortTitle: "Atlantis Kreş",
      category: "Eğitim",
      url: "https://www.webcraft.tr/islerimiz/atlantis",
      description:
        "Montessori ve Reggio Emilia eğitim yaklaşımı sunan kreş için online kayıt sistemi ve veli portalı.",

      metrics: {
        registrationIncrease: "150%",
        seoRanking: "1. sayfa",
        mobileTraffic: "70%",
        loadTime: "< 2s",
      },

      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],

      features: [
        "Online kayıt sistemi",
        "Veli portalı",
        "Mobil uyumlu tasarım",
        "Yerel SEO optimizasyonu",
        "Hızlı yükleme süresi",
      ],

      results: [
        "%150 kayıt artışı",
        '"Muğla kreş" aramasında 1. sayfa',
        "%70 mobil trafik",
        "< 2 saniye yükleme süresi",
      ],
    },
    {
      slug: "skoll-beauty",
      title: "Skoll Beauty - Güzellik Salonu Web Sitesi",
      shortTitle: "Skoll Beauty",
      category: "Güzellik & Sağlık",
      url: "https://www.webcraft.tr/islerimiz/skoll-beauty",
      description:
        "Fethiye'de hizmet veren güzellik salonu için online randevu sistemi ve yerel SEO optimizasyonu.",

      metrics: {
        appointmentIncrease: "120%",
        localSeoRanking: "Üst 3",
        googleMyBusinessViews: "300%",
        conversionRate: "25%",
      },

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Google My Business",
        "Local SEO",
      ],

      features: [
        "Online randevu sistemi",
        "Yerel SEO optimizasyonu",
        "Google My Business entegrasyonu",
        "Hizmet katalog yönetimi",
        "Müşteri yorumları",
      ],

      results: [
        "%120 randevu artışı",
        '"Fethiye kuaför" aramasında üst sıralarda',
        "Google My Business görüntülemelerinde %300 artış",
        "%25 dönüşüm oranı",
      ],
    },
  ];

  return NextResponse.json({
    success: true,
    count: projects.length,
    data: projects,
  });
}

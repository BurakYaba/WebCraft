import { MetadataRoute } from "next";

// All blog posts with their slugs and dates
// Each post has its own static page at /blog/{slug}/
const blogPosts = [
  // NEW KEYWORD-OPTIMIZED POSTS (2026)
  {
    slug: "web-sitesi-hizi-nasil-artirilir",
    date: "2026-01-20",
  },
  {
    slug: "core-web-vitals-rehberi",
    date: "2026-01-18",
  },
  {
    slug: "kobi-dijital-donusum-rehberi",
    date: "2026-01-15",
  },
  {
    slug: "teknik-seo-kontrol-listesi",
    date: "2026-01-12",
  },
  {
    slug: "yerel-seo-stratejileri",
    date: "2026-01-10",
  },
  {
    slug: "fethiye-web-tasarim-rehberi",
    date: "2026-01-08",
  },

  // EXISTING POSTS (2025)
  {
    slug: "profesyonel-web-tasarim-nedir-kimler-icin-gerekli",
    date: "2025-01-22",
  },
  {
    slug: "kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata",
    date: "2025-01-20",
  },
  {
    slug: "seo-uyumlu-web-tasarimi",
    date: "2024-12-15",
  },
  {
    slug: "sosyal-medya-yonetimi-marka-buyutme",
    date: "2024-12-12",
  },
  {
    slug: "profesyonel-seo-hizmeti",
    date: "2024-12-10",
  },
  {
    slug: "web-tasarim-fiyatlari",
    date: "2024-12-08",
  },
  {
    slug: "2024-seo-trendleri",
    date: "2024-12-05",
  },
  {
    slug: "minimalist-tasarim-yaklasimlari",
    date: "2024-12-03",
  },
  {
    slug: "online-magaza-kurulumu",
    date: "2024-12-01",
  },
  {
    slug: "guclu-marka-imaji-olusturma",
    date: "2024-11-28",
  },
  {
    slug: "web-sitesi-guvenligi",
    date: "2024-11-25",
  },
  {
    slug: "web-analitik-araclari",
    date: "2024-11-22",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.webcraft.tr";

  // Generate blog post entries dynamically
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Individual service pages
    {
      url: `${baseUrl}/hizmetler/web-tasarim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/dijital-pazarlama`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/mobil-uygulama`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/yazilim-gelistirme`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Niche service pages
    {
      url: `${baseUrl}/hizmetler/performans-odakli-web-tasarim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/kobi-web-tasarim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/seo-uyumlu-web-sitesi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Individual project pages
    {
      url: `${baseUrl}/islerimiz/fluenta-ai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/mentoria`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/atlantis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/skoll-beauty`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/home-and-car`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Resource Center & Knowledge Base
    {
      url: `${baseUrl}/kaynak-merkezi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sozluk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Comparison Pages
    {
      url: `${baseUrl}/karsilastirma/webcraft-vs-diy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karsilastirma/freelancer-vs-ajans`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karsilastirma/platformlar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Industry-specific landing pages
    {
      url: `${baseUrl}/e-ticaret-web-tasarim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kurumsal-web-sitesi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Competitor-focused landing page
    {
      url: `${baseUrl}/en-iyi-web-tasarim-ajansi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Local SEO pages
    {
      url: `${baseUrl}/fethiye-web-tasarim-hizmetleri`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mugla-web-tasarim-seo-hizmetleri`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Legal pages
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kullanim-sartlari`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cerez-politikasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // FAQ page
    {
      url: `${baseUrl}/sss`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog posts - dynamically generated
    ...blogEntries,
  ];
}

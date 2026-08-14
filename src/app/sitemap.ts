import { MetadataRoute } from "next";

// All blog posts with their slugs and dates
// Each post has its own static page at /blog/{slug}/
const blogPosts = [
  // NEW KEYWORD-OPTIMIZED POSTS (2026)
  {
    slug: "yerel-seo-sonuclarimiz-veri-analizi",
    date: "2026-07-30",
  },
  {
    slug: "yapay-zeka-chatbot-ve-otomasyon-rehberi",
    date: "2026-07-08",
  },
  {
    slug: "seo-geo-aeo-nedir",
    date: "2026-05-06",
  },
  {
    slug: "web-sitesi-hizi-nasil-artirilir",
    date: "2026-01-20",
  },
  {
    slug: "core-web-vitals-rehberi",
    date: "2026-08-14",
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
    date: "2026-04-02",
  },
  {
    slug: "minimalist-tasarim-yaklasimlari",
    date: "2026-04-02",
  },
  {
    slug: "online-magaza-kurulumu",
    date: "2024-12-01",
  },
  {
    slug: "guclu-marka-imaji-olusturma",
    date: "2026-04-02",
  },
  {
    slug: "web-sitesi-guvenligi",
    date: "2026-04-02",
  },
  {
    slug: "web-analitik-araclari",
    date: "2026-04-02",
  },
];

// Bumped only when static (non-blog) pages actually change content —
// not on every build, so Google doesn't see a false "updated daily" signal.
const SITE_LAST_UPDATED = new Date("2026-08-14");

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
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Individual service pages
    {
      url: `${baseUrl}/hizmetler/web-tasarim`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/dijital-pazarlama`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/mobil-uygulama`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/yazilim-gelistirme`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Main SEO service page
    {
      url: `${baseUrl}/hizmetler/seo-hizmeti`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    // SEO landing pages
    {
      url: `${baseUrl}/seo-ajansi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/seo-uzmani`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    // Niche service pages
    {
      url: `${baseUrl}/hizmetler/performans-odakli-web-tasarim`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/kobi-web-tasarim`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/seo-uyumlu-web-sitesi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/yapay-zeka-chatbot`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hizmetler/yapay-zeka-otomasyon`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/e-ticaret-web-tasarim`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/islerimiz`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Individual project pages
    {
      url: `${baseUrl}/islerimiz/fluenta-ai`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/mentoria`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/atlantis`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/skoll-beauty`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/home-and-car`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/islerimiz/yatrehberi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Resource Center & Knowledge Base
    {
      url: `${baseUrl}/kaynak-merkezi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sozluk`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Comparison Pages
    {
      url: `${baseUrl}/karsilastirma`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karsilastirma/webcraft-vs-diy`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karsilastirma/freelancer-vs-ajans`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karsilastirma/platformlar`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Industry-specific landing pages
    {
      url: `${baseUrl}/hizmetler/e-ticaret`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kurumsal-web-tasarim`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fiyatlandirma`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Competitor-focused landing page
    {
      url: `${baseUrl}/en-iyi-web-tasarim-ajansi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Local SEO pages
    {
      url: `${baseUrl}/fethiye-web-tasarim-hizmetleri`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mugla-web-tasarim-seo-hizmetleri`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Legal pages
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kullanim-sartlari`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cerez-politikasi`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // FAQ page
    {
      url: `${baseUrl}/sss`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog posts - dynamically generated
    ...blogEntries,
  ];
}

import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Optimized font loading with better performance
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-montserrat",
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#f84525",
};

export const metadata: Metadata = {
  title: {
    default: "WebCraft - Web Tasarım ve Dijital Pazarlama Ajansı",
    template: "%s | WebCraft",
  },
  icons: {
    icon: [
      { url: "/webcraftLogo.png", sizes: "16x16", type: "image/png" },
      { url: "/webcraftLogo.png", sizes: "32x32", type: "image/png" },
      { url: "/webcraftLogo.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/webcraftLogo.png",
    apple: [{ url: "/webcraftLogo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/webcraftLogo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/webcraftLogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/webcraftLogo.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  },
  description:
    "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri. Web tasarım fiyatları ve kurumsal web sitesi tasarımı hizmetleri.",
  keywords:
    "web tasarım, SEO hizmeti, sosyal medya yönetimi, dijital pazarlama ajansı, web tasarım fiyatları, kurumsal web sitesi tasarımı",
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  publisher: "WebCraft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://webcraft.com.tr",
    siteName: "WebCraft",
    title: "WebCraft - Web Tasarım ve Dijital Pazarlama Ajansı",
    description:
      "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri.",
    images: [
      {
        url: "/webcraftLogo.png",
        width: 1200,
        height: 630,
        alt: "WebCraft Web Tasarım ve Dijital Pazarlama Ajansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@webcraft",
    creator: "@webcraft",
    title: "WebCraft - Web Tasarım ve Dijital Pazarlama Ajansı",
    description:
      "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri.",
    images: ["/webcraftLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GqJRNNMTgz5SQ_k9i0bUdDCxTmcYKf85eNHov3fwiog",
  },
  category: "technology",
  classification: "Web Design Agency",
  other: {
    "theme-color": "#f84525",
    "msapplication-TileColor": "#f84525",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "WebCraft",
    "application-name": "WebCraft",
    "msapplication-TileImage": "/webcraftLogo.png",
  },
};

// Enhanced Organization Schema for General Turkish Market + Local Focus
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebCraft Web Tasarım ve Dijital Pazarlama Ajansı",
  alternateName: "WebCraft",
  url: "https://www.webcraft.tr",
  logo: "https://www.webcraft.tr/webcraftLogo.png",
  description:
    "Türkiye'nin önde gelen web tasarım ve dijital pazarlama ajansı. Fethiye merkezli olup Türkiye genelinde profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri sunuyoruz.",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Babataşı Mahallesi, 778 Sokak No: 32/A",
    addressLocality: "Fethiye",
    addressRegion: "Muğla",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-507-944-17-15",
    contactType: "customer service",
    availableLanguage: "Turkish",
    areaServed: "TR",
    hoursAvailable: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  },
  sameAs: [
    "https://www.facebook.com/webcraft",
    "https://www.instagram.com/webcraft",
    "https://www.linkedin.com/company/webcraft",
    "https://twitter.com/webcraft",
  ],
  serviceArea: [
    {
      "@type": "Country",
      name: "Turkey",
    },
    {
      "@type": "City",
      name: "Fethiye",
    },
    {
      "@type": "City",
      name: "Muğla",
    },
    {
      "@type": "City",
      name: "Antalya",
    },
    {
      "@type": "City",
      name: "İzmir",
    },
    {
      "@type": "City",
      name: "İstanbul",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Türkiye Geneli Web Tasarım ve Dijital Pazarlama Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Tasarım ve Geliştirme",
          description:
            "Türkiye genelinde profesyonel web sitesi tasarımı ve geliştirme hizmetleri. Responsive tasarım ve SEO uyumlu yapı.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Hizmeti ve Arama Motoru Optimizasyonu",
          description:
            "Türkiye'de arama motoru optimizasyonu ve organik trafik artırma hizmetleri. Google'da üst sıralarda yer alma garantisi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sosyal Medya Yönetimi",
          description:
            "Türkiye genelinde sosyal medya hesap yönetimi ve içerik üretimi hizmetleri. Instagram, Facebook, LinkedIn yönetimi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dijital Pazarlama ve Reklam Yönetimi",
          description:
            "Türkiye'de kapsamlı dijital pazarlama ve Google Ads yönetimi hizmetleri. Hedefli reklam kampanyaları.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-ticaret Sitesi Kurulumu",
          description:
            "Türkiye genelinde güvenli e-ticaret sitesi kurulumu ve online satış çözümleri. Mobil uyumlu tasarım.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobil Uygulama Geliştirme",
          description:
            "Türkiye'de iOS ve Android mobil uygulama geliştirme hizmetleri. Cross-platform çözümler.",
        },
      },
    ],
  },
  // Additional organization properties
  numberOfEmployees: "10-20",
  awards: [
    "Türkiye'nin En İyi Web Tasarım Ajansı 2023",
    "Fethiye'de Güvenilir Dijital Ajans",
    "Muğla'da Kaliteli Hizmet Ödülü",
  ],
  knowsAbout: [
    "Web Tasarım",
    "SEO ve Arama Motoru Optimizasyonu",
    "Dijital Pazarlama",
    "Sosyal Medya Yönetimi",
    "E-ticaret Geliştirme",
    "Mobil Uygulama Geliştirme",
    "Türkiye Pazarı Dijital Stratejileri",
  ],
};

// Enhanced Local Business Schema for Fethiye + General Turkish Market
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WebCraft Web Tasarım Ajansı",
  alternateName: "WebCraft",
  description:
    "Fethiye'de profesyonel web tasarım, SEO ve dijital pazarlama ajansı. Türkiye genelinde hizmet veren güvenilir web tasarım şirketi.",
  url: "https://www.webcraft.tr",
  logo: "https://www.webcraft.tr/webcraftLogo.png",
  image: "https://www.webcraft.tr/webcraftLogo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Babataşı Mahallesi, 778 Sokak No: 32/A",
    addressLocality: "Fethiye",
    addressRegion: "Muğla",
    postalCode: "48300",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.6213",
    longitude: "29.1164",
  },
  telephone: "+90-507-944-17-15",
  email: "info@webcraft.com.tr",
  openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    {
      "@type": "City",
      name: "Fethiye",
    },
    {
      "@type": "City",
      name: "Muğla",
    },
    {
      "@type": "City",
      name: "Antalya",
    },
    {
      "@type": "City",
      name: "Denizli",
    },
    {
      "@type": "Country",
      name: "Turkey",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "36.6213",
      longitude: "29.1164",
    },
    geoRadius: "100000",
  },
  category: "Web Design Agency",
  knowsAbout: [
    "Web Tasarım",
    "SEO",
    "Dijital Pazarlama",
    "Sosyal Medya Yönetimi",
    "E-ticaret",
    "Mobil Uygulama Geliştirme",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fethiye Web Tasarım ve Türkiye Geneli Dijital Pazarlama Hizmetleri",
  },
  // Additional local business properties
  foundingDate: "2015",
  numberOfEmployees: "10-20",
  awards: [
    "Fethiye'de En İyi Web Tasarım Ajansı 2023",
    "Muğla'da Güvenilir Dijital Ajans",
  ],
  // Local service offerings
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fethiye Web Tasarım Hizmeti",
        description: "Fethiye'de profesyonel web sitesi tasarımı ve geliştirme",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Muğla SEO Hizmeti",
        description:
          "Muğla'da arama motoru optimizasyonu ve organik trafik artırma",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Türkiye Geneli Dijital Pazarlama",
        description: "Türkiye genelinde kapsamlı dijital pazarlama çözümleri",
      },
    },
  ],
};

// Service Schema for Detailed Service Descriptions
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Tasarım ve Dijital Pazarlama Hizmetleri",
  description:
    "Profesyonel web tasarım, SEO, sosyal medya yönetimi ve dijital pazarlama çözümleri",
  provider: {
    "@type": "Organization",
    name: "WebCraft",
    url: "https://www.webcraft.tr",
  },
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  serviceType: [
    "Web Design",
    "SEO Service",
    "Digital Marketing",
    "Social Media Management",
    "E-commerce Development",
    "Mobile App Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Tasarım ve Dijital Pazarlama Paketleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Tasarım Hizmeti",
          description: "Modern, responsive ve SEO uyumlu web sitesi tasarımı",
          serviceOutput: "Profesyonel web sitesi",
          serviceAudience: "İşletmeler ve kurumlar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Hizmeti",
          description:
            "Arama motoru optimizasyonu ile Google'da üst sıralarda yer alma",
          serviceOutput: "Arama motorlarında üst sıralarda yer alma",
          serviceAudience: "Online görünürlük isteyen işletmeler",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sosyal Medya Yönetimi",
          description:
            "Sosyal platformlarda marka varlığı ve müşteri etkileşimi",
          serviceOutput: "Güçlü sosyal medya varlığı",
          serviceAudience: "Sosyal medyada aktif olmak isteyen markalar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dijital Pazarlama",
          description:
            "Kapsamlı dijital pazarlama stratejileri ve kampanya yönetimi",
          serviceOutput: "Artırılmış online satış ve marka bilinirliği",
          serviceAudience: "Dijital büyüme hedefleyen işletmeler",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KXXC9TD3');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="GqJRNNMTgz5SQ_k9i0bUdDCxTmcYKf85eNHov3fwiog"
        />

        {/* Favicon - Multiple formats for maximum compatibility */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/webcraftLogo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/webcraftLogo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/webcraftLogo.png"
        />
        <link rel="shortcut icon" href="/webcraftLogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/webcraftLogo.png" />
        <link rel="icon" href="/webcraftLogo.png" />
        <link rel="mask-icon" href="/webcraftLogo.png" color="#f84525" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/webcraftLogo.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/bento/center1.webp"
          as="image"
          type="image/webp"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Critical CSS for hero section */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical hero styles for faster LCP */
            .hero-critical {
              font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-weight: 700;
              letter-spacing: -0.01em;
              line-height: 1.1;
              color: #ffffff;
              /* Performance optimizations */
              contain: layout style paint;
              will-change: auto;
              backface-visibility: hidden;
              transform: translateZ(0);
            }
            .hero-text {
              font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-size: 1.25rem;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.8);
              /* Performance optimizations */
              contain: layout style paint;
              will-change: auto;
              backface-visibility: hidden;
              transform: translateZ(0);
            }
            @media (min-width: 640px) {
              .hero-text { font-size: 1.125rem; }
            }
            @media (min-width: 768px) {
              .hero-text { font-size: 1.25rem; }
            }
            /* Optimize watermark for better performance */
            .watermark {
              contain: layout style paint;
              will-change: auto;
              transform: translateZ(0);
            }
          `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXXC9TD3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}

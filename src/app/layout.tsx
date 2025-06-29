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
  metadataBase: new URL("https://webcraft.com.tr"),
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
    google: "your-google-verification-code",
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
    "msapplication-TileImage": "/icon-192.png",
  },
};

// Structured Data for Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebCraft",
  url: "https://webcraft.com.tr",
  logo: "https://webcraft.com.tr/webcraftLogo.png",
  description:
    "Profesyonel web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama çözümleri sunan ajans.",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Levent Mahallesi, Büyükdere Caddesi No: 123, Kat: 5",
    addressLocality: "Beşiktaş",
    addressRegion: "İstanbul",
    postalCode: "34330",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-212-123-45-67",
    contactType: "customer service",
    availableLanguage: "Turkish",
  },
  sameAs: [
    "https://www.facebook.com/webcraft",
    "https://www.instagram.com/webcraft",
    "https://www.linkedin.com/company/webcraft",
    "https://twitter.com/webcraft",
  ],
  serviceArea: {
    "@type": "Country",
    name: "Turkey",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Tasarım ve Dijital Pazarlama Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Tasarım",
          description:
            "Profesyonel web sitesi tasarımı ve geliştirme hizmetleri",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Hizmeti",
          description:
            "Arama motoru optimizasyonu ve organik trafik artırma hizmetleri",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sosyal Medya Yönetimi",
          description:
            "Sosyal medya hesap yönetimi ve içerik üretimi hizmetleri",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dijital Pazarlama",
          description:
            "Kapsamlı dijital pazarlama ve reklam yönetimi hizmetleri",
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
            }
            .hero-text {
              font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              font-size: 1.25rem;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.8);
              contain: layout style paint;
            }
            @media (min-width: 640px) {
              .hero-text { font-size: 1.125rem; }
            }
            @media (min-width: 768px) {
              .hero-text { font-size: 1.25rem; }
            }
          `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}

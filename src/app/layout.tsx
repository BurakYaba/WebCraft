import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimized font loading with better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
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
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import GTMTracker from "@/components/GTMTracker";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

// Optimized font loading with better performance
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
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
};

export const metadata: Metadata = {
  title: {
    default: "Web Tasarım Ajansı | Profesyonel Web Sitesi Tasarımı | WebCraft",
    template: "%s | WebCraft",
  },
  description:
    "Profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. Uygun fiyatlı paketler. Ücretsiz teklif alın. Hemen iletişime geçin!",
  keywords: [
    "web tasarım",
    "profesyonel web tasarım",
    "web tasarım ajansı",
    "web sitesi",
    "web sitesi tasarımı",
    "SEO hizmeti",
    "dijital pazarlama",
    "e-ticaret web tasarımı",
    "kurumsal web sitesi",
    "responsive web tasarım",
    "modern web sitesi",
    "web geliştirme",
    "dijital ajans",
    "sosyal medya yönetimi",
    "Google Ads",
    "arama motoru optimizasyonu",
    "web analitik",
    "online mağaza kurulumu",
    "web tasarım fiyatları",
    "web tasarım hizmetleri",
  ],
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
    url: "https://www.webcraft.tr",
    siteName: "WebCraft",
    title: "Web Tasarım Ajansı | Profesyonel Web Sitesi Tasarımı | WebCraft",
    description:
      "Profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. Ücretsiz teklif alın.",
    images: [
      {
        url: "/webcraftLogo.png",
        width: 1200,
        height: 630,
        alt: "WebCraft - Profesyonel Web Tasarım ve SEO Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Tasarım Ajansı | Profesyonel Web Sitesi Tasarımı | WebCraft",
    description:
      "Profesyonel web tasarım hizmeti! Modern, responsive ve SEO uyumlu web siteleri. Ücretsiz teklif alın.",
    images: ["/webcraftLogo.png"],
    creator: "@webcraft",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for better performance */}

        {/* Structured Data - LocalBusiness (Organization + Location) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "WebCraft",
              alternateName: "WebCraft Web Tasarım Ajansı",
              url: "https://www.webcraft.tr",
              logo: "https://www.webcraft.tr/webcraftLogo.png",
              image: "https://www.webcraft.tr/webcraftLogo.png",
              description:
                "WebCraft, profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri sunan güvenilir web tasarım ajansıdır.",
              foundingDate: "2015",
              priceRange: "$$",
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
              email: "info@webcraft.tr",
              openingHours: "Mo-Fr 09:00-18:00",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-507-944-17-15",
                contactType: "customer service",
                availableLanguage: "Turkish",
                areaServed: "TR",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61585946570262",
                "https://www.instagram.com/webcraft_web/",
                "https://www.linkedin.com/company/webcraft-real",
                "https://x.com/webcraft_real",
              ],
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
                        "Arama motoru optimizasyonu ve dijital pazarlama hizmetleri",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-Ticaret Çözümleri",
                      description:
                        "Online mağaza kurulumu ve e-ticaret web sitesi tasarımı",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kurumsal Web Sitesi",
                      description:
                        "Kurumsal kimlik ve profesyonel web sitesi tasarımı",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "WebCraft",
              url: "https://www.webcraft.tr",
              description:
                "Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri.",
              publisher: {
                "@type": "Organization",
                name: "WebCraft",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.webcraft.tr/webcraftLogo.png",
                },
              },
            }),
          }}
        />

        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Web Tasarım ve SEO Hizmetleri",
              description:
                "Profesyonel web tasarım, SEO optimizasyonu ve dijital pazarlama hizmetleri.",
              provider: {
                "@type": "Organization",
                name: "WebCraft",
                url: "https://www.webcraft.tr",
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Turkey",
                },
                {
                  "@type": "Country",
                  name: "United Kingdom",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Tasarım Hizmetleri",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Sitesi Tasarımı",
                      description:
                        "Modern, responsive ve SEO uyumlu web sitesi tasarımı",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Hizmeti",
                      description:
                        "Arama motoru optimizasyonu ve Google'da üst sıralarda yer alma",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager - deferred to afterInteractive to avoid blocking LCP/TBT */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KXXC9TD3');`,
          }}
        />
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

        {/* GTM Page Tracking - Tracks all page views */}
        <GTMTracker />

        {children}

        {/* WhatsApp Floating Button */}
        <WhatsAppFloat />

        {/* Privacy-friendly analytics by Plausible */}
        <Script
          src="https://plausible.io/js/pa-q191e8vCHRe438HLugJ4V.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>

        {/* GA4 (G-TYXDJVMSP3) and Google Ads (AW-17976612124) are fired via GTM — no standalone gtag.js needed */}
      </body>
    </html>
  );
}

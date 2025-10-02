import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import GTMTracker from "@/components/GTMTracker";
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
};

export const metadata: Metadata = {
  title: {
    default: "WebCraft - Profesyonel Web Tasarım ve SEO Hizmetleri",
    template: "%s | WebCraft",
  },
  description:
    "WebCraft ile profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. Fethiye ve Muğla'da güvenilir web tasarım ajansı. Modern, responsive ve SEO uyumlu web siteleri.",
  keywords: [
    "web tasarım",
    "web sitesi tasarımı",
    "SEO hizmeti",
    "dijital pazarlama",
    "web tasarım ajansı",
    "Fethiye web tasarım",
    "Muğla SEO",
    "e-ticaret web tasarımı",
    "kurumsal web sitesi",
    "profesyonel web tasarım",
    "responsive web tasarım",
    "modern web sitesi",
    "web geliştirme",
    "dijital ajans",
    "marka tasarımı",
    "sosyal medya yönetimi",
    "Google Ads",
    "arama motoru optimizasyonu",
    "web analitik",
    "online mağaza",
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
    languages: {
      "tr-TR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.webcraft.tr",
    siteName: "WebCraft",
    title: "WebCraft - Profesyonel Web Tasarım ve SEO Hizmetleri",
    description:
      "WebCraft ile profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. Fethiye ve Muğla'da güvenilir web tasarım ajansı.",
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
    title: "WebCraft - Profesyonel Web Tasarım ve SEO Hizmetleri",
    description:
      "WebCraft ile profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. Fethiye ve Muğla'da güvenilir web tasarım ajansı.",
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
        {/* Google Tag Manager - Must be in head for proper tracking */}
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
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-192.png" />
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
        <link rel="shortcut icon" href="/icon-192.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/webcraftLogo.png"
          as="image"
          type="image/png"
        />

        {/* Critical CSS for LCP optimization */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .hero-section { 
                background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
              }
              .hero-title {
                font-size: clamp(2.5rem, 5vw, 4rem);
              font-weight: 700;
              line-height: 1.1;
                color: #1f2937;
            }
              .hero-subtitle {
                font-size: clamp(1.125rem, 2.5vw, 1.25rem);
                color: #6b7280;
              line-height: 1.6;
              }
              .cta-button {
                background: #dc2626;
                color: white;
                padding: 0.75rem 2rem;
                border-radius: 9999px;
                font-weight: 700;
                transition: all 0.3s ease;
                text-decoration: none;
                display: inline-block;
              }
              .cta-button:hover {
                background: #b91c1c;
                transform: translateY(-2px);
            }
          `,
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WebCraft",
              alternateName: "WebCraft Web Tasarım Ajansı",
              url: "https://www.webcraft.tr",
              logo: "https://www.webcraft.tr/webcraftLogo.png",
              description:
                "WebCraft, profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri sunan güvenilir web tasarım ajansıdır. Fethiye ve Muğla'da hizmet vermektedir.",
              foundingDate: "2015",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fethiye",
                addressRegion: "Muğla",
                addressCountry: "TR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-507-944-17-15",
                contactType: "customer service",
                availableLanguage: "Turkish",
              },
              sameAs: [
                "https://www.facebook.com/webcraft",
                "https://www.instagram.com/webcraft",
                "https://www.linkedin.com/company/webcraft",
                "https://www.twitter.com/webcraft",
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

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "WebCraft Web Tasarım Ajansı",
              image: "https://www.webcraft.tr/webcraftLogo.png",
              description:
                "Fethiye ve Muğla'da profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri sunan güvenilir web tasarım ajansı.",
              url: "https://www.webcraft.tr",
              telephone: "+90-507-944-17-15",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fethiye",
                addressRegion: "Muğla",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "36.6213",
                longitude: "29.1161",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "₺₺",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
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
                "Profesyonel web tasarım, SEO ve dijital pazarlama hizmetleri. Fethiye ve Muğla'da güvenilir web tasarım ajansı.",
              publisher: {
                "@type": "Organization",
                name: "WebCraft",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.webcraft.tr/webcraftLogo.png",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.webcraft.tr/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
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
                "Profesyonel web tasarım, SEO optimizasyonu ve dijital pazarlama hizmetleri. Fethiye ve Muğla'da güvenilir hizmet.",
              provider: {
                "@type": "Organization",
                name: "WebCraft",
                url: "https://www.webcraft.tr",
              },
              areaServed: {
                "@type": "Country",
                name: "Turkey",
              },
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

        {/* Google Analytics 4 - Using Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TYXDJVMSP3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TYXDJVMSP3', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              custom_map: {
                'custom_parameter_1': 'web_design_agency',
                'custom_parameter_2': 'seo_service'
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}

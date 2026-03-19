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

        {/* WhatsApp Floating Button - desktop slide-out */}
        <WhatsAppFloat />

        {/* Mobile sticky bottom bar — one-tap WhatsApp + call */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden border-t border-white/10 bg-[#181716]/95 backdrop-blur-sm">
          <a
            href="https://wa.me/905079441715"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25d366] text-white font-bold text-sm"
          >
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.173 1.387 1.387-5.173-0.292-0.507c-1.223-2.162-1.87-4.588-1.87-7.070 0-7.435 6.048-13.483 13.483-13.483s13.483 6.048 13.483 13.483c0 7.435-6.006 13.525-13.44 13.525zM21.305 18.629c-0.292-0.146-1.723-0.85-1.985-0.948s-0.458-0.146-0.652 0.146c-0.195 0.292-0.754 0.948-0.925 1.143s-0.341 0.219-0.633 0.073c-0.292-0.146-1.232-0.452-2.346-1.443-0.867-0.771-1.45-1.723-1.621-2.015s-0.017-0.448 0.127-0.594c0.131-0.131 0.292-0.341 0.438-0.511s0.195-0.292 0.292-0.487c0.098-0.195 0.049-0.365-0.024-0.511s-0.652-1.569-0.894-2.151c-0.236-0.567-0.476-0.49-0.652-0.499-0.168-0.008-0.361-0.010-0.554-0.010s-0.511 0.073-0.779 0.365c-0.268 0.292-1.024 1.001-1.024 2.441s1.048 2.833 1.194 3.028c0.146 0.195 2.059 3.138 4.983 4.401 0.696 0.301 1.239 0.481 1.663 0.615 0.699 0.219 1.335 0.188 1.837 0.114 0.561-0.083 1.723-0.704 1.965-1.383s0.243-1.261 0.17-1.383c-0.073-0.122-0.268-0.195-0.56-0.341z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+905079441715"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-red-500 text-white font-bold text-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Hemen Ara
          </a>
        </div>

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

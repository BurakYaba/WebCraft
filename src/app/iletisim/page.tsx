import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

// Lazy load Footer
const Footer = lazy(() => import("../../components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title:
    "Web Tasarım ve SEO Hizmeti İletişim | WebCraft - Ücretsiz Teklif Alın",
  description:
    "Web tasarım, SEO hizmeti ve dijital pazarlama için ücretsiz teklif alın. Web tasarım fiyatları ve sosyal medya yönetimi hizmetleri için bizimle iletişime geçin.",
  keywords:
    "web tasarım teklif, SEO hizmeti fiyat, dijital pazarlama ajansı iletişim, web tasarım fiyatları, sosyal medya yönetimi",
  openGraph: {
    title: "Web Tasarım ve SEO Hizmeti İletişim | WebCraft",
    description:
      "Web tasarım, SEO hizmeti ve dijital pazarlama için ücretsiz teklif alın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function ContactPage() {
  // Contact and Service Schema for SEO
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "WebCraft İletişim Sayfası",
    description:
      "Web tasarım, SEO ve dijital pazarlama hizmetleri için iletişime geçin",
    url: "https://www.webcraft.tr/iletisim",
    mainEntity: {
      "@type": "Organization",
      name: "WebCraft",
      description: "Web tasarım ve dijital pazarlama ajansı",
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
      },
      email: "info@webcraft.tr",
      url: "https://www.webcraft.tr",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Tasarım ve Dijital Pazarlama Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Tasarım Hizmeti",
            description: "Profesyonel web sitesi tasarımı ve geliştirme",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Hizmeti",
            description: "Arama motoru optimizasyonu ve organik trafik artırma",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dijital Pazarlama",
            description: "Kapsamlı dijital pazarlama çözümleri",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              {/* Left Content */}
              <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Web Tasarım ve SEO Hizmeti
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Web Tasarım
                  <br />
                  <span className="text-red-600">Teklifi Alın</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md">
                  <strong>Web tasarım</strong>, <strong>SEO hizmeti</strong> ve{" "}
                  <strong>dijital pazarlama</strong> projeleriniz için ücretsiz
                  teklif alın. Web tasarım fiyatları ve sosyal medya yönetimi
                  hizmetlerimiz hakkında bilgi edinin.
                </p>
              </div>

              {/* Right Content - Contact Form */}
              <div className="lg:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-gray-50 py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  E-posta
                </h3>
                <p className="text-gray-600 mb-2">
                  <a
                    href="mailto:info@webcraft.tr"
                    className="hover:text-red-600 transition-colors"
                  >
                    info@webcraft.tr
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="mailto:hello@webcraft.tr"
                    className="hover:text-red-600 transition-colors"
                  >
                    hello@webcraft.tr
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Telefon
                </h3>
                <p className="text-gray-600 mb-2">
                  <a
                    href="tel:+905079441715"
                    className="hover:text-red-600 transition-colors"
                  >
                    +90 (507) 944 17 15
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="tel:+905318335986"
                    className="hover:text-red-600 transition-colors"
                  >
                    +90 (531) 833 59 86
                  </a>
                </p>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Adres
                </h3>
                <p className="text-gray-600">
                  Babataşı Mahallesi, 778 Sokak
                  <br />
                  No: 32/A
                  <br />
                  Fethiye - Muğla
                </p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

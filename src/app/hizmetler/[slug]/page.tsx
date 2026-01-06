import { Metadata } from "next";
import { notFound } from "next/navigation";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import { getService, getAllServices } from "@/data/services";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbSchema";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import RelatedServices from "@/components/RelatedServices";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// Lazy load Footer
const Footer = lazy(() => import("@/components/Footer"));

// Loading component
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

// Generate metadata for each service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı | WebCraft",
      description: "Aradığınız hizmet bulunamadı.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    authors: [{ name: "WebCraft" }],
    creator: "WebCraft",
    publisher: "WebCraft",
    metadataBase: new URL("https://www.webcraft.tr"),
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.webcraft.tr/hizmetler/${service.slug}`,
      siteName: "WebCraft",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
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
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  // Service Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
      logo: "https://www.webcraft.tr/webcraftLogo.png",
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
    },
    serviceType: service.title,
    areaServed: {
      "@type": "Country",
      name: "Turkey",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Hizmetleri`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage" as const,
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Hizmetler", url: "/hizmetler" },
    { name: service.title, url: `/hizmetler/${service.slug}` },
  ]);

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQ Schema is output by ServiceFAQSection component */}

      <div className="min-h-screen bg-[#181716]">
        <Header />

        {/* Hero Section */}
        <ServiceHero
          title={service.title}
          subtitle={service.shortTitle}
          description={service.excerpt}
          watermark={service.watermark}
          backgroundImage={service.heroImage}
        />

        {/* What Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {service.whatSection.title}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {service.whatSection.content
                .split("\n")
                .filter((line) => line.trim().length > 0)
                .map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {service.whySection.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {service.whySection.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whySection.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-[#1a1918] rounded-lg border border-gray-800"
                >
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {service.title} Özellikleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profesyonel {service.title.toLowerCase()} hizmetimizin temel
                özellikleri
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-[#181716]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {service.title} Sürecimiz
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                2015 yılından bu yana {service.experienceYears} yıllık deneyimimiz
                ile {service.projectCount} başarılı proje tamamladık
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step) => (
                <div
                  key={step.number}
                  className="text-center p-6 bg-[#1a1918] rounded-lg border border-gray-800"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Neden WebCraft?
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Deneyim</h3>
                    <p className="text-red-100">
                      2015 yılından bu yana {service.experienceYears} yıllık
                      deneyim ve {service.projectCount} başarılı proje
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Uzmanlık</h3>
                    <p className="text-red-100">
                      {service.expertise.join(", ")} alanlarında uzman ekibimiz
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Güvenilirlik</h3>
                    <p className="text-red-100">
                      %98 müşteri memnuniyeti ve sürekli destek hizmetleri
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/iletisim"
                className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ServiceFAQSection faqs={service.faqs} schema={faqSchema} />

        {/* Related Services */}
        <RelatedServices currentSlug={service.slug} />

        {/* CTA Section */}
        <section className="py-20 bg-red-600">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {service.title} Hizmetimizden Yararlanın
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Profesyonel {service.title.toLowerCase()} hizmeti için hemen
              iletişime geçin. Ücretsiz analiz ve teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-[#181716] text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Ücretsiz Teklif Al
              </Link>
              <a
                href="tel:+905079441715"
                className="border border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                +90 (507) 944 17 15
              </a>
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


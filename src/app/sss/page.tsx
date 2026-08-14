import { Metadata } from "next";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS)",
  description:
    "Web tasarım, SEO hizmeti ve dijital pazarlama hakkında sıkça sorulan sorular. Web tasarım fiyatları, SEO hizmeti, e-ticaret web tasarımı ve daha fazlası hakkında merak ettiğiniz her şey.",
  keywords:
    "web tasarım SSS, SEO SSS, web tasarım soruları, web tasarım fiyatları, SEO hizmeti soruları, e-ticaret SSS",
  metadataBase: new URL("https://www.webcraft.tr"),
  alternates: {
    canonical: "/sss",
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular | WebCraft SSS",
    description:
      "Web tasarım, SEO hizmeti ve dijital pazarlama hakkında sıkça sorulan sorular ve cevapları.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function FAQPage() {
  // Breadcrumb for FAQ page
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Sıkça Sorulan Sorular", url: "/sss" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Breadcrumb items={breadcrumbItems} />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-5 md:px-10 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-lg text-gray-600">
              Web tasarım, SEO hizmeti ve dijital pazarlama hakkında merak
              ettiğiniz soruların cevapları.
            </p>
          </div>
          <FAQSection />
        </div>
        <Suspense fallback={<SectionSkeleton height="h-64" />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

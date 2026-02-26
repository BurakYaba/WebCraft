import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Home, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { generateBreadcrumb } from "@/utils/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Teşekkürler | WebCraft - Mesajınız İletildi",
  description:
    "Başvurunuz için teşekkür ederiz. En kısa sürede size dönüş yapacağız.",
  robots: "noindex, nofollow", // Prevent indexing of thank you page
};

export default function ThankYouPage() {
  const { schema: breadcrumbSchema, items: breadcrumbItems } =
    generateBreadcrumb([
      { name: "Ana Sayfa", url: "/" },
      { name: "Teşekkürler", url: "/tesekkurler" },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="min-h-screen bg-[#181716] pt-32 pb-20">
        <div className="container mx-auto px-16 md:px-20 lg:px-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full animate-pulse"></div>
                <CheckCircle className="w-24 h-24 text-red-500 relative animate-bounce-slow" />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Teşekkürler!
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Mesajınız başarıyla iletildi
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
              Başvurunuz için teşekkür ederiz. Ekibimiz en kısa sürede size
              dönüş yapacaktır. Genellikle 24 saat içinde size ulaşıyoruz.
            </p>

            {/* Stats/Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#1a1918] border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="text-red-500 mb-3 flex justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  E-posta Kontrolü
                </h3>
                <p className="text-gray-400 text-sm">
                  Gelen kutunuzu kontrol edin
                </p>
              </div>

              <div className="bg-[#1a1918] border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="text-red-500 mb-3 flex justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Hızlı İletişim
                </h3>
                <p className="text-gray-400 text-sm">
                  <a
                    href="tel:+905079441715"
                    className="hover:text-red-500 transition-colors"
                  >
                    +90 (507) 944 17 15
                  </a>
                </p>
              </div>

              <div className="bg-[#1a1918] border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="text-red-500 mb-3 flex justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  24 Saat İçinde
                </h3>
                <p className="text-gray-400 text-sm">
                  Size geri dönüş yapacağız
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Ana Sayfaya Dön
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-700 hover:border-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Blog Yazılarını İncele
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Acil bir durumunuz mu var?{" "}
                <a
                  href="tel:+905079441715"
                  className="text-red-500 hover:text-red-400 underline"
                >
                  Bizi hemen arayın
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

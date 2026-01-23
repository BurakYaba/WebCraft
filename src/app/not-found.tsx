import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Sayfa Bulunamadı | WebCraft",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönmek için tıklayın.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#181716] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Large Text */}
        <h1 className="text-9xl md:text-[12rem] font-extrabold text-red-500 mb-4">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Sayfa Bulunamadı
        </h2>

        <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
          Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana
          sayfaya dönerek web tasarım, SEO ve dijital pazarlama hizmetlerimizi
          inceleyebilirsiniz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/iletisim"
            className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
          >
            İletişime Geçin
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">
            Popüler Sayfalarımız
          </h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <Link
                href="/hizmetler"
                className="hover:text-red-400 transition-colors"
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link
                href="/islerimiz"
                className="hover:text-red-400 transition-colors"
              >
                Projelerimiz
              </Link>
            </li>
            <li>
              <Link
                href="/hakkimizda"
                className="hover:text-red-400 transition-colors"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-red-400 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

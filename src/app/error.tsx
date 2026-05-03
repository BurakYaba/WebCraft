"use client";

import Link from "next/link";

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#181716] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-red-500 mb-4">
          Hata
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Bir Şeyler Ters Gitti
        </h2>

        <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya ana
          sayfaya dönerek devam edin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
          >
            Ana Sayfaya Dön
          </Link>
        </div>

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
                href="/iletisim"
                className="hover:text-red-400 transition-colors"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

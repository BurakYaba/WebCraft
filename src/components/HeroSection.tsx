import RotatingCube from "./RotatingCube";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen pt-28 md:pt-32 pb-16 md:pb-20">
      {/* Watermark background */}
      <div className="watermark select-none pointer-events-none hidden sm:block">
        A
      </div>
      {/* Decorative dots (SVG) */}
      <svg
        className="absolute right-4 md:right-56 top-1/3 z-10 w-8 h-8 md:w-12 md:h-12"
        fill="none"
        viewBox="0 0 60 60"
        aria-hidden="true"
      >
        <g>
          <circle cx="6" cy="6" r="2" fill="#f84525" />
          <circle cx="18" cy="8" r="1.5" fill="#fff" />
          <circle cx="30" cy="12" r="1.5" fill="#fff" />
          <circle cx="42" cy="18" r="1.5" fill="#fff" />
          <circle cx="54" cy="24" r="1.5" fill="#fff" />
          <circle cx="12" cy="24" r="1" fill="#fff" />
          <circle cx="24" cy="30" r="1" fill="#fff" />
          <circle cx="36" cy="36" r="1" fill="#fff" />
        </g>
      </svg>
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
        <div className="flex flex-col items-start justify-center max-w-4xl">
          <div
            className="text-red-500 font-bold tracking-[0.35em] uppercase text-[10px] md:text-xs mb-10 mt-4 md:mt-0 font-narrow ml-2 md:ml-4"
            style={{ letterSpacing: "0.35em" }}
          >
            PROFESYONEL WEB TASARIM AJANSI
          </div>
          <div className="ml-8 md:ml-16 lg:ml-20">
            <h1
              className="hero-critical font-extrabold text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.1] mb-8 text-left max-w-3xl"
              style={{
                letterSpacing: "-0.01em",
              }}
            >
              Web Tasarım ve
              <br />
              <span className="text-red-500">Dijital Pazarlama</span>
              <br />
              Ajansı
            </h1>
            {/* Critical LCP element - optimized for faster rendering */}
            <p className="hero-text mb-10 max-w-2xl text-left">
              Profesyonel <strong>web tasarım</strong>,{" "}
              <strong>SEO hizmeti</strong> ve{" "}
              <strong>sosyal medya yönetimi</strong> ile markanızı dijital
              dünyada öne çıkarıyoruz. Kurumsal web sitesi tasarımı ve dijital
              pazarlama çözümleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/iletisim"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
                prefetch={true}
              >
                ÜCRETSİZ TEKLİF AL
              </Link>
              <Link
                href="/hakkimizda"
                className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
                prefetch={true}
              >
                BİZİ TANIYIN
              </Link>
            </div>
            <div className="text-sm text-white/60">
              <p>
                ✓ <strong>Web tasarım fiyatları</strong> için hemen teklif alın
              </p>
              <p>
                ✓ <strong>SEO hizmeti</strong> ile arama motorlarında öne çıkın
              </p>
              <p>
                ✓ <strong>Sosyal medya yönetimi</strong> ile markanızı büyütün
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Rotating Cube - loaded with lower priority */}
      <div className="absolute right-16 md:right-32 lg:right-40 bottom-24 md:bottom-32 z-10">
        <RotatingCube />
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-2 md:right-8 bottom-8 md:bottom-24 flex flex-col items-center z-10">
        <div className="w-px h-8 md:h-12 bg-white/40 mb-2"></div>
        <span
          className="uppercase tracking-widest text-[9px] md:text-xs text-white/70"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
        >
          KAYDIR
        </span>
      </div>
    </section>
  );
}

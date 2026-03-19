import { Suspense, memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import GoogleReviewsBadge from "./GoogleReviewsBadge";

// Lazy load the RotatingCube to improve LCP
const RotatingCube = dynamic(() => import("./RotatingCube"));

const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen pt-28 md:pt-32 pb-16 md:pb-20">
      {/* Watermark background - optimized for performance */}
      <div
        className="watermark select-none pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        A
      </div>

      {/* Decorative dots (SVG) - simplified */}
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

      {/* Left-aligned Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
        <div className="flex flex-col items-start justify-center max-w-4xl">
          <div
            className="text-red-500 font-bold tracking-[0.35em] uppercase text-[10px] md:text-xs mb-10 mt-4 md:mt-0 font-narrow ml-2 md:ml-4 text-left"
            style={{ letterSpacing: "0.35em" }}
          >
            PROFESYONEL WEB TASARIM AJANSI
          </div>
          <div className="w-full md:ml-16 lg:ml-20">
            <h1
              className="hero-critical font-extrabold text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.1] mb-8 text-left max-w-3xl"
              style={{
                letterSpacing: "-0.01em",
              }}
            >
              3 Saniyede Açılan,
              <br />
              <span className="text-red-500">Google&apos;a Hazır</span>
              <br />
              Web Siteleri
            </h1>
            {/* Critical LCP element - optimized for faster rendering */}
            <p className="hero-text mb-10 max-w-full sm:max-w-2xl text-center sm:text-left">
              Site yaptırıp sonuç alamayan işletmeler için{" "}
              <strong>performans odaklı web tasarım</strong>,{" "}
              <strong>teknik SEO</strong> ve <strong>dijital pazarlama</strong>{" "}
              çözümleri. 200&apos;den fazla projede kanıtlanmış yaklaşım.
            </p>

            {/* Inline trust signal — visible on all screen sizes */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                200+ Tamamlanan Proje
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                8+ Yıllık Deneyim
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Google&apos;da 4.9★
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-center sm:text-left w-full sm:w-auto">
              <Link
                href="/iletisim"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider w-full sm:w-auto"
                prefetch={true}
              >
                Ücretsiz Analiz Al
              </Link>
              <Link
                href="/islerimiz"
                className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm md:text-base uppercase tracking-wider w-full sm:w-auto"
                prefetch={true}
              >
                Projelerimizi Gör
              </Link>
            </div>

            {/* Google Reviews Badge — shown on mobile too (was desktop-only before) */}
            <div className="block sm:hidden mt-2">
              <GoogleReviewsBadge reviewCount={50} rating={4.9} />
            </div>
          </div>
        </div>
      </div>

      {/* Rotating Cube - only rendered on desktop (sm and above) for better mobile performance */}
      <div className="hidden sm:block absolute right-16 md:right-32 lg:right-40 bottom-24 md:bottom-32 z-20">
        <Suspense
          fallback={
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]" />
          }
        >
          <RotatingCube />
        </Suspense>
      </div>

      {/* Google Reviews Badge - desktop only (positioned absolutely) */}
      <div className="hidden sm:block absolute right-16 md:right-32 lg:right-40 bottom-8 md:bottom-12 z-20">
        <GoogleReviewsBadge reviewCount={50} rating={4.9} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-2 md:right-8 bottom-4 md:bottom-8 flex flex-col items-center z-20">
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
});

export default HeroSection;

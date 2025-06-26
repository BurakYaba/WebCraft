"use client";
import { useEffect, useRef } from "react";

export default function AboutHero() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Animation Area */}
      <div
        ref={backgroundRef}
        className="area-about-intro absolute inset-0 transform scale-x-0 bg-black transition-transform duration-[1250ms] ease-out origin-left"
      />

      {/* Content - Always visible initially */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Ribbon Text */}
        <div className="text-gray-600 text-xs md:text-sm uppercase tracking-[0.6em] mb-10 animate-fade-in-up">
          Hakkimizda
        </div>

        {/* Main Heading */}
        <h1 className="text-gray-900 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up delay-300">
          Dijital Dunyanin
          <br />
          <span className="text-red-500">Mimarlariyiz</span>
        </h1>

        {/* Description */}
        <div className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
          WebCraft olarak, markalarin dijital dunyadaki gorunurluğunu artiran,
          kullanici deneyimini on plana cikaran ve teknolojinin gucunu kullanan
          yaratici cozumler geliştiriyoruz.
        </div>

        {/* CTA Button */}
        <div className="mt-12 animate-fade-in-up delay-700">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105">
            Hikayemizi Kesfet
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 transform translate-x-16 opacity-10">
        <div className="text-white text-[200px] md:text-[300px] font-bold select-none">
          W
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs uppercase tracking-widest">Kaydir</div>
          <div className="w-px h-8 bg-white/40"></div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-[#181716] pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
      {/* Background decorative element */}
      <div className="absolute top-16 sm:top-20 right-0 opacity-5 sm:opacity-8 md:opacity-10">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
        {/* Small label */}
        <div
          className={`text-red-500 font-bold tracking-[0.35em] uppercase text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
          style={{ letterSpacing: "0.35em" }}
        >
          HiZMETLERİMİZ
        </div>

        {/* Main heading */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
          style={{ transform: "scaleX(0.98)", transformOrigin: "center" }}
        >
          Neler
          <br />
          Yapıyoruz
        </h1>

        {/* Description */}
        <p
          className={`text-base sm:text-lg md:text-xl text-white/80 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-0 transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          En iyi bildiğimiz ve yaptığımız şeyler. Dijital dünyada markanızı öne
          çıkaracak çözümler sunuyoruz.
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <Link href="/islerimiz">
            <button className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
              <span className="hidden sm:inline">PROJELERİMİZİ İNCELE</span>
              <span className="sm:hidden">PROJELER</span>
              <svg
                className="ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Background large text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[13rem] font-bold text-white/15 sm:text-white/18 md:text-white/20 transition-all duration-2000 delay-1000 whitespace-nowrap ${
              isVisible
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-110"
            }`}
            style={{ transform: "scaleX(1)", transformOrigin: "center" }}
          >
            WebCraft
          </div>
        </div>
      </div>
    </section>
  );
}

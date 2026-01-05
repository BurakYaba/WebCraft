"use client";

import Link from "next/link";
import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  watermark: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  watermark,
  backgroundImage,
  ctaText = "Ücretsiz Teklif Al",
  ctaLink = "/iletisim",
}: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
      )}
      
      {/* Watermark background - optimized for performance */}
      <div
        className="watermark select-none pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        {watermark}
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

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-16 md:px-20 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Content */}
          <div className="lg:w-2/3 lg:pr-16">
            <div className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">
              {subtitle}
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaLink}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                {ctaText}
              </Link>
              <a
                href="tel:+905079441715"
                className="border border-gray-300 text-white hover:bg-gray-50 hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


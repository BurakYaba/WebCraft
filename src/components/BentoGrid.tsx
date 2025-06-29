"use client";
import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Lazy load the heavy Three.js component
const RotatingEarth = lazy(() => import("./RotatingEarth"));

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  className?: string;
  direction: "left" | "right" | "up" | "down";
  backgroundImage?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  className,
  direction,
  backgroundImage,
}) => {
  const directionVariants = {
    left: { x: -80, opacity: 0 },
    right: { x: 80, opacity: 0 },
    up: { y: 80, opacity: 0 },
    down: { y: -80, opacity: 0 },
  };

  // Calculate distance for dynamic duration
  const getDistance = () => {
    switch (direction) {
      case "left":
      case "right":
        return 80;
      case "up":
      case "down":
        return 80;
      default:
        return 80;
    }
  };

  const distance = getDistance();
  const baseDuration = 0.8;
  const duration = baseDuration + (distance / 100) * 0.2;

  return (
    <motion.div
      className={`relative overflow-hidden group ${className}`}
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Optimized Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            priority={false}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />

      <div className="relative h-full p-8 flex flex-col justify-end z-20">
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 font-display group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-white/90 text-base md:text-lg mb-6 font-body opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
        <ul className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-white/90 font-component"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Loading fallback for RotatingEarth
const EarthFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-[200px] h-[200px] rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin" />
  </div>
);

export default function BentoGrid() {
  const services = [
    {
      title: "Web Tasarım",
      description: "Modern ve kullanıcı dostu web siteleri tasarlıyoruz.",
      features: ["Responsive Tasarım", "UI/UX Optimizasyonu", "SEO Dostu Yapı"],
      direction: "left" as const,
      backgroundImage: "/bento/web-tasarım.jpg",
    },
    {
      title: "Dijital Pazarlama",
      description: "Markanızı dijital dünyada öne çıkarıyoruz.",
      features: ["SEO/SEM", "Sosyal Medya", "İçerik Stratejisi"],
      direction: "up" as const,
      backgroundImage: "/bento/dijital-pazarlama.jpg",
    },
    {
      title: "E-Ticaret",
      description: "Online satış platformları geliştiriyoruz.",
      features: ["Güvenli Ödeme", "Stok Yönetimi", "Mobil Uyumlu"],
      direction: "right" as const,
      backgroundImage: "/bento/e-ticaret.jpg",
    },
    {
      title: "Mobil Uygulama",
      description: "iOS ve Android uygulamaları geliştiriyoruz.",
      features: ["Native Geliştirme", "Cross-Platform", "Push Bildirimler"],
      direction: "left" as const,
      backgroundImage: "/bento/mobil-uygulama.jpg",
    },
    {
      title: "Yazılım Geliştirme",
      description: "Özel yazılım çözümleri sunuyoruz.",
      features: ["Web Uygulamaları", "API Entegrasyonu", "Bakım & Destek"],
      direction: "right" as const,
      backgroundImage: "/bento/yazılım-geliştirme.jpg",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-5 relative">
        {/* Top row */}
        <ServiceCard
          {...services[0]}
          className="md:col-span-2 lg:col-span-3 aspect-[4/5] md:aspect-[262/396] rounded-[16px] md:rounded-[24px] border border-[#e5e5e5] transition-all duration-300"
        />

        {/* Middle card with notch */}
        <div className="relative md:col-span-4 lg:col-span-6 aspect-[4/3] md:aspect-[556/396]">
          <svg
            className="w-full h-full"
            viewBox="0 0 556 396"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              d="M24 0H532C545.255 0 556 10.7452 556 24V352.586C556 365.841 545.255 376.586 532 376.586H298.414C292.891 376.586 287.414 377.843 282.757 380.672L278 384L273.243 380.672C268.586 377.843 263.109 376.586 257.586 376.586H24C10.7452 376.586 0 365.841 0 352.586V24C0 10.7452 10.7452 0 24 0Z"
              className="fill-transparent transition-colors duration-300"
              stroke="#e5e5e5"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute inset-0 overflow-hidden rounded-[16px] md:rounded-[24px]">
            <ServiceCard {...services[1]} className="h-full" />
          </div>
        </div>

        <ServiceCard
          {...services[2]}
          className="md:col-span-2 lg:col-span-3 aspect-[4/5] md:aspect-[262/396] rounded-[16px] md:rounded-[24px] border border-[#e5e5e5] transition-all duration-300"
        />

        {/* Center rotating Earth with lazy loading */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[274px] h-[274px] z-10 hidden md:block">
          <Suspense fallback={<EarthFallback />}>
            <RotatingEarth className="w-full h-full" />
          </Suspense>
        </div>

        {/* Bottom row */}
        <ServiceCard
          {...services[3]}
          className="md:col-span-4 lg:col-span-6 aspect-[4/3] md:aspect-[556/396] rounded-[16px] md:rounded-[24px] border border-[#e5e5e5] transition-all duration-300"
        />
        <ServiceCard
          {...services[4]}
          className="md:col-span-4 lg:col-span-6 aspect-[4/3] md:aspect-[556/396] rounded-[16px] md:rounded-[24px] border border-[#e5e5e5] transition-all duration-300"
        />
      </div>
    </div>
  );
}

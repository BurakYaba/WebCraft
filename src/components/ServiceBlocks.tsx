"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceBlock {
  id: string;
  title: string;
  description: string;
  image: string;
  bgText: string;
}

interface ServiceBlockWithLink extends ServiceBlock {
  link: string;
}

const services: ServiceBlockWithLink[] = [
  {
    id: "web-tasarim",
    title: "Web Tasarım",
    description:
      "Modern ve kullanıcı dostu web siteleri tasarlıyoruz. Responsive tasarım, UI/UX optimizasyonu ve SEO dostu yapı ile markanızı dijital dünyada güçlü bir şekilde temsil ediyoruz. Her proje, kullanıcı deneyimini ön planda tutarak özenle tasarlanır.",
    image: "/bento/web-tasarım.jpg",
    bgText: "WEB",
    link: "/hizmetler/web-tasarim",
  },
  {
    id: "dijital-pazarlama",
    title: "Dijital Pazarlama",
    description:
      "Markanızı dijital dünyada öne çıkarıyoruz. SEO/SEM stratejileri, sosyal medya yönetimi ve içerik pazarlaması ile hedef kitlenize ulaşmanızı sağlıyoruz. Veri odaklı yaklaşımımızla ölçülebilir sonuçlar elde ediyoruz.",
    image: "/bento/dijital-pazarlama.jpg",
    bgText: "DIJITAL",
    link: "/hizmetler/dijital-pazarlama",
  },
  {
    id: "e-ticaret",
    title: "E-Ticaret",
    description:
      "Online satış platformları geliştiriyoruz. Güvenli ödeme sistemleri, stok yönetimi ve mobil uyumlu tasarım ile e-ticaret sitenizi başarıya taşıyoruz. Kullanıcı dostu arayüz ve hızlı performans garantisi sunuyoruz.",
    image: "/bento/e-ticaret.jpg",
    bgText: "TICARET",
    link: "/e-ticaret-web-tasarim",
  },
  {
    id: "mobil-uygulama",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android uygulamaları geliştiriyoruz. Native ve cross-platform çözümler ile kullanıcılarınıza en iyi mobil deneyimi sunuyoruz. Push bildirimler, offline çalışma ve performans optimizasyonu ile fark yaratıyoruz.",
    image: "/bento/mobil-uygulama.jpg",
    bgText: "MOBIL",
    link: "/hizmetler/mobil-uygulama",
  },
  {
    id: "yazilim-gelistirme",
    title: "Yazılım Geliştirme",
    description:
      "Özel yazılım çözümleri sunuyoruz. Web uygulamaları, API entegrasyonları ve kurumsal yazılımlar ile iş süreçlerinizi dijitalleştiriyoruz. Bakım ve destek hizmetlerimizle uzun vadeli ortaklık kuruyoruz.",
    image: "/bento/yazılım-geliştirme.jpg",
    bgText: "YAZILIM",
    link: "/hizmetler/yazilim-gelistirme",
  },
];

export default function ServiceBlocks() {
  const [visibleBlocks, setVisibleBlocks] = useState<Set<string>>(new Set());
  const blockRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleBlocks((prev) => new Set([...prev, service.id]));
            }
          });
        },
        { threshold: 0.3 }
      );

      if (blockRefs.current[service.id]) {
        observer.observe(blockRefs.current[service.id]!);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative bg-[#181716] py-16 sm:py-20">
      {/* Service header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-20 sm:mb-24 md:mb-32">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ne Yapıyoruz
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-0">
            En iyi bildiğimiz ve yaptığımız şeyler.
          </p>
        </div>
      </div>

      {/* Service blocks */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            ref={(el) => {
              blockRefs.current[service.id] = el;
            }}
            className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20"
          >
            {/* Background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={`text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[15rem] font-bold text-white/5 transition-all duration-1000 transition-linear whitespace-nowrap ${
                  visibleBlocks.has(service.id)
                    ? "opacity-100 transform scale-100"
                    : "opacity-0 transform scale-110"
                }`}
                style={{ transform: "scaleX(1)", transformOrigin: "center" }}
              >
                {service.bgText}
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  } space-y-6 sm:space-y-8`}
                >
                  <Link
                    href={service.link}
                    className={`block transition-all duration-1000 transition-linear text-center sm:text-left group/card ${
                      visibleBlocks.has(service.id)
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-10"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover/card:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:mx-0 px-2 sm:px-0 mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base group-hover/card:scale-105">
                      Detayları İncele
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover/card:translate-x-1 transition-transform duration-300"
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
                    </div>
                  </Link>
                </div>

                {/* Image */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } relative flex justify-center`}
                >
                  <Link
                    href={service.link}
                    className={`group block relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:h-[480px] xl:h-[520px] mx-auto transform transition-all duration-1000 transition-linear ${
                      visibleBlocks.has(service.id)
                        ? `${
                            index % 2 === 0
                              ? "rotate-6 sm:rotate-8 lg:rotate-12"
                              : "-rotate-6 sm:-rotate-8 lg:-rotate-12"
                          } scale-100`
                        : "opacity-0 rotate-0 scale-110"
                    } group-hover:scale-105`}
                  >
                    {/* Image container with clip-path animation */}
                    <div
                      className={`w-full h-full overflow-hidden transition-all duration-1000 transition-linear rounded-lg ${
                        visibleBlocks.has(service.id)
                          ? "clip-path-full"
                          : "clip-path-zero"
                      }`}
                      style={{
                        clipPath: visibleBlocks.has(service.id)
                          ? "inset(0 0 0 0)"
                          : "inset(0 100% 0 0)",
                      }}
                    >
                      <div
                        className={`w-full h-full transform transition-all duration-1000 transition-linear ${
                          visibleBlocks.has(service.id)
                            ? `${
                                index % 2 === 0
                                  ? "-rotate-6 sm:-rotate-8 lg:-rotate-12"
                                  : "rotate-6 sm:rotate-8 lg:rotate-12"
                              } scale-100`
                            : "rotate-0 scale-110"
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 320px"
                        />
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-red-500 rounded-full opacity-80"></div>
                    <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-3 sm:-left-4 lg:-left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-white/20 rounded-full"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

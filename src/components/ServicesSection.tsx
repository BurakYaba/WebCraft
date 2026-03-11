"use client";
import React, { useEffect, useRef } from "react";
import BentoGrid from "./BentoGrid";

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("services-heading-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "-100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-32 z-10 overflow-hidden">
      {/* Gradient overlay at bottom to transition to black */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 md:h-96 lg:h-[400px] pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div className="relative z-10 w-full">
        <div
          ref={headingRef}
          className="services-heading text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-[#1f1e1d]">
            Web Tasarım ve Dijital Pazarlama Hizmetleri
          </h2>
          <p className="text-lg md:text-xl text-[#6f6f6f] max-w-3xl mx-auto font-body">
            Profesyonel <strong>web tasarım</strong>,{" "}
            <strong>SEO hizmeti</strong>, <strong>sosyal medya yönetimi</strong>{" "}
            ve <strong>dijital pazarlama</strong> çözümleri ile markanızı
            dijital dünyada öne çıkarıyoruz. Kurumsal web sitesi tasarımı ve
            e-ticaret çözümleri sunuyoruz.
          </p>
        </div>

        <BentoGrid />
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gray-50 py-32 md:py-48 overflow-hidden">
      {/* Background Circle */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-[800px] h-[800px] rounded-full border border-gray-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div ref={sectionRef} className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/about-us.webp"
                alt="WebCraft Ekibi"
                width={600}
                height={800}
                className="w-full h-auto object-cover transform scale-110 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Ribbon */}
            <div className="text-gray-500 text-xs uppercase tracking-[0.6em] animate-fade-in-left">
              Vizyon
            </div>

            {/* Statement */}
            <div className="space-y-6 animate-fade-in-left delay-300">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Dijital Gelecegi
                <span className="text-red-500"> Şekillendiriyoruz</span>
              </h2>

              <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-4">
                <p>
                  2020 yılında kurulan WebCraft, Türkiye&apos;nin önde gelen
                  dijital ajanslarından biri olma yolunda kararlı adımlarla
                  ilerliyor. Yaratıcılık, teknoloji ve stratejiyi harmanlayan
                  yaklaşımımızla, markaların dijital dönüşüm yolculuğunda
                  güvenilir partneri oluyoruz.
                </p>

                <p>
                  Müşterilerimizin başarısını kendi başarımız olarak görüyor,
                  her projede mükemmellik arayışımızı sürdürüyoruz. Amacımız,
                  sadece web siteleri değil, dijital deneyimler yaratmak.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 animate-fade-in-left delay-500">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500">
                  50+
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Proje
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500">
                  25+
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Müşteri
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500">
                  4
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Yıl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Spark */}
      <div className="absolute bottom-0 left-0 transform -translate-x-20 translate-y-20 opacity-10">
        <div className="text-gray-300 text-[150px] font-bold select-none">
          *
        </div>
      </div>
    </section>
  );
}

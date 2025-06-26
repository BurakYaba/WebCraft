"use client";
import React from "react";
import BentoGrid from "./BentoGrid";

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="relative z-10 w-full">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-[#1f1e1d]">
            Hizmetlerimiz
          </h2>
          <p className="text-lg md:text-xl text-[#6f6f6f] max-w-2xl mx-auto font-body">
            Dijital dünyada markanızı öne çıkaracak çözümler sunuyoruz
          </p>
        </div>

        <BentoGrid />
      </div>
    </section>
  );
}

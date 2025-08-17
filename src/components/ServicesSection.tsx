"use client";
import React from "react";
import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-20 md:py-32 z-10">
      <div className="relative z-10 w-full">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-[#1f1e1d]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Web Tasarım ve Dijital Pazarlama Hizmetleri
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#6f6f6f] max-w-3xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Profesyonel <strong>web tasarım</strong>,{" "}
            <strong>SEO hizmeti</strong>, <strong>sosyal medya yönetimi</strong>{" "}
            ve <strong>dijital pazarlama</strong> çözümleri ile markanızı
            dijital dünyada öne çıkarıyoruz. Kurumsal web sitesi tasarımı ve
            e-ticaret çözümleri sunuyoruz.
          </motion.p>
        </motion.div>

        <BentoGrid />
      </div>
    </section>
  );
}

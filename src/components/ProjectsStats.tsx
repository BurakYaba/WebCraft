"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectsStats() {
  const stats = [
    {
      number: "50+",
      label: "Tamamlanan Proje",
      description: "Başarıyla teslim edilen dijital çözümler",
    },
    {
      number: "25+",
      label: "Mutlu Müşteri",
      description: "Uzun vadeli iş ortaklıkları kurduğumuz firmalar",
    },
    {
      number: "3+",
      label: "Yıllık Deneyim",
      description: "Dijital dünyada birikimli uzmanlık",
    },
    {
      number: "98%",
      label: "Müşteri Memnuniyeti",
      description: "Kalite ve hizmet standartlarımızın göstergesi",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f1e1d] mb-6">
            Rakamlarla Başarımız
          </h2>
          <p className="text-lg md:text-xl text-[#6f6f6f] max-w-2xl mx-auto">
            Her projeye verdiğimiz özenin ve kalite anlayışımızın somut
            göstergeleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-[#1f1e1d] mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-[#6f6f6f] leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

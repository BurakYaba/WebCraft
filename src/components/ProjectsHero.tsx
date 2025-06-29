"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#181716] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.1),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-500/60 rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">İşlerimiz</span>
            <span className="block text-red-500 mt-2">Portföyümüz</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Yaratıcılığımızı ve uzmanlığımızı bir araya getirerek ortaya
          çıkardığımız dijital deneyimler ve başarı hikayeleri.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-red-500 mb-2">
              50+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Proje
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-red-500 mb-2">
              25+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Mutlu Müşteri
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-red-500 mb-2">
              3+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Yıl Deneyim
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs uppercase tracking-wider">
              Kaydır
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-[8rem] sm:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-white/5 select-none"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          WORK
        </motion.div>
      </div>
    </section>
  );
}

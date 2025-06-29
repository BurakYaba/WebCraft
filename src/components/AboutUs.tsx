"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FireflyEffect from "./FireflyEffect";

export default function AboutUs() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about-us.webp"
          alt="WebCraft Web Tasarım Ajansı Hakkında"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Firefly Effect - Fixed positioning */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <FireflyEffect />
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Profesyonel Web Tasarım Ajansı
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 font-body leading-relaxed">
              2015 yılından bu yana <strong>web tasarım</strong>,{" "}
              <strong>SEO hizmeti</strong> ve <strong>dijital pazarlama</strong>{" "}
              alanlarında uzmanlaşmış bir ekibiz. Modern teknolojiler ve
              yaratıcı tasarım anlayışımızla, işletmenizi dijital dünyada öne
              çıkarıyoruz.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  8+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Yıllık Deneyim
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  200+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Tamamlanan Proje
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  50+
                </div>
                <div className="text-sm md:text-base text-white/80">
                  Mutlu Müşteri
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  24/7
                </div>
                <div className="text-sm md:text-base text-white/80">Destek</div>
              </div>
            </div>

            <Link href="/hakkimizda">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300"
              >
                Web Tasarım Ajansımızı Tanıyın
              </motion.button>
            </Link>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    SEO Uyumlu Web Tasarım
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Arama motorlarına uyumlu <strong>web tasarım</strong> ile
                    siteniz Google&apos;da üst sıralarda yer alır. SEO hizmeti
                    ile organik trafiğinizi artırıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Sosyal Medya Yönetimi
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Profesyonel <strong>sosyal medya yönetimi</strong> ile
                    markanızı sosyal platformlarda güçlendiriyoruz. Instagram,
                    Facebook ve LinkedIn yönetimi hizmetleri.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Dijital Pazarlama Ajansı
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Kapsamlı <strong>dijital pazarlama</strong> çözümleri ile
                    markanızı büyütüyoruz. Web tasarım fiyatları ve SEO hizmeti
                    paketlerimizle uygun maliyetli çözümler.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  year: string;
  client?: string;
  url?: string;
  featured?: boolean;
}

const projects: Project[] = [
  // Real Projects
  {
    id: "fluenta-ai",
    title: "Fluenta - İngilizce Öğrenme Platformu",
    description:
      "AI destekli 3D avatarlarla interaktif İngilizce öğrenme deneyimi sunan kapsamlı eğitim platformu",
    category: "Web Tasarım",
    image: "/projects/fluenta.png",
    tags: ["Next.js", "React", "TypeScript", "AI"],
    year: "2025",
    client: "Fluenta",
    url: "/islerimiz/fluenta-ai",
    featured: true,
  },
  {
    id: "mentoria",
    title: "Mentoria - Özel Ders Platformu",
    description:
      "Öğrenci ve öğretmenleri akıllı eşleştirme sistemiyle buluşturan güvenilir özel ders platformu",
    category: "Web Tasarım",
    image: "/projects/mentoria.png",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    year: "2025",
    client: "Mentoria",
    url: "/islerimiz/mentoria",
  },
  {
    id: "atlantis",
    title: "Atlantis Kreş ve Gündüz Bakımevi",
    description:
      "Muğla Menteşe'de Montessori, Reggio Emilia ve High Scope eğitim modelleriyle modern kreş web sitesi",
    category: "Web Tasarım",
    image: "/projects/atlantis.png",
    tags: ["Next.js", "React", "TailwindCSS"],
    year: "2025",
    client: "Atlantis Kreş",
    url: "/islerimiz/atlantis",
  },
  {
    id: "skoll-beauty",
    title: "Skoll Salon - Güzellik ve Bakım Salonu",
    description:
      "Modern tasarım ve online randevu sistemi ile Fethiye'nin önde gelen güzellik salonunun dijital vitrini",
    category: "Web Tasarım",
    image: "/projects/skoll.png",
    tags: ["Next.js", "React", "Online Randevu", "SEO"],
    year: "2025",
    client: "Skoll Salon",
    url: "/islerimiz/skoll-beauty",
  },
  {
    id: "home-and-car",
    title: "Home and Car - Edremit Emlak Platformu",
    description:
      "Kapsamlı CMS ve mülk yönetim sistemi ile modern emlak platformu. 50+ özellik ve yerel SEO optimizasyonu",
    category: "Web Tasarım",
    image: "/projects/homeandcar.png",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "CMS"],
    year: "2026",
    client: "Home and Car",
    url: "/islerimiz/home-and-car",
  },
  // Mock Projects
  {
    id: "1",
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu online alışveriş deneyimi",
    category: "E-Ticaret",
    image: "/bento/e-ticaret.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    year: "2024",
    client: "TechStore",
  },
  {
    id: "2",
    title: "Kurumsal Web Sitesi",
    description: "Profesyonel kurumsal kimlik ve dijital varlık",
    category: "Web Tasarım",
    image: "/bento/web-tasarım.jpg",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    year: "2024",
    client: "İnnovateTech",
  },
  {
    id: "3",
    title: "Mobil Fitness Uygulaması",
    description: "iOS ve Android uyumlu fitness takip uygulaması",
    category: "Mobil Uygulama",
    image: "/bento/mobil-uygulama.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    year: "2023",
    client: "FitLife",
  },
  {
    id: "4",
    title: "Dijital Pazarlama Kampanyası",
    description: "360° dijital pazarlama stratejisi ve uygulama",
    category: "Dijital Pazarlama",
    image: "/bento/dijital-pazarlama.jpg",
    tags: ["SEO", "SEM", "Social Media"],
    year: "2024",
    client: "GrowthCorp",
  },
  {
    id: "5",
    title: "Özel Yazılım Çözümü",
    description: "Kurumsal iş süreçleri için özel yazılım geliştirme",
    category: "Yazılım Geliştirme",
    image: "/bento/yazılım-geliştirme.jpg",
    tags: ["Python", "Django", "PostgreSQL"],
    year: "2023",
    client: "ManagePro",
  },
  {
    id: "6",
    title: "Restaurant Web Sitesi",
    description: "Rezervasyon sistemi entegreli restoran web sitesi",
    category: "Web Tasarım",
    image: "/bento/web-tasarım.jpg",
    tags: ["Vue.js", "Laravel", "MySQL"],
    year: "2024",
    client: "Gourmet Palace",
  },
];

const categories = ["Tümü", "Web Tasarım", "E-Ticaret", "Mobil Uygulama"];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProjects =
    activeCategory === "Tümü"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f1e1d] mb-6">
            Projelerimiz
          </h2>
          <p className="text-lg md:text-xl text-[#6f6f6f] max-w-2xl mx-auto">
            Her projede yaratıcılığımızı ve teknik uzmanlığımızı ortaya
            koyuyoruz
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {project.url ? (
                  <Link href={project.url} className="block cursor-pointer">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {project.year}
                      </div>

                      {/* External Link Icon */}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-red-500 font-medium">
                          {project.category}
                        </span>
                        {project.client && (
                          <span className="text-xs text-gray-500">
                            {project.client}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="cursor-default">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-red-500 font-medium">
                          {project.category}
                        </span>
                        {project.client && (
                          <span className="text-xs text-gray-500">
                            {project.client}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

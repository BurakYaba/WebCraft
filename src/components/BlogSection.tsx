import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 12,
      category: "Web Tasarım",
      title: "Profesyonel Web Tasarım Nedir? Kimler İçin Gerekli?",
      image: "/bento/web-tasarım.jpg",
      slug: "profesyonel-web-tasarim-nedir-kimler-icin-gerekli",
      isEven: false,
    },
    {
      id: 11,
      category: "Web Tasarım",
      title: "Kurumsal Web Sitesi Yaptırırken Yapılan 7 Kritik Hata",
      image: "/bento/web-tasarım.jpg",
      slug: "kurumsal-web-sitesi-yaptirirken-yapilan-7-kritik-hata",
      isEven: false,
    },
    {
      id: 1,
      category: "Web Tasarım",
      title: "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın",
      image: "/bento/web-tasarım.jpg",
      slug: "seo-uyumlu-web-tasarimi",
      isEven: false,
    },
    {
      id: 2,
      category: "Dijital Pazarlama",
      title: "Sosyal Medya Yönetimi ile Markanızı Büyütün",
      image: "/bento/dijital-pazarlama.jpg",
      slug: "sosyal-medya-yonetimi-marka-buyutme",
      isEven: true,
    },
    {
      id: 3,
      category: "SEO Hizmeti",
      title: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın",
      image: "/bento/mobil-uygulama.jpg",
      slug: "profesyonel-seo-hizmeti",
      isEven: false,
    },
    {
      id: 4,
      category: "Web Tasarım Fiyatları",
      title: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler",
      image: "/bento/yazılım-geliştirme.jpg",
      slug: "web-tasarim-fiyatlari",
      isEven: true,
    },
    {
      id: 5,
      category: "SEO",
      title: "2024'te SEO Trendleri ve Arama Motoru Optimizasyonu",
      image: "/bento/web-tasarım.jpg",
      slug: "2024-seo-trendleri",
      isEven: false,
    },
    {
      id: 6,
      category: "Web Tasarım",
      title: "Minimalist Tasarım Yaklaşımları ile Modern Web Siteleri",
      image: "/bento/web-tasarım.jpg",
      slug: "minimalist-tasarim-yaklasimlari",
      isEven: true,
    },
    {
      id: 7,
      category: "E-ticaret",
      title: "Online Mağaza Kurulumu ile Dijital Satış Başarınızı Artırın",
      image: "/bento/e-ticaret.jpg",
      slug: "online-magaza-kurulumu",
      isEven: false,
    },
    {
      id: 8,
      category: "Marka Kimliği",
      title: "Güçlü Marka İmajı Oluşturma ile Rakiplerinizden Öne Çıkın",
      image: "/bento/dijital-pazarlama.jpg",
      slug: "guclu-marka-imaji-olusturma",
      isEven: true,
    },
    {
      id: 9,
      category: "Web Güvenliği",
      title: "Web Sitesi Güvenliği ile Dijital Varlığınızı Koruyun",
      image: "/bento/web-tasarım.jpg",
      slug: "web-sitesi-guvenligi",
      isEven: false,
    },
    {
      id: 10,
      category: "Web Analitik",
      title: "Web Analitik Araçları ile Dijital Performansınızı Ölçün",
      image: "/bento/dijital-pazarlama.jpg",
      slug: "web-analitik-araclari",
      isEven: true,
    },
  ];

  return (
    <section className="relative py-32 md:py-40 bg-white overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-8 right-0 md:right-[-55px] opacity-15 pointer-events-none">
        <div className="w-16 h-16 md:w-24 md:h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
            <circle cx="50" cy="50" r="2" />
            <circle cx="20" cy="20" r="1.5" />
            <circle cx="80" cy="20" r="1.5" />
            <circle cx="20" cy="80" r="1.5" />
            <circle cx="80" cy="80" r="1.5" />
            <circle cx="50" cy="20" r="1" />
            <circle cx="50" cy="80" r="1" />
            <circle cx="20" cy="50" r="1" />
            <circle cx="80" cy="50" r="1" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-20 md:mb-32">
          <div className="flex-1">
            <div className="mb-2">
              <span className="inline-block bg-[#f84525] text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                WEB TASARIM BLOG
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-[0.9] tracking-tight">
              <div className="overflow-hidden">
                <div className="animate-fade-in-up">Web Tasarım</div>
              </div>
              <div className="overflow-hidden">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  ve SEO Rehberi
                </div>
              </div>
            </h2>
            <div className="mt-6 md:mt-8 max-w-lg">
              <p className="text-black/70 text-lg md:text-xl leading-relaxed">
                <strong>Web tasarım</strong>, <strong>SEO hizmeti</strong> ve{" "}
                <strong>dijital pazarlama</strong> konularında uzman görüşleri.
                Web tasarım fiyatları ve sosyal medya yönetimi hakkında pratik
                ipuçları.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[6.666%] gap-y-32 md:gap-y-40 mb-20 md:mb-32">
          {blogPosts.slice(0, 4).map((post) => (
            <article
              key={post.id}
              className={`group max-w-[560px] relative cursor-pointer transition-all duration-700 hover:transform hover:scale-[1.02] ${
                post.isEven ? "md:transform md:translate-y-24" : ""
              }`}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-6 md:mb-8">
                  <div className="aspect-[4/3] bg-gray-800 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={560}
                      height={420}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 md:px-6">
                  {/* Category */}
                  <h4 className="text-[#f84525] text-xs md:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4 transition-colors duration-300 group-hover:text-black">
                    {post.category}
                  </h4>

                  {/* Title */}
                  <h5 className="text-black text-xl md:text-2xl lg:text-3xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#f84525]">
                    {post.title}
                  </h5>

                  {/* Read more indicator */}
                  <div className="mt-4 md:mt-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                    <span className="text-black/70 text-sm font-medium uppercase tracking-wider flex items-center">
                      Devamını Oku
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="group relative bg-transparent border-2 border-black/20 text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-medium text-sm md:text-base uppercase tracking-wider transition-all duration-500 hover:border-[#f84525] hover:bg-[#f84525] hover:text-white hover:transform hover:scale-105 overflow-hidden inline-block"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-[#f84525] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative z-10 flex items-center">
              Tüm Web Tasarım Yazıları
              <svg
                className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Large watermark */}
      <div className="watermark text-[#f5f5f5] opacity-20">B</div>
    </section>
  );
};

export default BlogSection;

import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";

// Lazy load Footer
const Footer = lazy(() => import("../../components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "Web Tasarım ve SEO Blog | WebCraft - Dijital Pazarlama Rehberi",
  description:
    "Web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama konularında uzman görüşleri. Web tasarım fiyatları ve SEO rehberi.",
  keywords:
    "web tasarım blog, SEO hizmeti rehberi, sosyal medya yönetimi, dijital pazarlama blog, web tasarım fiyatları",
  openGraph: {
    title: "Web Tasarım ve SEO Blog | WebCraft",
    description:
      "Web tasarım, SEO hizmeti, sosyal medya yönetimi ve dijital pazarlama konularında uzman görüşleri.",
    type: "website",
    locale: "tr_TR",
  },
};

// Optimized blog posts data - moved outside component to prevent re-creation
const blogPosts = [
  {
    id: 1,
    category: "Web Tasarım",
    title: "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın",
    excerpt:
      "SEO uyumlu web tasarımı ile Google'da üst sıralarda yer alın. Profesyonel web tasarım ajansı ile organik trafiğinizi artırın ve dijital pazarlama başarınızı katlayın.",
    image: "/bento/web-tasarım.jpg",
    slug: "seo-uyumlu-web-tasarimi",
    date: "15 Aralık 2024",
    readTime: "12 dk",
    isEven: false,
  },
  {
    id: 2,
    category: "Dijital Pazarlama",
    title: "Sosyal Medya Yönetimi ile Markanızı Büyütün",
    excerpt:
      "Sosyal medya yönetimi ile markanızı büyütün. Profesyonel dijital pazarlama ajansı ile sosyal platformlarda güçlü varlık oluşturun ve müşteri etkileşiminizi artırın.",
    image: "/bento/dijital-pazarlama.jpg",
    slug: "sosyal-medya-yonetimi-marka-buyutme",
    date: "12 Aralık 2024",
    readTime: "15 dk",
    isEven: true,
  },
  {
    id: 3,
    category: "SEO Hizmeti",
    title: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın",
    excerpt:
      "Profesyonel SEO hizmeti ile arama motorlarında üst sıralarda yer alın. Web tasarım ajansı ile organik trafiğinizi artırın ve dijital pazarlama başarınızı katlayın.",
    image: "/bento/mobil-uygulama.jpg",
    slug: "profesyonel-seo-hizmeti",
    date: "10 Aralık 2024",
    readTime: "18 dk",
    isEven: false,
  },
  {
    id: 4,
    category: "Web Tasarım Fiyatları",
    title: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler",
    excerpt:
      "Web tasarım fiyatları hakkında detaylı bilgi ve uygun maliyetli web tasarım çözümleri. Profesyonel web tasarım ajansı ile bütçenize uygun kaliteli web sitesi oluşturun.",
    image: "/bento/yazılım-geliştirme.jpg",
    slug: "web-tasarim-fiyatlari",
    date: "8 Aralık 2024",
    readTime: "20 dk",
    isEven: true,
  },
  {
    id: 5,
    category: "SEO",
    title: "2024'te SEO Trendleri ve Arama Motoru Optimizasyonu",
    excerpt:
      "2024 yılında SEO dünyasında yaşanan büyük değişimler, AI etkisi, Core Web Vitals ve kullanıcı deneyimi odaklı optimizasyon stratejileri.",
    image: "/bento/web-tasarım.jpg",
    slug: "2024-seo-trendleri",
    date: "5 Aralık 2024",
    readTime: "15 dk",
    isEven: false,
  },
  {
    id: 6,
    category: "Web Tasarım",
    title: "Minimalist Tasarım Yaklaşımları ile Modern Web Siteleri",
    excerpt:
      "Minimalist tasarım yaklaşımları ile modern ve etkili web siteleri oluşturun. Profesyonel web tasarım ajansı ile kullanıcı deneyimini optimize edin ve markanızı öne çıkarın.",
    image: "/bento/web-tasarım.jpg",
    slug: "minimalist-tasarim-yaklasimlari",
    date: "3 Aralık 2024",
    readTime: "18 dk",
    isEven: true,
  },
  {
    id: 7,
    category: "E-ticaret",
    title: "Online Mağaza Kurulumu ile Dijital Satış Başarınızı Artırın",
    excerpt:
      "Online mağaza kurulumu ile dijital satış başarınızı artırın. Profesyonel e-ticaret ajansı ile kapsamlı online satış çözümleri oluşturun ve gelir artışı sağlayın.",
    image: "/bento/e-ticaret.jpg",
    slug: "online-magaza-kurulumu",
    date: "1 Aralık 2024",
    readTime: "20 dk",
    isEven: false,
  },
  {
    id: 8,
    category: "Marka Kimliği",
    title: "Güçlü Marka İmajı Oluşturma ile Rakiplerinizden Öne Çıkın",
    excerpt:
      "Güçlü marka imajı oluşturma ile rakiplerinizden öne çıkın. Profesyonel marka kimliği ajansı ile etkili marka stratejileri geliştirin ve müşteri sadakati kazanın.",
    image: "/bento/dijital-pazarlama.jpg",
    slug: "guclu-marka-imaji-olusturma",
    date: "28 Kasım 2024",
    readTime: "22 dk",
    isEven: true,
  },
  {
    id: 9,
    category: "Web Güvenliği",
    title: "Web Sitesi Güvenliği ile Dijital Varlığınızı Koruyun",
    excerpt:
      "Web sitesi güvenliği ile dijital varlığınızı koruyun. Profesyonel web güvenlik ajansı ile kapsamlı güvenlik çözümleri oluşturun ve siber tehditlere karşı korunun.",
    image: "/bento/web-tasarım.jpg",
    slug: "web-sitesi-guvenligi",
    date: "25 Kasım 2024",
    readTime: "18 dk",
    isEven: false,
  },
  {
    id: 10,
    category: "Web Analitik",
    title: "Web Analitik Araçları ile Dijital Performansınızı Ölçün",
    excerpt:
      "Web analitik araçları ile dijital performansınızı ölçün. Profesyonel analitik ajansı ile kapsamlı veri analizi çözümleri oluşturun ve iş kararlarınızı veri ile destekleyin.",
    image: "/bento/dijital-pazarlama.jpg",
    slug: "web-analitik-araclari",
    date: "22 Kasım 2024",
    readTime: "20 dk",
    isEven: true,
  },
];

const BlogPage = () => {
  // Blog Listing Schema for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "WebCraft Blog",
    description:
      "Web tasarım, SEO ve dijital pazarlama konularında uzman görüşleri ve rehberler",
    url: "https://www.webcraft.tr/blog",
    publisher: {
      "@type": "Organization",
      name: "WebCraft",
      url: "https://www.webcraft.tr",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      author: {
        "@type": "Organization",
        name: "WebCraft",
      },
      datePublished: post.date,
      dateModified: post.date,
      url: `https://www.webcraft.tr/blog/${post.slug}`,
      image: post.image,
      articleSection: post.category,
      keywords: post.category,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Header />

      <main className="min-h-screen bg-[#181716]">
        {/* Page Header */}
        <section className="relative pt-[180px] pb-[180px] md:pt-[116px] md:pb-[90px] bg-[#f9f9f9]">
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
            <div className="flex justify-between items-start md:items-end">
              {/* Left side - Title */}
              <div className="w-full md:w-[55%] lg:w-[60%]">
                <div className="mb-10 md:mb-12">
                  <span className="inline-block bg-[#f84525] text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                    WEB TASARIM BLOG
                  </span>
                </div>

                <div className="ml-0 md:ml-9">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[0.9] tracking-tight mb-6 md:mb-8">
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
                  </h1>
                </div>
              </div>

              {/* Right side - Description */}
              <div className="hidden md:flex items-end">
                <div className="max-w-[240px] transform translate-y-[-50px] text-[#6f6f6f]">
                  <p className="text-lg md:text-xl leading-relaxed mb-8">
                    <strong>Web tasarım</strong>, <strong>SEO hizmeti</strong>{" "}
                    ve <strong>dijital pazarlama</strong> konularında uzman
                    görüşleri. Web tasarım fiyatları ve sosyal medya yönetimi
                    hakkında pratik ipuçları.
                  </p>

                  {/* Decorative line */}
                  <div className="w-2.5 h-px bg-black/50 opacity-50" />
                </div>
              </div>
            </div>

            {/* Mobile description */}
            <div className="md:hidden mt-6">
              <p className="text-lg text-[#6f6f6f] leading-relaxed max-w-full">
                Web tasarım, dijital pazarlama ve teknoloji trendleri hakkında
                uzman görüşleri ve pratik ipuçları.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="relative py-32 md:py-40 bg-[#f9f9f9]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[6.666%] gap-y-32 md:gap-y-40">
              {blogPosts.map((post) => (
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
                          priority={post.id <= 2} // Prioritize first 2 images
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
                      <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4 transition-colors duration-300 group-hover:text-[#f84525]">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-black/70 text-base md:text-lg leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center text-sm text-black/50 space-x-4 mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} okuma</span>
                      </div>

                      {/* Read more indicator */}
                      <div className="opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
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
          </div>
        </section>
      </main>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default BlogPage;

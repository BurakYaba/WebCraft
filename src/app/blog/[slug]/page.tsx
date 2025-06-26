import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const blogPosts = [
    {
      id: 1,
      category: "Web Tasarım",
      title: "Modern Web Sitelerinde Kullanıcı Deneyimi Optimizasyonu",
      excerpt:
        "Kullanıcı deneyimini iyileştirmek için uygulanabilir stratejiler ve tasarım prensipleri.",
      content: `
        <p>Kullanıcı deneyimi (UX), modern web tasarımının en kritik unsurlarından biridir. Başarılı bir web sitesi, sadece görsel olarak çekici olmakla kalmaz, aynı zamanda kullanıcıların ihtiyaçlarını karşılayacak şekilde tasarlanır.</p>
        
        <h2>UX Optimizasyonunun Temelleri</h2>
        <p>Kullanıcı deneyimi optimizasyonu, kullanıcıların web sitenizle etkileşimini iyileştirmeye odaklanan sistematik bir yaklaşımdır. Bu süreç, kullanıcı araştırması, tasarım prensipleri ve sürekli test etme döngüsünü içerir.</p>
        
        <h3>1. Kullanıcı Araştırması</h3>
        <p>Etkili UX tasarımının ilk adımı, hedef kitlenizi anlamaktır. Kullanıcı araştırması şunları içerir:</p>
        <ul>
          <li>Kullanıcı anketleri ve mülakatlar</li>
          <li>Davranışsal analiz ve heatmap çalışmaları</li>
          <li>Rekabet analizi</li>
          <li>Persona geliştirme</li>
        </ul>
        
        <h3>2. Bilgi Mimarisi</h3>
        <p>Web sitenizin içeriğini mantıklı ve kullanıcı dostu bir şekilde organize etmek kritik önem taşır. İyi bir bilgi mimarisi:</p>
        <ul>
          <li>Açık ve anlaşılır navigasyon yapısı</li>
          <li>Mantıklı içerik hiyerarşisi</li>
          <li>Etkili arama ve filtreleme seçenekleri</li>
        </ul>
        
        <h2>Pratik UX İyileştirme Teknikleri</h2>
        
        <h3>Sayfa Yükleme Hızı</h3>
        <p>Kullanıcılar hızlı yüklenen sayfaları tercih eder. Sayfa hızını artırmak için:</p>
        <ul>
          <li>Görselleri optimize edin</li>
          <li>CSS ve JavaScript dosyalarını sıkıştırın</li>
          <li>CDN kullanın</li>
          <li>Lazy loading uygulayın</li>
        </ul>
        
        <h3>Mobil Uyumluluk</h3>
        <p>Mobil-first yaklaşımı benimseyin ve tüm cihazlarda mükemmel bir deneyim sunun. Bu şunları içerir:</p>
        <ul>
          <li>Responsive tasarım</li>
          <li>Dokunmatik öğeler için uygun boyutlar</li>
          <li>Mobil navigasyon optimizasyonu</li>
        </ul>
        
        <h2>Sonuç</h2>
        <p>UX optimizasyonu sürekli bir süreçtir. Kullanıcı geri bildirimlerini toplayın, A/B testleri yapın ve sürekli iyileştirme yaklaşımını benimseyin. Unutmayın, en iyi kullanıcı deneyimi, kullanıcılarınızın ihtiyaçlarını anladığınızda ve bu ihtiyaçları karşılayacak çözümler sunduğunuzda ortaya çıkar.</p>
      `,
      image: "/bento/web-tasarım.jpg",
      slug: "web-sitelerinde-kullanici-deneyimi",
      date: "15 Aralık 2024",
      readTime: "5 dk",
      author: "WebCraft Ekibi",
    },
    {
      id: 2,
      category: "Dijital Pazarlama",
      title: "E-Ticaret Sitelerinde Dönüşüm Oranlarını Artırmanın Yolları",
      excerpt:
        "E-ticaret sitelerinde satışları artırmak için kanıtlanmış yöntemler ve optimizasyon teknikleri.",
      content: `
        <p>E-ticaret sitelerinde dönüşüm oranı optimizasyonu (CRO), ziyaretçileri müşteriye dönüştürme sürecini iyileştirmeye odaklanan stratejik bir yaklaşımdır.</p>
        
        <h2>Dönüşüm Oranı Nedir?</h2>
        <p>Dönüşüm oranı, web sitenizi ziyaret eden kullanıcıların yüzde kaçının istenen eylemi (satın alma, kayıt olma, vb.) gerçekleştirdiğini gösteren metriktir.</p>
        
        <h2>Dönüşüm Oranını Artırma Stratejileri</h2>
        
        <h3>1. Site Hızı Optimizasyonu</h3>
        <p>Yavaş yüklenen sayfalar müşteri kaybına neden olur. Site hızını artırmak için:</p>
        <ul>
          <li>Görsel dosyalarını sıkıştırın</li>
          <li>Gereksiz eklentileri kaldırın</li>
          <li>Kaliteli hosting kullanın</li>
        </ul>
        
        <h3>2. Güven Sinyalleri</h3>
        <p>Müşteri güvenini artırmak için:</p>
        <ul>
          <li>SSL sertifikası kullanın</li>
          <li>Müşteri yorumlarını gösterin</li>
          <li>Güvenlik rozetleri ekleyin</li>
          <li>İletişim bilgilerini açık bir şekilde paylaşın</li>
        </ul>
        
        <h3>3. Ürün Sayfası Optimizasyonu</h3>
        <p>Etkili ürün sayfaları için:</p>
        <ul>
          <li>Yüksek kaliteli ürün görselleri</li>
          <li>Detaylı ürün açıklamaları</li>
          <li>Müşteri değerlendirmeleri</li>
          <li>Açık fiyatlandırma</li>
        </ul>
        
        <h2>Sonuç</h2>
        <p>Dönüşüm oranı optimizasyonu, sürekli test etme ve iyileştirme gerektiren bir süreçtir. Veriye dayalı kararlar alın ve müşteri deneyimini sürekli geliştirin.</p>
      `,
      image: "/bento/dijital-pazarlama.jpg",
      slug: "e-ticaret-donusum-oranlari",
      date: "12 Aralık 2024",
      readTime: "7 dk",
      author: "WebCraft Ekibi",
    },
    {
      id: 3,
      category: "Mobil Uygulama",
      title: "Mobil-First Yaklaşımı ile Responsive Tasarım Prensipleri",
      excerpt:
        "Mobil cihazlar öncelikli tasarım yaklaşımı ile responsive web siteleri oluşturma rehberi.",
      content: `
        <p>Mobil-first yaklaşımı, web tasarımında mobil cihazları önceleyerek başlayan ve daha sonra masaüstü cihazlara uyarlanan bir tasarım metodolojisidir.</p>
        
        <h2>Mobil-First Neden Önemli?</h2>
        <p>Günümüzde internet trafiğinin büyük çoğunluğu mobil cihazlardan gelmektedir. Bu nedenle mobil deneyimi öncelemek kritik önem taşır.</p>
        
        <h3>Responsive Tasarım Prensipleri</h3>
        <ul>
          <li>Esnek grid sistemleri</li>
          <li>Uyarlanabilir görseller</li>
          <li>Media queries kullanımı</li>
          <li>Dokunmatik arayüz optimizasyonu</li>
        </ul>
        
        <h2>Uygulama Teknikleri</h2>
        <p>Başarılı responsive tasarım için CSS Grid, Flexbox ve modern CSS tekniklerini kullanın.</p>
      `,
      image: "/bento/mobil-uygulama.jpg",
      slug: "mobil-first-responsive-tasarim",
      date: "10 Aralık 2024",
      readTime: "6 dk",
      author: "WebCraft Ekibi",
    },
    {
      id: 4,
      category: "Yazılım Geliştirme",
      title: "Next.js ve React ile Performanslı Web Uygulamaları Geliştirme",
      excerpt:
        "Modern web uygulamaları için Next.js ve React kullanarak yüksek performanslı çözümler geliştirme.",
      content: `
        <p>Next.js, React tabanlı web uygulamaları geliştirmek için güçlü bir framework&#39;tür. Server-side rendering, static site generation ve birçok optimizasyon özelliği sunar.</p>
        
        <h2>Next.js&#39;in Avantajları</h2>
        <ul>
          <li>Otomatik kod bölme (code splitting)</li>
          <li>Server-side rendering (SSR)</li>
          <li>Static site generation (SSG)</li>
          <li>API routes</li>
          <li>Görsel optimizasyonu</li>
        </ul>
        
        <h3>Performans Optimizasyonu</h3>
        <p>Next.js ile yüksek performanslı uygulamalar geliştirmek için en iyi pratikleri öğrenin.</p>
      `,
      image: "/bento/yazılım-geliştirme.jpg",
      slug: "nextjs-react-performansli-uygulamalar",
      date: "8 Aralık 2024",
      readTime: "8 dk",
      author: "WebCraft Ekibi",
    },
    {
      id: 5,
      category: "SEO",
      title: "2024&#39;te SEO Trendleri ve Arama Motoru Optimizasyonu",
      excerpt:
        "Güncel SEO stratejileri ve arama motoru algoritmalarında öne çıkmanın yolları.",
      content: `
        <p>2024 yılında SEO dünyası sürekli değişiyor. Arama motorları kullanıcı deneyimini ve içerik kalitesini daha da önemsiyor.</p>
        
        <h2>2024 SEO Trendleri</h2>
        <ul>
          <li>Core Web Vitals optimizasyonu</li>
          <li>AI ve makine öğrenmesi etkisi</li>
          <li>Voice search optimizasyonu</li>
          <li>E-A-T (Expertise, Authoritativeness, Trustworthiness)</li>
        </ul>
        
        <h3>Teknik SEO</h3>
        <p>Site hızı, mobil uyumluluk ve yapısal veri işaretlemesi gibi teknik faktörler kritik önem taşır.</p>
      `,
      image: "/bento/web-tasarım.jpg",
      slug: "2024-seo-trendleri",
      date: "5 Aralık 2024",
      readTime: "6 dk",
      author: "WebCraft Ekibi",
    },
  ];

  return blogPosts.find((post) => post.slug === slug);
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#181716]">
        {/* Hero Section with Background Image */}
        <section
          className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${post.image})`,
          }}
        >
          <div className="flex-1 flex flex-col justify-between pt-32 pb-24">
            {/* Header Content */}
            <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                {/* Left side - Title */}
                <div className="w-full md:w-[60%] lg:w-[70%]">
                  <div className="mb-10 md:mb-12">
                    <span className="inline-block bg-[#f84525] text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <div className="ml-0 md:ml-9">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 md:mb-8">
                      {post.title}
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-[#f9f9f9] py-32 md:py-40">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <div className="flex justify-between">
              {/* Main Content */}
              <div className="w-full md:w-[75%] lg:w-[70%]">
                {/* Article Meta */}
                <div className="mb-12 pb-8 border-b border-black/10">
                  <div className="flex items-center text-sm text-black/60 space-x-6">
                    <span>Yazar: {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none text-black/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                />

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-black/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-black/60">
                        Bu yazıyı paylaş:
                      </span>
                      <div className="flex items-center space-x-3">
                        <button className="w-10 h-10 bg-[#1da1f2] text-white rounded-full flex items-center justify-center hover:bg-[#1a91da] transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </button>

                        <button className="w-10 h-10 bg-[#0077b5] text-white rounded-full flex items-center justify-center hover:bg-[#006396] transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </button>

                        <button className="w-10 h-10 bg-[#1877f2] text-white rounded-full flex items-center justify-center hover:bg-[#166fe5] transition-colors">
                          <Facebook className="w-4 h-4" />
                        </button>

                        <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
                          <Instagram className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/blog"
                        className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
                      >
                        <span>← Blog&apos;a Geri Dön</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="hidden md:block w-[20%] ml-[5%]">
                <div className="sticky top-32">
                  <h3 className="text-lg font-bold text-black mb-6">
                    İlgili Yazılar
                  </h3>
                  <div className="space-y-6">
                    <a href="#" className="block group">
                      <h4 className="text-sm font-medium text-black group-hover:text-[#f84525] transition-colors leading-tight">
                        Mobil-First Yaklaşımı ile Responsive Tasarım
                      </h4>
                      <p className="text-xs text-black/60 mt-2">5 dk okuma</p>
                    </a>

                    <a href="#" className="block group">
                      <h4 className="text-sm font-medium text-black group-hover:text-[#f84525] transition-colors leading-tight">
                        SEO Trendleri ve Optimizasyon
                      </h4>
                      <p className="text-xs text-black/60 mt-2">6 dk okuma</p>
                    </a>

                    <a href="#" className="block group">
                      <h4 className="text-sm font-medium text-black group-hover:text-[#f84525] transition-colors leading-tight">
                        Web Sitesi Güvenliği
                      </h4>
                      <p className="text-xs text-black/60 mt-2">8 dk okuma</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

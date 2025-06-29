import React, { lazy, Suspense } from "react";
import { Metadata } from "next";
import Header from "../../../components/Header";
import { notFound } from "next/navigation";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

// Lazy load Footer
const Footer = lazy(() => import("../../../components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-100 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

// Optimized blog posts data - moved outside component to prevent re-creation
const blogPosts = [
  {
    id: 1,
    category: "Web Tasarım",
    title: "SEO Uyumlu Web Tasarımı ile Google'da Üst Sıralarda Yer Alın",
    excerpt:
      "Arama motorlarına uyumlu web tasarım teknikleri ve SEO hizmeti ile organik trafiğinizi artırın.",
    content: `
      <p>SEO uyumlu web tasarımı, modern dijital pazarlama stratejilerinin temel taşlarından biridir. Başarılı bir web sitesi, sadece görsel olarak çekici olmakla kalmaz, aynı zamanda arama motorlarında üst sıralarda yer alacak şekilde optimize edilir.</p>
      
      <h2>SEO Uyumlu Web Tasarımının Temelleri</h2>
      <p>SEO hizmeti ile entegre web tasarımı, kullanıcı deneyimini ve arama motoru görünürlüğünü aynı anda optimize etmeye odaklanır. Bu yaklaşım, organik trafiğinizi artırırken kullanıcı memnuniyetini de sağlar.</p>
      
      <h3>1. Teknik SEO Optimizasyonu</h3>
      <p>Web tasarım sürecinde teknik SEO unsurlarını göz önünde bulundurun:</p>
      <ul>
        <li>Hızlı sayfa yükleme süreleri</li>
        <li>Mobil uyumlu tasarım</li>
        <li>Temiz ve semantik HTML yapısı</li>
        <li>Optimize edilmiş görseller</li>
        <li>Structured data markup</li>
      </ul>
      
      <h3>2. İçerik Stratejisi</h3>
      <p>SEO hizmeti ile uyumlu içerik oluşturma:</p>
      <ul>
        <li>Hedef anahtar kelimeler için optimize edilmiş başlıklar</li>
        <li>Kaliteli ve bilgilendirici içerik</li>
        <li>İç linkleme stratejisi</li>
        <li>Meta açıklamalar ve başlık etiketleri</li>
      </ul>
      
      <h2>Web Tasarım Fiyatları ve SEO Değeri</h2>
      
      <h3>Yatırım Getirisi</h3>
      <p>SEO uyumlu web tasarımı, web tasarım fiyatları açısından daha yüksek bir başlangıç maliyeti gerektirebilir, ancak uzun vadede organik trafik artışı ile bu yatırımı fazlasıyla karşılar.</p>
      
      <h3>Rekabet Avantajı</h3>
      <p>SEO hizmeti ile desteklenen web tasarımı, rakiplerinizden öne çıkmanızı sağlar ve dijital pazarlama stratejinizi güçlendirir.</p>
      
      <h2>Sonuç</h2>
      <p>SEO uyumlu web tasarımı, modern işletmeler için vazgeçilmez bir gerekliliktir. Profesyonel web tasarım ajansı ile çalışarak, hem görsel çekicilik hem de arama motoru optimizasyonu sağlayabilirsiniz.</p>
    `,
    image: "/bento/web-tasarım.jpg",
    slug: "seo-uyumlu-web-tasarimi",
    date: "15 Aralık 2024",
    readTime: "5 dk",
    author: "WebCraft Ekibi",
  },
  {
    id: 2,
    category: "Dijital Pazarlama",
    title: "Sosyal Medya Yönetimi ile Markanızı Büyütün",
    excerpt:
      "Profesyonel sosyal medya yönetimi stratejileri ile markanızı sosyal platformlarda güçlendirin.",
    content: `
      <p>Sosyal medya yönetimi, modern dijital pazarlama stratejilerinin en etkili araçlarından biridir. Doğru yaklaşımla markanızı sosyal platformlarda güçlendirebilir ve hedef kitlenizle etkili iletişim kurabilirsiniz.</p>
      
      <h2>Sosyal Medya Yönetimi Nedir?</h2>
      <p>Sosyal medya yönetimi, markanızın sosyal medya hesaplarının stratejik olarak yönetilmesi, içerik üretimi ve topluluk etkileşimini içeren kapsamlı bir süreçtir.</p>
      
      <h2>Etkili Sosyal Medya Yönetimi Stratejileri</h2>
      
      <h3>1. Platform Seçimi</h3>
      <p>Hedef kitlenizin bulunduğu platformları belirleyin:</p>
      <ul>
        <li>Instagram: Görsel içerik ve genç kitle</li>
        <li>LinkedIn: B2B ve profesyonel ağ</li>
        <li>Facebook: Geniş kitle ve topluluk oluşturma</li>
        <li>Twitter: Anlık güncellemeler ve haber paylaşımı</li>
      </ul>
      
      <h3>2. İçerik Stratejisi</h3>
      <p>Etkili sosyal medya yönetimi için içerik planlaması:</p>
      <ul>
        <li>Düzenli içerik takvimi</li>
        <li>Çeşitli içerik türleri (görsel, video, yazı)</li>
        <li>Marka tutarlılığı</li>
        <li>Trend konuları takip etme</li>
      </ul>
      
      <h3>3. Topluluk Yönetimi</h3>
      <p>Takipçilerinizle etkili iletişim kurun:</p>
      <ul>
        <li>Yorumlara hızlı yanıt</li>
        <li>Kullanıcı içeriği paylaşımı</li>
        <li>Etkileşim oranını artırma</li>
        <li>Kriz yönetimi</li>
      </ul>
      
      <h2>Sosyal Medya Yönetimi Fiyatları</h2>
      <p>Profesyonel sosyal medya yönetimi hizmetleri, markanızın büyüklüğüne ve ihtiyaçlarına göre değişkenlik gösterir. Web tasarım ajansı ile birlikte sosyal medya yönetimi paketleri oluşturabilirsiniz.</p>
      
      <h2>Sonuç</h2>
      <p>Sosyal medya yönetimi, dijital pazarlama stratejinizin vazgeçilmez bir parçasıdır. Doğru yaklaşımla markanızı sosyal platformlarda güçlendirebilir ve organik büyüme sağlayabilirsiniz.</p>
    `,
    image: "/bento/dijital-pazarlama.jpg",
    slug: "sosyal-medya-yonetimi-marka-buyutme",
    date: "12 Aralık 2024",
    readTime: "7 dk",
    author: "WebCraft Ekibi",
  },
  {
    id: 3,
    category: "SEO Hizmeti",
    title: "Profesyonel SEO Hizmeti ile Organik Trafiğinizi Artırın",
    excerpt:
      "SEO hizmeti ile arama motorlarında üst sıralarda yer alın ve organik trafiğinizi artırın.",
    content: `
      <p>Profesyonel SEO hizmeti, web sitenizin arama motorlarında üst sıralarda yer almasını sağlayarak organik trafiğinizi artıran kapsamlı bir dijital pazarlama stratejisidir.</p>
      
      <h2>SEO Hizmeti Nedir?</h2>
      <p>SEO (Search Engine Optimization), web sitenizin arama motorlarında daha görünür olmasını sağlayan teknik ve stratejik optimizasyon sürecidir.</p>
      
      <h2>SEO Hizmeti Kapsamı</h2>
      
      <h3>1. Teknik SEO</h3>
      <p>Web sitesinin teknik yapısının optimize edilmesi:</p>
      <ul>
        <li>Site hızı optimizasyonu</li>
        <li>Mobil uyumluluk</li>
        <li>URL yapısı optimizasyonu</li>
        <li>XML sitemap oluşturma</li>
        <li>Robots.txt optimizasyonu</li>
      </ul>
      
      <h3>2. İçerik SEO</h3>
      <p>İçerik kalitesi ve optimizasyonu:</p>
      <ul>
        <li>Anahtar kelime araştırması</li>
        <li>İçerik optimizasyonu</li>
        <li>Meta açıklamalar</li>
        <li>Başlık etiketleri</li>
        <li>İç linkleme stratejisi</li>
      </ul>
      
      <h3>3. Off-Page SEO</h3>
      <p>Web sitesi dışındaki faktörler:</p>
      <ul>
        <li>Backlink oluşturma</li>
        <li>Sosyal medya sinyalleri</li>
        <li>Marka mention'ları</li>
        <li>Online itibar yönetimi</li>
      </ul>
      
      <h2>SEO Hizmeti Fiyatları</h2>
      <p>SEO hizmeti fiyatları, projenin kapsamına ve hedeflenen anahtar kelimelere göre değişiklik gösterir. Web tasarım ajansı ile birlikte kapsamlı SEO paketleri oluşturabilirsiniz.</p>
      
      <h2>Sonuç</h2>
      <p>Profesyonel SEO hizmeti, uzun vadeli organik trafik artışı sağlar ve dijital pazarlama stratejinizin temelini oluşturur. Doğru SEO stratejisi ile arama motorlarında üst sıralarda yer alabilirsiniz.</p>
    `,
    image: "/bento/mobil-uygulama.jpg",
    slug: "profesyonel-seo-hizmeti",
    date: "10 Aralık 2024",
    readTime: "6 dk",
    author: "WebCraft Ekibi",
  },
  {
    id: 4,
    category: "Web Tasarım Fiyatları",
    title: "Web Tasarım Fiyatları ve Uygun Maliyetli Çözümler",
    excerpt:
      "Web tasarım fiyatları hakkında detaylı bilgi ve uygun maliyetli web tasarım çözümleri.",
    content: `
      <p>Web tasarım fiyatları, işletmenizin dijital varlığını oluştururken en önemli faktörlerden biridir. Doğru web tasarım ajansı seçimi ve uygun maliyetli çözümler ile bütçenize uygun profesyonel web sitesi oluşturabilirsiniz.</p>
      
      <h2>Web Tasarım Fiyatlarını Etkileyen Faktörler</h2>
      <p>Web tasarım fiyatları, projenin kapsamına ve gereksinimlerine göre değişiklik gösterir.</p>
      
      <h3>1. Tasarım Karmaşıklığı</h3>
      <ul>
        <li>Özel tasarım vs hazır tema</li>
        <li>Sayfa sayısı</li>
        <li>Özel fonksiyonlar</li>
        <li>Responsive tasarım</li>
      </ul>
      
      <h3>2. Teknik Gereksinimler</h3>
      <ul>
        <li>E-ticaret entegrasyonu</li>
        <li>Özel yazılım geliştirme</li>
        <li>Veritabanı entegrasyonu</li>
        <li>API entegrasyonları</li>
      </ul>
      
      <h3>3. İçerik Yönetimi</h3>
      <ul>
        <li>CMS entegrasyonu</li>
        <li>İçerik oluşturma</li>
        <li>SEO optimizasyonu</li>
        <li>Çoklu dil desteği</li>
      </ul>
      
      <h2>Uygun Maliyetli Web Tasarım Çözümleri</h2>
      
      <h3>Paket Seçenekleri</h3>
      <p>Web tasarım ajansı olarak farklı bütçelere uygun paketler sunuyoruz:</p>
      <ul>
        <li>Başlangıç Paketi: Temel web sitesi</li>
        <li>Kurumsal Paket: Profesyonel web tasarım</li>
        <li>E-ticaret Paketi: Online satış sitesi</li>
        <li>Premium Paket: Özel tasarım ve geliştirme</li>
      </ul>
      
      <h2>Sonuç</h2>
      <p>Web tasarım fiyatları, yatırımınızın kalitesini belirler. Profesyonel web tasarım ajansı ile çalışarak, bütçenize uygun en iyi çözümü bulabilirsiniz.</p>
    `,
    image: "/bento/yazılım-geliştirme.jpg",
    slug: "web-tasarim-fiyatlari",
    date: "8 Aralık 2024",
    readTime: "8 dk",
    author: "WebCraft Ekibi",
  },
  {
    id: 5,
    category: "SEO",
    title: "2024'te SEO Trendleri ve Arama Motoru Optimizasyonu",
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
      <p>2024'te teknik SEO daha da önem kazandı. Web tasarım ve SEO hizmeti entegrasyonu kritik hale geldi.</p>
    `,
    image: "/bento/web-tasarım.jpg",
    slug: "2024-seo-trendleri",
    date: "5 Aralık 2024",
    readTime: "6 dk",
    author: "WebCraft Ekibi",
  },
];

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı | WebCraft",
      description: "Aradığınız blog yazısı bulunamadı.",
    };
  }

  return {
    title: `${post.title} | WebCraft Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, web tasarım, SEO hizmeti, dijital pazarlama, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "tr_TR",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

const getBlogPost = (slug: string) => {
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

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </>
  );
}

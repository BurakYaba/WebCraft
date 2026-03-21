import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  TrendingUp,
  Search,
  ShoppingCart,
  Smartphone,
  Bot,
  Zap,
  Code2,
  type LucideIcon,
} from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  link: string;
  image: string;
}

const services: ServiceCardData[] = [
  {
    id: "web-tasarim",
    title: "Web Tasarım",
    description:
      "Modern, responsive ve SEO uyumlu web siteleri tasarlıyoruz. Kullanıcı deneyimini ön planda tutan profesyonel tasarımlar.",
    Icon: Globe2,
    color: "#dc2626",
    link: "/hizmetler/web-tasarim",
    image: "/bento/web-tasarım.webp",
  },
  {
    id: "dijital-pazarlama",
    title: "Dijital Pazarlama",
    description:
      "SEO/SEM stratejileri, sosyal medya yönetimi ve içerik pazarlaması ile hedef kitlenize ulaşmanızı sağlıyoruz.",
    Icon: TrendingUp,
    color: "#2563eb",
    link: "/hizmetler/dijital-pazarlama",
    image: "/bento/dijital-pazarlama.webp",
  },
  {
    id: "seo-hizmeti",
    title: "SEO Hizmeti",
    description:
      "Teknik SEO, anahtar kelime stratejisi ve backlink çalışmaları ile Google'da üst sıralara çıkın. Organik trafik artışı garantisi.",
    Icon: Search,
    color: "#16a34a",
    link: "/hizmetler/seo-hizmeti",
    image: "/bento/SEO.webp",
  },
  {
    id: "e-ticaret",
    title: "E-Ticaret",
    description:
      "Güvenli ödeme sistemleri, stok yönetimi ve mobil uyumlu tasarım ile online satış platformları geliştiriyoruz.",
    Icon: ShoppingCart,
    color: "#9333ea",
    link: "/hizmetler/e-ticaret",
    image: "/bento/e-ticaret.webp",
  },
  {
    id: "mobil-uygulama",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android için native ve cross-platform uygulamalar geliştirerek kullanıcılarınıza en iyi mobil deneyimi sunuyoruz.",
    Icon: Smartphone,
    color: "#ea580c",
    link: "/hizmetler/mobil-uygulama",
    image: "/bento/mobil-uygulama.webp",
  },
  {
    id: "yapay-zeka-chatbot",
    title: "Yapay Zeka Chatbot",
    description:
      "7/24 otomatik müşteri desteği ve satış asistanlığı ile iş süreçlerinizi yapay zeka destekli chatbot çözümleriyle güçlendirin.",
    Icon: Bot,
    color: "#0891b2",
    link: "/hizmetler/yapay-zeka-chatbot",
    image: "/bento/chatbot.webp",
  },
  {
    id: "yapay-zeka-otomasyon",
    title: "AI Otomasyon",
    description:
      "Tekrarlayan iş süreçlerini otomatikleştirin. Akıllı belge işleme ve iş akışı optimizasyonu ile verimliliğinizi artırın.",
    Icon: Zap,
    color: "#4f46e5",
    link: "/hizmetler/yapay-zeka-otomasyon",
    image: "/bento/automation.webp",
  },
  {
    id: "yazilim-gelistirme",
    title: "Yazılım Geliştirme",
    description:
      "İş süreçlerinize özel web uygulamaları, API entegrasyonları ve kurumsal yazılım çözümleri geliştiriyoruz.",
    Icon: Code2,
    color: "#ca8a04",
    link: "/hizmetler/yazilim-gelistirme",
    image: "/bento/yazılım-geliştirme.webp",
  },
];

export default function ServiceCards() {
  return (
    <>
      <style>{`
        .sc-card {
          --sc-transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 380px;
          width: 280px;
          border-radius: 20px;
          border-top-left-radius: 70px;
          position: relative;
          overflow: hidden;
          background: var(--sc-clr);
          transition: var(--sc-transition);
          flex-shrink: 0;
          will-change: transform;
        }
        .sc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -12px color-mix(in srgb, var(--sc-clr) 40%, transparent);
        }
        .sc-card-data {
          position: absolute;
          inset: 10px;
          border-radius: 10px;
          background: #1c1b1a;
          overflow: hidden;
        }
        .sc-bg-img {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .sc-card:hover .sc-bg-img {
          transform: scale(1.06);
        }
        .sc-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(28, 27, 26, 0.0) 0%,
            rgba(28, 27, 26, 0.0) 38%,
            rgba(28, 27, 26, 0.75) 58%,
            rgba(28, 27, 26, 0.96) 100%
          );
          z-index: 1;
        }
        .sc-icon {
          position: absolute;
          top: 0;
          left: 0;
          border-bottom-right-radius: 50%;
          height: 130px;
          width: 130px;
          background: var(--sc-clr);
        }
        .sc-icon::before {
          content: '';
          position: absolute;
          bottom: -30px;
          left: 0;
          height: 30px;
          width: 30px;
          border-top-left-radius: 30px;
          background: transparent;
          box-shadow: -5px -5px 0 5px var(--sc-clr);
        }
        .sc-icon::after {
          content: '';
          position: absolute;
          right: -30px;
          top: 0;
          height: 30px;
          width: 30px;
          border-top-left-radius: 30px;
          background: transparent;
          box-shadow: -5px -5px 0 5px var(--sc-clr);
        }
        .sc-icon-box {
          position: absolute;
          inset: 10px;
          border-radius: 10px;
          border-top-left-radius: 50%;
          border-bottom-right-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1c1b1a;
          color: var(--sc-clr);
          transition: var(--sc-transition);
        }
        .sc-card:hover .sc-icon-box {
          background: var(--sc-clr);
          color: #ffffff;
        }
        .sc-content {
          position: absolute;
          top: 140px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: 12px 18px 16px;
          display: flex;
          flex-direction: column;
          color: #ffffff;
          overflow: hidden;
        }
        .sc-content h3 {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-family: var(--font-display, 'Montserrat', sans-serif);
          flex-shrink: 0;
          margin-bottom: 8px;
        }
        .sc-content p {
          font-size: 12px;
          opacity: 0.72;
          line-height: 1.6;
          flex-shrink: 1;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .sc-btn {
          display: inline-flex;
          align-self: flex-start;
          flex-shrink: 0;
          margin-top: auto;
          padding: 7px 16px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          border-radius: 30px;
          border: 2px solid var(--sc-clr);
          color: var(--sc-clr);
          background: transparent;
          transition: var(--sc-transition);
          letter-spacing: 0.8px;
        }
        .sc-btn:hover {
          background: var(--sc-clr);
          color: #ffffff;
        }
        @media (max-width: 640px) {
          .sc-card {
            width: 260px;
            height: 370px;
          }
        }
      `}</style>

      <div className="w-full max-w-[1280px] mx-auto px-4 py-16">
        <div
          className="flex flex-wrap justify-center gap-6"
          role="list"
          aria-label="Hizmetlerimiz"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="sc-card"
              style={{ "--sc-clr": service.color } as React.CSSProperties}
              role="listitem"
            >
              <div className="sc-card-data">
                {/* Background image fills the entire card-data */}
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 260px, 280px"
                  quality={90}
                  loading="lazy"
                  className="sc-bg-img object-cover object-center"
                />
                <div className="sc-bg-overlay" aria-hidden="true" />

                {/* Icon area */}
                <div className="sc-icon" aria-hidden="true">
                  <div className="sc-icon-box">
                    <service.Icon
                      size={42}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="sc-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link
                    href={service.link}
                    className="sc-btn"
                    aria-label={`${service.title} hakkında daha fazla bilgi`}
                  >
                    İnceleyin
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

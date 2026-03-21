"use client";
import { Star } from "lucide-react";

const projects = [
  { src: "/projects/atlantis.webp", alt: "Atlantis Projesi" },
  { src: "/projects/fluenta.webp", alt: "Fluenta Projesi" },
  { src: "/projects/homeandcar.webp", alt: "Home & Car Projesi" },
  { src: "/projects/mentoria.webp", alt: "Mentoria Projesi" },
  { src: "/projects/skoll.webp", alt: "Skoll Projesi" },
  { src: "/projects/trend.webp", alt: "Trend Projesi" },
  { src: "/projects/fethiyetem.webp", alt: "Fethiyetem Projesi" },
  { src: "/projects/elit.webp", alt: "Elit Projesi" },
];

// Duplicate for seamless CSS marquee loop
const marqueeProjects = [...projects, ...projects];

const testimonials = [
  {
    quote:
      "Siteyi teslim aldıktan birkaç hafta sonra farkı gördük — PageSpeed skorumuz 40\u2019dan 94\u2019e çıktı, organik trafiğimiz 3 ayda %60 arttı. Bu kadar somut sonuç beklemiyorduk.",
    author: "Ahmet Y.",
    position: "KOBİ Sahibi, İstanbul",
    isGoogle: true,
  },
  {
    quote:
      "Daha önce iki farklı ajansla çalıştık, ikisinde de sonuç alamadık. WebCraft ile hem tasarımı hem teknik altyapıyı sıfırdan, doğru kurguyla yeniden inşa ettik. Şimdi sitemiz bizim için çalışıyor.",
    author: "Zeynep K.",
    position: "Pazarlama Direktörü",
    isGoogle: true,
  },
  {
    quote:
      "Reklam bütçemiz aynı kalmasına rağmen dönüşüm oranımız belirgin şekilde arttı. Tek değişken hız ve SEO altyapısıydı. Şimdi rakiplerimizden önce çıkıyoruz.",
    author: "Mehmet D.",
    position: "E-Ticaret Girişimcisi",
    isGoogle: true,
  },
  {
    quote:
      "Web sitesini Burak Bey hazırladı ve beklentimizin çok üstünde, istediğiniz zaman kolaylıkla eklemeler yapabileceğiniz harika bir site oldu. Kendisine ve ekibine tekrar teşekkürler.",
    author: "Sevtap Wilk",
    position: "Skoll Beauty Club",
    isGoogle: true,
  },
  {
    quote:
      "Karşılıklı fikir alışverişi yaptıktan sadece 3 gün sonra sitemiz hazır teslim edildi. Hazırlanma hızına inanamadık. Kafamıza takılan her soruda aradığımızda telefonları açtılar, detaylı bilgilendirme yaptılar.",
    author: "Erinç Uygar",
    position: "Okul Yöneticisi",
    isGoogle: true,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-label="Google">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function SocialProofStrip() {
  return (
    <section className="bg-[#111110] py-16 md:py-24">
      {/* Marquee keyframe injected inline — no extra CSS file needed */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-red-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-12">
          Referanslar &amp; Müşteri Yorumları
        </p>
      </div>

      {/* Full-bleed marquee — outside the padded container intentionally */}
      <div className="overflow-hidden mb-16">
        <div className="marquee-track flex gap-4 w-max">
          {marqueeProjects.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 md:w-96 rounded-xl overflow-hidden border border-white/10 bg-[#1a1918]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Divider */}
        <div className="w-16 h-px bg-red-500/40 mx-auto mb-16" />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-colors duration-300"
            >
              {/* Stars + Google badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4"
                      style={{ fill: "#fbbf24", color: "#fbbf24" }}
                    />
                  ))}
                </div>
                <span className="flex items-center gap-1 text-white/40 text-[10px] font-medium">
                  <GoogleIcon />
                  Google
                </span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/40 to-red-700/40 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">
                    {t.author}
                  </p>
                  <p className="text-white/50 text-xs">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

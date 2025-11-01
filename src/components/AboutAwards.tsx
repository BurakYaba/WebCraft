"use client";
import { useEffect, useRef } from "react";

const awards = [
  {
    name: "En İyi Dijital Ajans",
    organization: "Turkiye Dijital Odulleri",
    year: "2023",
    category: "Web Tasarım",
  },
  {
    name: "Yılın Yenilikcisi",
    organization: "Tech Awards",
    year: "2023",
    category: "E-Ticaret",
  },
  {
    name: "Müşteri Memnuniyeti",
    organization: "Digital Excellence",
    year: "2022",
    category: "Hizmet Kalitesi",
  },
  {
    name: "Yaratıcılık Ödülü",
    organization: "Creative Turkey",
    year: "2022",
    category: "Dijital Pazarlama",
  },
];

export default function AboutAwards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 md:py-48 bg-red-500 text-white overflow-hidden">
      {/* Background Animation Area */}
      <div
        ref={sectionRef}
        className="absolute inset-0 bg-red-500 transform scale-x-0 transition-transform duration-[1250ms] ease-out origin-left"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full border border-white transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full border border-white transform translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-white/60 text-xs uppercase tracking-[0.6em] mb-6">
            Başarılarımız
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            Kazandığımız
            <br />
            <span className="text-red-200">Takdirler</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sektörün öncü markalarından aldığımız ödüllerle, kalitemizi ve
            yaratıcılığımızı kanıtlıyoruz.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {awards.map((award, index) => (
            <div
              key={index}
              className="transform transition-all duration-1000 ease-out"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full hover:bg-white/20 transition-all duration-300 group">
                {/* Award Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Award Details */}
                <div className="space-y-3">
                  <div className="text-red-200 text-sm uppercase tracking-wider">
                    {award.year}
                  </div>
                  <h3 className="text-lg font-bold text-white">{award.name}</h3>
                  <div className="text-white/70 text-sm">
                    {award.organization}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-wider">
                    {award.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              4+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Ödül
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              98%
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Memnuniyet
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              50+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Proje
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              25+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Mutlu Müşteri
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="transform transition-all duration-1000 ease-out">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Siz de Bizimle
              <span className="text-red-200"> Kazanın</span>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Projenizle birlikte yeni başarı hikayelerinin parçası olun.
            </p>
            <div className="pt-4">
              <button className="bg-white text-red-500 hover:bg-red-50 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105">
                Hemen Başlayın
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Spark */}
      <div className="absolute top-1/4 right-0 transform translate-x-10 opacity-15">
        <div className="text-white text-[200px] font-bold select-none">★</div>
      </div>
    </section>
  );
}

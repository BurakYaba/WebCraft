"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    company: "TechStart",
    logo: "TS",
    quote:
      "WebCraft ile calismanin keyfini yasadık. Profesyonel yaklasımlari ve yaratici cozumleri sayesinde markamizin dijital gorunurlugu ciddi sekilde artti.",
    author: "Ahmet Yilmaz",
    position: "CEO",
  },
  {
    company: "EcoGreen",
    logo: "EG",
    quote:
      "Surdurulebilir cozumler konusunda uzmanlik arayan bir sirket olarak, WebCraft'in hem teknik hem de yaratici yaklasimindan cok memnun kaldik.",
    author: "Zeynep Kaya",
    position: "Pazarlama Direktoru",
  },
  {
    company: "DigitalFlow",
    logo: "DF",
    quote:
      "E-ticaret projemizde WebCraft'in deneyimi ve yenilikciliği sayesinde hedefledigimiz sonuclara ulastik. Kesinlikle tavsiye ederim.",
    author: "Mehmet Demir",
    position: "Kurucu",
  },
];

export default function AboutTestimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full border border-gray-300 transform translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Key Image */}
        <div ref={sectionRef} className="mb-20">
          <div className="max-w-4xl mx-auto relative">
            <div className="h-64 md:h-80 bg-gradient-to-r from-red-500 to-red-600 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl md:text-8xl font-bold opacity-20 mb-4">
                    &quot;
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Musteri Memnuniyeti
                    <br />
                    <span className="text-red-200">Bizim Onceliğimiz</span>
                  </h2>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-8 left-8 text-white/30 text-4xl font-bold">
                &quot;
              </div>
              <div className="absolute bottom-8 right-8 text-white/30 text-4xl font-bold rotate-180">
                &quot;
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="transform transition-all duration-1000 ease-out"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                {/* Company Logo */}
                <div className="flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {testimonial.logo}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="md:col-span-3 space-y-6">
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-px h-6 bg-gray-300"></div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < testimonials.length - 1 && (
                <div className="mt-16 w-full h-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Siz de Hikayenizin
              <span className="text-red-500"> Parcasi Olun</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Projenizi hayata geçirmek ve dijital dünyadaki yerinizi almak için
              bizimle iletişime geçin.
            </p>
            <div className="pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105">
                Projeni Baslat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Spark */}
      <div className="absolute top-1/4 left-0 transform -translate-x-20 opacity-10">
        <div className="text-gray-300 text-[180px] font-bold select-none">
          ※
        </div>
      </div>
    </section>
  );
}

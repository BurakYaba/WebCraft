"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const studioImages = [
  {
    src: "/bento/web-tasarım.jpg",
    alt: "WebCraft Ofis - Yaratici Alan",
  },
  {
    src: "/bento/dijital-pazarlama.jpg",
    alt: "WebCraft Ekibi - Isbirligi",
  },
  {
    src: "/bento/e-ticaret.jpg",
    alt: "WebCraft Teknoloji - Yenilik",
  },
  {
    src: "/bento/mobil-uygulama.jpg",
    alt: "WebCraft Proje - Gelistirme",
  },
];

export default function AboutStudio() {
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startImageRotation();
          } else {
            stopImageRotation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopImageRotation();
    };
  }, []);

  const startImageRotation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % studioImages.length);
    }, 4000);
  };

  const stopImageRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    stopImageRotation();
    setTimeout(startImageRotation, 5000); // Restart after 5 seconds
  };

  return (
    <section className="relative py-32 md:py-48 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Studio Info */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <div className="text-gray-500 text-xs uppercase tracking-[0.6em]">
                Stüdyo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Yaratici
                <span className="text-red-500"> Atmosfer</span>
              </h2>
            </div>

            {/* Description */}
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Modern ve ilham verici bir ortamda çalışıyoruz. Stüdyomuz, yaratıcılığın ve inovasyonun buluştuğu
                bir merkez olarak tasarlandı.
              </p>
              <p>
                Açık ofis konsepti, ekip çalışmasını teşvik ederken, özel
                çalışma alanları derin odaklanma gerektiren projeler için ideal
                ortam sağlıyor.
              </p>
            </div>

            {/* Studio Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-red-500">15+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Uzman Ekip
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-red-500">24/7</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Destek
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-red-500">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Memnuniyet
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-red-500">5+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Sehir
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  goToImage(
                    currentImage > 0
                      ? currentImage - 1
                      : studioImages.length - 1
                  )
                }
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-red-500 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">
                  {String(currentImage + 1).padStart(2, "0")}
                </span>
                <div className="w-16 h-px bg-gray-300 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-4000 ease-linear"
                    style={{
                      width: `${
                        ((currentImage + 1) / studioImages.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">
                  {String(studioImages.length).padStart(2, "0")}
                </span>
              </div>

              <button
                onClick={() =>
                  goToImage((currentImage + 1) % studioImages.length)
                }
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-red-500 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              {studioImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    index === currentImage
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}

              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium text-gray-900">
                  {currentImage + 1} / {studioImages.length}
                </span>
              </div>
            </div>

            {/* Next Image Preview */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-24 h-32 rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity hidden lg:block">
              <Image
                src={studioImages[(currentImage + 1) % studioImages.length].src}
                alt="Next"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 transform translate-x-20 translate-y-20 opacity-10">
        <div className="text-gray-300 text-[150px] font-bold select-none">
          ◆
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Yaraticilik",
    description:
      "Her projede benzersiz ve yaratici cozumler uretiyoruz. Standart kaliplarin disinda dusunup, markalara ozgun kimlikler kazandiriyoruz.",
  },
  {
    title: "Kalite",
    description:
      "Mukemmellik arayisimizi hicbir zaman birakmiyoruz. Her detayi titizlikle isleyip, en yuksek kalite standartlarinda calisiyoruz.",
  },
  {
    title: "Yenilik",
    description:
      "Teknolojinin son gelismelerini takip ediyor, projelerimizde en guncel yontem ve araclari kullaniyoruz.",
  },
  {
    title: "Guvenilirlik",
    description:
      "Musteri memnuniyeti bizim en buyuk onceliğimiz. Sozlerimizin arkasinda durup, zamaninda teslimat garantisi veriyoruz.",
  },
  {
    title: "Isbirligi",
    description:
      "Musteri ve ekip uyesi olarak herkesin fikrini dinliyor, birlikte en iyi sonuclara ulasmaya calisiyoruz.",
  },
];

export default function AboutValues() {
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            startValueRotation();
          } else {
            stopValueRotation();
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
      stopValueRotation();
    };
  }, []);

  const startValueRotation = () => {
    intervalRef.current = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
  };

  const stopValueRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full border border-gray-300 transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full border border-gray-300 transform translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
        >
          {/* Values List */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <div className="text-gray-500 text-xs uppercase tracking-[0.6em]">
                Degerlerimiz
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Bizi Yonlendiren
                <span className="text-red-500"> Ilkeler</span>
              </h2>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeValue === index
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeValue === index
                          ? "bg-red-500 scale-150"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <div
                    className={`ml-6 text-gray-600 transition-all duration-300 ${
                      activeValue === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="pb-4 text-sm md:text-base leading-relaxed pr-4">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gray-50 flex items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-red-500/10"></div>
              </div>
            </div>

            {/* Active Value Display */}
            <div className="relative z-10 text-center max-w-xs px-4">
              <div className="text-5xl md:text-6xl font-bold text-red-500/20 mb-4 transition-all duration-500">
                {String(activeValue + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 transition-all duration-500">
                {values[activeValue].title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed transition-all duration-500">
                {values[activeValue].description}
              </p>
            </div>

            {/* Rotating Elements */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow-2d">
              {values.map((_, index) => (
                <div
                  key={index}
                  className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    activeValue === index
                      ? "bg-red-500 scale-125"
                      : "bg-gray-300"
                  }`}
                  style={{
                    transform: `rotate(${
                      index * (360 / values.length)
                    }deg) translateY(-130px) rotate(-${
                      index * (360 / values.length)
                    }deg)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Spark */}
      <div className="absolute top-1/3 left-0 transform -translate-x-10 opacity-10">
        <div className="text-gray-300 text-[200px] font-bold select-none rotate-12">
          +
        </div>
      </div>
    </section>
  );
}

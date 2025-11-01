"use client";

import { useEffect, useState } from "react";

const services = [
  { id: "web-tasarim", name: "WEB TASARIM" },
  { id: "dijital-pazarlama", name: "DİJİTAL PAZARLAMA" },
  { id: "e-ticaret", name: "E-TİCARET" },
  { id: "mobil-uygulama", name: "MOBİL UYGULAMA" },
  { id: "yazilim-gelistirme", name: "YAZILIM GELİŞTİRME" },
];

export default function ServiceIndicator() {
  const [activeService, setActiveService] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Show indicator after hero section
      if (scrollPosition > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine active service based on scroll position
      const serviceElements = services
        .map((service) => document.getElementById(service.id))
        .filter(Boolean);

      for (const element of serviceElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveService(element.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 lg:right-6 xl:right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col items-end space-y-6 lg:space-y-8">
      {services.map((service) => (
        <div
          key={service.id}
          className={`flex items-center transition-all duration-500 ${
            activeService === service.id ? "opacity-100" : "opacity-40"
          }`}
        >
          <div
            className={`text-[10px] lg:text-xs uppercase tracking-[0.4em] lg:tracking-[0.6em] text-white text-right mr-3 lg:mr-4 transition-all duration-500 max-w-[120px] lg:max-w-none ${
              activeService === service.id
                ? "transform translate-x-0"
                : "transform translate-x-2 lg:translate-x-4"
            }`}
            style={{ letterSpacing: "0.4em" }}
          >
            {service.name}
          </div>
          <div
            className={`w-1 h-1 rounded-full bg-white transition-all duration-500 ${
              activeService === service.id
                ? "opacity-100 transform scale-150 lg:scale-200"
                : "opacity-30 transform scale-100"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

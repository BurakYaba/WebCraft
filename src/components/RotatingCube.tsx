"use client";
import { useEffect, useState } from "react";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export default function RotatingCube() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Don't load on mobile devices
    if (isMobile) return;

    // Defer the entire component loading to prioritize LCP
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Delay the animation even further
    const animationTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(animationTimer);
    };
  }, [isMobile]);

  // Don't render anything on mobile devices
  if (isMobile) {
    return null;
  }

  // Don't render anything until loaded to improve LCP
  if (!isLoaded) {
    return <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]" />;
  }

  return (
    <div className="rotating-cube-container">
      <div className={`rotating-cube ${isVisible ? "animate-spin-slow" : ""}`}>
        <div className="cube-face cube-front">Web Tasarım</div>
        <div className="cube-face cube-back">SEO</div>
        <div className="cube-face cube-right">E-Ticaret</div>
        <div className="cube-face cube-left">Mobil App</div>
        <div className="cube-face cube-top">Branding</div>
        <div className="cube-face cube-bottom">Dijital Pazarlama</div>
      </div>
    </div>
  );
}

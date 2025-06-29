"use client";
import { useEffect, useState } from "react";

export default function RotatingCube() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to prioritize critical content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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

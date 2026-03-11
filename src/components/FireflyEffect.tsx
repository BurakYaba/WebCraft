"use client";
import React from "react";
import "@/styles/firefly.css";

const FireflyEffect: React.FC = () => {
  const fireflies = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="firefly-container hidden sm:block">
      {fireflies.map((i) => (
        <div
          key={i}
          className={`firefly firefly-${i}${i > 8 ? " firefly-desktop-only" : ""}`}
        >
          <div className="firefly-before"></div>
          <div className="firefly-after"></div>
        </div>
      ))}
    </div>
  );
};

export default FireflyEffect;

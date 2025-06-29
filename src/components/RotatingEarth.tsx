"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Three.js components with no SSR
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {
  ssr: false,
  loading: () => <EarthFallback />,
});

// Loading fallback component
const EarthFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-[200px] h-[200px] rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin" />
  </div>
);

interface RotatingEarthProps {
  className?: string;
  variant?: "textured" | "simple" | "wireframe";
}

export default function RotatingEarth({
  className,
  variant = "wireframe",
}: RotatingEarthProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <EarthFallback />;
  }

  return (
    <div className={className}>
      <ThreeCanvas variant={variant} />
    </div>
  );
}

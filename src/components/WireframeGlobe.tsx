"use client";
import "@/styles/wireframe-globe.css";

interface WireframeGlobeProps {
  className?: string;
}

export default function WireframeGlobe({ className }: WireframeGlobeProps) {
  return (
    <div
      className={`css-globe-wrapper${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <div className="css-globe">
        {/* Inner blue sphere */}
        <div className="css-globe-core" />
        {/* Red wireframe longitude rings */}
        <div className="css-globe-ring red r1" />
        <div className="css-globe-ring red r2" />
        <div className="css-globe-ring red r3" />
        {/* Red wireframe latitude rings */}
        <div className="css-globe-ring red r4" />
        <div className="css-globe-ring red r5" />
        {/* White grid rings */}
        <div className="css-globe-ring white g1" />
        <div className="css-globe-ring white g2" />
        <div className="css-globe-ring white g3" />
        <div className="css-globe-ring white g4" />
      </div>
    </div>
  );
}

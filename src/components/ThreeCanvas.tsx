"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// Earth sphere component that rotates
function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the Earth texture
  const earthTexture = useTexture("/bento/center1.webp");

  // Configure texture for better spherical mapping
  earthTexture.wrapS = THREE.RepeatWrapping;
  earthTexture.wrapT = THREE.RepeatWrapping;
  earthTexture.repeat.set(1, 1);
  earthTexture.offset.set(0, 0);

  // Rotate the Earth continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate around Y-axis (like Earth's rotation)
      meshRef.current.rotation.y += delta * 0.3; // Slower, more realistic speed
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial
        map={earthTexture}
        metalness={0.1}
        roughness={0.8}
      />
    </mesh>
  );
}

// Alternative: Simple colored Earth with geography lines
function SimpleEarth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#4a90e2" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Continents overlay */}
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[1.21, 32, 32]} />
        <meshStandardMaterial
          color="#2d5a2d"
          transparent
          opacity={0.8}
          metalness={0}
          roughness={1}
        />
      </mesh>
    </group>
  );
}

// Modern wireframe Earth - sleek and professional
function WireframeEarth() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.1; // Counter rotation for effect
    }
  });

  return (
    <group>
      {/* Outer wireframe sphere */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.3, 16, 16]} />
        <meshBasicMaterial
          color="#ff6b6b"
          wireframe={true}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Inner solid sphere */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color="#4a90e2"
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Grid lines */}
      <mesh>
        <sphereGeometry args={[1.15, 12, 12]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

interface ThreeCanvasProps {
  variant?: "textured" | "simple" | "wireframe";
}

export default function ThreeCanvas({
  variant = "wireframe",
}: ThreeCanvasProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {/* Better lighting setup */}
          <ambientLight intensity={0.6} />

          {/* Main sunlight */}
          <directionalLight
            position={[3, 2, 5]}
            intensity={0.8}
            color="#ffffff"
          />

          {/* Fill light */}
          <pointLight position={[-3, -2, -5]} intensity={0.3} color="#87ceeb" />

          {/* Render the appropriate Earth variant */}
          {variant === "textured" ? (
            <EarthSphere />
          ) : variant === "simple" ? (
            <SimpleEarth />
          ) : (
            <WireframeEarth />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}

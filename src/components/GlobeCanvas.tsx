"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const WIRE_COLOR = "#f84525";
const OBLIQUITY = (23 / 180) * Math.PI;
const R = 200;
const POS_Z = 1700;
const ROV1 = 0.0022;
const ROV2 = -0.0005;

export default function GlobeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let destroyed = false;

    // Pause rAF work when scrolled off screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    function init() {
      if (destroyed || !canvas) return;

      // Read layout size after DOM paint
      const W = canvas.clientWidth || 274;
      const H = canvas.clientHeight || 274;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas,
      });
      // Let Three.js manage canvas width/height attributes (no false flag)
      renderer.setSize(W, H);
      renderer.setPixelRatio(dpr);

      const camera = new THREE.PerspectiveCamera(18, W / H, 1, 10000);
      camera.position.z = POS_Z;

      const scene = new THREE.Scene();

      // Lights for the earth sphere (Phong model responds reliably)
      const ambient = new THREE.AmbientLight("#ffffff", 0.5);
      scene.add(ambient);

      const sun = new THREE.DirectionalLight("#ffffff", 2.5);
      sun.position.set(5, 3, 5);
      scene.add(sun);

      const rim = new THREE.DirectionalLight("#4488ff", 0.4);
      rim.position.set(-4, -2, -3);
      scene.add(rim);

      // ── Wireframe shell ────────────────────────────────────────────────────
      // MeshBasicMaterial: renders its exact color with NO lighting dependency.
      // Emissive on PBR wireframe mode is unreliable — Basic is always visible.
      const wireGeo = new THREE.IcosahedronGeometry(R, 3);
      const wireMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(WIRE_COLOR),
        wireframe: true,
        transparent: true,
        opacity: 0.65,
      });
      const wireframeMesh = new THREE.Mesh(wireGeo, wireMat);

      // ── Earth sphere ───────────────────────────────────────────────────────
      // MeshPhongMaterial: simple Phong shading, always lights correctly.
      const earthGeo = new THREE.IcosahedronGeometry(R * 0.77, 4);
      const earthMat = new THREE.MeshPhongMaterial({
        color: new THREE.Color("#2255aa"),
        specular: new THREE.Color("#1133aa"),
        shininess: 25,
      });

      // Async texture load — sphere stays blue until map is ready
      const texLoader = new THREE.TextureLoader();
      texLoader.load("/earth.png", (tex) => {
        if (destroyed) return;
        tex.anisotropy =
          Math.min(8, renderer!.capabilities.getMaxAnisotropy()) || 1;
        earthMat.map = tex;
        earthMat.needsUpdate = true;
      });

      const earthMesh = new THREE.Mesh(earthGeo, earthMat);

      const globe = new THREE.Group();
      globe.add(wireframeMesh, earthMesh);
      scene.add(globe);

      // ── Render loop ────────────────────────────────────────────────────────
      let ro1 = 0;
      let ro2 = 0;
      let t0 = Date.now();
      const D_T = 1000 / 50;
      const D_MAX = 80;

      function animate() {
        animationId = requestAnimationFrame(animate);
        if (!isVisible) return;

        const now = Date.now();
        const dt = Math.min(now - t0, D_MAX);
        t0 = now;
        const dd = dt / D_T;

        ro1 += ROV1 * dd;
        ro2 += ROV2 * dd;
        globe.rotation.set(0, 0, 0);
        globe.rotateY(ro2).rotateX(OBLIQUITY).rotateY(ro1);
        globe.rotation.y -= 0.0009;

        renderer!.render(scene, camera);
      }

      animate();
    }

    // Defer past LCP with a simple, predictable setTimeout.
    // requestIdleCallback + IntersectionObserver can race: the observer may set
    // isVisible=false before the first rAF fires, silently preventing any render.
    const timer = setTimeout(init, 600);

    return () => {
      destroyed = true;
      clearTimeout(timer);
      observer.disconnect();
      cancelAnimationFrame(animationId);
      renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

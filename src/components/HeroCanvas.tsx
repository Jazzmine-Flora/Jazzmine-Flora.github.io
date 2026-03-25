import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const PARTICLE_COUNT_DESKTOP = 160;
const PARTICLE_COUNT_MOBILE = 70;
const CONNECTION_DIST = 1.6;

interface Particle {
  x: number; y: number; z: number;
  bx: number; by: number; bz: number;
  vx: number; vy: number; vz: number;
}

const HeroCanvas: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const palette = [
      new THREE.Color("#b8456e"),
      new THREE.Color("#9d7fb8"),
      new THREE.Color("#e8a090"),
      new THREE.Color("#d4a0b8"),
      new THREE.Color("#ffffff"),
    ];

    const particles: Particle[] = [];
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 9;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 4;
      particles.push({
        x, y, z, bx: x, by: y, bz: z,
        vx: (Math.random() - 0.5) * 0.004,
        vy: (Math.random() - 0.5) * 0.004,
        vz: (Math.random() - 0.5) * 0.002,
      });
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    const pMat = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    const lGeo = new THREE.BufferGeometry();
    const lMat = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.12,
      color: 0xb8456e,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lGeo, lMat);
    scene.add(lines);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    el.addEventListener("mousemove", onMove);

    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let alive = true;
    let frame = 0;

    const tick = () => {
      if (!alive) return;
      requestAnimationFrame(tick);
      frame++;

      const attr = pGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.z += p.vz;
        p.vx += (p.bx - p.x) * 0.0008;
        p.vy += (p.by - p.y) * 0.0008;
        p.vz += (p.bz - p.z) * 0.0004;
        p.x += mouse.x * 0.003;
        p.y += mouse.y * 0.003;
        p.vx *= 0.992; p.vy *= 0.992; p.vz *= 0.992;
        attr.array[i * 3] = p.x;
        attr.array[i * 3 + 1] = p.y;
        attr.array[i * 3 + 2] = p.z;
      }
      attr.needsUpdate = true;

      if (frame % 3 === 0) {
        const lp: number[] = [];
        for (let i = 0; i < COUNT; i++) {
          for (let j = i + 1; j < COUNT; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dz = particles[i].z - particles[j].z;
            if (dx * dx + dy * dy + dz * dz < CONNECTION_DIST * CONNECTION_DIST) {
              lp.push(particles[i].x, particles[i].y, particles[i].z,
                      particles[j].x, particles[j].y, particles[j].z);
            }
          }
        }
        lGeo.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3));
      }

      scene.rotation.y = Math.sin(Date.now() * 0.00008) * 0.12;
      scene.rotation.x = Math.cos(Date.now() * 0.00006) * 0.05;

      renderer.render(scene, camera);
    };
    requestAnimationFrame(tick);

    return () => {
      alive = false;
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      pGeo.dispose(); pMat.dispose();
      lGeo.dispose(); lMat.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="hero-canvas" />;
};

export default HeroCanvas;

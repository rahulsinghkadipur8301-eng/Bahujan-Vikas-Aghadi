import React, { useEffect, useRef, useState } from 'react';

interface HeroBackgroundProps {
  scrollProgress?: number;
}

/**
 * HeroBackground Component
 * Implements the 5-layer premium animated background system:
 * Layer 1: Soft ambient radial glows in Royal Blue (#0220A8) & Warm Yellow (#FDF219)
 * Layer 2: Lightweight animated drifting particles (Canvas-based for performance)
 * Layer 3: Abstract orbital lines and concentric curved paths behind portrait
 * Layer 4: Desktop mouse-reactive subtle parallax (disabled on touch)
 * Layer 5: Scroll-responsive shift and fade before next section
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ scrollProgress = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse offset state with smooth damping
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Safe calculated scroll transforms
  const sp = Math.min(1, Math.max(0, scrollProgress));
  const bgOpacity = Math.max(0.1, 1 - sp * 0.9);
  const bgY = sp * 80;
  const orbitalScale = 1 - sp * 0.12;

  useEffect(() => {
    // Only enable mouse parallax on non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (e.clientX - centerX) / centerX; // -1 to 1
      targetY = (e.clientY - centerY) / centerY; // -1 to 1
    };

    const updateMouse = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMouseOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateMouse);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Layer 2: Lightweight drifting particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animFrame: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // 24 elegant, slow-moving particles in blue and yellow
    const count = Math.min(28, Math.floor(width / 45));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.2 + 1.2,
      isYellow: Math.random() > 0.6,
      baseAlpha: Math.random() * 0.25 + 0.1,
      phase: Math.random() * Math.PI * 2
    }));

    let t = 0;
    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Check prefers-reduced-motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const alpha = p.baseAlpha + Math.sin(t * 1.5 + p.phase) * 0.08;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isYellow
          ? `rgba(234, 179, 8, ${Math.max(0.05, alpha * 1.2)})`
          : `rgba(2, 32, 168, ${Math.max(0.05, alpha)})`;
        ctx.fill();

        // Connect nearby particles with subtle threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(2, 32, 168, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      if (!prefersReduced) {
        animFrame = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: bgOpacity,
        transform: `translate3d(0, ${bgY}px, 0)`,
        transition: 'transform 0.08s ease-out, opacity 0.12s ease-out'
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* LAYER 1: Soft Ambient Radial Glows (predominantly white, slow breathing) */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 18}px, ${mouseOffset.y * 18}px, 0)`
        }}
      >
        {/* Soft Royal Blue Ambient Glow (Left & Center) */}
        <div className="absolute top-[10%] left-[15%] w-[480px] h-[480px] rounded-full bg-radial from-[#0220A8]/8 via-[#0220A8]/3 to-transparent filter blur-3xl animate-pulse" />

        {/* Warm Logo Yellow Glow (Right & Center) */}
        <div className="absolute top-[25%] right-[12%] w-[420px] h-[420px] rounded-full bg-radial from-[#FDF219]/25 via-[#FDF219]/8 to-transparent filter blur-3xl animate-pulse delay-1000" />

        {/* Subtle Center Uplight */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-radial from-blue-100/40 via-amber-50/20 to-transparent filter blur-2xl" />
      </div>

      {/* LAYER 3: Abstract Orbital Paths & Concentric Curves Behind Leadership Photo */}
      <div
        style={{
          transform: `scale(${orbitalScale}) translate3d(${mouseOffset.x * 10}px, ${mouseOffset.y * 10}px, 0)`,
          transition: 'transform 0.15s ease-out'
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          className="w-[740px] h-[740px] max-w-none opacity-45"
          viewBox="0 0 740 740"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital Circle 1: Outer Primary Blue Path */}
          <circle
            cx="370"
            cy="370"
            r="320"
            stroke="url(#blueGradOrbit)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="animate-spin"
            style={{ animationDuration: '90s' }}
          />

          {/* Orbital Circle 2: Inner Yellow Accent Path */}
          <circle
            cx="370"
            cy="370"
            r="240"
            stroke="url(#yellowGradOrbit)"
            strokeWidth="1.5"
            strokeDasharray="8 10"
            className="animate-spin"
            style={{ animationDuration: '60s', animationDirection: 'reverse' }}
          />

          {/* Orbital Circle 3: Tight Concentric Ring */}
          <circle
            cx="370"
            cy="370"
            r="160"
            stroke="#0220A8"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          {/* Planetary Accents along Orbit */}
          <circle cx="690" cy="370" r="4.5" fill="#0220A8" fillOpacity="0.6" />
          <circle cx="370" cy="50" r="3" fill="#FDF219" stroke="#EAB308" strokeWidth="1" />
          <circle cx="130" cy="370" r="3.5" fill="#0220A8" fillOpacity="0.5" />
          <circle cx="370" cy="610" r="4" fill="#FDF219" fillOpacity="0.8" />

          {/* Gentle Gradients */}
          <defs>
            <linearGradient id="blueGradOrbit" x1="50" y1="50" x2="690" y2="690" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0220A8" stopOpacity="0.35" />
              <stop offset="0.5" stopColor="#0220A8" stopOpacity="0.1" />
              <stop offset="1" stopColor="#0220A8" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="yellowGradOrbit" x1="610" y1="130" x2="130" y2="610" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDF219" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#EAB308" stopOpacity="0.25" />
              <stop offset="1" stopColor="#FDF219" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* LAYER 2: Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Subtle Bottom Architectural Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
};

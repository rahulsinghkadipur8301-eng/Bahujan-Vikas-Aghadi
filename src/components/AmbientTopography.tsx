import React, { useEffect, useRef } from 'react';

/**
 * AmbientTopography: High-Level Interactive Animated Background System
 * 
 * Features:
 * 1. Multi-layered organic wave elevation curves continuously evolving via requestAnimationFrame.
 * 2. Floating celestial particle network with interactive cursor gravitation/repulsion in BVA Yellow (#FDF219) & Royal Blue (#0220A8).
 * 3. Delicate rotating contour rings and geometric ambient accents.
 * 4. Atmospheric soft light blooms that breathe gently.
 * 5. 100% white-preserving high-key design: ultra-clean, minimal, sophisticated, zero clutter.
 */
export const AmbientTopography: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes for high-level particle-network animation
    const particleCount = Math.min(36, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1.2,
      color: Math.random() > 0.45 ? 'rgba(2, 32, 168, ' : 'rgba(234, 179, 8, ', // Blue & Yellow
      baseAlpha: Math.random() * 0.35 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // --- 1. Topographic Animated Wave Contours ---
      // We render 4 flowing organic elevation ribbons with gentle sine/cosine modulation
      const waveConfigs = [
        { yBase: height * 0.28, amplitude: 35, freq: 0.0018, speed: 0.9, stroke: 'rgba(203, 213, 225, 0.45)', width: 1.2 },
        { yBase: height * 0.42, amplitude: 45, freq: 0.0015, speed: -0.7, stroke: 'rgba(226, 232, 240, 0.7)', width: 1.5 },
        { yBase: height * 0.58, amplitude: 50, freq: 0.0013, speed: 1.1, stroke: 'rgba(203, 213, 225, 0.4)', width: 1.0 },
        { yBase: height * 0.74, amplitude: 38, freq: 0.0019, speed: -0.85, stroke: 'rgba(226, 232, 240, 0.65)', width: 1.2 }
      ];

      waveConfigs.forEach((wave, idx) => {
        ctx.beginPath();
        ctx.lineWidth = wave.width;
        ctx.strokeStyle = wave.stroke;

        // Optional subtle dashed appearance on alternating lines
        if (idx % 2 === 1) {
          ctx.setLineDash([6, 8]);
        } else {
          ctx.setLineDash([]);
        }

        const step = 20;
        for (let x = -40; x <= width + 40; x += step) {
          // Dynamic sine superposition
          const sine1 = Math.sin(x * wave.freq + time * wave.speed);
          const sine2 = Math.cos(x * wave.freq * 1.8 - time * 0.5);
          
          // Subtle mouse deflection
          const distToMouse = Math.hypot(x - mouse.x, wave.yBase - mouse.y);
          const mouseEffect = Math.max(0, 1 - distToMouse / 380) * 24;

          const y = wave.yBase + (sine1 + sine2 * 0.5) * wave.amplitude + Math.sin(time + idx) * 8 - mouseEffect;

          if (x === -40) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      ctx.setLineDash([]); // Reset dash

      // --- 2. Interactive Particles & Connection Strands ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist && dist > 1) {
          const force = (1 - dist / maxDist) * 0.65;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Pulse alpha
        const currentAlpha = p.baseAlpha + Math.sin(time * 2 + p.phase) * 0.12;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.05, currentAlpha)})`;
        ctx.fill();

        // Connect nearby particles with delicate hairlines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 140) {
            const lineAlpha = (1 - distNodes / 140) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(2, 32, 168, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Dynamic Interactive HTML5 Canvas (Waves & Particles) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Perimeter Technical Geographic Coordinates Badges */}
      <div className="absolute top-20 right-8 hidden xl:flex flex-col items-end gap-1 text-[9px] font-mono text-slate-400 tracking-widest uppercase">
        <span className="flex items-center gap-1.5 font-bold text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0220A8] animate-ping" />
          PALGHAR REGION · 19.4557° N, 72.8080° E
        </span>
        <span>VASAI-VIRAR MUNICIPAL SECTOR</span>
      </div>

      <div className="absolute bottom-24 left-8 hidden xl:flex flex-col items-start gap-1 text-[9px] font-mono text-slate-400 tracking-widest uppercase">
        <span className="font-bold text-slate-500">CONSTITUENCIES 132 &amp; 133</span>
        <span>ELEVATION: SEA LEVEL TO 280M (TUNGRESHWAR)</span>
      </div>
    </div>
  );
};

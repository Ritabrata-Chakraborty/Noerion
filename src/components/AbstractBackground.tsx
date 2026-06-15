import React, { useRef, useEffect } from "react";

interface AbstractBackgroundProps {
  darkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originX: number;
  originY: number;
}

export default function AbstractBackground({ darkMode }: AbstractBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 70;
    const maxDistance = 115;
    const forceRadius = 140;

    // Resize canvas to match container's exact scroll height
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      // Use scrollHeight to cover the full vertical range of all sections
      const width = rect.width;
      const height = container.scrollHeight || rect.height;

      canvas.width = width;
      canvas.height = height;

      // Re-initialize particles to distribute them across the new bounds
      initParticles(width, height);
    };

    const initParticles = (width: number, height: number) => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 1,
          originX: x,
          originY: y,
        });
      }
    };

    // Track mouse position relative to canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // Initialize dimensions
    resizeCanvas();

    // Watch for size changes continuously (handling folds, screen rotations, sections resizing)
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const width = canvas.width;
      const height = canvas.height;

      // Draw subtle grid manually to align elegantly with the canvas coordinate system
      const gridSize = 40;
      ctx.strokeStyle = darkMode ? "rgba(30, 41, 59, 0.4)" : "rgba(226, 232, 240, 0.5)";
      ctx.lineWidth = 0.5;

      // Draw grid lines
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw mouse spotlight effect directly on canvas
      if (mx !== null && my !== null) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        if (darkMode) {
          gradient.addColorStop(0, "rgba(37, 99, 235, 0.05)");
          gradient.addColorStop(1, "rgba(37, 99, 235, 0)");
        } else {
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.04)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        }
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mx, my, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Gently drift base speed
        p.x += p.vx;
        p.y += p.vy;

        // 2. Mouse push back repulsion force
        if (mx !== null && my !== null) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < forceRadius) {
            const force = (forceRadius - dist) / forceRadius;
            // Calculate unit vector
            const directionX = dx / (dist || 1);
            const directionY = dy / (dist || 1);
            
            // Push away proportional to distance closeness
            p.x += directionX * force * 1.5;
            p.y += directionY * force * 1.5;
          }
        }

        // 3. Boundary bounds wrapping / bouncing
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // 4. Render particles as beautiful small neural nodes
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = darkMode 
          ? "rgba(147, 197, 253, 0.45)" 
          : "rgba(59, 130, 246, 0.5)";
        ctx.fill();
      }

      // 5. Connect particles that are close with fine, responsive lines (mesh)
      ctx.lineWidth = 0.55;
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (darkMode ? 0.22 : 0.16);
            ctx.strokeStyle = darkMode
              ? `rgba(96, 165, 250, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [darkMode]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none"
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full opacity-80 md:opacity-100 transition-opacity duration-300" 
      />
    </div>
  );
}

import React, { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.15; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.15;
        this.radius = Math.random() * 2.5 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Subtle color based on theme
        ctx.fillStyle = isDark
          ? `rgba(99, 102, 241, 0.12)`  // Slate blue/indigo for dark mode
          : `rgba(79, 70, 229, 0.06)`;   // Soft violet/indigo for light mode
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 75);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let lastIsDark = document.documentElement.classList.contains("dark");

    const animate = () => {
      // Check current theme
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark !== lastIsDark) {
        lastIsDark = isDark;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw(isDark);
      });

      // Draw subtle connecting lines for close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / 120) * (isDark ? 0.08 : 0.04);
            ctx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${alpha})`
              : `rgba(79, 70, 229, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

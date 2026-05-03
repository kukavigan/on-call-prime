import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(40, 171, 230, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(40, 171, 230, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(40, 171, 230, ${0.03 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial glows */}
      <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[100px]" />
      <div className="absolute top-[60%] left-[60%] w-[400px] h-[400px] bg-navy-500/[0.08] rounded-full blur-[80px]" />

      {/* Animated accent lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`hline-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${25 + i * 25}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.15, 0.15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>
      ))}

      {/* Vertical accent lines */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`vline-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{ left: `${30 + i * 40}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0, 1, 1, 0],
            opacity: [0, 0.1, 0.1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 3,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
        </motion.div>
      ))}

      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-transparent to-[#060A14]" />
    </div>
  );
}

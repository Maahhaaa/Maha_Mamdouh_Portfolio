'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const COLORS = ['#00F5FF', '#FF3CAC', '#7B2CBF', '#FFFFFF'];

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export default function PixelBackground() {
  const reduceMotion = useReducedMotion();
  const [stars, setStars] = useState<Star[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [viewportH, setViewportH] = useState(800);

  useEffect(() => {
    setViewportH(window.innerHeight);
    const onResize = () => setViewportH(window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);

    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 12 + 10,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setParticles(newParticles);
  }, []);

  const floatingObjects = useMemo(
    () => [
      { emoji: '🎮', x: 8, y: 15, delay: 0, duration: 6 },
      { emoji: '🕹️', x: 90, y: 25, delay: 1, duration: 7 },
      { emoji: '👾', x: 15, y: 70, delay: 2, duration: 8 },
      { emoji: '⭐', x: 85, y: 75, delay: 0.5, duration: 5 },
      { emoji: '🛸', x: 50, y: 10, delay: 1.5, duration: 9 },
      { emoji: '💎', x: 75, y: 50, delay: 0.8, duration: 6.5 },
    ],
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#050505] to-[#0B1020]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00F5FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF3CAC]/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#7B2CBF]/10 rounded-full blur-[100px]" />

      {/* Moving grid */}
      <div className="absolute inset-0 grid-bg grid-animated opacity-40" />

      {/* Stars */}
      {!reduceMotion &&
        stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Floating particles rising up */}
      {!reduceMotion &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: -10,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
            animate={{ y: [0, -viewportH - 100], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

      {/* Floating game objects */}
      {!reduceMotion &&
        floatingObjects.map((obj, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl opacity-30 select-none"
            style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{
              duration: obj.duration,
              delay: obj.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {obj.emoji}
          </motion.div>
        ))}
    </div>
  );
}

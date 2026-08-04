'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, FolderGit2, Download, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/portfolio-data';

const titles = ['Flutter Developer', 'Full Stack Developer', 'Software Engineer'];

function useTypewriter(text: string, speed = 60, startDelay = 500) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      timeout = interval as unknown as ReturnType<typeof setTimeout>;
    }, startDelay);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [titleIdx, setTitleIdx] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { displayed, done } = useTypewriter(titles[titleIdx], 80, 800);

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [done]);

  useEffect(() => {
    if (reduceMotion) return;
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [reduceMotion]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden"
    >
      {/* Parallax decorative layers */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-[20%] left-[10%] text-5xl opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ x: mouse.x * 30, y: mouse.y * 30 }}
          >
            ☁️
          </motion.div>
          <motion.div
            className="absolute top-[30%] right-[15%] text-4xl opacity-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ x: mouse.x * -40, y: mouse.y * -20 }}
          >
            🎮
          </motion.div>
          <motion.div
            className="absolute bottom-[25%] left-[20%] text-4xl opacity-20"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            style={{ x: mouse.x * 50, y: mouse.y * 40 }}
          >
            👾
          </motion.div>
        </>
      )}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Player tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <span className="font-pixel text-[10px] md:text-xs text-[#00F5FF] bg-[#00F5FF]/10 border border-[#00F5FF]/30 px-4 py-2 rounded">
            ▶ PLAYER 1 READY
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-pixel text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight"
        >
          <span className="neon-cyan block mb-2">MAHA</span>
          <span className="neon-pink">MAMDOUH</span>
        </motion.h1>

        {/* Animated role title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-8 md:h-10 mb-6"
        >
          <p className="font-pixel text-sm md:text-lg text-white cursor-blink">
            {displayed}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-8"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-press group flex items-center gap-2 bg-gradient-to-r from-[#00F5FF] to-[#FF3CAC] text-[#050505] font-bold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-shadow"
          >
            <Play className="w-4 h-4 fill-current" />
            <span className="font-pixel text-[10px] md:text-xs">START GAME</span>
          </button>
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-press flex items-center gap-2 border-2 border-[#FF3CAC] text-[#FF3CAC] px-6 py-3 rounded-lg hover:bg-[#FF3CAC]/10 transition-colors"
          >
            <FolderGit2 className="w-4 h-4" />
            <span className="font-pixel text-[10px] md:text-xs">PROJECTS</span>
          </button>
          <a
            href={personalInfo.resumeUrl}
            className="btn-press flex items-center gap-2 border-2 border-[#7B2CBF] text-[#9d4edd] px-6 py-3 rounded-lg hover:bg-[#7B2CBF]/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="font-pixel text-[10px] md:text-xs">RESUME</span>
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-press flex items-center gap-2 border-2 border-gray-500 text-gray-300 px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-pixel text-[10px] md:text-xs">CONTACT</span>
          </button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-gray-400 text-xs"
        >
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {personalInfo.location} — Available for new quests
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-pixel text-[8px] text-gray-500 text-center"
        >
          ▼ INSERT COIN ▼
        </motion.div>
      </motion.div>
    </section>
  );
}

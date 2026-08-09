'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 px-4 overflow-hidden">
      {/* Pixel mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B2CBF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0B1020" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="mountainGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF3CAC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#050505" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Back mountains */}
          <polygon points="0,200 150,80 200,120 350,60 450,100 600,40 750,90 900,50 1050,100 1200,70 1200,200" fill="url(#mountainGrad2)" />
          {/* Front mountains */}
          <polygon points="0,200 100,140 250,90 400,130 550,70 700,110 850,80 1000,120 1150,90 1200,110 1200,200" fill="url(#mountainGrad)" />
        </svg>
      </div>

      {/* Stars in footer */}
      <div className="absolute top-10 left-[10%] w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="absolute top-16 left-[30%] w-1.5 h-1.5 bg-[#00F5FF] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-8 right-[20%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-20 right-[35%] w-1.5 h-1.5 bg-[#FF3CAC] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Waving pixel character */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-5xl mb-6"
        >
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.div>

        <h2 className="font-pixel text-sm md:text-lg neon-cyan mb-3">GAME OVER?</h2>
        <p className="font-pixel text-xs md:text-sm neon-pink mb-8">LET&apos;S BUILD SOMETHING AMAZING</p>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs">
          {['Home', 'About', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-[#00F5FF] transition-colors font-pixel text-[9px]"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="w-32 h-px section-title-line mx-auto mb-6" />

        <p className="text-gray-500 text-xs">
          © {year} Maha Mamdouh Ahmed. All rights reserved.
        </p>
        <p className="text-gray-600 text-[10px] mt-2 font-pixel">
          BUILT WITH ♡ IN NEXT.JS
        </p>
      </div>
    </footer>
  );
}

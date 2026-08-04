'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Smartphone, Monitor } from 'lucide-react';

interface PhonePreviewProps {
  url: string | null;
  color: string;
  title: string;
}

export default function PhonePreview({ url, color, title }: PhonePreviewProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showPlaceholder, setShowPlaceholder] = useState(!url);

  const handleMouse = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      animate={!reduceMotion ? { y: [0, -12, 0] } : {}}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="relative mx-auto"
    >
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 rounded-[40px] blur-2xl opacity-40"
        style={{ background: color }}
      />

      {/* Phone frame */}
      <div className="phone-mockup w-[220px] h-[440px] md:w-[260px] md:h-[520px] relative">
        {/* Notch */}
        <div className="phone-notch" />

        {/* Side buttons */}
        <div className="absolute left-[-3px] top-[100px] w-[3px] h-[30px] bg-[#1a1a2e] rounded-l" />
        <div className="absolute left-[-3px] top-[140px] w-[3px] h-[50px] bg-[#1a1a2e] rounded-l" />
        <div className="absolute right-[-3px] top-[120px] w-[3px] h-[70px] bg-[#1a1a2e] rounded-r" />

        {/* Screen */}
        <div className="absolute inset-0 p-3 pt-10 pb-3">
          <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#0B1020] relative">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-[#0B1020] z-10 flex items-center justify-between px-4 text-[8px] text-white/60">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-2 border border-white/40 rounded-sm" />
                100%
              </span>
            </div>

            {/* Content */}
            {!showPlaceholder && url ? (
              <iframe
                src={url}
                title={`${title} live preview`}
                className="w-full h-full border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            ) : (
              <PlaceholderScreen color={color} title={title} />
            )}
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full" />
      </div>

      {/* Reflection */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[180px] h-8 rounded-[50%] opacity-30 blur-md"
        style={{ background: color }}
      />
    </motion.div>
  );
}

function PlaceholderScreen({ color, title }: { color: string; title: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="text-4xl mb-4"
      >
        📱
      </motion.div>
      <p className="font-pixel text-[9px] text-white mb-2">{title}</p>
      <p className="text-[10px] text-gray-400 mb-4">Live preview coming soon</p>
      <div className="flex items-center gap-2 text-[9px] px-3 py-1.5 rounded border" style={{ borderColor: `${color}40`, color }}>
        <Smartphone className="w-3 h-3" />
        Add Flutter Web URL
      </div>
      <div className="mt-6 w-full space-y-2">
        <div className="h-2 rounded bg-white/5" />
        <div className="h-2 rounded bg-white/5 w-4/5" />
        <div className="h-2 rounded bg-white/5 w-3/5" />
      </div>
    </div>
  );
}

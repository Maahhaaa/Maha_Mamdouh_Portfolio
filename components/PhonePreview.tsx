'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PhonePreviewProps {
  url: string | null;
  color: string;
  title: string;
}

export default function PhonePreview({ url, color, title }: PhonePreviewProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div className="relative mx-auto w-fit">
      {/* Glow behind the phone */}
      <div
        className="absolute inset-0 rounded-[50px] blur-3xl opacity-30 pointer-events-none"
        style={{ background: color }}
      />

      <div className="phone-mockup relative w-[280px] aspect-[280/584] sm:w-[300px] sm:aspect-[300/626] md:w-[320px] md:aspect-[320/669]">
        <div className="phone-button phone-button-silent" />
        <div className="phone-button phone-button-volume-up" />
        <div className="phone-button phone-button-volume-down" />
        <div className="phone-button phone-button-power" />

        <div className="phone-screen-container">
          <div className="phone-screen">
            {url ? (
              <>
                {/* Placeholder shown until iframe loads */}
                {!loaded && <PlaceholderScreen color={color} title={title} loading />}

                {/* iframe always rendered so it preloads in background */}
                <iframe
                  src={url}
                  title={`${title} live preview`}
                  className="phone-iframe"
                  style={{ visibility: loaded ? 'visible' : 'hidden', position: loaded ? 'relative' : 'absolute' }}
                  loading="eager"
                  onLoad={() => setLoaded(true)}
                  allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; payment; usb; clipboard; autoplay; fullscreen"
                  allowFullScreen
                />
              </>
            ) : (
              <PlaceholderScreen color={color} title={title} />
            )}
          </div>
        </div>

        <div className="phone-glass-reflection pointer-events-none" />
      </div>

      <div className="phone-reflection" style={{ background: color }} />
    </motion.div>
  );
}

function PlaceholderScreen({ color, title, loading }: { color: string; title: string; loading?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-[#101322] text-white">
      <div className="text-4xl mb-5">{loading ? '⏳' : '📱'}</div>
      <div className="text-[10px] font-semibold tracking-wide mb-3">{title}</div>
      <div className="text-[8px] leading-5 text-white/50 max-w-[180px]">
        {loading ? 'Loading preview...' : 'Live preview coming soon'}
      </div>
      {!loading && (
        <div
          className="flex items-center gap-2 text-[8px] px-3 py-2 mt-5 rounded-md border"
          style={{ borderColor: `${color}40`, color }}
        >
          Add Flutter Web URL
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PhonePreviewProps {
  url: string | null;
  color: string;
  title: string;
}

export default function PhonePreview({
  url,
  color,
  title,
}: PhonePreviewProps) {
  const [showPlaceholder, setShowPlaceholder] = useState(!url);

  return (
    <motion.div
      className="relative mx-auto w-fit"
    >
      {/* Glow behind the phone */}
      <div
        className="absolute inset-0 rounded-[50px] blur-3xl opacity-30 pointer-events-none"
        style={{
          background: color,
        }}
      />

      {/* ===================================== */}
      {/* REALISTIC PHONE FRAME                  */}
      {/* ===================================== */}

      <div
        className="
          phone-mockup relative
          w-[280px] aspect-[280/584]
          sm:w-[300px] sm:aspect-[300/626]
          md:w-[320px] md:aspect-[320/669]
        "
      >
        {/* ================================ */}
        {/* SIDE BUTTONS                     */}
        {/* ================================ */}

        {/* Silent / Action button */}
        <div className="phone-button phone-button-silent" />

        {/* Volume Up */}
        <div className="phone-button phone-button-volume-up" />

        {/* Volume Down */}
        <div className="phone-button phone-button-volume-down" />

        {/* Power */}
        <div className="phone-button phone-button-power" />

        {/* ================================= */}
        {/* PHONE SCREEN                       */}
        {/* ================================= */}

        <div className="phone-screen-container">
          <div className="phone-screen">

            {/* ================================= */}
            {/* FLUTTER WEB APP                   */}
            {/* ================================= */}

            {!showPlaceholder && url ? (
              <iframe
                src={url}
                title={`${title} live preview`}
                className="phone-iframe"
                loading="eager"
                allow="
                  accelerometer;
                  camera;
                  encrypted-media;
                  geolocation;
                  gyroscope;
                  microphone;
                  payment;
                  usb;
                  clipboard;
                  autoplay;
                  fullscreen
                "
                allowFullScreen
              />
            ) : (
              <PlaceholderScreen
                color={color}
                title={title}
              />
            )}

          </div>
        </div>

        {/* ================================= */}
        {/* GLASS REFLECTION                   */}
        {/* ================================= */}

        <div className="phone-glass-reflection pointer-events-none" />
      </div>

      {/* ===================================== */}
      {/* PHONE SHADOW / GLOW                   */}
      {/* ===================================== */}

      <div
        className="phone-reflection"
        style={{
          background: color,
        }}
      />
    </motion.div>
  );
}


/* ========================================= */
/* PLACEHOLDER SCREEN                        */
/* ========================================= */

function PlaceholderScreen({
  color,
  title,
}: {
  color: string;
  title: string;
}) {
  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        bg-[#101322]
        text-white
      "
    >
      {/* Phone Icon */}
      <div className="text-4xl mb-5">
        📱
      </div>

      {/* Title */}
      <div
        className="
          text-[10px]
          font-semibold
          tracking-wide
          mb-3
        "
      >
        {title}
      </div>

      {/* Message */}
      <div
        className="
          text-[8px]
          leading-5
          text-white/50
          max-w-[180px]
        "
      >
        Live preview coming soon
      </div>

      {/* URL indicator */}
      <div
        className="
          flex
          items-center
          gap-2
          text-[8px]
          px-3
          py-2
          mt-5
          rounded-md
          border
        "
        style={{
          borderColor: `${color}40`,
          color: color,
        }}
      >
        Add Flutter Web URL
      </div>
    </div>
  );
}

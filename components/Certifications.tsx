'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '@/lib/portfolio-data';

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-pink mb-3">CERTIFICATIONS</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">TROPHY ROOM</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring' }}
              whileHover={{ y: -10, scale: 1.05, rotateY: -5 }}
              className="pixel-card rounded-lg p-5 text-center group cursor-default relative"
              style={{ borderColor: `${cert.color}40`, transformStyle: 'preserve-3d' }}
            >
              {/* Trophy glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                className="absolute inset-0 rounded-lg blur-xl"
                style={{ background: cert.color }}
              />

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                  className="text-4xl md:text-5xl mb-3"
                >
                  {cert.icon}
                </motion.div>
                <h3 className="font-pixel text-[8px] text-white leading-relaxed mb-2">{cert.title}</h3>
                <p className="text-[10px] mb-1" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-[9px] text-gray-500">{cert.date}</p>

                {/* Shine on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

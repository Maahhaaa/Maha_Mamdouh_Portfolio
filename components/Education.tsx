'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '@/lib/portfolio-data';

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="education" className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-cyan mb-3">EDUCATION</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">ACHIEVEMENTS UNLOCKED</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8, rotateX: 5 }}
              className="pixel-card pixel-corner rounded-lg p-6 group relative overflow-hidden"
              style={{ borderColor: `${edu.color}40`, transformStyle: 'preserve-3d' }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon + Grade badge */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className="text-4xl"
                >
                  {edu.icon}
                </motion.div>
                <div className="text-right">
                  <span
                    className="font-pixel text-[8px] px-2 py-1 rounded"
                    style={{ background: `${edu.color}20`, color: edu.color }}
                  >
                    {edu.grade}
                  </span>
                  {edu.projectGrade && (
                    <p className="font-pixel text-[7px] text-gray-500 mt-1">PROJECT: {edu.projectGrade}</p>
                  )}
                </div>
              </div>

              <h3 className="font-pixel text-[10px] text-white leading-relaxed mb-2">{edu.degree}</h3>
              <p className="text-xs mb-1" style={{ color: edu.color }}>
                {edu.institution}
              </p>
              <p className="text-[10px] text-gray-500 mb-3">{edu.period} • {edu.location}</p>
              <p className="text-xs text-gray-300 leading-relaxed">{edu.description}</p>

              {/* Achievement ribbon */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="text-lg">🏅</span>
                <span className="font-pixel text-[8px] text-gray-400">EDUCATION BADGE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

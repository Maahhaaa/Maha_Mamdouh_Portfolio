'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/portfolio-data';

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="skills" className="relative py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-pink mb-3">SKILLS</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">INVENTORY</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              whileHover={{ y: -8 }}
              className="pixel-card pixel-corner rounded-lg p-5 group"
              style={{ borderColor: `${cat.color}40` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: catIdx * 0.2 }}
                  className="text-3xl"
                >
                  {cat.icon}
                </motion.div>
                <div>
                  <h3 className="font-pixel text-[10px] text-white">{cat.category.toUpperCase()}</h3>
                  <p className="text-[10px] mt-1" style={{ color: cat.color }}>
                    {cat.items.length} ITEMS
                  </p>
                </div>
              </div>

              {/* Skill items with XP bars */}
              <div className="space-y-3">
                {cat.items.map((skill, skillIdx) => (
                  <SkillBar key={skill.name} skill={skill} color={cat.color} inView={inView} delay={catIdx * 0.1 + skillIdx * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, color, inView, delay }: { skill: { name: string; level: number }; color: string; inView: boolean; delay: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-200">{skill.name}</span>
        <span className="font-pixel text-[8px]" style={{ color }}>
          {skill.level}
        </span>
      </div>
      <div className="h-2.5 bg-[#050505] rounded-sm overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-sm relative"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}80`,
          }}
        >
          {/* Pixel segment overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent 0, transparent 6px, #050505 6px, #050505 8px)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

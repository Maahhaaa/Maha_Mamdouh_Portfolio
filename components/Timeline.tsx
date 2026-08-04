'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Award, Flag, Star } from 'lucide-react';
import { experience, volunteering } from '@/lib/portfolio-data';

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="experience" className="relative py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-purple mb-3">EXPERIENCE</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">LEVEL PROGRESSION</p>
        </motion.div>

        {/* Timeline track */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5FF] via-[#FF3CAC] to-[#7B2CBF] md:-translate-x-1/2" />

          {/* Experience entries */}
          {experience.map((exp, idx) => (
            <TimelineItem key={exp.id} item={exp} index={idx} inView={inView} icon={<Briefcase className="w-4 h-4" />} />
          ))}

          {/* Volunteering section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mt-12 mb-6 pl-12 md:pl-0"
          >
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#7B2CBF] border-4 border-[#0B1020] z-10 flex items-center justify-center">
              <Flag className="w-3.5 h-3.5 text-white" />
            </div>
            <h3 className="font-pixel text-xs text-[#9d4edd] md:text-center">SIDE QUESTS — VOLUNTEERING</h3>
          </motion.div>

          {volunteering.map((v, idx) => (
            <TimelineItem key={v.id} item={v} index={idx} inView={inView} icon={<Star className="w-4 h-4" />} isVolunteer />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineEntry {
  id: number;
  company?: string;
  organization?: string;
  role: string;
  type?: string;
  period: string;
  location?: string;
  description: string;
  achievements?: string[];
  color: string;
  level?: number;
}

function TimelineItem({
  item,
  index,
  inView,
  icon,
  isVolunteer = false,
}: {
  item: TimelineEntry;
  index: number;
  inView: boolean;
  icon: React.ReactNode;
  isVolunteer?: boolean;
}) {
  const isLeft = index % 2 === 0;
  const title = item.company || item.organization || '';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-center mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0B1020] z-10 flex items-center justify-center" style={{ background: item.color }}>
        {icon}
      </div>

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="pixel-card rounded-lg p-5 group hover:scale-[1.02] transition-transform" style={{ borderColor: `${item.color}30` }}>
          {/* Level badge */}
          {item.level && (
            <div className={`mb-2 ${isLeft ? 'md:text-right' : 'text-left'}`}>
              <span className="font-pixel text-[8px] px-2 py-0.5 rounded" style={{ background: `${item.color}20`, color: item.color }}>
                LEVEL {item.level}
              </span>
            </div>
          )}

          <h3 className="font-pixel text-[10px] text-white mb-1">{item.role}</h3>
          <p className="text-xs mb-1" style={{ color: item.color }}>
            {title}
            {item.type && <span className="text-gray-500"> — {item.type}</span>}
          </p>
          <p className="text-[10px] text-gray-500 mb-3">{item.period}{item.location && ` • ${item.location}`}</p>
          <p className="text-xs text-gray-300 leading-relaxed mb-3">{item.description}</p>

          {item.achievements && (
            <ul className={`space-y-1 ${isLeft ? 'md:text-right' : 'text-left'}`}>
              {item.achievements.map((a) => (
                <li key={a} className="text-[11px] text-gray-400 flex items-start gap-1.5" style={{ flexDirection: isLeft ? 'row-reverse' : 'row' }}>
                  <span style={{ color: item.color }}>◆</span>
                  {a}
                </li>
              ))}
            </ul>
          )}

          {isVolunteer && (
            <div className={`flex items-center gap-1 mt-2 text-[10px] ${isLeft ? 'md:justify-end' : ''}`} style={{ color: item.color }}>
              <Award className="w-3 h-3" />
              Achievement Unlocked
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

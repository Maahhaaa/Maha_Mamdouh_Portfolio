'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Languages, User, MapPin } from 'lucide-react';
import Image from 'next/image';
import { personalInfo, education, experience, certifications } from '@/lib/portfolio-data';

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Professional' },
];

function useTypewriter(text: string, speed = 25, active: boolean) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!active) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, active]);

  return displayed;
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const typedBio = useTypewriter(personalInfo.bio, 20, inView);

  return (
    <section ref={ref} id="about" className="relative py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-cyan mb-3">ABOUT</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">CHARACTER PROFILE</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Photo + basic info (dialogue box) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="pixel-card pixel-corner rounded-lg p-6 text-center">
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-lg overflow-hidden border-2 border-[#00F5FF]/50">
                  <Image
                    src="/assets/profile.jpg"
                    alt="Maha Mamdouh"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#00F5FF] text-[#050505] text-[10px] font-pixel px-2 py-1 rounded">
                  LV.23
                </div>
              </div>
              <h3 className="font-pixel text-sm text-white mb-1">{personalInfo.name}</h3>
              <p className="text-[#00F5FF] text-xs mb-3">{personalInfo.subtitle}</p>
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs">
                <MapPin className="w-3 h-3" />
                {personalInfo.location}
              </div>

              {/* Stats */}
              <div className="mt-6 space-y-2 text-left">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 font-pixel text-[8px]">HP</span>
                  <div className="w-24 h-2 bg-[#050505] rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-full" />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 font-pixel text-[8px]">XP</span>
                  <div className="w-24 h-2 bg-[#050505] rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00F5FF] to-[#FF3CAC] w-[85%]" />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 font-pixel text-[8px]">MP</span>
                  <div className="w-24 h-2 bg-[#050505] rounded overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7B2CBF] to-[#9d4edd] w-[90%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dialogue box with bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="pixel-card pixel-corner rounded-lg p-6 md:p-8 h-full">
              <div className="flex items-center gap-2 mb-4 border-b border-[#00F5FF]/20 pb-3">
                <User className="w-5 h-5 text-[#00F5FF]" />
                <h3 className="font-pixel text-xs text-[#00F5FF]">DIALOGUE</h3>
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed min-h-[120px]">
                {typedBio}
                <span className="cursor-blink inline-block" />
              </p>

              {/* Quick info grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <InfoTile icon={<Briefcase className="w-4 h-4" />} label="Experience" value={`${experience.length} Quests`} color="#FF3CAC" />
                <InfoTile icon={<GraduationCap className="w-4 h-4" />} label="Education" value={`${education.length} Paths`} color="#00F5FF" />
                <InfoTile icon={<Award className="w-4 h-4" />} label="Certs" value={`${certifications.length} Trophies`} color="#7B2CBF" />
                <InfoTile icon={<Languages className="w-4 h-4" />} label="Languages" value={languages.map((l) => l.name).join(', ')} color="#00F5FF" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-[#050505]/50 border border-white/5">
      <div style={{ color }} className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-pixel text-[8px] text-gray-500">{label.toUpperCase()}</p>
        <p className="text-white text-xs mt-0.5">{value}</p>
      </div>
    </div>
  );
}

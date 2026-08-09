'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Smartphone, Monitor } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import type { Project } from '@/lib/types';
import PhonePreview from './PhonePreview';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section ref={ref} id="projects" className="relative py-20 md:py-28 px-4">
      {/* Preload all project iframes in the background */}
      <div className="sr-only" aria-hidden="true">
        {projects.filter((p) => p.previewUrl).map((p) => (
          <iframe key={p.id} src={p.previewUrl} title={`preload-${p.id}`} loading="eager" />
        ))}
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-cyan mb-3">PROJECTS</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">SELECT YOUR LEVEL</p>
        </motion.div>

        {/* Project cartridges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} inView={inView} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, inView, onClick }: { project: Project; index: number; inView: boolean; onClick: () => void }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="text-left pixel-card pixel-corner rounded-lg overflow-hidden group cursor-pointer relative"
      style={{ borderColor: `${project.color}40` }}
      aria-label={`View ${project.title}`}
    >
      {/* Cartridge top label */}
      <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between" style={{ background: `${project.color}15` }}>
        <span className="font-pixel text-[8px]" style={{ color: project.color }}>
          CART {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-[10px] text-gray-400">{project.category}</span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
            className="text-3xl flex-shrink-0"
          >
            🎮
          </motion.div>
          <div>
            <h3 className="font-pixel text-xs text-white leading-relaxed">{project.title}</h3>
            <p className="text-[10px] mt-1" style={{ color: project.color }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[9px] px-2 py-0.5 text-gray-500">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Status */}
        <div className="flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1 text-gray-400">
            <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
            {project.status}
          </span>
          <span className="text-gray-500">{project.date}</span>
        </div>

        {/* Hover hint */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-1 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: project.color }}>
          <span className="font-pixel text-[8px]">PRESS TO PLAY</span>
          <span className="animate-pulse">▶</span>
        </div>
      </div>
    </motion.button>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto pixel-card rounded-lg"
        style={{ borderColor: `${project.color}50` }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0B1020]/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px]" style={{ color: project.color }}>
              NOW PLAYING
            </span>
            <h3 className="font-pixel text-xs md:text-sm text-white">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded hover:bg-white/10 transition-colors text-gray-400 hover:text-white" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 md:p-8 grid md:grid-cols-2 gap-8">
          {/* LEFT: Phone mockup */}
          <div className="flex flex-col items-center">
            <PhonePreview url={project.previewUrl} color={project.color} title={project.title} />

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              <DetailButton href={project.liveDemo} icon={<ExternalLink className="w-3 h-3" />} label="LIVE DEMO" color="#00F5FF" />
              <DetailButton href={project.github} icon={<Github className="w-3 h-3" />} label="GITHUB" color="#FF3CAC" />
            </div>
          </div>

          {/* RIGHT: Project details */}
          <div>
            <h4 className="font-pixel text-sm text-white mb-2">{project.title}</h4>
            <p className="text-xs mb-4" style={{ color: project.color }}>
              {project.subtitle}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.longDescription}</p>

            {/* Features */}
            <DetailSection title="FEATURES" color={project.color}>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-300">
                    <span style={{ color: project.color }}>▶</span>
                    {f}
                  </li>
                ))}
              </ul>
            </DetailSection>

            {/* Tech stack */}
            <DetailSection title="TECH STACK" color={project.color}>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded border" style={{ borderColor: `${project.color}40`, color: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>
            </DetailSection>

            {/* Challenges & Solutions */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-[#050505]/60 border border-red-500/20">
                <h5 className="font-pixel text-[9px] text-red-400 mb-2">⚠ CHALLENGES</h5>
                <p className="text-xs text-gray-300">{project.challenges}</p>
              </div>
              <div className="p-4 rounded-lg bg-[#050505]/60 border border-green-500/20">
                <h5 className="font-pixel text-[9px] text-green-400 mb-2">✓ SOLUTIONS</h5>
                <p className="text-xs text-gray-300">{project.solution}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                <span className="text-gray-400">Status:</span>
                <span className="text-white">{project.status}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">{project.date}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailButton({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-press flex items-center gap-1.5 px-4 py-2 rounded border-2 text-xs font-pixel transition-all hover:scale-105"
      style={{ borderColor: color, color }}
    >
      {icon}
      {label}
    </a>
  );
}

function DetailSection({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h5 className="font-pixel text-[10px] mb-3" style={{ color }}>
        {title}
      </h5>
      {children}
    </div>
  );
}

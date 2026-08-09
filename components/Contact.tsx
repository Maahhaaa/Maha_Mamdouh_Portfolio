'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Send, Terminal } from 'lucide-react';
import { personalInfo } from '@/lib/portfolio-data';

const terminalLines = [
  '> Initializing contact terminal...',
  '> Connection established.',
  '> Awaiting player input...',
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let lineIdx = 0;
    let charIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx >= terminalLines.length) {
        clearInterval(interval);
        return;
      }
      const line = terminalLines[lineIdx];
      if (charIdx < line.length) {
        charIdx++;
        setTypedLines((prev) => {
          const next = [...prev];
          next[lineIdx] = line.slice(0, charIdx);
          return next;
        });
      } else {
        lineIdx++;
        charIdx = 0;
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: personalInfo.github, color: '#00F5FF' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: personalInfo.linkedin, color: '#FF3CAC' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: `mailto:${personalInfo.email}`, color: '#7B2CBF' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', href: personalInfo.whatsapp, color: '#00F5FF' },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-3xl neon-cyan mb-3">CONTACT</h2>
          <div className="section-title-line w-32 mx-auto" />
          <p className="text-gray-400 text-sm mt-3 font-pixel text-[10px]">ESTABLISH CONNECTION</p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pixel-card rounded-lg overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00F5FF]/20 bg-[#050505]/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-gray-400 text-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-pixel text-[8px]">CONTACT.exe</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-6">
            {/* Boot lines */}
            <div className="mb-5 font-mono text-xs space-y-1">
              {typedLines.map((line, i) => (
                <div key={i} className="text-green-400">
                  {line}
                  {i === typedLines.length - 1 && i < terminalLines.length - 1 && <span className="cursor-blink" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <TerminalField
                label="NAME"
                prompt="player@portfolio:~$"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Enter your name"
                required
              />
              <TerminalField
                label="EMAIL"
                prompt="player@portfolio:~$"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="Enter your email"
                type="email"
                required
              />
              <TerminalField
                label="MESSAGE"
                prompt="player@portfolio:~$"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                placeholder="Type your message..."
                required
                textarea
              />

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sent}
                className="btn-press w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00F5FF] to-[#FF3CAC] text-[#050505] font-bold py-3 rounded-lg transition-shadow hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                <span className="font-pixel text-[10px]">{sent ? 'MESSAGE SENT!' : 'SEND MESSAGE'}</span>
              </motion.button>
            </form>

            {/* Socials */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="font-pixel text-[8px] text-gray-500 mb-3 text-center">CONNECT ON</p>
              <div className="flex items-center justify-center gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors"
                    style={{ borderColor: `${s.color}40`, color: s.color }}
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalField({
  label,
  prompt,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  textarea = false,
}: {
  label: string;
  prompt: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <div>
      <label className="font-pixel text-[8px] text-[#00F5FF] block mb-1">{label}</label>
      <div className="flex items-start gap-2 bg-[#050505]/60 rounded px-3 py-2 border border-white/10 focus-within:border-[#00F5FF]/50 transition-colors">
        <span className="text-green-400 text-[10px] font-mono whitespace-nowrap pt-1">{prompt}</span>
        {textarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            rows={3}
            className="flex-1 bg-transparent text-white text-sm outline-none resize-none placeholder:text-gray-600"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-600"
          />
        )}
      </div>
    </div>
  );
}

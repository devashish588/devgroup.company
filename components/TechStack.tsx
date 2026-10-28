"use client";
import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'Next.js', emoji: '▲' },
  { name: 'TypeScript', emoji: 'TS' },
  { name: 'Python', emoji: '🐍' },
  { name: 'FastAPI', emoji: '⚡' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'Tailwind CSS', emoji: '🎨' },
  { name: 'Vercel', emoji: '◆' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'LangChain', emoji: '🔗' },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 bg-[#0a0f1e]" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3 block">Tools & Technologies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Our Tech Stack
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="glass-card flex items-center gap-3 px-5 py-3 rounded-2xl hover:border-white/20 transition-all duration-200 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -3, scale: 1.04 }}
            >
              <span className="text-lg">{tech.emoji}</span>
              <span className="text-sm font-semibold text-slate-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

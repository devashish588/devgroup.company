"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise CMS Platform',
    description: 'Production‑grade monorepo CMS handling 50k+ daily content operations with sub-100ms response times.',
    tech: ['Next.js', 'Express', 'Prisma'],
    icon: Code,
    color: 'from-blue-600 to-cyan-500',
    bg: 'from-blue-950/60 to-cyan-950/40',
  },
  {
    title: 'RAG Document Intelligence',
    description: 'Modular document retrieval system achieving 94% retrieval accuracy across 2M+ document corpus.',
    tech: ['FastAPI', 'ChromaDB', 'FastEmbed'],
    icon: Database,
    color: 'from-violet-600 to-purple-500',
    bg: 'from-violet-950/60 to-purple-950/40',
  },
  {
    title: 'High‑Concurrency Web App',
    description: 'Real-time collaborative platform handling 10k+ concurrent users with offline-first sync.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'IndexedDB'],
    icon: Server,
    color: 'from-emerald-600 to-teal-500',
    bg: 'from-emerald-950/60 to-teal-950/40',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 bg-[#0a0f1e]" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.article
              key={proj.title}
              className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${proj.bg} hover:border-white/20 transition-all duration-300 cursor-pointer group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${proj.color} mb-5 shadow-lg`}>
                  <proj.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {proj.title}
                  <ExternalLink size={14} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full glass-card text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

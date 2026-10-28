"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Search, CheckCircle } from 'lucide-react';

const models = [
  {
    title: 'Staff Augmentation',
    description: 'Integrate senior engineers directly into your sprints. You keep control, we add firepower.',
    icon: Users,
    perks: ['Dedicated senior engineer', 'Syncs with your toolchain', 'Weekly progress reports'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'End‑to‑End Delivery',
    description: 'We own the full product lifecycle — from system design to cloud deployment and handoff.',
    icon: Settings,
    perks: ['Architecture to deployment', 'Full documentation', 'Post-launch support'],
    color: 'from-violet-500 to-purple-400',
    featured: true,
  },
  {
    title: 'Technical Audits',
    description: 'We review your codebase for security, performance bottlenecks, and architectural debt.',
    icon: Search,
    perks: ['Security analysis', 'Performance profiling', 'Written audit report'],
    color: 'from-emerald-500 to-teal-400',
  },
];

export default function Engagement() {
  return (
    <section className="py-24 px-6 bg-[#0d1220]" id="engagement">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3 block">Engagement Models</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            How We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <motion.article
              key={m.title}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                m.featured
                  ? 'border-violet-500/50 bg-gradient-to-br from-violet-950/60 to-purple-950/40 shadow-xl shadow-violet-500/20'
                  : 'glass-card hover:border-white/20'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {m.featured && (
                <span className="absolute top-4 right-4 text-xs font-bold text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/30">
                  Most Popular
                </span>
              )}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${m.color} mb-5 shadow-lg`}>
                <m.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {m.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{m.description}</p>
              <ul className="space-y-2">
                {m.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

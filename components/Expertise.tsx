"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

const expertiseList = [
  {
    title: 'Full-Stack Web Development',
    description: 'Next.js App Router, React 18, Express.js, Prisma ORM, PostgreSQL. We ship fast, tested, and maintainable code.',
    icon: Code,
    color: 'from-blue-500 to-cyan-400',
    glow: 'shadow-blue-500/20',
  },
  {
    title: 'AI & Data Engineering',
    description: 'FastAPI, Python, ChromaDB vector stores, LangChain, custom RAG pipelines. From prototype to production.',
    icon: Database,
    color: 'from-violet-500 to-purple-400',
    glow: 'shadow-violet-500/20',
  },
  {
    title: 'System Architecture',
    description: 'Monorepo setups, CI/CD with GitHub Actions, Docker, and scalable cloud deployments on AWS and Vercel.',
    icon: Server,
    color: 'from-emerald-500 to-teal-400',
    glow: 'shadow-emerald-500/20',
  },
];

export default function Expertise() {
  return (
    <section className="py-24 px-6 bg-[#0d1220]" id="expertise">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">What we do</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Core Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseList.map((item, i) => (
            <motion.article
              key={item.title}
              className={`glass-card rounded-2xl p-8 shadow-xl ${item.glow} hover:shadow-2xl transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-5 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

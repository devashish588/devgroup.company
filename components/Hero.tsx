"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f1e] px-6 py-32">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Badge */}
      <motion.div
        className="mb-8 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Available for projects — Q1 2025
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center leading-[1.1] tracking-tight mb-6 max-w-5xl"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-white">Specialized Software</span>
        <br />
        <span className="gradient-text">Engineering & AI.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-slate-400 max-w-2xl text-center mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        DevGroup is a boutique engineering consultancy. We build production‑grade web platforms, RAG pipelines, and high‑concurrency cloud architectures.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href="#contact" className="btn-glow text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2">
          Start a Project <ArrowRight size={16} />
        </Link>
        <Link
          href="#work"
          className="flex items-center gap-2 glass-card text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
        >
          <Terminal size={16} />
          View Work
        </Link>
      </motion.div>

      {/* Mock terminal */}
      <motion.div
        className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {/* Terminal chrome */}
        <div className="bg-[#1a1f2e] px-4 py-3 flex items-center gap-2 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-4 text-xs text-slate-500 font-mono">devgroup — bash</span>
        </div>
        <div className="bg-[#0d1220] p-6 font-mono text-sm leading-7">
          <p>
            <span className="text-violet-400">devgroup</span>
            <span className="text-slate-500"> ~ </span>
            <span className="text-emerald-400">$ </span>
            <span className="text-slate-200">npx create-next-app@latest my-app --typescript --app</span>
          </p>
          <p className="text-slate-400">Creating a new Next.js app in <span className="text-blue-400">./my-app</span></p>
          <p className="text-slate-400">Installing dependencies...</p>
          <p className="text-emerald-400">✓ TypeScript configured</p>
          <p className="text-emerald-400">✓ Tailwind CSS added</p>
          <p className="text-emerald-400">✓ Ready to ship. 🚀</p>
          <p className="mt-2">
            <span className="text-violet-400">devgroup</span>
            <span className="text-slate-500"> ~ </span>
            <span className="text-emerald-400">$ </span>
            <span className="text-slate-300 animate-pulse">▌</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

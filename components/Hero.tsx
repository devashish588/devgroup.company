import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 bg-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Specialized Software Engineering & AI Integration.
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-2xl text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        DevGroup is a boutique engineering consultancy. We build production‑grade web platforms, Retrieval‑Augmented Generation (RAG) pipelines, and high‑concurrency cloud architectures.
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="bg-[#0047AB] text-white px-6 py-3 rounded-md hover:bg-[#003580] transition-colors"
        >
          Start a Project
        </Link>
        <Link
          href="#work"
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Code className="mr-2" />
          View Work
        </Link>
      </motion.div>
      {/* Mock terminal */}
      <motion.div
        className="mt-12 w-full max-w-3xl bg-gray-900 text-green-400 font-mono text-sm rounded-md overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="px-4 py-3 border-b border-gray-700 flex items-center">
          <span className="text-gray-400 mr-2">$</span>
          <span>npx create-next-app@latest my-app --use-npm --app</span>
        </div>
        <pre className="p-4 overflow-x-auto">
{`Creating a new Next.js app in ${"./my-app"}.
Installing dependencies...
✅ Ready!`}
        </pre>
      </motion.div>
    </section>
  );
}

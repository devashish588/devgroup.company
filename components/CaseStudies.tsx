import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise CMS Platform',
    description: 'Production‑grade monorepo CMS for high content throughput.',
    tech: 'Next.js, Express, Prisma',
    icon: Code,
  },
  {
    title: 'RAG Document Intelligence',
    description: 'Modular document retrieval system with high accuracy.',
    tech: 'FastAPI, ChromaDB, FastEmbed',
    icon: Database,
  },
  {
    title: 'High‑Concurrency Web App',
    description: 'Interactive platform with seamless offline/online sync.',
    tech: 'React, Node.js, PostgreSQL, IndexedDB',
    icon: Server,
  },
];

export default function CaseStudies() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Work
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <motion.article
            key={proj.title}
            className="border border-border rounded-xl p-6 bg-surface shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -4 }}
            whileTap={{ y: 2 }}
          >
            <proj.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-2">{proj.description}</p>
            <p className="text-sm text-gray-500 italic">Tech: {proj.tech}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

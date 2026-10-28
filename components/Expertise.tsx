import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

const expertiseList = [
  {
    title: 'Full-Stack Web Development',
    description: 'Next.js App Router, React 19, Express.js, Prisma ORM, PostgreSQL.',
    icon: Code,
  },
  {
    title: 'AI & Data Engineering',
    description: 'FastAPI, Python, ChromaDB vector stores, LangChain, custom RAG pipelines.',
    icon: Database,
  },
  {
    title: 'System Architecture',
    description: 'Monorepo setups, CI/CD (GitHub Actions), scalable cloud deployments.',
    icon: Server,
  },
];

export default function Expertise() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Core Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseList.map((item) => (
          <motion.article
            key={item.title}
            className="border border-border rounded-lg p-6 bg-surface shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -4 }}
            whileTap={{ y: 2 }}
          >
            <item.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

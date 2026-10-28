import { motion } from 'framer-motion';
import { Users, Settings, Search } from 'lucide-react';

const models = [
  {
    title: 'Staff Augmentation',
    description: 'Integrate senior engineers into your existing sprints for rapid capacity boost.',
    icon: Users,
  },
  {
    title: 'End‑to‑End Delivery',
    description: 'Own the full product lifecycle from system design to Vercel/AWS deployment.',
    icon: Settings,
  },
  {
    title: 'Technical Audits',
    description: 'Review code for security, performance bottlenecks, and architectural flaws.',
    icon: Search,
  },
];

export default function Engagement() {
  return (
    <section className="max-w-7xl mx-auto py-16" id="engagement-models">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        How We Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((m) => (
          <motion.article
            key={m.title}
            className="border border-border rounded-lg p-6 bg-surface shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -4 }}
            whileTap={{ y: 2 }}
          >
            <m.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{m.title}</h3>
            <p className="text-gray-600">{m.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

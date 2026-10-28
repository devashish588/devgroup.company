import { motion } from 'framer-motion';


const techStack = [
  { name: 'Next.js', src: '/api/placeholder/60/60?text=Next.js' },
  { name: 'TypeScript', src: '/api/placeholder/60/60?text=TS' },
  { name: 'Python', src: '/api/placeholder/60/60?text=Py' },
  { name: 'FastAPI', src: '/api/placeholder/60/60?text=FastAPI' },
  { name: 'PostgreSQL', src: '/api/placeholder/60/60?text=PG' },
  { name: 'Tailwind CSS', src: '/api/placeholder/60/60?text=Tailwind' },
  { name: 'Vercel', src: '/api/placeholder/60/60?text=Vercel' },
  { name: 'AWS', src: '/api/placeholder/60/60?text=AWS' },
];

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto py-12" id="tech-stack">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>
      <motion.div
        className="flex overflow-x-auto space-x-8 justify-center py-4"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img src={tech.src} alt={tech.name} className="w-12 h-12 object-contain" />
            <span className="mt-2 text-sm text-gray-700">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

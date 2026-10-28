import { motion } from 'framer-motion';
import { Mail, Phone, GitHub, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-16" id="contact">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let's discuss your system requirements.
      </motion.h2>
      <motion.form
        className="bg-surface shadow-md rounded-lg p-8 space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        {/* No actual submission handler; placeholder */}
        onSubmit={(e) => {
          e.preventDefault();
          // placeholder: could integrate with an API endpoint later
          alert('Form submitted (placeholder)');
        }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            required
            className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            required
            className="mt-1 block w-full rounded-md border-border bg-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          >
            <option value="">Select range</option>
            <option value="lt10k">&lt; $10k</option>
            <option value="10-50k">$10k – $50k</option>
            <option value="50-200k">$50k – $200k</option>
            <option value="gt200k">&gt; $200k</option>
          </select>
        </div>
        <div>
          <label htmlFor="scope" className="block text-sm font-medium text-gray-700 mb-1">
            Technical Scope
          </label>
          <textarea
            id="scope"
            name="scope"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#0047AB] text-white px-6 py-2 rounded-md hover:bg-[#003580] transition-colors"
          >
            Submit Brief
          </button>
        </div>
      </motion.form>
      <motion.div
        className="mt-8 flex justify-center space-x-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="mailto:devashish@devgroup.company" className="text-gray-600 hover:text-gray-900">
          <Mail size={24} />
        </a>
        <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
          <Phone size={24} />
        </a>
        <a href="https://github.com/devgroup" target="_blank" rel="noopener" className="text-gray-600 hover:text-gray-900">
          <GitHub size={24} />
        </a>
        <a href="https://linkedin.com/company/devgroup" target="_blank" rel="noopener" className="text-gray-600 hover:text-gray-900">
          <Linkedin size={24} />
        </a>
      </motion.div>
    </section>
  );
}

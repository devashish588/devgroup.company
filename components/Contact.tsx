"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-[#0d1220]" id="contact">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Let&apos;s Build Together
          </h2>
          <p className="text-slate-400 text-lg">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
        </motion.div>

        <motion.form
          className="glass-card rounded-2xl p-8 space-y-5 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! We will get back to you shortly.');
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Smith"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">Budget Range</label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full bg-[#0d1220] border border-white/10 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">Select range</option>
              <option value="lt10k">&lt; $10k</option>
              <option value="10-50k">$10k – $50k</option>
              <option value="50-200k">$50k – $200k</option>
              <option value="gt200k">&gt; $200k</option>
            </select>
          </div>

          <div>
            <label htmlFor="scope" className="block text-sm font-medium text-slate-300 mb-2">Project Scope</label>
            <textarea
              id="scope"
              name="scope"
              rows={4}
              required
              placeholder="Describe what you're building and what kind of help you need..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-glow w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Send Brief
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: Mail, href: 'mailto:devashish@devgroup.company', label: 'Email' },
            { icon: Phone, href: 'tel:+1234567890', label: 'Phone' },
            { icon: Github, href: 'https://github.com/devgroup', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/company/devgroup', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

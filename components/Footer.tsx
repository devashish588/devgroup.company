"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060a14] border-t border-white/10 py-14 px-6">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span
              className="text-2xl font-extrabold tracking-tight gradient-text"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              DevGroup
            </span>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Boutique software engineering &amp; AI consultancy.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/devgroup', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/company/devgroup', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:devashish@devgroup.company', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <hr className="section-divider my-8" />

        <p className="text-center text-xs text-slate-600">
          © {new Date().getFullYear()} DevGroup. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

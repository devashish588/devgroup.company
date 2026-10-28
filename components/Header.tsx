"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Engagement', href: '#engagement' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-lg border-b border-white/10"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight gradient-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            DevGroup
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-glow text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Book an Audit
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} className="text-slate-300" /> : <Menu size={22} className="text-slate-300" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.nav
          className="md:hidden border-t border-white/10 bg-[#0d1220]/95 backdrop-blur-xl"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-glow text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book an Audit
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

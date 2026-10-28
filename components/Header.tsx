import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Menu } from 'lucide-react';
import { useState } from 'react';

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
      className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-border"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          DevGroup
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 bg-[#0047AB] text-white px-4 py-2 rounded-md hover:bg-[#003580] transition-colors"
          >
            Book a Technical Audit
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-white bg-opacity-95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block w-full text-center bg-[#0047AB] text-white py-2 rounded-md hover:bg-[#003580] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book a Technical Audit
            </Link>
          </div>
        </nav>
      )}
    </motion.header>
  );
}

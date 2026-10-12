'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'East Africa Tours', href: '#tours' },
  { label: 'Visa Assistance', href: '#visa' },
  { label: 'Travel Guides', href: '#guides' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function TravelNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10, 22, 40, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56,189,248,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a href="/travel" whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3 cursor-pointer no-underline">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
            style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff' }}
          >
            ZT
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none tracking-wider">
              ZENAS TRAVEL
            </p>
            <p className="text-xs tracking-[0.18em] uppercase"
               style={{ color: '#38bdf8' }}>
              Agency
            </p>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-sky-400"
              style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block btn-sky px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Book Consultation
          </motion.a>
          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white rounded" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(10,22,40,0.97)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-base font-medium py-2 border-b border-white/10"
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-sky px-6 py-3 rounded-full text-sm font-semibold text-center mt-2"
                style={{ textDecoration: 'none' }}
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(5, 10, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
              style={{
                background: 'linear-gradient(135deg, #c8a96e, #e8c97e)',
                color: '#050a14',
              }}
            >
              ZG
            </div>
            <div>
              <p className="text-white font-bold text-base leading-none tracking-wide">
                ZENAS GROUP
              </p>
              <p className="text-xs tracking-[0.2em] uppercase"
                 style={{ color: '#c8a96e' }}>
                Limited
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/travel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide"
          >
            ✈ Explore Travel
          </motion.a>
          <motion.a
            href="/real-estate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide"
          >
            🏡 Real Estate
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-dark"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a
                href="/travel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white px-6 py-3 rounded-full text-sm font-medium text-center"
                onClick={() => setMenuOpen(false)}
              >
                ✈ Explore Travel
              </a>
              <a
                href="/real-estate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 rounded-full text-sm font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                🏡 Explore Real Estate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

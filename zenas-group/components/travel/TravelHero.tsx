'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/* Travel images from /public/travel/
   travel-1.jpg through travel-12.jpg */
const slides = [
  { src: '/travel/travel-1.jpg',  alt: 'East Africa travel experience' },
  { src: '/travel/travel-2.jpg',  alt: 'African landscape and adventure' },
  { src: '/travel/travel-3.jpg',  alt: 'Safari and wildlife exploration' },
  { src: '/travel/travel-4.jpg',  alt: 'Beautiful travel destination' },
  { src: '/travel/travel-5.jpg',  alt: 'Scenic travel view' },
  { src: '/travel/travel-6.jpg',  alt: 'Cinematic travel moments' },
];

export default function TravelHero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  /* Auto-advance every 5 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx: number) => {
    setPrev(current);
    setCurrent(idx);
  };

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: 'min(90vh, 900px)', minHeight: '560px' }}
    >
      {/* ── Slideshow Images ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic overlay ── */}
      <div className="absolute inset-0 cinematic-overlay-travel" />

      {/* ── Subtle grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-7"
        >
          <div
            className="px-5 py-2 rounded-full text-xs font-semibold tracking-[0.25em] uppercase"
            style={{
              background: 'rgba(56,189,248,0.15)',
              border: '1px solid rgba(56,189,248,0.4)',
              color: '#7dd3fc',
            }}
          >
            ✈ East Africa's Premier Travel Agency
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-black leading-tight mb-5"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
            color: '#ffffff',
          }}
        >
          Explore Africa
          <br />
          <span className="gradient-text-sky">With Confidence</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-lg font-light tracking-widest mb-10 uppercase"
          style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.22em' }}
        >
          Travel · Discover · Experience
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#destinations"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn-sky px-10 py-4 rounded-full text-base font-semibold tracking-wide"
            style={{ boxShadow: '0 0 35px rgba(56,189,248,0.4)', textDecoration: 'none', color: '#fff', display:'inline-block' }}
          >
            Start Your Journey →
          </motion.a>
          <motion.a
            href="#visa"
            whileHover={{ scale: 1.04 }}
            className="btn-outline-white px-8 py-4 rounded-full text-sm font-medium"
            style={{ textDecoration: 'none', color: '#fff', display:'inline-block' }}
          >
            Visa Assistance
          </motion.a>
        </motion.div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-400"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              background: i === current ? '#38bdf8' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
        <p className="text-xs tracking-[0.3em] uppercase rotate-90 origin-center mb-3"
           style={{ color: 'rgba(255,255,255,0.4)' }}>
          Scroll
        </p>
      </div>
    </section>
  );
}

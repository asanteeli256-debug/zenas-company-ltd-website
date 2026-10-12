'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/* Slide show using estate images as hero background.
   estate-17.mp4 plays as cinematic video.
   Images shown as fallback / alongside video */
const heroImages = [
  { src: '/estate/estate-1.jpeg', alt: 'Premium Airbnb property interior' },
  { src: '/estate/estate-2.jpeg', alt: 'Luxury living space' },
  { src: '/estate/estate-3.jpeg', alt: 'Modern apartment interior' },
];

export default function EstateHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  /* Fallback image slideshow if video not loaded */
  useEffect(() => {
    if (videoLoaded) return;
    const t = setInterval(() => setImgIndex((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(t);
  }, [videoLoaded]);

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: 'min(92vh, 950px)', minHeight: '580px' }}
    >
      {/* ── Cinematic Video (estate-17.mp4) ── */}
      <video
        ref={videoRef}
        src="/estate/estate-17.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: videoLoaded ? 0.55 : 0 }}
      />

      {/* ── Fallback Image Slideshow ── */}
      {!videoLoaded && (
        <AnimatePresence initial={false}>
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[imgIndex].src}
              alt={heroImages[imgIndex].alt}
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Cinematic Overlay ── */}
      <div className="absolute inset-0 cinematic-overlay-estate" />

      {/* ── Warm gradient vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(139,105,69,0.18) 0%, transparent 70%)',
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div
            className="px-5 py-2 rounded-full text-xs font-semibold tracking-[0.25em] uppercase"
            style={{
              background: 'rgba(200,169,110,0.15)',
              border: '1px solid rgba(200,169,110,0.4)',
              color: '#e8c97e',
            }}
          >
            🏡 Premium Airbnb &amp; Property
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-black leading-tight mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            color: '#ffffff',
          }}
        >
          Find Spaces That
          <br />
          <span className="gradient-text-gold">Feel Like Home</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-base font-light mb-10 max-w-lg mx-auto"
          style={{ color: 'rgba(255,255,255,0.72)', letterSpacing: '0.02em' }}
        >
          Premium Airbnb &amp; Property Experiences — curated for comfort,
          elegance, and that feeling of belonging.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn-estate px-10 py-4 rounded-full text-base font-semibold"
            style={{ boxShadow: '0 0 35px rgba(139,105,69,0.35)', textDecoration: 'none', color: '#fff', display: 'inline-block' }}
          >
            Explore Stays →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            className="btn-outline-white px-8 py-4 rounded-full text-sm font-medium"
            style={{ textDecoration: 'none', color: '#fff', display: 'inline-block' }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(200,169,110,0.8), transparent)' }}
        />
      </motion.div>
    </section>
  );
}

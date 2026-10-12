'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ── Floating Orb component ── */
function FloatingOrb({
  size, color, x, y, delay,
}: {
  size: number; color: string; x: string; y: string; delay: number;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none animate-orb"
      style={{
        width: size, height: size,
        background: color,
        left: x, top: y,
        filter: 'blur(80px)',
        animationDelay: `${delay}s`,
        opacity: 0.35,
      }}
    />
  );
}

/* ── Particle Dot ── */
function Particle({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-white pointer-events-none"
      style={{ left: x, top: y, opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0], y: [0, -30, -60] }}
      transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: 2 }}
    />
  );
}

const PARTICLES = [
  { x: '10%', y: '20%', delay: 0 },   { x: '25%', y: '55%', delay: 0.4 },
  { x: '40%', y: '80%', delay: 0.8 }, { x: '55%', y: '15%', delay: 1.2 },
  { x: '70%', y: '40%', delay: 1.6 }, { x: '85%', y: '70%', delay: 2.0 },
  { x: '15%', y: '45%', delay: 2.4 }, { x: '30%', y: '75%', delay: 2.8 },
  { x: '50%', y: '30%', delay: 3.2 }, { x: '65%', y: '85%', delay: 3.6 },
  { x: '80%', y: '25%', delay: 4.0 }, { x: '5%',  y: '60%', delay: 4.4 },
  { x: '45%', y: '50%', delay: 4.8 }, { x: '90%', y: '10%', delay: 5.2 },
  { x: '20%', y: '90%', delay: 5.6 }, { x: '75%', y: '55%', delay: 6.0 },
  { x: '35%', y: '35%', delay: 6.4 }, { x: '60%', y: '65%', delay: 6.8 },
  { x: '8%',  y: '85%', delay: 7.2 }, { x: '95%', y: '40%', delay: 7.6 },
];

export default function LandingHero() {
  const [particles, setParticles] = useState<{ x: string; y: string; delay: number }[]>([]);

  useEffect(() => {
    setParticles(PARTICLES);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{ background: '#050a14' }}
    >
      {/* ── Background Hero Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-bg.png"
          alt="Zenas Group Limited — Premium brand background"
          fill
          priority
          quality={95}
          className="object-cover object-center"
          style={{ opacity: 0.55 }}
        />
      </div>

      {/* ── Cinematic Overlay ── */}
      <div className="absolute inset-0 cinematic-overlay" />

      {/* ── Floating Gradient Orbs ── */}
      <FloatingOrb size={500} color="rgba(200,169,110,0.25)" x="-10%" y="10%"  delay={0} />
      <FloatingOrb size={400} color="rgba(56,189,248,0.15)"  x="70%"  y="50%" delay={2} />
      <FloatingOrb size={350} color="rgba(200,169,110,0.2)"  x="50%"  y="-5%" delay={4} />

      {/* ── Floating Particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} x={p.x} y={p.y} delay={p.delay} />
      ))}

      {/* ── Cinematic Scan Lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            ✦ Established in Uganda ✦
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-black leading-none tracking-tight mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: '#ffffff',
          }}
        >
          <span className="block">ZENAS</span>
          <span
            className="block gradient-text-gold"
            style={{ WebkitTextStroke: '0px transparent' }}
          >
            GROUP
          </span>
          <span className="block text-white">LIMITED</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-center font-light tracking-wide mb-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}
        >
          Building Experiences Across
          <br />
          <span style={{ color: '#e8c97e' }}>Travel</span>
          {' '}
          &amp;
          {' '}
          <span style={{ color: '#e8c97e' }}>Real Estate</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href="/travel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn-sky px-10 py-4 rounded-full text-base font-semibold tracking-wide flex items-center gap-2 w-full sm:w-auto justify-center"
            style={{ boxShadow: '0 0 30px rgba(56,189,248,0.3)' }}
          >
            ✈ Explore Travel
          </motion.a>
          <motion.a
            href="/real-estate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold px-10 py-4 rounded-full text-base font-semibold tracking-wide flex items-center gap-2 w-full sm:w-auto justify-center"
            style={{ boxShadow: '0 0 30px rgba(200,169,110,0.3)' }}
          >
            🏡 Real Estate
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs tracking-[0.3em] uppercase"
             style={{ color: 'rgba(255,255,255,0.4)' }}>
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 rounded"
            style={{ background: 'linear-gradient(to bottom, rgba(200,169,110,0.8), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

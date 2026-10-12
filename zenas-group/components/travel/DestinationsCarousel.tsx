'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Destination data ── */
const destinations = [
  {
    id: 1,
    name: 'Uganda',
    tagline: 'The Pearl of Africa',
    img: '/travel/travel-7.jpg',
    flag: '🇺🇬',
    color: '#f97316',
  },
  {
    id: 2,
    name: 'Kenya',
    tagline: 'Savanna & Safari Dreams',
    img: '/travel/travel-8.jpg',
    flag: '🇰🇪',
    color: '#22c55e',
  },
  {
    id: 3,
    name: 'Tanzania',
    tagline: 'Serengeti & Zanzibar',
    img: '/travel/travel-9.jpg',
    flag: '🇹🇿',
    color: '#38bdf8',
  },
  {
    id: 4,
    name: 'Rwanda',
    tagline: 'Land of a Thousand Hills',
    img: '/travel/travel-10.jpg',
    flag: '🇷🇼',
    color: '#a78bfa',
  },
  {
    id: 5,
    name: 'South Africa',
    tagline: 'At the Tip of the Continent',
    img: '/travel/travel-11.jpg',
    flag: '🇿🇦',
    color: '#fbbf24',
  },
  {
    id: 6,
    name: 'Dubai',
    tagline: 'City of the Future',
    img: '/travel/travel-12.jpg',
    flag: '🇦🇪',
    color: '#c8a96e',
  },
];

export default function DestinationsCarousel() {
  const [active, setActive] = useState(2); // center card

  const getCardStyle = (index: number) => {
    const diff = index - active;
    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      // Active center card
      return {
        zIndex: 10,
        transform: 'translateX(0) scale(1) translateZ(0)',
        opacity: 1,
        filter: 'brightness(1)',
      };
    } else if (absDiff === 1) {
      // Adjacent cards
      const dir = diff > 0 ? 1 : -1;
      return {
        zIndex: 5,
        transform: `translateX(${dir * 42}%) scale(0.82) translateZ(-80px)`,
        opacity: 0.75,
        filter: 'brightness(0.65)',
      };
    } else if (absDiff === 2) {
      // Far cards
      const dir = diff > 0 ? 1 : -1;
      return {
        zIndex: 2,
        transform: `translateX(${dir * 76}%) scale(0.65) translateZ(-160px)`,
        opacity: 0.45,
        filter: 'brightness(0.45)',
      };
    } else {
      return { zIndex: 1, opacity: 0, transform: 'scale(0.5)', filter: 'brightness(0.2)' };
    }
  };

  return (
    <section
      id="destinations"
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040e1f 0%, #071428 60%, #0a1e3a 100%)' }}
    >
      {/* Section Header */}
      <div className="text-center px-6 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: '#38bdf8' }}
        >
          ✦ Where Would You Like to Go?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-black leading-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#fff',
          }}
        >
          Our Top{' '}
          <span className="gradient-text-sky">Destinations</span>
        </motion.h2>
      </div>

      {/* ── 3D Card Carousel ── */}
      <div
        className="relative mx-auto"
        style={{
          height: '480px',
          maxWidth: '1000px',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {destinations.map((dest, index) => {
          const style = getCardStyle(index);
          const isActive = index === active;

          return (
            <motion.div
              key={dest.id}
              animate={style}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-0 left-1/2 cursor-pointer"
              style={{
                width: 'min(320px, 80vw)',
                height: '440px',
                marginLeft: 'calc(min(320px, 80vw) / -2)',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
              onClick={() => setActive(index)}
            >
              {/* Card Image */}
              <Image
                src={dest.img}
                alt={`${dest.name} destination`}
                fill
                quality={85}
                className="object-cover object-center"
              />

              {/* Card overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: isActive
                    ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
                }}
              />

              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-3xl mb-2">{dest.flag}</p>
                <h3
                  className="font-black text-white text-2xl mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {dest.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {dest.tagline}
                </p>

                {isActive && (
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${dest.color}, ${dest.color}99)`,
                      textDecoration: 'none',
                    }}
                  >
                    Explore →
                  </motion.a>
                )}
              </div>

              {/* Active glow ring */}
              {isActive && (
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow: `0 0 0 2px ${dest.color}88, 0 25px 80px ${dest.color}44` }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-10">
        {destinations.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Select ${destinations[i].name}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 28 : 10,
              height: 10,
              background: i === active ? '#38bdf8' : 'rgba(255,255,255,0.25)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Prev / Next buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
          style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', color: '#38bdf8', cursor: 'pointer' }}
        >
          ←
        </button>
        <button
          onClick={() => setActive((a) => Math.min(destinations.length - 1, a + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
          style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', color: '#38bdf8', cursor: 'pointer' }}
        >
          →
        </button>
      </div>
    </section>
  );
}

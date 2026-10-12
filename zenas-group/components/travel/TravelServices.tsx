'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* Travel images 1–6 used for tour showcase */
const tours = [
  {
    title: 'Gorilla Trekking',
    location: 'Bwindi, Uganda',
    duration: '3 Days',
    img: '/travel/travel-1.jpg',
    price: 'From $650',
  },
  {
    title: 'Masai Mara Safari',
    location: 'Narok, Kenya',
    duration: '5 Days',
    img: '/travel/travel-2.jpg',
    price: 'From $890',
  },
  {
    title: 'Zanzibar Beach Escape',
    location: 'Zanzibar, Tanzania',
    duration: '7 Days',
    img: '/travel/travel-3.jpg',
    price: 'From $1,100',
  },
  {
    title: 'Volcanoes National Park',
    location: 'Musanze, Rwanda',
    duration: '4 Days',
    img: '/travel/travel-4.jpg',
    price: 'From $780',
  },
  {
    title: 'Cape Town Explorer',
    location: 'Western Cape, SA',
    duration: '6 Days',
    img: '/travel/travel-5.jpg',
    price: 'From $1,250',
  },
  {
    title: 'Dubai Luxury Tour',
    location: 'Dubai, UAE',
    duration: '5 Days',
    img: '/travel/travel-6.jpg',
    price: 'From $1,500',
  },
];

const stats = [
  { value: '500+', label: 'Happy Travellers' },
  { value: '15+', label: 'Destinations' },
  { value: '7+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function TravelServices() {
  return (
    <>
      {/* ── East Africa Tours Section ── */}
      <section
        id="tours"
        className="section-padding"
        style={{ background: 'linear-gradient(180deg, #071428 0%, #040e1f 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: '#f97316' }}
            >
              ✦ Curated Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-black leading-tight"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#fff',
              }}
            >
              East Africa{' '}
              <span className="gradient-text-sky">Tours</span>
            </motion.h2>
          </div>

          {/* Tour Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour, i) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-2xl overflow-hidden cursor-default group"
                style={{ height: '360px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                {/* Image */}
                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  quality={85}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                  }}
                />

                {/* Duration Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(56,189,248,0.25)', border: '1px solid rgba(56,189,248,0.5)', color: '#7dd3fc' }}
                >
                  {tour.duration}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-medium mb-1" style={{ color: '#7dd3fc' }}>
                    📍 {tour.location}
                  </p>
                  <h3
                    className="font-bold text-white text-lg mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {tour.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: '#f97316' }}
                    >
                      {tour.price}
                    </span>
                    <a
                      href="#contact"
                      className="text-xs px-4 py-1.5 rounded-full text-white font-medium"
                      style={{ background: 'rgba(56,189,248,0.25)', border: '1px solid rgba(56,189,248,0.4)', textDecoration: 'none' }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #0f2d5e, #0a1e3a)', borderTop: '1px solid rgba(56,189,248,0.15)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}
        className="py-16"
      >
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="font-black mb-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#38bdf8',
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About / Contact CTA ── */}
      <section
        id="about"
        className="section-padding"
        style={{ background: '#040e1f' }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
            style={{ color: '#38bdf8' }}
          >
            ✦ Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black text-white leading-tight mb-6"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Your Trusted Travel Partner
            <br />
            <span className="gradient-text-sky">Across Africa &amp; Beyond</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed mb-10"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto 2.5rem' }}
          >
            Zenas Travel Agency is a division of Zenas Group Limited, built on a passion for African
            exploration. We connect travellers with authentic, safe, and unforgettable experiences — from
            the gorillas of Uganda to the beaches of Zanzibar and the skylines of Dubai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#contact"
              className="btn-sky inline-block px-10 py-4 rounded-full text-base font-semibold"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              Start Planning Your Trip →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

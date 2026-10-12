'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* 12 estate images used for the masonry gallery
   estate-4.jpeg through estate-15.jpeg */
const galleryItems = [
  { src: '/estate/estate-4.jpeg',  alt: 'Luxury living room',     location: 'Kampala, Uganda', size: 'tall' },
  { src: '/estate/estate-5.jpeg',  alt: 'Modern bedroom suite',   location: 'Kampala, Uganda', size: 'normal' },
  { src: '/estate/estate-6.jpeg',  alt: 'Premium kitchen',        location: 'Entebbe, Uganda', size: 'normal' },
  { src: '/estate/estate-7.jpeg',  alt: 'Cozy apartment studio',  location: 'Kampala, Uganda', size: 'tall' },
  { src: '/estate/estate-8.jpeg',  alt: 'Airbnb lounge area',     location: 'Wakiso, Uganda',  size: 'normal' },
  { src: '/estate/estate-9.jpeg',  alt: 'Rooftop terrace',        location: 'Kampala, Uganda', size: 'normal' },
  { src: '/estate/estate-10.jpeg', alt: 'Bright master bedroom',  location: 'Entebbe, Uganda', size: 'tall' },
  { src: '/estate/estate-11.jpeg', alt: 'Pool-view apartment',    location: 'Kampala, Uganda', size: 'normal' },
  { src: '/estate/estate-12.jpeg', alt: 'Elegant dining space',   location: 'Kampala, Uganda', size: 'normal' },
];

export default function AirbnbGallery() {
  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #1a1410 0%, #121008 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: '#c8a96e' }}
          >
            ✦ Our Spaces
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#fff',
            }}
          >
            Airbnb{' '}
            <span className="gradient-text-warm">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm max-w-md mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Carefully selected properties offering comfort, style, and a home-away-from-home experience.
          </motion.p>
        </div>

        {/* ── Masonry Gallery Grid ── */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          style={{ columnGap: '1rem' }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative group overflow-hidden rounded-2xl mb-4 cursor-pointer break-inside-avoid"
              style={{
                height: item.size === 'tall' ? '400px' : '280px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Property Image — accessible via Next/Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={85}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5"
                style={{
                  background: 'linear-gradient(to top, rgba(26,20,14,0.95) 0%, rgba(26,20,14,0.2) 60%, transparent 100%)',
                }}
              >
                <div
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400"
                >
                  <p className="text-xs font-medium mb-1" style={{ color: '#c8a96e' }}>
                    📍 {item.location}
                  </p>
                  <h3 className="font-bold text-white text-base mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.alt}
                  </h3>
                  <a
                    href="#contact"
                    className="inline-block text-xs px-4 py-2 rounded-full font-semibold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #8b6945, #c8a96e)',
                      textDecoration: 'none',
                    }}
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-estate inline-block px-10 py-4 rounded-full text-base font-semibold"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Browse All Properties →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

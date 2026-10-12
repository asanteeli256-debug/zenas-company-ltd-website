'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* Property listings using estate images 13–16 */
const properties = [
  {
    img: '/estate/estate-13.jpeg',
    title: 'The Pearl Apartment',
    location: 'Kololo, Kampala',
    type: 'Airbnb · 2 Bedroom',
    price: '$85 / night',
    rating: '4.9',
    reviews: '42',
    features: ['WiFi', 'Pool', 'Parking', 'AC'],
  },
  {
    img: '/estate/estate-14.jpeg',
    title: 'Lakeside Studio',
    location: 'Entebbe, Uganda',
    type: 'Airbnb · Studio',
    price: '$55 / night',
    rating: '4.8',
    reviews: '28',
    features: ['WiFi', 'Lake View', 'Kitchen', 'AC'],
  },
  {
    img: '/estate/estate-15.jpeg',
    title: 'Executive Suite Kampala',
    location: 'Nakasero, Kampala',
    type: 'Airbnb · 3 Bedroom',
    price: '$120 / night',
    rating: '5.0',
    reviews: '17',
    features: ['WiFi', 'Gym', 'Rooftop', 'Security'],
  },
  {
    img: '/estate/estate-16.jpeg',
    title: 'Garden Villa Retreat',
    location: 'Muyenga, Kampala',
    type: 'Long-term · 4 Bedroom',
    price: 'Contact for pricing',
    rating: '4.7',
    reviews: '9',
    features: ['Garden', 'Parking', 'Security', 'WiFi'],
  },
];

export default function PropertyListings() {
  return (
    <section
      id="properties"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #121008 0%, #0e0c08 100%)' }}
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
            ✦ Featured Properties
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
            Premium{' '}
            <span className="gradient-text-warm">Stays &amp; Properties</span>
          </motion.h2>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden group cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(200,169,110,0.1)',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={prop.img}
                  alt={prop.title}
                  fill
                  quality={85}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Price badge */}
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(26,20,14,0.85)', color: '#c8a96e', border: '1px solid rgba(200,169,110,0.3)' }}
                >
                  {prop.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-xs" style={{ color: '#f59e0b' }}>★★★★★</span>
                  <span className="text-xs font-semibold text-white ml-1">{prop.rating}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>({prop.reviews})</span>
                </div>

                <h3
                  className="font-bold text-white text-base mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {prop.title}
                </h3>
                <p className="text-xs mb-1" style={{ color: '#c8a96e' }}>📍 {prop.location}</p>
                <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{prop.type}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {prop.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(200,169,110,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(200,169,110,0.15)' }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #8b6945, #c8a96e)', textDecoration: 'none' }}
                >
                  View Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

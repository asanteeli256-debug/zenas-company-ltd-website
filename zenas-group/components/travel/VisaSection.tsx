'use client';

import { motion } from 'framer-motion';

const visaServices = [
  {
    icon: '🛂',
    title: 'Visa Assistance',
    desc: 'We guide you through every step of the visa application process for East African and international destinations.',
    color: '#38bdf8',
  },
  {
    icon: '📘',
    title: 'Passport Guidance',
    desc: 'New passport applications, renewals, and emergency document support handled with care and speed.',
    color: '#06b6d4',
  },
  {
    icon: '📋',
    title: 'Documentation Support',
    desc: 'We help you prepare and verify all travel documents — invitation letters, hotel bookings, itineraries, and more.',
    color: '#0284c7',
  },
  {
    icon: '🗺️',
    title: 'Travel Consultation',
    desc: 'Personalized travel planning sessions to build your perfect itinerary, budget, and travel experience.',
    color: '#7dd3fc',
  },
  {
    icon: '✈️',
    title: 'Flight Guidance',
    desc: 'We assist in finding the best flight routes and connections for your travel budget and schedule.',
    color: '#38bdf8',
  },
  {
    icon: '🏨',
    title: 'Hotel Booking',
    desc: 'Curated accommodation recommendations from budget-friendly stays to luxury retreats across Africa.',
    color: '#0ea5e9',
  },
];

export default function VisaSection() {
  return (
    <section
      id="visa"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0a1e3a 0%, #071428 100%)' }}
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
            style={{ color: '#38bdf8' }}
          >
            ✦ Full-Service Support
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-black leading-tight mb-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#fff',
            }}
          >
            Visa &amp;{' '}
            <span className="gradient-text-sky">Travel Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl mx-auto text-base"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            From your first inquiry to stepping off the plane — we handle every detail so you can focus on the adventure.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-7 cursor-default group"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}18 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${service.color}18`, border: `1px solid ${service.color}33` }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-white text-lg mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {service.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="btn-sky inline-block px-10 py-4 rounded-full text-base font-semibold"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Get Your Free Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

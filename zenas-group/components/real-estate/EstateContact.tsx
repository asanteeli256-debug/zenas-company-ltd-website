'use client';

import { motion } from 'framer-motion';

export default function EstateContact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0e0c08 0%, #080604 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
          style={{ color: '#c8a96e' }}
        >
          ✦ Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-black text-white leading-tight mb-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Book Your Stay or
          <br />
          <span className="gradient-text-warm">Inquire About Properties</span>
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-8 md:p-10 mt-10 text-left"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,169,110,0.12)' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,169,110,0.15)',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,110,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(200,169,110,0.15)')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Phone / Email
              </label>
              <input
                type="text"
                placeholder="+256 or email address"
                className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(200,169,110,0.15)',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,110,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(200,169,110,0.15)')}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
              I am interested in
            </label>
            <select
              className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(200,169,110,0.15)',
                fontFamily: 'inherit',
              }}
            >
              <option value="">Select an option...</option>
              <option>Airbnb / Short Stay Booking</option>
              <option>Long-Term Property Rental</option>
              <option>Property Purchase</option>
              <option>Land Investment</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div className="mb-7">
            <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us your requirements, preferred dates, budget..."
              className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none resize-none"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(200,169,110,0.15)',
                fontFamily: 'inherit',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(200,169,110,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(200,169,110,0.15)')}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full btn-estate py-4 rounded-xl text-base font-semibold"
            style={{ boxShadow: '0 0 30px rgba(139,105,69,0.3)', color: '#fff' }}
          >
            Send Inquiry 🏡
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        >
          {[
            { icon: '📞', label: 'Phone', value: '+256 700 000 000' },
            { icon: '📧', label: 'Email', value: 'estate@zenasgroup.com' },
            { icon: '📍', label: 'Location', value: 'Kampala, Uganda' },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,169,110,0.1)' }}
            >
              <p className="text-2xl mb-2">{c.icon}</p>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#c8a96e' }}>
                {c.label}
              </p>
              <p className="text-sm text-white">{c.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

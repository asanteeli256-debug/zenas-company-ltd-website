'use client';

import { motion } from 'framer-motion';

export default function TravelContact() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #040e1f 0%, #020810 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
          style={{ color: '#38bdf8' }}
        >
          ✦ Get In Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          Ready to Explore?
          <br />
          <span className="gradient-text-sky">Let's Plan Your Journey</span>
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-8 md:p-10 mt-8 text-left"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.15)' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(56,189,248,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(56,189,248,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Destination of Interest
            </label>
            <select
              className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'inherit',
              }}
            >
              <option value="">Select a destination...</option>
              <option>Uganda</option>
              <option>Kenya</option>
              <option>Tanzania</option>
              <option>Rwanda</option>
              <option>South Africa</option>
              <option>Dubai</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-7">
            <label className="block text-sm font-medium mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your travel plans, dates, group size..."
              className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none resize-none transition-all"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(56,189,248,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full btn-sky py-4 rounded-xl text-base font-semibold"
            style={{ boxShadow: '0 0 30px rgba(56,189,248,0.3)', color: '#fff' }}
          >
            Send Message ✈
          </motion.button>
        </motion.form>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center"
        >
          {[
            { icon: '📞', label: 'Phone', value: '+256 700 000 000' },
            { icon: '📧', label: 'Email', value: 'travel@zenasgroup.com' },
            { icon: '📍', label: 'Location', value: 'Kampala, Uganda' },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-2xl p-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.1)' }}
            >
              <p className="text-2xl mb-2">{c.icon}</p>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#38bdf8' }}>
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

'use client';

import { motion } from 'framer-motion';

export default function InvestmentSection() {
  const features = [
    { icon: '🏘️', title: 'Land Opportunities',     desc: 'We help you find verified land in prime locations across Uganda.' },
    { icon: '🏗️', title: 'Development Projects',   desc: 'Connect with trusted construction and development partners.' },
    { icon: '📈', title: 'Investment Advisory',    desc: 'Expert guidance on real estate investment strategies and returns.' },
    { icon: '🤝', title: 'Trusted Partners',       desc: 'We only work with verified, reputable property sellers and agents.' },
  ];

  return (
    <section
      id="investment"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1208 0%, #140f06 50%, #0e0c08 100%)',
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(200,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
              style={{ color: '#c8a96e' }}
            >
              ✦ Property Investment
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black text-white leading-tight mb-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              }}
            >
              Interested in{' '}
              <span className="gradient-text-warm">Property Investment?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px' }}
            >
              We also assist clients in finding trusted property and land opportunities. Whether
              you&apos;re looking to invest, build, or develop — our team connects you with verified
              real estate opportunities across Uganda and East Africa.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="btn-estate inline-block px-10 py-4 rounded-full text-base font-semibold"
              style={{ textDecoration: 'none', color: '#fff', boxShadow: '0 0 30px rgba(139,105,69,0.3)' }}
            >
              Talk to an Advisor →
            </motion.a>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-6 group"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(200,169,110,0.1)',
                  transition: 'all 0.35s ease',
                }}
              >
                <span className="text-3xl mb-4 block">{feat.icon}</span>
                <h3
                  className="font-bold text-white text-base mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

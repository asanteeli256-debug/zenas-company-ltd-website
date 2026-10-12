export default function TravelFooter() {
  return (
    <footer
      style={{
        background: '#020810',
        borderTop: '1px solid rgba(56,189,248,0.1)',
      }}
      className="py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)' }}
              >
                ZT
              </div>
              <div>
                <p className="text-white font-bold text-sm">ZENAS TRAVEL</p>
                <p className="text-xs tracking-widest" style={{ color: '#38bdf8' }}>Agency</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Your trusted partner for East African travel, visa assistance, and curated tour experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Destinations', 'East Africa Tours', 'Visa Assistance', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm hover:text-sky-400 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>📞 +256 700 000 000</li>
              <li>📧 travel@zenasgroup.com</li>
              <li>📍 Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Zenas Travel Agency · A division of Zenas Group Limited
          </p>
          <a
            href="/"
            className="text-xs transition-colors hover:text-sky-400"
            style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}
          >
            ← Back to Zenas Group
          </a>
        </div>
      </div>
    </footer>
  );
}

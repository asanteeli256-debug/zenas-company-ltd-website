'use client';

export default function EstateFooter() {
  return (
    <footer
      style={{ background: '#060402', borderTop: '1px solid rgba(200,169,110,0.1)' }}
      className="py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: 'linear-gradient(135deg, #8b6945, #c8a96e)' }}
              >
                ZR
              </div>
              <div>
                <p className="text-white font-bold text-sm">ZENAS REAL ESTATE</p>
                <p className="text-xs tracking-widest" style={{ color: '#c8a96e' }}>Premium Properties</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Your trusted partner for premium Airbnb stays, property rentals, and real estate investment in Uganda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Stays', 'Properties', 'Airbnb Gallery', 'Investment', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#c8a96e')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
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
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <li>📞 +256 700 000 000</li>
              <li>📧 estate@zenasgroup.com</li>
              <li>📍 Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} Zenas Real Estate · A division of Zenas Group Limited
          </p>
          <a
            href="/"
            className="text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#c8a96e')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.28)')}
          >
            ← Back to Zenas Group
          </a>
        </div>
      </div>
    </footer>
  );
}

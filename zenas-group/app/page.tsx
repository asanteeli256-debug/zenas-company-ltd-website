/* ====================================================
   LANDING PAGE — ZENAS GROUP LIMITED
   Route: /
   ==================================================== */
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingHero from '@/components/landing/LandingHero';

export default function LandingPage() {
  return (
    <main className="relative">
      {/* Glass Navbar */}
      <LandingNavbar />

      {/* Fullscreen Cinematic Hero */}
      <LandingHero />

      {/* ── Brief Brand Footer ── */}
      <footer
        className="py-8 px-6 text-center"
        style={{
          background: '#020810',
          borderTop: '1px solid rgba(200,169,110,0.1)',
        }}
      >
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Zenas Group Limited · All Rights Reserved
        </p>
        <div className="flex items-center justify-center gap-8 mt-4">
          <a
            href="/travel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
          >
            Zenas Travel Agency
          </a>
          <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
          <a
            href="/real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
          >
            Zenas Real Estate
          </a>
        </div>
      </footer>
    </main>
  );
}

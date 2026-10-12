import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

/* ── Load fonts via next/font (optimized, no FOUT) ── */
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zenas Group Limited | Building Experiences Across Travel & Real Estate',
  description:
    'Zenas Group Limited is a premier brand delivering world-class travel experiences and luxury real estate across East Africa and beyond.',
  keywords: 'Zenas Group, Zenas Travel, Zenas Real Estate, East Africa Tours, Airbnb Uganda, Property Investment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

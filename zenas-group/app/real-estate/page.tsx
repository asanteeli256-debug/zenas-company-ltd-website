/* ====================================================
   ZENAS REAL ESTATE PAGE
   Route: /real-estate
   ==================================================== */
import type { Metadata } from 'next';
import EstateNavbar from '@/components/real-estate/EstateNavbar';
import EstateHero from '@/components/real-estate/EstateHero';
import AirbnbGallery from '@/components/real-estate/AirbnbGallery';
import PropertyListings from '@/components/real-estate/PropertyListings';
import InvestmentSection from '@/components/real-estate/InvestmentSection';
import EstateContact from '@/components/real-estate/EstateContact';
import EstateFooter from '@/components/real-estate/EstateFooter';

export const metadata: Metadata = {
  title: 'Zenas Real Estate | Premium Airbnb & Property Experiences',
  description:
    'Discover premium Airbnb stays and trusted property investment opportunities in Uganda through Zenas Real Estate — a division of Zenas Group Limited.',
  keywords: 'Zenas Real Estate, Airbnb Uganda, Kampala Property, Property Investment Uganda, Luxury Stays',
};

export default function RealEstatePage() {
  return (
    <main style={{ background: '#0e0c08', minHeight: '100vh' }}>
      {/* Navigation */}
      <EstateNavbar />

      {/* Hero — Cinematic Video + Image Fallback */}
      <EstateHero />

      {/* Airbnb Gallery — Masonry */}
      <AirbnbGallery />

      {/* Property Listings */}
      <PropertyListings />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Contact Form */}
      <EstateContact />

      {/* Footer */}
      <EstateFooter />
    </main>
  );
}

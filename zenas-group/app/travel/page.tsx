/* ====================================================
   ZENAS TRAVEL AGENCY PAGE
   Route: /travel
   ==================================================== */
import type { Metadata } from 'next';
import TravelNavbar from '@/components/travel/TravelNavbar';
import TravelHero from '@/components/travel/TravelHero';
import DestinationsCarousel from '@/components/travel/DestinationsCarousel';
import VisaSection from '@/components/travel/VisaSection';
import TravelServices from '@/components/travel/TravelServices';
import TravelContact from '@/components/travel/TravelContact';
import TravelFooter from '@/components/travel/TravelFooter';

export const metadata: Metadata = {
  title: 'Zenas Travel Agency | Explore Africa With Confidence',
  description:
    'Zenas Travel Agency offers curated East Africa tours, visa assistance, flight guidance, and travel consultation for unforgettable journeys.',
  keywords: 'Zenas Travel, East Africa Tours, Uganda Travel, Kenya Safari, Tanzania, Rwanda, Dubai, Visa Assistance',
};

export default function TravelPage() {
  return (
    <main style={{ background: '#040e1f', minHeight: '100vh' }}>
      {/* Navigation */}
      <TravelNavbar />

      {/* Hero — Cinematic Image Slideshow */}
      <TravelHero />

      {/* Destinations — Stacked 3D Carousel */}
      <DestinationsCarousel />

      {/* Visa & Travel Services */}
      <VisaSection />

      {/* Tour Cards + Stats + About */}
      <TravelServices />

      {/* Contact Form */}
      <TravelContact />

      {/* Footer */}
      <TravelFooter />
    </main>
  );
}

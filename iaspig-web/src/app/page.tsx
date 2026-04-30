import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BottomNav from '@/components/layout/BottomNav';
import HeroSection from '@/features/landing/HeroSection';
import StatsSection from '@/features/landing/StatsSection';
import ProgramSection from '@/features/landing/ProgramSection';
import MapSection from '@/features/landing/MapSection';
import EventSection from '@/features/landing/EventSection';
import JobSection from '@/features/landing/JobSection';
import TestimonialSection from '@/features/landing/TestimonialSection';
import CTASection from '@/features/landing/CTASection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProgramSection />
        <MapSection />
        <EventSection />
        <JobSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactModal from '../components/ContactModal';

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div
      className="relative"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <HeroSection onContactOpen={() => setContactOpen(true)} />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

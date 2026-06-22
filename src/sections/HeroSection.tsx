import Magnet from '../components/Magnet';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

interface HeroSectionProps {
  onContactOpen: () => void;
}

export default function HeroSection({ onContactOpen }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) =>
            link === 'Contact' ? (
              <button
                key={link}
                onClick={onContactOpen}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            ) : (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {link}
              </a>
            )
          )}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40} as="h1">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m Shivi
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait - centered absolutely */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="/shivi-portrait.png"
            alt="Shivi portrait"
            className="w-full h-auto object-contain select-none"
            style={{ willChange: 'transform' }}
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        {/* Left text */}
        <FadeIn delay={0.35} y={20} className="max-w-[240px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[420px]">
          <p
            className="text-[#D7E2EA] font-light tracking-wide leading-relaxed"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Product Manager building AI-powered, scalable products that solve real user problems and
            drive measurable business impact — from 0→1 launches to growth-stage optimization using
            data, experimentation, and rapid execution.
          </p>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactOpen} />
        </FadeIn>
      </div>
    </section>
  );
}

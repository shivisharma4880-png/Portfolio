import { ReactNode } from 'react';
import FadeIn from '../FadeIn';

interface CaseStudySectionProps {
  id: string;
  title: string;
  variant?: 'dark' | 'light';
  className?: string;
  children: ReactNode;
}

export default function CaseStudySection({
  id,
  title,
  variant = 'dark',
  className = '',
  children,
}: CaseStudySectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      id={id}
      className={`rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28 ${
        isDark ? 'bg-[#0C0C0C]' : 'bg-white'
      } ${className}`}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className={`font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 md:mb-20 ${
            isDark ? 'hero-heading' : 'text-[#0C0C0C]'
          }`}
          style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
        >
          {title}
        </h2>
      </FadeIn>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

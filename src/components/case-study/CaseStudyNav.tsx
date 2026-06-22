import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';

export interface NavSection {
  id: string;
  label: string;
}

interface CaseStudyNavProps {
  sections: NavSection[];
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  return (
    <FadeIn delay={0} y={-20}>
      <nav className="sticky top-0 z-50 flex flex-wrap justify-between items-center gap-4 px-5 sm:px-8 md:px-10 py-5 md:py-6 bg-[#0C0C0C]/95 backdrop-blur-sm border-b border-[#D7E2EA]/10">
        <Link
          to="/"
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg transition-opacity duration-200 hover:opacity-70 no-underline"
        >
          Shivi
        </Link>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-70 no-underline"
              style={{ opacity: 0.75 }}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>
    </FadeIn>
  );
}

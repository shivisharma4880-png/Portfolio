import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';
import LiveProjectButton from '../LiveProjectButton';

const BORDER_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';
const IMG_RADIUS = { borderRadius: 'clamp(20px, 4vw, 60px)' };

const COL1_HEIGHT_TOP = 'clamp(130px, 16vw, 230px)';
const COL1_HEIGHT_BOTTOM = 'clamp(160px, 22vw, 340px)';
const COL2_HEIGHT = `calc(${COL1_HEIGHT_TOP} + ${COL1_HEIGHT_BOTTOM} + 12px)`;

function HeroCollageImage({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: string;
}) {
  return (
    <div
      className="w-full flex items-center justify-center bg-white overflow-hidden"
      style={{ ...IMG_RADIUS, height }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
}

export interface CaseStudyHeroProps {
  title: string;
  tagline: string;
  category: string;
  roles: string[];
  images: { col1img1: string; col1img2: string; col2img: string };
  liveUrl?: string;
}

export default function CaseStudyHero({
  title,
  tagline,
  category,
  roles,
  images,
  liveUrl,
}: CaseStudyHeroProps) {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-4 pb-16 sm:pb-20 md:pb-24">
      <FadeIn delay={0.1} y={30}>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="text-[#D7E2EA] font-light uppercase tracking-widest"
            style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)', opacity: 0.6 }}
          >
            {category}
          </span>
          {roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] px-3 py-1 uppercase tracking-wider"
              style={{ fontSize: 'clamp(0.6rem, 1vw, 0.75rem)', opacity: 0.8 }}
            >
              {role}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15} y={40}>
        <h1
          className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          {title}
        </h1>
        <p
          className="text-[#D7E2EA] font-light max-w-3xl mb-8"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', opacity: 0.75 }}
        >
          {tagline}
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <div className="flex flex-wrap gap-4 mb-10">
          {liveUrl ? <LiveProjectButton href={liveUrl} /> : null}
          <Link
            to="/#projects"
            className="rounded-full font-medium uppercase tracking-widest cursor-pointer
              border-2 border-[#D7E2EA] text-[#D7E2EA]
              px-8 py-3 sm:px-10 sm:py-3.5
              text-sm sm:text-base
              transition-all duration-300 hover:bg-[#D7E2EA]/10 inline-block no-underline"
          >
            Back to Projects
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.25} y={30}>
        <div
          className={`${BORDER_RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6`}
        >
          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
              <HeroCollageImage
                src={images.col1img1}
                alt={`${title} screenshot 1`}
                height={COL1_HEIGHT_TOP}
              />
              <HeroCollageImage
                src={images.col1img2}
                alt={`${title} screenshot 2`}
                height={COL1_HEIGHT_BOTTOM}
              />
            </div>
            <div style={{ width: '60%' }}>
              <HeroCollageImage
                src={images.col2img}
                alt={`${title} main screenshot`}
                height={COL2_HEIGHT}
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const ABOUT_PARAGRAPHS = [
  'I build products that don’t just ship—they scale, automate, and actually move business metrics.',
  'With 4+ years across D2C, fintech, and B2B SaaS, I’ve shipped and scaled products that improve adoption, reduce costs, and enhance user experience. I enjoy turning ambiguity into structured, data-driven solutions.',
  'Currently obsessed with AI-driven workflows, automation, and building products that replace hours of manual effort with a few smart clicks.',
  'If it involves big on ownership, working across teams (and time zones), shipping fast, and building products people actually use—I’m in. :)',
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative 3D Images */}
      {/* Top-left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D icon"
          className="w-full h-auto"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-full h-auto"
          draggable={false}
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D icon"
          className="w-full h-auto"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-full h-auto"
          draggable={false}
        />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Text + Button group */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <FadeIn delay={0.15} y={30} className="max-w-[640px]">
            <div
              className="flex flex-col gap-6 text-[#D7E2EA] font-medium text-center leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
            >
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

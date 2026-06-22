import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import ContactModal from '../components/ContactModal';
import LiveProjectButton from '../components/LiveProjectButton';
import CaseStudyNav from '../components/case-study/CaseStudyNav';
import CaseStudyHero from '../components/case-study/CaseStudyHero';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyScreenshotGallery from '../components/case-study/CaseStudyScreenshotGallery';
import {
  HERO,
  LIVE_URL,
  NAV_SECTIONS,
  OVERVIEW,
  PROBLEM,
  JOURNEY_STEPS,
  FEATURE_GROUPS,
  PLATFORM_DESIGN,
  TRUST_SECURITY,
  TECH_STACK,
  ARCHITECTURE_LAYERS,
  IMPACT,
  SCREENSHOT_GROUPS,
} from '../data/ki8';

const CARD_CLASS =
  'rounded-[40px] sm:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8';

export default function Ki8CaseStudyPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative" style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <CaseStudyNav sections={NAV_SECTIONS} />
      <CaseStudyHero
        title={HERO.title}
        tagline={HERO.tagline}
        category={HERO.category}
        roles={HERO.roles}
        images={HERO.images}
        liveUrl={LIVE_URL}
      />

      <CaseStudySection id="overview" title="Overview" variant="dark" className="-mt-6">
        <FadeIn delay={0.05} y={20}>
          <div className="w-full flex items-center justify-center bg-[#0C0C0C] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10 p-2 mb-10 shadow-xl">
            <img
              src="/Ki8-Main-Dashboard.png"
              alt="ki8.io landing page"
              loading="lazy"
              className="w-full h-auto object-contain rounded-[20px] sm:rounded-[35px]"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <div className={CARD_CLASS}>
            <p
              className="text-[#D7E2EA] font-light leading-relaxed mb-6"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', opacity: 0.85 }}
            >
              {OVERVIEW.summary}
            </p>
            <ul className="flex flex-col gap-3">
              {OVERVIEW.highlights.map((item, i) => (
                <FadeIn key={item} delay={0.15 + i * 0.05} y={15}>
                  <li
                    className="text-[#D7E2EA] font-light flex gap-3"
                    style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', opacity: 0.7 }}
                  >
                    <span className="text-[#BBCCD7] font-medium">→</span>
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </FadeIn>
      </CaseStudySection>

      <CaseStudySection id="problem" title="Problem Statement" variant="light">
        <FadeIn delay={0.1} y={30}>
          <AnimatedText
            text={PROBLEM.lead}
            className="text-[#0C0C0C] font-light leading-relaxed text-center max-w-4xl mx-auto mb-12"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 1.75rem)' }}
          />
        </FadeIn>
        <div className="flex flex-col gap-6">
          {PROBLEM.points.map((point, i) => (
            <FadeIn key={point} delay={i * 0.1} y={25}>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)', opacity: 0.65 }}
              >
                {point}
              </p>
            </FadeIn>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection id="journey" title="Product Journey" variant="dark">
        <div className="flex flex-col gap-0">
          {JOURNEY_STEPS.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1} y={30}>
              <div
                className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10"
                style={{
                  borderTop: '1px solid rgba(215, 226, 234, 0.15)',
                  borderBottom:
                    i === JOURNEY_STEPS.length - 1
                      ? '1px solid rgba(215, 226, 234, 0.15)'
                      : undefined,
                }}
              >
                <span
                  className="hero-heading font-black leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
                >
                  {step.step}
                </span>
                <div className="flex flex-col gap-2 pt-2">
                  <span
                    className="text-[#D7E2EA] font-medium uppercase"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                  >
                    {step.title}
                  </span>
                  <span
                    className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)', opacity: 0.6 }}
                  >
                    {step.desc}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection id="screens" title="Screenshots" variant="light">
        <CaseStudyScreenshotGallery groups={SCREENSHOT_GROUPS} variant="light" />
      </CaseStudySection>

      <CaseStudySection id="features" title="Features" variant="light">
        <div className="flex flex-col">
          {FEATURE_GROUPS.map((group, i) => (
            <FadeIn key={group.num} delay={i * 0.1} y={30}>
              <div
                className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
                style={{
                  borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                  borderBottom:
                    i === FEATURE_GROUPS.length - 1
                      ? '1px solid rgba(12, 12, 12, 0.15)'
                      : undefined,
                }}
              >
                <span
                  className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
                >
                  {group.num}
                </span>
                <div className="flex flex-col gap-3 pt-2 flex-1">
                  <span
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                  >
                    {group.name}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#0C0C0C] font-light leading-relaxed"
                        style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', opacity: 0.6 }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection id="platform-design" title="Platform Design" variant="dark">
        <div className="grid gap-6 sm:grid-cols-2">
          {PLATFORM_DESIGN.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1} y={25}>
              <div className={CARD_CLASS}>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase mb-3"
                  style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#D7E2EA] font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', opacity: 0.65 }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection id="trust-security" title="Trust & Security" variant="light">
        <ul className="flex flex-col gap-5">
          {TRUST_SECURITY.map((item, i) => (
            <FadeIn key={item} delay={i * 0.08} y={20}>
              <li
                className="text-[#0C0C0C] font-light leading-relaxed flex gap-4"
                style={{
                  fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
                  borderTop: i > 0 ? '1px solid rgba(12, 12, 12, 0.1)' : undefined,
                  paddingTop: i > 0 ? '1.25rem' : 0,
                }}
              >
                <span className="font-black text-[#0C0C0C] opacity-30 flex-shrink-0">✓</span>
                {item}
              </li>
            </FadeIn>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection id="tech-stack" title="Tech Stack" variant="dark">
        <div className="grid gap-6 sm:grid-cols-2">
          {TECH_STACK.map((stack, i) => (
            <FadeIn key={stack.category} delay={i * 0.1} y={25}>
              <div className={CARD_CLASS}>
                <h3
                  className="hero-heading font-black uppercase mb-4"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                >
                  {stack.category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#D7E2EA] font-light"
                      style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)', opacity: 0.65 }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection id="architecture" title="Architecture" variant="light">
        <FadeIn delay={0.1} y={30}>
          <div
            className="rounded-[40px] border-2 border-[#0C0C0C]/15 p-8 sm:p-10 flex flex-col items-center gap-4"
          >
            {ARCHITECTURE_LAYERS.map((layer, i) => (
              <div key={layer.label} className="w-full max-w-md flex flex-col items-center">
                <div
                  className="w-full text-center rounded-2xl border-2 border-[#0C0C0C]/20 py-5 px-6 bg-[#0C0C0C]/5"
                >
                  <p
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)' }}
                  >
                    {layer.label}
                  </p>
                  <p
                    className="text-[#0C0C0C] font-light mt-1"
                    style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', opacity: 0.5 }}
                  >
                    {layer.sub}
                  </p>
                </div>
                {i < ARCHITECTURE_LAYERS.length - 1 && (
                  <span className="text-[#0C0C0C] my-2 opacity-30 text-2xl">↓</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </CaseStudySection>

      <CaseStudySection id="impact" title="Impact & Learnings" variant="dark">
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            {IMPACT.metrics.map((m, i) => (
              <FadeIn key={m.label} delay={i * 0.08} y={15}>
                <div
                  className="rounded-full border-2 border-[#D7E2EA]/40 px-6 py-3 text-center"
                >
                  <p
                    className="hero-heading font-black"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                  >
                    {m.value}
                  </p>
                  <p
                    className="text-[#D7E2EA] uppercase tracking-widest"
                    style={{ fontSize: 'clamp(0.6rem, 1vw, 0.75rem)', opacity: 0.6 }}
                  >
                    {m.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
        <ul className="flex flex-col gap-4">
          {IMPACT.outcomes.map((outcome, i) => (
            <FadeIn key={outcome} delay={0.2 + i * 0.08} y={20}>
              <li
                className="text-[#D7E2EA] font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)', opacity: 0.75 }}
              >
                {outcome}
              </li>
            </FadeIn>
          ))}
        </ul>
      </CaseStudySection>

      <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 flex flex-col items-center gap-6">
        <FadeIn delay={0} y={30}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 60px)' }}
          >
            Let&apos;s build something impactful
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-wrap gap-4 justify-center">
            <ContactButton onClick={() => setContactOpen(true)} />
            <LiveProjectButton href={LIVE_URL} />
            <Link
              to="/#projects"
              className="rounded-full font-medium uppercase tracking-widest cursor-pointer
                border-2 border-[#0C0C0C] text-[#0C0C0C]
                px-8 py-3 sm:px-10 sm:py-3.5
                text-sm sm:text-base
                transition-all duration-300 hover:bg-[#0C0C0C]/5 inline-block no-underline"
            >
              Back to Projects
            </Link>
          </div>
        </FadeIn>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

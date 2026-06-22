import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Product Strategy & Execution',
    desc: 'Define 0→1 and 1→N product strategies, translating business goals into scalable roadmaps, PRDs, and measurable outcomes across global markets.',
  },
  {
    num: '02',
    name: 'AI-Powered Product Development',
    desc: 'Build and ship AI-driven features (LLMs, automation, decision systems) that improve user outcomes, reduce manual effort, and unlock new product capabilities.',
  },
  {
    num: '03',
    name: 'User Experience & Data Insights',
    desc: 'Leverage user research, behavioral analytics, and experimentation (A/B testing) to drive adoption, retention, and conversion improvements.',
  },
  {
    num: '04',
    name: 'Growth, Funnel & Monetization',
    desc: 'Optimize end-to-end funnels (acquisition → activation → retention → revenue), driving measurable impact on conversion rates, engagement, and monetization.',
  },
  {
    num: '05',
    name: 'Cross-Functional Leadership',
    desc: 'Lead execution across engineering, design, and business teams in async, remote-first environments, ensuring fast delivery and stakeholder alignment.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2rem, 7.5vw, 100px)' }}
        >
          What I Bring to the Table!
        </h2>
      </FadeIn>

      {/* Service List */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                borderBottom:
                  i === SERVICES.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </span>

              {/* Name + Desc */}
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

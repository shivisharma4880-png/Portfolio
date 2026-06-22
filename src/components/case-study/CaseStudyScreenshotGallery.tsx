import FadeIn from '../FadeIn';
import type { ScreenshotGroup } from '../../data/telehealth';

const IMG_RADIUS = { borderRadius: 'clamp(20px, 4vw, 60px)' };
const FRAME_RADIUS = 'rounded-[40px] sm:rounded-[50px]';

interface CaseStudyScreenshotGalleryProps {
  groups: ScreenshotGroup[];
  variant?: 'dark' | 'light';
}

export default function CaseStudyScreenshotGallery({
  groups,
  variant = 'light',
}: CaseStudyScreenshotGalleryProps) {
  const isDark = variant === 'dark';
  const frameBorder = isDark ? 'border-[#D7E2EA]' : 'border-[#0C0C0C]/15';
  const titleColor = isDark ? 'text-[#D7E2EA]' : 'text-[#0C0C0C]';
  const captionColor = isDark ? 'text-[#D7E2EA]' : 'text-[#0C0C0C]';

  let shotIndex = 0;

  return (
    <div className="flex flex-col gap-14 sm:gap-16">
      {groups.map((group, groupIndex) => (
        <div key={group.title} className="flex flex-col gap-8 sm:gap-10">
          <FadeIn delay={groupIndex * 0.05} y={25}>
            <div className="flex flex-col gap-2">
              <h3
                className={`font-medium uppercase ${titleColor}`}
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
              >
                {group.title}
              </h3>
              <p
                className={`font-light ${titleColor}`}
                style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', opacity: 0.55 }}
              >
                {group.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-8 sm:gap-10">
            {group.shots.map((shot) => {
              const delay = 0.1 + shotIndex * 0.06;
              shotIndex += 1;
              return (
                <FadeIn key={shot.src} delay={delay} y={30}>
                  <figure className="flex flex-col gap-3 sm:gap-4">
                    <div
                      className={`${FRAME_RADIUS} border-2 ${frameBorder} bg-white p-3 sm:p-4 overflow-hidden`}
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="w-full object-contain"
                        style={{
                          ...IMG_RADIUS,
                          maxHeight: 'clamp(280px, 70vh, 720px)',
                        }}
                      />
                    </div>
                    <figcaption
                      className={`font-light ${captionColor}`}
                      style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1rem)', opacity: 0.6 }}
                    >
                      {shot.caption}
                    </figcaption>
                  </figure>
                </FadeIn>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

const IMAGES = [
  '/ki8.png',
  '/smart_apply_ai_poster.png',
  '/telehealth.png',
];

// Duplicate for seamless infinite loop
const TRACK = [...IMAGES, ...IMAGES];

const CARD_W   = 420; // px
const GAP      = 16;  // px  (gap-4 = 1rem = 16px)
// Total width of one "set" of cards (used as the translate target)
const TRACK_W  = IMAGES.length * (CARD_W + GAP); // 5 cards

export default function MarqueeSection() {
  return (
    <section
      id="marquee"
      className="bg-[#0C0C0C] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Outer mask — fades edges for a polished look */}
      <div
        className="relative"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        {/* Sliding track */}
        <div
          className="flex gap-4 flex-nowrap w-max"
          style={{
            animation: 'marquee-slide 18s linear infinite',
            // Translate exactly one "set" width to the left, then snap back
            ['--marquee-w' as string]: `-${TRACK_W}px`,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState =
              'paused')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.animationPlayState =
              'running')
          }
        >
          {TRACK.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project preview ${(i % IMAGES.length) + 1}`}
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: `${CARD_W}px`, height: '270px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

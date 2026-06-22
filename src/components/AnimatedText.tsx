import { useRef, CSSProperties } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={`relative ${className}`} style={style} aria-label={text}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = (i + 1) / characters.length;
        return (
          <Character
            key={i}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}

function Character({ char, progress, start, end }: CharacterProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity }}
        aria-hidden="true"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

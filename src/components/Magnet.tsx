import { useRef, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const inBoundsX = Math.abs(distX) <= rect.width / 2 + padding;
      const inBoundsY = Math.abs(distY) <= rect.height / 2 + padding;

      if (inBoundsX && inBoundsY) {
        if (!isActive.current) {
          el.style.transition = activeTransition;
          el.style.willChange = 'transform';
          isActive.current = true;
        }
        el.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`;
      } else if (isActive.current) {
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0, 0, 0)';
        isActive.current = false;
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = inactiveTransition;
    el.style.transform = 'translate3d(0, 0, 0)';
    isActive.current = false;
  }, [inactiveTransition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div ref={ref} onMouseLeave={handleMouseLeave} className={className}>
      {children}
    </div>
  );
}

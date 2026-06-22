import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Google Drive file ID or full embed URL */
  driveFileId: string;
  title?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  driveFileId,
  title = 'Live Project Demo',
}: VideoModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === backdropRef.current) onClose();
          }}
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
        >
          {/* Modal container */}
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-[#D7E2EA] font-medium uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                {title}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200 cursor-pointer"
                aria-label="Close video modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video embed */}
            <div
              className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D7E2EA]/20"
              style={{ paddingBottom: '56.25%' /* 16:9 */ }}
            >
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={title}
                style={{ border: 'none' }}
              />
            </div>

            {/* Subtle hint */}
            <p
              className="text-center mt-3 text-[#D7E2EA]/40 tracking-wide"
              style={{ fontSize: '0.7rem' }}
            >
              Press ESC or click outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

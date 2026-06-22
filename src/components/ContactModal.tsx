import { useEffect } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const CONTACT = {
  name: 'Shivi Sharma',
  email: 'shivi@example.com',         // TODO: replace with real email
  phone: '+91 00000 00000',            // TODO: replace with real phone
  linkedin: 'linkedin.com/in/shivisharma', // TODO: replace with real LinkedIn
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Card */}
      <div
        className="relative w-full max-w-md rounded-3xl p-8 sm:p-10"
        style={{
          background: 'linear-gradient(135deg, #18011F 0%, #1a0a2e 60%, #0C0C0C 100%)',
          border: '1px solid rgba(182, 0, 168, 0.4)',
          boxShadow: '0 0 60px rgba(182, 0, 168, 0.25), 0 0 120px rgba(118, 33, 176, 0.15)',
          animation: 'modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) both',
        }}
      >
        {/* Close button */}
        <button
          id="contact-modal-close"
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-[#D7E2EA] transition-all duration-200 hover:bg-white/10 hover:scale-110"
        >
          ✕
        </button>

        {/* Header */}
        <p className="text-xs uppercase tracking-[0.25em] text-[#B600A8] font-medium mb-1">
          Get in touch
        </p>
        <h2
          className="font-black uppercase leading-none mb-8"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            background: 'linear-gradient(180deg, #ffffff 0%, #BBCCD7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {CONTACT.name}
        </h2>

        {/* Details */}
        <div className="flex flex-col gap-5">
          {/* Email */}
          <ContactRow
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            }
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />

          {/* Phone */}
          <ContactRow
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.55.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.55 1 1 0 01-.25 1L6.6 10.8z" />
              </svg>
            }
            label="Phone"
            value={CONTACT.phone}
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
          />

          {/* LinkedIn */}
          <ContactRow
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
              </svg>
            }
            label="LinkedIn"
            value={CONTACT.linkedin}
            href={`https://${CONTACT.linkedin}`}
          />
        </div>

        {/* CTA */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-8 flex items-center justify-center gap-2 w-full rounded-full py-3.5 font-semibold uppercase tracking-widest text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid white',
            outlineOffset: '-3px',
          }}
        >
          Send an Email
        </a>
      </div>

      <style>{`
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.88) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ── Row sub-component ── */
function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
    >
      <span
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#B600A8] transition-all duration-200 group-hover:scale-110"
        style={{ background: 'rgba(182,0,168,0.12)', border: '1px solid rgba(182,0,168,0.25)' }}
      >
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA] opacity-50 font-medium">{label}</span>
        <span className="text-[#D7E2EA] font-medium text-sm sm:text-base group-hover:text-[#B600A8] transition-colors duration-200">
          {value}
        </span>
      </div>
    </a>
  );
}

import { useEffect } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const CONTACT = {
  name: 'Shivi Sharma',
  email: 'shivisharma4880@gmail.com',
  phone: '+91 9690655558',
  linkedin: 'linkedin.com/in/shivi-sharma-252b1420a',
  github: 'github.com/shivisharma4880-png',
  producthunt: 'www.producthunt.com/@shivi_sharma02',
  medium: 'medium.com/@shivisharma4880',
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
        className="relative w-full max-w-md rounded-3xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto scrollbar-hide"
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

        <div className="h-px bg-white/10 my-6" />

        {/* View my work on */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#B600A8]">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA] opacity-60 font-semibold">
              View my work on
            </span>
          </div>

          <a
            href={`https://${CONTACT.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full rounded-2xl py-3.5 px-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 text-white hover:scale-[1.02] border"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col gap-3 mt-6">
          <span className="text-[11px] uppercase tracking-widest text-[#D7E2EA] opacity-60 font-semibold">
            Additional Links
          </span>
          <div className="grid grid-cols-2 gap-3">
            {/* Product Hunt */}
            <a
              href={`https://${CONTACT.producthunt}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl py-3 px-3 font-bold uppercase tracking-widest text-xs transition-all duration-300 text-white hover:scale-[1.02] border"
              style={{
                background: 'rgba(218, 95, 46, 0.06)',
                borderColor: 'rgba(218, 95, 46, 0.25)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(218, 95, 46, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(218, 95, 46, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(218, 95, 46, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(218, 95, 46, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(218, 95, 46, 0.25)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#da5f2e]">
                <path d="M13.6 8.4h-2.8v2.8h2.8c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4zm0-3.6H7.2v14.4h3.6v-5.2h2.8c2.8 0 5-2.2 5-5s-2.2-5-5-5zm-1.6 18c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" />
              </svg>
              Product Hunt
            </a>

            {/* Medium */}
            <a
              href={`https://${CONTACT.medium}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl py-3 px-3 font-bold uppercase tracking-widest text-xs transition-all duration-300 text-white hover:scale-[1.02] border"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.24-.37 5.86-.83 5.86s-.83-2.62-.83-5.86.37-5.86.83-5.86.83 2.62.83 5.86z" />
              </svg>
              Medium
            </a>
          </div>
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

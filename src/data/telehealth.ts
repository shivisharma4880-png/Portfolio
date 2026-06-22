import { TELEHEALTH_PROJECT } from './projects';

export const LIVE_URL = 'https://telehealthapp.duckdns.org';

export const HERO = {
  title: 'TeleHealth.ai',
  tagline: TELEHEALTH_PROJECT.tagline!,
  category: TELEHEALTH_PROJECT.category,
  roles: ['Product Strategy', 'AI Product Design', 'Healthcare MVP'],
  images: {
    col1img1: TELEHEALTH_PROJECT.col1img1,
    col1img2: TELEHEALTH_PROJECT.col1img2,
    col2img: TELEHEALTH_PROJECT.col2img,
  },
};

export const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'journey', label: 'Journey' },
  { id: 'screens', label: 'Screens' },
  { id: 'features', label: 'Features' },
  { id: 'ai-design', label: 'AI Design' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'impact', label: 'Impact' },
];

export const OVERVIEW = {
  summary:
    'A full-stack, AI-assisted teleconsultation MVP for outpatient care. Three role-based portals—patient, clinician, and admin—cover the complete journey from slot booking through audio consult, AI-drafted clinical notes, and digitally signed e-prescriptions.',
  highlights: [
    'End-to-end patient journey: OTP sign-up → provider discovery → booking → consult → records',
    'Clinician workspace with live transcription, editable SOAP drafts, and Rx sign-off',
    'Admin console with operational metrics, audit logs, and CSV export',
    'Clinician-in-the-loop: AI outputs are drafts; prescriptions require human signature',
  ],
};

export const PROBLEM = {
  lead: 'Outpatient telemedicine is more than a video call—it needs scheduling, documentation, prescribing, and compliance guardrails built into one coherent product.',
  points: [
    'Patients face fragmented booking and follow-up across channels, with weak continuity of care records.',
    'Clinicians spend significant time on documentation during and after consults, reducing throughput and quality of attention.',
    'India-specific requirements—DPDP consent, Telemedicine Practice Guidelines, PHI handling—must be designed in, not bolted on.',
    'AI in healthcare must augment clinicians without bypassing accountability for diagnosis or prescriptions.',
  ],
};

export const JOURNEY_STEPS = [
  { step: '01', title: 'Book', desc: 'Patient discovers providers, selects a slot, completes pre-consult questionnaire, and grants consent.' },
  { step: '02', title: 'Consult', desc: 'Clinician opens the consult room—audio capture, live Whisper transcription via SSE, and encounter lifecycle management.' },
  { step: '03', title: 'Document', desc: 'GPT-4o drafts SOAP notes from transcript; clinician reviews, edits, and finalizes before sign-off.' },
  { step: '04', title: 'Prescribe', desc: 'E-prescription with drug search, interaction and allergy checks, ReportLab PDF with digital signature.' },
  { step: '05', title: 'Follow up', desc: 'Patient downloads Rx and visit summaries from records; admin tracks metrics and audit trail.' },
];

export interface ScreenshotShot {
  src: string;
  alt: string;
  caption: string;
}

export interface ScreenshotGroup {
  title: string;
  subtitle: string;
  shots: ScreenshotShot[];
}

export const SCREENSHOT_GROUPS: ScreenshotGroup[] = [
  {
    title: 'Patient Portal',
    subtitle: 'Booking through AI voice triage',
    shots: [
      {
        src: '/tele-00.png',
        alt: 'TeleHealth patient dashboard with welcome banner, quick actions, and upcoming appointment',
        caption: 'Patient dashboard — welcome, quick actions, upcoming appointment',
      },
      {
        src: '/tele-01.png',
        alt: 'TeleHealth find a doctor page with search and specialty filters',
        caption: 'Find a doctor — search, specialty filters, book CTA',
      },
      {
        src: '/tele-02.png',
        alt: 'TeleHealth confirm booking page with slot summary and mock payment',
        caption: 'Confirm booking — slot summary, mock payment',
      },
      {
        src: '/tele-03.png',
        alt: 'TeleHealth booking confirmed success screen',
        caption: 'Booking confirmed — success state',
      },
      {
        src: '/tele-04.png',
        alt: 'TeleHealth AI voice triage pre-call instructions screen',
        caption: 'AI voice triage — pre-call instructions',
      },
      {
        src: '/tele-05.png',
        alt: 'TeleHealth active AI voice session with Groq voice consult',
        caption: 'AI voice session — active Groq voice consult',
      },
    ],
  },
  {
    title: 'Admin Console',
    subtitle: 'Operations, reporting, and compliance',
    shots: [
      {
        src: '/tele-06.png',
        alt: 'TeleHealth admin dashboard with metrics, chart, and recent appointments',
        caption: 'Admin dashboard — metrics, chart, recent appointments',
      },
      {
        src: '/tele-07.png',
        alt: 'TeleHealth admin actions page for doctor CRUD',
        caption: 'Admin actions — doctor CRUD',
      },
      {
        src: '/tele-08.png',
        alt: 'TeleHealth clinicians roster management page',
        caption: 'Clinicians — roster management',
      },
      {
        src: '/tele-09.png',
        alt: 'TeleHealth reports page with status chart, metrics, and appointments table',
        caption: 'Reports — status chart, metrics, appointments table',
      },
      {
        src: '/tele-10.png',
        alt: 'TeleHealth audit logs append-only compliance events viewer',
        caption: 'Audit logs — append-only compliance events',
      },
    ],
  },
];

export const FEATURE_GROUPS = [
  {
    num: '01',
    name: 'Patient Portal',
    items: [
      'Phone OTP authentication (mock-ready for production SMS)',
      'Provider discovery and slot booking with pre-consult questionnaire',
      'AI voice consult demo (Groq STT, LLM, TTS)',
      'Appointment history and prescription download',
      'DPDP-aligned consent versioning',
    ],
  },
  {
    num: '02',
    name: 'Clinician Console',
    items: [
      'Schedule and appointment management',
      'Consult room with chunked audio upload → OpenAI Whisper',
      'Real-time transcript stream (SSE)',
      'GPT-4o SOAP note drafts—editable and finalizable',
      'E-prescription: formulary search, interaction/allergy checks, signed PDF',
      'Optional TOTP 2FA for clinician accounts',
    ],
  },
  {
    num: '03',
    name: 'Admin Console',
    items: [
      'Dashboard: appointments, completions, no-show rate, revenue (INR)',
      'Clinician CRUD and clinic operations',
      'Append-only audit log viewer',
      'Reports with charts (Recharts) and CSV export',
    ],
  },
  {
    num: '04',
    name: 'AI Pipeline',
    items: [
      'Clinician track: Whisper ASR → SSE transcript → GPT-4o SOAP',
      'Patient track: Groq voice loop (whisper-large-v3-turbo, llama-3.3-70b, Orpheus TTS)',
      'Educational “Dr. Assistant” chat during scheduled encounters',
      'AI visit PDF generation after voice sessions',
    ],
  },
  {
    num: '05',
    name: 'Security & Platform',
    items: [
      'JWT RBAC (patient, clinician, admin)',
      'Rate limiting on auth routes, security headers middleware',
      'PHI encryption annotations, append-only audit events',
      'Docker Compose dev stack; GCP + Caddy HTTPS for production',
    ],
  },
];

export const AI_DESIGN = [
  {
    title: 'Human-in-the-loop by design',
    desc: 'SOAP notes and voice AI outputs are explicitly drafts. Clinicians must review, edit, and finalize before records are committed; prescriptions require a signed PDF.',
  },
  {
    title: 'Dual AI architecture',
    desc: 'Production clinician workflow uses OpenAI (Whisper + GPT-4o). Patient-facing voice demo uses Groq for lower-latency STT/LLM/TTS—separate paths with clear product boundaries.',
  },
  {
    title: 'Streaming for trust',
    desc: 'SSE transcript streaming lets clinicians see AI input in real time, building confidence and catching errors early rather than at note finalization.',
  },
  {
    title: 'Safety guardrails',
    desc: 'Drug interaction and allergy checks before Rx sign-off; emergency routing messaging; AI framed as assistive, not autonomous care.',
  },
];

export const COMPLIANCE = [
  'DPDP-aligned consent flows with versioned patient consent records',
  'References to Telemedicine Practice Guidelines 2020 in API documentation',
  'Append-only audit log for sensitive actions (booking, consult, Rx, admin)',
  'PHI handling annotations and role-based access control across all portals',
  'AI outputs labeled as drafts; no autonomous diagnosis or prescribing',
];

export const TECH_STACK = [
  { category: 'Frontend', items: ['Next.js 14 (App Router)', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Recharts'] },
  { category: 'Backend', items: ['Python FastAPI', 'SQLAlchemy 2.0', 'Alembic', 'Pydantic v2', 'PostgreSQL 15'] },
  { category: 'AI & Media', items: ['OpenAI Whisper + GPT-4o', 'Groq STT / LLM / TTS', 'ReportLab PDF generation'] },
  { category: 'Infra & Auth', items: ['Docker Compose', 'Caddy HTTPS', 'GCP deploy scripts', 'JWT + bcrypt', 'pyotp 2FA'] },
];

export const ARCHITECTURE_LAYERS = [
  { label: 'Patient / Clinician / Admin UI', sub: 'Next.js on :3000' },
  { label: 'REST API + SSE', sub: 'FastAPI on :8001' },
  { label: 'PostgreSQL', sub: 'FHIR R4-inspired schema' },
  { label: 'External AI', sub: 'OpenAI · Groq' },
];

export const IMPACT = {
  outcomes: [
    'Shipped a deployable MVP with patient, clinician, and admin journeys in one codebase',
    'Product instrumentation via admin dashboard (appointments, no-shows, revenue, clinician/patient counts)',
    'Production path documented: GCP VM + DuckDNS + Caddy TLS',
    'Demonstrated AI product judgment: assistive AI, dual pipelines, compliance-aware flows',
  ],
  metrics: [
    { label: 'Portals', value: '3' },
    { label: 'AI providers', value: '2' },
    { label: 'Journey stages', value: '5' },
    { label: 'Deploy target', value: 'GCP' },
  ],
};

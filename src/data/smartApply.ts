import { SMART_APPLY_PROJECT } from './projects';

export const HERO = {
  title: 'Smart Apply',
  tagline: SMART_APPLY_PROJECT.tagline!,
  category: SMART_APPLY_PROJECT.category,
  roles: ['Product Strategy', 'AI Automation', 'Growth'],
  images: {
    col1img1: SMART_APPLY_PROJECT.col1img1,
    col1img2: SMART_APPLY_PROJECT.col1img2,
    col2img: SMART_APPLY_PROJECT.col2img,
  },
};

export const NAV_SECTIONS = [
  { id: 'walkthrough', label: 'Walkthrough' },
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'journey', label: 'Journey' },
  { id: 'screens', label: 'Screens' },
  { id: 'features', label: 'Features' },
  { id: 'ai-design', label: 'AI Design' },
  { id: 'trust-safety', label: 'Trust' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'impact', label: 'Impact' },
];

export const OVERVIEW = {
  summary:
    'SmartApply AI is a localized job-search co-pilot that runs on your machine and real Chrome session. It scores LinkedIn jobs against your CV with Groq, automates Easy Apply when the match is strong, falls back to recruiter outreach for direct-apply roles, and logs everything for analytics—designed for low volume and high yield, not mass spam.',
  highlights: [
    'Phased delivery: V1 execution engine → V2 PostgreSQL persistence → V3 Streamlit analytics dashboard',
    'Attaches to an authenticated Chrome profile via remote debugging—no LinkedIn API scraping',
    'Apply only when LLM match score ≥ 80 and job is not flagged as spam/ghost',
    'Runs locally on the user’s IP; explicitly out of scope for cloud deployment',
  ],
};

export const PROBLEM = {
  lead: 'Manual LinkedIn job search is slow, repetitive, and risky at scale—high-volume automation triggers bans while low-quality applies waste time on ghost postings.',
  points: [
    'Job seekers spend hours scrolling, copying descriptions, and deciding whether each role is worth an application.',
    'Easy Apply forms vary wildly; blind automation fails on custom questions and damages trust with recruiters.',
    'Ghost jobs and spam listings pollute feeds—applying without filtering burns credibility and account standing.',
    'LinkedIn enforces implicit rate limits; products must trade throughput for human-like behavior and caps.',
  ],
};

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Configure',
    desc: 'Streamlit portal: upload PDF CV, set target roles, locations, and skills. Profile stored in PostgreSQL or local config for the run.',
  },
  {
    step: '02',
    title: 'Search',
    desc: 'Orchestrator builds LinkedIn job search URL (keywords, location, past week), attaches to Chrome on port 9222, loops job cards with pagination.',
  },
  {
    step: '03',
    title: 'Score',
    desc: 'Scrape title, company, description; Groq (Llama 3.3 70B) returns match score 0–100 and spam flag. Skip below threshold or flagged jobs.',
  },
  {
    step: '04',
    title: 'Act',
    desc: 'Easy Apply with LLM-filled screening questions and HITL pause on unknown controls—or recruiter/TA connection requests when direct apply is required.',
  },
  {
    step: '05',
    title: 'Review',
    desc: 'Streamlit dashboard: jobs evaluated, high-quality matches, applications sent, daily volume charts for strategy tuning.',
  },
];

export const FEATURE_GROUPS = [
  {
    num: '01',
    name: 'Browser Automation',
    items: [
      'Chrome CDP attach on 127.0.0.1:9222—reuses existing cookies and login session',
      'Job search navigation, card loop, scroll/load, and pagination',
      'Job detail scrape: title, company, description, URL',
      'Randomized human-like delays between actions (3.1–7.8 seconds)',
    ],
  },
  {
    num: '02',
    name: 'LLM Job Intelligence',
    items: [
      'Groq API with llama-3.3-70b-versatile in JSON mode',
      'Match score 0–100 against CV text and user preferences',
      'Spam / ghost job detection (is_spam flag)',
      'Auto-answer screening questions from resume context',
    ],
  },
  {
    num: '03',
    name: 'Easy Apply + HITL',
    items: [
      'Multi-step Easy Apply wizard automation',
      'Resume upload and phone placeholder handling',
      'Human-in-the-loop: audio alert + terminal input when forms exceed AI confidence',
      '1-hour cooldown after each application (anti-ban throttle)',
    ],
  },
  {
    num: '04',
    name: 'Direct-Apply Fallback',
    items: [
      'Detect jobs without Easy Apply; log “Direct Apply Required”',
      'Company People tab: search Talent Acquisition, HR, domain keywords',
      'Connection requests capped at 10 per user per day',
      'Skip companies already contacted (PostgreSQL deduplication)',
    ],
  },
  {
    num: '05',
    name: 'Persistence & Analytics',
    items: [
      'PostgreSQL: Job_Matches, Applications, Outreach, Users, Actions',
      'Streamlit portal for profile creation and config',
      'pg_dashboard: funnel metrics, daily applications, recent high-scoring matches',
      'Cold messages (10/day) in PRD roadmap—not yet automated in actions layer',
    ],
  },
];

export const AI_DESIGN = [
  {
    title: 'Filter before you act',
    desc: 'The product only applies or reaches out when match_score ≥ 80 and is_spam is false—turning the LLM into a gate, not a blind applicator.',
  },
  {
    title: 'Assistive co-pilot, not a bot',
    desc: 'HITL pauses on radio groups, selects, and ambiguous fields. The user remains accountable; automation handles repetitive high-confidence steps.',
  },
  {
    title: 'CV-grounded form answers',
    desc: 'Screening questions are answered from extracted PDF text via pdfplumber—reducing generic filler that recruiters reject.',
  },
  {
    title: 'Honest capability boundaries',
    desc: 'No inbox scraping, no cloud agents on shared IPs. Architecture matches PRD: local execution on the job seeker’s machine only.',
  },
];

export const TRUST_SAFETY = [
  'Volume caps: max 10 connection requests per user per day; 1 application per hour cooldown after apply',
  'Randomized delays on every click and keystroke to mimic human pacing',
  'Uses the user’s real browser profile and IP—no headless farm or API scraping',
  'PostgreSQL audit trail for jobs scored, applications, and outreach actions',
  'PRD excludes inbox automation; cold messaging planned but not shipped in V1 actions',
];

export const TECH_STACK = [
  {
    category: 'Core',
    items: ['Python 3', 'Streamlit (portal + dashboards)', 'Selenium 4', 'Chrome remote debugging'],
  },
  {
    category: 'AI & Data',
    items: ['Groq SDK (Llama 3.3 70B)', 'pdfplumber (CV extraction)', 'python-dotenv', 'pandas'],
  },
  {
    category: 'Persistence',
    items: ['PostgreSQL + psycopg2 (primary)', 'SQLite alternate (db_manager)', 'config.json per profile'],
  },
  {
    category: 'Ops',
    items: ['Local-only execution', 'GROQ_API_KEY + DATABASE_URL via .env', 'No deployed SaaS surface'],
  },
];

export const ARCHITECTURE_LAYERS = [
  { label: 'User Chrome (port 9222)', sub: 'Authenticated LinkedIn session' },
  { label: 'Selenium layer', sub: 'Scraper + ActionExecutor' },
  { label: 'Orchestrator (main.py)', sub: 'Search → score → apply / outreach' },
  { label: 'Groq + PostgreSQL', sub: 'LLM scoring · activity logs' },
];

export const IMPACT = {
  outcomes: [
    'Delivered V1–V3 product arc: automation engine, durable logging, and analytics UI in one side project',
    'Defined anti-detection product rules (caps, delays, HITL) before writing automation code',
    'Two-path apply strategy: Easy Apply automation plus recruiter outreach for external postings',
    'Instrumented funnel metrics so job-search strategy can be tuned from data, not guesswork',
  ],
  metrics: [
    { label: 'Match threshold', value: '80' },
    { label: 'Conn. cap/day', value: '10' },
    { label: 'Apply cooldown', value: '1hr' },
    { label: 'Phases shipped', value: '3' },
  ],
};

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
    title: 'AI Automation & Logs',
    subtitle: 'Selenium executing Chrome actions synced with real-time LLM reasoning in the terminal',
    shots: [
      {
        src: '/smart-apply-search-job.png',
        alt: 'LinkedIn job search automation scanning roles alongside Selenium log output',
        caption: 'Scraping & Scaffolding: Attaching to an authenticated Chrome session and parsing job cards.',
      },
      {
        src: '/smart-apply-easy-apply.png',
        alt: 'Auto-applying to LinkedIn roles with Groq auto-answering form questions',
        caption: 'Automated Easy Apply: The LLM answers screening questions from resume context and handles the multi-step application wizard.',
      },
      {
        src: '/smart-apply-invitation.png',
        alt: 'Personalized recruiter invitation fallback dialog with backend logs',
        caption: "Outreach Fallback: Navigating to the company's people list and sending a connection request when standard application isn't possible.",
      },
    ],
  },
  {
    title: 'Analytics Dashboard',
    subtitle: 'Streamlit interface retrieving data from PostgreSQL persistence',
    shots: [
      {
        src: '/smart-apply-dash-0.png',
        alt: 'Streamlit dashboard displaying total jobs evaluated, high quality matches, and daily application volume charts',
        caption: 'Operations Funnel: High-level metrics tracking total evaluations, strong match percentages, and chronological volume charts.',
      },
      {
        src: '/smart-apply-dash-1.png',
        alt: 'Streamlit dashboard displaying recent high-scoring job matches and evaluation logs',
        caption: 'Evaluation Audit Trail: Grid view showing companies, job titles, and match scores computed by Groq (Llama 3.3).',
      },
    ],
  },
];

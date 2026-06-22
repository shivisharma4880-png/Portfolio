import { KI8_PROJECT } from './projects';

export const LIVE_URL = 'https://web-one-kappa-82.vercel.app/';

export const HERO = {
  title: 'ki8.io',
  tagline: KI8_PROJECT.tagline!,
  category: KI8_PROJECT.category,
  roles: ['Product Strategy', 'Platform Design', 'Trust Infrastructure'],
  images: {
    col1img1: KI8_PROJECT.col1img1,
    col1img2: KI8_PROJECT.col1img2,
    col2img: KI8_PROJECT.col2img,
  },
};

export const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'journey', label: 'Journey' },
  { id: 'screens', label: 'Screens' },
  { id: 'features', label: 'Features' },
  { id: 'platform-design', label: 'Platform' },
  { id: 'trust-security', label: 'Trust' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'impact', label: 'Impact' },
];

export const OVERVIEW = {
  summary:
    'Ki8.io is a programmable machine-code trust layer—not a commodity QR generator. It embeds Ed25519-signed payloads into QR, DataMatrix, and PDF417 codes, tracks asset lifecycle with geo scan intelligence, and exposes partner dashboards for verification and ops. The monorepo spans a Next.js web app (Vercel), a .NET 9 API and crypto core, and a Blazor WASM console on GitHub Pages.',
  highlights: [
    'Positioning: codes as infrastructure with cryptographic identity, provenance, and physical-digital binding',
    '15-route Next.js prototype: marketing, partner/ops/admin dashboards, license verify flow',
    'OpenAPI 3.1 contract for generate, decode, and verify endpoints',
    'Web UI uses mock APIs today; production path via NEXT_PUBLIC_API_URL to Ki8.Api',
  ],
};

export const PROBLEM = {
  lead: 'Physical products need machine-readable trust—not just scannable links. Counterfeiting, weak provenance, and consumer-only QR workflows fail manufacturers, pharma, and industrial pipelines.',
  points: [
    'Standard QR tools stop at “scan → URL” with no cryptographic proof of authenticity or origin.',
    'Brands cannot reliably answer who created a code, when it was scanned, or where verification occurred.',
    'Laser etching, chemical micro-print, and high-speed industrial scanners need hardware-grade outputs—not phone-camera workflows alone.',
    'AI platforms and integrators need structured, verifiable machine IDs—not opaque image blobs.',
  ],
};

export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Define',
    desc: 'Partner configures assets, roles, and licensing context via marketing pages and dashboard entry points.',
  },
  {
    step: '02',
    title: 'Generate',
    desc: 'Signed machine codes produced via Ki8.Api (Ed25519) or client-side demo flows; formats include QR, DataMatrix, PDF417.',
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'Codes applied to labels, packaging, or laser-etched surfaces—DXF/SVG pipelines in the .NET stack for industrial output.',
  },
  {
    step: '04',
    title: 'Verify',
    desc: 'Scans decoded and trust-checked through verification APIs; license/verify route supports credit balance and top-up UX.',
  },
  {
    step: '05',
    title: 'Operate',
    desc: 'Partner dashboard: asset map (Leaflet), scan history, trust score analytics (Recharts), developer-mode integrations view.',
  },
];

export const FEATURE_GROUPS = [
  {
    num: '01',
    name: 'Secure Machine Codes',
    items: [
      'Ed25519-signed payloads embedded in QR, DataMatrix, and PDF417',
      'REST API: generate, decode, verify (OpenAPI 3.1 in api/openapi.yaml)',
      'Ki8.Core + Ki8.Services cryptography layer in .NET 9',
      'Interactive homepage demo via qrcode.react',
    ],
  },
  {
    num: '02',
    name: 'Partner Dashboard',
    items: [
      'QR generation UI with useQRGenerator hooks',
      'Asset list and Leaflet geo map (AssetMap, AssetList)',
      'Scan history timeline and TrustScore charts (Recharts)',
      'Collapsible partner home: stats, QR gen, assets, scans at a glance',
    ],
  },
  {
    num: '03',
    name: 'Role-Based Surfaces',
    items: [
      'Marketing landings: /partner, /ops, /customer-support, /admin',
      'Dashboard routes per persona under /dashboard/*',
      'WhatsApp support button for consignment queries (wa.me)',
      'Admin UI: users, security, data, and system settings (prototype)',
    ],
  },
  {
    num: '04',
    name: 'Licensing & Credits',
    items: [
      '/license/verify — scan-to-verify credit balance flow',
      'LicenseQRDisplay and CreditTopUp components',
      'Partner licensing page under /dashboard/partner/licensing',
      'Mock licenseAPI in web/src/lib/api/license.ts (ready for backend wire-up)',
    ],
  },
  {
    num: '05',
    name: 'Developer Platform',
    items: [
      'Ki8.Sdk client for integrators',
      'Developer mode: mock API changelog, integrations, anomalies',
      'Blazor WASM console (rig/Ki8.Demo) on GitHub Pages docs/app/',
      'E2E coverage with Playwright for .NET (tests/Ki8.E2E)',
    ],
  },
];

export const PLATFORM_DESIGN = [
  {
    title: 'SDK-first, not UI-only',
    desc: 'Product follows mature scanning platforms: clear separation of SDK, cloud API, and licensing—web dashboards explain the story, the .NET API delivers trust.',
  },
  {
    title: 'Honest prototype boundaries',
    desc: 'Next.js web layer uses mock data in lib/api/*.ts; crypto and verification logic live in Ki8.Api and Blazor console. Copy and case study reflect this split.',
  },
  {
    title: 'Hybrid deployment strategy',
    desc: 'Vercel for marketing/dashboard demo; GitHub Pages for zero-dependency landing + in-browser WASM console—two frontends, one trust engine.',
  },
  {
    title: 'Roadmap clarity',
    desc: 'PRD defines MCP-compatible intelligence and MAK3R AI auth as future layers—no LLM features shipped in web; positioned explicitly as next phase.',
  },
];

export const TRUST_SECURITY = [
  'Ed25519 signatures for tamper-evident, offline-verifiable payloads',
  'Verification APIs designed for industrial scan pipelines, not phone-only UX',
  'Lifecycle intelligence: provenance of create, scan, and verify events',
  'Licensing/credit model for embedded and partner applications',
  'Web prototype has no auth middleware—production JWT path documented in API layer (RampEdge integration)',
];

export const TECH_STACK = [
  {
    category: 'Web (Vercel)',
    items: [
      'Next.js 14 App Router',
      'React 18, TypeScript',
      'Tailwind CSS (#CCFF00 brand)',
      'Leaflet, Recharts, qrcode.react, lucide-react',
    ],
  },
  {
    category: 'Backend & Console',
    items: [
      '.NET 9, ASP.NET Core (Ki8.Api)',
      'Blazor WebAssembly (Ki8.Demo)',
      'Ki8.Core, Ki8.Services, Ki8.Sdk',
      'Ed25519 cryptography',
    ],
  },
  {
    category: 'Contract & Data',
    items: ['OpenAPI 3.1', 'Custom ApiClient (mocked in web)', 'date-fns, clsx'],
  },
  {
    category: 'Deploy & Test',
    items: [
      'Vercel (web-one-kappa-82.vercel.app)',
      'GitHub Pages (docs/ + WASM app)',
      'Playwright E2E, xUnit',
    ],
  },
];

export const ARCHITECTURE_LAYERS = [
  { label: 'Next.js Web', sub: 'Marketing + dashboards (Vercel)' },
  { label: 'Ki8.Api REST', sub: 'Generate · Decode · Verify' },
  { label: 'Ki8.Core / Services', sub: 'Ed25519 · Crypto pipelines' },
  { label: 'GitHub Pages + Blazor', sub: 'Static landing · WASM console' },
];

export const IMPACT = {
  outcomes: [
    'Shipped a 15-route demo UI articulating the machine-code trust layer for partners and investors',
    'Defined product positioning beyond commodity QR—“codes as infrastructure”',
    'Dual deploy path: Vercel for rich dashboards, GitHub Pages for WASM crypto console',
    'OpenAPI + SDK structure ready for integrators; mock-to-live API migration path documented',
  ],
  metrics: [
    { label: 'App routes', value: '15' },
    { label: 'Code formats', value: '4+' },
    { label: 'Frontends', value: '2' },
    { label: 'API spec', value: 'OpenAPI' },
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
    title: 'Partner Portal & Workspaces',
    subtitle: 'Management console for generating cryptographically signed codes and tracking performance metrics',
    shots: [
      {
        src: '/Ki8-Partner-Dashboard.png',
        alt: 'Ki8 Partner Dashboard displaying scan counts, trust score charts, and active assets list',
        caption: 'Partner Dashboard: High-level overview of total scans, success rates, active assets, and chronological trust score metrics.',
      },
      {
        src: '/Ki8-QR- generator.png',
        alt: 'Ki8 QR Code Generator form generating signed QR codes with custom payloads',
        caption: 'QR Code Generator: Cryptographic workspace for minting Ed25519-signed QR codes with optional asset payloads.',
      },
    ],
  },
  {
    title: 'Asset Tracking & Analytics',
    subtitle: 'Auditable transaction history and geo scan tracking across distributed pipelines',
    shots: [
      {
        src: '/Ki8-Assets.png',
        alt: 'Ki8 Assets page showing detailed scan history timeline and GPS check-in locations',
        caption: 'Asset Ledger: Chronological timeline of scan audits tracking location check-ins, device IDs, coordinates, and calculated trust indexes.',
      },
      {
        src: '/Ki8-Analytics.png',
        alt: 'Ki8 Analytics dashboard showing API success rate metrics and trust score tracking charts',
        caption: 'Operations Analytics: Detailed performance monitoring for scanning systems and integration APIs.',
      },
    ],
  },
];

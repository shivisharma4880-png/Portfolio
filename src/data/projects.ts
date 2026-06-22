export interface Project {
  num: string;
  category: string;
  name: string;
  slug?: string;
  tagline?: string;
  caseStudyPath?: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Google Drive file ID for a demo video (opens in a modal) */
  videoId?: string;
  col1img1: string;
  col1img2: string;
  col2img: string;
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Product',
    name: 'Smart Apply',
    slug: 'smart-apply',
    tagline: 'Local AI co-pilot for high-yield LinkedIn job search',
    caseStudyPath: '/projects/smart-apply',
    videoId: '1tbZGx-43cwpja2Bk1kZjOnkPSVVPqRqd',
    githubUrl: 'https://github.com/shivisharma4880-png/linkedin-smart-apply-ai',
    col1img1: '/smart-apply-search-job.png',
    col1img2: '/smart-apply-easy-apply.png',
    col2img: '/smart_apply_ai_poster.png',
  },
  {
    num: '02',
    category: 'Personal',
    name: 'TeleHealth.ai',
    slug: 'telehealth',
    tagline: 'AI-assisted teleconsultation from booking to e-prescription',
    caseStudyPath: '/projects/telehealth',
    liveUrl: 'https://telehealthapp.duckdns.org',
    githubUrl: 'https://github.com/shivisharma4880-png/telehealth-platform',
    col1img1: '/tele-13.png',
    col1img2: '/tele-12.png',
    col2img: '/tele-00.png',
  },
  {
    num: '03',
    category: 'Maker.ai',
    name: 'ki8.io',
    slug: 'ki8-io',
    tagline: 'Machine-code trust layer for signed QR, traceability, and verification',
    caseStudyPath: '/projects/ki8-io',
    liveUrl: 'https://web-one-kappa-82.vercel.app/',
    githubUrl: 'https://github.com/shivisharma4880-png/Ki8.io',
    col1img1: '/Ki8-QR- generator.png',
    col1img2: '/Ki8-Assets.png',
    col2img: '/Ki8-Main-Dashboard.png',
  },
];

export const TELEHEALTH_PROJECT = PROJECTS.find((p) => p.slug === 'telehealth')!;
export const SMART_APPLY_PROJECT = PROJECTS.find((p) => p.slug === 'smart-apply')!;
export const KI8_PROJECT = PROJECTS.find((p) => p.slug === 'ki8-io')!;

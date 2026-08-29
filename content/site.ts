const resumeDocId = "1AWNVX1ZhePLssZPT1YWaEhmemWFKU5I76Aw1Fnhanbc";

export const site = {
  name: "Ibrahim Afolabi",
  handle: "asta-otaku",
  title: "Full Stack Engineer",
  email: "afolabiibrahim08@gmail.com",
  url: "https://asta-otaku.vercel.app",
  location: "Lagos, NG",
  resumeDocId,
  resumeUrl: `https://docs.google.com/document/d/${resumeDocId}/edit?usp=sharing`,
  resumePreviewUrl: `https://docs.google.com/document/d/${resumeDocId}/preview`,
  resumePdfUrl: `https://docs.google.com/document/d/${resumeDocId}/export?format=pdf`,
  photo:
    cloudinary("v1758279104/profile_bgroqb.jpg  "),
  tagline: "I ship product experiences people actually enjoy using.",
  heroSupport:
    "Frontend-focused full stack engineer with 4+ years building scalable web products — React, Next.js, and TypeScript up front, with APIs, integrations, and deployment when the product needs it.",
  specialties: [
    "PRODUCT INTERFACES",
    "DESIGN SYSTEMS",
    "FULL STACK APPS",
    "E-COMMERCE",
  ],
  marquee: [
    "Available for work",
    "Full Stack Engineer",
    "Frontend-heavy",
    "React · Next.js · TypeScript",
    "Lagos → The World",
  ],
  aboutStatement:
    "I am a frontend-focused full stack engineer — leading UI architecture for complex dashboards, multilingual storefronts, and real-time products, while integrating APIs, payments, search, and the services that carry them to production. Four-plus years deep in React, Next.js, and TypeScript, collaborating across product and design to ship software people actually use.",
  aboutHighlights: [
    "frontend-focused",
    "full",
    "stack",
    "dashboards,",
    "multilingual",
    "real-time",
    "APIs,",
    "React,",
    "Next.js,",
    "TypeScript,",
  ],
  aboutDetail:
    "Currently Lead Software Engineer at Estation, owning B2B commerce experience across English, Arabic, and Kurdish — UI systems through search, payments, and real-time features. Previously led Reeka’s property platform from build through launch.",
  education: {
    school: "Obafemi Awolowo University",
    degree: "B.Sc. Computer Engineering (Second Class Upper)",
    place: "Ile-Ife, Nigeria",
  },
  skills: [
    "React",
    "Next.js",
    "React 19",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Radix UI",
    "Mantine",
    "TanStack Query",
    "Node.js",
    "REST / GraphQL",
    "SSE / WebSockets",
    "PostgreSQL",
    "MongoDB",
    "Elasticsearch",
    "Paystack",
    "RTL / i18n",
    "RBAC",
    "Git / CI/CD",
    "Vercel",
    "Figma",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/asta-otaku" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ibrahim-afolabi-074b141a9/",
    },
    { label: "Twitter", href: "https://twitter.com/Afolabi69093815" },
    { label: "Instagram", href: "https://www.instagram.com/_asta_otaku_/" },
  ],
  index: [
    {
      id: "works",
      label: "Selected Works",
      number: "001",
      description: "Featured product interfaces",
    },
    {
      id: "about",
      label: "About",
      number: "002",
      description: "Background & toolchain",
    },
    {
      id: "experience",
      label: "Experience",
      number: "003",
      description: "Where I've built",
    },
    {
      id: "contact",
      label: "Contact",
      number: "004",
      description: "Let's talk",
    },
  ],
} as const;

/** Resize + auto format via Cloudinary so large screenshots don't stall. */
function cloudinary(path: string) {
  return `https://res.cloudinary.com/asta-otaku/image/upload/${path}`;
}

export type FeaturedProject = {
  title: string;
  description: string;
  tech: string[];
  year: string;
  live: string;
  github?: string;
  image: string;
  hue: number;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Caraten",
    description:
      "B2B e-commerce for retailers and wholesalers — multi-language storefronts (EN / AR / KU), RBAC dashboards, real-time notifications, and payment-ready checkout UI.",
    tech: ["Next.js 15", "React 19", "TypeScript", "TanStack Query", "SSE"],
    year: "2025",
    live: "https://caraten.com/en",
    github: "https://github.com/a1-t1/caraten",
    image: cloudinary("v1788021812/seo_wcsi5b.png"),
    hue: 150,
  },
  {
    title: "Leaplearners",
    description:
      "Interactive learning platform for kids — modern data-fetching patterns and a clean, conversion-focused learner experience.",
    tech: ["Next.js", "TypeScript", "Shadcn", "TanStack Query"],
    year: "2025",
    live: "https://www.leaplearners.com/",
    github: "https://github.com/asta-otaku/course_learner",
    image: cloudinary("v1786118787/seo_roynnh.png"),
    hue: 200,
  },
  {
    title: "Reeka",
    description:
      "Full-featured property management platform — listings, Paystack payments, and calendar sync that lifted engagement and cut load time.",
    tech: ["React", "TypeScript", "Tailwind", "Paystack"],
    year: "2024",
    live: "https://portal.reeka.app/",
    github: "https://github.com/asta-otaku/reeka-v2",
    image: cloudinary("v1758279365/seo_uirzuw.png"),
    hue: 160,
  },
  {
    title: "ECMS",
    description:
      "A multi-tenant headless CMS in React + Vite — drag-and-drop content blocks, TipTap editing, and role-based publishing so non-technical users can compose pages without engineering tickets.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "TipTap", "Headless CMS"],
    year: "2024",
    live: "https://cms.kodefield.io/",
    github: "https://github.com/a1-t1/json-cms",
    image: cloudinary(
      "v1786973230/Screenshot_2026-08-17_at_14.24.45_dp24qz.png",
    ),
    hue: 200,
  },
  {
    title: "HaydaSkinco",
    description: "A skincare hub with a clean, product-led storefront UI.",
    tech: ["React", "TypeScript", "Tailwind", "Supabase"],
    year: "2024",
    live: "https://www.haydaskinco.com/",
    github: "https://github.com/asta-otaku/haydaskinco",
    image: cloudinary("v1786973363/seo_nmu8dg.png"),
    hue: 240,
  },
  {
    title: "Flincap",
    description:
      "Mobile-first fintech (crypto) product UI built with React and Next.js — architecture polish, critical bug fixes, and UX that raised satisfaction.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    year: "2023",
    live: "https://flincap.com/",
    github: "https://github.com/Flincap/flin-cap",
    image: cloudinary(
      "v1713437458/Screenshot_from_2024-04-18_11-48-36_wpab6b.png",
    ),
    hue: 320,
  },
  {
    title: "CCI Website",
    description:
      "Celebration Church International website redesign — typed React/Next stack with a clear, accessible public presence.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    year: "2024",
    live: "https://www.joincci.org/",
    image: cloudinary(
      "v1728661529/Screenshot_2024-10-11_at_16.43.00_zpqhop.png",
    ),
    hue: 230,
  },
  {
    title: "Paywater",
    description:
      "Consumer-facing water commerce frontend — responsive UI for browsing and purchasing utility services.",
    tech: ["React", "Tailwind"],
    year: "2023",
    live: "https://paywater.ng",
    github: "https://gitlab.com/hydronamics/frontend/buy-water-website",
    image: cloudinary("v1693572847/paywater-seo_wgm9gs.png"),
    hue: 190,
  },
];

export type OtherProject = {
  title: string;
  description: string;
  tech: string[];
  live: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "RBF Charity",
    description: "The Regentonians' Benevolent Fund | RBF Fund Charity Website",
    tech: ["React", "Next.js", "Tailwind", "Paystack", "Node"],
    live: "https://www.theregentoniansbenevolentfund.org/",
  },
  {
    title: "CreatorWire",
    description:
      "Fast, reliable payments for creators, freelancers, and agencies — with clear tracking for brands.",
    tech: ["React", "Next.js", "Tailwind"],
    live: "https://www.creatorwire.com/",
  },
  {
    title: "Aosea Global Resources Limited",
    description: "Indigenous technical services for Nigeria's Oil & Gas Sector",
    tech: ["React", "Tailwind", "Next.js", "TypeScript"],
    live: "https://www.aoseaglobal.com/",
  },
];

export type Experience = {
  company: string;
  role: string;
  range: string;
  context?: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Estation",
    role: "Lead Software Engineer",
    context: "Ecommerce",
    range: "Jan 2025 — Present",
    highlights: [
      "Led frontend for a B2B e-commerce platform on Next.js 15, React 19, and TypeScript — retailers and wholesalers with EN / AR / KU support.",
      "Architected RBAC dashboards for retailers, wholesalers, and admins across 20+ modules.",
      "Built Elasticsearch-backed search with autocomplete and multi-criteria filters, improving product discovery ~35%.",
      "Shipped SSE real-time notifications and in-app messaging that lifted engagement ~40%.",
      "Implemented multi-gateway payment / checkout UI, order management, and Recharts admin analytics.",
      "Cut load times ~25% via image optimization, prefetching, Suspense, and caching; built Radix / Tailwind / Mantine UI with RTL and mobile-first layout.",
      "Designed a headless JSON CMS so non-technical users can compose content blocks with role-based access.",
    ],
  },
  {
    company: "Reeka",
    role: "Lead Software Engineer",
    context: "Property Management",
    range: "Feb 2024 — Oct 2025",
    highlights: [
      "Led development and launch of a full-featured property management platform in React and TypeScript.",
      "Built listing creation and management flows for property owners.",
      "Integrated Paystack payments, improving payment accuracy and speed ~30%.",
      "Shipped calendar sync for reservations that increased engagement ~40%.",
      "Drove performance work for ~25% faster loads and led a cross-functional delivery team.",
    ],
  },
  {
    company: "Flincap",
    role: "Frontend Engineer",
    context: "Fintech (Crypto)",
    range: "May 2023 — Jan 2024",
    highlights: [
      "Built a responsive, mobile-first React / Next.js app that improved site performance ~20%.",
      "Contributed to frontend architecture and resolved critical bugs with senior engineers.",
      "Iterated UI from user feedback, lifting satisfaction ~15%; took part in reviews and demos.",
      "Helped land architecture changes that improved stability and cut downtime ~15%.",
    ],
  },
  {
    company: "Hydronamics",
    role: "Frontend Intern",
    context: "Advertising · Abuja",
    range: "Dec 2022 — Apr 2023",
    highlights: [
      "Designed and maintained responsive React interfaces across devices.",
      "Partnered with design on pixel-perfect components aligned to business needs.",
      "Improved speed and SEO through code and resource-loading optimizations.",
      "Ran cross-browser testing and fixed compatibility issues.",
    ],
  },
  {
    company: "Qpay",
    role: "Frontend Engineer",
    context: "Financial Services",
    range: "May 2022 — Jan 2023",
    highlights: [
      "Integrated UI with REST APIs, improving system reliability ~15%.",
      "Strengthened UI consistency with Material UI and CSS preprocessors.",
      "Contributed to design discussions and improved user-flow decisions.",
    ],
  },
];

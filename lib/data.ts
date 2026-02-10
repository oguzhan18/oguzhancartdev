export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Turkuvaz Media / PATH",
    category: "Media & CMS Platform",
    image: "/images/project-01.jpg",
    description:
      "Enterprise-scale CMS platform serving millions of readers across Turkey's largest media conglomerate.",
  },
  {
    title: "Teamso HR",
    category: "SaaS HR Platform",
    image: "/images/project-02.jpg",
    description:
      "Complete human resources management system with performance tracking and recruitment modules.",
  },
  {
    title: "Dopinger CMS",
    category: "SEO & AI-Powered CMS",
    image: "/images/project-03.jpg",
    description:
      "AI-integrated content management system with built-in SEO analysis and optimization tools.",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Frontend Architecture",
    description:
      "Scalable, maintainable frontend systems using Micro Frontend, Atomic Design, and modular component architecture.",
  },
  {
    title: "CMS & CRM Development",
    description:
      "Custom content management and customer relationship platforms tailored to enterprise workflows.",
  },
  {
    title: "FinTech & E-Commerce",
    description:
      "Secure, high-performance payment integrations, trading dashboards, and e-commerce storefronts.",
  },
  {
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimization, SSR/SSG strategies, structured data, and search engine visibility.",
  },
];

export const STATS: Stat[] = [
  { value: "6+", label: "Years of Experience", detail: "Since 2018" },
  { value: "20+", label: "Projects Delivered", detail: "Enterprise Scale" },
  { value: "4", label: "Companies Served", detail: "Across Industries" },
  { value: "10+", label: "Technologies Mastered", detail: "Full Stack" },
];

export const TECH_STACK: TechGroup[] = [
  { category: "Frontend Frameworks", items: ["Angular", "React", "Next.js", "Vue.js", "NuxtJS", "Astro"] },
  { category: "Languages & Styling", items: ["TypeScript", "JavaScript", "SASS/SCSS", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend & APIs", items: ["Node.js", "NestJS", "REST API", "WebSocket", "Firebase", "Supabase"] },
  { category: "Tools & DevOps", items: ["Docker", "Git", "Linux", "PostgreSQL", "MongoDB", "Figma"] },
];

export const EXPERIENCE: Experience[] = [
  {
    year: "2023 -- Present",
    role: "Frontend Developer",
    company: "PATH / Turkuvaz Media Group",
    description:
      "Leading frontend architecture for Turkey's largest media conglomerate, building enterprise CMS platforms.",
  },
  {
    year: "2022 -- 2023",
    role: "Frontend Developer",
    company: "Teamso",
    description:
      "Developed comprehensive HR SaaS platform with performance tracking and recruitment modules.",
  },
  {
    year: "2020 -- 2022",
    role: "Frontend Developer",
    company: "Jengal / Dopinger",
    description:
      "Built AI-powered CMS systems and SEO tools serving thousands of businesses.",
  },
  {
    year: "2018 -- 2020",
    role: "Frontend Developer",
    company: "Aifa Soft",
    description:
      "Developed CRM and e-commerce solutions for local and international clients.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What technologies does Oguzhan Cart specialize in?",
    answer:
      "Oguzhan Cart is a Frontend Developer specializing in Angular, React, Next.js, Vue.js, TypeScript, NestJS, and Three.js. He has extensive experience with Docker, Linux server management, PostgreSQL, MongoDB, Firebase, and Supabase.",
  },
  {
    question: "What industries has Oguzhan Cart worked in?",
    answer:
      "Oguzhan has delivered enterprise-scale projects across media and publishing (Turkuvaz Media Group), human resources (Teamso HR), SEO and AI-powered tools (Dopinger), and custom CRM/e-commerce solutions (Aifa Soft).",
  },
  {
    question: "Where is Oguzhan Cart based?",
    answer:
      "Oguzhan Cart is based in Istanbul, Turkey, and is available for both local and international projects. He has experience working with distributed teams across multiple time zones.",
  },
  {
    question: "What is Oguzhan Cart's approach to frontend architecture?",
    answer:
      "Oguzhan follows Atomic Design principles and Micro Frontend architecture patterns to build scalable, maintainable web applications. He emphasizes performance optimization, SEO best practices, and clean code principles.",
  },
];

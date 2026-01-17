import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Saagar Chandiramani",
  initials: "SC",
  url: "https://saagarc96.github.io",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/newyork",
  description:
    "Operations leader who builds AI-powered systems that scale human judgment.",
  summary:
    "I'm an operations leader with 5+ years building systems at [Raina Music](https://rainamusic.com), a premium B2B music curation service for high-end hospitality venues like TAO Group, Kimpton Hotels, and Din Tai Fung. My work sits at the intersection of product, engineering, and operations—I ship production code in React/TypeScript/Node, use LLMs strategically to automate workflows, and build systems that reduce manual effort while preserving human judgment where it matters.",
  avatarUrl: "",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Vercel", icon: null },
    { name: "Prisma", icon: null },
    { name: "Gemini API", icon: null },
    { name: "Prompt Engineering", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "saagar.chandiramani@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/saagar-chandiramani",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:saagar.chandiramani@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Raina Music",
      href: "https://rainamusic.com",
      badges: [],
      location: "New York, NY",
      title: "Director of Operations",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Leading operations, product development, and technical initiatives. Built gemini-music-classifier (full-stack AI system, 40x faster classification). Created work-smarter OS for call intelligence and workflow automation. Driving enterprise client success with TAO Group, Kimpton Hotels, Auberge Resorts.",
    },
    {
      company: "Raina Music",
      badges: [],
      href: "https://rainamusic.com",
      location: "New York, NY",
      title: "Director of Music Programming",
      logoUrl: "",
      start: "2021",
      end: "2024",
      description:
        "Scaled music programming operations from startup to enterprise clients. Built curation workflows and quality standards. Managed distributed team of curators across multiple time zones.",
    },
    {
      company: "Raina Music",
      href: "https://rainamusic.com",
      badges: [],
      location: "New York, NY",
      title: "Music Supervisor",
      logoUrl: "",
      start: "2019",
      end: "2021",
      description:
        "Launched initial music programming workflows. Established client relationships and programming standards. Developed deep expertise in B2B hospitality music curation.",
    },
  ],
  education: [
    {
      school: "New York University",
      href: "https://nyu.edu",
      degree: "BA Individualized Study, Cum Laude (3.8 GPA)",
      logoUrl: "",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "gemini-music-classifier",
      href: "/case-studies/gemini-music-classifier",
      dates: "2024",
      active: true,
      description:
        "Built a full-stack AI classification system in 10 days that reduced manual curation time by 40x. Multi-model AI pipeline (Gemini Flash + Parallel AI + Spotify API), React curator interface with Kanban workflow, 20+ API endpoints, 75+ React components.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Gemini API",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/gemini-music-classifier",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Work-Smarter OS",
      href: "/case-studies/work-smarter-os",
      dates: "2024 - Present",
      active: true,
      description:
        "Built an AI-powered operating system that processes 40+ calls/month and generates actionable intelligence. Call ingestion pipeline, specialized agents for todo extraction, summaries, and product intelligence. COCKPIT.md as living operational dashboard.",
      technologies: [
        "Claude Code",
        "GitHub Actions",
        "Markdown",
        "HubSpot API",
        "Google Sheets API",
      ],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/work-smarter-os",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Q1 2026 Goal Framework",
      href: "/case-studies/q1-goal-framework",
      dates: "2026",
      active: true,
      description:
        "Applied Molly Graham's goal-setting framework to align a distributed team around 3 measurable goals. Simplified targets, explicit ownership, checkpoint accountability, and a 'not doing' list to maintain focus.",
      technologies: [
        "Strategic Planning",
        "OKRs",
        "Team Alignment",
      ],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/q1-goal-framework",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    links?: Array<{ title: string; icon: React.ReactNode; href: string }>;
  }>,
} as const;

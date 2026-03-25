import thumbZenius from "../assets/projects/zenius.png";
import thumbNewsExplorer from "../assets/projects/news-explorer.png";
import thumbTmi from "../assets/projects/tmi-worldwide.png";
import thumbTimeKeeper from "../assets/projects/time-keeper.png";
import thumbPortfolio from "../assets/projects/portfolio.png";
import thumbExpense from "../assets/projects/expense-tracker.png";
import thumbGirlyBlog from "../assets/projects/girly-blog.png";

export type Project = {
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  link: string;
  tech: string[];
  highlights: string[];
  screenshot?: string;
};

export const projects: Project[] = [
  {
    title: "Zenius",
    badge: "AI development · Full-stack web",
    description:
      "Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",
    longDescription:
      "Focus on fast start, anonymity, and honest marketing. Stack: React, TypeScript, Node, APIs, real-time, privacy and performance work.",
    link: "https://zenius.ia.br",
    screenshot: thumbZenius,
    tech: [
      "React",
      "TypeScript",
      "AI / LLM integration",
      "Node.js",
      "REST & real-time APIs",
      "Voice / video",
      "Security & privacy",
      "Responsive UI",
      "Performance",
      "Accessibility",
    ],
    highlights: [
      "Guided flows that do not feel like a tax form",
      "Personas users can choose",
      "Anonymous-first onboarding",
      "Copy and UI that match the topic",
    ],
  },
  {
    title: "News Explorer",
    badge: "Web development · APIs & auth",
    description:
      "Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",
    longDescription:
      "React front, Node/Express and MongoDB back. Rate limits and API boundaries taught a lot.",
    link: "https://jazzmine-flora.github.io/news-explorer/",
    screenshot: thumbNewsExplorer,
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "Auth", "News API"],
    highlights: ["Sign-in and saved articles", "Search that works", "Clear error handling"],
  },
  {
    title: "TMI Worldwide",
    badge: "Design update · Marketing website",
    description:
      "Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",
    longDescription:
      "Live app built and shipped on Lovable. Emphasis on brand tone, trust, and a strong first impression for travel clients.",
    link: "https://tmi-world-welcome.lovable.app/",
    screenshot: thumbTmi,
    tech: ["React", "Vite", "SPA", "Responsive UI", "Marketing / brand"],
    highlights: ["Luxury travel narrative", "Concierge positioning", "Polished responsive layout"],
  },
  {
    title: "Time Keeper",
    badge: "Web app · Mobile-ready UX",
    description:
      "Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",
    longDescription:
      "Live demo on Lovable. Built for quick interaction, readable layout, and a calm, product-first surface.",
    link: "https://time-keeper-crafted.lovable.app/",
    screenshot: thumbTimeKeeper,
    tech: ["React", "Vite", "SPA", "Responsive UI", "Product UI"],
    highlights: ["Tight product flow", "Consistent UI", "Shipped live"],
  },
  {
    title: "This portfolio",
    badge: "Web development · Design & deploy",
    description:
      "React, TypeScript, webpack, HashRouter for GitHub Pages. Copy I rewrote until it sounded right.",
    longDescription: "Custom components and CSS. Deploy is automated.",
    link: "https://jazzmine-flora.github.io",
    screenshot: thumbPortfolio,
    tech: ["React", "TypeScript", "Webpack", "React Router", "CI/CD"],
    highlights: ["Hand-written content", "Static hosting friendly routing", "Favicon pipeline from my asset"],
  },
  {
    title: "Expense Tracker",
    badge: "Web development · Bug fixes & dashboards",
    description:
      "Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",
    longDescription: "Forms, validation, charts. Straight CRUD and dashboards.",
    link: "https://jazzmine-flora.github.io/expense-tracker/",
    screenshot: thumbExpense,
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Charts"],
    highlights: ["Typed models", "Charts match the data", "Clear CRUD"],
  },
  {
    title: "Girls Blog",
    badge: "Full-stack web · Content platform",
    description:
      "Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",
    longDescription:
      "React client, Express and Mongo behind it. Validation, permissions, not losing posts on a bad tab close.",
    link: "https://girly-blogspot.vercel.app/",
    screenshot: thumbGirlyBlog,
    tech: ["React", "Node.js", "Express", "MongoDB", "Auth"],
    highlights: ["Sensible auth", "Repeatable CRUD"],
  },
];

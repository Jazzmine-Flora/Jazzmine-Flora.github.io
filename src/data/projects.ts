/** Stable paths under /projects/ (see scripts/copy-static-assets-to-public.js + public/). */
const projectScreenshot = (file: string) => `${import.meta.env.BASE_URL}projects/${file}`;

export type Project = {
  title: string;
  /** Short labels shown as chips (e.g. primary focus + format). */
  types: string[];
  description: string;
  link: string;
  tech: string[];
  screenshot?: string;
};

export const projects: Project[] = [
  {
    title: "Zenius",
    types: ["AI & product", "Full-stack web"],
    description:
      "Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",
    link: "https://zenius.ia.br",
    screenshot: projectScreenshot("zenius.png"),
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
  },
  {
    title: "News Explorer",
    types: ["Full-stack web", "APIs & auth"],
    description:
      "Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",
    link: "https://jazzmine-flora.github.io/news-explorer/",
    screenshot: projectScreenshot("news-explorer.png"),
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "Auth", "News API"],
  },
  {
    title: "TMI Worldwide",
    types: ["Design refresh", "Marketing site"],
    description:
      "Luxury travel concierge: premium positioning, clear services, and a marketing site that reads high-end without noisy clutter.",
    link: "https://tmi-world-welcome.lovable.app/",
    screenshot: projectScreenshot("tmi-worldwide.png"),
    tech: ["React", "Vite", "SPA", "Responsive UI", "Marketing / brand"],
  },
  {
    title: "Time Keeper",
    types: ["Web app", "Product UX"],
    description:
      "Crafted time and productivity experience: focused flows, clear UI, and a cohesive product feel in the browser.",
    link: "https://time-keeper-crafted.lovable.app/",
    screenshot: projectScreenshot("time-keeper.png"),
    tech: ["React", "Vite", "SPA", "Responsive UI", "Product UI"],
  },
  {
    title: "My Portfolio",
    types: ["Portfolio site", "Design & deploy"],
    description:
      "Personal portfolio on a single page: intro, services, selected work, toolkit, client feedback, and a contact form.",
    link: "https://jazzmine-flora.github.io",
    screenshot: projectScreenshot("portfolio.png"),
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "Three.js",
      "GitHub Actions",
    ],
  },
  {
    title: "Expense Tracker",
    types: ["Web app", "Dashboards & data"],
    description:
      "Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",
    link: "https://jazzmine-flora.github.io/expense-tracker/",
    screenshot: projectScreenshot("expense-tracker.png"),
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Charts"],
  },
  {
    title: "Girls Blog",
    types: ["Full-stack web", "Blog & CMS"],
    description:
      "Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",
    link: "https://girly-blogspot.vercel.app/",
    screenshot: projectScreenshot("girly-blog.png"),
    tech: ["React", "Node.js", "Express", "MongoDB", "Auth"],
  },
];

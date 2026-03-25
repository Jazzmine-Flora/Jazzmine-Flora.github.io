export type ServiceItem = {
  title: string;
  desc: string;
  tags: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Architecture & Scalable Systems",
    desc: "Systems designed to grow. I structure codebases, design APIs, and build foundations that support real-world scale, not just launch-day demos.",
    tags: ["System Design", "Scalability", "Refactoring", "API Design", "Microservices"],
  },
  {
    title: "Full-Stack Web & Mobile",
    desc: "End-to-end applications built with React, Next.js, Node.js, React Native, and modern stacks. Clean frontend, solid backend, and everything wired together properly.",
    tags: ["React", "Next.js", "Node.js", "React Native", "TypeScript", "PostgreSQL"],
  },
  {
    title: "AI Integration & Automation",
    desc: "GPT, Claude, and custom AI models woven into your product: chatbots, intelligent features, and workflow automation that actually works in production.",
    tags: ["OpenAI API", "Claude", "Prompt Engineering", "AI Agents", "Automation"],
  },
];

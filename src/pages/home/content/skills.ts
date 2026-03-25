export type SkillsByCategory = {
  ai: string[];
  frontend: string[];
  backend: string[];
  mobile: string[];
  cloud: string[];
  databases: string[];
};

export const skills: SkillsByCategory = {
  ai: [
    "OpenAI / GPT API", "Claude / Anthropic", "Gemini", "Generative AI",
    "Prompt Engineering", "AI Agents", "Chatbot Development", "AI Model Integration",
    "Machine Learning", "Automation Workflows",
  ],
  frontend: [
    "React", "Next.js", "Angular", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript",
    "HTML5", "CSS3", "Tailwind CSS", "SASS / SCSS", "CSS Grid", "Responsive Design",
    "Figma", "Webflow", "Elementor",
  ],
  backend: [
    "Node.js", "Express", "REST APIs", "GraphQL", "FastAPI", "Laravel", "PHP",
    "Python", "API Integration", "Payment Gateway (Stripe)", "Twilio API",
    "Authentication & Authorization", "WebSockets",
  ],
  mobile: [
    "React Native", "Hybrid Apps", "iOS", "Android",
    "Offline Functionality", "In-App Purchases", "Mobile UI/UX",
  ],
  cloud: [
    "AWS", "Google Cloud", "Microsoft Azure", "Docker", "Vercel", "Netlify",
    "Firebase", "Supabase", "CI/CD", "GitHub Actions", "Website Security",
  ],
  databases: [
    "PostgreSQL", "MongoDB", "MySQL", "Microsoft SQL Server",
    "Firebase Realtime DB", "Prisma", "Mongoose", "Database Modeling",
  ],
};

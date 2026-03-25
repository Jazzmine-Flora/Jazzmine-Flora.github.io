import React, { useCallback, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import HeroCanvas from "../components/HeroCanvas";
import TypingText from "../components/TypingText";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import avatarImg from "../assets/avatar.jpg";
import { testimonials } from "../data/testimonials";
import { projects } from "../data/projects";
import "../styles/main.css";

const PATH_TO_SECTION: Record<string, string> = {
  "/projects": "work",
  "/about": "home",
  "/reviews": "reviews",
  "/contact": "contact",
};

const TYPING_ROLES = [
  "Software Architect",
  "AI Engineer",
  "Full Stack Developer",
  "Mobile App Developer",
];

const services = [
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

const pillars = [
  {
    title: "A product outgrowing its structure",
    body: "The app works, but every new feature takes longer. You need architecture that scales instead of a patchwork of workarounds.",
  },
  {
    title: "A codebase that's becoming fragile",
    body: "People avoid touching certain files. Bugs keep returning. I bring clearer patterns, proper tests, and refactors that stick.",
  },
  {
    title: "A prototype that needs to grow up",
    body: "The demo impressed everyone. Now it needs to handle real users, real errors, edge cases, and the next round of features.",
  },
  {
    title: "AI that needs to actually work",
    body: "Most AI features fail from poor integration, not the model itself. I build the full system around the AI so it's reliable and predictable.",
  },
];

const skills = {
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

const HomePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useRevealOnScroll();

  const scrollTo = useCallback((id: string, path: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  }, [navigate]);

  useLayoutEffect(() => {
    const id = PATH_TO_SECTION[location.pathname];
    if (id) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="homepage homepage--studio page-content">
      {/* ── Hero (dark, 3D canvas) ── */}
      <section className="section section--home hero hero--3d" id="home" aria-labelledby="hero-heading">
        <HeroCanvas />
        <div className="container hero__centered">
          <img src={avatarImg} alt="Taliba Sadiq" className="hero__avatar" draggable={false} />
          <p className="hero__eyebrow hero__eyebrow--glow">Available for projects</p>
          <h1 id="hero-heading" className="hero__title hero__title--3d">
            Taliba Sadiq
          </h1>
          <p className="hero__typing-wrap">
            <TypingText words={TYPING_ROLES} className="hero__typing" />
          </p>
          <p className="hero__intro hero__intro--3d">
            I build software that holds up under real use: scalable systems, intelligent features, and
            code that keeps working as your product grows. Not just launch-day demos, but lasting solutions.
          </p>
          <div className="hero__actions hero__actions--center">
            <button type="button" className="btn btn--primary btn--glow" onClick={() => scrollTo("work", "/projects")}>
              See my work
            </button>
            <button type="button" className="btn btn--ghost btn--ghost-dark" onClick={() => scrollTo("contact", "/contact")}>
              Let&apos;s talk
            </button>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section--services reveal" id="services" aria-labelledby="services-heading">
        <div className="container">
          <span className="section__label">What I do</span>
          <h2 id="services-heading" className="section__heading">
            Three things I do really well
          </h2>
          <p className="section__lead">
            Architecture, full-stack development, and AI integration. I bring clarity to complex problems
            and build systems that are easier to grow.
          </p>
          <div className="services__grid">
            {services.map((s) => (
              <div key={s.title} className="service-card reveal reveal--delay-1">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map((t) => (
                    <span key={t} className="service-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section section--philosophy reveal" id="philosophy" aria-labelledby="philosophy-heading">
        <div className="container">
          <div className="philosophy__head">
            <span className="section__label">When I get involved</span>
            <h2 id="philosophy-heading" className="philosophy__title">
              I focus on what happens after launch
            </h2>
            <p className="philosophy__lead">
              First demos are easy. I focus on the hard part: more features, team changes, and someone new
              opening the repo. Good structure is what keeps you from rewriting everything twice.
            </p>
          </div>
          <div className="pillars__grid">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar-card reveal reveal--delay-1">
                <p className="pillar-card__num">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
          <div className="philosophy__closing reveal">
            <p className="philosophy__closing-text">
              What I bring is <strong>clarity</strong>. Clear structure, clear decisions, and systems that are
              easier to build on as they grow.
            </p>
            <div className="philosophy__traits">
              <span className="philosophy__trait">Clear Communicator</span>
              <span className="philosophy__trait">Detail Oriented</span>
              <span className="philosophy__trait">Solution Oriented</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="section section--work projects-page projects-page--premium reveal" id="work" aria-labelledby="work-heading">
        <div className="container">
          <span className="section__label">Portfolio</span>
          <h2 id="work-heading" className="projects__title">
            Selected work
          </h2>
          <p className="projects__lead">
            Full-stack products, AI features, and scalable systems. Thumbnails are live screenshots of each
            deployed site.
          </p>
          <div className="projects__grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                {project.screenshot ? (
                  <div className="project-card__thumb-wrap">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} site preview`}
                      className="project-card__thumb"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div className="project-card__thumb-wrap project-card__thumb-wrap--placeholder" aria-hidden>
                    <span className="project-card__thumb-placeholder">Preview unavailable</span>
                  </div>
                )}
                <div className="project-card__body">
                  <ul className="project-card__type-list" role="list" aria-label="Project types">
                    {project.types.map((typeLabel, typeIndex) => (
                      <li
                        key={`${project.title}-type-${typeIndex}`}
                        className={`project-card__type-chip${typeIndex === 0 ? " project-card__type-chip--primary" : ""}`}
                      >
                        {typeLabel}
                      </li>
                    ))}
                  </ul>
                  <div className="project-card__about">
                    <h3 className="project-card__title">{project.title}</h3>
                    <div className="project-card__copy">
                      <p className="project-card__desc">{project.description}</p>
                    </div>
                  </div>
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  View project <span className="project-card__arrow" aria-hidden>&rarr;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section section--skills skills-showcase reveal" id="skills" aria-labelledby="skills-heading">
        <div className="container">
          <span className="section__label">Toolkit</span>
          <h2 id="skills-heading" className="skills-showcase__title">
            Technologies I work with
          </h2>
          <p className="skills-showcase__lead">
            AI, web, mobile, cloud, and databases. If something is missing, it probably means I just haven&apos;t
            listed it yet. Ask me.
          </p>
          <div className="skills-showcase__grid">
            <div className="skill-category skill-category--highlight">
              <h3 className="skill-category__title">AI &amp; Intelligence</h3>
              <div className="skill-category__tags">
                {skills.ai.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Frontend</h3>
              <div className="skill-category__tags">
                {skills.frontend.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Backend &amp; APIs</h3>
              <div className="skill-category__tags">
                {skills.backend.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Mobile</h3>
              <div className="skill-category__tags">
                {skills.mobile.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Cloud &amp; DevOps</h3>
              <div className="skill-category__tags">
                {skills.cloud.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Databases</h3>
              <div className="skill-category__tags">
                {skills.databases.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section section--reviews section--testimonials reveal" id="reviews" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="testimonials__head">
            <h2 id="reviews-heading" className="testimonials__title">
              Kind words from collaborators
            </h2>
            <p className="testimonials__lead">
              Short notes from people I&apos;ve worked with. Some names are initials only by request.
            </p>
          </div>
          <ul className="testimonials__list" role="list">
            {testimonials.map((t) => (
              <li key={`${t.name}-${t.role}`} className="testimonial-item">
                <blockquote className="testimonial-item__quote">
                  <p>{t.quote}</p>
                </blockquote>
                <footer className="testimonial-item__cite">
                  <span className="testimonial-item__name">{t.name}</span>
                  <span className="testimonial-item__role">{t.role}</span>
                </footer>
              </li>
            ))}
          </ul>
          <div className="testimonials__cta">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo("contact", "/contact")}>
              Start a conversation
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default HomePage;

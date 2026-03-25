import React, { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";
import ContactSection from "../components/ContactSection";
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

const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "SASS / SCSS",
    "Tailwind CSS",
    "Redux / Zustand",
    "React Query",
    "Webpack",
    "Vite",
    "Responsive UI",
    "Accessibility (WCAG)",
    "Web performance",
  ],
  backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "Prisma",
    "JWT & OAuth",
    "WebSockets",
    "API design",
    "Server-side validation",
  ],
  tools: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "npm / yarn / pnpm",
    "Postman",
    "Jest",
    "React Testing Library",
    "ESLint",
    "Prettier",
  ],
  deployment: [
    "Vercel",
    "Netlify",
    "GitHub Pages",
    "AWS (basics)",
    "CI/CD",
    "Linux / Bash",
    "Environment & secrets",
  ],
  concepts: [
    "System design",
    "Scalability & refactoring",
    "Authentication & authorization",
    "Database modeling",
    "Security practices",
    "Testing strategy",
    "Observability & debugging",
    "Clean code & reviews",
    "Integrations (incl. AI APIs)",
  ],
};

const pillars = [
  {
    title: "Untangling complexity",
    body: "The app works, but new features take longer and the code is hard to follow. I help untangle without a full rewrite.",
  },
  {
    title: "Making fragile code resilient",
    body: "When people avoid changing certain files or bugs keep returning, I bring clearer patterns and safer refactors.",
  },
  {
    title: "Growing prototypes into products",
    body: "The demo worked. Now it needs to hold up for real users, real errors, and the next round of releases.",
  },
  {
    title: "Diagnosing speed & reliability",
    body: "Slow pages, odd failures, or repeat issues. I find the root cause and fix it properly, not just mask it.",
  },
];

const HomePage: React.FC = () => {
  const location = useLocation();

  useRevealOnScroll();

  useLayoutEffect(() => {
    const id = PATH_TO_SECTION[location.pathname];
    if (id) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="homepage homepage--studio page-content">
      {/* ── Home ── */}
      <section className="section section--home hero hero--premium" id="home" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content">
              <p className="hero__eyebrow">Full-Stack Engineer &amp; Builder</p>
              <h1 id="hero-heading" className="hero__title">
                Taliba Sadiq
              </h1>
              <p className="hero__intro">
                I design and build web experiences from the ground up&mdash;thoughtful interfaces, reliable
                APIs, and systems that stay clean long after launch.
              </p>
              <div className="hero__actions">
                <Link to="/projects" className="btn btn--primary">
                  See my work
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Say hello
                </Link>
              </div>
              <div className="hero__social">
                <a
                  href="https://github.com/Jazzmine-Flora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="hero__social-icon" title="GitHub" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/taliba-sadiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="hero__social-icon" title="LinkedIn" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="hero__media">
              <img src={avatarImg} alt="Taliba Sadiq" className="hero__image" />
            </div>
          </div>

          <div className="hero__about about__inner reveal" aria-labelledby="home-about-heading">
            <h2 id="home-about-heading" className="about__title">
              A bit about me
            </h2>
            <div className="about__grid">
              <div className="about__block">
                <p>
                  I trained at <strong>TripleTen</strong> and hold a business degree, which helps when scope,
                  risk, and priorities need a clear conversation with stakeholders.
                </p>
                <p>
                  I gravitate toward problems where the UI looks fine but metrics, logs, or user reports tell a
                  different story. I usually work across the UI, API layer, and database to find root causes and
                  fix them without breaking what already works.
                </p>
              </div>
              <div className="about__block">
                <p>
                  I care about clear loading and error states, sensible validation, and interfaces that respect
                  the user&apos;s time.
                </p>
                <p>
                  I built this site by hand&mdash;one page, lots of love in the details. I write commits and
                  tickets the same way: precise enough for the next engineer or my future self.
                </p>
              </div>
            </div>
            <p className="about__closing">
              If that sounds like what you need or want to build, I&apos;d love to hear what you&apos;re working on.
            </p>
            <div className="about__cta">
              <Link to="/projects" className="btn btn--primary">
                View work
              </Link>
              <Link to="/reviews" className="btn btn--ghost">
                Read reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section section--philosophy reveal" id="philosophy" aria-labelledby="philosophy-heading">
        <div className="container">
          <div className="philosophy__head">
            <span className="section__label">My approach</span>
            <h2 id="philosophy-heading" className="philosophy__title">
              Code that still makes sense in six months
            </h2>
            <p className="philosophy__lead">
              First demos are easy. I focus on what happens after launch: more features, team changes, and
              someone new opening the repo. Good structure is what keeps you from rewriting everything twice.
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
        </div>
      </section>

      {/* ── Execution ── */}
      <section className="section section--execution reveal" id="execution" aria-labelledby="execution-heading">
        <div className="container execution__inner">
          <span className="section__label">What I do</span>
          <h2 id="execution-heading" className="execution__title">
            End to end, from idea to production
          </h2>
          <div className="execution__body">
            <p>
              I ship new products and I fix inherited ones. The usual path: understand how it works today, agree
              what &ldquo;better&rdquo; means, then change as little code as needed. That spans the browser,
              network boundary, services, persistence, and deployment.
            </p>
            <ul className="execution__list">
              <li>Web applications from a blank page through production deploys</li>
              <li>Frontends with React &amp; Next.js: routing, data loading, forms, performance, accessibility</li>
              <li>Backend services: REST and GraphQL, auth, validation, PostgreSQL &amp; MongoDB</li>
              <li>Automated tests, CI pipelines, and environments that don&apos;t surprise the team</li>
              <li>Refactors and incident-style debugging when behavior or latency is wrong</li>
            </ul>
            <p className="execution__skills-line">
              Concrete tools and languages live in the <strong>Toolkit</strong> section below.
            </p>
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="section section--work projects-page projects-page--premium reveal" id="work" aria-labelledby="work-heading">
        <div className="container">
          <h2 id="work-heading" className="projects__title">
            Selected work
          </h2>
          <p className="projects__lead">
            A mix of product UI, APIs, and data work. Thumbnails are live screenshots of each deployed site.
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
                  <div className="project-card__meta">
                    <span className="project-card__badge">{project.badge}</span>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <p className="project-card__long-desc">{project.longDescription}</p>
                  <ul className="project-card__highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="project-card__highlight">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-card__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View project
                  <span className="project-card__arrow" aria-hidden>
                    &rarr;
                  </span>
                </a>
              </article>
            ))}
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
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="testimonial-card">
                <p className="testimonial-card__quote">{t.quote}</p>
                <footer className="testimonial-card__meta">
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="testimonials__cta">
            <Link to="/contact" className="btn btn--primary">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section section--skills skills-showcase reveal" id="skills" aria-labelledby="skills-heading">
        <div className="container">
          <h2 id="skills-heading" className="skills-showcase__title">
            Toolkit
          </h2>
          <p className="skills-showcase__lead">
            Languages, frameworks, data stores, tooling, and delivery. If something is missing, just ask.
          </p>
          <div className="skills-showcase__grid">
            <div className="skill-category">
              <h3 className="skill-category__title">Front-end</h3>
              <div className="skill-category__tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Back-end &amp; data</h3>
              <div className="skill-category__tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Tooling &amp; quality</h3>
              <div className="skill-category__tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Deployment &amp; ops</h3>
              <div className="skill-category__tags">
                {skills.deployment.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category__title">Engineering practice</h3>
              <div className="skill-category__tags">
                {skills.concepts.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default HomePage;

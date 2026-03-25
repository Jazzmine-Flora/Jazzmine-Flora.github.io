import React from "react";
import "../styles/main.css";

type Project = {
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  link: string;
  tech: string[];
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "News Explorer",
    badge: "Full stack · SaaS-style",
    description:
      "Production-oriented news aggregation: search, authentication, saved articles, and third-party API integration—built for clarity and long-term maintainability.",
    longDescription:
      "React and Node/Express with MongoDB; RESTful API design, auth flows, and data modeling suited to evolving product requirements. Suitable as a reference for teams standardizing on a modern MERN-style stack.",
    link: "https://jazzmine-flora.github.io/news-explorer/",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "Auth", "News API"],
    highlights: ["Auth & authorization", "Search & saved collections", "API integration", "Responsive UI"],
  },
  {
    title: "Portfolio (this site)",
    badge: "Front-end · Brand",
    description:
      "A performance-minded marketing and portfolio surface: React, TypeScript, webpack, and a design system tuned for credibility and readability.",
    longDescription:
      "Component architecture, client-side routing, and deployment automation. Intended to read as a senior engineer’s presence—not a template dump.",
    link: "https://jazzmine-flora.github.io",
    tech: ["React", "TypeScript", "Webpack", "React Router", "CI/CD"],
    highlights: ["Type-safe UI", "Hash routing for static hosting", "Automated deploy"],
  },
  {
    title: "What to Wear (WTWR)",
    badge: "Full stack · APIs",
    description:
      "Weather-aware recommendations with real-time external data, persistence, and a UX focused on trust and speed.",
    longDescription:
      "Integrates weather APIs end-to-end with a Node/MongoDB backend and a React client—demonstrating reliable integration patterns and operational thinking.",
    link: "https://www.wat2wear.twilightparadox.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Weather API"],
    highlights: ["External API integration", "Data modeling", "Production-minded UX"],
  },
  {
    title: "Expense Tracker",
    badge: "Full stack · Data UI",
    description:
      "Financial tracking with TypeScript, categorization, and visualization—emphasizing correctness, forms, and maintainable state.",
    longDescription:
      "Showcases TypeScript discipline, charting, and CRUD flows suitable for dashboards and internal tools.",
    link: "https://jazzmine-flora.github.io/expense-tracker/",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Charts"],
    highlights: ["Strong typing", "Visualization", "Validation & CRUD"],
  },
  {
    title: "Girls Blog",
    badge: "Full stack · CMS",
    description:
      "Blogging platform with authentication, content management, and a MongoDB-backed API—structured for extension.",
    longDescription:
      "React client with Express/MongoDB server: auth, post lifecycle, and schema decisions aligned with real content products.",
    link: "https://github.com/Jazzmine-Flora/Girly-Blogspot",
    tech: ["React", "Node.js", "Express", "MongoDB", "Auth"],
    highlights: ["Full-stack architecture", "Auth & CMS patterns", "Content lifecycle"],
  },
];

const ProjectPage: React.FC = () => (
  <div className="projects-page projects-page--premium page-content">
    <section className="section">
      <div className="container">
        <h1 className="projects__title">Selected work</h1>
        <p className="projects__lead">
          Representative builds spanning React/Next-style frontends, Node APIs, databases, and integrations. Each
          project is chosen to reflect how I approach structure, delivery, and production readiness—not weekend demos
          alone.
        </p>
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__badge">{project.badge}</span>
                </div>
                <h2 className="project-card__title">{project.title}</h2>
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
                Open project
                <span className="project-card__arrow" aria-hidden>
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ProjectPage;

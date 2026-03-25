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
    title: "Zenius",
    badge: "Health · AI · Web",
    description:
      "Support by text, voice, or video, with profiles so people can find a fit. Not a generic chatbot wrapper.",
    longDescription:
      "Focus on fast start, anonymity, and honest marketing. Stack: React, TypeScript, Node, APIs, real-time, privacy and performance work.",
    link: "https://zenius.ia.br",
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
    badge: "Full stack",
    description:
      "Search news, save articles, sign in so your list follows you. Search, auth, and a third-party API without a mess.",
    longDescription:
      "React front, Node/Express and MongoDB back. Rate limits and API boundaries taught a lot.",
    link: "https://jazzmine-flora.github.io/news-explorer/",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "Auth", "News API"],
    highlights: ["Sign-in and saved articles", "Search that works", "Clear error handling"],
  },
  {
    title: "This portfolio",
    badge: "This very site",
    description:
      "React, TypeScript, webpack, HashRouter for GitHub Pages. Copy I rewrote until it sounded right.",
    longDescription:
      "Custom components and CSS. Deploy is automated.",
    link: "https://jazzmine-flora.github.io",
    tech: ["React", "TypeScript", "Webpack", "React Router", "CI/CD"],
    highlights: ["Hand-written content", "Static hosting friendly routing", "Favicon pipeline from my asset"],
  },
  {
    title: "What to Wear (WTWR)",
    badge: "Weather · Full stack",
    description:
      "Outfits from local weather. External APIs, persistence, UI that does not blame the user when the network fails.",
    longDescription:
      "React client, Node/Express/MongoDB. Good lesson on external APIs and honest loading states.",
    link: "https://www.wat2wear.twilightparadox.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Weather API"],
    highlights: ["API integration end to end", "Data survives refresh", "Calm UX on errors"],
  },
  {
    title: "Expense Tracker",
    badge: "TypeScript · Data",
    description:
      "Track spending, categorize, chart it. TypeScript when the data shapes get awkward.",
    longDescription:
      "Forms, validation, charts. Straight CRUD and dashboards.",
    link: "https://jazzmine-flora.github.io/expense-tracker/",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Charts"],
    highlights: ["Typed models", "Charts match the data", "Clear CRUD"],
  },
  {
    title: "Girls Blog",
    badge: "Blog · Auth",
    description:
      "Full-stack blog: accounts, posts, MongoDB. Slugs, soft deletes, the usual lessons.",
    longDescription:
      "React client, Express and Mongo behind it. Validation, permissions, not losing posts on a bad tab close.",
    link: "https://github.com/Jazzmine-Flora/Girly-Blogspot",
    tech: ["React", "Node.js", "Express", "MongoDB", "Auth"],
    highlights: ["Sensible auth", "Repeatable CRUD"],
  },
];

const ProjectPage: React.FC = () => (
  <div className="projects-page projects-page--premium page-content">
    <section className="section">
      <div className="container">
        <h1 className="projects__title">Work</h1>
        <p className="projects__lead">
          Real projects under real constraints. I wrote these blurbs myself.
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
                Open it
                <span className="project-card__arrow" aria-hidden>
                  &gt;
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

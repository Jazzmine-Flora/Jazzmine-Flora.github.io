import React from "react";
import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";
import profilePic from "../assets/profile.png";
import { testimonials } from "../data/testimonials";
import "../styles/main.css";

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "SASS / SCSS",
    "Tailwind CSS",
    "Redux / Zustand",
    "React Query",
    "Webpack",
    "Vite",
    "Responsive UI",
    "Accessibility (a11y)",
    "Performance",
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
    "API Design",
  ],
  tools: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "npm / yarn / pnpm",
    "Postman",
    "Jest",
    "React Testing Library",
    "Docker",
  ],
  deployment: [
    "Vercel",
    "Netlify",
    "GitHub Pages",
    "AWS (Basics)",
    "CI/CD",
    "Linux / Bash",
  ],
  concepts: [
    "Architecture & System Design",
    "Scalability & Refactoring",
    "AI Integration",
    "Full Stack Delivery",
    "State Management",
    "Authentication & Authorization",
    "Database Design",
    "Security Best Practices",
    "Clean Code & Maintainability",
  ],
};

const pillars = [
  {
    title: "Outgrowing the current structure",
    body: "When a product is starting to outgrow its foundations and needs clearer boundaries and patterns.",
  },
  {
    title: "Fragile or hard-to-maintain code",
    body: "When the codebase is becoming harder to work with and needs refactoring toward stability.",
  },
  {
    title: "Prototype → production",
    body: "When a prototype must become something stable, observable, and ready for real users.",
  },
  {
    title: "Performance & reliability",
    body: "When performance or reliability issues begin to show up and need systematic resolution.",
  },
];

const HomePage: React.FC = () => (
  <div className="homepage page-content">
    <section className="hero hero--premium">
      <div className="container hero__inner">
        <div className="hero__media">
          <img src={profilePic} alt="Taliba Sadiq" className="hero__image" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">Software architect · Senior full stack</p>
          <h1 className="hero__title">Taliba Sadiq</h1>
          <p className="hero__role-primary">
            Software Architect | React, Next.js, AI, Scalable Systems
          </p>
          <p className="hero__role-secondary">
            Senior Full Stack Developer | React, Next.js, Node, Scalable Apps
          </p>
          <p className="hero__bio hero__bio--lead">
            I build software that holds up under real use—systems that don’t just work in demos, but continue
            to perform as users grow, features expand, and complexity increases.
          </p>
          <p className="hero__bio hero__bio--detail">
            Over the past few years I’ve worked on full stack applications across modern web and AI-driven
            products, with React, Next.js, and backend systems built for real-world usage. I’m often brought in
            when structure needs improvement, codebases need stabilizing, or a prototype must become production-ready.
            What I bring is clarity: clear structure, clear decisions, and systems that are easier to build on as
            they grow.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              Selected work
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Start a conversation
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
      </div>
    </section>

    <section className="section section--philosophy">
      <div className="container">
        <div className="philosophy__head">
          <span className="section__label">Positioning</span>
          <h2 className="philosophy__title">Systems that behave well over time</h2>
          <p className="philosophy__lead">
            My focus is on how software behaves over time—not only how it works on day one. I work across the stack:
            React and Next.js frontends, well-designed APIs, and backend systems structured so everything fits together
            cleanly.
          </p>
        </div>
        <div className="pillars__grid">
          {pillars.map((p, i) => (
            <div key={p.title} className="pillar-card">
              <p className="pillar-card__num">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="pillar-card__title">{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--execution">
      <div className="container execution__inner">
        <span className="section__label">Execution</span>
        <h2 className="execution__title">Full stack delivery</h2>
        <div className="execution__body">
          <p>
            I build full stack applications that are fast, reliable, and ready for real users—whether you’re
            starting from scratch or improving an existing codebase. I work primarily with React and Next.js on the
            frontend and Node.js and modern backend stacks on the server, with an emphasis on code that stays
            understandable and extensible in production.
          </p>
          <ul className="execution__list">
            <li>End-to-end web applications from the ground up</li>
            <li>High-performance, responsive React and Next.js frontends</li>
            <li>API design and backend implementation</li>
            <li>Refactoring messy or hard-to-maintain codebases</li>
            <li>Performance tuning and stabilizing live applications</li>
          </ul>
          <p className="execution__skills-line">
            <strong>Core skills:</strong> React, Next.js, Node.js, APIs, databases, authentication, performance
            optimization—and close attention to how the whole application connects.
          </p>
        </div>
      </div>
    </section>

    <section className="section section--testimonials" id="reviews">
      <div className="container">
        <div className="testimonials__head">
          <h2 className="testimonials__title">Client &amp; collaborator feedback</h2>
          <p className="testimonials__lead">
            A snapshot of how teams describe working together—structure, delivery, and ownership at a senior level.
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
          <Link to="/reviews" className="btn btn--ghost">
            Reviews &amp; references
          </Link>
        </div>
      </div>
    </section>

    <section className="skills-showcase section">
      <div className="container">
        <h2 className="skills-showcase__title">Technical depth</h2>
        <p className="skills-showcase__lead">
          Architecture, implementation, and operations—aligned for modern full stack and AI-adjacent products.
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
            <h3 className="skill-category__title">Back-end</h3>
            <div className="skill-category__tags">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Tools &amp; quality</h3>
            <div className="skill-category__tags">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Deployment</h3>
            <div className="skill-category__tags">
              {skills.deployment.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Architecture &amp; practice</h3>
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
  </div>
);

export default HomePage;

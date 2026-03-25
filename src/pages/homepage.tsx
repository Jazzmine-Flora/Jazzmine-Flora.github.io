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
    title: "Things are getting tangled",
    body: "The app works, but new features take longer and the code is hard to follow. You want help untangling without a full rewrite.",
  },
  {
    title: "The codebase feels fragile",
    body: "People avoid changing certain files, or bugs return. You want clearer patterns and safer refactors.",
  },
  {
    title: "A prototype has to grow up",
    body: "The demo worked; now it needs to hold up for real users, errors, and the next releases.",
  },
  {
    title: "Something is off with speed or reliability",
    body: "Slow pages, odd failures, or repeat issues. You want the cause fixed, not hidden.",
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
          <p className="hero__eyebrow">Full stack · React / Next · Node</p>
          <h1 className="hero__title">Taliba Sadiq</h1>
          <p className="hero__role-primary">
            I design and build web software with React, Next.js, and Node. I use AI when it fits the product.
          </p>
          <p className="hero__role-secondary">
            I care about stable APIs, trustworthy data, and code the next reader can follow.
          </p>
          <p className="hero__bio hero__bio--lead">
            I like work where the product grows: more users, more edge cases, more performance questions. The goal is a
            calmer system, not a louder one.
          </p>
          <p className="hero__bio hero__bio--detail">
            Recent work is full stack apps, React and Next on the front, Node on the back, and AI features when they
            solve a real problem. I take on careful refactors and prototypes that need to survive production.
          </p>
          <p className="hero__bio hero__bio--detail hero__bio--note">
            This site is built in this repo (handwritten copy, same deploy as the app).
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              See what I’ve built
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
      </div>
    </section>

    <section className="section section--philosophy">
      <div className="container">
        <div className="philosophy__head">
          <span className="section__label">How I think about the work</span>
          <h2 className="philosophy__title">Software that still makes sense in six months</h2>
          <p className="philosophy__lead">
            First demos are easy. I focus on what happens after launch: more features, team changes, and someone new
            opening the repo. Good structure is what keeps you from rewriting everything twice.
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
        <span className="section__label">What I actually do</span>
        <h2 className="execution__title">Building and fixing, end to end</h2>
        <div className="execution__body">
          <p>
            I ship new products and I fix inherited ones. The usual path: understand how it works today, agree what
            better means, then change as little code as needed. I spend a lot of time on APIs, data, and the layer
            between UI and server.
          </p>
          <ul className="execution__list">
            <li>New web apps from a blank page or a rough sketch</li>
            <li>React / Next frontends that work on mobile and slow networks</li>
            <li>Backend work: routes, auth, databases, matched to the product</li>
            <li>Refactors when “we can’t touch that file” is a real problem</li>
            <li>Debugging slow or flaky behavior without guessing</li>
          </ul>
          <p className="execution__skills-line">
            <strong>Tools I use often:</strong> React, Next.js, Node, HTTP APIs, Postgres or Mongo when it fits, plus
            tests and deploy. The list below is the full set I have used on real work.
          </p>
        </div>
      </div>
    </section>

    <section className="section section--testimonials" id="reviews">
      <div className="container">
        <div className="testimonials__head">
          <h2 className="testimonials__title">Words from people I’ve worked with</h2>
          <p className="testimonials__lead">
            Short notes people agreed to share. Some names are initials only by request.
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
            Same page, bigger type
          </Link>
        </div>
      </div>
    </section>

    <section className="skills-showcase section">
      <div className="container">
        <h2 className="skills-showcase__title">Skills &amp; tools</h2>
        <p className="skills-showcase__lead">
          What I have used on shipped work. If something is missing, ask.
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
            <h3 className="skill-category__title">How I like to work</h3>
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

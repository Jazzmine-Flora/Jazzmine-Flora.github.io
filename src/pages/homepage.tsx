import React from "react";
import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";
import profilePic from "../assets/profile.png";
import "../styles/main.css";

const skills = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Next.js",
    "HTML5",
    "CSS3",
    "SASS / SCSS",
    "Tailwind CSS",
    "Redux / Zustand",
    "React Query",
    "Webpack",
    "Vite",
    "Responsive Design",
    "Accessibility (a11y)",
    "Performance Optimization",
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
    "Server-Sent Events",
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
    "Component Architecture",
    "State Management",
    "API Integration",
    "Authentication & Authorization",
    "Database Design",
    "Security Best Practices",
    "Agile / Scrum",
    "Clean Code & DRY",
  ],
};

const HomePage: React.FC = () => (
  <div className="homepage page-content">
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__media">
          <img
            src={profilePic}
            alt="Taliba Sadiq"
            className="hero__image"
          />
        </div>
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__title">Taliba Sadiq</h1>
          <p className="hero__tagline">Full-Stack Front-End Developer & Animator</p>
          <p className="hero__bio">
            I build beautiful, scalable web applications using React, TypeScript, and modern JavaScript.
            With expertise spanning front-end architecture, API integration, and database design, I create
            seamless user experiences from concept to deployment. Passionate about clean code, performance,
            and continuous learning.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Get in Touch
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

    <section className="skills-showcase section">
      <div className="container">
        <h2 className="skills-showcase__title">Technical Skills</h2>
        <p className="skills-showcase__lead">
          A full-stack toolkit for building modern, scalable web applications
        </p>
        <div className="skills-showcase__grid">
          <div className="skill-category">
            <h3 className="skill-category__title">Front-End</h3>
            <div className="skill-category__tags">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Back-End</h3>
            <div className="skill-category__tags">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Tools & Workflow</h3>
            <div className="skill-category__tags">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Deployment & DevOps</h3>
            <div className="skill-category__tags">
              {skills.deployment.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category__title">Core Concepts</h3>
            <div className="skill-category__tags">
              {skills.concepts.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;

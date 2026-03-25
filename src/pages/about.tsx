import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const AboutPage: React.FC = () => (
  <div className="about-page about-page--premium page-content">
    <section className="section">
      <div className="container about__inner">
        <h1 className="about__title">About</h1>

        <p className="about__lead">
          I&apos;m <strong className="about__name">Taliba Sadiq</strong>—a software architect and senior full stack
          engineer focused on React, Next.js, Node, and systems that stay maintainable as they scale.
        </p>

        <div className="about__grid">
          <div className="about__block">
            <p>
              I build software that holds up under real use: full stack applications across modern web and
              AI-adjacent products, with emphasis on architecture, APIs, and backends that support real-world
              traffic—not just demos.
            </p>
            <p>
              My background combines rigorous engineering practice with a business-oriented lens. I completed
              intensive software engineering training at <strong>TripleTen</strong>, and hold a bachelor&apos;s
              degree in business—so technical decisions are grounded in product outcomes, not only code aesthetics.
            </p>
          </div>
          <div className="about__block">
            <p>
              I&apos;m often engaged when a product is outgrowing its structure, when a codebase needs refactoring
              toward stability, when a prototype must harden for production, or when performance and reliability need a
              systematic fix—not a superficial patch.
            </p>
            <p>
              Animation and motion inform how I think about interfaces: clarity, timing, and polish—but the core of my
              work is engineering judgment, clear communication, and delivery you can build a roadmap on.
            </p>
          </div>
        </div>

        <h2 className="about__section-title">How I work</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3 className="expertise-item__title">Architecture &amp; systems</h3>
            <p>
              End-to-end thinking: boundaries between frontend, APIs, and data; scalability; refactoring paths; and
              how the system will evolve as features and users grow.
            </p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-item__title">React &amp; Next.js</h3>
            <p>
              Production-grade frontends: performance, routing, data fetching, and patterns that keep large codebases
              navigable for the next developer—including you, six months later.
            </p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-item__title">APIs &amp; backends</h3>
            <p>
              Node.js ecosystems, REST and GraphQL, authentication, databases (SQL and document), and APIs designed for
              clarity and safe evolution.
            </p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-item__title">AI integration</h3>
            <p>
              Practical integration of AI-driven features into web products—where they add value, how to structure
              prompts and services, and how to keep behavior observable and maintainable.
            </p>
          </div>
        </div>

        <h2 className="about__subtitle">Representative projects</h2>
        <ul className="about__list">
          <li className="about__item">
            <strong>News Explorer</strong> — Full-stack news aggregation: search, auth, saved articles, News API
            integration; demonstrates state management and secure API usage at scale.
          </li>
          <li className="about__item">
            <strong>Expense Tracker</strong> — TypeScript-first financial app with categorization, visualization, and
            robust form and data flows.
          </li>
          <li className="about__item">
            <strong>WTWR (What to Wear)</strong> — Weather-driven recommendations with external APIs and full-stack
            persistence.
          </li>
          <li className="about__item">
            <strong>Girls Blog</strong> — Full-stack CMS-style blogging with auth, CRUD, and production-minded MongoDB
            usage.
          </li>
        </ul>

        <p className="about__closing">
          If you&apos;re looking for someone who can think through your system end-to-end and help it scale properly,
          I&apos;d be glad to connect.
        </p>

        <div className="about__cta">
          <Link to="/projects" className="btn btn--primary">
            View projects
          </Link>
          <Link to="/reviews" className="btn btn--ghost">
            Client reviews
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;

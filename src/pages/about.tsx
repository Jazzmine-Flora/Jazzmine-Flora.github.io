import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const AboutPage: React.FC = () => (
  <div className="about-page about-page--premium page-content">
    <section className="section">
      <div className="container about__inner">
        <h1 className="about__title">About</h1>

        <p className="about__lead">
          I&apos;m <strong className="about__name">Taliba Sadiq</strong>. I build full stack software on the web, mostly
          with React, Next.js, and Node. I try to leave codebases easier to work in than I found them.
        </p>

        <div className="about__grid">
          <div className="about__block">
            <p>
              I trained at <strong>TripleTen</strong> and have a business degree. That helps when scope and priorities
              need a clear discussion with founders.
            </p>
            <p>
              I like problems where the UI looks fine but metrics or logs show something else. I usually sit between UI,
              API, and database to find the cause and fix it without breaking what works.
            </p>
          </div>
          <div className="about__block">
            <p>
              I care about motion and small UI details: transitions, loading states, and respect for the user&apos;s
              time.
            </p>
            <p>
              I wrote this site myself so it reads like a person, not a brochure. I write commits the same way: clear
              enough for later.
            </p>
          </div>
        </div>

        <h2 className="about__section-title">Where I’m useful</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3 className="expertise-item__title">Structure &amp; tradeoffs</h3>
            <p>
              Boundaries between UI, APIs, and data; what to refactor now vs later; saying no to shortcuts that cost
              more later.
            </p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-item__title">React &amp; Next</h3>
            <p>
              Real apps: routing, data loading, forms that fail clearly, components that do not turn into copy-paste.
            </p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-item__title">Servers &amp; data</h3>
            <p>
              Node services, REST and some GraphQL, sensible auth, databases chosen for the job.
            </p>
          </div>
          <div className="expertise-item">
            <h3 className="expertise-item__title">AI when it fits</h3>
            <p>
              LLMs in the product where they help, without turning the codebase into hard-to-debug prompts. Reliability
              over demos.
            </p>
          </div>
        </div>

        <h2 className="about__subtitle">Projects I’m proud to point at</h2>
        <ul className="about__list">
          <li className="about__item">
            <strong>Zenius</strong>. Anonymous entry to mental-health support with AI in the loop (
            <a href="https://zenius.ia.br" target="_blank" rel="noopener noreferrer">
              zenius.ia.br
            </a>
            ). Sensitive product; speed and trust matter.
          </li>
          <li className="about__item">
            <strong>News Explorer</strong>. News search, accounts, saved articles, News API. Practice in state, auth, and
            honest errors.
          </li>
          <li className="about__item">
            <strong>Expense tracker</strong>. Numbers, charts, TypeScript, forms.
          </li>
          <li className="about__item">
            <strong>WTWR (“What to Wear”)</strong>. Weather APIs, outfits, external data edge cases.
          </li>
          <li className="about__item">
            <strong>Girls Blog</strong>. Auth, posts, MongoDB, CRUD, hashed passwords.
          </li>
        </ul>

        <p className="about__closing">
          If that matches what you need or want to build, tell me what you are working on.
        </p>

        <div className="about__cta">
          <Link to="/projects" className="btn btn--primary">
            Project write-ups
          </Link>
          <Link to="/reviews" className="btn btn--ghost">
            Short reviews
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;

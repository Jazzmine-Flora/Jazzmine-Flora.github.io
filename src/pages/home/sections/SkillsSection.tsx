import React from "react";
import { skills } from "@/pages/home/content/skills";

const SkillsSection: React.FC = () => (
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
);

export default SkillsSection;

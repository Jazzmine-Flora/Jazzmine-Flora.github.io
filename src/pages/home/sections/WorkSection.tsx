import React from "react";
import { projects } from "../../../data/projects";

const WorkSection: React.FC = () => (
  <section className="section section--work projects-page projects-page--premium reveal" id="work" aria-labelledby="work-heading">
    <div className="container">
      <span className="section__label">Portfolio</span>
      <h2 id="work-heading" className="projects__title">
        Selected work
      </h2>
      <p className="projects__lead">
        Full-stack products, AI features, and scalable systems.
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
                <p className="project-card__desc">{project.description}</p>
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
);

export default WorkSection;

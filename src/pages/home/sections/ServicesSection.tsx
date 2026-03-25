import React from "react";
import { services } from "../content/services";

const ServicesSection: React.FC = () => (
  <section className="section section--services reveal" id="services" aria-labelledby="services-heading">
    <div className="container">
      <span className="section__label">What I do</span>
      <h2 id="services-heading" className="section__heading">
        Three things I do really well
      </h2>
      <p className="section__lead">
        Architecture, full-stack development, and AI integration. I bring clarity to complex problems
        and build systems that are easier to grow.
      </p>
      <div className="services__grid">
        {services.map((s) => (
          <div key={s.title} className="service-card reveal reveal--delay-1">
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
            <div className="service-card__tags">
              {s.tags.map((t) => (
                <span key={t} className="service-card__tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

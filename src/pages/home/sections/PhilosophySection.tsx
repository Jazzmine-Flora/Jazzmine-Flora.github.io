import React from "react";
import { pillars } from "../content/pillars";

const PhilosophySection: React.FC = () => (
  <section className="section section--philosophy reveal" id="philosophy" aria-labelledby="philosophy-heading">
    <div className="container">
      <div className="philosophy__head">
        <span className="section__label">When I get involved</span>
        <h2 id="philosophy-heading" className="philosophy__title">
          I focus on what happens after launch
        </h2>
        <p className="philosophy__lead">
          First demos are easy. I focus on the hard part: more features, team changes, and someone new
          opening the repo. Good structure is what keeps you from rewriting everything twice.
        </p>
      </div>
      <div className="pillars__grid">
        {pillars.map((p, i) => (
          <div key={p.title} className="pillar-card reveal reveal--delay-1">
            <p className="pillar-card__num">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="pillar-card__title">{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
      <div className="philosophy__closing reveal">
        <p className="philosophy__closing-text">
          What I bring is <strong>clarity</strong>. Clear structure, clear decisions, and systems that are
          easier to build on as they grow.
        </p>
        <div className="philosophy__traits">
          <span className="philosophy__trait">Clear Communicator</span>
          <span className="philosophy__trait">Detail Oriented</span>
          <span className="philosophy__trait">Solution Oriented</span>
        </div>
      </div>
    </div>
  </section>
);

export default PhilosophySection;

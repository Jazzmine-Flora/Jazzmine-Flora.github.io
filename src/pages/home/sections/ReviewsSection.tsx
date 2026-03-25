import React from "react";
import { testimonials } from "../../../data/testimonials";
import type { ScrollToHandler } from "../types";

type Props = {
  scrollTo: ScrollToHandler;
};

const ReviewsSection: React.FC<Props> = ({ scrollTo }) => (
  <section className="section section--reviews section--testimonials reveal" id="reviews" aria-labelledby="reviews-heading">
    <div className="container">
      <div className="testimonials__head">
        <h2 id="reviews-heading" className="testimonials__title">
          Kind words from collaborators
        </h2>
        <p className="testimonials__lead">
          What founders and teams say about working together.
        </p>
      </div>
      <ul className="testimonials__list" role="list">
        {testimonials.map((t) => (
          <li key={`${t.name}-${t.role}`} className="testimonial-item">
            <blockquote className="testimonial-item__quote">
              <p>{t.quote}</p>
            </blockquote>
            <footer className="testimonial-item__cite">
              <span className="testimonial-item__name">{t.name}</span>
              <span className="testimonial-item__role">{t.role}</span>
            </footer>
          </li>
        ))}
      </ul>
      <div className="testimonials__cta">
        <button type="button" className="btn btn--primary" onClick={() => scrollTo("contact", "/contact")}>
          Start a conversation
        </button>
      </div>
    </div>
  </section>
);

export default ReviewsSection;

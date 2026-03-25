import React from "react";
import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import "../styles/main.css";

const ReviewsPage: React.FC = () => (
  <div className="reviews-page page-content">
    <section className="section">
      <div className="container">
        <div className="testimonials__head">
          <h1 className="testimonials__title">Reviews</h1>
          <p className="testimonials__lead">
            Short quotes people agreed to share. Initials only when they asked. Ask me for a full reference if we work
            together.
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
          <Link to="/contact" className="btn btn--primary">
            Tell me what you&apos;re building
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ReviewsPage;

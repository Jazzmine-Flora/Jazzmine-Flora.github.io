import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const AboutPage: React.FC = () => (
  <div className="about-page page-content">
    <section className="section">
      <div className="container about__inner">
        <h1 className="about__title">About Me</h1>
        
        <div className="about__grid">
          <div className="about__block">
            <p className="about__lead">
              Hello! I'm <strong className="about__name">Taliba Sadiq</strong>, a full-stack front-end developer
              with a unique blend of technical expertise and business acumen.
            </p>
            <p>
              I completed my software engineering training at <strong>TripleTen</strong>, where I mastered modern
              web development technologies and best practices. Combined with my bachelor's degree in business,
              I bring a strategic perspective to every project, ensuring solutions are not only technically sound
              but also aligned with user needs and business goals.
            </p>
          </div>
          <div className="about__block">
            <p>
              Beyond coding, I have a passion for <strong>animation</strong>, which fuels my creativity and
              attention to detail. This artistic background influences how I approach UI/UX design, always striving
              for smooth interactions, engaging animations, and visually appealing interfaces.
            </p>
            <p>
              I'm passionate about writing clean, maintainable code and staying current with the latest web
              technologies. Whether it's optimizing performance, implementing responsive designs, or building
              robust APIs, I approach every challenge with enthusiasm and precision.
            </p>
          </div>
        </div>

        <div className="about__expertise">
          <h2 className="about__subtitle">What I Do</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3 className="expertise-item__title">Front-End Development</h3>
              <p>
                Building responsive, interactive user interfaces with React, TypeScript, and modern CSS.
                I focus on component architecture, state management, and creating seamless user experiences.
              </p>
            </div>
            <div className="expertise-item">
              <h3 className="expertise-item__title">Back-End Integration</h3>
              <p>
                Developing RESTful APIs with Node.js and Express, designing database schemas with MongoDB,
                and implementing authentication and authorization systems.
              </p>
            </div>
            <div className="expertise-item">
              <h3 className="expertise-item__title">Full-Stack Solutions</h3>
              <p>
                Creating end-to-end applications from database design to deployment, ensuring scalability,
                security, and optimal performance across the entire stack.
              </p>
            </div>
            <div className="expertise-item">
              <h3 className="expertise-item__title">UI/UX Design</h3>
              <p>
                Combining technical skills with design sensibility to create intuitive, accessible,
                and visually appealing interfaces that users love to interact with.
              </p>
            </div>
          </div>
        </div>

        <h2 className="about__subtitle">Featured Projects</h2>
        <ul className="about__list">
          <li className="about__item">
            <strong>News Explorer:</strong> A full-stack news aggregation platform built with React and Node.js.
            Features include article search, user authentication, saved articles management, and integration
            with the News API. Demonstrates advanced state management, API integration, and database operations.
          </li>
          <li className="about__item">
            <strong>Expense Tracker:</strong> A comprehensive financial management application built with React
            and TypeScript. Features include expense categorization, data visualization with charts, and
            persistent data storage. Showcases TypeScript best practices, form handling, and data visualization.
          </li>
          <li className="about__item">
            <strong>Girly Blog:</strong> A full-stack blogging platform with React front-end and Node.js/Express/MongoDB
            back-end. Includes user authentication, CRUD operations for posts, and a modern, responsive design.
            Demonstrates full-stack development capabilities and database design.
          </li>
        </ul>
        
        <p className="about__closing">
          Each project represents a learning journey and showcases my ability to work across the entire
          development stack, from designing user interfaces to implementing robust back-end systems.
        </p>
        
        <div className="about__cta">
          <Link to="/projects" className="btn btn--primary">
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;

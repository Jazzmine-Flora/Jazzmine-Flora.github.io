import React from "react";
import "../styles/main.css";

const projects = [
  {
    title: "News Explorer",
    description: "A comprehensive full-stack news aggregation platform that allows users to search, save, and manage news articles from various sources. Features user authentication, personalized article collections, and seamless API integration.",
    longDescription: "Built with React for the front-end and Node.js/Express for the back-end, this application demonstrates advanced state management, RESTful API design, and MongoDB database operations. Users can search articles, save favorites, and manage their reading lists with a clean, intuitive interface.",
    link: "https://jazzmine-flora.github.io/final-project-frontend/",
    tech: ["React", "JavaScript", "CSS", "Node.js", "Express", "MongoDB", "REST API", "News API", "Authentication"],
    highlights: ["User authentication & authorization", "Article search & filtering", "Saved articles management", "Responsive design"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React and TypeScript, featuring a clean design system and smooth animations.",
    longDescription: "This portfolio demonstrates proficiency in React, TypeScript, and modern CSS practices. Features include responsive design, smooth page transitions, and a component-based architecture. The site showcases technical skills while maintaining excellent performance and accessibility standards.",
    link: "https://jazzmine-flora.github.io",
    tech: ["React", "TypeScript", "JavaScript", "CSS", "Webpack", "React Router"],
    highlights: ["Responsive design", "Component architecture", "TypeScript implementation", "Modern UI/UX"]
  },
  {
    title: "What to Wear App (WTWR)",
    description: "An intelligent weather-based clothing recommendation application that fetches real-time weather data and provides personalized outfit suggestions based on current conditions.",
    longDescription: "This full-stack application integrates with weather APIs to provide real-time data and recommendations. Built with React for the front-end and Node.js/Express/MongoDB for the back-end, it demonstrates API integration, data processing, and user-friendly interface design. Features include location-based weather, clothing suggestions, and weather history tracking.",
    link: "https://www.wat2wear.twilightparadox.com/",
    tech: ["React", "JavaScript", "CSS", "Weather API", "MongoDB", "Node.js", "Express", "Postman"],
    highlights: ["Real-time API integration", "Weather data processing", "User-friendly recommendations", "Database integration"]
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive financial management application for tracking daily expenses with advanced categorization, data visualization, and detailed reporting features.",
    longDescription: "Built with React and TypeScript, this application showcases advanced form handling, state management, and data visualization. Features include expense categorization, interactive charts, filtering and sorting capabilities, and persistent data storage. Demonstrates TypeScript best practices, component composition, and user experience design.",
    link: "https://jazzmine-flora.github.io/expense-tracker/",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JavaScript", "CSS", "Chart.js"],
    highlights: ["TypeScript implementation", "Data visualization", "Form validation", "CRUD operations"]
  },
  {
    title: "Girls Blog",
    description: "A full-stack personal blogging platform with both front-end and back-end capabilities, focused on lifestyle content and inspiration. Features user authentication, post management, and a modern content management system.",
    longDescription: "This project demonstrates full-stack development skills with React front-end and Node.js/Express/MongoDB back-end. Features include user authentication, CRUD operations for blog posts, rich text editing capabilities, and a responsive design. The application showcases database schema design, API development, and secure user management.",
    link: "https://github.com/Jazzmine-Flora/Girly-Blogspot",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS", "Authentication"],
    highlights: ["Full-stack architecture", "Blog CMS functionality", "User authentication", "Content management"]
  },
];

const ProjectPage: React.FC = () => (
  <div className="projects-page page-content">
    <section className="section">
      <div className="container">
        <h1 className="projects__title">Projects</h1>
        <p className="projects__lead">
          A collection of full-stack applications and front-end experiences showcasing my technical skills,
          problem-solving abilities, and passion for creating impactful digital solutions.
        </p>
        <div className="projects__grid">
          {projects.map((project, idx) => (
            <article key={idx} className="project-card">
              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__desc">{project.description}</p>
                {project.longDescription && (
                  <p className="project-card__long-desc">{project.longDescription}</p>
                )}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-card__highlights">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="project-card__highlight">{highlight}</li>
                    ))}
                  </ul>
                )}
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                View project
                <span className="project-card__arrow" aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ProjectPage;

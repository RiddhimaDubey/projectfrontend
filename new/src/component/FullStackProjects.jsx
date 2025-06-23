import React from 'react';
import './ProjectsGrid.css';

const FullStackProjects = () => (
  <section id="fullstack" className="projects-section">
    <h2>Full Stack Projects</h2>
    <div className="projects-grid">
      {[...Array(6)].map((_, i) => (
        <div className="project-card" key={i}>
          <span>Project {i + 1}</span>
        </div>
      ))}
    </div>
  </section>
);

export default FullStackProjects; 
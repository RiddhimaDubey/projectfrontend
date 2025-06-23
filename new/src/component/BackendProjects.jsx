import React from 'react';
import './ProjectsGrid.css';

const BackendProjects = () => (
  <section id="backend" className="projects-section">
    <h2>Backend Integrated Project</h2>
    <div className="projects-grid">
      {[...Array(6)].map((_, i) => (
        <div className="project-card" key={i}>
          <span>Project {i + 1}</span>
        </div>
      ))}
    </div>
  </section>
);

export default BackendProjects; 
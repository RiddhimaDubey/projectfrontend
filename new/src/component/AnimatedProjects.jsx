import React from 'react';
import './ProjectsGrid.css';

const AnimatedProjects = () => (
  <section id="animated" className="projects-section">
    <h2>Animated Project</h2>
    <div className="projects-grid">
      {[...Array(6)].map((_, i) => (
        <div className="project-card" key={i}>
          <span>Project {i + 1}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AnimatedProjects; 
import React, { useEffect, useRef, useState } from 'react';
import './ProjectsGrid.css';

const BackendProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="backend" className={`projects-section ${isVisible ? 'animate-in' : ''}`}>
      <h2 className="section-title-animated">Backend Integrated Project</h2>
      <div className="projects-grid">
        {[...Array(6)].map((_, i) => (
          <div className="project-card animated-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="card-content">
              <span>Project {i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackendProjects; 
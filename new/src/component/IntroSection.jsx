import React, { useEffect, useState } from 'react';
import './IntroSection.css';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`intro-section ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="intro-heading">
        <span className="tech-highlight">Lanos</span> Portfolio Website: Startup Narrative &amp; Service-Centric Copy Deck
      </h1>
      <p className="intro-message">
        Lanos is a mission-driven <span className="tech-highlight">EdTech &amp; R&amp;D</span> startup transforming technology education and innovation. Our flagship initiatives—like the <span className="tech-highlight">Smart Goggle</span> research—exemplify our commitment to next-gen solutions
      </p>
      <div className="tech-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default IntroSection; 
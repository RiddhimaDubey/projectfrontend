import React, { useState, useEffect } from 'react';
import './NavBar.css';
import lanosLogo from '../assets/lanos-logo.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const offsetTop = elementTop - (windowHeight / 2) + (elementHeight / 2);
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-brand">
          <img src={lanosLogo} alt="LANOS Logo" className="lanos-logo" />
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#intro" onClick={() => scrollToSection('intro')} className="nav-link">
            <span>Home</span>
          </a>
          <div className="nav-dropdown">
            <a href="#simple-projects" onClick={() => scrollToSection('simple-projects')} className="nav-link dropdown-trigger">
              <span>Projects</span>
            </a>
            <div className="dropdown-menu">
              <a href="#simple-projects" onClick={() => scrollToSection('simple-projects')} className="dropdown-item">
                Simple Projects
              </a>
              <a href="#animated-projects" onClick={() => scrollToSection('animated-projects')} className="dropdown-item">
                Animated Projects
              </a>
              <a href="#backend-projects" onClick={() => scrollToSection('backend-projects')} className="dropdown-item">
                Backend Projects
              </a>
              <a href="#fullstack-projects" onClick={() => scrollToSection('fullstack-projects')} className="dropdown-item">
                FullStack Projects
              </a>
            </div>
          </div>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
            <span>Contact</span>
          </a>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar; 
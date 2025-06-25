import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SimpleProjects from './component/SimpleProjects';
import AnimatedProjects from './component/AnimatedProjects';
import BackendProjects from './component/BackendProjects';
import FullStackProjects from './component/FullStackProjects';
import IntroSection from './component/IntroSection';
import Footer from './component/Footer';

function App() {
  return (
    <div className="app-root">
      <NavBar />
      <div id="intro" className="section-block">
        <IntroSection />
      </div>
      <hr className="section-divider" />
      <div id="projects" className="section-block">
        <div id="simple-projects">
          <SimpleProjects />
        </div>
      </div>
      <hr className="section-divider" />
      <div id="animated-projects" className="section-block">
        <AnimatedProjects />
      </div>
      <hr className="section-divider" />
      <div id="backend-projects" className="section-block">
        <BackendProjects />
      </div>
      <hr className="section-divider" />
      <div id="fullstack-projects" className="section-block">
        <FullStackProjects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;

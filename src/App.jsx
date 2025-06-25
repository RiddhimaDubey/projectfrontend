import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SimpleProjects from './component/SimpleProjects';
import AnimatedProjects from './component/AnimatedProjects';
import BackendProjects from './component/BackendProjects';
import FullStackProjects from './component/FullStackProjects';
import IntroSection from './component/IntroSection';
import Footer from './component/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import MouseTrail from './component/MouseTrail';

function App() {
  const [introRef, introVisible] = useScrollAnimation(0.2);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.2);
  const [animatedRef, animatedVisible] = useScrollAnimation(0.2);
  const [backendRef, backendVisible] = useScrollAnimation(0.2);
  const [fullstackRef, fullstackVisible] = useScrollAnimation(0.2);
  const [divider1Ref, divider1Visible] = useScrollAnimation(0.5);
  const [divider2Ref, divider2Visible] = useScrollAnimation(0.5);
  const [divider3Ref, divider3Visible] = useScrollAnimation(0.5);
  const [divider4Ref, divider4Visible] = useScrollAnimation(0.5);

  return (
    <div className="app-root">
      <MouseTrail />
      <NavBar />
      <div 
        className={`section-block ${introVisible ? 'animate-in' : ''}`}
        ref={introRef}
      >
        <IntroSection />
      </div>
      <hr 
        className={`section-divider ${divider1Visible ? 'animate-in' : ''}`}
        ref={divider1Ref}
      />
      <div 
        className={`section-block ${projectsVisible ? 'animate-in' : ''}`}
        ref={projectsRef}
      >
        <SimpleProjects />
      </div>
      <hr 
        className={`section-divider ${divider2Visible ? 'animate-in' : ''}`}
        ref={divider2Ref}
      />
      <div 
        id="animated-projects" 
        className={`section-block ${animatedVisible ? 'animate-in' : ''}`}
        ref={animatedRef}
      >
        <AnimatedProjects />
      </div>
      <hr 
        className={`section-divider ${divider3Visible ? 'animate-in' : ''}`}
        ref={divider3Ref}
      />
      <div 
        id="backend-projects" 
        className={`section-block ${backendVisible ? 'animate-in' : ''}`}
        ref={backendRef}
      >
        <BackendProjects />
      </div>
      <hr 
        className={`section-divider ${divider4Visible ? 'animate-in' : ''}`}
        ref={divider4Ref}
      />
      <div 
        id="fullstack-projects" 
        className={`section-block ${fullstackVisible ? 'animate-in' : ''}`}
        ref={fullstackRef}
      >
        <FullStackProjects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;

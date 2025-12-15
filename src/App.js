import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Element name="home">
            <Home />
          </Element>
        );
      case 'skills':
        return (
          <Element name="skills">
            <Skills />
          </Element>
        );
      case 'projects':
        return (
          <Element name="projects">
            <Projects />
          </Element>
        );
      case 'education':
        return (
          <Element name="education">
            <Education />
          </Element>
        );
      case 'experience':
        return (
          <Element name="experience">
            <Experience />
          </Element>
        );
      case 'achievements':
        return (
          <Element name="achievements">
            <Achievements />
          </Element>
        );
      case 'contact':
        return (
          <Element name="contact">
            <Contact />
          </Element>
        );
      default:
        return (
          <Element name="home">
            <Home />
          </Element>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header Section */}
      <header>
        <h1>Ananyashree K G</h1>
        <p>BACKEND DEVELOPER- Nodejs | Data Analytics | PostgreSQL | ClickHouse | Redis | Python | Data Architecture |</p>
      </header>

      {/* Navigation */}
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* Section Blocks */}
      <main>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
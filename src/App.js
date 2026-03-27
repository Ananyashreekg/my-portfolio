import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-16 text-center text-gray-500 border-t border-gray-800">
        © 2026 Ananyashree K G • Built with React + Tailwind
      </footer>
    </div>
  );
}

export default App;
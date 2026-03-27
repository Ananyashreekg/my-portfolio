import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ setActiveTab, activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Skills', path: 'skills' },
    { label: 'Projects', path: 'projects' },
    { label: 'Experience', path: 'experience' },
    { label: 'Education', path: 'education' },
    { label: 'Achievements', path: 'achievements' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">AnanyashreeKG</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveTab(item.path)}
              className={`cursor-pointer hover:text-white transition-colors ${
                activeTab === item.path ? 'text-white font-semibold' : 'text-gray-400'
              }`}
              onClick={() => {
                setActiveTab(item.path);
                setIsOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 py-6">
          <div className="flex flex-col items-center gap-6 text-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveTab(item.path)}
                className={`cursor-pointer hover:text-white transition-colors ${
                  activeTab === item.path ? 'text-white font-semibold' : 'text-gray-400'
                }`}
                onClick={() => {
                  setActiveTab(item.path);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ setActiveTab, activeTab }) => {
  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'Skills', path: 'skills' },
    { label: 'Projects', path: 'projects' },
    { label: 'Education', path: 'education' },
    { label: 'Experience', path: 'experience' },
    { label: 'Achievements', path: 'achievements' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            spy={true}
            smooth={true}
            offset={-70} // Adjust for sticky navbar height
            duration={500}
            className={`font-medium transition px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 cursor-pointer ${
              activeTab === item.path ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700'
            }`}
            onClick={() => setActiveTab(item.path)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
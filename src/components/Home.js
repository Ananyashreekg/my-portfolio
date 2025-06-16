import React from 'react';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="home-content flex items-center justify-center w-full max-w-2xl px-4">
        <div className="text-content">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-700">
            Hi, I'm Ananyashree K G, a passionate software engineer with a keen interest in machine learning and data science.
            I love coding and building innovative solutions that make a difference. Explore my projects, skills, and experiences!
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Home;
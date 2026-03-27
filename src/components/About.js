import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about" className="section bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">About Me</h2>
        
        <div className="space-y-8 text-lg leading-relaxed text-gray-300">
          <p>
            I am a passionate Backend Developer and Computer Science graduate from 
            Nagarjuna College of Engineering and Technology with a CGPA of <span className="text-white font-semibold">9.63 (Top 1 in department)</span>.
          </p>
          
          <p>
            I specialize in building scalable, data-driven systems using modern technologies 
            like Node.js, Express.js, PostgreSQL, ClickHouse, Redis, and Python.
          </p>
          
          <p>
            Currently at Saranyu Technologies, I work on production-grade OTT analytics platforms — 
            designing high-performance RESTful APIs, optimizing ClickHouse queries, and building 
            robust ETL pipelines from AWS S3.
          </p>
          
          <p>
            I enjoy solving complex algorithmic problems, mentoring juniors in Data Structures & Algorithms, 
            and working on exciting projects involving visual search, deep learning, and real-time analytics.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
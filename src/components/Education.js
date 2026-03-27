import React from 'react';
import { Element } from 'react-scroll';

const Education = () => (
  <Element name="education" className="section bg-[#111111]">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-12">Education</h2>
      
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold">Nagarjuna College of Engineering and Technology</h3>
          <p className="text-blue-400">B.E. Computer Science • Jan 2021 – May 2025</p>
          <p className="mt-2 text-gray-400">CGPA: 9.63 (Top 1 in Department)</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Poornaprajna PU College</h3>
          <p className="text-blue-400">Pre-University • May 2019 – Sep 2021</p>
          <p className="text-gray-400">Score: 100%</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Poornaprajna Educational Institution</h3>
          <p className="text-blue-400">SSLC • May 2010 – May 2019</p>
          <p className="text-gray-400">Score: 96%</p>
        </div>
      </div>
    </div>
  </Element>
);

export default Education;
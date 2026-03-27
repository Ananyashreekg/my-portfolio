import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
  return (
    <Element name="skills" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript','Java', 'Python', 'C', 'C++', 'SQL'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-900 rounded-xl text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Backend & Data</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'PostgreSQL', 'ClickHouse', 'Redis', 'Prisma', 'ETL Pipelines', 'MongoDB'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-900 rounded-xl text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Web & Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'React.js'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-900 rounded-xl text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-400">Machine Learning & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Data Preprocessing', 'Neural Networks', 'Power BI', 'ELK Stack', 'Git', 'AWS S3'].map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-gray-900 rounded-xl text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
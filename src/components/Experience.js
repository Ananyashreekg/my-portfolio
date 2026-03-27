import React from 'react';
import { Element } from 'react-scroll';

const Experience = () => {
  return (
    <Element name="experience" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-16">
          {/* Saranyu - Trainee */}
          <div className="experience-item bg-[#111111] p-8 rounded-3xl border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Saranyu Technologies</h3>
                <p className="text-blue-400">Software Engineer Trainee • Sep 2025 – Present • Bengaluru</p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li>Productionized high-performance analytics APIs for OTT platforms using Node.js, Express, PostgreSQL & ClickHouse</li>
              <li>Restructured monolithic codebase into modular services</li>
              <li>Optimized ClickHouse queries with indexing and Redis caching (up to 10x faster)</li>
              <li>Built ETL pipelines from AWS S3 into ClickHouse using Python</li>
            </ul>
          </div>

          {/* Saranyu - Intern */}
          <div className="experience-item bg-[#111111] p-8 rounded-3xl border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Saranyu Technologies</h3>
                <p className="text-blue-400">Software Engineer Intern • Jun 2025 – Sep 2025 • Bengaluru</p>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li>Developed RESTful APIs using Node.js, Express.js and Prisma</li>
              <li>Implemented JWT authentication and role-based authorization</li>
              <li>Worked with PostgreSQL, ClickHouse, and Redis</li>
            </ul>
          </div>

          {/* Add other experiences similarly if you want more */}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
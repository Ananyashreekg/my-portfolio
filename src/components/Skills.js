
import React from 'react';
import { Element } from 'react-scroll';const Skills = () => (
  
  <Element name="skills" className="skills-section">
    <h2>Technical Skills</h2>
    <ul>
      <li><strong>Languages:</strong> Java, Python, C, C++, SQL</li>
      <li>
        <strong>Backend & Data:</strong> Node.js, Express.js, PostgreSQL, MySQL, MongoDB,
        ClickHouse, Redis, Prisma, ETL Pipelines
      </li>
      <li><strong>Web:</strong> HTML, CSS, JavaScript, React.js</li>
      <li>
        <strong>Machine Learning:</strong> Data preprocessing, image classification, 
        neural networks, model development
      </li>
      <li><strong>Analytics & Tools:</strong> Power BI, ELK Stack, Git</li>
    </ul>
  </Element>
);

export default Skills;


import React from 'react';
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element name="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am a backend developer and Computer Science graduate from Nagarjuna College of 
        Engineering and Technology (CGPA 9.63, Top 1 in department). I specialize in 
        building data-driven systems using Node.js, Express.js, PostgreSQL, ClickHouse, 
        Redis, and Python.
      </p>
      <p>
        At Saranyu Technologies, I work on production-grade OTT analytics platforms, 
        designing RESTful APIs, optimizing ClickHouse queries, and implementing ETL 
        pipelines from AWS S3. Earlier, I contributed to data science projects involving 
        multivariate time-series analysis and anomaly detection.
      </p>
      <p>
        I enjoy solving algorithmic problems, mentoring juniors in Data Structures and 
        Algorithms, and building projects in visual search, deep learning, and 
        real-time analytics.
      </p>
    </Element>
  );
};

export default About;

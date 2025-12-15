
import React from 'react';
import { Element } from 'react-scroll';
const Education = () => (
  <Element name="education" className="education-section">
    <h2>Education</h2>

    <div className="education-item">
      <h3>Nagarjuna College of Engineering and Technology</h3>
      <p className="degree">Bachelor of Engineering (Computer Science)</p>
      <p className="meta">Jan 2021 – May 2025 · CGPA: 9.63 (Top 1)</p>
    </div>

    <div className="education-item">
      <h3>Poornaprajna PU College</h3>
      <p className="degree">Pre-University College</p>
      <p className="meta">May 2019 – Sep 2021 · Score: 100%</p>
    </div>

    <div className="education-item">
      <h3>Poornaprajna Educational Institution</h3>
      <p className="degree">SSLC</p>
      <p className="meta">May 2010 – May 2019 · Score: 96%</p>
    </div>
  </Element>
);

export default Education;

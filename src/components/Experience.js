// const Experience = () => (
//   <section id="experience" className="p-8 bg-gray-50 rounded-lg shadow-md">
//     <h2 className="text-3xl font-semibold mb-6 text-blue-800">Experience</h2>
//     <ul className="list-disc ml-6 text-gray-800 space-y-4">
//       <li>
//         <strong>Saranyu Technologies</strong> – Software Engineer Intern<br />
//         <span className="italic">June 2025 – Present | Bengaluru, Karnataka</span>
//       </li>
//       <li>
//         <strong>Nagarjuna College of Engineering and Technology</strong> – Coding Intern<br />
//         <span className="italic">Dec 2024 – Jun 2025 | Devanahalli, Karnataka</span><br />
//         Conducted coding sessions for junior students covering Competitive Programming topics like Recursion, Sorting, Bit Manipulation, Stacks, Queues, and Linked Lists.
//       </li>
//       <li>
//         <strong>AI4SEE Pvt. Ltd.</strong> – Data Science Intern<br />
//         <span className="italic">Nov 2024 – Jan 2025 | Bengaluru, Karnataka</span><br />
//         Created real-time multivariate time series datasets, performed data manipulation, visualization, and anomaly detection.
//       </li>
//       <li>
//         <strong>AQMENZ Automation Pvt. Ltd.</strong> – AI & Data Science Intern<br />
//         <span className="italic">Oct 2023 – Jan 2024</span><br />
//         Applied ML techniques for real-time AI projects; achieved 80% accuracy in a leaf disease prediction model.
//       </li>
//       <li>
//         <strong>Technical Hub</strong> – Python Intern<br />
//         <span className="italic">Sep 2022 – Nov 2022</span>
//       </li>
//     </ul>
//   </section>
// );

// export default Experience;


import React from 'react';
import { Element } from 'react-scroll';
const Experience = () => (
  <Element name="experience" className="experience-section">
    <h2>Experience</h2>

    <div className="experience-item">
      <h3>Saranyu Technologies</h3>
      <p className="role">Software Engineer Trainee · Sep 2025 – Present · Bengaluru South, Karnataka</p>
      <ul>
        <li>
          Productionized high-performance analytics APIs for OTT platforms using Node.js,
          Express.js, PostgreSQL, and ClickHouse.
        </li>
        <li>
          Restructured a monolithic codebase into modular services with clear separation
          of routes, controllers, services, and middleware.
        </li>
        <li>
          Built user funnels, DAU/MAU, and revenue metrics on ClickHouse and optimized
          queries with indexing and Redis caching for up to 10x faster responses.
        </li>
        <li>
          Integrated JWT-based authentication, Redis caching, ELK logging, and
          Nodemailer-based email workflows for secure and observable systems.
        </li>
        <li>
          Led Shemaroo data lake pipelines, implementing ETL workflows and YouTube KPI
          ingestion with Python and AWS S3 into ClickHouse.
        </li>
      </ul>
    </div>

    <div className="experience-item">
      <h3>Saranyu Technologies</h3>
      <p className="role">Software Engineer Intern · Jun 2025 – Sep 2025 · Bengaluru, Karnataka</p>
      <ul>
        <li>
          Built and maintained RESTful backend APIs using Node.js, Express.js, and Prisma
          in a multi-tenant environment.
        </li>
        <li>
          Implemented secure authentication and authorization flows using JWT and
          middleware-based role checks.
        </li>
        <li>
          Worked with PostgreSQL for transactional data, ClickHouse for analytics, and
          Redis for caching frequently accessed queries.
        </li>
        <li>
          Refactored legacy modules to improve structure, readability, and maintainability.
        </li>
        <li>
          Implemented password reset flows via Nodemailer and wrote Python scripts to
          load data from AWS S3 into ClickHouse.
        </li>
      </ul>
    </div>

    <div className="experience-item">
      <h3>Nagarjuna College of Engineering and Technology</h3>
      <p className="role">Technical Intern – Coding Instructor · Dec 2024 – Jun 2025 · Devanahalli, Karnataka</p>
      <ul>
        <li>
          Conducted coding sessions for junior students focused on problem-solving and
          analytical thinking.
        </li>
        <li>
          Taught core DSA topics including recursion, sorting, bit manipulation, stacks,
          queues, and linked lists.
        </li>
        <li>
          Guided students on approaching coding challenges in a structured and efficient way.
        </li>
      </ul>
    </div>

    <div className="experience-item">
      <h3>AI4SEE Pvt. Ltd.</h3>
      <p className="role">Data Science Intern · Nov 2024 – Jan 2025 · Bengaluru, Karnataka</p>
      <ul>
        <li>
          Created large-scale multivariate time-series datasets to track laptop
          performance in real time.
        </li>
        <li>
          Developed ingestion and feature extraction pipelines and applied anomaly
          detection techniques.
        </li>
        <li>
          Performed exploratory data analysis and visualizations to understand system
          behavior and efficiency.
        </li>
      </ul>
    </div>

    <div className="experience-item">
      <h3>Mutual Fund Office Chikkaballapur</h3>
      <p className="role">E‑Service Operator · Jan 2022 – Jun 2025 · Chikkaballapura, Karnataka</p>
      <ul>
        <li>
          Handled customer-facing operations and digital services, ensuring accurate data
          entry and timely service delivery.
        </li>
      </ul>
    </div>
  </Element>
);

export default Experience;

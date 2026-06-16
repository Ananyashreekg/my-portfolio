import React from 'react';
import { Element } from 'react-scroll';
import { Calendar, MapPin, Database, Server, Cpu } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Saranyu Technologies",
      role: "Software Engineering Trainee",
      period: "September 2025 - Present",
      location: "Bengaluru South, Karnataka, India",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      bullets: [
        "Engineered scalable backend systems and high-performance REST APIs using Node.js, enabling secure, modular, and production-ready applications.",
        "Designed and implemented end-to-end data and analytics platforms, including ETL pipelines, data modeling, and real-time KPI tracking for user behavior, revenue, and growth metrics.",
        "Built advanced analytics infrastructure using ClickHouse and Redis, enabling high-speed aggregations, DAU/MAU tracking, retention analysis, and multidimensional reporting.",
        "Architected multi-tenant systems with PostgreSQL and Prisma, incorporating dynamic filtering, role-based access control, and flexible data segmentation.",
        "Developed Python-based automation workflows for data ingestion, transformation, validation, and scheduled processing.",
        "Built Cron Job-driven pipelines to automate data synchronization, reporting, and large-scale synthetic data generation.",
        "Integrated external and internal data sources into centralized analytics systems, ensuring reliable and scalable data availability.",
        "Implemented robust logging, monitoring, and fault-tolerant error handling across backend services and data pipelines.",
        "Optimized database queries, ETL processes, and application workflows, achieving up to 10x improvements in query performance.",
        "Developed responsive React-based dashboards and analytics interfaces with reusable components and seamless API integration.",
        "Collaborated with cross-functional teams to design scalable solutions and deliver data-driven features for business stakeholders."
      ]
    },
    {
      company: "Saranyu Technologies",
      role: "Software Engineer Intern",
      period: "June 2025 - September 2025",
      location: "Bengaluru, Karnataka, India",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      bullets: [
        "Developed backend APIs and application modules using Node.js, contributing to scalable and maintainable software solutions.",
        "Assisted in building ETL pipelines and data processing workflows for analytics and reporting requirements.",
        "Created Python scripts for data extraction, retrieval, transformation, and validation across multiple data sources.",
        "Built automation scripts and Cron Job-based utilities to reduce manual operational tasks and improve workflow efficiency.",
        "Conducted Proof-of-Concepts (PoCs) using Google YouTube Data APIs to retrieve and analyze channel, video, and engagement metrics.",
        "Generated large-scale test datasets using Python to support performance testing, analytics validation, and development activities.",
        "Worked with ClickHouse, PostgreSQL, and Redis to support analytics use cases and optimize data access patterns.",
        "Implemented logging and error-handling mechanisms to improve application reliability and simplify troubleshooting.",
        "Assisted in frontend development using React, building reusable UI components and integrating backend APIs.",
        "Participated in code reviews, debugging, testing, and performance optimization efforts across multiple projects.",
        "Collaborated with senior engineers to design, implement, and deploy new features in production environments."
      ]
    },
    {
      company: "ai4sees private ltd",
      role: "Data Science Intern",
      period: "November 2024 - January 2025",
      location: "Bengaluru, Karnataka, India",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      bullets: [
        "Created real-time multi-variate time series data for laptop performance metrics.",
        "Developed methods to manipulate, clean, and visualize large datasets.",
        "Researched and applied techniques to identify anomalies in time series data."
      ]
    }
  ];

  return (
    <Element name="experience" className="section relative overflow-hidden bg-[#0c0c0e]">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Professional Experience
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-8 space-y-16 py-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#16161a] border-2 border-gray-700 group-hover:border-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {exp.icon}
              </div>

              {/* Card content */}
              <div className="experience-item bg-[#121214] p-8 rounded-2xl border border-gray-800 hover:border-gray-700/80 transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.15)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold text-gray-300 mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 bg-[#1a1a1f] px-3.5 py-1.5 rounded-full border border-gray-800">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#1a1a1f] px-3.5 py-1.5 rounded-full border border-gray-800">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-base leading-relaxed">
                      <span className="text-blue-500 mt-1.5 select-none text-xs">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
import React from 'react';
import { Element } from 'react-scroll';
import { Calendar, MapPin, Database, Server, Cpu } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Saranyu Technologies",
      role: "Software Engineering Trainee",
      period: "September 2025 - Present (10 months)",
      location: "Bengaluru South, Karnataka, India",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      bullets: [
        "Engineered Scalable Backend Systems & High-Performance APIs using Node.js, enabling secure, modular, and production-ready applications.",
        "Designed and Implemented End-to-End Data & Analytics Platforms, including ETL pipelines, data models, and real-time KPI tracking for user behavior, revenue, and growth.",
        "Built Advanced Analytics Infrastructure using ClickHouse & Redis, delivering high-speed query performance, user funnels (DAU/MAU), and multi-dimensional insights.",
        "Architected Multi-Tenant Systems with PostgreSQL & Prisma, incorporating dynamic filtering, secure access control, and flexible data segmentation.",
        "Optimized System Performance and Reliability by refactoring monolithic codebases, enhancing data pipelines, and developing Python scripts for data generation & robust error handling (achieving up to 10x query speed improvements).",
        "Developed Responsive and High-Performance Frontend Applications using React, implementing reusable components, state management, and seamless API integration to deliver intuitive, data-driven user interfaces."
      ]
    },
    {
      company: "Saranyu Technologies",
      role: "Software Engineer Intern",
      period: "June 2025 - September 2025 (4 months)",
      location: "Bengaluru, Karnataka, India",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      bullets: [
        "Engineered Scalable Backend Systems & High-Performance APIs using Node.js, enabling secure, modular, and production-ready applications.",
        "Designed and Implemented End-to-End Data & Analytics Platforms, including ETL pipelines, data models, and real-time KPI tracking for user behavior, revenue, and growth.",
        "Built Advanced Analytics Infrastructure using ClickHouse & Redis, delivering high-speed query performance, user funnels (DAU/MAU), and multi-dimensional insights.",
        "Architected Multi-Tenant Systems with PostgreSQL & Prisma, incorporating dynamic filtering, secure access control, and flexible data segmentation.",
        "Optimized System Performance and Reliability by Refactoring Monolithic Codebases, Enhancing Data Pipelines, and Developing Python Scripts for Data Generation & Robust Error Handling (achieving up to 10x query speed improvements)."
      ]
    },
    {
      company: "ai4sees private ltd",
      role: "Data Science Intern",
      period: "November 2024 - January 2025 (3 months)",
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
import React from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
  const projects = [
    {
      title: "Visual Search Integration with API",
      link: "https://github.com/Ananyashreekg/Visual-search-integration-with-API",
      tagline: "Large Language Model-Based Visual Search Engine",
      points: [
        "Integrated LLM to improve visual search relevance and generate refined recommendations",
        "Built React.js frontend supporting image and text queries",
        "Developed Django + FAISS backend for efficient vector similarity search",
        "Optimized retrieval latency using multimodal embeddings"
      ]
    },
    {
      title: "Human Activity Recognition using CNN",
      link: "https://github.com/Ananyashreekg/HUMAN-ACTIVITY-RECOGNITION",
      tagline: "Real-Time Video Classification with Deep Learning",
      points: [
        "Implemented CNN model for spatio-temporal feature extraction",
        "Preprocessed large video dataset with frame extraction and augmentation",
        "Achieved improved accuracy through hyperparameter tuning",
        "Built interactive dashboard for real-time predictions"
      ]
    },
    {
      title: "Personalized News Aggregator",
      link: "https://github.com/Ananyashreekg/PERSONALISED-NEWS-AGGREGATOR",
      tagline: "Tkinter-based News App with External APIs",
      points: [
        "Developed clean category-based desktop UI using Tkinter",
        "Integrated real-time news APIs across multiple domains",
        "Implemented keyword filtering and personalization"
      ]
    },
    {
      title: "Quiz App using React.js",
      link: "https://github.com/Ananyashreekg/reactquizapp",
      tagline: "Interactive Web Quiz Platform",
      points: [
        "Built modular quiz app with reusable React components",
        "Added instant feedback and score tracking",
        "Focused on smooth user experience and engagement"
      ]
    }
  ];

  return (
    <Element name="projects" className="section bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-item bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-gray-600 group">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                <a href={project.link} target="_blank" rel="noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-400 mb-6 italic">{project.tagline}</p>
              
              <ul className="space-y-4 text-gray-300">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-emerald-400 mt-1">↗</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
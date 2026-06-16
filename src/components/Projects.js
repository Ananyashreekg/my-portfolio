import React from 'react';
import { Element } from 'react-scroll';
import { Github, Folder, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Visual Search Integration with API",
      link: "https://github.com/Ananyashreekg/Visual-search-integration-with-API",
      tagline: "Large Language Model-Based Visual Search Engine",
      tags: ["LLM", "React.js", "Django", "FAISS", "Vector Search", "Python"],
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
      tags: ["CNN", "Deep Learning", "Python", "Computer Vision", "Video Classification"],
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
      tags: ["Python", "Tkinter", "APIs", "Desktop App"],
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
      tags: ["React.js", "Frontend", "JavaScript", "Web App"],
      points: [
        "Built modular quiz app with reusable React components",
        "Added instant feedback and score tracking",
        "Focused on smooth user experience and engagement"
      ]
    }
  ];

  return (
    <Element name="projects" className="section relative overflow-hidden bg-[#0a0a0c]">
      {/* Decorative background gradients */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between bg-[#121214] p-8 rounded-2xl border border-gray-800 hover:border-gray-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.15)]"
            >
              <div>
                {/* Header: Folder icon & external links */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#1a1a1f] rounded-xl border border-gray-800 text-blue-400 group-hover:text-white transition-colors duration-300">
                    <Folder className="w-6 h-6" />
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2.5 bg-[#1a1a1f] hover:bg-[#22222a] rounded-xl border border-gray-800 text-gray-400 hover:text-white transition-all duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline">
                    {project.title}
                  </a>
                </h3>

                {/* Tagline */}
                <p className="text-gray-400 mb-5 text-sm font-medium italic">
                  {project.tagline}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1 bg-[#1a1a1f] text-blue-400/90 rounded-full border border-gray-800/80 group-hover:border-blue-500/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 mb-8 text-gray-300 text-sm leading-relaxed">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <span className="text-emerald-400 mt-1 select-none text-xs">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-gray-800/60 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-400 transition-colors duration-300 group/btn"
                >
                  Explore Codebase
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
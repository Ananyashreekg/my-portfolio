
import React from 'react';
import { Element } from 'react-scroll';
const Projects = () => (
  <Element name="projects" className="projects-section">
    <h2>Projects</h2>

    <div className="project-item">
      <h3>
        <a href="https://github.com/Ananyashreekg/Visual-search-integration-with-API" target="_blank" rel="noreferrer">
          Visual Search Integration with API
        </a>
      </h3>
      <p className="tagline">Large Language Model-Based Visual Search Engine</p>
      <ul>
        <li>
          Integrated a large language model to improve visual search relevance and
          generate refined recommendations from image inputs.
        </li>
        <li>
          Developed a React.js frontend supporting both image and text queries for a 
          seamless user experience.
        </li>
        <li>
          Built backend APIs with Django and FAISS for efficient similarity search over
          vector embeddings.
        </li>
        <li>
          Optimized retrieval latency using multimodal embeddings and indexed vector search.
        </li>
      </ul>
    </div>

    <div className="project-item">
      <h3>
        <a href="https://github.com/Ananyashreekg/HUMAN-ACTIVITY-RECOGNITION" target="_blank" rel="noreferrer">
          Human Activity Recognition using CNN
        </a>
      </h3>
      <p className="tagline">Real-Time Video Classification with Deep Learning</p>
      <ul>
        <li>
          Implemented a CNN-based model to extract spatio-temporal features and classify
          human activities from video streams.
        </li>
        <li>
          Preprocessed a large video dataset with frame extraction, normalization, and
          data augmentation.
        </li>
        <li>
          Improved accuracy across multiple activity classes via systematic
          hyperparameter tuning.
        </li>
        <li>
          Built an interactive dashboard to display predictions and confidence scores in
          real time.
        </li>
      </ul>
    </div>

    <div className="project-item">
      <h3>
        <a href="https://github.com/Ananyashreekg/PERSONALISED-NEWS-AGGREGATOR" target="_blank" rel="noreferrer">
          Personalized News Aggregator
        </a>
      </h3>
      <p className="tagline">Tkinter-based News App with External APIs</p>
      <ul>
        <li>
          Developed a desktop news aggregator using Python and Tkinter with a clean,
          category-based UI.
        </li>
        <li>
          Integrated external news APIs to fetch real-time articles across multiple
          domains.
        </li>
        <li>
          Implemented keyword-based filtering and category selection to personalize the
          news feed.
        </li>
      </ul>
    </div>

    <div className="project-item">
      <h3>
        <a href="https://github.com/Ananyashreekg/reactquizapp" target="_blank" rel="noreferrer">
          Quiz App using React.js
        </a>
      </h3>
      <p className="tagline">Interactive Web Quiz Platform</p>
      <ul>
        <li>
          Built a modular quiz application in React.js with reusable components for
          questions, timers, and score tracking.
        </li>
        <li>
          Implemented instant feedback and scoring to improve engagement and learning
          outcomes.
        </li>
      </ul>
    </div>
  </Element>
);

export default Projects;

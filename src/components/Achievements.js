import React from 'react';
import { Element } from 'react-scroll';

const Achievements = () => (
  <Element name="achievements" className="section">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-12 text-center">Achievements</h2>
      <ul className="max-w-2xl mx-auto space-y-6 text-lg">
        <li className="flex gap-4">
          <span className="text-3xl">🏆</span>
          <div>5-star rating on HackerRank + 200+ problems solved on LeetCode & GFG</div>
        </li>
        <li className="flex gap-4">
          <span className="text-3xl">🥈</span>
          <div>Secured 2nd place in two inter-college coding competitions</div>
        </li>
        <li className="flex gap-4">
          <span className="text-3xl">🌟</span>
          <div>Awarded Best Student in the department for academic excellence</div>
        </li>
      </ul>
    </div>
  </Element>
);

export default Achievements;
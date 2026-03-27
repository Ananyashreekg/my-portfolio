import React from 'react';
import { Element } from 'react-scroll';

const Contact = () => (
  <Element name="contact" className="section bg-[#111111]">
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-bold mb-12">Let's Connect</h2>
      
      <div className="space-y-8 text-xl">
        <p>Karnataka, India</p>
        <p>Phone: <a href="tel:7795941236" className="hover:text-blue-400">77959 41236</a></p>
        <p>
          Email:{' '}
          <a href="mailto:ananyashreekg933@gmail.com" className="hover:text-blue-400 underline">
            ananyashreekg933@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/ananyashree-k-g-72830a241/" target="_blank" rel="noreferrer" className="hover:text-blue-400 underline">
            linkedin.com/in/ananyashree-k-g-72830a241
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/Ananyashreekg" target="_blank" rel="noreferrer" className="hover:text-blue-400 underline">
            github.com/Ananyashreekg
          </a>
        </p>
      </div>
    </div>
  </Element>
);

export default Contact;
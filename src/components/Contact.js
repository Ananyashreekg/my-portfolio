// components/Contact.js (unchanged)
import React from 'react';

const Contact = () => (
  <section id="contact" className="p-8">
    <h2 className="section-title">Contact Me</h2>
    <div className="max-w-600 mx-auto">
      <p className="text-center mb-6">Feel free to reach out via email or connect with me on social media!</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
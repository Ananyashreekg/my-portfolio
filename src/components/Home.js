import { Element, Link } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" className="section flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-6 z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-6 py-2.5 border border-gray-700 rounded-full text-sm tracking-[3px] text-gray-400">
          BACKEND DEVELOPER &amp; DATA ENGINEER
        </div>

        <h1 className="text-7xl md:text-[6.5rem] font-bold leading-none tracking-tighter mb-8">
          ANANYASHREE K G
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
          Building high-performance backend systems and analytics platforms with Node.js, 
          ClickHouse, and Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="projects" 
            smooth={true}
            duration={500}
            offset={-80}
            className="px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-300 text-lg cursor-pointer"
          >
            View My Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true}
            duration={500}
            offset={-80}
            className="px-10 py-4 border border-gray-600 hover:border-white rounded-2xl transition-all duration-300 text-lg cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"></div>
      </div>
    </Element>
  );
};

export default Home;
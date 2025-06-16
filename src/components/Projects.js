const Projects = () => {
    const projects = [
      {
        name: "Leaf Disease Detection",
        description: "Used Sequential Deep Learning model to classify leaf health status.",
        tech: "Python, TensorFlow, Deep Learning"
      },
      {
        name: "Personalized News Aggregator",
        description: "Custom news delivery using APIs and ML for user preferences.",
        tech: "React.JS, Node.JS, ML"
      },
      {
        name: "Quiz App",
        description: "Interactive React-based quiz application.",
        tech: "React.JS"
      },
      {
        name: "Visual Search Engine with VLLM",
        description: "Search interface integrating visual large language model without CNN.",
        tech: "React.JS, Django, FAISS"
      }
    ];
  
    return (
      <section id="projects" className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.name} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p>{p.description}</p>
              <p className="text-sm text-gray-500 mt-1">{p.tech}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  
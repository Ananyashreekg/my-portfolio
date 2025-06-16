const Skills = () => {
  const skills = {
    "Programming Languages": ["Java ", "Python ", "C ", "C++ ", "C# "],
    "Web Development": ["HTML ", "CSS ", "JavaScript"],
    "Frameworks/Libraries": ["React.JS ", "Node.JS ", "TensorFlow ", "Numpy ", "Pandas ", "PowerBI "],
    "Machine Learning": ["Image Classification ", "Neural Networks ", "ML Models "],
    "Databases": ["MySQL ", "MongoDB ", "Django "],
  };

  return (
    <section id="skills" className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skillList.map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

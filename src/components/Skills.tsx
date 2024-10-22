import React from 'react';
import { Code, Database, Smartphone, Server, Settings, Terminal } from 'lucide-react';

const skillsData = [
  { name: 'Manual Testing', icon: <Terminal size={40} /> },
  { name: 'Automated Testing', icon: <Code size={40} /> },
  { name: 'API Testing', icon: <Server size={40} /> },
  { name: 'Mobile Testing', icon: <Smartphone size={40} /> },
  { name: 'Database Testing', icon: <Database size={40} /> },
  { name: 'Performance Testing', icon: <Settings size={40} /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="text-indigo-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-center text-gray-600">
                Proficient in {skill.name.toLowerCase()} techniques and tools.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
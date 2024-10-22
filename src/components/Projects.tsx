import React from 'react';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'E-commerce Platform Testing',
    description: 'Conducted comprehensive UI, functional, and system testing for a large-scale e-commerce platform, ensuring a seamless user experience across desktop and mobile devices.',
    technologies: ['Cypress', 'Scandium', 'JMeter', 'Postman'],
  },
  {
    title: 'Mobile Banking App QA',
    description: 'Led the QA efforts for a mobile banking application, focusing on security testing, performance optimization, and cross-platform compatibility.',
    technologies: ['Sacndium', 'TestRail'],
  },
  {
    title: 'Healthcare Management System',
    description: 'Developed and executed test cases for a complex healthcare management system, ensuring data integrity, HIPAA compliance, and system reliability.',
    technologies: ['JIRA', 'Scandium', 'SoapUI'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                View Details <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
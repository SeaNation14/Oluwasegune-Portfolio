import React from 'react';
import { CheckCircle } from 'lucide-react';
// import oluwasegun from '../img/';
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://drive.google.com/file/d/1YiYwtgQpHqGGof0IbIZgQ57RydqpooPk/view?usp=drive_link"
              alt="Oluwasegun Elijah Afolayan"
              />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              I'm Oluwasegun Afolayan, a passionate QA Engineer with 5+ years of
              experience in ensuring the quality of web and mobile applications.
              My expertise lies in UI, functional, and system testing, with a
              keen eye for detail and a commitment to delivering high-quality
              software.
            </p>
            <ul className="space-y-2">
              {[
                'UI Testing',
                'Functional Testing',
                'System Testing',
                'Mobile App Testing',
                'Test Automation',
              ].map((skill, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

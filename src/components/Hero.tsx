import React from 'react';
import { Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Oluwasegun Elijah Afolayan</h1>
        <h2 className="text-2xl md:text-3xl mb-8">QA Engineer</h2>
        <p className="text-xl mb-8">Ensuring quality in web and mobile applications</p>
        <a
          href="#contact"
          className="inline-flex items-center bg-white text-indigo-700 font-bold py-3 px-6 rounded-full hover:bg-indigo-100 transition duration-300"
        >
          <Briefcase className="mr-2" size={20} />
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">QA Engineer</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
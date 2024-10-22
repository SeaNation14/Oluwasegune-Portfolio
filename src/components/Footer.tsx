import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Oluasegun Elijah Afolayan - QA Engineer. All rights reserved.</p>
        <p className="mt-2">Designed and built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
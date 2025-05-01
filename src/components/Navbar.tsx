import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

import logo from '../Assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navClasses = scrolled 
    ? 'fixed w-full bg-white shadow-md transition-all duration-300 z-50' 
    : 'fixed w-full bg-transparent transition-all duration-300 z-50';

  const textColor = scrolled ? 'text-gray-800' : 'text-white';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <GraduationCap size={32} className={textColor} /> */}
          <img src={logo} alt="GITA Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className={`text-xl md:text-2xl font-bold ${textColor}`}>
            GITA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Academics', 'Testimonials', 'News', 'Support'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${textColor} hover:text-blue-600 transition-colors duration-300`}
            >
              {item}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
            Support Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`${textColor} focus:outline-none`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Academics', 'Testimonials', 'News', 'Support'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full">
              Support Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
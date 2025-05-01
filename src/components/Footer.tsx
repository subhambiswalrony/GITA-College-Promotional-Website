import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

import logo from '../Assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="GITA Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              <h3 className="text-xl font-bold text-white">GITA</h3>
            </div>
            <p className="mb-4 opacity-75">
              Join us on our transformative journey as we continue to evolve and shape the future of education. Your support makes all the difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#academics" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">Academic Excellence</a></li>
              <li><a href="#testimonials" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#gallery" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">Gallery</a></li>
              <li><a href="#news" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">News & Events</a></li>
              <li><a href="#support" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">Support Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1 text-blue-400" />
                <span className="opacity-75">GITA Autonomous College Bhubaneswar, Badaraghunathpur,Madanpur, Bhubaneswar</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-blue-400" />
                <span className="opacity-75">8260045026,8260045006</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@gita.edu" className="opacity-75 hover:opacity-100 hover:text-blue-300 transition-colors duration-300">gita@gita.edu.in</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
            <p className="mb-4 opacity-75">
              Subscribe to our newsletter to stay updated with the latest news and developments.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-75 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} GITA. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm opacity-75">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
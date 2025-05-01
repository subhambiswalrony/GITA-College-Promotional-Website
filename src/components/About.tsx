import React from 'react';
import aboutpic from '../Assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey to University Status</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={aboutpic} 
              alt="College Campus" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">A Legacy of Excellence</h3>
            <p className="text-gray-700 mb-6">
              Established in 1985, our institution has grown from a small college to a renowned center for higher education 
              and research. With a commitment to academic excellence and innovation, we've consistently ranked among the top 
              educational institutions in the region.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why University Status?</h3>
            <p className="text-gray-700 mb-6">
              Transitioning to a university represents the natural evolution of our institution. This status will allow us 
              to expand our academic offerings, enhance research capabilities, forge stronger international partnerships, 
              and provide students with a globally recognized degree.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">35+</h4>
                <p className="text-gray-700">Years of Academic Excellence</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">25,000+</h4>
                <p className="text-gray-700">Alumni Worldwide</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">98%</h4>
                <p className="text-gray-700">Placement Rate</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">150+</h4>
                <p className="text-gray-700">Research Publications</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision & Mission</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-blue-700 mb-4">Vision</h4>
              <p className="text-gray-700">
                To be a globally recognized university that nurtures innovative thinkers and leaders who drive positive 
                change in society through excellence in education, research, and community engagement.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-blue-700 mb-4">Mission</h4>
              <p className="text-gray-700">
                To provide transformative education that empowers students with knowledge, skills, and values to excel 
                in their chosen fields and contribute meaningfully to society while advancing knowledge through cutting-edge 
                research and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
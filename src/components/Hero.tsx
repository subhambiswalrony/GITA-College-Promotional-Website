import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';


const SLIDES = [
  {
    title: "Transforming Education",
    subtitle: "Our journey from college to university",
    image: "https://images.jdmagicbox.com/comp/bhubaneshwar/h4/0674px674.x674.191120193444.j3h4/catalogue/gita-campus-bhubaneshwar-universities-enclwykgey.jpg",
  },
  {
    title: "Academic Excellence",
    subtitle: "Building the future through innovation",
    image: "https://images.jdmagicbox.com/comp/bhubaneshwar/h4/0674px674.x674.191120193444.j3h4/catalogue/gita-campus-bhubaneshwar-universities-7z8mbdq35b.jpg",
  },
  {
    title: "Join Our Journey",
    subtitle: "Be part of this historic transformation",
    image: "https://images.jdmagicbox.com/comp/bhubaneshwar/h4/0674px674.x674.191120193444.j3h4/catalogue/gita-campus-bhubaneshwar-universities-9cwg29s9yw.jpg",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          {SLIDES[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          {SLIDES[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center">
            Learn More <ChevronRight size={20} className="ml-2" />
          </a>
          <a href="#support" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center">
            Support Us <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 flex space-x-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
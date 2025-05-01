import React, { useState } from 'react';

import campus from "../Assets/campus.jpg";
import classroom from "../Assets/IMG-20240618-WA0007.jpg";
import entrance from "../Assets/entrance.jpg";
import library from "../Assets/library.png";
import lab from "../Assets/lab.png";
import workshop from "../Assets/workshop.jpg";

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: campus,
    alt: "Campus Building",
    category: "campus"
  },
  {
    id: 2,
    src: entrance,
    alt: "Campus Entrance",
    category: "campus"
  },
  {
    id: 3,
    src: library,
    alt: "Central library",
    category: "events"
  },
  {
    id: 4,
    src: workshop,
    alt: "Student Workshop",
    category: "students"
  },
  {
    id: 5,
    src: classroom,
    alt: "Classroom",
    category: "academics"
  },
  {
    id: 6,
    src: lab,
    alt: "University Lab",
    category: "research"
  }
];

// Categories for filtering
const categories = [
  "all",
  "campus",
  "academics",
  "students",
  "events",
  "research"
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter images based on category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Campus Life Gallery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant campus life through this collection of images showcasing our facilities, events, and student activities.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group h-64"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
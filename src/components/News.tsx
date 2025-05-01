import React, { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

import event from "../Assets/event.png";
import achieve from "../Assets/achieve.jpg";
import reunion from "../Assets/reunion.jpg";

// News & Events data
const newsItems = [
  {
    id: 1,
    title: "University Status Application Submitted",
    date: "October 15, 2023",
    category: "Milestone",
    excerpt: "A formal application for university status has been submitted to the higher education regulatory body after meeting all eligibility criteria.",
    image: achieve
  },
  {
    id: 2,
    title: "College Hackathon 2024",
    date: "September 3 & 4, 2023",
    category: "Event",
    excerpt: "Leading researchers and academicians from around the world will gather for our annual international conference on emerging technologies.",
    image: event
  },
  // {
  //   id: 3,
  //   title: "New Research Center Inauguration",
  //   date: "December 5, 2023",
  //   category: "Announcement",
  //   excerpt: "The state-of-the-art Center for Artificial Intelligence and Data Science will be inaugurated by the Minister of Education.",
  //   image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800"
  // },
  // {
  //   id: 4,
  //   title: "Industry-Academia Partnership",
  //   date: "January 20, 2024",
  //   category: "Collaboration",
  //   excerpt: "A landmark partnership with leading technology companies to enhance research capabilities and provide industry exposure to students.",
  //   image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=800"
  // },
  {
    id: 5,
    title: "Alumni Reunion Weekend",
    date: "February 15, 2024",
    category: "Event",
    excerpt: "Join us for a weekend of nostalgia, networking, and celebration as we welcome back our distinguished alumni.",
    image: reunion
  },
  // {
  //   id: 6,
  //   title: "Infrastructure Expansion Project",
  //   date: "March 10, 2024",
  //   category: "Development",
  //   excerpt: "Construction begins on new academic blocks, research laboratories, and student facilities as part of our expansion plan.",
  //   image: "https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=800"
  // }
];

// Categories for filtering
const newsCategories = [
  "All",
  "Milestone",
  "Event",
  "Announcement",
  "Collaboration",
  "Development"
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredNews = activeCategory === "All"
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News & Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and events related to our journey towards university status.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {newsCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                
                <a 
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  Read more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* More News Button */}
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors duration-300"
          >
            View All News & Events
          </a>
        </div>
        
        {/* Events Calendar Teaser */}
        <div className="mt-20 bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Upcoming Events</h3>
            <p className="text-gray-600">Mark your calendar for these important events and be part of our journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItems.filter(item => item.category === "Event").slice(0, 2).map(event => (
              <div key={event.id} className="bg-white rounded-lg p-4 flex items-start">
                <div className="bg-blue-600 text-white rounded-lg p-3 text-center mr-4 flex-shrink-0">
                  <Calendar size={24} className="mx-auto mb-1" />
                  <div className="text-sm font-bold">{event.date.split(' ')[0]}</div>
                  <div className="text-xs">{event.date.split(' ')[1].replace(',', '')}</div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">{event.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{event.excerpt}</p>
                  <a 
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm mt-2 transition-colors duration-300"
                  >
                    Event details <ChevronRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <a 
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
            >
              View Full Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
import React, { useRef, useState, useEffect } from 'react';

// Timeline data
const timelineEvents = [
  {
    year: "2004",
    title: "Foundation",
    description: "Established as a small college with just 3 departments and 200 students."
  },
  {
    year: "2008",
    title: "Expansion",
    description: "Added 10 new departments and constructed the Central Library and Research Center."
  },
  {
    year: "2020",
    title: "Autonomous Status",
    description: "Granted autonomous status, allowing greater academic freedom and curriculum design."
  },
  {
    year: "2021",
    title: "Research Excellence",
    description: "Recognized for research contributions with a 5-star rating from national accreditation bodies."
  },
  {
    year: "2022",
    title: "International Partnerships",
    description: "Established collaborations with 15+ universities worldwide for student and faculty exchange."
  },
  // {
  //   year: "2020",
  //   title: "Digital Transformation",
  //   description: "Implemented comprehensive digital infrastructure for blended learning and virtual research."
  // },
  {
    year: "2023",
    title: "University Application",
    description: "Submitted application for university status after meeting all eligibility criteria."
  },
  {
    year: "2025",
    title: "University Status",
    description: "Projected timeline for official university status recognition and inauguration."
  }
];

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Auto-scrolling effect
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;
    
    const timeline = scrollRef.current;
    const maxScroll = timeline.scrollWidth - timeline.clientWidth;
    
    const scrollInterval = setInterval(() => {
      if (scrollPosition >= maxScroll) {
        setScrollPosition(0);
      } else {
        setScrollPosition(prev => prev + 1);
      }
    }, 50);
    
    timeline.scrollLeft = scrollPosition;
    
    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling, scrollPosition]);
  
  return (
    <section id="timeline" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growth Journey</h2>
          <p className="max-w-3xl mx-auto opacity-80">
            From our humble beginnings to our aspirations for university status, explore the key milestones that define our journey of growth and excellence.
          </p>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        {/* Timeline Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide timeline-container" 
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Timeline Track */}
            <div className="flex space-x-12 pl-4 pr-20">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex-none w-72 relative">
                  <div className="bg-blue-800 rounded-lg p-6 h-full">
                    <div className="absolute -top-1 left-0 bg-amber-500 text-blue-900 font-bold px-4 py-1 rounded">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mt-4 mb-2">{event.title}</h3>
                    <p className="text-blue-100">{event.description}</p>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-700"></div>
          
          {/* Scroll indicator */}
          <div className="absolute right-0 bottom-0 flex items-center justify-center bg-blue-800 p-2 rounded-tl-lg">
            <p className="text-sm font-medium opacity-80 mr-2">
              {isAutoScrolling ? "Auto-scrolling" : "Hover to pause"}
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Join Us for the Next Milestone</h3>
          <p className="max-w-2xl mx-auto opacity-80 mb-6">
            Be part of our historic transformation as we embrace the future as a prestigious university.
          </p>
          <a 
            href="#support"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-6 py-3 rounded-md transition-colors duration-300"
          >
            Support Our Transition
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
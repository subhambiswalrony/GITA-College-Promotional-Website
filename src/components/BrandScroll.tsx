import React, { useEffect, useRef } from 'react';
import infosys from "../Assets/company/infosys.svg";
import wipro from "../Assets/company/wipro.png";
import accenture from "../Assets/company/accenture.png";
import cognizant from "../Assets/company/cog.png";
import capgamini from "../Assets/company/cap.png";

// Partner logos



const partners = [
  {
    id: 1,
    // name: "TCS",
    logo: infosys,
  },
  {
    id: 2,
    // name: "Wipro",
    logo: wipro,
  },
  {
    id: 3,
    // name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png",
  },
  {
    id: 4,
    // name: "TCS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png",
  },
  {
    id: 5,
    // name: "Accenture",
    logo: accenture,
  },
  {
    id: 6,
    // name: "Capgemini",
    logo: capgamini,
  },
  {
    id: 7,
    // name: "Cognizant",
    logo: cognizant,
  }
];

// Duplicate partners array to create seamless loop
const duplicatedPartners = [...partners, ...partners];

const BrandScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!scrollRef.current) return;
    
    // Animation for smooth scrolling
    const animate = () => {
      if (!scrollRef.current) return;
      
      // If we've scrolled to the halfway point, reset to the beginning
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += 1;
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Partners & Collaborators</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We proudly collaborate with leading organizations, institutions, and foundations that support our vision.
          </p>
        </div>
        
        {/* Auto-scrolling brand container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlay on left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10"></div>
          
          {/* Scrolling brand container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex space-x-16 px-10">
              {duplicatedPartners.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-none w-40 h-20 rounded-lg shadow-sm flex items-center justify-center  duration-300"
                >
                  {/* Using placeholder colored rectangles instead of actual logos */}
                  <div 
                    className="w-full h-full rounded flex items-center justify-center text-white font-bold"
                    style={{ background: `url(${partner.logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {/* {partner.name} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlay on right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Interested in partnering with us? <a href="#support" className="text-blue-600 hover:underline">Get in touch</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandScroll;
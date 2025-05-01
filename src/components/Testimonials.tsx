import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import chairman from "../Assets/chairman.jpg";
import viceChairman from "../Assets/vicechairman.jpg";
import secretery from "../Assets/secretary.jpg";
import principal from "../Assets/princi.jpg";


const testimonials = [
  {
    id: 1,
    name: "Manmath Kumar Roul",
    role: "Principal, GITA",
    image: principal,
    text: "The academic environment fostered my growth not just as a student, but as a researcher and innovator. The faculty's mentorship prepared me for my current role at a leading tech company."
  },
  {
    id: 2,
    name: "Biranchi Narayan Panda",
    role: "Vice chairman",
    image: viceChairman,
    text: "Quality education and research have been the focal point of our vision for imparting technical education in Eastern India, and we go a long way in making our vision a reality. I believe that we provide an impetus for continuous growth which would boost our teaching standards."
  },
  {
    id: 3,
    name: "Dr. Chandradhwaj Panda",
    role: "Secretery, GITA",
    image: secretery,
    text: "We live in a world that is driven intensely by knowledge where literally and figuratively, Knowledge is Power. Exercising this power with diligence and dynamism is a formidable task and requires a mindset that is a combination of wisdom and professionalism; which truly reflects in Dr. Chandradhwaj Panda who is an iconic figure in the technical education in eastern India."
  },
  {
    id: 4,
    name: "Satya Prakash Panda",
    role: "Chairman, GITA",
    image: chairman,
    text: "The difference between the dreamer and innovator is that a dreamer just dreams and an innovator creates his own path to realize ideas which others think as impossible. That streak of originality is the distinct quality that makes Dr. Satya Prakash Panda, Chairman, Gandhi Group as the brightest star of education horizon of Eastern India."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((current + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Message From Their Desks</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our Pillars that how they build our institution and shaped their academic.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="relative bg-blue-50 p-8 md:p-12 rounded-xl shadow-sm"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Quote size={40} className="text-blue-600 absolute top-6 left-6" />
            
            <div className="relative overflow-hidden" style={{ minHeight: '250px' }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0"
                >
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <motion.img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name}
                      className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    <motion.div 
                      className="md:ml-4 text-center md:text-left mt-4 md:mt-0"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-gray-800">{testimonials[current].name}</h4>
                      <p className="text-blue-600">{testimonials[current].role}</p>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-700 text-lg italic"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{testimonials[current].text}"
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between mt-8">
              <motion.button 
                onClick={() => paginate(-1)}
                className="bg-white hover:bg-blue-100 p-2 rounded-full shadow-sm transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-blue-600" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === current ? 'bg-blue-600' : 'bg-blue-200'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></motion.button>
                ))}
              </div>
              
              <motion.button 
                onClick={() => paginate(1)}
                className="bg-white hover:bg-blue-100 p-2 rounded-full shadow-sm transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-blue-600" />
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Experience</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Are you an alumnus or current student? We'd love to hear how your journey at our institution has shaped your career and personal growth.
          </p>
          <motion.a 
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Story
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
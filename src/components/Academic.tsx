import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, Globe, Lightbulb, Award } from 'lucide-react';
import achademicPic from '../Assets/research.jpg';

const Academic = () => {
  const features = [
    {
      icon: <BookOpen size={24} className="mb-4 text-blue-600" />,
      title: "Diverse Programs",
      description: "Over 50 undergraduate and graduate programs spanning across various disciplines."
    },
    {
      icon: <Users size={24} className="mb-4 text-blue-600" />,
      title: "Expert Faculty",
      description: "200+ PhD holders and industry experts dedicated to academic excellence."
    },
    {
      icon: <Lightbulb size={24} className="mb-4 text-blue-600" />,
      title: "Research Centers",
      description: "12 specialized research centers focusing on emerging technologies and innovations."
    },
    {
      icon: <Globe size={24} className="mb-4 text-blue-600" />,
      title: "Global Partnerships",
      description: "Collaborations with 30+ international universities and research institutions."
    },
    {
      icon: <GraduationCap size={24} className="mb-4 text-blue-600" />,
      title: "Career Success",
      description: "98% placement rate with top companies across various industries."
    },
    {
      icon: <Award size={24} className="mb-4 text-blue-600" />,
      title: "Accreditations",
      description: "Recognized by premier national and international accreditation bodies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Excellence</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our commitment to academic excellence is reflected in our innovative programs, distinguished faculty, and state-of-the-art facilities that prepare students for global challenges.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <motion.img 
                src={achademicPic} 
                alt="Research Facilities" 
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="md:w-1/2 p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Research & Innovation</h3>
                <p className="text-gray-700 mb-6">
                  As we transition to university status, our focus on research and innovation will intensify. 
                  Our faculty and students are already engaged in groundbreaking research across disciplines, 
                  and university status will enable us to expand our research infrastructure and attract more funding.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Research Areas:</h4>
                <ul className="list-disc pl-5 mb-6 text-gray-700">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Sustainable Energy Solutions</li>
                  <li>Healthcare Innovation</li>
                  <li>Smart Cities and Urban Planning</li>
                  <li>Digital Humanities</li>
                </ul>
                
                <motion.a 
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Research Initiatives
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academic;
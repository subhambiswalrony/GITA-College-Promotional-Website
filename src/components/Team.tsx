import React, { useRef, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

// import user1 from "../Assets/Subham.jpg";
import user2 from "../Assets/Viveka.png";
import user3 from "../Assets/rony.jpg";

const creators = [
  {
    name: "Subham Biswal",
    role: "Lead Developer",
    img: user3,
    desc: "Engineered the interactive features and ensured smooth, responsive design.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vivekananda Champati",
    role: "Lead Designer",
    img: user2,
    desc: "Crafted the visual identity and user experience with meticulous attention to detail.",
    linkedin: "#",
    github: "#",
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.16, type: "spring", stiffness: 66 },
  }),
};

const WebsiteCreators = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run if GSAP and sectionRef are available
    if (sectionRef.current && gsap) {
      try {
        // Simple animation without ScrollTrigger
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          }
        );
      } catch (error) {
        console.log("GSAP animation error:", error);
      }
    }
  }, []);

  return (
    <section
      id="creators"
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary/70 to-secondary/20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-playfair font-bold text-center mb-10 text-black drop-shadow-lg"
          initial={{ opacity: 0, y: -32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Website <span className="text-secondary">Creators</span>
        </motion.h2>
        <motion.div
          className={`flex flex-wrap justify-center gap-8 text-center`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {creators.map((cr, i) => (
            <motion.div
              key={cr.name}
              className="bg-dark-purple/30 rounded-xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform group"
              custom={i}
              variants={cardVariants}
            >
              <motion.img
                src={cr.img}
                alt={cr.name}
                className="mb-4 w-32 h-32 rounded-full object-cover mx-auto border-4 border-secondary shadow-md group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.12 }}
              />
              <div className="mb-2 font-semibold text-xl text-secondary">{cr.name}</div>
              <div className="text-sm text-primary mb-2">{cr.role}</div>
              <div className="text-xs text-black/80 mb-4">{cr.desc}</div>
              <div className="flex gap-4 justify-center">
                <a
                  href={cr.linkedin}
                  className="text-blue/80 hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={cr.github}
                  className="text-blue/80 hover:text-secondary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WebsiteCreators;
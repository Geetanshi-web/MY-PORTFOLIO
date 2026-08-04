import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 
    'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 'Redux', 'SQL'
  ];

  return (
    <section id="about" className="py-20 bg-white text-black transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
             I am a motivated and passionate Computer Science student with a strong interest in software development, problem-solving, and building real-world applications. I enjoy working across the full stack and have hands-on experience developing web applications using technologies such as React,WordPress, Node.js, MongoDB, and Express.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
             Alongside development, I actively practice Data Structures and Algorithms in python to strengthen my logical thinking and improve my ability to solve complex problems efficiently. I have worked on multiple academic and personal projects, including backend systems, MERN-based platforms, multilingual applications, and problem-solving tools. These projects have given me practical exposure to API design, database management, authentication, and real-time features.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              I am eager to apply my knowledge in a professional environment, contribute to meaningful projects, and grow as a software engineer while learning from real-world challenges and collaborative teams.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-black"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-center border border-gray-300 hover:border-black transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium text-black">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const fallbackImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80';

  const handleImageError = (event) => {
    event.currentTarget.src = fallbackImage;
  };

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

  const projects = [
    {
      id: 1,
      title: "Government Queue Management System",
      description: "A smart government service platform built to reduce waiting time, streamline daily queue flow, and improve citizen experience through real-time updates.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      githubLink: "https://github.com/Geetanshi-web/govtqueue",
      liveLink: "https://govtqueue-beta.vercel.app/",
      image: `${process.env.PUBLIC_URL}/images/Government%20Queue%20Management%20system.jpg.png`
    },
    {
      id: 2,
      title: "Rakshaa",
      description:"Rakshaa is an AI-powered disaster management platform that provides real-time alerts, safe route guidance, emergency resources, and community support to help people stay prepared and safe during disasters.",
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Geetanshi-web/Rakshaa",
      liveLink: "https://rakshaa-1.onrender.com",
      image: `${process.env.PUBLIC_URL}/images/Rakshaa.jpg`
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "A clean and modern finance dashboard that helps users monitor income, expenses, and budget trends through a polished, data-driven interface.",
      techStack: ["React", "TailwindCSS", "JavaScript", "Charts"],
      githubLink: "https://github.com/Geetanshi-web/Finance-dash",
      liveLink: "https://finance-dash-o5ui.vercel.app/",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      title: "Intern-Track",
      description: "A full-stack internship tracking application that helps students organize applications, manage progress, and stay focused on career growth.",
      techStack: ["React", "TailwindCSS", "JavaScript", "MongoDB", "Node", "Express", "Html5"],
      githubLink: "https://github.com/Geetanshi-web/InternTrack",
      liveLink: "https://intern-track-mu.vercel.app/",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 text-black transition-colors duration-300">
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
            Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover opacity-90"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2 text-black"
                  whileHover={{ color: "#333333" }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-black text-xs rounded-md font-medium border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubLink ? (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GithubIcon size={16} />
                      Code
                    </motion.a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg text-sm font-medium cursor-not-allowed">
                      <GithubIcon size={16} />
                      Code
                    </span>
                  )}
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLinkIcon size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

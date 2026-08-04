import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Hero = () => {
  const profileImage = `${process.env.PUBLIC_URL}/images/Geetanshi.jpg`;
  const fallbackImage = 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80';

  const handleImageError = (event) => {
    event.currentTarget.src = fallbackImage;
  };

  // Animation variants for text and buttons
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Blurry Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundPosition: 'center top',
            filter:'blur(12px) brightness(0.3)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      {/* Main content */}
      <motion.div
        className="text-center z-10 px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Photo Section */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <img
                src={profileImage}
                alt="Geetanshi"
                onError={handleImageError}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
             />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              variants={itemVariants}
            >
                Geetanshi
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl mb-6 text-gray-200"
              variants={itemVariants}
            >
              Aspiring Software Developer
            </motion.p>
            
            {/* Additional Description */}
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg"
              variants={itemVariants}
            >
              Passionate software developer with a keen eye for detail and a love for clean, efficient code. 
              I enjoy building user-friendly applications that solve real-world problems.
            </motion.p>
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
          >
            View Projects
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/Geetanshi-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/geetanshi-9a4989292?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon size={24} />
          </motion.a>
          <motion.a
            href="mailto:sgeetanshi1@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <MailIcon size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDownIcon size={24} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

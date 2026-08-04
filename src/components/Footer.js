import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/Geetanshi-web',
      color: 'hover:text-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/geetanshi-9a4989292?',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: MailIcon,
      href: 'mailto:sgeetanshi1@gmail.com',
      color: 'hover:text-purple-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.h2
            className="text-3xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            Geetanshi
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Passionate MERN Stack Developer creating amazing web experiences
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            variants={itemVariants}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  y: -3
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={itemVariants}
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            className="border-t border-gray-700 pt-8"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Geetanshi. All rights reserved. Made with ❤️ and React.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            y: -5,
            scale: 1.1
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon size={20} className="text-black" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
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

  return (
    <section id="contact" className="py-20 bg-white text-black transition-colors duration-300">
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
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-black mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-6 text-black"
                variants={itemVariants}
              >
                Send Me a Message
              </motion.h3>

              {/* Name Field */}
              <motion.div
                className="mb-6"
                variants={itemVariants}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black transition-all duration-300"
                  placeholder="Geetanshi"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="mb-6"
                variants={itemVariants}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black transition-all duration-300"
                  placeholder="john@example.com"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="mb-6"
                variants={itemVariants}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white text-black transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-6 text-black"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h3>
              
              <motion.p
                className="text-gray-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you. I'm always open to collaborating on interesting projects.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="space-y-4"
                variants={itemVariants}
              >
                <h4 className="text-lg font-medium text-black mb-4">
                  Find Me On
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-lg text-black hover:bg-gray-200 transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Response Card */}
            <motion.div
              className="bg-black p-8 rounded-xl shadow-lg text-white"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-4"
                variants={itemVariants}
              >
                Quick Response
              </motion.h3>
              <motion.p
                className="mb-4 leading-relaxed"
                variants={itemVariants}
              >
                I typically respond to messages within 24-48 hours. For urgent matters, please mention it in your message.
              </motion.p>
              <motion.div
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <MailIcon size={20} />
                <span className="font-medium">sgeetanshi1@gmail.com</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

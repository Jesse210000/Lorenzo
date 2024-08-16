import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../compoments/NavBar'; 
import heroImage from '../assets/img/Cards.webp';  // Use your background image here

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DO YOU WANNA SEE THE FIANCEST MAGICAL AROUND?
          </motion.h1>
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About Our Magic Shows
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I can make that happen...
          </motion.p>
          <motion.p 
            className="text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Welcome to the world of wonder and excitement! Our magic shows are designed to bring joy, laughter, and amazement to children of all ages. Whether you're planning a birthday party, a school event, or a special celebration, we offer enchanting performances that will captivate young minds and create unforgettable memories.
          </motion.p>
          <motion.p 
            className="text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Our skilled magician combines classic tricks with modern flair, ensuring a show filled with interactive illusions, hilarious antics, and plenty of audience participation. Each performance is tailored to the age group and interests of the audience, making every show unique and special.
          </motion.p>
          <motion.p 
            className="text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We offer a variety of packages to suit different needs and budgets, from short and sweet performances to full-scale magical extravaganzas. Our goal is to provide not just entertainment, but an experience that leaves children spellbound and believing in the magic within themselves.
          </motion.p>
          <motion.p 
            className="text-xl font-bold mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Let us make your next event magical!
          </motion.p>
        </motion.div>
      </div>

      {/* Additional Content */}
      <div className="flex flex-col items-center justify-center p-8 bg-black">
        <div className="max-w-3xl text-center">
          {/* You can add additional animated content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default About;

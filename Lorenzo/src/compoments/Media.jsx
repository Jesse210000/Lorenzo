import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import Navbar from '../compoments/NavBar'; 
import mediaImage1 from '../assets/img/CardsHolder.jpg'; // Add your image paths

const Media = () => {
  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1 } 
    }
  };

  const textSlideInVariant = {
    hidden: { x: '-100vw' },
    visible: { 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, delay: 0.5 } 
    }
  };

  const iconBounceVariant = {
    hover: {
      scale: 1.2,
      transition: { yoyo: Infinity, duration: 0.3 },
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <motion.div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${mediaImage1})` }}
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div 
          className="relative z-10 text-center max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={textSlideInVariant}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-500">
            Magician & Magic Shows
          </h1>
          <h2 className="text-2xl md:text-3xl text-yellow-300 mb-6">
            with Mason Ling
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Learn the secrets of close-up magic, card tricks, and illusions with a touch of humor.
          </p>
        
          <div className="mt-12 flex justify-center space-x-8">
            <motion.a 
              href="https://www.instagram.com/magicbym_?igsh=MXB5aWdwamRzZ2VhZw%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-4xl hover:text-pink-500 transition duration-300"
              variants={iconBounceVariant}
              whileHover="hover"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://youtube.com/@magicbym?si=niAld56Vtbuhm6Ut" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-4xl hover:text-red-600 transition duration-300"
              variants={iconBounceVariant}
              whileHover="hover"
            >
              <FaYoutube />
            </motion.a>
            <motion.a 
              href="https://www.tiktok.com/@magic.by.m?_t=8ovWvcP83kW&_r=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-4xl hover:text-pink-500 transition duration-300"
              variants={iconBounceVariant}
              whileHover="hover"
            >
              <FaTiktok />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Media;

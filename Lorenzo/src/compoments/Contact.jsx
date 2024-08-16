import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../compoments/NavBar';   
import backgroundImage from '../assets/img/Hands.jpg';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "Masonmatthewling@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);  // Hide the message after 3 seconds
    });
  };

  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1 } 
    }
  };

  const slideInVariant = {
    hidden: { x: '-100vw' },
    visible: { 
      x: 0, 
      transition: { type: 'spring', stiffness: 50, delay: 0.5 } 
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <motion.h2 
          className="text-5xl font-bold mb-8 text-purple-600"
          variants={slideInVariant}
        >
          Contact Mason Ling
        </motion.h2>
        
        <motion.div 
          className="mt-12 text-center max-w-lg"
          variants={fadeInVariant}
        >
          <p className="text-lg">Reach out to us directly at:</p>
          <p className="text-2xl font-bold mt-4 text-white">Masonmatthewling@gmail.com</p>
          <motion.button
            className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg focus:outline-none transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopyEmail}
          >
            Copy Email Address
          </motion.button>
          {copied && (
            <motion.p 
              className="mt-4 text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Email address copied!
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;

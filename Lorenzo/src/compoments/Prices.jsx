import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../compoments/NavBar';  
import backgroundImage from '../assets/img/CardsFire.jpg';  // Replace with your actual image path

const Prices = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 50, 
        delay: 0.2 
      } 
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        delay: 0.3 
      } 
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="bg-black text-white min-h-screen flex flex-col items-center p-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        
        {/* Page Header */}
        <motion.div 
          className="text-center my-12 bg-black bg-opacity-70 p-8 rounded-lg"
          variants={itemVariant}
        >
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">Our Pricing Plans</h1>
          <h2 className="text-2xl text-yellow-300">Find the perfect package for your needs</h2>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Bronze Plan */}
          <motion.div 
            className="relative bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg"
            variants={itemVariant}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold px-2 py-1 rounded-br">Bronze</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">30 Minutes</h3>
            <p className="text-3xl font-bold mb-6">£5</p>
            <Link to="/contact">
              <motion.button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg focus:outline-none transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Silver Plan */}
          <motion.div 
            className="relative bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg"
            variants={itemVariant}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold px-2 py-1 rounded-br">Silver</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">1 Hour</h3>
            <p className="text-3xl font-bold mb-6">£10</p>
            <Link to="/contact">
              <motion.button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg focus:outline-none transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Gold Plan */}
          <motion.div 
            className="relative bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg"
            variants={itemVariant}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold px-2 py-1 rounded-br">Gold</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">2 Hours</h3>
            <p className="text-3xl font-bold mb-6">£20</p>
            <Link to="/contact">
              <motion.button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg focus:outline-none transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

        {/* Informative Text */}
        <motion.div 
          className="mt-12 bg-yellow-500 text-black py-6 px-4 rounded-lg shadow-lg text-center max-w-3xl bg-opacity-90"
          variants={itemVariant}
        >
          <p className="text-lg font-semibold italic">
            <strong>Important Notice:</strong> In-person shows are available <u>only</u> in Thanet. For other locations, shows are offered via video call.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Prices;

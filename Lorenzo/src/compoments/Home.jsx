import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../compoments/NavBar';    
import ryanScottImage from '../assets/img/Mason.jpg';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto p-8">
        <Navbar />  

        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              A UNIQUE EXPERIENCE AWAITS YOU...
            </motion.h2>
            <motion.p 
              className="text-xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover the incredible powers of the mind.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link to="/about">
                <motion.button 
                  className="mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.img 
              src={ryanScottImage} 
              alt="Mason Ling" 
              className="w-full rounded-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <motion.div 
            className="animate-fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-red-500">College Entertainment</h3>
            <p className="mt-2">Learn more about having an event at your school</p>
          </motion.div>
          <motion.div 
            className="animate-fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-red-500">Upcoming events</h3>
            <p className="mt-2">Future events for magic shows</p>
          </motion.div>
          <motion.div 
            className="animate-fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-red-500">Private Parties</h3>
            <p className="mt-2">Entertainment that will leave your guests breathless</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.h3 
            className="text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Mentalist. Magician. Entertainer.
          </motion.h3>
          <motion.p 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Combining loads of charisma with incredible magic, illusion, and mind reading
            abilities, Mason Ling delivers high-energy, hysterical performances that will
            have audiences raving about your special event. Mason's extraordinary talents
            captivate crowds from 20 to 20,000.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

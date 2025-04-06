'use client';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TravelByInterest = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="bg-black text-white py-12 px-8 md:px-16 lg:px-24 space-y-8"
    >
      {/* Heading Section */}
      <motion.div variants={fadeUp} className="text-center space-y-2">
        <p className="text-gray-400">Packages based on your unique preferences</p>
        <h2 className="text-4xl font-bold font-playfair">
          TRAVEL BY <span className="text-orange-500">INTEREST</span>
        </h2>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {['Wellness Retreats', 'Mountain Retreats'].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <img
                src="https://placehold.co/600x400"
                alt={title}
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">
                {title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle Column */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.03 }} className="space-y-4">
          <div className="relative">
            <img
              src="https://placehold.co/600x825"
              alt="Beach Escapes"
              className="rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">
              Beach Escapes
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-4">
          {['Spiritual Journeys', 'History & Architecture'].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              <img
                src="https://placehold.co/400x267"
                alt={title}
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">
                {title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TravelByInterest;

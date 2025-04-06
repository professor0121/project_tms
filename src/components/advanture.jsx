'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AdventureSection = () => {
  return (
    <section className="flex flex-wrap items-center p-8 lg:px-24 bg-gray-50 text-[#191919] gap-">
      {/* Left side: Image */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeLeft}
        className="md:w-1/2 w-full flex justify-center"
      >
        <img
          src="https://placehold.co/1000x1000"
          alt="Adventure placeholder"
          className="w-full max-w-md rounded-2xl object-cover shadow-xl"
        />
      </motion.div>

      {/* Right side: Text content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeRight}
        className="w-full md:w-1/2 space-y-6"
      >
        <h5 className="text-green-600 font-semibold tracking-wide uppercase pt-6">
          Explore the world
        </h5>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Great Opportunity For{' '}
          <span className="text-[#191919] font-playfair italic text-orange-500">
            Adventure &amp; Travels
          </span>
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-xl">
          Welcome to our Print28 Website! We are a professional and reliable
          printing company that offers a wide range of printing services to...
        </p>

        {/* Info Cards */}
        <div className="space-y-4">
          {/* Card 1 */}
          <motion.div
            variants={cardMotion}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h4 className="text-lg font-semibold mb-1">🛡️ Safety First Always</h4>
            <p className="text-gray-600 text-sm">
              Welcome to our Print28 web company that offers wide range of services.
            </p>
            <p className="text-green-600 font-semibold mt-2 text-sm">05+ Years of experience</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardMotion}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h4 className="text-lg font-semibold mb-1">📍 Trusted Travel Guide</h4>
            <p className="text-gray-600 text-sm">
              Welcome to our Print28 web company that offers wide range of services.
            </p>
            <p className="text-green-600 font-semibold mt-2 text-sm">10+ Team Members</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdventureSection;

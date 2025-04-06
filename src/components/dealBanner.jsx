'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DealBanner = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#2DB2FF] to-[#3CD3AD] text-white rounded-2xl p-8 text-center max-w-6xl mx-auto my-20 "
    >
      <h2 className="text-3xl font-bold mb-2 font-playfair">🎉 Special Summer Deal!</h2>
      <p className="mb-4 text-lg">Book your adventure today and save <span className="font-bold">25% on Premium Plans</span>.</p>
      <button className="px-6 py-3 bg-white text-[#2DB2FF] rounded-full font-semibold hover:bg-opacity-90 transition-all">
        Get My Discount
      </button>
    </motion.div>
  );
};

export default DealBanner;

"use client";

import { motion } from "framer-motion";
import React from "react";

const Hero = ({ tittle, description }) => {
  return (
    <div
      className="h-[550px] w-full flex flex-col items-center justify-center text-[#191919] px-4 text-center"
      style={{
        marginTop: "-64px",
        backgroundImage: 'url("https://placehold.co/1550x450")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold drop-shadow-lg"
      >
        {tittle}
        {console.log(tittle)}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 text-lg md:text-xl text-gray-800 max-w-2xl"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="  shadow-xl overflow-hidden  "
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.976269394859!2d78.80011957511739!3d23.819442878623367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d22f9290e003%3A0x38f53d5b52f4be2b!2sGyan%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1743962911722!5m2!1sen!2sin"
        className="w-full h-[450px] sm:h-[550px]  shadow-md"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};

export default LocationMap;

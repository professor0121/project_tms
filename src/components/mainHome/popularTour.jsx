'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
    },
  }),
};

const PopularTour = () => {
  const [tours, setTours] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Show only 6 initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tour')
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  }, []);

  const handleViewMore = () => {
    setVisibleCount(tours.length); // Show all tours
  };

  const visibleTours = tours.slice(0, visibleCount);

  return (
    <div className="w-full bg-white text-[#191919] py-24 flex flex-col justify-center items-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[48px] font-[700] text-[#191919] pb-8 font-playfair"
      >
        Popular Tour
      </motion.h2>

      <div className="flex flex-wrap gap-8 justify-center items-center md:px-0 px-4">
        {loading ? (
          <p>Loading tours...</p>
        ) : (
          visibleTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="shadow-lg rounded-lg overflow-hidden w-full sm:w-[350px] lg:w-[370px] bg-white"
            >
              <img
                className="h-[200px] w-full object-cover"
                src={tour.image}
                alt={tour.title}
              />
              <div className="flex flex-col gap-2 p-4">
                <Link
                  href="#"
                  className="text-[16px] text-[#191919] font-[600] leading-[24px] hover:underline"
                >
                  {tour.title}
                </Link>
                <span className="text-sm text-gray-500">Rating {tour.rating}</span>
                <div className="flex flex-row justify-between text-sm text-gray-600">
                  <span>{tour.location}</span>
                  <span>{tour.duration}</span>
                  <span>{tour.group}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-1 text-sm">
                    <span>From</span>
                    <span className="font-bold">{tour.price}</span>
                  </div>
                  <button  className="px-4 py-2 text-sm bg-[#2DB2FF] text-white rounded hover:bg-[#1994d1] transition">
                    <Link href={`tours/${tour.id}`}>Book Now</Link>
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {!loading && visibleCount < tours.length && (
        <button
          onClick={handleViewMore}
          className="mt-10 px-6 py-3 bg-[#191919] text-white rounded hover:bg-[#333] transition"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default PopularTour;

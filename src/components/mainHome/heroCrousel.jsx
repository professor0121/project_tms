import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // Auto-slide interval in milliseconds (5 seconds)

  const slides = [
    {
      image: "/hero1.png",
      location: "INDORE",
      description: "Explore the beautiful city of Indore known for its rich culture and history.",
      link: "#indore"
    },
    {
      image: "/hero2.png",
      location: "SAGAR",
      description: "Discover the serene landscapes and historical monuments of Sagar.",
      link: "#sagar"
    },
    {
      image: "/hero3.png",
      location: "JABALPUR",
      description: "Visit Jabalpur for its mesmerizing waterfalls and rich heritage.",
      link: "#jabalpur"
    },

  ];

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 relative"
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center md:pl-[150px] p-10 text-white">
              <div className='flex gap-4 items-center'>
                <div className="border-t w-[40px] h-[2px] border-gray-300 my-6"></div>
                <h3 className='text-[28px] font-[500]'>DISCOVER</h3>
              </div>
              <h1 className="text-[70px] tracking-widest font-bold mb-2">{slide.location}</h1>
              <p className="text-lg mb-4">{slide.description}</p>
              <a
                href={slide.link}
                className="text-white w-[150px] bg-blue-500 px-4 text-center py-2 rounded-3xl hover:bg-blue-600 transition"
              >
                Learn More
              </a>
            </div>
             
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path d="M1 9l4-4L1 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default HeroCarousel;

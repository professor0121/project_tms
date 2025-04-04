import React from 'react';

const TravelByInterest = () => {
  return (
    <div className="bg-black text-white py-12 px-8 md:px-16 lg:px-24 space-y-8">
      {/* Heading Section */}
      <div className="text-center space-y-2">
        <p className="text-gray-400">Packages based on your unique preferences</p>
        <h2 className="text-4xl font-bold">TRAVEL BY <span className="text-orange-500">INTEREST</span></h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="relative">
            <img src="https://placehold.co/600x400" alt="Wellness Retreats" className="rounded-2xl w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">Wellness Retreats</div>
          </div>
          <div className="relative">
            <img src="https://placehold.co/600x400" alt="Mountain Retreats" className="rounded-2xl w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">Mountain Retreats</div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <div className="relative">
            <img src="https://placehold.co/600x825" alt="Beach Escapes" className="rounded-2xl w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">Beach Escapes</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="relative">
            <img src="https://placehold.co/400x267" alt="Spiritual Journeys" className="rounded-2xl w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">Spiritual Journeys</div>
          </div>
          <div className="relative">
            <img src="https://placehold.co/400x267" alt="History & Architecture" className="rounded-2xl w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 rounded-b-2xl text-center">History & Architecture</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelByInterest;

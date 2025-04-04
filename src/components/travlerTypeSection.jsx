import React from 'react';
import { Home, Heart, Users } from 'lucide-react';

const TravelerTypeSection = () => {
  return (
    <div className="bg-black text-white py-12 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-12 items-center">
      {/* Left Images Section */}
      <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
        <div className="row-span-2">
          <img 
            src="https://placehold.co/300x600"
            alt="Family Vacations" 
            className="rounded-2xl w-full h-full object-cover" 
          />
        </div>
        <div>
          <img 
            src="https://placehold.co/300x300"
            alt="Couple Retreats" 
            className="rounded-2xl w-full h-full object-cover" 
          />
        </div>
        <div>
          <img 
            src="https://placehold.co/300x300"
            alt="Group Getaways" 
            className="rounded-2xl w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold">
          TRAVEL BY TYPE <br />
          OF <span className="text-orange-500">TRAVELER</span>
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Home className="text-orange-500 w-6 h-6" />
            <div>
              <h3 className="font-bold">Family Vacations</h3>
              <p className="text-gray-400">Fun-filled adventures for all ages, with luxury accommodations.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Heart className="text-orange-500 w-6 h-6" />
            <div>
              <h3 className="font-bold">Couples’ Retreats</h3>
              <p className="text-gray-400">Romantic escapes designed to create intimate and unforgettable memories.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="text-orange-500 w-6 h-6" />
            <div>
              <h3 className="font-bold">Group Getaways</h3>
              <p className="text-gray-400">Enjoy group tours filled with exciting activities and shared luxury.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerTypeSection;

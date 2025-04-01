import React from 'react';

const MirrorContainer = () => {
  return (
    <div className="p-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 h-[500px] flex">
          <div
            style={{ backgroundImage: 'url("https://placehold.co/450x600")' }}
            className="bg-cover bg-no-repeat bg-center  w-[450px] h-[500px] rounded-tr-[50%] rounded-tl-[50%] shadow-md"
          ></div>
          <div
            style={{ backgroundImage: 'url("https://placehold.co/450x600")' }}
            className="bg-cover bg-no-repeat bg-center  w-[450px] h-[500px] rounded-tr-[50%] rounded-tl-[50%] shadow-md"
          ></div>
        </div>
        <div className="w-1/2 h-[400px] flex items-center justify-center">
          <p className="text-lg text-gray-700">Your content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default MirrorContainer;

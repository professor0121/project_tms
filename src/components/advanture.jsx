import React from 'react';

const AdventureSection = () => {
  return (
    <section className="flex flex-wrap items-center gap-8 p-8 bg-gray-50">
      {/* Left side: Image */}
      <div className="w-full sm:w-1/2">
        <img
          src="https://via.placeholder.com/400"
          alt="Adventure placeholder"
          className="w-full max-w-md rounded object-cover"
        />
      </div>

      {/* Right side: Text content */}
      <div className="w-full sm:w-1/2">
        <h5 className="text-green-600 font-medium mb-2">Explore the world</h5>
        <h2 className="text-2xl font-bold mb-4">
          Great Opportunity For{' '}
          <span className="text-gray-700 font-semibold">
            Adventure &amp; Travels
          </span>
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to our Print28 Website! We are a professional and reliable
          printing company that offers a wide range of printing services to...
        </p>

        <div className="space-y-4">
          {/* Info Card 1 */}
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="text-lg font-semibold mb-2">Safety First Always</h4>
            <p className="text-gray-600">
              Welcome to our Print28 web company that offers wide range of services.
            </p>
            <p className="text-green-600 font-semibold mt-2">05+ Years of experience</p>
          </div>

          {/* Info Card 2 */}
          <div className="p-4 bg-white border border-gray-200 rounded">
            <h4 className="text-lg font-semibold mb-2">Trusted Travel Guide</h4>
            <p className="text-gray-600">
              Welcome to our Print28 web company that offers wide range of services.
            </p>
            <p className="text-green-600 font-semibold mt-2">10+ Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;

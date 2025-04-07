import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/header';
import Hero from '@/components/hero';

const TourDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tour, setTour] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/tour/${id}`)
        .then(res => res.json())
        .then(data => setTour(data))
        .catch(err => console.error("Failed to fetch tour", err));
    }
  }, [id]);

  const heroData = {
    tittle: "Tour Details",
    description: "Explore your next unforgettable destination 💼✈️",
  };

  if (!tour) {
    return <div className="text-center py-20 text-gray-500">Loading tour details...</div>;
  }

  return (
    <div className='text-[#ffffff]'>
      <Header />
      <Hero {...heroData} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <img
          src={tour.image}
          alt={tour.title}
          width={800}
          height={400}
          className="rounded-xl mb-6 object-cover w-full"
        />

        <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
        <div className="text-gray-600 mb-4 flex gap-4 text-sm">
          <span>📍 {tour.location}</span>
          <span>🕒 {tour.duration}</span>
          <span>👥 {tour.group}</span>
        </div>

        <div className="flex justify-between items-center text-lg font-semibold text-[#191919] border-b pb-4 mb-6">
          <span>{tour.rating}</span>
          <span className="text-[#2DB2FF]">{tour.price}</span>
        </div>

        <div className="text-lg  leading-relaxed space-y-4">
          <p>{tour.description}</p>
          <p>
            Cupiditate rem deserunt in maiores iusto, facilis, minima dolorem, praesentium
            reprehenderit saepe quam. Nisi reprehenderit aspernatur quas doloremque veniam 
            excepturi velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;

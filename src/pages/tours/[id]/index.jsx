import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer'
import Newsletter from '@/components/newSletter';

const TourDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tour, setTour] = useState(null);
  const [allTours, setAllTours] = useState([]);
  const [relatedTours, setRelatedTours] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/tour/${id}`)
        .then(res => res.json())
        .then(data => setTour(data))
        .catch(err => console.error("Failed to fetch tour", err));
    }
  }, [id]);

  useEffect(() => {
    fetch(`/api/tour`)
      .then(res => res.json())
      .then(data => setAllTours(data))
      .catch(err => console.error("Failed to fetch all tours", err));
  }, []);

  useEffect(() => {
    if (tour && allTours.length > 0) {
      console.log("🎯 Matching related tours...");
      const related = allTours.slice(0, 3);

      console.log("related", related);
      setRelatedTours(related);
    }
  }, [tour, allTours]);


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

        <div className="text-lg leading-relaxed space-y-4">
          <p>{tour.description}</p>
          <p>
            Cupiditate rem deserunt in maiores iusto, facilis, minima dolorem, praesentium
            reprehenderit saepe quam. Nisi reprehenderit aspernatur quas doloremque veniam
            excepturi velit.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#2DB2FF] hover:bg-[#1a90d8] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md">
            Book Now
          </button>
          <button className="bg-white text-[#2DB2FF] hover:text-white hover:bg-[#2DB2FF] border border-[#2DB2FF] font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md">
            Add to Cart
          </button>
        </div>


        {/* 🌍 Related Tours Section */}
        {relatedTours.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-white">Related Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedTours.map((item) => (
                <div key={item.id} className="bg-white text-black rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.duration} · {item.group}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span>{item.rating}</span>
                      <span className="text-[#2DB2FF] font-semibold">{item.price}</span>
                    </div>
                    <a href={`/tours  /${item.id}`} className="text-blue-500 hover:underline">Book Now</a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default TourDetail;

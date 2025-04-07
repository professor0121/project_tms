import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/header';
import Hero from '@/components/hero';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tour, setTour] = useState(null);
 console.log('id:', id)
  useEffect(() => {
    if (id) {
      fetch(`/api/tour/${id}`)
        .then(res => res.json())
        .then(data => setTour(data))
        .catch(err => console.error("Failed to fetch tour", err));
    }
  }, [id]);
  console.log(tour          )

  const heroData = {
    title: "Blog", // fixed typo from "tittle" to "title"
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit?",
  };

  if (!tour) {
    return <div className="text-center py-20 text-gray-500">Loading tour details...</div>;
  }

  return (
    <div>
      {/* <Header />
      <Hero {...heroData} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Image 
          src={tour.image} 
          alt={tour.title} 
          width={800} 
          height={400} 
          className="rounded-xl mb-6 object-cover w-full"
        />
        <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
        <p className="text-gray-600 mb-8">{tour.description || " "}</p>
        <div className="text-lg text-gray-800 leading-relaxed space-y-4">
          {tour.content?.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogDetail;

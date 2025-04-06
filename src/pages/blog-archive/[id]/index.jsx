import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/header';
import Hero from '@/components/hero';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [blog, setBlog] = useState(null);


  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
        .catch(err => console.error("Failed to fetch blog", err));
    }
  }, [id]);
  console.log(blog);

  const heroData = {
    tittle: "Blog",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit?",
  };

  if (!blog) {
    return <div className="text-center py-20 text-gray-500">Loading blog post...</div>;
  }

  return (

<div>
     <Header/>
     <Hero {...heroData}/>
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Image 
        src={blog.image} 
        alt={blog.title} 
        width={800} 
        height={400} 
        className="rounded-xl mb-6 object-cover w-full"
      />
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-8">{blog.description || " "}</p>
      <div className="text-lg text-gray-800 leading-relaxed space-y-4">
        {blog.content?.split('\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogDetail;

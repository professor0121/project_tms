import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Make sure to import this

const DisplayBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('/api/blog'); // Fix URL
                const data = await response.json();
                setBlogs(data); // Fix state update
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }
        fetchBlog();
    }, []);

    console.log(blogs); // For debugging

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Latest Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                    <motion.div
                        key={blog.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        whileHover={{ scale: 1.03 }}
                    >
                        <Image 
                            src={blog.image} 
                            alt={blog.title} 
                            width={400} 
                            height={250} 
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="text-gray-700 mb-4">{blog.description}</p>
                            <a
                                href={blog.link}
                                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default DisplayBlog;

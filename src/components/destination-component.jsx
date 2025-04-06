import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = {
    'January - March': [
        { title: 'Dubai', image: 'https://placehold.co/400x400' },
        { title: 'New Zealand', image: 'https://placehold.co/400x400' },
        { title: 'Australia', image: 'https://placehold.co/400x400' },
        { title: 'Switzerland', image: 'https://placehold.co/400x400' },
        { title: 'Bali', image: 'https://placehold.co/400x400' },
        { title: 'Bali', image: 'https://placehold.co/400x400' }
    ],
    'April - June': [
        { title: 'Paris', image: 'https://placehold.co/400x400' },
        { title: 'Tokyo', image: 'https://placehold.co/400x400' },
        { title: 'Hawaii', image: 'https://placehold.co/400x400' },
        { title: 'Rome', image: 'https://placehold.co/400x400' },
        { title: 'Greece', image: 'https://placehold.co/400x400' },
        { title: 'Greece', image: 'https://placehold.co/400x400' },
    ],
    'July - September': [
        { title: 'New York', image: 'https://placehold.co/400x400' },
        { title: 'Los Angeles', image: 'https://placehold.co/400x400' },
        { title: 'Chicago', image: 'https://placehold.co/400x400' },
        { title: 'Miami', image: 'https://placehold.co/400x400' },
        { title: 'Las Vegas', image: 'https://placehold.co/400x400' },
        { title: 'Las Vegas', image: 'https://placehold.co/400x400' },
    ],
    'October - December': [
        { title: 'London', image: 'https://placehold.co/400x400' },
        { title: 'Edinburgh', image: 'https://placehold.co/400x400' },
        { title: 'Iceland', image: 'https://placehold.co/400x400' },
        { title: 'Lapland', image: 'https://placehold.co/400x400' },
        { title: 'Vienna', image: 'https://placehold.co/400x400' },
        { title: 'Vienna', image: 'https://placehold.co/400x400' },
    ]
};

const Tabs = ['January - March', 'April - June', 'July - September', 'October - December'];

const DestinationSlider = () => {
    const [activeTab, setActiveTab] = useState(Tabs[0]);

    return (
        <div className="bg-black text-white py-[40px] px-[50px] flesx flex-col items-center justify-center gap-[20px]">
            <h1 className="text-center text-4xl font-bold mb-4">Explore Destinations by Season</h1>
            <div className="flex flex-wrap   justify-center mb-6 space-x-4">
                {Tabs.map(tab => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-orange-600 text-white' : 'bg-transparent border border-gray-500'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations[activeTab].map((destination, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-xl overflow-hidden shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={destination.image} alt={destination.title} className="w-full h-52 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{destination.title}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-6 space-x-4 mt-[60px] gap-8">
                <button className="transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700" onClick={() => setActiveTab(Tabs[(Tabs.indexOf(activeTab) - 1 + Tabs.length) % Tabs.length])}>
                    <ChevronLeft size={40} color="white" />
                </button>
                <button className="transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700" onClick={() => setActiveTab(Tabs[(Tabs.indexOf(activeTab) + 1) % Tabs.length])}>
                    <ChevronRight size={40} color="white" />
                </button>
            </div>
        </div>
    );
};

export default DestinationSlider;

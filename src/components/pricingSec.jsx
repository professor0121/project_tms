'use client';
import React from 'react';
import { motion } from 'framer-motion';

const pricingCards = [
  {
    title: 'Basic Plan',
    price: '$29',
    features: ['1 Destination', '3 Days', 'No Guide', 'Standard Support'],
    popular: false,
  },
  {
    title: 'Standard Plan',
    price: '$59',
    features: ['3 Destinations', '5 Days', 'With Guide', 'Priority Support'],
    popular: true,
  },
  {
    title: 'Premium Plan',
    price: '$99',
    features: ['Unlimited Destinations', '7+ Days', 'Personal Guide', '24/7 VIP Support'],
    popular: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const PricingSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-100 text-[#191919]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 font-playfair">Choose Your Plan</h2>
        <p className="text-gray-500">Flexible pricing for every kind of traveler</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingCards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden ${
              card.popular ? 'border-orange-400' : ''
            }`}
          >
            {card.popular && (
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                Popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-4xl font-bold mb-4 text-orange-500">{card.price}</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              {card.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-md bg-[#2DB2FF] text-white font-semibold hover:bg-[#1994d1] transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

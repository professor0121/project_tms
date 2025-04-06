'use client';
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    features: ['1 Destination', 'Standard Hotel', 'No Tour Guide', 'Basic Support'],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$199',
    features: ['3 Destinations', '3★ Hotel', 'Group Tour Guide', 'Priority Support'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$349',
    features: ['5+ Destinations', '5★ Hotel', 'Private Tour Guide', '24/7 Support'],
    highlight: false,
  },
];

const ComparePlans = () => {
  return (
    <section className="py-20 bg-white px-6 text-[#191919]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-playfair mb-2">Compare Our <span className="text-[#2DB2FF]">Plans</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto">Find the best travel plan that fits your vibe, budget, and experience goals.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 shadow-md hover:shadow-lg border transition-all ${
              plan.highlight ? 'border-[#2DB2FF] bg-[#F0FAFF]' : 'border-gray-200'
            }`}
          >
            <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
            <p className="text-3xl font-semibold text-[#2DB2FF] mb-4">{plan.price}</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded text-white font-semibold ${plan.highlight ? 'bg-[#2DB2FF]' : 'bg-gray-800'} hover:opacity-90`}>
              {plan.highlight ? 'Most Popular' : 'Choose Plan'}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComparePlans;

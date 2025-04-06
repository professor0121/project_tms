import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-lg text-blue-100"
          >
            Get exclusive travel deals and stay updated with our latest offerings
          </motion.p>
          
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="mx-auto max-w-md"
          >
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 
                  focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-yellow-400 px-6 py-2 font-semibold text-gray-900 
                  transition hover:bg-yellow-300"
              >
                Subscribe
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const stats = [
  { id: 1, number: 50000, label: "Happy Travelers", suffix: "+" },
  { id: 2, number: 100, label: "Destinations", suffix: "+" },
  { id: 3, number: 15, label: "Years Experience", suffix: "" },
  { id: 4, number: 4.9, label: "Average Rating", suffix: "/5" }
];

const CompanyStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.number}{stat.suffix}
              </motion.div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;
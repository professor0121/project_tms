import { motion } from 'framer-motion';
import { FaGlobe, FaHandshake, FaLeaf } from 'react-icons/fa';

const values = [
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Global Perspective",
    description: "We bring the world closer through meaningful travel experiences and cultural exchange."
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Customer First",
    description: "Your satisfaction and safety are our top priorities in every journey we plan."
  },
  {
    icon: <FaLeaf className="w-8 h-8" />,
    title: "Sustainable Tourism",
    description: "We're committed to environmentally responsible and sustainable travel practices."
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Global Perspective",
    description: "We bring the world closer through meaningful travel experiences and cultural exchange."
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Customer First",
    description: "Your satisfaction and safety are our top priorities in every journey we plan."
  },
  {
    icon: <FaLeaf className="w-8 h-8" />,
    title: "Sustainable Tourism",
    description: "We're committed to environmentally responsible and sustainable travel practices."
  },
];

const Mission = () => {
  return (
    <section className="py-16 bg-gray-50 text-[#191919]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To inspire and facilitate meaningful travel experiences that create lasting memories,
            foster cultural understanding, and contribute positively to the communities we visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
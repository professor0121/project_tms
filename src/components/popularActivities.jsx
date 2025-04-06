import { motion } from 'framer-motion';
import { FaHiking, FaUmbrellaBeach, FaMountain, FaCamera } from 'react-icons/fa';

const activities = [
  {
    icon: <FaHiking className="h-8 w-8" />,
    title: "Hiking",
    description: "Explore scenic trails and natural wonders"
  },
  {
    icon: <FaUmbrellaBeach className="h-8 w-8" />,
    title: "Beach Activities",
    description: "Relax on pristine beaches worldwide"
  },
  {
    icon: <FaMountain className="h-8 w-8" />,
    title: "Adventure Sports",
    description: "Experience thrilling outdoor activities"
  },
  {
    icon: <FaCamera className="h-8 w-8" />,
    title: "Photography Tours",
    description: "Capture stunning moments and landscapes"
  },
  {
    icon: <FaHiking className="h-8 w-8" />,
    title: "Hiking",
    description: "Explore scenic trails and natural wonders"
  },
  {
    icon: <FaUmbrellaBeach className="h-8 w-8" />,
    title: "Beach Activities",
    description: "Relax on pristine beaches worldwide"
  },
  {
    icon: <FaMountain className="h-8 w-8" />,
    title: "Adventure Sports",
    description: "Experience thrilling outdoor activities"
  },
  {
    icon: <FaCamera className="h-8 w-8" />,
    title: "Photography Tours",
    description: "Capture stunning moments and landscapes"
  }
];

const PopularActivities = () => {
  return (
    <div className="bg-white py-16 text-[#191919]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center  text-4xl font-bold"
        >
          Popular Activities
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg bg-gray-50 p-6 text-center transition-all 
                hover:bg-blue-50"
            >
              <div className="mb-4 text-blue-600">{activity.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularActivities;
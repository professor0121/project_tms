import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    quote: "The most amazing travel experience of my life! The destinations were breathtaking.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    quote: "Exceptional service and unforgettable adventures. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "London, UK",
    quote: "Perfect organization and amazing local guides. Will definitely book again!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 text-[#191919]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          What Our Travelers Say
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
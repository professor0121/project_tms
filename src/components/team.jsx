import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "With over 15 years of experience in the tourism industry, John leads our vision for sustainable travel."
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "Travel Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Emily ensures every journey is meticulously planned and exceeds expectations."
  },
  {
    id: 3,
    name: "David Chen",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "David's passion for customer satisfaction drives our service excellence."
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Destination Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Sarah's deep knowledge of global destinations helps create unforgettable experiences."
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-white text-[#191919]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals who make your travel dreams come true
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
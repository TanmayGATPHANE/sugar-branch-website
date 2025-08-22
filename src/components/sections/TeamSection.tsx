import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, fadeInUp } from '../../utils/animations';

// Placeholder team member data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Creative Director", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e1c5?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const TeamSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-gray-50" id="team" ref={ref}>
      <div className="container">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4">
            Meet Our Team
          </motion.h2>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-2xl mx-auto">
            Talented individuals working together to create exceptional experiences and deliver outstanding results.
          </motion.p>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-all duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
          className="text-center"
        >
          <Link
            to="/team"
            className="btn btn-outline"
          >
            Meet the Full Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

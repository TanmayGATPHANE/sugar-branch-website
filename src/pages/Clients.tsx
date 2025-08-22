import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

const Clients: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Our Clients
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto mb-12">
            We're proud to work with amazing brands across various industries.
          </motion.p>
          
          <motion.div variants={staggerItem} className="bg-gray-50 rounded-2xl p-12">
            <h2 className="heading-2 mb-4">Client Portfolio Coming Soon</h2>
            <p className="body-large text-gray-600">
              We're preparing a comprehensive showcase of our client work and case studies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Our Team
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who make Sugar Branch a success. 
            Each team member brings unique skills and perspectives to deliver exceptional results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-gray-50 rounded-2xl p-12 text-center"
        >
          <motion.div variants={staggerItem}>
            <h2 className="heading-2 mb-4">Full Team Coming Soon</h2>
            <p className="body-large text-gray-600">
              We're currently building out our comprehensive team directory. 
              Check back soon to meet all our amazing team members!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;

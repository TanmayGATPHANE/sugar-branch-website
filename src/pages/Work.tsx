import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

const Work: React.FC = () => {
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
            Our Work
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our portfolio of creative campaigns and successful projects.
          </motion.p>
          
          <motion.div variants={staggerItem} className="bg-gray-50 rounded-2xl p-12">
            <h2 className="heading-2 mb-4">Portfolio Gallery Coming Soon</h2>
            <p className="body-large text-gray-600">
              We're curating our best work to showcase our capabilities and results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;

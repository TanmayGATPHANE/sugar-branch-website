import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';

const SugarDigiverse: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={staggerItem} className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe size={40} className="text-primary-500" />
          </motion.div>
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Sugar Digiverse
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto">
            Digital marketing that reaches your audience where they are and drives measurable results.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={staggerItem} className="bg-gray-50 rounded-2xl p-8">
            <h2 className="heading-3 mb-4">What We Offer</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Digital Strategy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Social Media Marketing</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Search Engine Optimization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Paid Advertising</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="heading-3 mb-4">Why Choose Sugar Digiverse</h2>
            <p className="text-gray-600 mb-4">
              The digital landscape is constantly evolving, and we stay ahead of the curve. 
              Our data-driven approach ensures your digital investments deliver real ROI.
            </p>
            <p className="text-gray-600">
              From social media campaigns to search optimization, we help you connect with 
              your audience across all digital channels.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SugarDigiverse;

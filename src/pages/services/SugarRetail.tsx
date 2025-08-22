import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';

const SugarRetail: React.FC = () => {
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
            <ShoppingBag size={40} className="text-primary-500" />
          </motion.div>
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Sugar Retail
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto">
            Retail marketing solutions that drive sales and create memorable shopping experiences.
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
                <span>Retail Strategy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Point of Sale Materials</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>In-store Experiences</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>E-commerce Solutions</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="heading-3 mb-4">Why Choose Sugar Retail</h2>
            <p className="text-gray-600 mb-4">
              Retail success requires a deep understanding of consumer behavior and shopping patterns. 
              We create strategies that drive foot traffic and increase conversions.
            </p>
            <p className="text-gray-600">
              From in-store displays to e-commerce optimization, we help you create shopping 
              experiences that turn browsers into buyers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SugarRetail;

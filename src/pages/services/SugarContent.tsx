import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';

const SugarContent: React.FC = () => {
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
            <FileText size={40} className="text-primary-500" />
          </motion.div>
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Sugar Content
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto">
            Compelling content that tells your brand story and engages your audience across all touchpoints.
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
                <span>Content Strategy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Copywriting & Editing</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Video Production</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Photography</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="heading-3 mb-4">Why Choose Sugar Content</h2>
            <p className="text-gray-600 mb-4">
              Content is at the heart of every great marketing campaign. We create content 
              that not only looks great but also drives results.
            </p>
            <p className="text-gray-600">
              From blog posts to video campaigns, our content team ensures your message 
              resonates with your audience and supports your business goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SugarContent;

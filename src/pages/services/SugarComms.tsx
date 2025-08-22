import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';

const SugarComms: React.FC = () => {
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
            <MessageSquare size={40} className="text-primary-500" />
          </motion.div>
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Sugar Comms
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto">
            Comprehensive communications strategy and execution that builds meaningful connections between your brand and your audience.
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
                <span>Strategic Communication Planning</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Content Strategy & Creation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Media Relations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Crisis Communication</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="heading-3 mb-4">Why Choose Sugar Comms</h2>
            <p className="text-gray-600 mb-4">
              Our communications experts understand that effective messaging goes beyond words. 
              We craft strategies that resonate with your audience and drive action.
            </p>
            <p className="text-gray-600">
              From brand storytelling to crisis management, we ensure your voice is heard clearly 
              and consistently across all channels.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SugarComms;

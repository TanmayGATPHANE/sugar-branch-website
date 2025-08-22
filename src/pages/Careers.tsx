import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

const Careers: React.FC = () => {
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
            Careers
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto mb-12">
            Join our team of creative professionals and help us shape the future of marketing.
          </motion.p>
          
          <motion.div variants={staggerItem} className="bg-gray-50 rounded-2xl p-12">
            <h2 className="heading-2 mb-4">Opportunities Coming Soon</h2>
            <p className="body-large text-gray-600 mb-6">
              We're always looking for talented individuals to join our growing team.
            </p>
            <p className="text-gray-500">
              Send your resume to careers@sugarbranch.com to be considered for future openings.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;

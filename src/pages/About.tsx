import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="heading-1 mb-8">About Sugar Branch</h1>
          <p className="body-large text-gray-600 mb-8">
            We are a creative marketing agency dedicated to transforming brands through 
            innovative strategies and exceptional execution. Our story began with a simple 
            belief: that great marketing should be both creative and effective.
          </p>
          <div className="bg-gray-100 rounded-2xl p-12 mb-12">
            <h2 className="heading-2 mb-6">Our Mission</h2>
            <p className="body-large text-gray-600">
              To help brands connect with their audiences in meaningful ways through 
              creative excellence and strategic insight.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

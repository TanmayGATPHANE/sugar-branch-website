import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../utils/animations';

const AboutSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-gray-50" id="about" ref={ref}>
      <div className="container">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-2 mb-6">Sugar Edge</h2>
          <p className="body-large text-gray-600 mb-8">
            We are a creative marketing agency that transforms brands through innovative 
            strategies and exceptional execution. Our team of experts combines creativity 
            with data-driven insights to deliver results that matter.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-500">250+</h3>
              <p className="text-gray-600">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-500">150+</h3>
              <p className="text-gray-600">Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-500">25</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-500">8</h3>
              <p className="text-gray-600">Years</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

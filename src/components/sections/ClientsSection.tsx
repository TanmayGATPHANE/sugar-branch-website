import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { clients } from '../../utils/constants';

const ClientsSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20" id="clients" ref={ref}>
      <div className="container">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4">
            Trusted by Leading Brands
          </motion.h2>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-2xl mx-auto">
            We're proud to work with forward-thinking companies that value creativity and results.
          </motion.p>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {/* Placeholder for client logo */}
              <div className="text-gray-400 text-xs text-center px-2">
                {client.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;

import { motion } from 'framer-motion';
import { MessageSquare, Users, FileText, ShoppingBag, Globe } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { services } from '../../utils/constants';

const iconComponents = {
  MessageSquare,
  Users,
  FileText, 
  ShoppingBag,
  Globe,
};

const ServicesSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20" id="services" ref={ref}>
      <div className="container">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4">
            Our Capabilities
          </motion.h2>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive marketing solutions that drive growth and create lasting impact for your brand.
          </motion.p>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="grid-responsive gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent size={32} className="text-primary-500" />
                </div>
                <h3 className="heading-4 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

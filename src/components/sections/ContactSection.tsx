import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../../utils/animations';

const ContactSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={staggerItem} className="heading-2 mb-4 text-white">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={staggerItem} className="body-large text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and discover how we can help transform your brand.
          </motion.p>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem} className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-white/80">hello@sugarbranch.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-white/80">
                  123 Business Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={staggerItem} className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Project Today
            </h3>
            <p className="text-white/90 mb-8">
              Contact us to discuss your goals and learn how we can help you achieve them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h1 variants={staggerItem} className="heading-1 mb-6">
            Contact Us
          </motion.h1>
          <motion.p variants={staggerItem} className="body-large text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with us today.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={staggerItem} className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">hello@sugarbranch.com</p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">
              123 Business Street<br />
              New York, NY 10001
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerItem}
          className="mt-12 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="heading-3 mb-6 text-center">Contact Form Coming Soon</h2>
          <p className="text-center text-gray-600">
            We're building a comprehensive contact form with validation and backend integration.
            For now, please reach out to us directly using the contact information above.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

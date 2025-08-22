import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeUp, staggerParent, staggerChild } from "../utils/animations";
import "./../styles/footer.css";

export default function Footer(){
  const { ref, controls } = useScrollAnimation(0.05);
  
  return (
    <motion.footer 
      className="footer"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="container footer-grid"
        variants={staggerParent}
      >
        <motion.div 
          className="f-about"
          variants={staggerChild}
        >
          <img 
            className="mark" 
            src="https://via.placeholder.com/56x56/866476/ffffff?text=SB" 
            alt="Sugar Branch"
          />
          <p>At Sugar Branch, we take pride in partnering with brands globally in the development of creative marketing strategies through our diverse capabilities. We believe in the power that elevates brands through outstanding creativity and through quality delivery that ensures optimal brand growth and recognition.</p>
        </motion.div>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h5>About Us</h5>
          <a href="#">Sugar Comms</a>
          <a href="#">Sugar Xperience</a>
          <a href="#">Sugar Content</a>
          <a href="#">Sugar Digital</a>
          <a href="#">Sugar Retail</a>
        </motion.nav>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h5>Important Links</h5>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Who We Are</a>
          <a href="#">Our Work</a>
          <a href="#">Contacts Us</a>
        </motion.nav>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h5>Useful Links</h5>
          <a href="#">Home</a>
          <a href="#">Who We Are</a>
          <a href="#">Our Work</a>
          <a href="#">Clients</a>
          <a href="#">Contact Us</a>
        </motion.nav>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h5>Stay Connected</h5>
          <div className="mini-card">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Stay connected"
            />
          </div>
        </motion.nav>
      </motion.div>
      <motion.div 
        className="f-bottom"
        variants={fadeUp}
      >
        © 2024 Sugar Branch | All Rights Reserved
      </motion.div>
    </motion.footer>
  );
}

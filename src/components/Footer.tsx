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
          <h6>About Us</h6>
          <p>At Sugar Branch, we take pride in partnering the brand's growth by creating compelling campaigns through borderless creativity, innovating at the intersection of Design & Consulting, Advertising, Creating Experiential Spaces and much more...</p>
          <p><a href="Contact-Us.html" className="link">Get in touch</a></p>
          <ul style={{display: 'flex', gap: '8px', listStyle: 'none', padding: 0}}>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </motion.div>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h6>Important Links</h6>
          <a href="Sugar-Comms.html">Sugar Comms</a>
          <a href="Sugar-Xperience.html">Sugar Xperience</a>
          <a href="Sugar-Content.html">Sugar Content</a>
          <a href="Sugar-Retail.html">Sugar Retail</a>
          <a href="Sugar-Digiverse.html">Sugar Digiverse</a>
        </motion.nav>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h6>Useful Links</h6>
          <a href="index.html">Home</a>
          <a href="Who-We-Are.html">Who We Are</a>
          <a href="Clients.html">Clients</a>
          <a href="Our-Work.html">Our Work</a>
          <a href="Contact-Us.html">Contact Us</a>
        </motion.nav>
        <motion.nav 
          className="f-col"
          variants={staggerChild}
        >
          <h6>Stay Connected</h6>
          <div className="fb-page" style={{width: '255px', height: '240px'}}>
            <div className="mini-card">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Stay connected"
              />
            </div>
          </div>
        </motion.nav>
      </motion.div>
      <motion.div 
        className="f-bottom"
        variants={fadeUp}
      >
        <span className="copyright">© 2024 Sugar Branch | All Rights Reserved</span>
      </motion.div>
    </motion.footer>
  );
}

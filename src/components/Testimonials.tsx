import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeUp } from "../utils/animations";
import "./../styles/testimonials.css";

export default function Testimonials(){
  const { ref: testiRef, controls: testiControls } = useScrollAnimation(0.1);
  const { ref: trustRef, controls: trustControls } = useScrollAnimation(0.1);
  
  return (
    <>
      <motion.div 
        className="testi container" 
        ref={testiRef}
        initial="hidden"
        animate={testiControls}
      >
        <motion.blockquote variants={fadeUp}>
          <p>The expertise in brand management and consultancy has been transformative for our business. Their strategic direction has strengthened our brand presence and communicated our values effectively. Understanding our target audience driving significant growth in recognition.</p>
          <footer>
            <strong>Sarah D.</strong><span>Marketing Head, Apex Retail</span>
          </footer>
        </motion.blockquote>
      </motion.div>
      <motion.div 
        className="trust-band"
        ref={trustRef}
        initial="hidden"
        animate={trustControls}
      >
        <motion.div className="container" variants={fadeUp}>
          <h3>Voices of Trust</h3>
        </motion.div>
      </motion.div>
    </>
  );
}

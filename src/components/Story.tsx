import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeUp, fadeLeft, fadeRight } from "../utils/animations";
import "./../styles/story.css";

export default function Story(){
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <motion.div 
      className="story container" 
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="story-media"
        variants={fadeLeft}
      >
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" />
      </motion.div>
      <motion.aside 
        className="story-card"
        variants={fadeRight}
      >
        <h3>Our Story</h3>
        <p>Specializes in brand consultancy and public relations training, conforming strategies and brand impact analysis. We have become a major force that elevates brands and communication through their journey across diverse innovation ideas.</p>
        <a className="link" href="#">Know More ›</a>
      </motion.aside>
    </motion.div>
  );
}

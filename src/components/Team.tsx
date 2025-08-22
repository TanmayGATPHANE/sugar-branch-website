import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeLeft, fadeRight } from "../utils/animations";
import "./../styles/team.css";

export default function Team(){
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <motion.div 
      className="team container" 
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="team-text"
        variants={fadeLeft}
      >
        <h3>Our Team</h3>
        <p>Our team goes beyond the surface, digging deeper and if they collect impactful and relevant information. We commit to helping and bringing forward the essence of your organization's authentic voice and your unique goals to life and together we accomplish great and extraordinary results.</p>
        <a className="link" href="#">Know More ›</a>
      </motion.div>
      <motion.div 
        className="team-media"
        variants={fadeRight}
      >
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Professional team member"
        />
      </motion.div>
    </motion.div>
  );
}

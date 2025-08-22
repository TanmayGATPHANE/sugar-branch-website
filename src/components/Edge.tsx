import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeUp, staggerParent, staggerChild } from "../utils/animations";
import "./../styles/edge.css";

export default function Edge(){
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <motion.div 
      className="edge"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <div className="edge-wrap container">
        <motion.div 
          className="edge-label" 
          aria-hidden="true"
          variants={fadeUp}
        >
          The Sugar Edge
        </motion.div>
        <motion.div 
          className="edge-body"
          variants={staggerParent}
        >
          <motion.p variants={staggerChild}>
            We dive deeper to find what makes your brand special and truly compelling stories to tell. We tell our loved stories from heritage through messaging and all of your communication channels to engage, captivate and connect premier experiences.
          </motion.p>
          <motion.ul 
            className="edge-bullets"
            variants={staggerParent}
          >
            {[
              "Consumer Insights",
              "Distinct Brand Positioning", 
              "Inclusive Team Approach",
              "Deep Rooted Design Philosophy",
              "Passionate Service",
              "Out of the Box Thinking"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={staggerChild}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

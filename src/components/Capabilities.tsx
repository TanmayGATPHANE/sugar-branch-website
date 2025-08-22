import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeUp, staggerParent, staggerChild } from "../utils/animations";
import "./../styles/capabilities.css";

const items = [
  {
    title:"Sugar Comms", 
    text:"Specializes in brand consultancy and public relations training, conforming messages and brand impact analysis. We work as marketing strategists that focus on delivering rich content within company and brand content to empower marketing initiatives."
  },
  {
    title:"Sugar Xperience", 
    text:"Manages corporate events and brand activations, organizing and implementing effective activities and events from planning and production, logistics and implementation to post event analysis that creates brand experiences."
  },
  {
    title:"Sugar Content", 
    text:"Offers creative services and content generation, bringing solid and significant productions as creative experts, leveraging expert audiences to create solutions for creative executions that deliver key performance."
  },
  {
    title:"Sugar Retail", 
    text:"Engages in showroom and experience center operations, focusing led content and communication experience that drives awareness, creating confidence and trust solutions that resonate with target audience."
  },
  {
    title:"Sugar Digiverse", 
    text:"Focuses on digital marketing and online branding, employing next-gen technology and analytical methods to develop data-driven strategic solutions that empower demand growth and market share to our partners."
  },
];

export default function Capabilities(){
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <motion.div 
      className="cap container" 
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <motion.h2
        variants={fadeUp}
      >
        Our Capabilities
      </motion.h2>
      <motion.div 
        className="cap-grid"
        variants={staggerParent}
      >
        {items.map((it,i)=>(
          <motion.article 
            className={`cap-card ${i===0?'primary':''}`} 
            key={it.title}
            variants={staggerChild}
          >
            <h4>{it.title}</h4>
            <p>{it.text}</p>
            <a href="#" className="cap-link">Know More ›</a>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}

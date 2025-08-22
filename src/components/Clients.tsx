import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeLeft, staggerParent, staggerChild } from "../utils/animations";
import "./../styles/clients.css";

export default function Clients(){
  const { ref, controls } = useScrollAnimation(0.1);
  
  const logoNames = [
    "Shentech", "ADOMANY", "AOUE", "Google Workspace", "MEARN",
    "Crescent", "Mercita Caycraft", "Dell", "QUECO", "Guidhon",
    "RoCa", "Lenovo", "DBS", "Starbucks", "LUMINOUS",
    "BHUSAN", "Coca Cola", "Axis Bank", "", ""
  ];

  return (
    <motion.div 
      className="clients container" 
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="clients-left"
        variants={fadeLeft}
      >
        <h3>Agency Pride<br/>Reflected in<br/>Partners' Quality</h3>
      </motion.div>
      <motion.div 
        className="clients-logos"
        variants={staggerParent}
      >
        {logoNames.map((name, i)=>(
          <motion.div 
            className="logo" 
            key={i}
            variants={staggerChild}
          >
            {name && (
              <img 
                src={`https://via.placeholder.com/120x40/f0f0f0/666666?text=${encodeURIComponent(name)}`} 
                alt={name} 
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeUp, staggerParent, staggerChild } from "../utils/animations";
import "./../styles/capabilities.css";

const items = [
  {
    title: "Sugar Comms",
    text: "Specializes in brand consultancy and public relations, helping businesses enhance their brand image and communication strategies. This division works closely with clients to develop tailored solutions that resonate with target audiences.",
    link: "Sugar-Comms.html"
  },
  {
    title: "Sugar Xperience",
    text: "Manages corporate events, MICE events, brand launches, and exhibits both nationally and internationally. This division ensures that every event is a memorable experience that strengthens brand engagement and visibility.",
    link: "Sugar-Xperience.html"
  },
  {
    title: "Sugar Content",
    text: "Offers creative services and content production, including audiovisual production that captivates and engages audiences. This branch is dedicated to crafting compelling narratives and visuals that elevate brand storytelling.",
    link: "Sugar-Content.html"
  },
  {
    title: "Sugar Retail",
    text: "Engages in showroom and experience center designing and fabrication, creating immersive retail environments. This branch focuses on enhancing customer experience through innovative design and interactive spaces.",
    link: "Sugar-Retail.html"
  },
  {
    title: "Sugar Digiverse",
    text: "Focuses on digital marketing services and IT solutions such as CRM, ERP, and software development to drive digital transformation. This vertical is essential for businesses looking to enhance their online presence and operational efficiency.",
    link: "Sugar-Digiverse.html"
  },
];

export default function Capabilities(){
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <motion.section 
      className="cap" 
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <motion.h3
              className="section-title mb-0"
              style={{ color: '#816575', lineHeight: '90px' }}
              variants={fadeUp}
            >
              Our Capabilities
            </motion.h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <motion.div 
            className="cap-grid"
            variants={staggerParent}
          >
            {items.map((it) => (
              <div className="col-lg-2 col-md-2" key={it.title}>
                <motion.div
                  className="content-block text-block"
                  variants={staggerChild}
                >
                  <h5>{it.title}</h5>
                  <p>{it.text}</p>
                  <a href={it.link} className="knowmore">Know More »</a>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

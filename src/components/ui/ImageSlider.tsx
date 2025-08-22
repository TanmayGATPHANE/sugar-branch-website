import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeIn } from '../../utils/animations';

// Import the slider images
import slide01 from '../../assets/images/slide01.jpg';
import slide02 from '../../assets/images/slide02.jpg';
import slide03 from '../../assets/images/slide03.jpg';
import slide04 from '../../assets/images/slide04.jpg';
import slide05 from '../../assets/images/slide05.jpg';

const slides = [
  { id: 1, image: slide01, alt: 'Abstract geometric design 1' },
  { id: 2, image: slide02, alt: 'Flowing abstract waves' },
  { id: 3, image: slide03, alt: 'Dynamic fluid shapes' },
  { id: 4, image: slide04, alt: 'Modern retail space' },
  { id: 5, image: slide05, alt: 'Abstract geometric patterns' },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, controls } = useScrollAnimation();

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.div 
      className="image-slider"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="slide"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].alt}
              className="slide-image"
            />
            <div className="slide-overlay">
              <div className="slide-content">
                <h2>Creative Excellence</h2>
                <p>Transforming ideas into visual masterpieces</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button 
          className="slider-nav prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        
        <button 
          className="slider-nav next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

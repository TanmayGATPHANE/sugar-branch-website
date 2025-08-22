import React, { useEffect, useState } from 'react';

// Import slider images
import slide01 from '../assets/images/slide01.jpg';
import slide02 from '../assets/images/slide02.jpg';
import slide03 from '../assets/images/slide03.jpg';
import slide04 from '../assets/images/slide04.jpg';
import slide05 from '../assets/images/slide05.jpg';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide01,
      service: 'Sugar Comms',
      tagline: 'Elevate, Engage, Excel'
    },
    {
      id: 2,
      image: slide02,
      service: 'Sugar Content',
      tagline: 'Captivate, Create, Elevate'
    },
    {
      id: 3,
      image: slide03,
      service: 'Sugar Digiverse',
      tagline: 'Transform, Innovate, Thrive'
    },
    {
      id: 4,
      image: slide04,
      service: 'Sugar Retail',
      tagline: 'Design, Innovate, Immerse'
    },
    {
      id: 5,
      image: slide05,
      service: 'Sugar Xperience',
      tagline: 'Communicate, Build, Resonate'
    }
  ];

  useEffect(() => {
    // Auto-slide functionality
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    // Add page-loaded class after component mounts
    setTimeout(() => {
      document.body.classList.add('page-loaded');
    }, 100);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slider">
      {/* Main Slider */}
      <div className="gallery-top">
        <div 
          className="swiper-slide active" 
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%'
          }}
        />
        
        {/* Progress indicator */}
        <div className="slide-progress">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="swiper-pagination">
            <div 
              className="swiper-pagination-progressbar-fill"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
        
        {/* Navigation buttons */}
        <div className="swiper-button-prev" onClick={prevSlide}>PREV</div>
        <div className="swiper-button-next" onClick={nextSlide}>NEXT</div>
      </div>

      {/* Thumbnails/Services Slider */}
      <div className="gallery-thumbs">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`swiper-slide ${index === currentSlide ? 'swiper-slide-active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span>{slide.service}</span>
              <a href={`#${slide.service.toLowerCase().replace(' ', '-')}`}>{slide.tagline}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

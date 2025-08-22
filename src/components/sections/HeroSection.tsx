import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import { heroSlides } from '../../utils/constants';
import { fadeInUp, fadeInDown } from '../../utils/animations';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

const HeroSection: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay, EffectFade]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                <motion.div
                  key={`slide-${index}`}
                  initial="hidden"
                  animate={activeSlide === index ? "visible" : "hidden"}
                  variants={fadeInUp}
                  className="max-w-4xl mx-auto"
                >
                  <motion.h1 
                    className="heading-1 mb-6 text-white"
                    variants={fadeInDown}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="body-large mb-8 text-white/90"
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.button
                    variants={fadeInUp}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary text-lg px-8 py-4"
                  >
                    {slide.cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button 
        className="hero-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="hero-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Thumbs Swiper */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 max-w-[90vw] z-20">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          className="hero-thumbs"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={`thumb-${slide.id}`}>
              <div 
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  activeSlide === index ? 'opacity-100 ring-2 ring-white' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-16 object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 lg:hidden">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

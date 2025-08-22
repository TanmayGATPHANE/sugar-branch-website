import React, { useState, useEffect } from 'react';
import teamImg from '../assets/images/slide03.jpg'; // Using slide03 as placeholder

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The expertise in brand management and consultancy has been transformative for our business. Their strategy boosted our brand presence and perfectly aligned us with our target audience, driving significant growth in recognition.",
      name: "Sarah D.",
      position: "Marketing Head, Apex Retail",
      image: teamImg
    },
    {
      id: 2,
      quote: "Their creative solutions exceeded our expectations! From stunning product videos to captivating corporate storytelling, they brought our vision to life. The plant shoot were executed flawlessly, showcasing their versatility and attention to detail.",
      name: "Raj K.",
      position: "Creative Director, Vista Industries",
      image: teamImg
    },
    {
      id: 3,
      quote: "Partnering with SugarConnect revolutionized our digital presence. They developed a dynamic website, streamlined our social media management, and launched SEO campaigns. The AR/VR solutions added an innovative touch that wowed our audience!",
      name: "Emily H.",
      position: "CEO, TechNova",
      image: teamImg
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <h2 className="section-title">
              Testimonials<br />
              <span style={{ color: '#dac9bc' }}>What our clients say</span>
            </h2>
          </div>
        </div>
      </div>
      
      <div className="testimonials-slider">
        <div className="testimonial">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-1">
                <blockquote>
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="reviewer">
                  <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                  <div className="reviewer-infos">
                    <h6>{testimonials[currentTestimonial].name}</h6>
                    <small>{testimonials[currentTestimonial].position}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom pagination */}
        <div className="swiper-pagination">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              className={`swiper-pagination-bullet ${index === currentTestimonial ? 'swiper-pagination-bullet-active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import "./../styles/hero.css";

// Import the local slider images
import slide01 from "../assets/images/slide01.jpg";
import slide02 from "../assets/images/slide02.jpg";
import slide03 from "../assets/images/slide03.jpg";
import slide04 from "../assets/images/slide04.jpg";
import slide05 from "../assets/images/slide05.jpg";

const slides = [
  { image: slide01, alt: "Abstract geometric design 1" },
  { image: slide02, alt: "Flowing abstract waves" },
  { image: slide03, alt: "Dynamic fluid shapes" },
  { image: slide04, alt: "Modern retail space" },
  { image: slide05, alt: "Abstract geometric patterns" },
];

export default function Hero(){
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    
    const s = new Swiper(swiperRef.current, {
      loop: true,
      effect: "fade",
      autoplay: { delay: 4500, disableOnInteraction: false },
      on: {
        init(_swiper: SwiperType) {
          const total = slides.length;
          const currentEl = document.querySelector(".hero-count .current");
          const totalEl = document.querySelector(".hero-count .total");
          if (totalEl) totalEl.textContent = String(total).padStart(2,"0");
          if (currentEl) currentEl.textContent = "01";
        },
        slideChange(swiper: SwiperType) {
          const cur = String(swiper.realIndex + 1).padStart(2,"0");
          const currentEl = document.querySelector(".hero-count .current");
          if (currentEl) currentEl.textContent = cur;
        }
      }
    });

    // Hook arrows to Swiper
    const prevBtn = document.querySelector(".hero-arrows .prev");
    const nextBtn = document.querySelector(".hero-arrows .next");
    if (prevBtn) prevBtn.addEventListener("click", () => s.slidePrev());
    if (nextBtn) nextBtn.addEventListener("click", () => s.slideNext());

    return () => s.destroy(true,true);
  }, []);

  return (
    <div className="hero">
      <div className="swiper hero-swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>

        <div className="hero-overlay">
          <h1><span>Sugar Branch</span><em>All Things Creative</em></h1>
        </div>

        <div className="hero-controls">
          <div className="hero-count"><span className="current">01</span><span className="sep">/</span><span className="total">05</span></div>
          <div className="hero-arrows">
            <button className="prev">PREV</button>
            <button className="next">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import "./../styles/hero.css";

export default function Hero(){
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    
    const s = new Swiper(swiperRef.current, {
      loop: true,
      effect: "fade",
      autoplay: { delay: 4500, disableOnInteraction: false },
      on: {
        init(swiper: SwiperType) {
          const total = swiper.slides.length - 2;
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
          <div className="swiper-slide"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Office collaboration" /></div>
          <div className="swiper-slide"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Team meeting" /></div>
          <div className="swiper-slide"><img src="https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Creative workspace" /></div>
        </div>

        <div className="hero-overlay">
          <h1><span>Sugar Content</span><em>Captivate, Create, Elevate</em></h1>
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

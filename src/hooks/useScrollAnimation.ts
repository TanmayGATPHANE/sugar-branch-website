import { useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Hook to mimic AOS (Animate On Scroll) behavior exactly like the original website
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true, offset = 80) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const targetRect = entry.boundingClientRect;
        const targetTop = targetRect.top;
        const windowHeight = window.innerHeight;
        
        // More aggressive trigger - animate when element is 80px from bottom of viewport
        // This matches the original website's behavior
        const shouldTrigger = targetTop <= windowHeight - offset;
        
        if (shouldTrigger && !inView) {
          setInView(true);
          controls.start('visible');
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce && !shouldTrigger && inView) {
          setInView(false);
          controls.start('hidden');
        }
      },
      {
        threshold: threshold,
        rootMargin: `0px 0px -${offset}px 0px`
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, threshold, triggerOnce, offset, inView]);

  return { ref, controls, inView };
};

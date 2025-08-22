import { useState, useEffect } from 'react';

export const useCounter = (
  end: number, 
  start: number = 0, 
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldStart || isAnimating) return;
    
    setIsAnimating(true);
    const increment = (end - start) / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        setIsAnimating(false);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, start, duration, shouldStart, isAnimating]);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  return { count, startAnimation, isAnimating };
};

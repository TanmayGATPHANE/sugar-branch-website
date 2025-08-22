import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Hook to detect mobile breakpoint
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const { width } = useWindowSize();
  return width < breakpoint;
};

// Hook to detect specific breakpoints
export const useBreakpoint = () => {
  const { width } = useWindowSize();
  
  return {
    isMobile: width < 640,
    isSm: width >= 640 && width < 768,
    isMd: width >= 768 && width < 1024,
    isLg: width >= 1024 && width < 1280,
    isXl: width >= 1280,
    width,
  };
};

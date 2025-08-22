// Pure fade-in animations to match WOW.js behavior from original website
export const fadeUp = {
  hidden: { 
    opacity: 0
    // NO movement - original uses pure fade only
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2,  // WOW.js default duration
      ease: "easeOut" as const // Framer Motion built-in easing
    }
  }
};

export const fadeUpDelay = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      delay: 0.2,  // WOW.js style delay
      ease: "easeOut" as const
    }
  }
};

export const fadeLeft = {
  hidden: { 
    opacity: 0
    // NO horizontal movement - pure fade only
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeOut" as const
    }
  }
};

export const fadeRight = {
  hidden: { 
    opacity: 0
    // NO horizontal movement - pure fade only
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeOut" as const
    }
  }
};

export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: "easeOut" as const
    }
  }
};

// Container for staggered children - WOW.js style
export const staggerParent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // WOW.js style stagger
      delayChildren: 0.1
    }
  }
};

export const staggerChild = {
  hidden: { 
    opacity: 0
    // NO movement - pure fade only like WOW.js
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 1.2,
      ease: "easeOut" as const
    }
  }
};

// Page transitions
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  }
};

export const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4
};

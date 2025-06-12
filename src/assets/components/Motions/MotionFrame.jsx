import { motion } from 'framer-motion';

export const leftSideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeIn', 
      staggerChildren: 0.2 // Stagger child animations
    }
  }
};

export const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeIn' } }
};

export const rightSideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeIn', delay: 0.5 } // Delay to stagger 
  }
};
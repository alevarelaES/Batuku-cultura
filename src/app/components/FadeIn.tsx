import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Evaluated once at module load — safe for SPA (no SSR)
const IS_MOBILE = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => {
  const prefersReduced = useReducedMotion();

  // Skip Framer Motion entirely on mobile — no JS animation overhead
  if (prefersReduced || IS_MOBILE) {
    return <div className={`w-full ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

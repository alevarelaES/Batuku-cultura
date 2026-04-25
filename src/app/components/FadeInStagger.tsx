import React from 'react';
import { motion } from 'motion/react';

// Computed once at module load — safe for SPA
const IS_MOBILE = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

interface GroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

interface ItemProps {
  children: React.ReactNode;
  className?: string;
}

/** Wrap a grid/flex container — children animate in sequence on desktop */
export const FadeInGroup = ({ children, className = '', stagger = 0.1, delay = 0.05 }: GroupProps) => {
  if (IS_MOBILE) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show:   { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  );
};

/** Direct child of FadeInGroup — animates with the parent stagger */
export const FadeInItem = ({ children, className = '' }: ItemProps) => {
  if (IS_MOBILE) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};

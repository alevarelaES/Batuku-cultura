import React from 'react';
import { motion } from 'motion/react';

export const TypewriterText = ({ text, className = '' }: { text: string, className?: string }) => {
  return (
    <motion.div className={className} initial="hidden" animate="visible" variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      }
    }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
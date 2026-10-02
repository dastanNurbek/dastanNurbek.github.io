import React from 'react';
import { motion } from 'framer-motion';

// One restrained reveal, used everywhere. No scale, no spring, no bounce.
const Reveal = ({ children, delay = 0, y = 14, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;

import React, { useEffect, useState } from 'react';
import { scrollTo } from '../../lib/smoothScroll';

// Appears once the reader is well into a long page; jumps back to the top.
const ScrollTopButton = ({ threshold = 800 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > threshold);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollTo(0)}
      className={`panel panel-dark nav-blur fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center border border-line font-mono text-sm text-fg transition-all duration-300 hover:text-accent ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollTopButton;

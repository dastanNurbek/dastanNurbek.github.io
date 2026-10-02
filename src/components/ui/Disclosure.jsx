import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// A caps label and a plus that becomes a minus. No chevrons, no boxes.
const Disclosure = ({ label, count, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="group flex items-center gap-3 font-mono text-2xs uppercase tracking-label text-muted transition-colors hover:text-fg"
        aria-expanded={open}
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute h-px w-3 bg-current" />
          <motion.span
            className="absolute h-3 w-px bg-current"
            animate={{ scaleY: open ? 0 : 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
        <span>{label}</span>
        {typeof count === 'number' && <span className="text-faint">[{count}]</span>}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Disclosure;

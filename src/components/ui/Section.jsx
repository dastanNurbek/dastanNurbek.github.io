import React from 'react';

/**
 * Every section is the same two-column frame: an index and a caps label parked
 * on the left, content on the right. `tone` picks the panel it sits on —
 * dark, light or grey — and everything inside recolours from it.
 */
const Section = ({ id, index, label, tone = 'light', children }) => (
  <section id={id} className={`panel panel-${tone} border-t border-line`}>
    <div className="shell">
      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-12">
        <header className="pt-10 md:col-span-3 md:pt-20">
          <div className="flex items-center gap-3 md:sticky md:top-28">
            <span className="font-mono text-2xs text-accent">{index}</span>
            <span className="h-px w-5 bg-line" />
            <h2 className="font-mono text-2xs uppercase tracking-label text-fg">{label}</h2>
          </div>
        </header>

        <div className="pb-20 pt-8 md:col-span-9 md:pb-28 md:pt-20">{children}</div>
      </div>
    </div>
  </section>
);

export default Section;

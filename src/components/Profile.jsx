import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DotMatrix from './ui/DotMatrix';
import { scrollToSection } from './Nav';

const ROLES = ['Developer', 'Data Scientist', 'Researcher'];

const Role = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % ROLES.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block text-fg"
    >
      {ROLES[i]}
    </motion.span>
  );
};

const Profile = () => (
  <section id="profile" className="panel panel-dark relative pt-16">
    <div className="shell">
      {/* Technical header strip */}
      <div className="border-b border-line py-4 font-mono text-2xs uppercase tracking-label">
        <span className="text-accent">01 / Profile</span>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 py-14 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="min-w-0 md:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-fg"
          >
            <DotMatrix text={'DASTAN\nNURBEKULY'} pitch={14} radius={0.33} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-10 font-mono text-xs uppercase tracking-label text-muted">
              <Role />
            </p>

            <p className="mt-6 max-w-[46ch] text-base font-light leading-relaxed text-soft md:text-lg">
              I build things that turn satellite data into something you can look at, question and use —
              models, simulations and the occasional game engine.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-3 border border-line px-5 py-3 font-mono text-2xs uppercase tracking-label text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Selected work
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </button>
              <a
                href="mailto:dastan.nurbek22@gmail.com"
                className="group flex items-center gap-3 border border-line px-5 py-3 font-mono text-2xs uppercase tracking-label text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Get in touch
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <div className="relative mx-auto max-w-[340px] border border-line dotfield md:ml-auto md:mr-0">
            <span className="absolute left-3 top-3 font-mono text-2xs uppercase tracking-label text-faint">
              Fig. 01
            </span>
            {/* The source illustration has rounded corners, so scale past them */}
            <div className="overflow-hidden">
              <img
                src="/images/avatartion-blue.png"
                alt="Illustrated portrait of Dastan Nurbekuly"
                className="w-full scale-110"
              />
            </div>
            <div className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-2xs uppercase tracking-label text-faint">
              <span>Operator</span>
              <span className="flex items-center gap-1.5">
                <motion.span
                  className="h-1 w-1 bg-accent"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Online
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Profile;

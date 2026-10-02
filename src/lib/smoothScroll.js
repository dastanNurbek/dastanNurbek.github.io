import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// One instance for the whole app. Everything that moves the page goes through
// here so the easing stays consistent — and so it degrades to a plain jump
// when smooth scrolling is off.
let lenis = null;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function startSmoothScroll() {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    // Weight of the glide: higher duration and a long tail give the
    // heavy, settling feel rather than a quick ease-out.
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.6,
  });

  let frame = 0;
  const raf = (time) => {
    lenis.raf(time);
    frame = window.requestAnimationFrame(raf);
  };
  frame = window.requestAnimationFrame(raf);

  return () => {
    window.cancelAnimationFrame(frame);
    lenis.destroy();
    lenis = null;
  };
}

export function scrollTo(target, options = {}) {
  if (lenis) {
    lenis.scrollTo(target, options);
    return;
  }
  const { offset = 0, immediate = false } = options;
  if (typeof target === 'number') {
    window.scrollTo({ top: target + offset, behavior: immediate ? 'auto' : 'smooth' });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: immediate ? 'auto' : 'smooth' });
}

// Used while the index overlay owns the screen.
export function pauseScroll() {
  if (lenis) lenis.stop();
}

export function resumeScroll() {
  if (lenis) lenis.start();
}

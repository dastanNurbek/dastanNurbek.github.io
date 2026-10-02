/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: 'var(--n-bg)',
        surface: 'var(--n-surface)',
        fg: 'var(--n-fg)',
        muted: 'var(--n-muted)',
        faint: 'var(--n-faint)',
        line: 'var(--n-line)',
        accent: 'var(--n-accent)',
        soft: 'var(--n-soft)',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1.1rem' }],
      },
      letterSpacing: {
        label: '0.18em',
        wide2: '0.3em',
      },
      maxWidth: {
        page: '1320px',
        read: '68ch',
      },
      transitionTimingFunction: {
        n: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

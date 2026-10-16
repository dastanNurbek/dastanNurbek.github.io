import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';
import 'katex/dist/katex.min.css';

hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);

export const blogBase = (path) => `${process.env.PUBLIC_URL}/blog/${path}`;

const PLOTLY_SRC = 'https://cdn.plot.ly/plotly-4.1.1.min.js';
let plotlyLoading = null;

function loadPlotly() {
  if (window.Plotly) return Promise.resolve(window.Plotly);
  if (!plotlyLoading) {
    plotlyLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = PLOTLY_SRC;
      script.async = true;
      script.onload = () => resolve(window.Plotly);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  return plotlyLoading;
}

const MarkdownLink = ({ href = '', children, ...rest }) => {
  const external = /^https?:/.test(href);
  return (
    <a href={href} {...rest} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  );
};

const MarkdownCode = ({ className, children, ...rest }) => {
  const language = /language-(\w+)/.exec(className || '')?.[1];
  if (!language || !hljs.getLanguage(language)) return <code className={className} {...rest}>{children}</code>;
  const html = hljs.highlight(String(children).replace(/\n$/, ''), { language }).value;
  return <code className={`hljs ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
};

export const Markdown = ({ text }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm, remarkMath]}
    rehypePlugins={[rehypeKatex]}
    components={{
      a: MarkdownLink,
      code: MarkdownCode,
      table: ({ children }) => (
        <div className="nb-table mb-6 overflow-x-auto">
          <table>{children}</table>
        </div>
      ),
    }}
  >
    {text}
  </ReactMarkdown>
);

const CodeCell = ({ text }) => {
  const html = hljs.highlight(text, { language: 'python' }).value;
  return (
    <pre className="nb-code">
      <code className="hljs language-python" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

// Loads plotly.js and the figure only when the reader scrolls near it.
const PlotlyFigure = ({ src }) => {
  const ref = useRef(null);
  const [state, setState] = useState('waiting');

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    let cancelled = false;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      setState('loading');
      try {
        const [Plotly, figure] = await Promise.all([loadPlotly(), fetch(src).then((r) => r.json())]);
        if (cancelled) return;
        const layout = { ...figure.layout, autosize: true, height: Math.min(figure.layout?.height || 600, 600) };
        delete layout.width;
        await Plotly.newPlot(node, figure.data, layout, { responsive: true, displaylogo: false, scrollZoom: true });
        setState('ready');
      } catch (e) {
        if (!cancelled) setState('error');
      }
    }, { rootMargin: '400px' });
    observer.observe(node);
    return () => {
      cancelled = true;
      observer.disconnect();
      if (window.Plotly && node) window.Plotly.purge(node);
    };
  }, [src]);

  return (
    <div className="nb-figure">
      {/* data-lenis-prevent: let the wheel zoom the plot instead of scrolling the page */}
      <div ref={ref} data-lenis-prevent className="min-h-[420px] w-full bg-white" />
      {state !== 'ready' && (
        <p className="mt-3 font-mono text-2xs uppercase tracking-label text-muted">
          {state === 'error' ? 'The interactive 3D view could not be loaded.' : 'Loading interactive 3D view…'}
        </p>
      )}
    </div>
  );
};

export const Block = ({ block, base }) => {
  switch (block.type) {
    case 'markdown':
      return <Markdown text={block.text} />;
    case 'code':
      return <CodeCell text={block.text} />;
    case 'output':
      return <pre className="nb-output">{block.text}</pre>;
    case 'image':
      return (
        <img
          className="nb-image"
          src={`${base}/${block.src}`}
          width={block.width}
          height={block.height}
          loading="lazy"
          decoding="async"
          alt=""
        />
      );
    case 'video':
      return <video className="nb-video" src={`${base}/${block.src}`} controls loop muted playsInline preload="metadata" />;
    case 'plotly':
      return <PlotlyFigure src={`${base}/${block.src}`} />;
    default:
      return null;
  }
};

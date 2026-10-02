import React, { useMemo } from 'react';
import { GLYPH_H, GLYPH_W, glyphFor } from '../../lib/dotfont';

/**
 * Renders text as a lit dot matrix on top of the full, faintly visible dot grid —
 * the way a glyph panel looks when only part of it is on.
 *
 * pitch  distance between dot centres, in px
 * radius dot radius as a fraction of the pitch
 */
const DotMatrix = ({
  text,
  pitch = 8,
  radius = 0.4,
  tracking = 1,
  showGrid = true,
  className = '',
  litClassName = '',
  ariaLabel,
}) => {
  const { cols, rows, dots } = useMemo(() => {
    const lines = String(text).split('\n');
    const advance = GLYPH_W + tracking;
    const width = Math.max(...lines.map((l) => l.length)) * advance - tracking;
    const height = lines.length * (GLYPH_H + 2) - 2;
    const lit = [];

    lines.forEach((line, lineIndex) => {
      const yBase = lineIndex * (GLYPH_H + 2);
      line.split('').forEach((char, charIndex) => {
        const glyph = glyphFor(char);
        const xBase = charIndex * advance;
        glyph.forEach((row, y) => {
          row.split('').forEach((bit, x) => {
            if (bit === '1') lit.push([xBase + x, yBase + y]);
          });
        });
      });
    });

    return { cols: Math.max(width, 1), rows: Math.max(height, 1), dots: lit };
  }, [text, tracking]);

  const grid = useMemo(() => {
    if (!showGrid) return [];
    const all = [];
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) all.push([x, y]);
    }
    return all;
  }, [cols, rows, showGrid]);

  const r = pitch * radius;
  const w = (cols - 1) * pitch + r * 2;
  const h = (rows - 1) * pitch + r * 2;
  const cx = (x) => x * pitch + r;
  const cy = (y) => y * pitch + r;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className={`block max-w-full h-auto ${className}`}
      role="img"
      aria-label={ariaLabel || String(text).replace(/\n/g, ' ')}
    >
      {grid.length > 0 && (
        <g fill="currentColor" opacity="0.17">
          {grid.map(([x, y]) => (
            <circle key={`g${x}-${y}`} cx={cx(x)} cy={cy(y)} r={r * 0.55} />
          ))}
        </g>
      )}
      <g className={litClassName} fill="currentColor">
        {dots.map(([x, y]) => (
          <circle key={`d${x}-${y}`} cx={cx(x)} cy={cy(y)} r={r} />
        ))}
      </g>
    </svg>
  );
};

export default DotMatrix;

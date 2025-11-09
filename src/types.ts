import type React from 'react';

export interface ZoomFrameSpec {
  /** Path/URL of the image */
  src: string;
  /** Start zoom in "units" (e.g., -500). Mapped via scale = 1 + units/1000. */
  startZoom: number;
  /** Optional alt text */
  alt?: string;
  /** Per-frame image styles (merged) */
  style?: React.CSSProperties;
  /** Z-index for layering (optional, auto-calculated by default) */
  zIndex?: number;
}

export type EasingName = 'linear' | 'easeInOutQuad' | 'easeOutCubic' | 'easeInCubic';

export interface ZoomSequenceProps {
  frames: ZoomFrameSpec[];
  /** Total animation duration in milliseconds. Default: 10000 (10 seconds) */
  duration?: number;
  /** Easing curve for zoom interpolation; Default: 'linear' */
  easing?: EasingName | ((t: number) => number);
  /** Auto-play animation on mount. Default: true */
  autoPlay?: boolean;
  /** Loop the animation. Default: false */
  loop?: boolean;
  /** Class name for the outer wrapper */
  className?: string;
  /** Style for outer wrapper */
  style?: React.CSSProperties;
}

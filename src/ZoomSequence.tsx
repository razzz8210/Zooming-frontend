import { useEffect, useMemo, useRef, useState } from 'react';
import type { ZoomSequenceProps } from './types';
import { EASING } from './easing';

// Helpers
const toScale = (zoomUnits: number) => 1 + zoomUnits / 1000;

export function ZoomSequence({
  frames,
  duration = 10000,
  easing = 'linear',
  autoPlay = true,
  loop = false,
  className,
  style,
}: ZoomSequenceProps) {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Resolve easing function
  const easeFn = useMemo(() => {
    return typeof easing === 'function' ? easing : EASING[easing];
  }, [easing]);

  useEffect(() => {
    if (!autoPlay) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      let t = Math.min(elapsed / duration, 1);

      if (loop && t >= 1) {
        startTimeRef.current = timestamp;
        t = 0;
      }

      setProgress(t);

      if (t < 1 || loop) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [duration, autoPlay, loop]);

  const easedProgress = easeFn(progress);

  // Calculate continuous zoom value
  // Start from the first image's startZoom
  // End at a point where the last image reaches 0
  const firstZoom = frames[0]?.startZoom ?? -100;
  const lastZoom = frames[frames.length - 1]?.startZoom ?? -500;
  
  // Total zoom range needs to go from lastZoom to beyond 0
  // Each image needs to zoom from its startZoom to 0, then continue
  // The total range is from lastZoom to (0 - firstZoom)
  const zoomRange = lastZoom - (0 - firstZoom);
  const currentZoom = lastZoom + (easedProgress * Math.abs(zoomRange));

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
        ...style,
      }}
    >
      {frames.map((frame, i) => {
        const frameStartZoom = frame.startZoom;
        
        // Calculate the zoom offset for this frame
        // Each frame zooms from its startZoom continuously
        const frameZoom = currentZoom - frameStartZoom;
        const scale = toScale(frameZoom);

        // Calculate opacity - fade out as the image zooms past the screen
        // Visible when frameZoom is between startZoom and slightly past 0
        let opacity = 1;
        
        if (frameZoom < frameStartZoom) {
          // Not yet visible
          opacity = 0;
        } else if (frameZoom > 100) {
          // Zoomed too far past
          opacity = 0;
        } else if (frameZoom > 0 && frameZoom <= 100) {
          // Fade out as it zooms past full screen
          opacity = 1 - (frameZoom / 100);
        }

        // Higher index should be on top
        const zIndex = frame.zIndex ?? (i + 1);

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              zIndex,
              opacity,
              transition: 'opacity 100ms linear',
            }}
          >
            <img
              src={frame.src}
              alt={frame.alt ?? `frame-${i + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                willChange: 'transform',
                display: 'block',
                ...frame.style,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}


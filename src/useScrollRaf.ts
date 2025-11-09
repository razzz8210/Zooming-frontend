import { useEffect, useRef } from 'react';

/**
 * Subscribes to scroll with requestAnimationFrame to avoid jank.
 */
export function useScrollRaf(onTick: () => void) {
  const ticking = useRef(false);

  useEffect(() => {
    const handle = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          onTick();
          ticking.current = false;
        });
      }
    };

    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    handle(); // Initial call
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [onTick]);
}

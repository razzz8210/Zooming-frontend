import React, { useState } from 'react';
import { ZoomSequence } from '../src';
import type { ZoomFrameSpec } from '../src';
import { LeftDrawer, ZoomOverlayTrigger, ZoomquiltInfo } from '../src/components';

// Infinite zoom effect - starting from innermost, going to outermost
// Each image is nested, revealing the next outer layer
const FRAMES: ZoomFrameSpec[] = [
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    startZoom: -100, // First - innermost layer
    alt: 'Image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&q=80',
    startZoom: -200, // Second
    alt: 'Image 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1600&q=80',
    startZoom: -300, // Third
    alt: 'Image 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=1600&q=80',
    startZoom: -400, // Fourth
    alt: 'Image 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80',
    startZoom: -500, // Fifth - outermost layer
    alt: 'Image 5',
  },
];

export function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Zoom Surface */}
      <ZoomSequence
        frames={FRAMES}
        duration={15000}
        easing="linear"
        autoPlay={true}
        loop={true}
      />

      {/* Overlay Trigger - only show when drawer is closed */}
      {!drawerOpen && (
        <ZoomOverlayTrigger onOpenDrawer={() => setDrawerOpen(true)} />
      )}

      {/* Left Drawer */}
      <LeftDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <ZoomquiltInfo />
      </LeftDrawer>
    </div>
  );
}

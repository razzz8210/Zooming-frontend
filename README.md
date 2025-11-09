# React Zoom Sequence

Infinite zoom animation component for React with smooth transitions and sequential image reveals.

## Installation

```bash
npm install react-zoom-sequence
```

## Usage

```tsx
import { ZoomSequence } from 'react-zoom-sequence';

const frames = [
  { src: '/img1.jpg', startZoom: -100 },
  { src: '/img2.jpg', startZoom: -200 },
  { src: '/img3.jpg', startZoom: -300 },
];

function App() {
  return (
    <ZoomSequence 
      frames={frames} 
      duration={15000} 
      loop={true} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `frames` | `ZoomFrameSpec[]` | required | Array of images with zoom positions |
| `duration` | `number` | `10000` | Animation duration (ms) |
| `easing` | `string` or function | `'linear'` | Timing function |
| `autoPlay` | `boolean` | `true` | Start automatically |
| `loop` | `boolean` | `false` | Loop animation |

### Frame Object

```ts
{
  src: string;        // Image URL
  startZoom: number;  // Zoom units (e.g., -500)
  alt?: string;
}
```

Lower `startZoom` values appear first. Zoom units convert to scale: `scale = 1 + units/1000`

## Development

```bash
npm run dev     # Start demo
npm run build   # Build library
```

## License

MIT


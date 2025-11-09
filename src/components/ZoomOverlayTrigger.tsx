interface ZoomOverlayTriggerProps {
  onOpenDrawer: () => void;
}

export function ZoomOverlayTrigger({ onOpenDrawer }: ZoomOverlayTriggerProps) {
  return (
    <div
      onClick={onOpenDrawer}
      className="absolute inset-0 z-10 cursor-pointer"
      aria-label="Click anywhere to open menu"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDrawer();
        }
      }}
    />
  );
}

import React from 'react';

interface AdUnitProps {
  slotId?: string;
  className?: string;
}

export default function AdUnit({ slotId = 'default-slot', className = '' }: AdUnitProps) {
  // In a real application, you would initialize Adsense push here
  // e.g. (window.adsbygoogle = window.adsbygoogle || []).push({});

  return (
    <div className={`ad-unit ${className}`} aria-label="Advertisement">
      <div style={{ opacity: 0.5 }}>
        Advertisement Space (AdSense Slot: {slotId})
      </div>
    </div>
  );
}

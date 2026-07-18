import React from 'react';

interface AdUnitProps {
  slotId?: string;
  className?: string;
}

export default function AdUnit({ slotId = 'default-slot', className = '' }: AdUnitProps) {
  // Return null to hide placeholders until real AdSense is ready
  return null;
}

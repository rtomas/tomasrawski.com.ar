'use client';
import { useEffect } from 'react';

export default function WowInit() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).WOW) {
      new (window as unknown as { WOW: new () => { init: () => void } }).WOW().init();
    }
  }, []);
  return null;
}

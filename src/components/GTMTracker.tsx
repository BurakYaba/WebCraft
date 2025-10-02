'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GTMTracker() {
 const pathname = usePathname();

  useEffect(() => {
    // Track page view with GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }

    // Also track with Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-TYXDJVMSP3', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

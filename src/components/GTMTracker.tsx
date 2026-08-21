'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: unknown[];
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
  }, [pathname]);

  return null;
}

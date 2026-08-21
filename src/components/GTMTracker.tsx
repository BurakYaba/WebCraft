'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function GTMTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the initial page load — the GA4 Google tag already sends that
    // pageview itself. This only needs to cover client-side route changes,
    // which GA4's automatic history-based tracking misses because GTM loads
    // after Next.js has already captured its own history.pushState reference.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

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

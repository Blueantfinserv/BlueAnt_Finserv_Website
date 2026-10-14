import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, sanitizeSearch } from '../utils/analytics';

/**
 * AnalyticsTracker
 * Listens to React Router navigation changes and reports page_view to GA4.
 * Guards against duplicate tracking on identical re-renders or StrictMode.
 */
export default function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPathRef = useRef('');

  useEffect(() => {
    const cleanSearch = sanitizeSearch(location.search);
    const currentPath = location.pathname + cleanSearch;

    // Guard: Only track once per distinct route navigation
    if (lastTrackedPathRef.current === currentPath) {
      return;
    }

    lastTrackedPathRef.current = currentPath;
    trackPageView(location.pathname, location.search);
  }, [location.pathname, location.search]);

  return null;
}

/**
 * Google Analytics 4 (GA4) Utilities
 * Measurement ID: G-1J2HZG079E
 * 
 * Provides privacy-compliant pageview and event tracking for Single Page Applications (SPA).
 * Strictly guards against sending PII, financial details, or PAN to Google Analytics.
 */

export const GA_MEASUREMENT_ID = 'G-1J2HZG079E';

export const ROUTE_TITLES = {
  '/': 'Blueant Finserv | Trusted Financial Growth Partner',
  '/about': 'About Us | Blueant Finserv',
  '/about/company': 'Company Overview | Blueant Finserv',
  '/about/mission': 'Vision & Values | Blueant Finserv',
  '/about/team': 'Leadership Team | Blueant Finserv',
  '/about/stories': 'Why BlueAnt - Built on Trust | Blueant Finserv',
  '/services': 'Our Financial Services | Blueant Finserv',
  '/services/wealth-creation': 'Wealth Creation Solutions | Blueant Finserv',
  '/services/wealth-protection': 'Wealth Protection & Insurance | Blueant Finserv',
  '/services/wealth-preservation': 'Wealth Preservation Strategies | Blueant Finserv',
  '/services/stock-market-services': 'Stock Market Advisory Services | Blueant Finserv',
  '/resources': 'Financial Resources & Tools | Blueant Finserv',
  '/gallery': 'Gallery - Our Journey | Blueant Finserv',
  '/contact': 'Contact Us | Blueant Finserv',
  '/calculators': 'Financial Calculators - SIP, EMI & More | Blueant Finserv',
  '/team': 'Leadership Team | Blueant Finserv',
  '/careers': 'Careers - Join Our Team | Blueant Finserv',
  '/blogs': 'Expert Financial Blogs | Blueant Finserv',
  '/faq': 'Frequently Asked Questions | Blueant Finserv',
  '/coming-soon': 'Coming Soon | Blueant Finserv'
};

/**
 * Strips sensitive personal or financial parameters from query strings.
 * Preserves standard campaign/attribution parameters (utm_*, gclid, fbclid, etc.).
 */
export function sanitizeSearch(search) {
  if (!search) return '';
  try {
    const params = new URLSearchParams(search);
    const sensitiveKeyPattern = /^(email|phone|mobile|pan|aadhaar|name|full_name|first_name|last_name|user|contact|token|secret|password|pwd|account|dob)$/i;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;

    const sanitizedParams = new URLSearchParams();
    for (const [key, value] of params.entries()) {
      if (sensitiveKeyPattern.test(key) || emailPattern.test(value) || phonePattern.test(value)) {
        continue;
      }
      sanitizedParams.append(key, value);
    }
    const clean = sanitizedParams.toString();
    return clean ? `?${clean}` : '';
  } catch {
    return '';
  }
}

/**
 * Tracks a pageview in GA4.
 */
export function trackPageView(pathname, search = '') {
  const cleanSearch = sanitizeSearch(search);
  const pagePath = pathname + cleanSearch;
  const title = ROUTE_TITLES[pathname] || document.title || 'Blueant Finserv | Trusted Financial Growth Partner';

  // Ensure document.title reflects the route for browser & history
  document.title = title;

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
      send_to: GA_MEASUREMENT_ID
    });
  }
}

/**
 * Safely tracks a custom non-PII event in GA4.
 */
export function trackCustomEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const safeParams = {};
  const sensitiveKeyPattern = /^(email|phone|mobile|pan|aadhaar|name|full_name|first_name|last_name|user|contact|token|secret|password|pwd|account|dob)$/i;

  for (const [key, val] of Object.entries(params)) {
    if (!sensitiveKeyPattern.test(key) && typeof val !== 'object') {
      safeParams[key] = val;
    }
  }

  window.gtag('event', eventName, safeParams);
}

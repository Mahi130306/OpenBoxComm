/**
 * Core Web Vitals Optimization Utilities
 * Helps improve LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift)
 */

/**
 * Preload critical fonts for faster text rendering
 * Improves LCP by reducing font loading time
 */
export const preloadFonts = [
  {
    href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap',
    rel: 'stylesheet',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
    rel: 'stylesheet',
  },
]

/**
 * Preconnect to external APIs for faster requests
 * Reduces latency to third-party services
 */
export const preconnectUrls = [
  'https://api.dicebear.com',
  'https://discord.com',
  'https://cdn.discordapp.com',
  'https://www.googletagmanager.com',
]

/**
 * DNS prefetch for potential future domains
 * Reduces DNS lookup time for external resources
 */
export const dnsPrefetchUrls = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://fonts.google.com',
]

/**
 * Calculate optimal image dimensions to reduce layout shift
 * Helps prevent CLS by reserving space for images before they load
 */
export function getOptimalImageDimensions(
  width: number,
  height: number,
  maxWidth: number = 1200
): { width: number; height: number } {
  if (width <= maxWidth) {
    return { width, height }
  }

  const ratio = height / width
  return {
    width: maxWidth,
    height: Math.round(maxWidth * ratio),
  }
}

/**
 * Batch small JavaScript bundles to reduce parsing time
 * Part of FID optimization
 */
export const javaScriptOptimization = {
  // Defer non-critical scripts
  defer: ['analytics', 'social-widgets'],

  // Load critical scripts early but asynchronously
  async: ['layout', 'navigation'],

  // Inline critical styles to prevent render-blocking
  inline: true,
}

/**
 * Resource hints for performance optimization
 */
export const resourceHints = {
  preload: [
    // Preload hero image for LCP optimization
    { href: '/images/og-default.png', as: 'image', type: 'image/png' },
    // Preload critical fonts
    { href: 'https://fonts.googleapis.com', as: 'style' },
  ],

  prefetch: [
    // Prefetch next likely page based on user flow
    { href: '/servers', as: 'document' },
    { href: '/events', as: 'document' },
  ],

  preconnect: [
    { href: 'https://api.dicebear.com', crossOrigin: 'anonymous' },
    { href: 'https://cdn.discordapp.com', crossOrigin: 'anonymous' },
  ],
}

/**
 * Recommendations for improving Core Web Vitals scores
 */
export const webVitalsOptimizationTips = {
  LCP: [
    'Optimize hero images (size, format, loading)',
    'Use Next.js Image component with priority prop',
    'Defer non-critical CSS and JavaScript',
    'Use CDN for image delivery',
  ],

  FID: [
    'Break up long JavaScript tasks',
    'Use React.memo for expensive components',
    'Defer non-critical state updates',
    'Use requestIdleCallback for background work',
  ],

  CLS: [
    'Reserve space for images with aspect-ratio CSS',
    'Use transform/opacity instead of layout properties',
    'Avoid inserting content above existing content',
    'Use font-display: swap for web fonts',
  ],
}

/**
 * Image Optimization Utilities for Core Web Vitals (LCP, CLS)
 * Helps optimize images for better performance and user experience
 */

export const imageOptimizationConfig = {
  // Recommended sizes for responsive images
  sizes: {
    thumbnail: 48,
    avatar: 96,
    card: 300,
    hero: 1200,
    fullWidth: 1920,
  },

  // Loading strategy options
  loading: {
    eager: 'eager' as const,      // Critical images above the fold
    lazy: 'lazy' as const,         // Non-critical images below the fold
  },

  // Quality presets (0-100)
  quality: {
    high: 85,      // Hero, important images
    medium: 75,    // Cards, regular images
    low: 60,       // Thumbnails, background images
  },
}

/**
 * Get responsive image srcSet for different screen sizes
 * Improves Core Web Vitals by serving appropriately sized images
 */
export function getImageSrcSet(basePath: string, sizes: number[] = [300, 640, 1200, 1920]) {
  return sizes.map(size => `${basePath}?w=${size} ${size}w`).join(', ')
}

/**
 * Get recommended image sizes attribute for responsive images
 * Helps browser choose best image size for viewport
 */
export function getImageSizes(isMobile: boolean = false) {
  if (isMobile) {
    return '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px'
  }
  return '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1440px) 1000px, 1200px'
}

/**
 * Image loading priority for Core Web Vitals
 * LCP (Largest Contentful Paint) optimization
 */
export const imageLoadingStrategy = {
  // Hero/banner images above fold
  hero: {
    priority: true,
    loading: 'eager' as const,
    quality: 85,
  },

  // Cards and content images
  content: {
    priority: false,
    loading: 'lazy' as const,
    quality: 75,
  },

  // Thumbnails and small images
  thumbnail: {
    priority: false,
    loading: 'lazy' as const,
    quality: 60,
  },

  // Background/decorative images
  background: {
    priority: false,
    loading: 'lazy' as const,
    quality: 60,
  },
}

/**
 * Placeholder blur data for low-quality image placeholder (LQIP)
 * Reduces CLS by showing blur while image loads
 */
export const imagePlaceholders = {
  avatar: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 96 96%22%3E%3Crect fill=%22%23e5e7eb%22 width=%2296%22 height=%2296%22/%3E%3C/svg%3E',
  card: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 200%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
  hero: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 630%22%3E%3Crect fill=%22%231f2937%22 width=%221200%22 height=%22630%22/%3E%3C/svg%3E',
}

/**
 * Aspect ratio constants for maintaining consistent image dimensions
 * Reduces CLS (Cumulative Layout Shift) by preventing image reflow
 */
export const aspectRatios = {
  square: '1/1',
  '4:3': '4/3',
  '16:9': '16/9',
  '3:2': '3/2',
  portrait: '3/4',
  thumbnail: '1/1',
}

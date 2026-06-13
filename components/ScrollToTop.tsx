'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls the window to the top on every route change.
 * Anchor links (#hash) are excluded so in-page section navigation still works.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])

  return null
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, RefreshCw, Sparkles } from 'lucide-react'

const POLL_INTERVAL_MS = 300_000
const SESSION_KEY = 'ob_update_dismissed'

// Injected at build time via next.config.mjs env
declare global {
  interface Window {
    __BUILD_ID__: string | undefined
  }
}

export function UpdateBanner() {
  const [visible, setVisible] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Capture the build ID this page was rendered with, once on mount.
  const pageBuildId = useRef<string | null>(
    typeof window !== 'undefined'
      ? (process.env.NEXT_PUBLIC_BUILD_ID ?? null)
      : null
  )

  const dismiss = () => {
    setVisible(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // sessionStorage unavailable (private mode edge case) — silently ignore
    }
  }

  const poll = async () => {
    // Skip if tab is hidden — no need to poll in background
    if (document.visibilityState !== 'visible') return

    // Skip if user already dismissed this session
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
    } catch {
      // ignore
    }

    try {
      const res = await fetch('/api/build-id', { cache: 'no-store' })
      if (!res.ok) return
      const { buildId } = (await res.json()) as { buildId: string | null }

      if (
        buildId &&
        pageBuildId.current &&
        buildId !== pageBuildId.current
      ) {
        setVisible(true)
        // Stop polling once we know there's an update
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    } catch {
      // Network error — silently ignore
    }
  }

  useEffect(() => {
    // Don't show if user already dismissed this session
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return
    } catch {
      // ignore
    }

    intervalRef.current = setInterval(poll, POLL_INTERVAL_MS)

    // Also re-run poll when tab regains focus
    document.addEventListener('visibilitychange', poll)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      document.removeEventListener('visibilitychange', poll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="update-banner"
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -24, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
          className="fixed top-6 left-1/2 z-[9999] -translate-x-1/2"
        >
          <div
            className="
              flex items-center gap-3 rounded-2xl border border-white/10
              bg-black/60 px-5 py-3.5 shadow-2xl
              backdrop-blur-xl
              ring-1 ring-inset ring-white/5
            "
          >
            {/* Icon pulse */}
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
              <Sparkles className="relative h-4 w-4 text-violet-300" />
            </span>

            {/* Text */}
            <p className="whitespace-nowrap text-sm font-medium text-white/90">
              New update available
            </p>

            {/* Refresh button */}
            <button
              id="update-banner-refresh"
              onClick={() => window.location.reload()}
              className="
                ml-1 flex items-center gap-1.5 rounded-lg
                bg-white/10 px-3 py-1.5 text-xs font-semibold
                text-white transition-all duration-150
                hover:bg-white/20 active:scale-95
              "
            >
              <RefreshCw className="h-3 w-3" />
              Refresh
            </button>

            {/* Dismiss button */}
            <button
              id="update-banner-dismiss"
              onClick={dismiss}
              aria-label="Dismiss update notification"
              title="Dismiss update notification"
              className="
                ml-0.5 rounded-lg p-1.5 text-white/50 transition-all
                duration-150 hover:bg-white/10 hover:text-white/90
                active:scale-95
              "
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
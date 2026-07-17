'use client'

/**
 * SecurityGuard - client-side inspection deterrent
 * ──────────────────────────────────────────────────
 * Mounts once in the root layout. Adds multiple layers of deterrence:
 *
 *  1. Blocks common keyboard shortcuts (F12, Ctrl+Shift+I/J/U/S/C/K)
 *  2. Disables right-click context menu
 *  3. Silences the console in production
 *  4. Shows a friendly warning toast when the user attempts to inspect
 *
 * NOTE: These are deterrents, not absolute locks. A determined developer
 * can always bypass client-side guards. The real security is server-side:
 * middleware blocks .git / source files, source maps are disabled.
 */

import { useEffect, useRef, useState } from 'react'

const IS_PROD = process.env.NODE_ENV === 'production'

const BLOCKED_KEYS = [
  { key: 'F12' },
  { key: 'I', ctrl: true, shift: true },
  { key: 'J', ctrl: true, shift: true },
  { key: 'C', ctrl: true, shift: true },
  { key: 'K', ctrl: true, shift: true },
  { key: 'U', ctrl: true },
  { key: 'S', ctrl: true },
  { key: 'P', ctrl: true },
  { key: 'E', ctrl: true, shift: true },
]

export function SecurityGuard() {
  const [showWarning, setShowWarning] = useState(false)
  const warningTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const triggerWarning = () => {
    setShowWarning(true)
    if (warningTimer.current) clearTimeout(warningTimer.current)
    warningTimer.current = setTimeout(() => setShowWarning(false), 4000)
  }

  useEffect(() => {
    if (!IS_PROD) return

    // ── 1. Block keyboard shortcuts ─────────────────────────────────────────
    function handleKeyDown(e: KeyboardEvent) {
      for (const rule of BLOCKED_KEYS) {
        if (e.key === rule.key) {
          const ctrlMatch = rule.ctrl ? (e.ctrlKey || e.metaKey) : !(e.ctrlKey || e.metaKey)
          const shiftMatch = rule.shift ? e.shiftKey : !e.shiftKey
          if (ctrlMatch && shiftMatch) {
            e.preventDefault()
            e.stopPropagation()
            triggerWarning()
            return
          }
        }
      }
    }

    // ── 2. Disable right-click context menu ─────────────────────────────────
    function handleContextMenu(e: MouseEvent) {
      e.preventDefault()
      triggerWarning()
    }

    // ── 3. Silence console in production safely ──────────────────────────────
    const noop = () => {}
    const originalLog = console.log
    const originalWarn = console.warn
    const originalError = console.error
    const originalInfo = console.info
    const originalDebug = console.debug
    const originalTable = console.table
    const originalDir = console.dir

    console.log = noop
    console.warn = noop
    console.error = noop
    console.info = noop
    console.debug = noop
    console.table = noop
    console.dir = noop

    // ── Register listeners ───────────────────────────────────────────────────
    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('contextmenu', handleContextMenu, true)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('contextmenu', handleContextMenu, true)
      if (warningTimer.current) clearTimeout(warningTimer.current)

      // Restore console methods on unmount
      console.log = originalLog
      console.warn = originalWarn
      console.error = originalError
      console.info = originalInfo
      console.debug = originalDebug
      console.table = originalTable
      console.dir = originalDir
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!IS_PROD) return null

  return (
    <>
      {showWarning && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed bottom-6 left-1/2 z-[99999] -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/95 px-5 py-3.5 shadow-2xl backdrop-blur-xl ring-1 ring-inset ring-white/5">
            <span className="text-xl">🔒</span>
            <div>
              <p className="text-sm font-bold text-foreground">Inspection not allowed</p>
              <p className="text-xs text-muted-foreground">This site is protected. Please respect our content.</p>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              aria-label="Dismiss warning"
              className="ml-2 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

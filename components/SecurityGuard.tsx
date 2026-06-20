'use client'

/**
 * SecurityGuard — client-side inspection deterrent
 * ──────────────────────────────────────────────────
 * Mounts once in the root layout. Adds multiple layers of deterrence:
 *
 *  1. Blocks common keyboard shortcuts (F12, Ctrl+Shift+I/J/U/S/C/K)
 *  2. Disables right-click context menu
 *  3. Silences the console in production
 *
 * NOTE: These are deterrents, not absolute locks. A determined developer
 * can always bypass client-side guards. The real security is server-side:
 * middleware blocks .git / source files, source maps are disabled.
 */

import { useEffect } from 'react'

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
            return
          }
        }
      }
    }

    // ── 2. Disable right-click context menu ─────────────────────────────────
    function handleContextMenu(e: MouseEvent) {
      e.preventDefault()
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
      
      // Restore console methods on unmount
      console.log = originalLog
      console.warn = originalWarn
      console.error = originalError
      console.info = originalInfo
      console.debug = originalDebug
      console.table = originalTable
      console.dir = originalDir
    }
  }, [])

  return null
}

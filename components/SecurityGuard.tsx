'use client'

/**
 * SecurityGuard — client-side inspection deterrent
 * ──────────────────────────────────────────────────
 * Mounts once in the root layout. Adds multiple layers of deterrence:
 *
 *  1. Blocks common keyboard shortcuts (F12, Ctrl+Shift+I/J/U/S/C/K)
 *  2. Disables right-click context menu
 *  3. Blocks text selection drag (Ctrl+A still works for accessibility)
 *  4. Silences the console in production
 *  5. Detects DevTools open via timing trick → blurs and warns
 *
 * NOTE: These are deterrents, not absolute locks. A determined developer
 * can always bypass client-side guards. The real security is server-side:
 * middleware blocks .git / source files, source maps are disabled.
 */

import { useEffect } from 'react'

const IS_PROD = process.env.NODE_ENV === 'production'

// Keyboard shortcuts to block
const BLOCKED_KEYS: { key: string; ctrl?: boolean; shift?: boolean; alt?: boolean }[] = [
  { key: 'F12' },
  { key: 'I', ctrl: true, shift: true },   // Ctrl+Shift+I  — DevTools
  { key: 'J', ctrl: true, shift: true },   // Ctrl+Shift+J  — Console
  { key: 'C', ctrl: true, shift: true },   // Ctrl+Shift+C  — Inspector
  { key: 'K', ctrl: true, shift: true },   // Ctrl+Shift+K  — Firefox Console
  { key: 'U', ctrl: true },                // Ctrl+U        — View Source
  { key: 'S', ctrl: true },                // Ctrl+S        — Save page
  { key: 'P', ctrl: true },                // Ctrl+P        — Print (exposes DOM)
  { key: 'E', ctrl: true, shift: true },   // Ctrl+Shift+E  — Firefox Network
]

export function SecurityGuard() {
  useEffect(() => {
    if (!IS_PROD) return  // only enforce in production

    // ── 1. Block keyboard shortcuts ─────────────────────────────────────────
    function handleKeyDown(e: KeyboardEvent) {
      for (const rule of BLOCKED_KEYS) {
        if (
          e.key === rule.key &&
          (!rule.ctrl  || e.ctrlKey  || e.metaKey) &&
          (!rule.shift || e.shiftKey) &&
          (!rule.alt   || e.altKey)
        ) {
          // Only block if ctrl/meta is required and present, OR no modifier required
          const ctrlOk  = rule.ctrl  ? (e.ctrlKey || e.metaKey) : true
          const shiftOk = rule.shift ? e.shiftKey : !e.shiftKey || !rule.ctrl
          // Simple exact match
          if (
            e.key === rule.key &&
            (rule.ctrl  === undefined || (e.ctrlKey || e.metaKey) === !!rule.ctrl) &&
            (rule.shift === undefined || e.shiftKey === !!rule.shift)
          ) {
            e.preventDefault()
            e.stopPropagation()
            return
          }
          void ctrlOk; void shiftOk
        }
      }
    }

    // ── 2. Disable right-click context menu ─────────────────────────────────
    function handleContextMenu(e: MouseEvent) {
      e.preventDefault()
    }

    // ── 3. Silence console in production ────────────────────────────────────
    const noop = () => {}
    const _console = { ...console }
    ;(console as unknown as Record<string, unknown>).log   = noop
    ;(console as unknown as Record<string, unknown>).warn  = noop
    ;(console as unknown as Record<string, unknown>).error = noop
    ;(console as unknown as Record<string, unknown>).info  = noop
    ;(console as unknown as Record<string, unknown>).debug = noop
    ;(console as unknown as Record<string, unknown>).table = noop
    ;(console as unknown as Record<string, unknown>).dir   = noop

    // ── 4. DevTools timing detection ────────────────────────────────────────
    // DevTools open causes a measurable delay in console.log calls
    // We detect this and show a deterrent overlay
    let devToolsOpen = false
    function detectDevTools() {
      const start = performance.now()
      // This call is slow when DevTools is open
      _console.log('%c', 'color: transparent')
      const elapsed = performance.now() - start
      if (elapsed > 100 && !devToolsOpen) {
        devToolsOpen = true
        showDeterrentOverlay()
      } else if (elapsed <= 100 && devToolsOpen) {
        devToolsOpen = false
        hideDeterrentOverlay()
      }
    }

    const detectionInterval = setInterval(detectDevTools, 1000)

    // ── Deterrent overlay ────────────────────────────────────────────────────
    function showDeterrentOverlay() {
      if (document.getElementById('ob-devtools-guard')) return
      const el = document.createElement('div')
      el.id = 'ob-devtools-guard'
      el.style.cssText = `
        position: fixed; inset: 0; z-index: 999999;
        background: rgba(0,0,0,0.97);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        font-family: system-ui, sans-serif;
        color: #fff; text-align: center; padding: 2rem;
        backdrop-filter: blur(20px);
      `
      el.innerHTML = `
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:1rem">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <h2 style="font-size:1.5rem;font-weight:700;margin:0 0 0.5rem">Access Restricted</h2>
        <p style="color:rgba(255,255,255,0.5);font-size:0.9rem;max-width:340px;margin:0">
          Developer tools are not permitted on this site.<br/>
          Close DevTools to continue.
        </p>
      `
      document.body.appendChild(el)
    }

    function hideDeterrentOverlay() {
      document.getElementById('ob-devtools-guard')?.remove()
    }

    // ── Register listeners ───────────────────────────────────────────────────
    document.addEventListener('keydown',      handleKeyDown,     true)
    document.addEventListener('contextmenu',  handleContextMenu, true)

    return () => {
      document.removeEventListener('keydown',     handleKeyDown,     true)
      document.removeEventListener('contextmenu', handleContextMenu, true)
      clearInterval(detectionInterval)
      // Restore console on unmount (HMR safety)
      Object.assign(console, _console)
    }
  }, [])

  return null
}

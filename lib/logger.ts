/**
 * Open Box Logger
 * ---------------
 * Usage:
 *   import { logger } from '@/lib/logger'
 *   logger.info('Page loaded', { route: '/home' })
 *   logger.warn('Feature disabled')
 *   logger.error('Network failure', error)
 *
 * Runtime toggle (in browser console):
 *   window.__OB_LOGGING__ = true   // enable verbose logging
 *   window.__OB_LOGGING__ = false  // silence all logs
 *
 * View stored logs:
 *   JSON.parse(localStorage.getItem('ob-logs') || '[]')
 *
 * Clear logs:
 *   localStorage.removeItem('ob-logs')
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: unknown
  session?: string
}

const MAX_ENTRIES = 500
const STORAGE_KEY = 'ob-logs'
const SESSION_KEY = 'ob-session'

// ── Session ID (per tab, reused on refresh) ───────────────────────────────────
function getSessionId(): string {
  if (typeof window === 'undefined') return 'ssr'
  let id = sessionStorage.getItem(SESSION_KEY)
  if (!id) {
    id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
    sessionStorage.setItem(SESSION_KEY, id)
  }
  return id
}

// ── Determine whether to log ──────────────────────────────────────────────────
function shouldLog(level: LogLevel): boolean {
  if (typeof window === 'undefined') return false
  const override = (window as unknown as Record<string, unknown>)['__OB_LOGGING__']
  if (override === false) return false
  if (override === true) return true
  // Default: in dev, log everything; in prod, only warn/error
  const isDev = process.env.NODE_ENV === 'development'
  return isDev || level === 'warn' || level === 'error'
}

// ── Write to localStorage ─────────────────────────────────────────────────────
function persist(entry: LogEntry): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const logs: LogEntry[] = raw ? JSON.parse(raw) : []
    logs.push(entry)
    // Ring buffer — keep last MAX_ENTRIES
    if (logs.length > MAX_ENTRIES) logs.splice(0, logs.length - MAX_ENTRIES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs))
  } catch {
    // localStorage may be unavailable (private browsing quota, etc.)
  }
}

// ── Console styles ────────────────────────────────────────────────────────────
const styles: Record<LogLevel, string> = {
  debug: 'color: #888; font-weight: normal',
  info:  'color: #4fc3f7; font-weight: bold',
  warn:  'color: #ffb74d; font-weight: bold',
  error: 'color: #ef5350; font-weight: bold',
}

// ── Core log function ─────────────────────────────────────────────────────────
function log(level: LogLevel, message: string, data?: unknown): void {
  if (!shouldLog(level)) return

  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    session: typeof window !== 'undefined' ? getSessionId() : 'ssr',
    ...(data !== undefined ? { data } : {}),
  }

  // Console output
  const prefix = `%c[OB:${level.toUpperCase()}]`
  const time = `[${entry.timestamp}]`
  if (data !== undefined) {
    console.log(prefix, styles[level], `${time} ${message}`, data)
  } else {
    console.log(prefix, styles[level], `${time} ${message}`)
  }

  // Persist to localStorage
  persist(entry)
}

// ── Public API ────────────────────────────────────────────────────────────────
export const logger = {
  debug: (msg: string, data?: unknown) => log('debug', msg, data),
  info:  (msg: string, data?: unknown) => log('info',  msg, data),
  warn:  (msg: string, data?: unknown) => log('warn',  msg, data),
  error: (msg: string, data?: unknown) => log('error', msg, data),

  /** Returns all stored log entries */
  getLogs: (): LogEntry[] => {
    if (typeof window === 'undefined') return []
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  },

  /** Clears all stored log entries */
  clearLogs: (): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(STORAGE_KEY)
  },

  /** Enable/disable logging at runtime */
  setEnabled: (enabled: boolean): void => {
    if (typeof window === 'undefined') return
    ;(window as unknown as Record<string, unknown>)['__OB_LOGGING__'] = enabled
    console.log(`[OB:LOGGER] Logging ${enabled ? 'enabled ✅' : 'disabled 🔇'}`)
  },
}

// Expose logger on window for DevTools convenience
if (typeof window !== 'undefined') {
  ;(window as unknown as Record<string, unknown>)['__ob'] = logger
}

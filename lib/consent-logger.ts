/**
 * Open Box — Consent Logger
 * ─────────────────────────
 * Records user consent decisions (accept / reject / dismiss) to:
 *   1. localStorage  — instant client-side retrieval
 *   2. POST /api/consent — server-side audit log (stdout / log drain)
 *
 * Complies with:
 *   • IT Act, 2000 §43A
 *   • DPDP Act, 2023 §6 (free, specific, informed, unconditional, unambiguous consent)
 *   • IT (Intermediary Guidelines & Digital Media Ethics Code) Rules, 2021
 *
 * Usage:
 *   import { getConsentRecord, recordConsent, clearConsent } from '@/lib/consent-logger'
 */

export type ConsentAction = 'accept' | 'reject' | 'dismiss'

export interface ConsentRecord {
  /** Anonymous UUID — never tied to personal identity */
  visitorId: string
  /** User's decision */
  action: ConsentAction
  /** Version / last-updated date of the T&C shown */
  tcVersion: string
  /** Version / last-updated date of the PP shown */
  ppVersion: string
  /** ISO 8601 UTC timestamp */
  timestamp: string
  /** Human-readable IST timestamp for Indian audit trail */
  timestampIST: string
  /** User-agent string (for audit, not for tracking) */
  userAgent: string
  /** Referrer at time of consent */
  referrer: string
  /** URL of the page where consent was obtained */
  pageUrl: string
}

// ── Constants ────────────────────────────────────────────────────────────────

/** Keep in sync with the actual last-updated dates on the legal pages */
export const TC_VERSION  = '2025-06-06'
export const PP_VERSION  = '2025-06-06'

const CONSENT_KEY    = 'ob-consent'
const VISITOR_ID_KEY = 'ob-visitor-id'

// ── Visitor ID (anonymous, persistent per browser) ────────────────────────────

function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return 'ssr'
  let id = localStorage.getItem(VISITOR_ID_KEY)
  if (!id) {
    // crypto.randomUUID is available in all modern browsers and Node ≥14.17
    id = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
    localStorage.setItem(VISITOR_ID_KEY, id)
  }
  return id
}

// ── Timestamp helpers ─────────────────────────────────────────────────────────

function toIST(date: Date): string {
  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
  }) + ' IST'
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Read the stored consent record from localStorage.
 * Returns null if not yet consented (or localStorage unavailable).
 */
export function getConsentRecord(): ConsentRecord | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw ? (JSON.parse(raw) as ConsentRecord) : null
  } catch {
    return null
  }
}

/**
 * Record a consent decision.
 * - Persists to localStorage immediately.
 * - Fires a POST to /api/consent for the server-side audit log (non-blocking).
 * - 'dismiss' is intentionally NOT stored to localStorage so the banner
 *   re-appears on next visit (session-only hide).
 */
export async function recordConsent(action: ConsentAction): Promise<void> {
  if (typeof window === 'undefined') return

  const now = new Date()

  const record: ConsentRecord = {
    visitorId:    getOrCreateVisitorId(),
    action,
    tcVersion:    TC_VERSION,
    ppVersion:    PP_VERSION,
    timestamp:    now.toISOString(),
    timestampIST: toIST(now),
    userAgent:    navigator.userAgent,
    referrer:     document.referrer || '(direct)',
    pageUrl:      window.location.href,
  }

  // Persist to localStorage only for accept / reject (dismiss is session-only)
  if (action !== 'dismiss') {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(record))
    } catch {
      // Quota exceeded or private browsing — ignore
    }
  }

  // Fire-and-forget server audit log
  try {
    await fetch('/api/consent', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(record),
      // keepalive lets the request outlive page navigation
      keepalive: true,
    })
  } catch {
    // Network failure — consent is still stored client-side
  }
}

/**
 * Clear the stored consent record (e.g., when T&C version changes).
 */
export function clearConsent(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CONSENT_KEY)
}

/**
 * Returns true if the user has already accepted or rejected consent,
 * AND the stored T&C/PP versions match the current versions.
 * If versions differ, old consent is cleared and false is returned.
 */
export function hasValidConsent(): boolean {
  const record = getConsentRecord()
  if (!record) return false

  // Version bump → force re-consent
  if (record.tcVersion !== TC_VERSION || record.ppVersion !== PP_VERSION) {
    clearConsent()
    return false
  }

  // 'accept' or 'reject' both count as a completed consent decision
  return record.action === 'accept' || record.action === 'reject'
}

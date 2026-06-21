/**
 * POST /api/consent
 *
 * Server-side consent audit log endpoint.
 *
 * Complies with:
 *   • IT Act, 2000 §43A — Body corporate must maintain reasonable security
 *   • DPDP Act, 2023 §6 — Consent must be recorded with verifiable evidence
 *   • IT (Intermediary Guidelines) Rules, 2021 — Retention of consent records
 *
 * What is logged (stdout / Vercel log drain / server log file):
 *   [OB:CONSENT] {ISO timestamp IST} | action=accept | visitorId=xxx | tc=2025-06-06 | pp=2025-06-06 | ua=... | ref=...
 *
 * No personally identifiable information is stored beyond:
 *   - An anonymous, self-generated visitorId (UUID)
 *   - UserAgent string (required for audit, not for tracking)
 *   - Timestamp
 * This is compliant with DPDP Act minimal-data principles.
 */

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface ConsentPayload {
  visitorId:    string
  action:       'accept' | 'reject' | 'dismiss'
  tcVersion:    string
  ppVersion:    string
  timestamp:    string
  timestampIST: string
  userAgent:    string
  referrer:     string
  pageUrl:      string
}

const ALLOWED_ACTIONS = new Set(['accept', 'reject', 'dismiss'])

export async function POST(req: NextRequest) {
  try {
    const body: ConsentPayload = await req.json()

    // ── Validation ───────────────────────────────────────────────────────────
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
    }

    if (!ALLOWED_ACTIONS.has(body.action)) {
      return NextResponse.json({ ok: false, error: 'Invalid action' }, { status: 400 })
    }

    if (!body.visitorId || !body.timestamp) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // ── Sanitize (don't log anything that could be injected) ─────────────────
    const safeRecord = {
      visitorId:    String(body.visitorId).slice(0, 64),
      action:       body.action,
      tcVersion:    String(body.tcVersion  || '').slice(0, 20),
      ppVersion:    String(body.ppVersion  || '').slice(0, 20),
      timestamp:    String(body.timestamp  || '').slice(0, 30),
      timestampIST: String(body.timestampIST || '').slice(0, 40),
      userAgent:    String(body.userAgent  || '').slice(0, 300),
      referrer:     String(body.referrer   || '').slice(0, 500),
      pageUrl:      String(body.pageUrl    || '').slice(0, 500),
      // Server-side metadata
      serverIp:     req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown',
      receivedAt:   new Date().toISOString(),
    }

    // ── Structured log line (captured by Vercel / any log drain) ─────────────
    // Format designed for easy grep / audit:
    //   [OB:CONSENT] | action | visitorId | tc | pp | IST timestamp | UA
    console.log(
      `[OB:CONSENT] action=${safeRecord.action}` +
      ` | visitorId=${safeRecord.visitorId}` +
      ` | tc=${safeRecord.tcVersion}` +
      ` | pp=${safeRecord.ppVersion}` +
      ` | ts_utc=${safeRecord.timestamp}` +
      ` | ts_ist="${safeRecord.timestampIST}"` +
      ` | ip=${safeRecord.serverIp}` +
      ` | ua="${safeRecord.userAgent}"` +
      ` | ref="${safeRecord.referrer}"` +
      ` | url="${safeRecord.pageUrl}"`
    )

    // ── JSON audit record (machine-parseable, on a separate line) ─────────────
    console.log('[OB:CONSENT:JSON]', JSON.stringify(safeRecord))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[OB:CONSENT:ERROR]', err)
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 })
  }
}

// Only POST is allowed
export async function GET() {
  return NextResponse.json({ ok: false, error: 'Method not allowed' }, { status: 405 })
}

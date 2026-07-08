import { NextResponse } from 'next/serve'

const BASE_URL = 'https://openboxcomm.in'
const INDEXNOW_KEY = 'a63d11d22e28485ea9e0da8f7fa62387'
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`

// All URLs to submit — keep in sync with app/sitemap.ts
const URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/about`,
  `${BASE_URL}/servers`,
  `${BASE_URL}/servers/jn`,
  `${BASE_URL}/servers/dev`,
  `${BASE_URL}/servers/gg`,
  `${BASE_URL}/events`,
  `${BASE_URL}/blogs`,
  `${BASE_URL}/doc`,
  `${BASE_URL}/doc/rules`,
  `${BASE_URL}/doc/jn`,
  `${BASE_URL}/doc/dev`,
  `${BASE_URL}/doc/gg`,
  `${BASE_URL}/contact-us`,
  `${BASE_URL}/legal/community-rules`,
  `${BASE_URL}/legal/refund-policy`,
  `${BASE_URL}/legal/dmca-policy`,
  `${BASE_URL}/legal/acceptable-use-policy`,
  `${BASE_URL}/legal/event-policy`,
  `${BASE_URL}/legal/terms-and-conditions`,
  `${BASE_URL}/legal/privacy-policy`,
  `${BASE_URL}/legal/cookie-policy`,
  `${BASE_URL}/support`,
  `${BASE_URL}/help`,
]

// IndexNow batch submission endpoints (Bing + Yandex both use the same protocol)
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
]

async function submitToEndpoint(endpoint: string) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'openboxcomm.in',
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: URLS,
    }),
  })
  return { endpoint, status: res.status, ok: res.ok }
}

/**
 * POST /api/indexnow
 *
 * Submits all site URLs to IndexNow (Bing + Yandex).
 * Secure this with an INDEXNOW_SECRET env var so only authorized callers
 * (e.g. your CI/CD pipeline) can trigger it.
 *
 * Usage from deploy script:
 *   curl -X POST https://openboxcomm.in/api/indexnow \
 *     -H "x-indexnow-secret: YOUR_SECRET"
 */
export async function POST(request: Request) {
  // Optional: protect the endpoint with a secret token
  const secret = process.env.INDEXNOW_SECRET
  if (secret) {
    const provided = request.headers.get('x-indexnow-secret')
    if (provided !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  try {
    const results = await Promise.all(INDEXNOW_ENDPOINTS.map(submitToEndpoint))
    const allOk = results.every((r) => r.ok || r.status === 202)

    return NextResponse.json(
      {
        success: allOk,
        submitted: URLS.length,
        results: results.map((r) => ({ endpoint: r.endpoint, status: r.status })),
      },
      { status: allOk ? 200 : 207 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to submit URLs', detail: String(err) },
      { status: 500 }
    )
  }
}

/**
 * GET /api/indexnow
 * Returns current submission config for debugging (no sensitive data).
 */
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlCount: URLS.length,
    endpoints: INDEXNOW_ENDPOINTS,
    urls: URLS,
  })
}

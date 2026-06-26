export const runtime = 'edge'

export function GET() {
  return Response.json(
    { buildId: process.env.NEXT_PUBLIC_BUILD_ID ?? null },
    {
      headers: {
        // Never cache — always return the live build ID
        'Cache-Control': 'no-store',
      },
    }
  )
}

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing invite code' }, { status: 400 })
  }

  try {
    const res = await fetch(`https://discord.com/api/v9/invites/${code}?with_counts=true`, {
      next: { revalidate: 10 } // Cache for 10 seconds to avoid hitting rate limits
    })
    
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch from Discord' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

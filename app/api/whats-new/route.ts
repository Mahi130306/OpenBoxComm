import { NextResponse } from 'next/server'
import { Update } from '@/types'

const updates: Update[] = [
  {
    id: 'welcome-to-open-box',
    title: 'Welcome to Open Box',
    type: 'announcement',
    date: '2026-07-01',
    description: 'Welcome to Open Box. This is where we will share updates about the community.',
    href: '/servers',
    isNew: true,
  },
  {
    id: 'where-we-go-from-here',
    title: 'Where We Go From Here',
    type: 'blog',
    date: '2026-07-01',
    description: 'OpenBox has gone from a club side-project to its own independent community.',
    href: '/blog/where-we-go-from-here',
    isNew: true,
  },
  {
    id: 'getting-started-guide',
    title: 'Getting Started Guide',
    type: 'doc',
    date: '2026-07-01',
    description: 'New to Open Box? Start here. Everything you need to join.',
    href: '/docs/getting-started',
    isNew: false,
  },
  {
    id: 'ob-gg-beta',
    title: 'OB GG Is in Beta',
    type: 'blog',
    date: '2026-07-01',
    description: 'OB GG is our gaming server. It is live now in beta.',
    href: '/blog/ob-gg-gaming-server-beta',
    isNew: true,
  },
]

export async function GET() {
  return NextResponse.json(updates)
}

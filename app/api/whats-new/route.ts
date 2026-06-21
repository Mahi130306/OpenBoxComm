import { NextResponse } from 'next/server'
import { Update } from '@/types'

const updates: Update[] = [
  {
    id
  }
  {
    id: '1',
    title: 'Where We Go From Here',
    type: 'blog',
    date: '2026-06-11',
    description: 'OpenBox has gone from a club side-project to its own independent community.',
    href: '/blog/where-we-go-from-here',
    isNew: true,
  },
  {
    id: '2',
    title: 'OB GG Is in Beta',
    type: 'blog',
    date: '2026-06-01',
    description: 'OB GG is our gaming server. It is live now in beta.',
    href: '/blog/ob-gg-gaming-server-beta',
    isNew: true,
  },
  {
    id: '3',
    title: 'Getting Started Guide',
    type: 'doc',
    date: '2026-05-20',
    description: 'New to Open Box? Start here. Everything you need to join.',
    href: '/docs/getting-started',
    isNew: false,
  },

]

export async function GET() {
  return NextResponse.json(updates)
}

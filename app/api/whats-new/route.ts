import { NextResponse } from 'next/server'
import { Update } from '@/types'

const updates: Update[] = [
  {
    id: 'new-socials-whatsapp-reddit',
    title: 'Now on WhatsApp & Reddit',
    type: 'community',
    date: '2026-07-14',
    description: 'Open Box is now on WhatsApp Channels and Reddit. Follow along for updates, highlights, and community news.',
    href: '/join?tab=socials',
    isNew: true,
  },
  {
    id: 'welcome-to-open-box',
    title: 'Welcome to Open Box',
    type: 'announcement',
    date: '2026-06-30',
    description: 'Welcome to Open Box. This is where we will share updates about the community.',
    href: '/servers',
    isNew: true,
  },
  {
    id: 'where-we-go-from-here',
    title: 'Where We Go From Here',
    type: 'blog',
    date: '2026-06-29',
    description: 'OpenBox has gone from a club side-project to its own independent community.',
    href: '/blogs/where-we-go-from-here',
    isNew: true,
  },
  {
    id: 'getting-started-guide',
    title: 'Getting Started Guide',
    type: 'doc',
    date: '2026-06-29',
    description: 'New to Open Box? Start here. Everything you need to join.',
    href: '/doc/getting-started',
    isNew: false,
  },
  {
    id: 'ob-gg-beta',
    title: 'OB GG Is in Beta',
    type: 'blog',
    date: '2026-06-29',
    description: 'OB GG is our gaming server. It is live now in beta.',
    href: '/blogs/ob-gg-gaming-server-beta',
    isNew: true,
  },

]

export async function GET() {
  return NextResponse.json(updates)
}

export const SITE_NAME = 'Open Box'
export const SITE_DESCRIPTION = 'A tech community with multiple Discord servers. Join us to build, learn, and connect.'
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const DISCORD_INVITE_MAIN = process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN || 'https://discord.gg/7ZWckKU89J'
export const DISCORD_JN_INVITE = process.env.NEXT_PUBLIC_DISCORD_JN_INVITE || 'https://discord.gg/7ZWckKU89J'
export const DISCORD_DEV_INVITE = process.env.NEXT_PUBLIC_DISCORD_DEV_INVITE || 'https://discord.gg/H2AmpBrPdW'
export const DISCORD_GG_INVITE = process.env.NEXT_PUBLIC_DISCORD_GG_INVITE || 'https://discord.gg/etnc7ZpDKT'

export const PATREON_URL = process.env.NEXT_PUBLIC_PATREON_URL || 'https://patreon.com/OpenBoxComm'
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/openboxcomm'
export const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@obcommunities-yt'
export const X_URL = process.env.NEXT_PUBLIC_X_URL || 'https://x.com/Openboxcomm'

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'Docs', href: '/docs' },
  { label: 'Help', href: '/help' },
  { label: 'Support Us', href: '/sponsor' },
]

export const FEATURES = [
  {
    title: 'Build Together',
    description: 'Join a community focused on creating amazing things.',
  },
  {
    title: 'Learn & Grow',
    description: 'Gain knowledge from experienced developers and industry experts.',
  },
  {
    title: 'Network',
    description: 'Connect with like-minded developers worldwide.',
  },
  {
    title: 'Events & Resources',
    description: 'Access exclusive events, workshops, and learning materials.',
  }
]

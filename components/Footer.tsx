import Link from 'next/link'
import Image from 'next/image'

// Social icon SVGs (inline, no extra dep)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const PatreonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M14.82 2.41C11.56 2.41 8.9 5.07 8.9 8.34c0 3.26 2.66 5.93 5.92 5.93 3.26 0 5.93-2.67 5.93-5.93 0-3.27-2.67-5.93-5.93-5.93zM2 21.6h3.5V2.41H2V21.6z" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

// ── Creator config ────────────────────────────────────────────────────────────
const CREATOR_NAME = 'Sachin'
const CREATOR_HREF = '/team/sachin'

export function Footer() {
  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@obcommunities-yt',
      icon: <YoutubeIcon />,
      id: 'footer-youtube',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/openboxcomm/',
      icon: <InstagramIcon />,
      id: 'footer-instagram',
    },
    {
      name: 'Patreon',
      href: 'https://patreon.com/OpenBoxComm',
      icon: <PatreonIcon />,
      id: 'footer-patreon',
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/Openboxcomm',
      icon: <XIcon />,
      id: 'footer-x',
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/7ZWckKU89J',
      icon: <DiscordIcon />,
      id: 'footer-discord',
    },
  ]

  const legalLinks = [
    { label: 'Terms & Conditions', href: '/legal/terms' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Cookie Policy', href: '/legal/cookie' },
    { label: 'Community Rules', href: '/legal/rules' },
    { label: 'AUP', href: '/legal/aup' },
    { label: 'DMCA / Copyright', href: '/legal/dmca' },
    { label: 'Refund Policy', href: '/legal/refund' },
    { label: 'Event Policy', href: '/legal/event' },
  ]

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src="/images/OB.png"
                  alt="Open Box logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-heading font-bold tracking-tight">Open Box</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              OpenBox: Free communities for gaming, dev, study & more.
            </p>

            {/* Social links */}
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                // { label: 'Team', href: '/team' },
                // { label: 'Join', href: '/join' },
                { label: 'Servers', href: '/servers' },
                { label: 'Events', href: '/events' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'Docs', href: '/doc' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Community</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Support Us', href: '/support' },
                { label: 'Help Centre', href: '/help' },
                { label: 'Jn. Server', href: '/servers/jn' },
                { label: 'Dev Server', href: '/servers/dev' },
                { label: 'GG Server', href: '/servers/gg' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Open Box. All rights reserved.</p>

          <p>
            Created by{' '}
            <Link
              href={CREATOR_HREF}
              id="footer-creator"
              className="font-medium text-foreground/70 underline underline-offset-2 hover:text-foreground transition-colors"
            >
              {CREATOR_NAME}
            </Link>
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {/* <Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/legal/cookie" className="hover:text-foreground transition-colors">Cookies</Link>
            <Link href="/legal/rules" className="hover:text-foreground transition-colors">Rules</Link>
            <Link href="/legal/aup" className="hover:text-foreground transition-colors">AUP</Link>
            <Link href="/legal/dmca" className="hover:text-foreground transition-colors">DMCA</Link>
            <Link href="/legal/refund" className="hover:text-foreground transition-colors">Refunds</Link>
            <Link href="/legal/event" className="hover:text-foreground transition-colors">Events</Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
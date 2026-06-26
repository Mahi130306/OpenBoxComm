'use client'

import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import type { Sponsor } from '@/lib/community-data'

interface SponsorsMarqueeProps {
  sponsors: Sponsor[]
  /** Show as compact strip (sidebar) or full banner (below agenda) */
  variant?: 'strip' | 'banner'
}

export function SponsorsMarquee({ sponsors, variant = 'banner' }: SponsorsMarqueeProps) {
  if (!sponsors || sponsors.length === 0) return null

  // Duplicate list so the marquee loops seamlessly
  const items = [...sponsors, ...sponsors, ...sponsors]

  if (variant === 'strip') {
    return (
      <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-yellow-500/70">
          {sponsors.length === 1 ? 'Sponsored by' : 'Our Sponsors'}
        </p>

        {sponsors.length === 1 ? (
          // Single sponsor — static, no marquee needed
          <SingleSponsor sponsor={sponsors[0]} />
        ) : (
          // Multiple sponsors — marquee
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-slow gap-6">
              {items.map((sponsor, i) => (
                <a
                  key={`${sponsor.name}-${i}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 flex-col items-center gap-1.5"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-7 w-auto max-w-[80px] object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="text-[10px] text-muted-foreground group-hover:text-foreground">
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
            <MarqueeFades />
          </div>
        )}
      </div>
    )
  }

  // Banner variant (below agenda)
  return (
    <section className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 sm:p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-yellow-500/70">
        {sponsors.length === 1 ? 'Event Sponsor' : 'Event Sponsors & Partners'}
      </p>

      {sponsors.length === 1 ? (
        <SingleSponsorBanner sponsor={sponsors[0]} />
      ) : (
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 py-2">
            {items.map((sponsor, i) => (
              <a
                key={`${sponsor.name}-${i}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 items-center gap-4 rounded-xl border border-white/5 bg-background/40 px-5 py-3 transition-colors hover:border-yellow-500/30 hover:bg-background/70"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-8 w-auto max-w-[110px] object-contain grayscale transition-all group-hover:grayscale-0"
                />
                <div>
                  <p className="text-sm font-semibold leading-tight">{sponsor.name}</p>
                  {sponsor.tagline && (
                    <p className="text-xs text-muted-foreground">{sponsor.tagline}</p>
                  )}
                </div>
                <ExternalLink className="ml-2 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
          <MarqueeFades />
        </div>
      )}
    </section>
  )
}

// ─── Single sponsor layouts ───────────────────────────────────────────────────

function SingleSponsor({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3"
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="h-7 w-auto max-w-[90px] object-contain opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
      />
      <div>
        <p className="text-sm font-bold">{sponsor.name}</p>
        {sponsor.tagline && (
          <p className="text-xs text-muted-foreground">{sponsor.tagline}</p>
        )}
      </div>
    </a>
  )
}

function SingleSponsorBanner({ sponsor }: { sponsor: Sponsor }) {
  const socialUrls: Record<string, (h: string) => string> = {
    x:         (h) => `https://x.com/${h}`,
    instagram: (h) => `https://instagram.com/${h}`,
    linkedin:  (h) => `https://linkedin.com/company/${h}`,
    youtube:   (h) => `https://youtube.com/@${h}`,
  }
  const socialLabels: Record<string, string> = {
    x: 'X', instagram: 'Instagram', linkedin: 'LinkedIn', youtube: 'YouTube',
  }
  const socials = sponsor.socials
    ? Object.entries(sponsor.socials).filter(([, h]) => !!h)
    : []

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="h-12 w-auto max-w-[140px] object-contain"
        />
        <div>
          <p className="text-lg font-bold">{sponsor.name}</p>
          {sponsor.tagline && (
            <p className="text-sm text-muted-foreground">{sponsor.tagline}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {socials.map(([platform, handle]) => (
          <a
            key={platform}
            href={socialUrls[platform]?.(handle as string)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            @{handle} on {socialLabels[platform] ?? platform}
          </a>
        ))}
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-white/20"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Visit {sponsor.name}
        </a>
      </div>
    </div>
  )
}

// ─── Edge fade overlay ────────────────────────────────────────────────────────

function MarqueeFades() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-yellow-500/5 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-yellow-500/5 to-transparent" />
    </>
  )
}
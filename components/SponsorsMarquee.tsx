import React from 'react'
import { ExternalLink } from 'lucide-react'
import type { Sponsor } from '@/lib/community-data'

interface SponsorsMarqueeProps {
  sponsors: Sponsor[]
  variant?: 'banner'
}

const socialLabels: Record<string, string> = {
  x: 'X',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
}

const socialUrls: Record<string, (handle: string) => string> = {
  x: (handle) => `https://x.com/${handle}`,
  instagram: (handle) => `https://instagram.com/${handle}`,
  linkedin: (handle) => `https://linkedin.com/company/${handle}`,
  youtube: (handle) => `https://youtube.com/@${handle}`,
}

export function getSponsorGroupLabel(sponsors: Sponsor[]) {
  const sponsorCount = sponsors.filter((sponsor) => (sponsor.type ?? 'sponsor') === 'sponsor').length
  const partnerCount = sponsors.filter((sponsor) => sponsor.type === 'partner').length

  if (sponsorCount > 0 && partnerCount > 0) return 'Sponsors & Partners'
  if (partnerCount > 0) return partnerCount === 1 ? 'Partner' : `${partnerCount} Partners`
  if (sponsorCount === 1) return 'Sponsored'

  return `${sponsorCount} Sponsors`
}

function getSponsorSectionLabel(sponsors: Sponsor[]) {
  const label = getSponsorGroupLabel(sponsors)

  if (label === 'Sponsored') return 'Event Sponsor'
  if (label === 'Partner') return 'Event Partner'

  return `Event ${label}`
}

function getSponsorTypeLabel(sponsor: Sponsor) {
  return sponsor.type === 'partner' ? 'Partner' : 'Sponsor'
}

export function SponsorsMarquee({ sponsors, variant = 'banner' }: SponsorsMarqueeProps) {
  if (variant !== 'banner' || sponsors.length === 0) return null

  if (sponsors.length === 1) {
    return <SingleSponsorBanner sponsor={sponsors[0]} />
  }

  const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors]

  return (
    <section className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 sm:p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-yellow-500/70">
        {getSponsorSectionLabel(sponsors)}
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 py-1">
          {marqueeSponsors.map((sponsor, index) => (
            <SponsorCard key={`${sponsor.name}-${index}`} sponsor={sponsor} />
          ))}
        </div>
        <MarqueeFades />
      </div>
    </section>
  )
}

function SingleSponsorBanner({ sponsor }: { sponsor: Sponsor }) {
  const socials = sponsor.socials
    ? Object.entries(sponsor.socials).filter(([, handle]) => !!handle)
    : []

  return (
    <section className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 sm:p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-yellow-500/70">
        {getSponsorSectionLabel([sponsor])}
      </p>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="h-12 w-auto max-w-[140px] object-contain"
          />
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <p className="text-lg font-bold">{sponsor.name}</p>
              <span className="rounded-full border border-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-500/70">
                {getSponsorTypeLabel(sponsor)}
              </span>
            </div>
            {sponsor.tagline && (
              <p className="text-sm text-muted-foreground">{sponsor.tagline}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-yellow-500/30"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit {sponsor.name}
          </a>
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
        </div>
      </div>
    </section>
  )
}

function SponsorCard({ sponsor }: { sponsor: Sponsor; key?: React.Key }) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-[260px] shrink-0 items-center gap-4 rounded-xl border border-yellow-500/20 bg-background/50 px-5 py-4 transition-colors hover:border-yellow-500/40 hover:bg-background/80"
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="h-10 w-auto max-w-[120px] object-contain grayscale transition-all group-hover:grayscale-0"
      />
      <div className="min-w-0">
        <div className="mb-1 flex items-center gap-2">
          <p className="truncate text-sm font-semibold">{sponsor.name}</p>
          <span className="shrink-0 rounded-full border border-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-500/70">
            {getSponsorTypeLabel(sponsor)}
          </span>
        </div>
        {sponsor.tagline && (
          <p className="line-clamp-2 text-xs text-muted-foreground">{sponsor.tagline}</p>
        )}
      </div>
    </a>
  )
}

function MarqueeFades() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/70 to-transparent" />
    </>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  CalendarClock,
  MapPin,
  Ticket,
  ChevronLeft,
  ExternalLink,
  Users,
  Globe,
  Wifi,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { events, getEvent, getServer } from '@/lib/community-data'
import { getEventDetails } from '@/lib/event'
import { CountdownTimer } from '@/components/CountdownTimer'
import { EventCTAButton } from '@/components/EventCTAButton'
import { SponsorsMarquee, getSponsorGroupLabel } from '@/components/SponsorsMarquee'
import { EventContentTabs } from '@/components/EventContentTabs'

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }))
}

function getServerAccent(slug: string): string {
  switch (slug) {
    case 'dev': return 'from-emerald-500 to-green-400'
    case 'gg':  return 'from-rose-500 to-red-400'
    case 'jn':  return 'from-amber-400 to-rose-400'
    default:    return 'from-cyan-500 to-blue-500'
  }
}

function getServerGlowDark(slug: string): string {
  switch (slug) {
    case 'dev': return 'dark:from-emerald-500/8'
    case 'gg':  return 'dark:from-rose-500/8'
    case 'jn':  return 'dark:from-amber-400/8'
    default:    return 'dark:from-cyan-500/8'
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = getEvent(id)
  if (!event) notFound()

  const accentClass = getServerAccent(event.serverSlug)
  const glowDark    = getServerGlowDark(event.serverSlug)

  const date = new Date(event.date)

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month:   'long',
    day:     'numeric',
    year:    'numeric',
    hour:    'numeric',
    minute:  '2-digit',
  })
  const shortDay     = date.toLocaleDateString('en-US', { day:     '2-digit' })
  const shortMonth   = date.toLocaleDateString('en-US', { month:   'short'   }).toUpperCase()
  const shortWeekday = date.toLocaleDateString('en-US', { weekday: 'long'    })

  const sponsors   = event.sponsors ?? []
  const heroSponsor = sponsors.length === 1 ? sponsors[0] : null
  const details = getEventDetails(event.id)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden pb-24">
      {/* Ambient glow — dark mode only, invisible in light */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-32 left-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-br ${glowDark} via-transparent to-transparent blur-[140px] dark:opacity-100 opacity-0`}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">

        {/* ── Back button ─────────────────────────────────────────────── */}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-ml-2 mb-6 gap-1.5 text-muted-foreground hover:text-foreground"
        >
          <Link href="/events">
            <ChevronLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </Button>

        {/* ── Hero card ───────────────────────────────────────────────── */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {/* Server accent bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${accentClass}`} />

          <div className="p-6 sm:p-8 lg:p-12">
            {/*
              Mobile:  stack vertically — badges → title → desc → date/loc → calendar
              Desktop: left content + right calendar (side by side)
            */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

              {/* ── Left: text ──────────────────────────────────────── */}
              <div className="flex-1 space-y-5 min-w-0">

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${accentClass} px-3 py-1 text-xs font-bold text-black/75`}
                  >
                    {event.server}
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {event.isOffline ? (
                      <><Globe className="h-3 w-3" /> In‑Person</>
                    ) : (
                      <><Wifi className="h-3 w-3" /> Online</>
                    )}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                      event.ticketStatus === 'free'
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    <Ticket className="h-3 w-3" />
                    {event.ticketStatus === 'free' ? 'Free Access' : `Paid · ${event.price}`}
                  </span>

                  {sponsors.length > 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-600 dark:text-yellow-400">
                      ✦ {getSponsorGroupLabel(sponsors)}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {event.name}
                </h1>

                {/* Description */}
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {event.description}
                </p>

                {/* Date + Location chips */}
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50">
                      <CalendarClock className="h-4 w-4" />
                    </div>
                    <span className="leading-snug">{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* ── Right: calendar block + sponsor (desktop only) ──── */}
              <div className="flex shrink-0 flex-row items-center gap-4 lg:flex-col lg:items-end">
                {/* Calendar widget */}
                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
                  <div className={`bg-gradient-to-r ${accentClass} px-8 py-1.5 text-center`}>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/70">
                      {shortMonth}
                    </span>
                  </div>
                  <div className="px-8 py-4 text-center">
                    <span className="block text-5xl font-extrabold leading-none text-foreground">
                      {shortDay}
                    </span>
                    <span className="mt-1.5 block text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                      {shortWeekday}
                    </span>
                  </div>
                </div>

                {/* Hero sponsor logo */}
                {heroSponsor && (
                  <a
                    href={heroSponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/30 px-5 py-3.5 transition-all hover:bg-muted/60"
                  >
                    <img
                      src={heroSponsor.logo}
                      alt={heroSponsor.name}
                      className="h-9 w-auto max-w-[130px] object-contain grayscale transition-all group-hover:grayscale-0"
                    />
                    <span className="flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      <ExternalLink className="h-3 w-3" />
                      Visit {heroSponsor.name}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Registration card (mobile — above content) ───────────────── */}
        <div className="mb-8 lg:hidden">
          <RegistrationCard
            event={event}
            formattedDate={formattedDate}
            accentClass={accentClass}
          />
        </div>

        {/* ── Main two-column grid ─────────────────────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left: tabs / accordion */}
          <div className="lg:col-span-2 space-y-8 min-w-0">
            <EventContentTabs
              about={details.about}
              agenda={event.agenda}
              prep={details.prep}
              rules={details.rules}
              accentClass={accentClass}
            />

            {sponsors.length > 0 && (
              <div className="mt-8 w-full overflow-hidden">
                <SponsorsMarquee sponsors={sponsors} />
              </div>
            )}
          </div>

          {/* Right: sticky sidebar (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              <RegistrationCard
                event={event}
                formattedDate={formattedDate}
                accentClass={accentClass}
              />
              <ServerCard event={event} accentClass={accentClass} />
              <Link
                href="/events"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-muted/20 py-3.5 text-xs font-semibold text-muted-foreground transition-all hover:bg-muted/40 hover:text-foreground"
              >
                <CalendarClock className="h-3.5 w-3.5" />
                View all events
              </Link>
            </div>
          </aside>
        </div>

        {/* ── Server card (mobile — below content) ────────────────────── */}
        <div className="mt-8 lg:hidden">
          <ServerCard event={event} accentClass={accentClass} />
        </div>
      </div>
    </div>
  )
}

/* ─────────────────── Sub-components ──────────────────────────────────────── */

function RegistrationCard({
  event,
  formattedDate,
  accentClass,
}: {
  event: ReturnType<typeof getEvent> & {}
  formattedDate: string
  accentClass: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className={`h-0.5 w-full bg-gradient-to-r ${accentClass}`} />
      <div className="p-5 sm:p-6">
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Registration
        </h3>

        {/* Logistics */}
        <div className="mb-5 space-y-4">
          <div className="flex items-start gap-3">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accentClass}`}
            >
              <CalendarClock className="h-4 w-4 text-black/70" />
            </div>
            <div className="min-w-0">
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Date &amp; Time
              </p>
              <p className="text-sm font-medium text-foreground leading-snug">{formattedDate}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50">
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Location
              </p>
              <p className="text-sm font-medium text-foreground">{event!.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50">
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Admission
              </p>
              <p className="text-sm font-medium text-foreground">
                {event!.ticketStatus === 'free'
                  ? 'Free to join'
                  : `Paid · ${event!.price}`}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5 border-t border-border" />

        {/* Countdown + CTA */}
        <div className="flex flex-col items-center gap-4">
          {event!.deadline && (
            <div className="w-full">
              <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Registration closes in
              </p>
              <div className="flex justify-center">
                <CountdownTimer deadline={event!.deadline} />
              </div>
            </div>
          )}

          <div className="w-full">
            <EventCTAButton
              deadline={event!.deadline || event!.date}
              href={`https://tickets.openboxcomm.in/event/${event!.id}`}
              label={event!.ticketStatus === 'free' ? 'Claim My Spot' : 'Get Tickets'}
            />
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground/60">
          Securing your spot helps us manage capacity.
        </p>
      </div>
    </div>
  )
}

function ServerCard({
  event,
  accentClass,
}: {
  event: ReturnType<typeof getEvent> & {}
  accentClass: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${accentClass}`} />
        <div>
          <p className="text-sm font-bold text-foreground">{event!.server} Server</p>
          <p className="text-xs text-muted-foreground">Hosted here</p>
        </div>
      </div>
      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
        This event is hosted in the {event!.server} server. Join our community to stay updated on future sessions.
      </p>
      <Button asChild variant="outline" size="sm" className="w-full">
        <Link href={`/servers/${event!.serverSlug}`}>
          <Users className="mr-2 h-3.5 w-3.5" />
          Visit Server
        </Link>
      </Button>
    </div>
  )
}

'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  CalendarClock,
  HeartHandshake,
  MapPin,
  Ticket,
  Wifi,
  Globe,
  Zap,
  Users,
  Filter,
} from 'lucide-react'
import { events, type Event, type Sponsor } from '@/lib/community-data'
import { getSponsorGroupLabel } from '@/components/SponsorsMarquee'

const serverFilters = ['All', 'Jn.', 'Dev', 'GG']
const typeFilters = ['all', 'online', 'offline']

function getEventSupporters(event: Event) {
  return event.sponsors ?? (event.sponsor ? [event.sponsor] : [])
}

function getShortDate(dateStr: string) {
  const date = new Date(dateStr)
  return {
    month:   date.toLocaleDateString('en-US', { month:   'short'   }).toUpperCase(),
    day:     date.toLocaleDateString('en-US', { day:     '2-digit' }),
    weekday: date.toLocaleDateString('en-US', { weekday: 'short'   }),
  }
}

function getSupportStripText(sponsors: Sponsor[]) {
  const sponsorCount = sponsors.filter((s) => (s.type ?? 'sponsor') === 'sponsor').length
  const partnerCount = sponsors.filter((s) => s.type === 'partner').length
  if (sponsorCount > 0 && partnerCount > 0) return 'Sponsored & Partnered'
  if (partnerCount > 1) return 'Partnered'
  if (partnerCount === 1)
    return (
      sponsors.find((s) => s.type === 'partner')?.tagline ??
      `In partnership with ${sponsors.find((s) => s.type === 'partner')?.name}`
    )
  if (sponsorCount > 1) return 'Sponsored'
  return sponsors[0].tagline ?? `Sponsored by ${sponsors[0].name}`
}

function getServerAccent(server: string): string {
  switch (server) {
    case 'Dev': return 'bg-emerald-500'
    case 'GG':  return 'bg-rose-500'
    case 'Jn.': return 'bg-amber-500'
    default:    return 'bg-cyan-500'
  }
}

function getServerShadow(server: string): string {
  switch (server) {
    case 'Dev': return 'hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20'
    case 'GG':  return 'hover:shadow-rose-500/10 dark:hover:shadow-rose-500/20'
    case 'Jn.': return 'hover:shadow-amber-400/10 dark:hover:shadow-amber-400/20'
    default:    return 'hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20'
  }
}

export default function EventsPage() {
  const [filterServer, setFilterServer] = useState('All')
  const [filterType,   setFilterType]   = useState('all')
  const [mounted,      setMounted]      = useState(false)

  useEffect(() => setMounted(true), [])

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesServer = filterServer === 'All' || event.server === filterServer
      const matchesType =
        filterType === 'all' ||
        (filterType === 'online'  && !event.isOffline) ||
        (filterType === 'offline' &&  event.isOffline)
      return matchesServer && matchesType
    })
  }, [filterServer, filterType])

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: 'numeric',  minute: '2-digit',
    })

  const totalEvents   = events.length
  const onlineEvents  = events.filter((e) => !e.isOffline).length
  const offlineEvents = events.filter((e) =>  e.isOffline).length

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient glows — visible in dark, very subtle in light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/8" />
        <div className="absolute top-60 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/4 blur-[100px] dark:bg-violet-500/6" />
        <div className="absolute -bottom-20 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/4 blur-[120px] dark:bg-emerald-500/6" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <div className="mb-16 text-center">
          {/* Label pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-1.5">
            <Calendar className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
              Community Calendar
            </span>
          </div>

          <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Events
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Workshops, tournaments, build nights, and community gatherings across all Open Box servers. Real humans, real fun.
          </p>

          {/* Stats row */}
          {totalEvents > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
      { icon: Zap,   label: `${totalEvents} events`,    sub: 'scheduled'    },
      { icon: Wifi,  label: `${onlineEvents} online`,   sub: 'from anywhere' },
      { icon: Globe, label: `${offlineEvents} offline`, sub: 'in person'    },
    ].map((stat) => (
      <div
        key={stat.label}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-muted/40 px-4 py-2.5"
      >
        <stat.icon className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
        <div className="text-left">
          <p className="text-sm font-bold text-foreground">{stat.label}</p>
          <p className="text-[11px] text-muted-foreground">{stat.sub}</p>
        </div>
      </div>
    ))}
            </div>
          )}
        </div>

        {/* ── Filters ─────────────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground/50" />
            <div className="flex flex-wrap gap-2">
              {serverFilters.map((server) => (
                <button
                  key={server}
                  onClick={() => setFilterServer(server)}
                  className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 ${
                    filterServer === server
                      ? 'bg-foreground text-background shadow-sm'
                      : 'border border-border bg-muted/40 text-muted-foreground hover:border-border/80 hover:bg-muted/70 hover:text-foreground'
                  }`}
                >
                  {server}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {typeFilters.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold capitalize transition-all duration-200 ${
                  filterType === type
                    ? 'bg-foreground text-background shadow-sm'
                    : 'border border-border bg-muted/40 text-muted-foreground hover:border-border/80 hover:bg-muted/70 hover:text-foreground'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="mb-6 text-sm text-muted-foreground/60">
          {filteredEvents.length === 0
            ? 'No events match'
            : `${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''}`}
        </p>

        {/* ── Events Grid ─────────────────────────────────────────────── */}
        {filteredEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 py-24 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-muted/40">
              <CalendarClock className="h-8 w-8 text-muted-foreground/40" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground/70">Coming soon</h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              No events match this filter yet. New sessions will appear here once the calendar is updated.{' '}
              {/* <Link href="/help" className="text-cyan-500 underline underline-offset-2 hover:text-cyan-600 dark:hover:text-cyan-300">
                Suggest one!
              </Link> */}
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.map((event, index) => {
              const supporters = getEventSupporters(event)
              const dateBadge  = getShortDate(event.date)
              const accent     = getServerAccent(event.server)
              const shadowClass = getServerShadow(event.server)

              return (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${shadowClass} animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both`}
                  style={{ animationDelay: `${80 + index * 50}ms` }}
                >
                  {/* Top gradient accent bar */}
                  <div
                    className={`h-0.5 w-full ${accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Top strip — always rendered for visual consistency */}
                  <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                    {supporters.length > 0 ? (
                      <>
                        <div className="flex shrink-0 -space-x-1.5">
                          {supporters.slice(0, 3).map((s) => (
                            <span
                              key={s.name}
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background"
                              title={s.name}
                            >
                              <img
                                src={s.logo}
                                alt={s.name}
                                className="h-3.5 w-3.5 object-contain grayscale transition-all group-hover:grayscale-0"
                              />
                            </span>
                          ))}
                        </div>
                        <HeartHandshake className="h-3.5 w-3.5 shrink-0 text-yellow-500 dark:text-yellow-400" />
                        <p className="min-w-0 truncate text-xs text-muted-foreground">
                          {getSupportStripText(supporters)}
                        </p>
                      </>
                    ) : (
                      <p className="text-xs text-muted-foreground/40">Community Event</p>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    {/* Date + Title */}
                    <div className="mb-4 flex items-start gap-4">
                      {/* Calendar widget */}
                      <div className="flex shrink-0 flex-col items-center overflow-hidden rounded-xl border border-border bg-background shadow-sm">
                        <div className={`w-full ${accent} px-3 py-0.5 text-center`}>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-black/70">
                            {dateBadge.month}
                          </span>
                        </div>
                        <div className="px-4 py-2 text-center">
                          <span className="block text-2xl font-extrabold leading-none text-foreground">
                            {dateBadge.day}
                          </span>
                          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            {dateBadge.weekday}
                          </span>
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="mb-1 text-lg font-bold leading-tight text-foreground">
                          {event.name}
                        </h2>
                        <p className="text-xs text-muted-foreground">
                          {mounted ? formatDate(event.date) : <span className="opacity-0">–</span>}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                        <Ticket className="h-3.5 w-3.5 shrink-0" />
                        <span>
                          {event.ticketStatus === 'free' ? 'Free to join' : `Paid · ${event.price}`}
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                          {event.server}
                        </span>
                        <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                          {event.isOffline ? 'Offline' : 'Online'}
                        </span>
                        {event.ticketStatus === 'free' && (
                          <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                            Free
                          </span>
                        )}
                      </div>
                      <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-muted-foreground transition-all group-hover:gap-1.5 group-hover:text-foreground">
                        Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* ── Bottom CTA ──────────────────────────────────────────────── */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-muted-foreground/60">
            <Users className="h-4 w-4" />
            <span className="text-sm">Have an event idea?</span>
          </div>
          <Link
            href="/help"
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted/70 hover:text-foreground"
          >
            Suggest an event
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

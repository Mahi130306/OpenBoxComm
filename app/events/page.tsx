'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, CalendarClock, HeartHandshake, MapPin, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { events, type Event, type Sponsor } from '@/lib/community-data'
import { getSponsorGroupLabel } from '@/components/SponsorsMarquee'

const serverFilters = ['All', 'Jn.', 'Dev', 'GG']
const typeFilters = ['all', 'online', 'offline']

function getEventSupporters(event: Event) {
  return event.sponsors ?? (event.sponsor ? [event.sponsor] : [])
}

function getSupportKind(sponsors: Sponsor[]) {
  const hasSponsors = sponsors.some((sponsor) => (sponsor.type ?? 'sponsor') === 'sponsor')
  const hasPartners = sponsors.some((sponsor) => sponsor.type === 'partner')

  if (hasSponsors && hasPartners) return 'Both'
  if (hasPartners) return 'Partner'
  return 'Sponsor'
}

function getSupportStripText(sponsors: Sponsor[]) {
  const sponsorCount = sponsors.filter((sponsor) => (sponsor.type ?? 'sponsor') === 'sponsor').length
  const partnerCount = sponsors.filter((sponsor) => sponsor.type === 'partner').length

  if (sponsorCount > 0 && partnerCount > 0) return `${sponsorCount} sponsors + ${partnerCount} partners`
  if (partnerCount > 1) return `${partnerCount} event partners`
  if (partnerCount === 1) return sponsors[0].tagline ?? `In partnership with ${sponsors[0].name}`
  if (sponsorCount > 1) return `${sponsorCount} event sponsors`

  return sponsors[0].tagline ?? `Sponsored by ${sponsors[0].name}`
}

function getShortDate(dateStr: string) {
  const date = new Date(dateStr)

  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
  }
}

export default function EventsPage() {
  const [filterServer, setFilterServer] = useState('All')
  const [filterType, setFilterType] = useState('all')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesServer = filterServer === 'All' || event.server === filterServer
      const matchesType =
        filterType === 'all' ||
        (filterType === 'online' && !event.isOffline) ||
        (filterType === 'offline' && event.isOffline)

      return matchesServer && matchesType
    })
  }, [filterServer, filterType])

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  const supportedEvents = events.filter((event) => getEventSupporters(event).length > 0).length

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-16 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05] sm:p-12 lg:p-16">
        <div className="mb-6 flex items-center gap-3">
          <Calendar className="h-8 w-8 text-cyan-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
            Community calendar
          </p>
        </div>
        <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Events
        </h1>
        <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground/90">
          Join workshops, tournaments, build nights, and community gatherings across all Open Box servers.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-4 border-b border-border pb-4">
        <div className="flex flex-wrap gap-2">
          {serverFilters.map((server) => (
            <Button
              key={server}
              variant={filterServer === server ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterServer(server)}
            >
              {server}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          {typeFilters.map((type) => (
            <Button
              key={type}
              variant={filterType === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType(type)}
              className="capitalize"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-surface/70 px-4 py-3">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Showing</p>
          <p className="text-2xl font-bold">{filteredEvents.length} events</p>
        </div>
        <div className="rounded-lg border border-border bg-surface/70 px-4 py-3">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Supported</p>
          <p className="text-2xl font-bold">{supportedEvents} with partners</p>
        </div>
        <div className="rounded-lg border border-border bg-surface/70 px-4 py-3">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Formats</p>
          <p className="text-2xl font-bold">Online + offline</p>
        </div>
      </div> */}

      {filteredEvents.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-surface p-10 text-center">
          <CalendarClock className="mx-auto mb-4 h-10 w-10 text-cyan-300" />
          <h2 className="mb-2 text-3xl">Coming soon</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            No events match this view yet. New sessions will appear here once the community calendar is updated.
            <br />
            Have an event you&apos;d like to see?{' '}
            <Link href="/help" className="text-cyan-500 underline">
              Suggest it!
            </Link>
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event, index) => {
            const supporters = getEventSupporters(event)
            const dateBadge = getShortDate(event.date)

            return (
              <Card
                key={event.id}
                className="group flex min-h-[360px] flex-col overflow-hidden border-border bg-surface transition-all hover:-translate-y-1 hover:border-white/20 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                {supporters.length > 0 && (
                  <div className="border-b border-yellow-500/20 bg-yellow-500/5 px-5 py-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <HeartHandshake className="h-4 w-4 text-yellow-500/70" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-yellow-500/70">
                          {getSponsorGroupLabel(supporters)}
                        </span>
                      </div>
                      <span className="rounded-full border border-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-yellow-500/70">
                        {getSupportKind(supporters)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex shrink-0 -space-x-2">
                        {supporters.slice(0, 4).map((supporter) => (
                          <span
                            key={supporter.name}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/20 bg-background"
                            title={supporter.name}
                          >
                            <img
                              src={supporter.logo}
                              alt={supporter.name}
                              className="h-5 w-5 object-contain opacity-85 grayscale transition-all group-hover:grayscale-0"
                            />
                          </span>
                        ))}
                      </div>
                      <p className="min-w-0 truncate text-sm font-medium text-yellow-500/80">
                        {getSupportStripText(supporters)}
                      </p>
                    </div>
                  </div>
                )}

                <CardHeader className="p-5 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-border bg-background text-center">
                      <span className="text-[10px] font-bold uppercase text-muted-foreground">{dateBadge.month}</span>
                      <span className="font-heading text-2xl font-extrabold leading-none">{dateBadge.day}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <CardTitle className="text-xl leading-tight">{event.name}</CardTitle>
                        <Badge
                          variant={event.ticketStatus === 'free' ? 'secondary' : 'default'}
                          className="shrink-0"
                        >
                          {event.ticketStatus === 'free' ? 'Free' : event.price}
                        </Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {mounted ? (
                          formatDate(event.date)
                        ) : (
                          <span className="opacity-0">Loading date...</span>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col px-5 pb-5 pt-0">
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{event.description}</p>

                  <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-4 w-4 text-cyan-400" />
                      <span>{event.ticketStatus === 'free' ? 'Free to join' : `Paid event - ${event.price}`}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">{event.server}</Badge>
                    <Badge variant="outline">{event.isOffline ? 'Offline' : 'Online'}</Badge>
                    {supporters.length > 0 && (
                      <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                        {getSponsorGroupLabel(supporters)}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto p-5 pt-0">
                  <Button asChild className="w-full gap-2">
                    <Link href={`/events/${event.id}`}>
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

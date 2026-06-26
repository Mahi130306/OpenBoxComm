import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CalendarClock, MapPin, Ticket, ChevronLeft, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { events, getEvent, getServer } from '@/lib/community-data'
import { CountdownTimer } from '@/components/CountdownTimer'
import { EventCTAButton } from '@/components/EventCTAButton'
import { SponsorsMarquee, getSponsorGroupLabel } from '@/components/SponsorsMarquee'

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }))
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = getEvent(id)
  if (!event) notFound()

  const server = getServer(event.serverSlug)
  const accentClass = server?.accent || 'from-cyan-500 to-blue-500'

  const date = new Date(event.date)
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
  const sponsors = event.sponsors ?? []
  const heroSponsor = sponsors.length === 1 ? sponsors[0] : null

  return (
    <div className="min-h-screen pb-20">
      {/* ── Breadcrumb & Back ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" size="sm" className="-ml-2 gap-1 text-muted-foreground hover:text-foreground">
          <Link href="/events">
            <ChevronLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${accentClass} p-px`}>
          <div className="relative rounded-[calc(1.5rem-1px)] bg-background/95 p-8 backdrop-blur-md sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
                    {event.server}
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-xs">
                    {event.isOffline ? 'Offline Event' : 'Online Session'}
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/30 px-3 py-1 text-xs text-cyan-400">
                    {event.ticketStatus === 'free' ? 'Free Access' : `Paid · ${event.price}`}
                  </Badge>
                  {sponsors.length > 0 && (
                    <Badge variant="outline" className="border-yellow-500/30 px-3 py-1 text-xs text-yellow-400">
                      {getSponsorGroupLabel(sponsors)}
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  {event.name}
                </h1>

                <p className="max-w-3xl text-xl text-muted-foreground/90">
                  {event.description}
                </p>

              </div>

              {/* Sponsor logo in hero (single sponsor only) */}
              {heroSponsor && (
                <div className="flex shrink-0 items-center justify-center lg:justify-end">
                  <a
                    href={heroSponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <img
                      src={heroSponsor.logo}
                      alt={heroSponsor.name}
                      className="h-14 w-auto max-w-[160px] object-contain grayscale transition-all group-hover:grayscale-0"
                    />
                    <span className="text-xs text-muted-foreground">
                      Visit {heroSponsor.name}
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">

          {/* Left: Agenda + Prep */}
          <div className="space-y-12 lg:col-span-2">
            <section>
              <div className="mb-6 flex items-center gap-2">
                <Info className="h-5 w-5 text-cyan-400" />
                <h2 className="text-2xl font-bold">Event Agenda</h2>
              </div>
              <div className="grid gap-4">
                {event.agenda.map((item, index) => (
                  <div
                    key={item}
                    className="group relative flex items-start gap-4 rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:border-white/20"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 font-heading text-sm font-bold text-cyan-400">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {sponsors.length > 0 && <SponsorsMarquee sponsors={sponsors} />}

            <section className="rounded-2xl border border-border bg-surface/30 p-8">
              <h2 className="mb-4 text-xl font-bold">Preparation</h2>
              <p className="leading-relaxed text-muted-foreground">
                To make the most of this session, we recommend arriving 5–10 minutes early to settle in.
                Bring your questions, a project link if you have one, and enough context for others to jump in quickly.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">

              {/* Logistics card */}
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl">
                <div className="mb-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                      <CalendarClock className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date & Time</p>
                      <p className="font-medium">{formattedDate}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                      <p className="font-medium">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                      <Ticket className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Admission</p>
                      <p className="font-medium">
                        {event.ticketStatus === 'free' ? 'Free to join' : `Paid event · ${event.price}`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  {event.deadline && (
                    <CountdownTimer deadline={event.deadline} />
                  )}
                  <div className="w-full">
                    <EventCTAButton
                      deadline={event.deadline || event.date}
                      href={`https://tickets.openboxcomm.in/event/${event.id}`}
                      label={event.ticketStatus === 'free' ? 'Claim My Spot' : 'Get Tickets'}
                    />
                  </div>
                </div>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Securing your spot helps us manage capacity.
                </p>
              </div>

              {/* Server card */}
              <div className="rounded-2xl border border-border bg-surface/50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${accentClass}`} />
                  <h3 className="font-bold">{event.server} Server</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  This event is hosted in the {event.server} server. Join our community to stay updated.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/servers/${event.serverSlug}`}>
                    Visit Server
                  </Link>
                </Button>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

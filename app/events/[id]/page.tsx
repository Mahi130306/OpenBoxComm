import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CalendarClock, MapPin, Ticket } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { events, getEvent } from '@/lib/community-data'

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }))
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = getEvent(id)
  if (!event) notFound()

  const date = new Date(event.date)
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-cyan-400/[0.05] p-8">
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge variant="secondary">{event.server}</Badge>
          <Badge variant="outline">{event.isOffline ? 'Offline' : 'Online'}</Badge>
          <Badge variant="outline">{event.ticketStatus === 'free' ? 'Free' : 'Ticketed'}</Badge>
        </div>
        <h1 className="mb-4">{event.name}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{event.description}</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <section className="space-y-8">
          <div>
            <h2 className="mb-4">Agenda</h2>
            <div className="grid gap-3">
              {event.agenda.map((item, index) => (
                <div key={item} className="rounded-lg border border-border bg-surface p-4">
                  <span className="mr-3 font-heading text-cyan-300">{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3">What to bring</h2>
            <p className="text-muted-foreground">
              Bring your questions, a project link if you have one, and enough context for others to jump in quickly.
            </p>
          </div>
        </section>

        <aside className="h-fit rounded-lg border border-border bg-surface p-6">
          <div className="space-y-4 text-sm">
            <p className="flex gap-3 text-muted-foreground">
              <CalendarClock className="mt-0.5 h-4 w-4 text-cyan-300" />
              <span>{formattedDate}</span>
            </p>
            <p className="flex gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
              <span>{event.location}</span>
            </p>
            <p className="flex gap-3 text-muted-foreground">
              <Ticket className="mt-0.5 h-4 w-4 text-cyan-300" />
              <span>{event.ticketStatus === 'free' ? 'Free to join' : 'Ticket required'}</span>
            </p>
          </div>
          <Button asChild className="mt-6 w-full">
            <a
              href={`https://tickets.openboxcomm.in/event/${event.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {event.server} Server
            </a>
          </Button>
        </aside>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { CalendarClock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { events } from '@/lib/community-data'

export function MasterCalendar() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
  }

  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center">Upcoming Events</h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {events.length === 0 && (
            <div className="rounded-lg border border-dashed bg-surface p-8 text-center">
              <CalendarClock className="mx-auto mb-3 h-8 w-8 text-cyan-300" />
              <h3 className="font-heading text-2xl font-bold">Coming soon</h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">New community events will land here as soon as they are announced. <br />
                Have an event you'd like to see? <u> <Link href="/help#suggestion-box" className="text-cyan-700 dark:text-cyan-400 hover:underline">Suggest it!</Link></u>
              </p>
            </div>
          )}
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col justify-between rounded-lg border border-border bg-surface p-4 transition-colors hover:border-cyan-300/50 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-semibold">{event.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {event.server}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{formatDate(event.date)}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild className="mt-3 sm:mt-0">
                <Link href={`/events/${event.id}`}>Details</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="link">
            <Link href="/events">See All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

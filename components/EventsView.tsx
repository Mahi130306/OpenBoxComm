'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CalendarClock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { events } from '@/lib/community-data'

const serverFilters = ['All', 'Jn.', 'Dev', 'GG']
const typeFilters = ['all', 'online', 'offline']

export function EventsView() {
  const [filterServer, setFilterServer] = useState('All')
  const [filterType, setFilterType] = useState('all')

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

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Premium Hero Banner */}
      <div className="mb-16 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05] sm:p-12 lg:p-16">
        <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-8 w-8 text-cyan-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Community calendar</p>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-4xl">
          Events
        </h1>
        <p className="max-w-3xl text-xl text-muted-foreground/90 leading-relaxed">
          Join workshops, tournaments, build nights, and community gatherings across all Open Box servers.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4 border-b border-border pb-4">
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

      {filteredEvents.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-surface p-10 text-center">
          <CalendarClock className="mx-auto mb-4 h-10 w-10 text-cyan-300" />
          <h2 className="mb-2 text-3xl">Coming soon</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            No events match this view yet. New sessions will appear here once the community calendar is updated.
             <br />
                Have an event you'd like to see? <u> <Link href="/help" className="text-cyan-500 hover:underline">Suggest it!</Link></u>
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, i) => (
            <Card
              key={event.id}
              className="flex flex-col border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  <Badge variant={event.ticketStatus === 'free' ? 'secondary' : 'default'} className="shrink-0">
                    {event.ticketStatus === 'free' ? 'Free' : event.price}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">{formatDate(event.date)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">{event.server}</Badge>
                  <Badge variant="outline">{event.isOffline ? 'Offline' : 'Online'}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

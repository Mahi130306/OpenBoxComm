import type { Metadata } from 'next'
import { EventsView } from '@/components/EventsView'

export const metadata: Metadata = {
  title: 'Events — Open Box',
  description: 'Join workshops, tournaments, build nights, and community gatherings across all Open Box servers.',
  alternates: { canonical: '/events' },
}

export default function EventsPage() {
  return <EventsView />
}

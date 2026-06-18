import type { Metadata } from 'next'
import { docs } from '@/lib/community-data'
import { DocSearch } from '@/components/DocSearch'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Practical guides for joining servers, using channels, contributing to events, and keeping the Open Box community useful.',
  alternates: { canonical: '/doc' },
}


export default function DocPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-xl border border-border bg-muted/30 p-6 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-lime-600 dark:text-lime-300">Knowledge base</p>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground lg:text-5xl">Documentation</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          Practical guides for joining servers, using channels, contributing to events, and keeping the community useful.
        </p>
      </div>

      <DocSearch initialDocs={docs} />
    </div>
  )
}

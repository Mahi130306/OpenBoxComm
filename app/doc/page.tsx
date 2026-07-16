import type { Metadata } from 'next'
import { docs } from '@/lib/community-data'
import { DocSearch } from '@/components/DocSearch'
import { BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Practical guides for joining servers, using channels, contributing to events, and keeping the Open Box community useful.',
  alternates: { canonical: '/doc' },
}

export default function DocPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-12 rounded-3xl border border-black/10 bg-black/[0.04] dark:bg-white/[0.06] p-5 shadow-sm dark:border-white/10 sm:p-10 lg:p-16 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 shrink-0 text-lime-500 sm:h-6 sm:w-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-600 dark:text-lime-300 sm:text-sm">Knowledge base</p>
        </div>
        <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-foreground w-full break-words sm:text-3xl lg:text-4xl">
          Documentation
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground/90 leading-relaxed sm:text-base lg:text-lg">
          Practical guides for joining servers, using channels, contributing to events, and keeping the Open Box community useful.
        </p>
      </div>

      <DocSearch initialDocs={docs} />
    </div>
  )
}
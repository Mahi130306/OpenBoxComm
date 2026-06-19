import type { Metadata } from 'next'
import { docs } from '@/lib/community-data'
import { DocSearch } from '@/components/DocSearch'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Practical guides for joining servers, using channels, contributing to events, and keeping the Open Box community useful.',
  alternates: { canonical: '/docs' },
}


export default function DocPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <Badge variant="outline" className="mb-4 border-lime-500/30 text-lime-400 px-4 py-1">
          Knowledge Base
        </Badge>
        <h1 className="mb-6 text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">Library.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Guides, rules, and technical handbooks for every corner of the Open Box network.
        </p>
      </div>

      <div className="relative">
         <div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 to-transparent blur-[100px] -z-10" />
         <DocSearch initialDocs={docs} />
      </div>
    </div>
  )
}

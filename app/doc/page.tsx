import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { docs } from '@/lib/community-data'

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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc, i) => (
          <Card 
            key={doc.slug} 
            className="flex flex-col border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:border-lime-500/30 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lime-500/10 text-lime-600 dark:text-lime-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <Badge variant="outline" className="mb-3 w-fit border-lime-500/30 text-lime-600 dark:text-lime-300">
                {doc.section}
              </Badge>
              <CardTitle className="text-2xl">{doc.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">{doc.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/doc/${doc.slug}`} className="inline-flex items-center text-sm font-medium text-lime-600 hover:text-lime-500 dark:text-lime-300 dark:hover:text-lime-200 transition-colors">
                Open guide
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

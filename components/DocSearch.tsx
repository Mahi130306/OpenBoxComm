'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, BookOpen, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Doc {
  slug: string
  title: string
  description: string
  section: string
}

interface DocSearchProps {
  initialDocs: Doc[]
}

export function DocSearch({ initialDocs }: DocSearchProps) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const handle = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300)
    return () => window.clearTimeout(handle)
  }, [query])

  const filteredDocs = useMemo(() => {
    if (!debouncedQuery) return initialDocs
    return initialDocs.filter((doc) => {
      const haystack = `${doc.title} ${doc.description} ${doc.section}`.toLowerCase()
      return haystack.includes(debouncedQuery)
    })
  }, [debouncedQuery, initialDocs])

  return (
    <div>
      <div className="relative mb-8 max-w-2xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search documentation by title or content..."
          className="bg-surface pl-10"
        />
      </div>

      {filteredDocs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-surface p-10 text-center">
          <h2 className="mb-2 text-3xl">No guides found</h2>
          <p className="text-muted-foreground">Try searching for different keywords.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDocs.map((doc, i) => (
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
      )}
    </div>
  )
}

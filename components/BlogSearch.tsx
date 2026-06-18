'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Blog {
  slug: string
  title: string
  server: string
  date: string
  excerpt: string
  readTime: string
  category?: string
}

interface BlogSearchProps {
  initialBlogs: Blog[]
}

export function BlogSearch({ initialBlogs }: BlogSearchProps) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const handle = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300)
    return () => window.clearTimeout(handle)
  }, [query])

  const filteredBlogs = useMemo(() => {
    if (!debouncedQuery) return initialBlogs
    return initialBlogs.filter((blog) => {
      const haystack = `${blog.title} ${blog.server} ${blog.excerpt}`.toLowerCase()
      return haystack.includes(debouncedQuery)
    })
  }, [debouncedQuery, initialBlogs])

  return (
    <div>
      <div className="relative mb-8 max-w-2xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search blogs by title, server, or content..."
          className="bg-surface pl-10"
        />
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-surface p-10 text-center">
          <h2 className="mb-2 text-3xl">No posts found</h2>
          <p className="text-muted-foreground">Try searching for different keywords or check back later.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredBlogs.map((post, i) => {
            const href = post.category === 'dbw'
              ? `/blogs/dbw/${post.slug}`
              : `/blogs/${post.slug}`

            return (
              <Card
                key={post.slug}
                className="flex flex-col border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lg hover:border-pink-500/30 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                style={{ animationDelay: `${100 + i * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <Badge variant="secondary">{post.server}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-5 text-xs text-muted-foreground">{post.date}</p>
                </CardContent>
                <CardFooter>
                  <Link href={href} className="inline-flex items-center text-sm font-medium hover:text-cyan-300">
                    Read post
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

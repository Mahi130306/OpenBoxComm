'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

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
    const activeBlogs = initialBlogs.filter((blog) => blog.category !== 'dbw')
    if (!debouncedQuery) return activeBlogs
    return activeBlogs.filter((blog) => {
      const haystack = `${blog.title} ${blog.server} ${blog.excerpt}`.toLowerCase()
      return haystack.includes(debouncedQuery)
    })
  }, [debouncedQuery, initialBlogs])

  const newestPostSlug = useMemo(() => {
    if (filteredBlogs.length === 0) return null
    // Sort descending by date to find the newest blog post
    const sorted = [...filteredBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return sorted[0]?.slug
  }, [filteredBlogs])

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
            const href = `/blogs/${post.slug}`
            const isNewest = post.slug === newestPostSlug

            return (
              <Card
                key={post.slug}
                className={cn(
                  "flex flex-col bg-surface transition-all hover:-translate-y-1 hover:shadow-lg duration-500 fill-mode-both animate-in fade-in slide-in-from-bottom-4",
                  isNewest
                    ? "border-2 border-cyan-500 shadow-md shadow-cyan-500/15 dark:border-cyan-400 dark:shadow-cyan-400/15 hover:border-cyan-600 dark:hover:border-cyan-300"
                    : "border border-border hover:border-cyan-500/30"
                )}
                style={{ animationDelay: `${100 + i * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{post.server}</Badge>
                      {isNewest && (
                        <Badge variant="default" className="bg-cyan-500 hover:bg-cyan-600 text-black border-none text-[10px] uppercase tracking-wider font-bold h-5 px-1.5">
                          Newest
                        </Badge>
                      )}
                    </div>
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

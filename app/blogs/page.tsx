import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { blogs } from '@/lib/community-data'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Community updates, building playbooks, event recaps, and practical notes from Open Box servers.',
  alternates: { canonical: '/blogs' },
}


export default function BlogsPage({ searchParams }: { searchParams?: { server?: string } }) {
  const serverFilter = searchParams?.server?.toLowerCase()
  const filteredBlogs = serverFilter
    ? blogs.filter((blog) => blog.server.toLowerCase() === serverFilter)
    : blogs

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-pink-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-pink-400/[0.06]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600 dark:text-pink-300">Field notes</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">Blogs</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          Community updates, building playbooks, event recaps, and practical notes from Open Box servers.
        </p>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-surface p-10 text-center">
          <h2 className="mb-2 text-3xl">Coming soon</h2>
          <p className="text-muted-foreground">No posts are published for this server yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredBlogs.map((post, i) => (
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
                <Link href={`/blogs/${post.slug}`} className="inline-flex items-center text-sm font-medium hover:text-cyan-300">
                  Read post
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { blogs, getBlog } from '@/lib/community-data'
import { getBlogContent } from '@/lib/Blog'

export function generateStaticParams() {
  return blogs
    .filter((blog) => blog.category === 'dbw')
    .map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlog(slug)
  if (!post || post.category !== 'dbw') return {}
  return {
    title: `${post.title} — Day Before Weekend`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function DBWPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlog(slug)

  if (!post || post.category !== 'dbw') notFound()

  const content = getBlogContent(slug)

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Button asChild variant="outline" className="group">
          <Link href="/blogs">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Link>
        </Button>
      </div>

      <div className="mb-10 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-blue-400/[0.08] p-5 shadow-sm sm:p-8 dark:border-white/10 dark:from-white/[0.08] dark:to-blue-400/[0.06]">
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-blue-500/15 text-blue-700 dark:bg-blue-400/20 dark:text-blue-400">
            Day Before Weekend
          </Badge>
          <Badge variant="outline" className="border-blue-500/30 text-blue-600 dark:text-blue-300">
            Weekly Update
          </Badge>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1.5 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-muted-foreground/90">
        <div className="rounded-lg bg-muted/30 p-6 italic">
          <p className="text-foreground/80">
            Day Before Weekend (dbw) — the weekly Friday update post that goes out across Discord and the blog.
            Covers what happened that week and what is coming next.
          </p>
        </div>

        <div className="space-y-6">
          {content ? content.map((paragraph, index) => (
            <p key={index} className="leading-8">{paragraph}</p>
          )) : (
            <p>Content coming soon...</p>
          )}
        </div>
      </div>

      <div className="mt-16 border-t border-border/50 pt-8">
        <Button asChild variant="outline" className="group">
          <Link href="/blogs">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Link>
        </Button>
      </div>
    </article>
  )
}

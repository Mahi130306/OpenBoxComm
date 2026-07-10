import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { blogs, getBlog } from '@/lib/community-data'
import { getBlogContent } from '@/lib/Blog'

export function generateStaticParams() {
  return blogs
    .filter((blog: any) => blog.category !== 'dbw')
    .map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlog(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlog(slug)
  const content = getBlogContent(slug)
  
  if (!post || (post as any).category === 'dbw') notFound()

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
      
      <div className="mb-10 rounded-xl border border-black/10 bg-black/[0.04] dark:bg-white/[0.06] p-5 shadow-sm sm:p-8 dark:border-white/10">
        <Badge variant="secondary" className="mb-6 bg-lime-500/15 text-lime-700 dark:bg-lime-400/20 dark:text-lime-400 hover:bg-lime-500/25 dark:hover:bg-lime-400/30">
          {post.server}
        </Badge>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm font-medium text-muted-foreground">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-muted-foreground/90">
        <p className="text-xl font-medium leading-snug text-foreground/90">{post.excerpt}</p>
        <div className="h-px w-full bg-border/50" />
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

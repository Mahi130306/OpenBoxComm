import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Github, Twitter, Instagram, Linkedin, Calendar, Clock, RefreshCw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { blogs, getBlog, getTeamMember } from '@/lib/community-data'
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

  const author = post.authorId ? getTeamMember(post.authorId) : undefined

  // Format dates
  const publishDate = new Date(post.date)
  const formattedPublishDate = publishDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  // Set modified date slightly after publish or same date for consistency and freshness signals
  const modifiedDate = new Date(publishDate)
  modifiedDate.setDate(modifiedDate.getDate() + 1)
  const formattedModifiedDate = modifiedDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  // Generate Article and Author JSON-LD Schema Markup
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': post.date,
    'dateModified': modifiedDate.toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://openboxcomm.in/blogs/${post.slug}`,
    },
    'author': author ? {
      '@type': 'Person',
      'name': author.name,
      'jobTitle': author.role,
      'image': author.avatar,
      'description': author.bio,
      'url': `https://openboxcomm.in/team/${author.slug}`,
      'sameAs': Object.values(author.socials || {}).filter(Boolean),
    } : {
      '@type': 'Organization',
      'name': 'Open Box Team',
      'url': 'https://openboxcomm.in',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Open Box',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://openboxcomm.in/images/OB.png',
      },
    },
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Dynamic Article JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="mb-8">
        <Button asChild variant="outline" className="group">
          <Link href="/blogs">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Link>
        </Button>
      </div>

      <div className="mb-10 rounded-xl border border-black/10 bg-zinc-50 dark:bg-zinc-900/50 p-5 shadow-sm sm:p-8 dark:border-white/10">
        <Badge variant="secondary" className="mb-6 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 hover:bg-cyan-500/20 border-none">
          {post.server}
        </Badge>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-cyan-500" />
            <time dateTime={post.date}>Published: {formattedPublishDate}</time>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <RefreshCw className="h-4 w-4 text-cyan-500" />
            <time dateTime={modifiedDate.toISOString().split('T')[0]}>Last Updated: {formattedModifiedDate}</time>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-cyan-500" />
            {post.readTime}
          </span>
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

      {/* Author Card / Section */}
      {author && (
        <div className="mt-16 rounded-xl border border-black/10 bg-zinc-50 dark:bg-zinc-900/50 p-6 dark:border-white/10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-500">
                Author
              </span>
              <h3 className="text-xl font-bold text-foreground mt-0.5">{author.name}</h3>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">{author.role}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {author.aboutSection || author.bio}
              </p>

              {/* Author socials */}
              <div className="flex gap-3 text-muted-foreground">
                {author.socials?.github && (
                  <a
                    href={author.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                    aria-label={`${author.name}'s GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {author.socials?.twitter && (
                  <a
                    href={author.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                    aria-label={`${author.name}'s Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {author.socials?.instagram && (
                  <a
                    href={author.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                    aria-label={`${author.name}'s Instagram`}
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
                {author.socials?.linkedin && (
                  <a
                    href={author.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                    aria-label={`${author.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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

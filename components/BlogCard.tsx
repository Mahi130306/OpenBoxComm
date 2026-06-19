import Link from 'next/link'

interface BlogCardProps {
  title: string
  description: string
  date: string
  slug: string
  author?: string
}

export function BlogCard({ title, description, date, slug, author }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            {author && <span>{author}</span>}
          </div>
        </div>
      </article>
    </Link>
  )
}

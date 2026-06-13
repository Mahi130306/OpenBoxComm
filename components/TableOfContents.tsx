export function TableOfContents({ headings }: { headings: string[] }) {
  if (!headings || headings.length === 0) {
    return null
  }

  return (
    <nav className="rounded-lg border border-border bg-surface p-4">
      <p className="mb-3 text-sm font-semibold text-foreground">On this page</p>
      <div className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading}
            href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="block text-sm text-muted-foreground hover:text-foreground"
          >
            {heading}
          </a>
        ))}
      </div>
    </nav>
  )
}

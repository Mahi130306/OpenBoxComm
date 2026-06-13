import Link from 'next/link'

const legalPages = [
  { href: '/legal/terms',   label: 'Terms & Conditions' },
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/cookie',  label: 'Cookie Policy' },
  { href: '/legal/rules',   label: 'Community Rules' },
  { href: '/legal/refund',  label: 'Refund Policy' },
  { href: '/legal/dmca',    label: 'DMCA / Copyright' },
  { href: '/legal/aup',     label: 'Acceptable Use Policy' },
  { href: '/legal/event',    label: 'Event Policies' },
]

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-56 flex-shrink-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Legal
          </p>
          <nav className="flex flex-col gap-1">
            {legalPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 prose prose-sm dark:prose-invert max-w-none font-body [&_h1]:font-heading [&_h2]:font-heading [&_h3]:font-heading [&_h4]:font-heading">
          {children}
        </main>
      </div>
    </div>
  )
}

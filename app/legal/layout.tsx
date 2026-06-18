'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

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
  const pathname = usePathname()
  const isIndex = pathname === '/legal'

  if (isIndex) return <>{children}</>

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <Link
              href="/legal"
              className="mb-8 flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-violet-500"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Legal Overview
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 px-3">
              Legal Center
            </p>
            <nav className="flex flex-col gap-1">
              {legalPages.map((p) => {
                const isActive = pathname === p.href
                return (
                  <Link
                    key={p.href}
                    href={p.href}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all",
                      isActive
                        ? "bg-violet-500/10 text-violet-600 dark:text-violet-400"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {p.label}
                    {isActive && <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-12 rounded-2xl bg-muted/50 p-6 border border-border/50">
                <h4 className="text-sm font-bold mb-2">Need help?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    For legal inquiries or reporting violations, please contact us.
                </p>
                <a
                    href="mailto:legal@openboxcomm.in"
                    className="text-xs font-bold text-violet-500 hover:underline"
                >
                    legal@openboxcomm.in
                </a>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-heading prose-h1:text-4xl prose-h1:font-extrabold prose-h1:tracking-tight
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
          prose-p:text-muted-foreground/90 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-muted-foreground/90 prose-li:text-lg
          prose-a:text-violet-500 prose-a:no-underline hover:prose-a:underline
          [&_article]:bg-surface/30 [&_article]:p-8 [&_article]:md:p-12 [&_article]:rounded-3xl [&_article]:border [&_article]:border-border/50">
          {children}
        </main>
      </div>
    </div>
  )
}

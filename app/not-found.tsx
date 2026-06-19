import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found | Open Box',
}

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 select-none">
        <span className="text-[10rem] font-extrabold leading-none text-white/[0.04] sm:text-[14rem]">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-indigo-400/[0.08] px-8 py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300 mb-2">Not Found</p>
            <h1 className="!text-3xl sm:!text-4xl">Page Not Found</h1>
          </div>
        </div>
      </div>

      <p className="mb-8 max-w-md text-muted-foreground">
        This page doesn&apos;t exist or may have been moved. Double-check the URL, or head back to the home page.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Go Home
        </Link>
        <Link
          href="/servers"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white/20"
        >
          Browse Servers
        </Link>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to console (replace with error reporting service if needed)
    console.error('[GlobalError]', error)
  }, [error])

  const isNetworkError =
    error.message?.toLowerCase().includes('network') ||
    error.message?.toLowerCase().includes('fetch') ||
    error.message?.toLowerCase().includes('failed to fetch')

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 select-none">
        <span className="text-[10rem] font-extrabold leading-none text-white/[0.04] sm:text-[14rem]">
          {isNetworkError ? '⚡' : '500'}
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-rose-400/[0.08] px-8 py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300 mb-2">
              {isNetworkError ? 'Connection Error' : 'Server Error'}
            </p>
            <h1 className="!text-3xl sm:!text-4xl">
              {isNetworkError ? 'No Connection' : 'Something Went Wrong'}
            </h1>
          </div>
        </div>
      </div>

      <p className="mb-3 max-w-md text-muted-foreground">
        {isNetworkError
          ? 'Unable to reach Open Box servers. Check your internet connection and try again.'
          : 'An unexpected error occurred. We\'ve logged it and will look into it.'}
      </p>

      {error.digest && (
        <p className="mb-6 font-mono text-xs text-muted-foreground/50">
          Error ID: {error.digest}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg bg-rose-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-600"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white/20"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

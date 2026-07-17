import type { Metadata } from 'next'
import { ImageCompressor } from '@/components/ImageCompressor'
import { ImageIcon, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client-Side Image Compressor',
  description: 'Compress JPEG, PNG, and WebP images directly in your browser. Fast, secure, and 100% offline. Built in compliance with India’s DPDP Act 2023.',
  alternates: { canonical: '/compress' },
}

export default function CompressPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Header Banner */}
      <div className="mb-10 rounded-xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <ImageIcon className="h-5 w-5 text-cyan-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
            Free Developer Tool
          </p>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
          Image Compressor
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90 leading-relaxed">
          Reduce image file sizes for blogs, sites, or servers. Convert to WebP/JPEG, adjust quality, scale dimensions, and download optimized files instantly.
        </p>

        {/* Privacy Note compliant with Indian laws (DPDP Act 2023) */}
        <div className="mt-6 flex items-center gap-2 rounded-lg border border-cyan-500/10 bg-cyan-500/5 px-4 py-2.5 text-xs text-muted-foreground max-w-2xl">
          <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-500" />
          <p>
            <strong>Privacy & Security first:</strong> Under India's Digital Personal Data Protection (DPDP) Act 2023, we guarantee complete privacy. Compression is performed entirely client-side on your device. Your images are never sent to a server.
          </p>
        </div>
      </div>

      {/* Interactive Compression Component */}
      <ImageCompressor />
    </div>
  )
}

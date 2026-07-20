'use client'

import Link from 'next/link'
import { importantNotice } from '@/lib/community-data'

export function ImportantNoticeMarquee() {
  const { text, linkText, linkUrl } = importantNotice
  // Repeat the notice multiple times to create a seamless infinite scroll.
  // 15 instances ensures it is a multiple of 3 for perfect translateX(-33.333%) alignment.
  const repeats = Array.from({ length: 15 }, (_, i) => i)

  return (
    <div className="w-full overflow-hidden bg-zinc-950 border-b border-zinc-800 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 select-none">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-16 w-max hover:[animation-play-state:paused]">
          {repeats.map((index) => (
            <div key={index} className="flex items-center gap-1.5 shrink-0">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
              <span className="tracking-wide text-zinc-300">
                {text}
              </span>
              <Link
                href={linkUrl}
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-semibold"
              >
                {linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { logger } from '@/lib/logger'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const pathname = usePathname()

  // Initial page load
  useEffect(() => {
    logger.info('App initialised', { route: pathname })
    const timer = setTimeout(() => {
      setIsFading(true)
      setTimeout(() => setIsLoading(false), 400)
    }, 800)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Route changes
  useEffect(() => {
    // Skip very first mount (handled above)
    setIsLoading(true)
    setIsFading(false)
    logger.info('Navigating to', { route: pathname })
    const timer = setTimeout(() => {
      setIsFading(true)
      setTimeout(() => setIsLoading(false), 400)
    }, 500)
    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      style={{
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: isFading ? 'none' : 'all',
      }}
      aria-hidden={isFading}
    >
      {/* Logo */}
      <div
        style={{
          animation: 'ob-pulse 1.2s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/OB.png"
          alt="Open Box"
          width={72}
          height={72}
          priority
          className="rounded-xl"
        />
      </div>

      {/* Wordmark */}
      <p
        className="mt-4 text-lg font-heading font-bold tracking-widest text-foreground/70"
        style={{ animation: 'ob-fade-in 0.6s ease 0.2s both' }}
      >
        OPEN BOX
      </p>

      {/* Spinner bar */}
      <div className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-foreground"
          style={{ animation: 'ob-slide 1s ease-in-out infinite' }}
        />
      </div>

      <style>{`
        @keyframes ob-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }
        @keyframes ob-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 0.7; transform: translateY(0); }
        }
        @keyframes ob-slide {
          0%   { transform: translateX(-100%); width: 60%; }
          50%  { transform: translateX(50%);  width: 60%; }
          100% { transform: translateX(200%); width: 60%; }
        }
      `}</style>
    </div>
  )
}

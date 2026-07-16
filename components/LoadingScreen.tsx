'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
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
      {/* Scanline texture, CLI feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
      />

      {/* Glow ring behind the gif */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute h-24 w-24 rounded-full bg-indigo-500/20 blur-xl"
          style={{ animation: 'ob-pulse 1.6s ease-in-out infinite' }}
        />
        <Image
          src="/images/OB72loader.gif"
          alt="Open Box loading"
          width={72}
          height={72}
          priority
          unoptimized
          className="relative rounded-xl"
        />
      </div>

      {/* Terminal-style wordmark */}
      <p
        className="mt-5 font-mono text-sm tracking-[0.3em] text-foreground/60"
        style={{ animation: 'ob-fade-in 0.6s ease 0.2s both' }}
      >
        OPEN BOX
        <span style={{ animation: 'ob-blink 1s step-end infinite' }}>_</span>
      </p>

      <style>{`
        @keyframes ob-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
        @keyframes ob-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 0.6; transform: translateY(0); }
        }
        @keyframes ob-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface EventCTAButtonProps {
  deadline: string // ISO date string
  href: string
  label: string
}

function isOpen(deadline: string): boolean {
  return Date.now() < new Date(deadline).getTime()
}

export function EventCTAButton({ deadline, href, label }: EventCTAButtonProps) {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    // Check initial state
    const initiallyOpen = isOpen(deadline)
    setOpen(initiallyOpen)

    // If already closed on mount, no need to poll
    if (!initiallyOpen) return

    const id = setInterval(() => {
      const nowOpen = isOpen(deadline)
      setOpen(nowOpen)
      if (!nowOpen) clearInterval(id)
    }, 1000)

    return () => clearInterval(id)
  }, [deadline])

  // Prevent hydration mismatch by rendering a placeholder
  if (!mounted) {
    return (
      <Button asChild size="lg" className="w-full font-bold shadow-lg shadow-cyan-500/20 opacity-0 pointer-events-none">
        <span>{label}</span>
      </Button>
    )
  }

  if (open) {
    return (
      <Button asChild size="lg" className="w-full font-bold shadow-lg shadow-cyan-500/20">
        <Link
          id="event-cta-register"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </Link>
      </Button>
    )
  }

  return (
    <Button
      id="event-cta-closed"
      size="lg"
      variant="secondary"
      disabled
      className="w-full font-bold opacity-50 cursor-not-allowed"
    >
      Registration Closed
    </Button>
  )
}

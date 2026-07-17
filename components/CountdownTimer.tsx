'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(deadline: string): TimeLeft | null {
  const diff = new Date(deadline).getTime() - Date.now()
  if (diff <= 0) return null

  const totalSeconds = Math.floor(diff / 1000)
  const days    = Math.floor(totalSeconds / 86400)
  const hours   = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface CountdownTimerProps {
  deadline: string // ISO date string, e.g. "2026-08-01T18:00:00+05:30"
}

export function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    getTimeLeft(deadline)
  )

  useEffect(() => {
    // Already expired on mount
    if (!timeLeft) return

    const id = setInterval(() => {
      const next = getTimeLeft(deadline)
      setTimeLeft(next)
      if (!next) clearInterval(id)
    }, 1000)

    return () => clearInterval(id)
    // deadline won't change at runtime, so dep array is intentionally minimal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline])

  if (!timeLeft) return null

  const units = [
    { label: 'DD', value: pad(timeLeft.days) },
    { label: 'HH', value: pad(timeLeft.hours) },
    { label: 'MM', value: pad(timeLeft.minutes) },
    { label: 'SS', value: pad(timeLeft.seconds) },
  ]

  return (
    <div
      aria-label="Time remaining until event"
      className="flex items-center gap-2"
    >
      {units.map((unit, i) => (
        <span key={unit.label} className="flex items-center gap-2">
          {/* Digit block */}
          <span className="flex flex-col items-center">
            <span
              suppressHydrationWarning
              className="
                min-w-[2.75rem] rounded-lg border border-border
                bg-secondary px-2.5 py-1.5 text-center font-mono
                text-lg font-bold leading-none tracking-tight text-foreground
                tabular-nums
              "
            >
              {unit.value}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {unit.label}
            </span>
          </span>

          {/* Separator - skip after last unit */}
          {i < units.length - 1 && (
            <span className="mb-4 text-lg font-bold leading-none text-muted-foreground select-none">
              :
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

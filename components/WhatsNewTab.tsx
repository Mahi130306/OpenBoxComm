'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { X, Bell, Calendar, BookOpen, MessageSquare, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Update, UpdateType } from '@/types'
import { cn } from '@/lib/utils'

const ICONS: Record<UpdateType, React.ReactNode> = {
  blog: <MessageSquare className="w-4 h-4" />,
  event: <Calendar className="w-4 h-4" />,
  doc: <BookOpen className="w-4 h-4" />,
  update: <Bell className="w-4 h-4" />,
}

export function WhatsNewTab() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [updates, setUpdates] = useState<Update[]>([])
  const [seenIds, setSeenIds] = useState<string[]>([])
  const panelRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch('/api/whats-new')
        if (res.ok) {
          const data = await res.json()
          setUpdates(data)
        }
      } catch (err) {
        console.error('Failed to fetch updates:', err)
      }
    }

    const savedSeen = localStorage.getItem('ob-seen-updates')
    if (savedSeen) {
      setSeenIds(JSON.parse(savedSeen))
    }

    fetchUpdates()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (!mounted) return

    if (isOpen) {
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 })
      gsap.to(panelRef.current, { x: 0, duration: 0.5, ease: 'power3.out' })
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          if (!isOpen) setMounted(false)
        },
      })
      tl.to(backdropRef.current, { opacity: 0, duration: 0.3 }).to(
        panelRef.current,
        { x: '100%', duration: 0.4, ease: 'power3.in' },
        0
      )
    }
  }, [isOpen, mounted])

  const handleOpen = () => {
    setIsOpen(true)
    const newSeenIds = Array.from(new Set([...seenIds, ...updates.map((u) => u.id)]))
    setSeenIds(newSeenIds)
    localStorage.setItem('ob-seen-updates', JSON.stringify(newSeenIds))
  }

  const unseenCount = updates.filter((u) => !seenIds.includes(u.id)).length

  return (
    <>
      {/* Floating Tab */}
      <button
        onClick={handleOpen}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 bg-primary/90 hover:bg-primary text-primary-foreground py-4 px-2 rounded-l-xl transition-all shadow-lg backdrop-blur-sm group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="[writing-mode:vertical-lr] font-syne font-bold uppercase tracking-widest text-xs">
            New
          </span>
          {unseenCount > 0 && (
            <span className="bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
              {unseenCount}
            </span>
          )}
        </div>
      </button>

      {/* Slide-in Panel */}
      {mounted && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            style={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50"
          />

          {/* Panel */}
          <div
            ref={panelRef}
            style={{ transform: 'translateX(100%)' }}
            className="fixed right-0 top-0 h-full w-full max-w-[320px] bg-background/80 backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl flex flex-col"
          >
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <h2 className="font-syne text-xl font-bold">What's New</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {updates.length === 0 ? (
                  <div className="text-center py-10 opacity-50">
                    <Bell className="w-8 h-8 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">No updates yet.</p>
                  </div>
                ) : (
                  updates.map((update) => (
                    <div
                      key={update.id}
                      onClick={() => {
                        router.push(update.href)
                        setIsOpen(false)
                      }}
                      className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="p-1.5 rounded-lg bg-primary/20 text-primary">
                            {ICONS[update.type]}
                          </span>
                          <span className="text-[10px] uppercase font-bold tracking-wider opacity-50">
                            {update.type}
                          </span>
                        </div>
                        <span className="text-[10px] opacity-40">{update.date}</span>
                      </div>
                      <h3 className="font-syne font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                        {update.title}
                      </h3>
                      <p className="text-xs opacity-60 line-clamp-2 leading-relaxed">
                        {update.description}
                      </p>

                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-40 transition-opacity">
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  ))
                )}
              </div>
          </div>
        </>
      )}
    </>
  )
}

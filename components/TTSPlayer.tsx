'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Square, Volume2, ChevronDown, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TTSPlayerProps {
  text?: string
  selector?: string
  themeColor?: 'cyan' | 'blue' | 'teal' | 'emerald' | 'gray'
}

export function TTSPlayer({
  text,
  selector,
  themeColor = 'cyan',
}: TTSPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [rate, setRate] = useState(1)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoice, setSelectedVoice] = useState<string>('')
  const [showSettings, setShowSettings] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)

  const synthRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Define colors based on the design system guidelines (flat, solid colors)
  const colorClasses = {
    cyan: {
      text: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-500/10 hover:bg-cyan-500/20',
      border: 'border-cyan-500/30',
      accentBg: 'bg-cyan-500 text-black',
      badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    },
    blue: {
      text: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500/10 hover:bg-blue-500/20',
      border: 'border-blue-500/30',
      accentBg: 'bg-blue-500 text-white',
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    },
    teal: {
      text: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-500/10 hover:bg-teal-500/20',
      border: 'border-teal-500/30',
      accentBg: 'bg-teal-500 text-black',
      badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    },
    emerald: {
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500/10 hover:bg-emerald-500/20',
      border: 'border-emerald-500/30',
      accentBg: 'bg-emerald-500 text-black',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    gray: {
      text: 'text-muted-foreground',
      bg: 'bg-muted hover:bg-muted/80',
      border: 'border-border',
      accentBg: 'bg-foreground text-background',
      badge: 'bg-muted text-muted-foreground',
    },
  }

  const colors = colorClasses[themeColor]

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true)
      synthRef.current = window.speechSynthesis

      const updateVoices = () => {
        if (!synthRef.current) return
        const availableVoices = synthRef.current.getVoices()
        // Prioritize English voices but fall back to all if none
        const englishVoices = availableVoices.filter((v) =>
          v.lang.toLowerCase().startsWith('en')
        )
        const voiceList = englishVoices.length > 0 ? englishVoices : availableVoices
        setVoices(voiceList)

        // Select a default voice (prefer Google English or Microsoft English if available)
        const defaultVoice =
          voiceList.find((v) => v.name.includes('Google') || v.name.includes('Natural')) ||
          voiceList[0]
        if (defaultVoice) {
          setSelectedVoice(defaultVoice.name)
        }
      }

      updateVoices()
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices
      }
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  // Cancel speech on unmount or navigation
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  const getSpeakText = (): string => {
    if (text) return text
    if (selector && typeof document !== 'undefined') {
      const container = document.querySelector(selector)
      if (container) {
        // Create a clone to clean up text if necessary, or just extract headings and paragraphs
        // We only want textual contents, excluding button texts, code blocks, or nested widgets if any
        const paragraphsAndHeadings = Array.from(
          container.querySelectorAll('h1, h2, h3, h4, p, li')
        )
        if (paragraphsAndHeadings.length > 0) {
          return paragraphsAndHeadings
            .map((el) => el.textContent?.trim())
            .filter(Boolean)
            .join('. ')
        }
        return container.textContent || ''
      }
    }
    return ''
  }

  const handlePlayPause = () => {
    if (!synthRef.current || !speechSupported) return

    if (isPlaying) {
      if (isPaused) {
        synthRef.current.resume()
        setIsPaused(false)
      } else {
        synthRef.current.pause()
        setIsPaused(true)
      }
    } else {
      synthRef.current.cancel()

      const speakText = getSpeakText()
      if (!speakText) return

      const utterance = new SpeechSynthesisUtterance(speakText)
      utteranceRef.current = utterance

      // Set voice
      const voice = voices.find((v) => v.name === selectedVoice)
      if (voice) {
        utterance.voice = voice
      }

      // Set rate
      utterance.rate = rate

      // Listeners
      utterance.onend = () => {
        setIsPlaying(false)
        setIsPaused(false)
      }

      utterance.onerror = (e) => {
        if (e.error !== 'interrupted') {
          console.error('SpeechSynthesisUtterance error:', e)
          setIsPlaying(false)
          setIsPaused(false)
        }
      }

      synthRef.current.speak(utterance)
      setIsPlaying(true)
      setIsPaused(false)
    }
  }

  const handleStop = () => {
    if (!synthRef.current) return
    synthRef.current.cancel()
    setIsPlaying(false)
    setIsPaused(false)
  }

  // Update speech speed rate immediately if speaking
  useEffect(() => {
    if (isPlaying && synthRef.current && utteranceRef.current) {
      // Dynamic speed update may require re-starting utterance in some browsers,
      // but standard synthesis allows setting rate. If it's supported, we update it.
      // Alternatively, we can let user stop and restart, but let's update rate on ref
      utteranceRef.current.rate = rate
    }
  }, [rate, isPlaying])

  if (!speechSupported) {
    return null // Native TTS not supported on device/browser
  }

  return (
    <div className={cn(
      "mb-8 rounded-2xl border bg-surface p-4 shadow-sm",
      colors.border
    )}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Playback Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl font-bold transition-all",
              colors.accentBg
            )}
            aria-label={isPlaying && !isPaused ? 'Pause' : 'Play text to speech'}
          >
            {isPlaying && !isPaused ? (
              <Pause className="h-5 w-5 fill-current" />
            ) : (
              <Play className="h-5 w-5 fill-current translate-x-[1px]" />
            )}
          </button>

          {isPlaying && (
            <button
              onClick={handleStop}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted",
                colors.text
              )}
              aria-label="Stop text to speech"
            >
              <Square className="h-4 w-4 fill-current" />
            </button>
          )}

          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">
              {isPlaying ? (isPaused ? 'Paused' : 'Listening...') : 'Listen to this article'}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Volume2 className="h-3.5 w-3.5" /> Native Device TTS
            </span>
          </div>
        </div>

        {/* Speed and Voice Panel Toggle */}
        <div className="flex items-center gap-2">
          {/* Quick speed adjustment */}
          <div className="flex items-center rounded-lg border border-border p-1 bg-background">
            {[1, 1.25, 1.5, 2].map((speed) => (
              <button
                key={speed}
                onClick={() => setRate(speed)}
                className={cn(
                  "rounded px-2 py-1 text-xs font-bold transition-colors",
                  rate === speed
                    ? colors.badge
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {speed}x
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted text-muted-foreground hover:text-foreground",
              showSettings && "bg-muted"
            )}
            aria-label="TTS Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Settings Dropdown/Drawer (inline) */}
      {showSettings && (
        <div className="mt-4 border-t border-border/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="voice-select" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Voice Selection
              </label>
              <div className="relative">
                <select
                  id="voice-select"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring pr-10"
                >
                  {voices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="speed-slider" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Speed: {rate}x
              </label>
              <input
                id="speed-slider"
                type="range"
                min="0.5"
                max="2.5"
                step="0.25"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

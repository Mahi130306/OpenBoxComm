'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, Pause, Play, Settings, X, ChevronDown, Square } from 'lucide-react'
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
  const [showModal, setShowModal] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [currentElementIndex, setCurrentElementIndex] = useState<number>(-1)

  const synthRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const elementsRef = useRef<HTMLElement[]>([])

  const themeColors = {
    cyan: {
      text: 'text-cyan-600 dark:text-cyan-400',
      textHover: 'hover:text-cyan-500',
      bgActive: 'bg-cyan-500/10 text-cyan-500',
      border: 'border-cyan-500/20',
      rangeAccent: 'accent-cyan-500',
    },
    blue: {
      text: 'text-blue-600 dark:text-blue-400',
      textHover: 'hover:text-blue-500',
      bgActive: 'bg-blue-500/10 text-blue-500',
      border: 'border-blue-500/20',
      rangeAccent: 'accent-blue-500',
    },
    teal: {
      text: 'text-teal-600 dark:text-teal-400',
      textHover: 'hover:text-teal-500',
      bgActive: 'bg-teal-500/10 text-teal-500',
      border: 'border-teal-500/20',
      rangeAccent: 'accent-teal-500',
    },
    emerald: {
      text: 'text-emerald-600 dark:text-emerald-400',
      textHover: 'hover:text-emerald-500',
      bgActive: 'bg-emerald-500/10 text-emerald-500',
      border: 'border-emerald-500/20',
      rangeAccent: 'accent-emerald-500',
    },
    gray: {
      text: 'text-muted-foreground',
      textHover: 'hover:text-foreground',
      bgActive: 'bg-muted text-foreground',
      border: 'border-border',
      rangeAccent: 'accent-foreground',
    },
  }

  const color = themeColors[themeColor]

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true)
      synthRef.current = window.speechSynthesis

      const updateVoices = () => {
        if (!synthRef.current) return
        const availableVoices = synthRef.current.getVoices()
        const englishVoices = availableVoices.filter((v) =>
          v.lang.toLowerCase().startsWith('en')
        )
        const voiceList = englishVoices.length > 0 ? englishVoices : availableVoices
        setVoices(voiceList)

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
      clearAllHighlights()
    }
  }, [])

  const clearAllHighlights = () => {
    if (typeof document === 'undefined') return
    const highlighted = document.querySelectorAll('.tts-highlight')
    highlighted.forEach((e) => {
      const el = e as HTMLElement
      el.classList.remove('tts-highlight', 'border-l-4', 'pl-4', 'transition-all', 'duration-300')
      el.style.backgroundColor = ''
      el.style.borderLeftColor = ''
    })
  }

  const getReadableElements = (): HTMLElement[] => {
    if (!selector || typeof document === 'undefined') return []
    const container = document.querySelector(selector)
    if (!container) return []

    const found = Array.from(
      container.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li')
    ) as HTMLElement[]

    return found.filter((el) => {
      const textVal = el.textContent?.trim()
      if (!textVal) return false
      if (el.closest('.no-tts') || el.closest('button') || el.closest('select')) return false
      return true
    })
  }

  const handleTogglePlay = () => {
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
      clearAllHighlights()

      if (text) {
        const utterance = new SpeechSynthesisUtterance(text)
        utteranceRef.current = utterance
        const voice = voices.find((v) => v.name === selectedVoice)
        if (voice) utterance.voice = voice
        utterance.rate = rate
        utterance.onend = () => {
          setIsPlaying(false)
          setIsPaused(false)
        }
        utterance.onerror = (e) => {
          if (e.error !== 'interrupted') {
            setIsPlaying(false)
            setIsPaused(false)
          }
        }
        synthRef.current.speak(utterance)
        setIsPlaying(true)
        setIsPaused(false)
      } else {
        const readable = getReadableElements()
        if (readable.length === 0) return

        elementsRef.current = readable
        setIsPlaying(true)
        setIsPaused(false)
        speakElement(0, readable)
      }
    }
  }

  const speakElement = (index: number, elementsList: HTMLElement[]) => {
    if (!synthRef.current) return

    if (index < 0 || index >= elementsList.length) {
      handleStop()
      return
    }

    setCurrentElementIndex(index)
    const el = elementsList[index]

    // Scroll into view nicely centered
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })

    // Highlight
    clearAllHighlights()
    el.classList.add('tts-highlight', 'border-l-4', 'pl-4', 'transition-all', 'duration-300')
    if (themeColor === 'cyan') {
      el.style.backgroundColor = 'rgba(6, 182, 212, 0.08)' // cyan-500/10
      el.style.borderLeftColor = '#06b6d4' // cyan-500
    } else if (themeColor === 'blue') {
      el.style.backgroundColor = 'rgba(59, 130, 246, 0.08)' // blue-500/10
      el.style.borderLeftColor = '#3b82f6' // blue-500
    } else if (themeColor === 'teal') {
      el.style.backgroundColor = 'rgba(20, 184, 166, 0.08)' // teal-500/10
      el.style.borderLeftColor = '#14b8a6' // teal-500
    } else if (themeColor === 'emerald') {
      el.style.backgroundColor = 'rgba(16, 185, 129, 0.08)' // emerald-500/10
      el.style.borderLeftColor = '#10b981' // emerald-500
    } else {
      el.style.backgroundColor = 'rgba(120, 120, 120, 0.08)'
      el.style.borderLeftColor = '#787878'
    }

    const textToSpeak = el.textContent || ''
    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utteranceRef.current = utterance

    const voice = voices.find((v) => v.name === selectedVoice)
    if (voice) {
      utterance.voice = voice
    }
    utterance.rate = rate

    utterance.onend = () => {
      speakElement(index + 1, elementsList)
    }

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted') {
        console.error('TTS sequential error:', e)
        speakElement(index + 1, elementsList)
      }
    }

    // Optional onboundary event for word index logging / tracking
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        // can be used for extra word-level effects if desired
      }
    }

    synthRef.current.speak(utterance)
  }

  const handleStop = () => {
    if (synthRef.current) {
      synthRef.current.cancel()
    }
    clearAllHighlights()
    setIsPlaying(false)
    setIsPaused(false)
    setShowModal(false)
    setCurrentElementIndex(-1)
  }

  useEffect(() => {
    if (isPlaying && synthRef.current && utteranceRef.current) {
      utteranceRef.current.rate = rate
    }
  }, [rate, isPlaying])

  if (!speechSupported) return null

  return (
    <>
      {/* 1. Inline Trigger Button (remains in the DOM to keep layout perfect and provide a way to start) */}
      <button
        onClick={handleTogglePlay}
        disabled={isPlaying}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all",
          isPlaying
            ? cn("border-transparent font-semibold shadow-sm opacity-50 cursor-not-allowed", color.bgActive)
            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
        title={isPlaying ? "TTS is active" : "Listen to this page"}
        aria-label={isPlaying ? "TTS is active" : "Listen to this page"}
      >
        <Volume2 className={cn("h-4 w-4", isPlaying && "animate-pulse")} />
      </button>

      {/* 2. Floating Sticky Control Bar (only visible when TTS is active, stays sticky when scrolled or auto scrolled) */}
      {isPlaying && (
        <div
          className={cn(
            "fixed bottom-6 right-6 md:right-10 z-[9999] flex items-center gap-2 rounded-2xl border border-border/80 bg-background/95 backdrop-blur-md p-2.5 shadow-2xl animate-in slide-in-from-bottom-4 duration-300",
            "text-foreground"
          )}
        >
          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 px-1.5">
            <span className={cn("h-2 w-2 rounded-full animate-pulse",
              themeColor === 'cyan' ? 'bg-cyan-500' :
              themeColor === 'blue' ? 'bg-blue-500' :
              themeColor === 'teal' ? 'bg-teal-500' :
              themeColor === 'emerald' ? 'bg-emerald-500' : 'bg-foreground'
            )} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground hidden sm:inline">
              Reading
            </span>
          </div>

          {/* Pause / Resume Button */}
          <button
            onClick={handleTogglePlay}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all",
              color.bgActive
            )}
            title={isPaused ? "Resume Reading" : "Pause Reading"}
            aria-label={isPaused ? "Resume Reading" : "Pause Reading"}
          >
            {isPaused ? (
              <Play className="h-4 w-4 fill-current" />
            ) : (
              <Pause className="h-4 w-4 fill-current animate-pulse" />
            )}
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setShowModal(!showModal)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              showModal && "bg-muted"
            )}
            title="TTS Settings"
            aria-label="TTS Settings"
          >
            <Settings className="h-4 w-4" />
          </button>

          {/* Stop (Square) Button */}
          <button
            onClick={handleStop}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-red-500 hover:bg-red-500/10 transition-colors"
            title="Stop listening"
            aria-label="Stop listening"
          >
            <Square className="h-4 w-4 fill-current" />
          </button>

          {/* Settings Popover (positioned above the floating bar) */}
          {showModal && (
            <div className="absolute bottom-16 right-0 z-50 w-72 rounded-xl border border-border bg-background p-4 shadow-xl animate-in fade-in slide-in-from-bottom-1 duration-150">
              <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Voice Options</h4>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Close TTS Settings"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="modal-voice-select" className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-1">
                    Select Voice
                  </label>
                  <div className="relative">
                    <select
                      id="modal-voice-select"
                      value={selectedVoice}
                      onChange={(e) => setSelectedVoice(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring pr-8"
                    >
                      {voices.map((voice) => (
                        <option key={voice.name} value={voice.name}>
                          {voice.name} ({voice.lang})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="modal-speed-slider" className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                      Speed Rate
                    </label>
                    <span className="text-xs font-bold text-foreground">{rate}x</span>
                  </div>
                  <input
                    id="modal-speed-slider"
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.25"
                    value={rate}
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                    className={cn("w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer", color.rangeAccent)}
                  />
                  <div className="flex justify-between text-[9px] text-muted-foreground/60 mt-1">
                    <span>0.5x</span>
                    <span>1.0x</span>
                    <span>1.5x</span>
                    <span>2.0x</span>
                    <span>2.5x</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

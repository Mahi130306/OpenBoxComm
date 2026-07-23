'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, Pause, Play, Settings, X, ChevronDown } from 'lucide-react'
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

  const synthRef = useRef<SpeechSynthesis | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

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
    }
  }, [])

  const getSpeakText = (): string => {
    if (text) return text
    if (selector && typeof document !== 'undefined') {
      const container = document.querySelector(selector)
      if (container) {
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

      const speakText = getSpeakText()
      if (!speakText) return

      const utterance = new SpeechSynthesisUtterance(speakText)
      utteranceRef.current = utterance

      const voice = voices.find((v) => v.name === selectedVoice)
      if (voice) {
        utterance.voice = voice
      }

      utterance.rate = rate

      utterance.onend = () => {
        setIsPlaying(false)
        setIsPaused(false)
      }

      utterance.onerror = (e) => {
        if (e.error !== 'interrupted') {
          console.error('TTS synthesis error:', e)
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
    setShowModal(false)
  }

  useEffect(() => {
    if (isPlaying && synthRef.current && utteranceRef.current) {
      utteranceRef.current.rate = rate
    }
  }, [rate, isPlaying])

  if (!speechSupported) return null

  return (
    <div className="relative inline-flex items-center gap-2">
      {/* Mini Speaker trigger / Play-Pause Button */}
      <button
        onClick={handleTogglePlay}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all",
          isPlaying
            ? cn("border-transparent font-semibold shadow-sm", color.bgActive)
            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
        title={isPlaying ? (isPaused ? "Resume Reading" : "Pause Reading") : "Listen to this page"}
        aria-label={isPlaying ? (isPaused ? "Resume Reading" : "Pause Reading") : "Listen to this page"}
      >
        {!isPlaying ? (
          <Volume2 className="h-4 w-4" />
        ) : isPaused ? (
          <Play className="h-4 w-4 fill-current" />
        ) : (
          <Pause className="h-4 w-4 fill-current animate-pulse" />
        )}
      </button>

      {/* Settings / Stop gear buttons are visible only when initialized */}
      {isPlaying && (
        <>
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

          <button
            onClick={handleStop}
            className="inline-flex h-9 px-2.5 items-center justify-center rounded-lg border border-border text-xs font-bold text-red-500 hover:bg-red-500/10 transition-colors"
            title="Stop listening"
          >
            Stop
          </button>
        </>
      )}

      {/* Floating Small Settings Modal */}
      {showModal && isPlaying && (
        <div className="absolute top-11 left-0 z-50 w-72 rounded-xl border border-border bg-background p-4 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
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
  )
}

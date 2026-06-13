'use client'

import { useState, useEffect, useRef } from 'react'

type Mood = 'sleepy' | 'hyper' | 'grumpy' | 'curious' | 'happy' | 'bed'

const moods: Mood[] = ['sleepy', 'hyper', 'grumpy', 'curious', 'happy']

const moodData: Record<Mood, { phrases: string[], duration: string, icon: string, label: string }> = {
  bed: {
    phrases: ["zzzZZZzz...", "not now earthling...", "...mmmph.", "leave me alone im sleeping"],
    duration: "0s",
    icon: "🛌",
    label: "sleeping"
  },
  sleepy: {
    phrases: ["Five more minutes...", "Why did you wake me up?", "Is the build done yet? Zzz...", "I was having the best dream..."],
    duration: "4s",
    icon: "😪",
    label: "sleepy"
  },
  hyper: {
    phrases: ["Let's code! Let's build! Let's take over!", "Need. More. Space coffee.", "Did someone say dark mode?!", "I'm vibrating at the speed of light!", "LETS GOOOOO"],
    duration: "0.4s",
    icon: "👾",
    label: "hyper"
  },
  grumpy: {
    phrases: ["Stop poking me.", "Earth is too loud.", "I am a feature, not a bug.", "404: Patience not found.", "I SAID STOP."],
    duration: "0s",
    icon: "😡",
    label: "grumpy"
  },
  curious: {
    phrases: ["What are we building today?", "Is that React?", "Are we alone in the universe? Oh wait, I'm here.", "Show me the source code!", "Hmm... interesting commit message."],
    duration: "2s",
    icon: "🛸",
    label: "curious"
  },
  happy: {
    phrases: ["Greetings, Earthling!", "Open Box is the best!", "I come in peace!", "You're doing great!", "This codebase? *chef's kiss*"],
    duration: "1.5s",
    icon: "👽",
    label: "happy"
  }
}

const getCorner = (side: 'left' | 'right') => {
  return side === 'left' ? 24 : window.innerWidth - 80
}

export function Pet() {
  const [speech, setSpeech] = useState<string | null>(null)
  const [mood, setMood] = useState<Mood>('happy')
  const [pokeCount, setPokeCount] = useState(0)
  const [posX, setPosX] = useState(24)
  const [isBed, setIsBed] = useState(false)
  const [isWalking, setIsWalking] = useState(false)
  const [facingLeft, setFacingLeft] = useState(false)

  const sleepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const moveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const speechTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const moodTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const currentCornerRef = useRef<'left' | 'right'>('left')
  const isBedRef = useRef(false)
  const posXRef = useRef(24)

  isBedRef.current = isBed

  const showSpeech = (text: string) => {
    setSpeech(text)
    if (speechTimerRef.current) clearTimeout(speechTimerRef.current)
    speechTimerRef.current = setTimeout(() => setSpeech(null), 6000)
  }

  const goToBed = () => {
    setIsBed(true)
    setMood('bed')
    setIsWalking(false)
    setSpeech(null)
    if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
    const leftDist = posXRef.current
    const rightDist = window.innerWidth - 80 - posXRef.current
    currentCornerRef.current = leftDist < rightDist ? 'left' : 'right'
    const cornerX = getCorner(currentCornerRef.current)
    posXRef.current = cornerX
    setPosX(cornerX)
  }

  const resetSleepTimer = () => {
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current)
    sleepTimerRef.current = setTimeout(() => {
      goToBed()
    }, 5500)
  }

  const stopWalking = () => {
    setIsWalking(false)
    if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
  }

  const walkToOtherCorner = () => {
    if (isBedRef.current) return
    const nextCorner = currentCornerRef.current === 'left' ? 'right' : 'left'
    currentCornerRef.current = nextCorner
    const targetX = getCorner(nextCorner)
    setFacingLeft(nextCorner === 'left')
    setIsWalking(true)
    posXRef.current = targetX
    setPosX(targetX)

    moveTimeoutRef.current = setTimeout(() => {
      setIsWalking(false)
      setFacingLeft(nextCorner === 'right') // face back the other way while idle
      moveTimeoutRef.current = setTimeout(() => {
        if (!isBedRef.current) walkToOtherCorner()
      }, 3000)
    }, 8000)
  }

  const wakeUp = () => {
    setIsBed(false)
    const newMood = moods[Math.floor(Math.random() * moods.length)]
    setMood(newMood)
    showSpeech(moodData[newMood].phrases[0])
    resetSleepTimer()
    if (newMood === 'curious') {
      setTimeout(() => walkToOtherCorner(), 1000)
    }
  }

  useEffect(() => {
    resetSleepTimer()

    moodTimerRef.current = setInterval(() => {
      if (isBedRef.current) return
      const newMood = moods[Math.floor(Math.random() * moods.length)]
      setMood(newMood)
      showSpeech(moodData[newMood].phrases[0])
      resetSleepTimer()

      if (newMood === 'curious') {
        walkToOtherCorner()
      } else {
        stopWalking()
      }
    }, 15000)

    return () => {
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current)
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
      if (speechTimerRef.current) clearTimeout(speechTimerRef.current)
      if (moodTimerRef.current) clearInterval(moodTimerRef.current)
    }
  }, [])

  const handlePoke = () => {
    if (isBed) {
      const bedPhrases = moodData['bed'].phrases
      showSpeech(bedPhrases[Math.floor(Math.random() * bedPhrases.length)])
      return
    }

    resetSleepTimer()

    const newCount = pokeCount + 1
    setPokeCount(newCount)

    if (newCount > 5) {
      setMood('grumpy')
      stopWalking()
      showSpeech(moodData['grumpy'].phrases[Math.floor(Math.random() * moodData['grumpy'].phrases.length)])
      setTimeout(() => setPokeCount(0), 4000)
    } else {
      if (Math.random() > 0.6) {
        const newMood = moods[Math.floor(Math.random() * moods.length)]
        setMood(newMood)
        showSpeech(moodData[newMood].phrases[0])
        if (newMood === 'curious') {
          walkToOtherCorner()
        } else {
          stopWalking()
        }
      } else {
        const phrases = moodData[mood].phrases
        showSpeech(phrases[Math.floor(Math.random() * phrases.length)])
      }
    }
  }

  const currentData = moodData[mood]

  const bounceClass = !isBed && !isWalking && mood !== 'grumpy' && mood !== 'bed'
    ? "animate-bounce hover:animate-none"
    : ""

  const buttonAnimationStyle: React.CSSProperties = isWalking
    ? {
        animationName: 'pet-walk',
        animationDuration: '0.5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      }
    : currentData.duration !== "0s"
    ? {
        animationDuration: currentData.duration,
      }
    : {}

  return (
    <div
      className="fixed bottom-6 z-50 flex items-end gap-2"
      style={{
        left: `${posX}px`,
        transition: isWalking
          ? 'left 8000ms cubic-bezier(0.45, 0, 0.55, 1)'
          : isBed
          ? 'left 4000ms cubic-bezier(0.45, 0, 0.55, 1)'
          : 'none',
      }}
    >
      {/* Speech bubble */}
      {speech && (
        <div
          className={`absolute bottom-16 w-max max-w-[220px] animate-in fade-in zoom-in slide-in-from-bottom-2 duration-500 rounded-2xl bg-surface border border-border p-3 text-sm shadow-xl dark:shadow-cyan-900/20 ${
            currentCornerRef.current === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          <p className="text-foreground font-medium leading-snug">{speech}</p>
          <span className="text-[10px] text-muted-foreground mt-1 block capitalize">{currentData.label} mode</span>
          <div className={`absolute -bottom-2 w-4 h-4 bg-surface border-b border-r border-border transform rotate-45 ${
            currentCornerRef.current === 'right' ? 'right-4' : 'left-4'
          }`} />
        </div>
      )}

      <div className="flex flex-col items-center gap-0.5">
        <button
          onClick={handlePoke}
          onMouseEnter={() => { if (!isBed) resetSleepTimer() }}
          className={`text-4xl select-none hover:scale-110 active:scale-95 ${bounceClass}`}
          style={{
            ...buttonAnimationStyle,
            transform: facingLeft ? 'scaleX(-1)' : undefined,
          }}
          title={isBed ? "shhh... sleeping" : `Poke the alien (${currentData.label})`}
        >
          {currentData.icon}
        </button>

        {isBed && (
          <button
            onClick={wakeUp}
            className="text-[10px] text-muted-foreground hover:text-foreground transition-colors mt-0.5 underline underline-offset-2"
          >
            wake up
          </button>
        )}
      </div>
    </div>
  )
}
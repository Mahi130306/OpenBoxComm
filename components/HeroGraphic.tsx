'use client'

import { useEffect, useState } from 'react'

export function HeroGraphic() {
  const [mounted, setMounted] = useState(false)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid hydration mismatch for animations
  if (!mounted) return <div className="h-full min-h-[400px] w-full opacity-0" />

  const handleWarpSpeed = () => {
    setSpeedMultiplier(0.1) // 10x faster
    setTimeout(() => setSpeedMultiplier(1), 3000)
  }

  return (
    <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[250px] w-[250px] animate-pulse rounded-full bg-cyan-500/20 blur-[80px]" style={{ animationDuration: '4s' }} />
        <div className="absolute h-[200px] w-[200px] animate-pulse rounded-full bg-fuchsia-500/20 blur-[70px]" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      {/* Main Container */}
      <div 
        className="relative z-10 flex h-[300px] w-[300px] cursor-pointer items-center justify-center transition-transform hover:scale-105 active:scale-95"
        onClick={handleWarpSpeed}
        title="Activate Warp Speed"
      >
        {/* Orbital Rings */}
        <div 
          className="absolute inset-0 animate-spin rounded-full border border-cyan-500/20 border-t-cyan-400/80 border-b-cyan-400/10 transition-all duration-500"
          style={{ animationDuration: `${20 * speedMultiplier}s` }} 
        />
        <div 
          className="absolute inset-4 animate-spin rounded-full border border-fuchsia-500/20 border-b-fuchsia-400/80 border-t-fuchsia-400/10 transition-all duration-500"
          style={{ animationDuration: `${15 * speedMultiplier}s`, animationDirection: 'reverse' }} 
        />
        <div 
          className="absolute inset-8 animate-spin rounded-full border border-indigo-500/20 border-r-indigo-400/80 border-l-indigo-400/10 transition-all duration-500"
          style={{ animationDuration: `${10 * speedMultiplier}s` }} 
        />
        
        {/* The Core "World" */}
        <div className="absolute flex h-36 w-36 items-center justify-center">
          {/* Core Glow */}
          <div 
            className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-60 blur-2xl"
            style={{ animationDuration: '3s' }}
          />
          {/* Glass Sphere */}
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 shadow-2xl backdrop-blur-md">
            {/* Glossy reflection */}
            <div className="absolute -left-1/2 -top-1/2 h-full w-full rotate-45 bg-white/10 blur-[15px]" />
            <div className="absolute bottom-0 right-0 h-2/3 w-2/3 rounded-full bg-cyan-300/30 blur-[20px]" />
          </div>
        </div>

        {/* Orbiting sub-communities / Nodes */}
        <div 
          className="absolute top-2 left-6 h-6 w-6 animate-bounce rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.5)]" 
          style={{ animationDuration: '3s' }} 
        />
        <div 
          className="absolute bottom-6 right-6 h-8 w-8 animate-bounce rounded-full bg-gradient-to-br from-rose-500 to-amber-400 shadow-[0_0_20px_rgba(244,63,94,0.5)]" 
          style={{ animationDuration: '4s', animationDelay: '0.5s' }} 
        />
        <div 
          className="absolute bottom-24 -left-4 h-4 w-4 animate-bounce rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 shadow-[0_0_15px_rgba(167,139,250,0.5)]" 
          style={{ animationDuration: '2.5s', animationDelay: '1s' }} 
        />
      </div>
    </div>
  )
}

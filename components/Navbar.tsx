'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Heart, Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const servers = {
  live: [
    { name: 'Jn.', slug: 'jn', comingSoon: false },
    { name: 'Dev', slug: 'dev', comingSoon: false },
    { name: 'GG', slug: 'gg', comingSoon: false },
  ],
  comingSoon: [
    { name: 'Study', slug: 'study', comingSoon: true },
    { name: 'Connect', slug: 'connect', comingSoon: true },
  ],
}

interface ThemeToggleProps {
  darkToast: boolean
  setDarkToast: (val: boolean) => void
  showSuggestion: boolean
  setShowSuggestion: (val: boolean) => void
}

function ThemeToggle({
  darkToast,
  setDarkToast,
  showSuggestion,
  setShowSuggestion,
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [tease, setTease] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('ob-dismissed-dark-suggestion')
      if (resolvedTheme === 'light' && !dismissed) {
        setShowSuggestion(true)
      }
    }, 1500)
    return () => clearTimeout(timer)
  }, [mounted, resolvedTheme, setShowSuggestion])

  if (!mounted) return <div className="h-9 w-9" />

  const isDark = resolvedTheme === 'dark'

  const handleToggle = () => {
    if (isDark) {
      setTease(true)
      return
    }
    setTheme('dark')
    setDarkToast(true)
    setTimeout(() => setDarkToast(false), 4500)
  }

  const handleYes = () => {
    setTease(false)
    setTheme('light')
    const flash = document.createElement('div')
    flash.style.cssText = 'position:fixed;inset:0;background:white;z-index:9999;pointer-events:none;transition:opacity 0.6s ease'
    document.body.appendChild(flash)
    setTimeout(() => { flash.style.opacity = '0' }, 50)
    setTimeout(() => { flash.parentNode && flash.parentNode.removeChild(flash) }, 700)
  }

  const handleNo = () => {
    setTease(false)
  }

  return (
    <div className="relative flex items-center justify-center">
      <button
        id="theme-toggle"
        onClick={handleToggle}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className="relative rounded-md p-2 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
      >
        {isDark ? (
          <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-12" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
        )}
      </button>

      {tease && (
        <div className="absolute top-12 right-0 z-50 w-64 animate-in fade-in slide-in-from-top-2 duration-300 bg-background border border-border rounded-xl shadow-xl p-4">
          <p className="text-3xl mb-1">🙃</p>
          <p className="text-base font-bold text-foreground mb-1">bro are you sure?</p>
          <p className="text-xs text-muted-foreground mb-4">light mode? really? on purpose??</p>
          <div className="flex gap-2">
            <button
              onClick={handleYes}
              className="flex-1 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black text-sm font-bold py-1.5 transition-colors"
            >
              yes 💥
            </button>
            <button
              onClick={handleNo}
              className="flex-1 rounded-lg bg-accent hover:bg-accent/80 text-foreground text-sm font-bold py-1.5 transition-colors"
            >
              no 😮‍💨
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const { setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkToast, setDarkToast] = useState(false)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleToggleSuggestion = () => {
    setShowSuggestion(false)
    sessionStorage.setItem('ob-dismissed-dark-suggestion', 'true')
    setTheme('dark')
    setDarkToast(true)
    setTimeout(() => setDarkToast(false), 4500)
  }

  const handleDismissSuggestion = () => {
    setShowSuggestion(false)
    sessionStorage.setItem('ob-dismissed-dark-suggestion', 'true')
  }

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
            ? 'bg-background/98 shadow-sm backdrop-blur-lg'
            : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          } border-border`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-8 w-8 overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src="/images/OB.png"
                    alt="Open Box logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-lg font-heading font-bold tracking-tight text-foreground">
                  Open Box
                </span>
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-sm font-medium hover:text-muted-foreground transition-colors">
                    Servers
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-surface border-border">
                  <DropdownMenuLabel>Live</DropdownMenuLabel>
                  {servers.live.map((server) => (
                    <DropdownMenuItem key={server.slug} asChild>
                      <Link href={`/servers/${server.slug}`} className="cursor-pointer">
                        {server.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Coming Soon</DropdownMenuLabel>
                  {servers.comingSoon.map((server) => (
                    <DropdownMenuItem
                      key={server.slug}
                      disabled
                      className="text-muted-foreground"
                    >
                      <span className="flex items-center justify-between w-full">
                        {server.name}
                        <span className="text-xs bg-muted px-1.5 py-0.5 rounded">Soon</span>
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/events" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                Events
              </Link>
              <Link href="/blogs" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                Blogs
              </Link>
              <Link href="/doc" className="text-sm font-medium hover:text-muted-foreground transition-colors">
                Docs
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-2">
              <Link
                href="/support"
                className="text-sm font-medium hover:text-muted-foreground flex items-center gap-1 px-2 py-1 transition-colors"
              >
                <Heart className="h-4 w-4" /> Support
              </Link>
              <Link href="/help" className="text-sm font-medium hover:text-muted-foreground px-2 py-1 transition-colors">
                Help
              </Link>
              <ThemeToggle
                darkToast={darkToast}
                setDarkToast={setDarkToast}
                showSuggestion={showSuggestion}
                setShowSuggestion={setShowSuggestion}
              />
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle
                darkToast={darkToast}
                setDarkToast={setDarkToast}
                showSuggestion={showSuggestion}
                setShowSuggestion={setShowSuggestion}
              />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground p-1"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-surface animate-fade-in">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <Link href="/" className="block py-2 text-sm font-medium hover:text-muted-foreground">Home</Link>
              <Link href="/about" className="block py-2 text-sm font-medium hover:text-muted-foreground">About</Link>
              <div className="py-2">
                <p className="text-sm font-medium text-muted-foreground mb-1">Live Servers</p>
                {servers.live.map((server) => (
                  <Link
                    key={server.slug}
                    href={`/servers/${server.slug}`}
                    className="block py-1 pl-2 text-sm hover:text-muted-foreground"
                  >
                    {server.name}
                  </Link>
                ))}
                <p className="text-sm font-medium text-muted-foreground mt-2 mb-1">Coming Soon</p>
                {servers.comingSoon.map((server) => (
                  <span key={server.slug} className="block py-1 pl-2 text-sm text-muted-foreground opacity-50">
                    {server.name} (Soon)
                  </span>
                ))}
              </div>
              <Link href="/events" className="block py-2 text-sm font-medium hover:text-muted-foreground">Events</Link>
              <Link href="/blogs" className="block py-2 text-sm font-medium hover:text-muted-foreground">Blogs</Link>
              <Link href="/doc" className="block py-2 text-sm font-medium hover:text-muted-foreground">Docs</Link>
              {/* <Link href="/join" className="block py-2 text-sm font-bold text-cyan-500">Join Community</Link> */}
              <Link href="/support" className="flex items-center gap-1.5 py-2 text-sm font-medium hover:text-muted-foreground">
                <Heart className="h-4 w-4" /> Support </Link>
              <Link href="/help" className="block py-2 text-sm font-medium hover:text-muted-foreground">Help</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Render the fixed toasts completely outside the fixed <nav> block */}
      {darkToast && (
        <div className="fixed bottom-6 left-1/2 z-[100] w-[90%] max-w-sm -translate-x-1/2 rounded-xl border border-border bg-background/95 p-3.5 text-center shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85 animate-in fade-in slide-in-from-bottom-4 duration-300 md:fixed md:bottom-auto md:top-20 md:left-auto md:right-6 md:translate-x-0 md:w-auto md:max-w-none md:text-left">
          <span className="text-sm font-bold text-foreground sm:text-base whitespace-normal md:whitespace-nowrap">
            Welcome back to the dark side 👾
          </span>
        </div>
      )}

      {showSuggestion && (
        <div className="fixed bottom-6 left-1/2 z-[100] w-[90%] max-w-sm -translate-x-1/2 rounded-xl border border-border bg-background/95 p-4 text-center shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85 animate-in fade-in slide-in-from-bottom-4 duration-300 md:fixed md:bottom-auto md:top-20 md:left-auto md:right-6 md:translate-x-0 md:w-64 md:text-left">
          <p className="text-sm font-bold text-foreground mb-2">
            System is in light mode? ☀️
          </p>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            The dark side looks way better! Switch now?
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleToggleSuggestion}
              className="flex-1 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black text-xs font-bold py-1.5 transition-colors"
            >
              Toggle 🌙
            </button>
            <button
              onClick={handleDismissSuggestion}
              className="flex-1 rounded-lg bg-accent hover:bg-accent/80 text-foreground text-xs font-bold py-1.5 transition-colors"
            >
              Keep Light
            </button>
          </div>
        </div>
      )}
    </>
  )
}

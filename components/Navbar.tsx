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

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [tease, setTease] = useState(false)
  const [darkToast, setDarkToast] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-9 w-9" />

  const isDark = theme === 'dark'

  const handleToggle = () => {
    if (isDark) {
      setTease(true)
      return
    }
    setTheme('dark')
    setDarkToast(true)
    setTimeout(() => setDarkToast(false), 2500)
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

      {darkToast && (
        <div className="absolute top-12 right-0 z-50 whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-300 bg-background border border-border px-3 py-2 rounded-lg shadow-md">
          <span className="text-2xl font-bold text-foreground">welcome back to the dark side 👾</span>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg border-white/10 py-1'
            : 'bg-transparent border-transparent py-2'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group transition-all duration-300 hover:opacity-80">
                <div className="relative h-9 w-9 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl">
                  <Image
                    src="/images/OB.png"
                    alt="Open Box logo"
                    fill
                    sizes="36px"
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
              <Link href="/" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                    Community
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 glass-card mt-2">
                  <DropdownMenuLabel className="text-xs uppercase tracking-widest opacity-50">Live Servers</DropdownMenuLabel>
                  {servers.live.map((server) => (
                    <DropdownMenuItem key={server.slug} asChild className="focus:bg-cyan-500/20 focus:text-cyan-400">
                      <Link href={`/community/${server.slug}`} className="cursor-pointer font-medium">
                        {server.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="opacity-10" />
                  <DropdownMenuLabel className="text-xs uppercase tracking-widest opacity-50">Coming Soon</DropdownMenuLabel>
                  {servers.comingSoon.map((server) => (
                    <DropdownMenuItem
                      key={server.slug}
                      disabled
                      className="text-muted-foreground/50"
                    >
                      <span className="flex items-center justify-between w-full">
                        {server.name}
                        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded uppercase font-bold tracking-tighter">Soon</span>
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/events" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                Events
              </Link>
              <Link href="/blog" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                Blog
              </Link>
              <Link href="/docs" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                Docs
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-2">
              <Link
                href="/sponsor"
                className="text-sm font-semibold hover:text-pink-400 flex items-center gap-1 px-2 py-1 transition-colors group"
              >
                <Heart className="h-4 w-4 transition-transform group-hover:scale-125" /> Sponsor
              </Link>
              <Link href="/contact" className="text-sm font-semibold hover:text-cyan-400 px-2 py-1 transition-colors">
                Contact
              </Link>
              <ThemeToggle />
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
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
          <div className="md:hidden border-t border-border glass animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-1 px-4 pb-6 pt-4">
              <Link href="/" className="block py-2 text-base font-semibold hover:text-cyan-400">Home</Link>
              <Link href="/about" className="block py-2 text-base font-semibold hover:text-cyan-400">About</Link>
              <div className="py-2 border-y border-white/5 my-2">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Community</p>
                {servers.live.map((server) => (
                  <Link
                    key={server.slug}
                    href={`/community/${server.slug}`}
                    className="block py-2 pl-2 text-sm font-medium hover:text-cyan-400"
                  >
                    {server.name}
                  </Link>
                ))}
              </div>
              <Link href="/events" className="block py-2 text-base font-semibold hover:text-cyan-400">Events</Link>
              <Link href="/blog" className="block py-2 text-base font-semibold hover:text-cyan-400">Blog</Link>
              <Link href="/docs" className="block py-2 text-base font-semibold hover:text-cyan-400">Docs</Link>
              <div className="pt-4 space-y-2">
                <Link href="/sponsor" className="flex items-center gap-2 py-3 px-4 rounded-xl bg-pink-500/10 text-pink-400 text-sm font-bold">
                  <Heart className="h-4 w-4 fill-current" /> Sponsor Open Box
                </Link>
                <Link href="/contact" className="block py-2 text-center text-sm font-medium text-muted-foreground">Contact & Support</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

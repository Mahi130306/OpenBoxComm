'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Heart, Menu, X, LogIn, Sun, Moon, User, LogOut } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { logger } from '@/lib/logger'
import { createClient } from '@/lib/supabase/client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
      // going dark -> light: show the "bro are you sure?" prompt instead
      setTease(true)
      return
    }
    // going light -> dark: just do it with a fun toast
    setTheme('dark')
    setDarkToast(true)
    setTimeout(() => setDarkToast(false), 2500)
    logger.info('Theme toggled', { from: theme, to: 'dark' })
  }

  const handleYes = () => {
  setTease(false)
  setTheme('light')
  // flashbang
  const flash = document.createElement('div')
  flash.style.cssText = 'position:fixed;inset:0;background:white;z-index:9999;pointer-events:none;transition:opacity 0.6s ease'
  document.body.appendChild(flash)
  setTimeout(() => { flash.style.opacity = '0' }, 50)
  setTimeout(() => { flash.removeChild && document.body.removeChild(flash) }, 700)
  logger.info('Theme toggled', { from: 'dark', to: 'light' })
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

      {/* Dark -> Light tease popup */}
      {tease && (
        <div className="absolute top-12 right-0 z-50 w-64 animate-in fade-in slide-in-from-top-2 duration-300 bg-background border border-border rounded-xl shadow-xl p-4">
          <p className="text-3xl mb-1">🙃</p>
          <p className="text-base font-bold text-foreground mb-1">bro are you sure?</p>
          <p className="text-xs text-muted-foreground mb-4">light mode? really? on purpose??</p>
          <div className="flex gap-2">
            <button
              onClick={handleYes}
              className="flex-1 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-sm font-bold py-1.5 transition-colors"
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

      {/* Light -> Dark toast */}
      {darkToast && (
        <div className="absolute top-12 right-0 z-50 whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-300 bg-background border border-border px-3 py-2 rounded-lg shadow-md">
          <span className="text-sm font-bold text-foreground">welcome back to the dark side 😈</span>
        </div>
      )}
    </div>
  )
}

const loginExcuses = [
  "Login is coming soon. Our lead dev went for coffee and hasn't returned since Tuesday.",
  "The database is currently taking a nap. Shhh. 😴",
  "We spent the entire authentication budget on the dark mode gradient.",
  "We forgot the admin password. It was 'password123', right?",
  "Still figuring out how to exit Vim. Be right with you.",
  "Authentication is hard. Join Discord while we cry in the corner."
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  const [loginExcuse, setLoginExcuse] = useState(loginExcuses[0])
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()
  const isLoginEnabled = process.env.NEXT_PUBLIC_LOGIN_ENABLED === 'true'
  const supabase = createClient()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check auth state
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      subscription.unsubscribe()
    }
  }, [supabase])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleLoginClick = () => {
    if (user) {
      router.push('/dashboard')
      return
    }

    if (!isLoginEnabled) {
      setLoginExcuse(loginExcuses[Math.floor(Math.random() * loginExcuses.length)])
      setLoginDialogOpen(true)
      logger.info('Login dialog opened — login not yet enabled')
    } else {
      logger.info('Navigating to login')
      router.push('/login')
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? 'bg-background/98 shadow-sm backdrop-blur-lg'
            : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        } border-border`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
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
                <span className="text-lg font-heading font-bold tracking-tight">
                  Open Box
                </span>
              </Link>
            </div>

            {/* Desktop Center Links */}
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

            {/* Desktop Right Side */}
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
              <ThemeToggle />

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name} />
                        <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.user_metadata?.full_name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-rose-500 focus:text-rose-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" size="sm" onClick={handleLoginClick}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              )}
            </div>

            {/* Mobile: theme + hamburger */}
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

        {/* Mobile menu */}
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
              <Link href="/support" className="block py-2 text-sm font-medium hover:text-muted-foreground">Support</Link>
              <Link href="/help" className="block py-2 text-sm font-medium hover:text-muted-foreground">Help</Link>
              {user ? (
                <>
                  <Link href="/dashboard" className="block py-2 text-sm font-medium hover:text-muted-foreground">Dashboard</Link>
                  <Button variant="outline" size="sm" className="w-full mt-2 text-rose-500" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <Button variant="outline" size="sm" className="w-full mt-2" onClick={handleLoginClick}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Login Coming Soon Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent className="bg-surface border-border">
          <DialogHeader>
            <DialogTitle>Login Coming Soon</DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-base leading-relaxed">
              {loginExcuse}
            </DialogDescription>
          </DialogHeader>
          <Button asChild className="mt-4">
            <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
              Join Discord Instead
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
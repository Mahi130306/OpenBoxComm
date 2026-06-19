import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Quiz } from '@/components/Quiz'
import { DirectorySearch } from '@/components/DirectorySearch'
import { MasterCalendar } from '@/components/MasterCalendar'
import { CTASection } from '@/components/CTASection'
import ServerNodeGraph from "@/components/ServerNodeGraph";
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Open Box — Community for Everyone | Gamers, Students',
  description: 'Join Open Box, a free, no-gatekeeping community network for gamers, students, and creators. Explore our Discord servers, attend events, and connect with peers.',
  keywords: ['Open Box', 'Discord community', 'gamers', 'students', 'creators', 'networking', 'open source', 'free community'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Open Box — The Ultimate Community Network',
    description: 'Find your people in Open Box. A free community network spanning gaming, development, studying, and more. No gatekeeping, just connection.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Open Box Community Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Box — Community for Everyone',
    description: 'Find your people in Open Box. A free community network spanning gaming, development, studying, and more.',
    images: ['/og-default.png'],
  },
}


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] overflow-hidden border-b border-border bg-background flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center items-start">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-bold text-cyan-400 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700">
              <Sparkles className="h-4 w-4" />
              Community Network 2.0
            </div>
            <h1 className="max-w-4xl text-balance text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl leading-[0.9] mb-8 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
              Pick Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">World.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground/80 mb-10 animate-in fade-in slide-in-from-left-12 duration-1000 delay-200 fill-mode-both">
              OpenBox is a multi-server network for builders, gamers, and students. No gatekeeping. Just join the server that fits your vibe and start doing.
            </p>
            <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
              <Button asChild variant="glow" size="lg" className="rounded-2xl h-14 px-10 text-lg">
                <Link href="/community">
                  Explore Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl h-14 px-10 text-lg glass-card">
                <Link href="/events">Browse Events</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end animate-in fade-in zoom-in-75 duration-1000 delay-300 fill-mode-both">
            <div className="relative w-full aspect-square max-w-[500px]">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[80px] opacity-50" />
               <ServerNodeGraph />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How it works</p>
            <h2 className="mb-5">Find a room, say hello, start....</h2>
            <p className="text-lg text-muted-foreground">
              Pick the server that matches your mood, introduce yourself with what you are making, and jump into events, docs, or project channels when you need momentum.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
              <p><span className="font-semibold text-foreground">1.</span> Browse live and upcoming servers.</p>
              <p><span className="font-semibold text-foreground">2.</span> Join the Discord and share what you are doing.</p>
              <p><span className="font-semibold text-foreground">3.</span> Use events, docs, and blog posts to keep moving.</p>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-cyan-950/20">
            <iframe
              className="h-full w-full"
              //src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Open Box community intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Find Your Fit - Quiz */}
      <Quiz />

      {/* Directory + Search */}
      <DirectorySearch />

      {/* Master Calendar */}
      <MasterCalendar />

      {/* CTA Banner */}
      <CTASection />
    </div>
  )
}

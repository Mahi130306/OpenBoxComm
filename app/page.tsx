import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Quiz } from '@/components/Quiz'
import { DirectorySearch } from '@/components/DirectorySearch'
import { MasterCalendar } from '@/components/MasterCalendar'
import { CTASection } from '@/components/CTASection'
import { HeroGraphic } from '@/components/HeroGraphic'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Open Box — Community for Everyone',
  description: 'Open Box is a free community network for builders, gamers, students and creators. Multiple Discord servers, no gatekeeping.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Open Box — Community for Everyone',
    description: 'Open Box is a free community network for builders, gamers, students and creators.',
    type: 'website',
  },
}


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.1),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(244,114,182,0.1),transparent_30%),linear-gradient(135deg,rgba(255,255,255,1),rgba(245,245,250,1))] dark:hidden" />
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(244,114,182,0.16),transparent_30%),linear-gradient(135deg,rgba(17,17,17,0.2),rgba(10,10,10,1))]" />
        
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              Pick Your World.
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-extrabold tracking-tight lg:text-7xl">
              Open Doors. Pick Yours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              OpenBox is home to multiple communities across gaming, development, study, networking, and more. Free to join. No gatekeeping. Just find the one that fits and jump in.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {/* <Button asChild size="lg">
                <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
                  Join the Community
                </a>
              </Button> */}
              <Button asChild variant="secondary" size="lg">
                <Link href="/servers">
                  Explore Servers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>

          {/* Hero Abstract Graphic — right column */}
          <div className="flex items-center justify-center lg:justify-end">
            <HeroGraphic />
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

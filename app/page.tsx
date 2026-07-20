import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Quiz } from '@/components/Quiz'
import { DirectorySearch } from '@/components/DirectorySearch'
import { MasterCalendar } from '@/components/MasterCalendar'
import { CTASection } from '@/components/CTASection'
import ServerNodeGraph from "@/components/ServerNodeGraph";
import { ArrowRight, Sparkles } from 'lucide-react'
import { ImportantNoticeMarquee } from '@/components/ImportantNoticeMarquee'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Join Open Box, a free, no-gatekeeping community network for gamers, students, and creators. Explore our Discord servers, attend events, and connect with peers.',
  keywords: ['Open Box', 'Openbox', 'openbox.in', 'Discord community', 'gamers', 'open box', 'open box comm', 'openbox comm', 'community', 'students', 'creators', 'networking', 'gaming', 'development'],
  alternates: { canonical: '/' },
  // No openGraph or twitter here on purpose — this inherits directly
  // from the root layout's openGraph/twitter config.
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <ImportantNoticeMarquee />
      <section id="herosection" className="relative overflow-hidden border-b border-border bg-background">
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
              OpenBox is home to multiple communities across gaming, development, study, networking, and more. Free to join. Just find the one that fits and jump in.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/join">
                  Join the Community
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/servers">
                  Explore Servers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg">
                <Link href="/events">Explore Events</Link>
              </Button> */}
            </div>
          </div>

          {/* Hero Abstract Graphic — right column */}
          {/* <div className="flex items-center justify-center lg:justify-end">
            <div className="flex items-center justify-center w-full h-full">
              <ServerNodeGraph />
            </div>
          </div> */}
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
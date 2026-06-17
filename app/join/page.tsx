import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { servers } from '@/lib/community-data'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ServerMemberCountInline } from '@/components/ServerMemberCountInline'

export const metadata: Metadata = {
  title: 'Join the Community',
  description: 'Find your people in Open Box. Browse our Discord servers across gaming, development, learning, and more.',
  alternates: { canonical: '/join' },
}

function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}

export default function JoinPage() {
  const featured = servers.find((s) => s.slug === 'jn') || servers[0]
  const rest = servers.filter((s) => s.slug !== featured.slug)

  const featuredInvite = `https://discord.gg/${featured.inviteCode}`

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/openboxcomm/' },
    { name: 'YouTube', href: 'https://www.youtube.com/@obcommunities-yt' },
    { name: 'X', href: 'https://x.com/Openboxcomm' },
  ]

  return (
    <div className="flex flex-col gap-16 py-16 lg:py-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
          </span>
          Free community
        </div>
        <h1 className="mb-6 text-balance font-heading text-5xl font-extrabold tracking-tight lg:text-7xl">
          Find your <span className="text-cyan-500">people.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Open Box is a free Discord community for developers, builders, gamers, and students. Pick a server and jump in.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-cyan-500/20">
          <a href={featuredInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <DiscordIcon size={20} />
            Join Open Box
          </a>
        </Button>
      </section>

      {/* Servers Section */}
      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Choose your server
        </p>

        <div className="grid gap-6">
          {/* Featured Card */}
          <div className="group relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 md:flex-row md:p-10">
            <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${featured.accent}`} />
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-cyan-500/10 text-[10px] uppercase tracking-wider text-cyan-500 hover:bg-cyan-500/20">
                  Featured
                </Badge>
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{featured.name}</h2>
              <p className="max-w-md text-muted-foreground md:text-lg">{featured.description}</p>
              {featured.isLive && (
                <ServerMemberCountInline slug={featured.slug} initialCount={featured.memberCount} />
              )}
            </div>
            <div className="shrink-0">
              <Button asChild className="rounded-full px-6 py-4 font-bold transition-opacity group-hover:opacity-90">
                <a href={featuredInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <DiscordIcon size={16} />
                  Join server
                </a>
              </Button>
            </div>
          </div>

          {/* Grid for rest */}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((server) => (
              <Card
                key={server.slug}
                className={`flex flex-col border-border bg-surface transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl ${!server.isLive ? 'opacity-75' : ''}`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${server.accent}`} />
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      {server.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {!server.isLive && (
                      <Badge variant="outline" className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="font-heading text-2xl">{server.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-muted-foreground">
                    {server.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  {server.isLive && server.memberCount > 0 && (
                    <ServerMemberCountInline slug={server.slug} initialCount={server.memberCount} />
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between group/btn text-cyan-500 hover:text-cyan-500 hover:bg-cyan-500/5">
                    <a href={`https://discord.gg/${server.inviteCode}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-between">
                      Join server
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="mx-auto w-full max-w-5xl border-t border-border px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Not sure where to start? Join{' '}
            <a href={featuredInvite} target="_blank" rel="noopener noreferrer" className="font-medium text-cyan-500 hover:underline">
              {featured.name}
            </a>{' '}
            first. Or{' '}
            <Link href="/doc/getting-started" className="font-medium text-cyan-500 hover:underline">
              read the getting started guide.
            </Link>
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

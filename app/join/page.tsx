import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { servers } from '@/lib/community-data'
import { ArrowRight, Sparkles,   } from 'lucide-react'
import { ServerMemberCountInline } from '@/components/ServerMemberCountInline'
import { INSTAGRAM_URL, YOUTUBE_URL, X_URL, WHATSAPP_URL, REDDIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Join Open Box',
  description: 'Open Box is a free Discord community for developers, builders, gamers, and students. Pick a server and jump in.',
  alternates: { canonical: '/join' },
}
export default function JoinPage() {
  const featured = servers.find((s) => s.slug === 'jn') || servers[0]
  const rest = servers.filter((s) => s.slug !== featured.slug)

  const featuredInvite = `https://discord.gg/${featured.inviteCode}`

  return (
    <div className="flex flex-col gap-16 py-16 lg:py-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-500">
          <Sparkles className="h-3 w-3" />
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
          <Link
            href={`/servers/${featured.slug}`}
            className="group relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 md:flex-row md:p-10"
          >
            <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${featured.accent}`} />
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-cyan-500/10 text-[10px] uppercase tracking-wider text-cyan-500 hover:bg-cyan-500/20">
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
              <span className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity group-hover:opacity-90">
             
                Join server
              </span>
            </div>
          </Link>

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
                    <Link href={`/servers/${server.slug}`}>
                      Join server
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
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
            <Link href={`/servers/${featured.slug}`} className="font-medium text-cyan-500 hover:underline">
              {featured.name}
            </Link>{' '}
            first. Or{' '}
            <Link href="/doc/getting-started" className="font-medium text-cyan-500 hover:underline">
              read the getting started guide.
            </Link>
          </p>
          <div className="flex gap-6">
            {[
              { name: 'Instagram', href: INSTAGRAM_URL },
              { name: 'YouTube', href: YOUTUBE_URL },
              { name: 'X', href: X_URL },
              { name: 'WhatsApp', href: WHATSAPP_URL },
              { name: 'Reddit', href: REDDIT_URL },
            ].map((social) => (
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

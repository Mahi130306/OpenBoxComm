import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { servers } from '@/lib/community-data'
import { ArrowRight, Sparkles, Users, Globe, Zap } from 'lucide-react'
import { ServerMemberCountInline } from '@/components/ServerMemberCountInline'

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
    <div className="flex flex-col gap-16 py-12 lg:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 md:p-16 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05] text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                Find your community
            </div>
            <h1 className="mb-6 text-balance font-heading text-5xl font-extrabold tracking-tight lg:text-7xl">
                Find your <span className="text-cyan-500">people.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground/90">
                Open Box is a free Discord community for developers, builders, gamers, and students. No gatekeeping, just connection. Pick a server below and jump in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-cyan-500/20">
                    <a href={featuredInvite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Join Junction (Main Hub)
                    </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                    <Link href="/doc/getting-started">
                        New Member Guide
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Servers Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-3">Choose Your Server</h2>
                <p className="text-muted-foreground max-w-xl">Every server in our network is specialized for a different interest. You can join one or all of them.</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> Global</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> Free</span>
                <span className="flex items-center gap-1.5"><Zap className="h-4 w-4" /> 24/7</span>
            </div>
        </div>

        <div className="grid gap-8">
          {/* Featured Card */}
          <Link
            href={`/servers/${featured.slug}`}
            className="group relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 md:flex-row md:p-12"
          >
            <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${featured.accent}`} />
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-cyan-500/10 text-[10px] uppercase tracking-wider text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold tracking-tight md:text-5xl mb-2">{featured.name}</h3>
                <p className="max-w-xl text-muted-foreground text-lg md:text-xl leading-relaxed">{featured.description}</p>
              </div>
              {featured.isLive && (
                <ServerMemberCountInline slug={featured.slug} initialCount={featured.memberCount} />
              )}
            </div>
            <div className="shrink-0">
              <span className="flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
                Join Hub
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </Link>

          {/* Grid for rest */}
          <div className="grid gap-8 sm:grid-cols-2">
            {rest.map((server, i) => (
              <Card
                key={server.slug}
                className={`group flex flex-col border-border bg-surface transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both ${!server.isLive ? 'opacity-75' : ''}`}
                style={{ animationDelay: `${100 + i * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${server.accent}`} />
                <CardHeader className="space-y-4 p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      {server.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {!server.isLive && (
                      <Badge variant="outline" className="text-[10px] uppercase tracking-widest text-muted-foreground border-dashed">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl mb-2">{server.name}</CardTitle>
                    <CardDescription className="line-clamp-2 text-muted-foreground text-base leading-relaxed">
                        {server.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto px-8 pb-4">
                  {server.isLive && server.memberCount > 0 && (
                    <ServerMemberCountInline slug={server.slug} initialCount={server.memberCount} />
                  )}
                </CardContent>
                <CardFooter className="p-8 pt-4">
                  <Button asChild variant="ghost" className="w-full justify-between group/btn text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 hover:bg-cyan-500/5 h-12 text-base font-semibold border border-transparent hover:border-cyan-500/20">
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

      {/* Bottom FAQ Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface/50 p-8 md:p-12">
            <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">New to Discord?</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        No worries. Open Box is designed to be welcoming to newcomers. We have a dedicated guide to help you set up your account and find your first room.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-cyan-500 font-bold group">
                        <Link href="/doc/getting-started" className="flex items-center gap-2">
                            Read the getting started guide
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-xl bg-background border border-border">
                        <p className="text-sm font-semibold mb-1">Is it really free?</p>
                        <p className="text-sm text-muted-foreground">Yes, all Open Box servers are free to join and participate in.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-background border border-border">
                        <p className="text-sm font-semibold mb-1">Can I join multiple servers?</p>
                        <p className="text-sm text-muted-foreground">Absolutely! Our servers are all interconnected under the Open Box network.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

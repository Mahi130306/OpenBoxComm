import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { servers } from '@/lib/community-data'
import { ArrowRight } from 'lucide-react'
import { ServerMemberCountInline } from '@/components/ServerMemberCountInline'

export const metadata: Metadata = {
  title: 'Servers',
  description: 'Browse all Open Box Discord servers — from gaming and development to study groups and networking. Free to join.',
  alternates: { canonical: '/servers' },
}


export default function ServersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Directory</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">All Servers</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          Find your corner of Open Box. Join live servers now or watch upcoming spaces as they get ready.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Discord Stats card*/}
        {/*<div className="flex w-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-green-400/[0.05] p-6 shadow-2xl shadow-green-950/20 backdrop-blur-sm">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">Live Community</p>
            <DiscordStats />
          </div>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs text-muted-foreground">Across all OpenBox communities</p>
          </div>
        </div> */}
        {servers.map((server, i) => (
          <Card 
            key={server.slug} 
            className={`flex flex-col overflow-hidden border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lg hover:border-cyan-500/30 animate-in fade-in zoom-in-95 duration-500 fill-mode-both ${!server.isLive ? 'opacity-75' : ''}`}
            style={{ animationDelay: `${150 + i * 100}ms` }}
          >
            <div className={`h-1.5 bg-gradient-to-r ${server.accent}`} />
            <CardHeader>
              <CardTitle>{server.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{server.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-3 flex flex-wrap gap-2">
                {server.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
              {server.isLive && server.memberCount > 0 && (
                <ServerMemberCountInline slug={server.slug} initialCount={server.memberCount} />
              )}
            </CardContent>
            <CardFooter>
              {server.isLive ? (
                <Button asChild className="w-full">
                  <Link href={`/servers/${server.slug}`}>Visit Server</Link>
                </Button>
              ) : (
                <Button disabled className="w-full opacity-70">
                  Coming Soon
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

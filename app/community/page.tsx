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
  alternates: { canonical: '/community' },
}


export default function ServersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-400 px-4 py-1">
          Server Directory
        </Badge>
        <h1 className="mb-6 text-5xl font-black tracking-tighter sm:text-6xl lg:text-7xl">
          Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Network.</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Explore our specialized Discord servers. Whether you're here to build, game, or learn, there's a space for you.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servers.map((server, i) => (
          <Card
            key={server.slug}
            className={`group relative flex flex-col overflow-hidden border-white/5 bg-card/30 backdrop-blur-md transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] animate-in fade-in zoom-in-95 fill-mode-both ${!server.isLive ? 'opacity-60 grayscale' : ''}`}
            style={{ animationDelay: `${150 + i * 100}ms` }}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${server.accent} transition-transform duration-500 group-hover:scale-x-110`} />

            <CardHeader className="pt-8">
              <div className="flex justify-between items-start mb-4">
                <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
                  {server.name}
                </CardTitle>
                {server.isLive ? (
                   <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                ) : (
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-tighter">Coming Soon</Badge>
                )}
              </div>
              <CardDescription className="text-base leading-relaxed text-muted-foreground/80">
                {server.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="mb-6 flex flex-wrap gap-2">
                {server.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs font-semibold backdrop-blur-sm border-transparent">
                    {tag}
                  </Badge>
                ))}
              </div>
              {server.isLive && (
                <div className="mt-auto">
                   <ServerMemberCountInline slug={server.slug} initialCount={server.memberCount} />
                </div>
              )}
            </CardContent>

            <CardFooter className="pb-8">
              {server.isLive ? (
                <Button asChild className="w-full h-12 rounded-xl bg-white text-black hover:bg-cyan-400 hover:text-black font-bold transition-all duration-300">
                  <Link href={`/community/${server.slug}`}>
                    Jump In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button disabled className="w-full h-12 rounded-xl opacity-50 font-bold">
                  Hold Tight...
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

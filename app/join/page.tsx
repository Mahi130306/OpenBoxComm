import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, Code, Gamepad2, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join the Community — Open Box',
  description: 'Join our Discord servers and become part of the Open Box community. Choose the server that fits your interests.',
  alternates: { canonical: '/join' },
}

const joinOptions = [
  {
    name: 'Junction (Jn.)',
    description: 'The main hub for founders, students, and curious people.',
    icon: Sparkles,
    invite: process.env.NEXT_PUBLIC_DISCORD_JN_INVITE || '#',
    accent: 'from-rose-500 to-amber-300',
    tagline: 'Start here',
  },
  {
    name: 'OB Dev',
    description: 'Technical deep dives, coding help, and open source.',
    icon: Code,
    invite: process.env.NEXT_PUBLIC_DISCORD_DEV_INVITE || '#',
    accent: 'from-green-400 to-emerald-600',
    tagline: 'Build together',
  },
  {
    name: 'OB GG',
    description: 'Gaming nights, tournaments, and team finding.',
    icon: Gamepad2,
    invite: process.env.NEXT_PUBLIC_DISCORD_GG_INVITE || '#',
    accent: 'from-red-500 to-rose-700',
    tagline: 'Play together',
  },
]

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="mb-6">Join the Community</h1>
        <p className="text-lg text-muted-foreground">
          Open Box is a network of specialized communities. Pick the one that matches your interests, or join them all!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {joinOptions.map((option, i) => (
          <Card
            key={option.name}
            className="flex flex-col border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-xl animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
            style={{ animationDelay: `${200 + i * 100}ms` }}
          >
            <div className={`h-1.5 bg-gradient-to-r ${option.accent}`} />
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <option.icon className="h-6 w-6 text-foreground" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{option.tagline}</p>
              <CardTitle className="text-2xl">{option.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                {option.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <a href={option.invite} target="_blank" rel="noopener noreferrer">
                  Join Server
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '600ms' }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          Need help? <a href="/contact-us" className="font-medium text-foreground underline underline-offset-4">Contact us</a>
        </div>
      </div>
    </div>
  )
}

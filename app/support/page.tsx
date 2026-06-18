import type { Metadata } from 'next'
import Link from 'next/link'
import { Gift, Heart, Crown, Trophy, Bot, Flame  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Support Open Box',
  description: 'Support Open Box through Patreon. Your contributions keep the servers running, events happening, and the community growing.',
  alternates: { canonical: '/support' },
}

const tiers = [
  {
    name: 'NPC',
    price: '$1/mo',
    icon: Bot,
    description: 'Get in the game. Basic supporter perks and community recognition.',
    perks: ['Supporter badge', 'Early event announcements', 'Includes Discord benefits'],
    accent: 'border-blue-500/20 text-blue-500'
  },
  {
    name: 'Rookie',
    price: '$2/mo',
    icon: Flame,
    description: 'You are playing for real now. Expanded perks.',
    perks: ['Everything in NPC', 'Monthly supporter shoutout', 'Members-only behind the scenes'],
    accent: 'border-orange-500/20 text-orange-500'
  },
  {
    name: 'GOAT',
    price: '$4/mo',
    icon: Trophy,
    description: 'Reserved for the ones who go above and beyond. Exclusive access.',
    perks: ['Everything in Rookie', 'Voting rights on community decisions', 'Direct feedback channel with admins', 'Early access to OpenBox events','Discount on next membership'],
    accent: 'border-amber-500/20 text-amber-500'
  },
  {
    name: 'Legend',
    price: '$8/mo',
    icon: Crown,
    description: 'The highest tier. You are literally holding OpenBox up.',
    perks: ['Everything in GOAT', 'Priority consideration for staff recruitment', 'Direct line to core team via private channel', 'Name in OpenBox credits on supporter page for one month*'],
    accent: 'border-pink-500/20 text-pink-500',
    footer: <Link href="/privacy" className="underline hover:text-foreground transition-colors">* Privacy Policy</Link>
  },
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-pink-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-pink-400/[0.05]">
        <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-pink-400 animate-pulse" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-600 dark:text-pink-300">Support our mission</p>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">Support Open Box</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          Open Box is community-run. Supporter tiers help keep servers running, events happening, and documentation improving. Your support helps us maintain the quality and growth of our community.
        </p>
        <div className="mt-8">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-pink-500/20">
            <a href={process.env.NEXT_PUBLIC_PATREON_URL || '#'} target="_blank" rel="noopener noreferrer">
                Become a Supporter on Patreon
            </a>
            </Button>
        </div>
      </div>

      <section className="mb-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Supporter Tiers</h2>
            <p className="text-muted-foreground">Choose a tier that fits your level of involvement.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border">
            <Gift className="h-5 w-5 text-pink-400" />
            <span className="text-sm font-medium">Roles assigned in OpenBox Jn.</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.name}
                className="group flex flex-col border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-xl animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border bg-surface ${tier.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <CardDescription className="mt-1.5">{tier.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 flex flex-col items-start gap-4">
                    {tier.footer && (
                         <div className="text-xs text-muted-foreground italic">
                            {tier.footer}
                        </div>
                    )}
                  <Button asChild variant="outline" className="w-full group-hover:bg-pink-500 group-hover:text-white transition-colors">
                    <a href={process.env.NEXT_PUBLIC_PATREON_URL || '#'} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Trust/Impact Section */}
      <section className="rounded-3xl border border-border bg-surface/30 p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Support Us?</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Every contribution directly funds our infrastructure, community events, and the development of tools that keep Open Box free for everyone. We believe in transparency and community ownership.
        </p>
      </section>
    </div>
  )
}

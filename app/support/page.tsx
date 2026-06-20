import type { Metadata } from 'next'
import { Gift, Heart, Crown, Trophy, Bot, Flame, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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
  },
  {
    name: 'Rookie',
    price: '$2/mo',
    icon: Flame,
    description: 'You are playing for real now. Expanded perks. __7-days Free trial__',
    perks: ['Everything in NPC', 'Montly supporter shoutout', 'Members-only behind the scenes'],
  },
  {
    name: 'GOAT',
    price: '$4/mo',
    icon: Trophy,
    description: 'Reserved for the ones who go above and beyond. Exclusive access.',
    perks: ['Everything in Rookie', 'Voting rights on community decisions', 'Direct feedback channel with admins', 'Early access to OpenBox events','Discount on next membership'],
  },

  {
    name: 'Legend',
    price: '$8/mo',
    icon: Crown,
    description: 'The highest tier. You are literally holding OpenBox up.',
    perks: ['Everything in GOAT', 'Priority consideration for staff recruitment', 'Direct line to core team via private channel', 'Name in OpenBox credits on supporter page for one month*', <a href="/privacy" className="underline">* Privacy Policy</a>],
  },
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Banner Section */}
      <div className="mb-16 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-pink-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-pink-400/[0.05] sm:p-12 lg:p-16">
        <div className="flex items-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-600 dark:text-pink-300">Support Us</p>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-4xl">
          Support Open Box.
        </h1>
        <p className="max-w-3xl text-xl text-muted-foreground/90 leading-relaxed mb-8">
          Open Box is community-run and free for everyone. Supporter tiers help keep our servers running, events happening, and documentation growing.
        </p>
        <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-lg shadow-pink-500/20">
          <a href={process.env.NEXT_PUBLIC_PATREON_URL || 'https://patreon.com/OpenBoxComm'} target="_blank" rel="noopener noreferrer">
            Support on Patreon
          </a>
        </Button>
      </div>

      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4">
          <h2 className="text-2xl font-bold">Supporter Tiers</h2>
          <Gift className="h-6 w-6 text-pink-500" />
        </div>
        <p className="mb-8 text-base text-muted-foreground">
          Your supporter role will be assigned based on your contribution inside the OpenBox Jn. server.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div 
                key={tier.name} 
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:border-pink-500/50 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 text-pink-500" />
                  </div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{tier.description}</p>
                    </div>
                    <Badge variant="secondary" className="bg-pink-500/10 text-pink-600 dark:text-pink-400 border-none font-bold shrink-0">
                      {tier.price}
                    </Badge>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground mt-4">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}

import type { Metadata } from 'next'
import { Gift, Heart, Crown, Trophy, Bot, Flame  } from 'lucide-react'
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
    description: 'You are playing for real now. Expanded perks.',
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
perks: ['Everything in GOAT', 'Priority consideration for staff recruitment', 'Direct line to core team via private channel', 'Name in OpenBox credits on supporter page for one month*', <a href="/privacy">* Privacy Policy</a>],
  },]

const supporters = [
  // { name: 'Alex Chen', tier: 'Patron' },
  // { name: 'Jordan Taylor', tier: 'Supporter' },
  // { name: 'Sam Rivera', tier: 'Patron' },
  // { name: 'Casey Kim', tier: 'Builder' },
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <Heart className="mx-auto mb-4 h-12 w-12 text-pink-300" />
        <h1 className="mb-4">Support Open Box</h1>
        <p className="mb-4 text-lg text-muted-foreground">
          Open Box is community-run. Supporter tiers help keep servers running, events happening, and docs improving.
        </p>
        <p className="mb-8 text-lg text-muted-foreground">
          Your support helps us maintain the quality and growth of our community.
        </p>
        <Button asChild size="lg">
          <a href={process.env.NEXT_PUBLIC_PATREON_URL || '#'} target="_blank" rel="noopener noreferrer">
            Support on Patreon
          </a>
        </Button>
      </div>

      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2>Supporter Tiers</h2>
          <Gift className="h-6 w-6 text-pink-300" />
        </div>
        <div className="mb-6 flex items-center justify-between gap-4">
           <p className="mb-8 text-lg text-muted-foreground">
          Your supporter role will be assigned based on your contribution in side the OpenBox Jn. server.
        </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div key={tier.name} className="rounded-lg border border-border bg-surface p-6">
                <Icon className="mb-4 h-7 w-7 text-pink-300" />
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3>{tier.name}</h3>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </div>
                  <Badge variant="secondary">{tier.price}</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.perks.map((perk, i) => (
                    <li key={i}>{perk}</li>
                  ))}
                </ul>
              </div>
            )
          })}
          
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-8">
        <h2 className="mb-6 text-center text-3xl">Current Supporters</h2>
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {supporters.map((supporter) => (
            <div key={supporter.name} className="flex items-center justify-between rounded-lg border border-border bg-background/60 p-4">
              <span>{supporter.name}</span>
              <Badge variant="outline">{supporter.tier}</Badge>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Thank you for keeping this community alive.</p>
      </section>
    </div>
  )
}

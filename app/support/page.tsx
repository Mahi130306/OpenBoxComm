import type { Metadata } from 'next'
import { Gift, Sparkles, Crown, Trophy, Bot, Flame, CheckCircle2, Star } from 'lucide-react'
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
    badge: 'Entry Tier',
    theme: {
      border: 'border-zinc-800 dark:border-zinc-800 hover:border-zinc-700',
      bg: 'bg-zinc-900/40 backdrop-blur-md',
      glow: 'hover:shadow-[0_0_30px_-5px_rgba(113,113,122,0.15)]',
      title: 'text-zinc-300',
      iconColor: 'text-zinc-400',
      iconBg: 'bg-zinc-500/10',
      badgeClass: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
      buttonVariant: 'outline' as const,
      buttonStyle: {
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.02)',
        color: '#d4d4d8'
      }
    }
  },
  {
    name: 'Rookie',
    price: '$2/mo',
    icon: Flame,
    description: 'You are playing for real now. Expanded perks with a 7-days trial.',
    perks: ['Everything in NPC (All 3)', 'Monthly supporter shoutout', 'Members-only behind the scenes'],
    badge: '7-Day Free Trial',
    theme: {
      border: 'border-orange-500/20 dark:border-orange-500/10 hover:border-orange-500/40',
      bg: 'bg-gradient-to-b from-orange-950/10 via-zinc-950/20 to-black/30 backdrop-blur-md',
      glow: 'hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]',
      title: 'bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent font-bold',
      iconColor: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
      badgeClass: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
      buttonVariant: 'secondary' as const,
      buttonStyle: {
        background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(251,191,36,0.1) 100%)',
        border: '1px solid rgba(249,115,22,0.3)',
        color: '#fb923c'
      }
    }
  },
  {
    name: 'GOAT',
    price: '$6/mo',
    icon: Trophy,
    description: 'Reserved for the ones who go above and beyond. Exclusive access.',
    perks: [
      'Everything in Rookie (All 5)',
      'Voting rights on community decisions',
      'Direct feedback channel with admins',
      'Early access to OpenBox events',
      'Discount on next membership'
    ],
    badge: 'Most Popular',
    theme: {
      border: 'border-emerald-500/30 dark:border-emerald-500/15 hover:border-emerald-500/60',
      bg: 'bg-gradient-to-b from-emerald-950/20 via-zinc-950/20 to-black/40 backdrop-blur-md',
      glow: 'hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.35)]',
      title: 'bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-extrabold',
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/15',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/35 font-extrabold animate-pulse',
      buttonVariant: 'default' as const,
      buttonStyle: {
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: '#000000',
        boxShadow: '0 4px 20px rgba(16,185,129,0.3)'
      }
    }
  },
  {
    name: 'Legend',
    price: '$8/mo',
    icon: Crown,
    description: 'The highest tier. You are literally holding OpenBox up.',
    perks: [
      'Everything in GOAT (All 9)',
      'Priority consideration for staff recruitment',
      'Direct line to core team via private channel',
      'Name in OpenBox credits on supporter page*'
    ],
    badge: 'Elite Supporter',
    theme: {
      border: 'border-amber-500/40 dark:border-amber-500/25 hover:border-amber-500/80',
      bg: 'bg-gradient-to-b from-amber-950/25 via-zinc-950/30 to-black/50 backdrop-blur-lg',
      glow: 'hover:shadow-[0_0_50px_-5px_rgba(245,158,11,0.45)]',
      title: 'bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent font-black tracking-wide',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/20',
      badgeClass: 'bg-gradient-to-r from-yellow-500/30 to-amber-500/30 text-yellow-200 border-yellow-500/50 font-extrabold tracking-wider uppercase text-[10px]',
      buttonVariant: 'default' as const,
      buttonStyle: {
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
        color: '#000000',
        fontWeight: 'bold',
        boxShadow: '0 4px 25px rgba(245,158,11,0.4)',
        border: 'none'
      }
    }
  },
]

const phantomPerks = [
  'Everything in Legend (All 13)',
  'Exclusive OP Supporter role — rare, visible on supporter wall',
  '12–16% off paid OB events + priority spot',
  'Monthly voice hangout with OB founders',
  'First dibs + discount when OB merch drops',
  'Namedropped in DBW every week*',
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Banner Section */}
      <div
        className="relative mb-16 rounded-3xl border overflow-hidden p-8 sm:p-12 lg:p-16"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(20,20,20,0.9) 100%)',
          borderColor: 'rgba(255,255,255,0.08)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div
          className="absolute -right-24 -top-24 w-96 h-96 rounded-full pointer-events-none opacity-20 filter blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(217,119,6,0.05) 70%)'
          }}
        />

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <Sparkles className="h-8 w-8 text-amber-500 animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">Support Us</p>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl relative z-10">
          Support <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">Open Box</span>.
        </h1>

        <p className="max-w-3xl text-lg text-zinc-300 leading-relaxed mb-8 relative z-10">
          Open Box is community-run and free for everyone. Supporter tiers help keep our servers running, events happening, and documentation growing.
        </p>

        <div className="relative z-10">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold rounded-xl shadow-xl shadow-amber-500/20 border-none transition-all duration-200 hover:scale-[1.02]"
          >
            <a href={process.env.NEXT_PUBLIC_PATREON_URL || 'https://patreon.com/OpenBoxComm'} target="_blank" rel="noopener noreferrer">
              Support on Patreon
            </a>
          </Button>
        </div>
      </div>

      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Gift className="h-6 w-6 text-amber-500" />
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Supporter Tiers</h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
            <Star size={13} className="text-yellow-500" />
            Patreon Powered
          </div>
        </div>

        <p className="mb-10 text-zinc-400 text-base max-w-2xl leading-relaxed">
          Your supporter role will be assigned based on your contribution inside the OpenBox Jn. server.
        </p>

        {/* First 4 tiers */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {tiers.map((tier) => {
            const Icon = tier.icon
            const isLegend = tier.name === 'Legend'
            const isGoat = tier.name === 'GOAT'

            return (
              <div
                key={tier.name}
                className={`
                  group relative overflow-hidden rounded-2xl border p-6
                  transition-all duration-300 hover:-translate-y-1.5
                  flex flex-col justify-between h-full
                  ${tier.theme.border} ${tier.theme.bg} ${tier.theme.glow}
                `}
                style={{
                  boxShadow: isLegend
                    ? '0 10px 30px -10px rgba(245,158,11,0.15)'
                    : 'none'
                }}
              >
                {(isLegend || isGoat) && (
                  <div
                    className="absolute -right-16 -top-16 w-36 h-36 rounded-full pointer-events-none opacity-20 filter blur-2xl group-hover:opacity-40 transition-opacity"
                    style={{
                      background: isLegend
                        ? 'radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)'
                    }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tier.theme.iconBg} ${tier.theme.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    {tier.badge && (
                      <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${tier.theme.badgeClass}`}>
                        {tier.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className={`text-2xl font-black ${tier.theme.title}`}>
                        {tier.name}
                      </h3>
                      <span className="text-xl font-bold text-white tracking-tight">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2.5 min-h-[36px]">
                      {tier.description}
                    </p>
                  </div>

                  <div className="w-full h-px my-4 bg-zinc-800/60" />

                  <ul className="space-y-3 text-xs text-zinc-300/90 mt-2 mb-6">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className={`${tier.theme.iconColor} shrink-0 mt-0.5`} />
                        <span className="leading-normal">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full rounded-xl text-xs font-bold transition-all duration-200 hover:scale-[1.01]"
                    variant={tier.theme.buttonVariant}
                    style={tier.theme.buttonStyle}
                  >
                    <a href={process.env.NEXT_PUBLIC_PATREON_URL || 'https://patreon.com/OpenBoxComm'} target="_blank" rel="noopener noreferrer">
                      {`Become a Supporter`}
                      {isLegend && <Sparkles size={12} className="ml-1 animate-pulse" />}
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* OP SUPPORTER / Phantom — full-width premium card */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            padding: '1.5px',
            background: 'linear-gradient(145deg, rgba(167,139,250,0.7) 0%, rgba(109,40,217,0.4) 25%, rgba(0,0,0,0) 55%, rgba(167,139,250,0.5) 100%)',
            boxShadow: '0 0 70px -10px rgba(139,92,246,0.45), 0 0 140px -30px rgba(109,40,217,0.25)',
          }}
        >
          <div
            style={{
              borderRadius: '18.5px',
              background: 'linear-gradient(160deg, #0d0a1a 0%, #0a0812 45%, #060410 100%)',
              padding: '32px 36px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top shimmer line */}
            <div style={{
              position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.9), rgba(216,180,254,1), rgba(167,139,250,0.9), transparent)',
              filter: 'blur(0.5px)',
            }} />

            {/* Ambient glow orbs */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px',
              background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 70%)',
              borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '-40px', left: '-40px', width: '220px', height: '220px',
              background: 'radial-gradient(circle, rgba(76,29,149,0.2) 0%, transparent 70%)',
              borderRadius: '50%', filter: 'blur(24px)', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: '45%', width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)',
              borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
              transform: 'translateY(-50%)',
            }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

              {/* Left column — identity */}
              <div style={{ flex: '0 0 auto', minWidth: '220px' }}>
                {/* Icon + badge row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.5), rgba(76,29,149,0.25))',
                    border: '1px solid rgba(167,139,250,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(139,92,246,0.35)',
                  }}>
                    <Star size={24} color="#c4b5fd" />
                  </div>

                  <div style={{
                    padding: '4px 12px', borderRadius: '999px',
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.45), rgba(91,33,182,0.3))',
                    border: '1px solid rgba(167,139,250,0.45)',
                    fontSize: '9px', fontWeight: '800', letterSpacing: '0.22em',
                    color: '#ddd6fe', textTransform: 'uppercase' as const,
                    boxShadow: '0 0 14px rgba(139,92,246,0.3)',
                  }}>
                    RARE
                  </div>
                </div>

                {/* Tier name */}
                <h3 style={{
                  fontSize: '32px', fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1,
                  background: 'linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 30%, #a78bfa 65%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 14px rgba(167,139,250,0.35))',
                  marginBottom: '4px',
                }}>
                  OP SUPPORTER
                </h3>
                <p style={{
                  fontSize: '11px', fontWeight: '500', letterSpacing: '0.14em',
                  color: 'rgba(167,139,250,0.45)', textTransform: 'uppercase' as const,
                  marginBottom: '20px',
                }}>
                  This tier is not aviliable anywhere
                </p>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '40px', fontWeight: '800', color: '#fff',
                    letterSpacing: '-0.03em',
                    textShadow: '0 0 24px rgba(167,139,250,0.25)',
                  }}>$10</span>
                  <span style={{ fontSize: '14px', color: 'rgba(167,139,250,0.55)', fontWeight: '500' }}>/mo</span>
                </div>

                <p style={{
                  fontSize: '13px', color: 'rgba(196,181,253,0.55)', lineHeight: '1.5',
                  maxWidth: '200px',
                }}>
                  Few know. Fewer are. The ones who were here before it was cool.
                </p>
              </div>

              {/* Vertical divider */}
              <div style={{
                width: '1px', alignSelf: 'stretch',
                background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.3), transparent)',
                flexShrink: 0,
              }} />

              {/* Right column — perks + CTA */}
              <div style={{ flex: 1, minWidth: '260px' }}>
                <p style={{
                  fontSize: '10px', fontWeight: '700', letterSpacing: '0.18em',
                  color: 'rgba(167,139,250,0.45)', textTransform: 'uppercase' as const,
                  marginBottom: '14px',
                }}>
                  What you get
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                  {phantomPerks.map((perk, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={13} style={{ color: '#a78bfa', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: 'rgba(221,214,254,0.75)', lineHeight: '1.45' }}>{perk}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  style={{
                    background: 'linear-gradient(135deg, #6d28d9 0%, #5b21b6 50%, #4c1d95 100%)',
                    color: '#000', fontSize: '13px', fontWeight: '800',
                    letterSpacing: '0.03em', borderRadius: '12px', border: 'none',
                    padding: '12px 28px', cursor: 'pointer',
                    boxShadow: '0 4px 28px rgba(109,40,217,0.55), inset 0 1px 0 rgba(255,255,255,0.12)',
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    transition: 'all 0.2s',
                  }}
                >
                  <a href={process.env.NEXT_PUBLIC_PATREON_URL || 'https://patreon.com/OpenBoxComm'} target="_blank" rel="noopener noreferrer">
                    <Star size={15} />
                    Become a OP Supporter
                    <Star size={15} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Bottom shimmer */}
            <div style={{
              position: 'absolute', bottom: 0, left: '15%', right: '15%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(109,40,217,0.45), transparent)',
            }} />
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="text-center text-[11px] text-zinc-500 border-t border-zinc-900 pt-8 mt-12">
        * Privileges are subject to community rules and Terms of Service. Connect your Discord to Patreon to sync roles automatically.
      </div>
    </div>
  )
}
import type { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { Info, Users, Zap, Heart, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Open Box',
  description: 'Learn about Open Box - a people-focused network of communities for gamers, students, and creators. Free and open to everyone.',
  alternates: { canonical: '/about' },
}

const servers = [
  { name: 'Jn.', status: 'Live', description: 'Main community hub and entry point.', color: 'bg-gray-500' },
  { name: 'Dev', status: 'Live', description: 'Development, coding, and building things.', color: 'bg-green-500' },
  { name: 'GG', status: 'Live', description: 'Gaming, competitions, and community play.', color: 'bg-red-500' },
  { name: 'Study', status: 'Coming Soon', description: 'Learning, accountability, and study groups.', color: 'bg-blue-500' },
  { name: 'Connect', status: 'Coming Soon', description: 'Professional networking and career growth.', color: 'bg-purple-500' },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-violet-400/[0.08] p-5 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-violet-400/[0.05] sm:p-10 lg:p-16 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 shrink-0 text-violet-500 sm:h-6 sm:w-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300 sm:text-sm">About Open Box</p>
        </div>
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground w-full break-words sm:text-4xl lg:text-5xl">
          A people-focused network of communities.
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground/90 leading-relaxed sm:text-base lg:text-xl">
          Open Box was founded on a simple belief: great things happen when people come together. We provide welcoming, high-signal spaces where creators can find their tribe.
        </p>
      </div>


      <div className="grid gap-16 lg:grid-cols-5">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started as a small Discord server for developers sharing side projects. Today, we&apos;ve grown into a network of multiple communities, each serving different facets of the journey from coding to gaming to study groups.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple: provide a welcoming, high-signal space where gamers, students, professionals, and creators can find their tribe, share their work, and grow together. No gatekeeping, no toxicity, just genuine connection and collaboration.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">The Server Lineup</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {servers.map((server, i) => (
                <Link 
                  key={server.name} 
                  href="/join"
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${server.color} shadow-[0_0_8px_rgba(0,0,0,0.2)]`} />
                      <h3 className="text-2xl font-bold">{server.name}</h3>
                    </div>
                    <Badge variant={server.status === 'Live' ? 'secondary' : 'outline'} className={server.status === 'Live' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-none' : ''}>
                      {server.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {server.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-violet-500 opacity-0 transition-all group-hover:opacity-100">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Values */}
        <aside className="lg:col-span-2">
          <div className="sticky top-24 space-y-8">
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Our Values</h2>
              <div className="space-y-8">
                {[
                  { icon: Users, title: "Inclusivity", desc: "Open to everyone, regardless of skill level or background. No gatekeeping allowed." },
                  { icon: Zap, title: "High Signal", desc: "Focus on quality interactions and meaningful content over noise and spam." },
                  { icon: Heart, title: "Community First", desc: "Every decision we make is guided by what's best for the people who call Open Box home." },
                  { icon: CheckCircle2, title: "Respect", desc: "A safe, respectful environment where everyone can express themselves freely." }
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                      <value.icon className="h-5 w-5 text-violet-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="rounded-3xl bg-violet-600 p-8 text-white shadow-xl shadow-violet-600/20">
                <h3 className="text-xl font-bold mb-3">Join our journey</h3>
                <p className="text-violet-100 mb-6 text-sm leading-relaxed">
                    Open Box is more than just a set of servers - it&apos;s a collective of passionate people building together.
                </p>
                <Link href="/join">
                    <button className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-violet-600 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        Pick Your World
                    </button>
                </Link>
            </div> */}
          </div>
        </aside>
      </div>

      {/* <div className="mt-24">
        <CTASection />
      </div> */}
    </div>
  )
}

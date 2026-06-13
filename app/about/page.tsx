import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Open Box — a people-focused network of communities for builders, gamers, students, and creators. Free and open to everyone.',
  alternates: { canonical: '/about' },
}


const servers = [
  { name: 'Jn.', status: 'Live', description: 'Main community hub' },
  { name: 'Dev', status: 'Live', description: 'Development & coding' },
  { name: 'GG', status: 'Live', description: 'Gaming' },
  { name: 'Study', status: 'Coming Soon', description: 'Learning & study groups' },
  { name: 'Connect', status: 'Coming Soon', description: 'Networking & careers' },
  // { name: 'Classic', status: 'Coming Soon', description: 'Creators Group' },
]

// const supporters = [
//   { name: 'Alex Chen', tier: 'Patron' },
//   { name: 'Jordan Taylor', tier: 'Supporter' },
//   { name: 'Sam Rivera', tier: 'Patron' },
//   { name: 'Casey Kim', tier: 'Builder' },
// ]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">About Open Box</h1>
        <div className="prose prose-invert max-w-none animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '150ms' }}>
          <p className="text-lg text-muted-foreground">
            Open Box is a People-focused gpoup of communities founded on the belief that great things happen when people come together.
          </p>
          <p className="mt-4">
            We started as a small Discord server for developers sharing side projects. Today, we've growning into a network of
            multiple communities, each serving different facets of the builder journey from coding to gaming to study groups.
          </p>
          <p className="mt-4">
            Our mission is simple: provide a welcoming, high-signal space where builders, gamers, students, profesionals & creaters can find their tribe, share their work,
            and grow together. No gatekeeping, no toxicity, just genuine connection and collaboration.
          </p>
        </div>

        <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: '300ms' }}>
          <h2>The Server Lineup</h2>
          <div className="grid gap-4 mt-6 sm:grid-cols-2">
            {servers.map((server, i) => (
              <div 
                key={server.name} 
                className="border border-border rounded-lg p-4 bg-surface transition-all hover:-translate-y-1 hover:shadow-lg hover:border-cyan-500/50 animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{server.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${server.status === 'Live' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'}`}>
                    {server.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{server.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-16">
          <h2>Our Supporters</h2>
          <p className="text-muted-foreground mt-2 mb-6">
            Open Box is community-funded. Thanks to these supporters for keeping the lights on.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {supporters.map((supporter) => (
              <div key={supporter.name} className="flex items-center justify-between border-b border-border py-2">
                <span>{supporter.name}</span>
                <span className="text-xs text-muted-foreground">{supporter.tier}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <a href={process.env.NEXT_PUBLIC_PATREON_URL || '#'} target="_blank" rel="noopener noreferrer">
                Support us on Patreon
              </a>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
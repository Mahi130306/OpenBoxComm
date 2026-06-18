import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { teamMembers } from '@/lib/community-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Twitter, ArrowRight, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team — Open Box',
  description: 'Meet the people behind Open Box. Our team is dedicated to building and supporting a network of inclusive communities.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 md:p-12 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Community Builders</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-6xl">Meet the Team</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90 leading-relaxed">
          Open Box is powered by a dedicated team of volunteers and community members working to create the best possible experience for everyone. We build, moderate, and grow together.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <Card
            key={member.slug}
            className="group overflow-hidden border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-xl animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
            style={{ animationDelay: `${150 + i * 100}ms` }}
          >
            <CardHeader className="text-center pb-2">
              <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-muted shadow-md group-hover:border-cyan-500/30 transition-colors">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-2xl font-bold">{member.name}</CardTitle>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mt-1">{member.role}</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground line-clamp-3 mb-8 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex items-center justify-center gap-5 mb-8">
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>

              <Link
                href={`/team/${member.slug}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-foreground hover:text-cyan-500 transition-colors py-2 px-4 rounded-full border border-border hover:border-cyan-500/20 bg-muted/30 group-hover:bg-cyan-500/5"
              >
                View Full Profile
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

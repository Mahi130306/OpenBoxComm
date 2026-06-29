import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { teamMembers } from '@/lib/community-data'
import { Github, Twitter, ArrowRight, Instagram, Crown, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team — Open Box',
  description:
    'Meet the people behind Open Box. Our team is dedicated to building and supporting a network of inclusive communities.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  const founder = teamMembers.find((m) => m.role.toLowerCase().includes('founder'))
  const otherMembers = teamMembers.filter((m) => m.slug !== founder?.slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="relative mb-20 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-cyan-950/40 via-background to-violet-950/30 px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* decorative dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* glow orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-48 w-48 rounded-full bg-violet-500/15 blur-[80px]" />

        <p className="relative mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Community Builders
        </p>
        <h1 className="relative mb-5 text-5xl font-extrabold tracking-tight text-foreground lg:text-7xl">
          Meet the Team
        </h1>
        <p className="relative mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
          The people who pour their energy into making Open Box a home for everyone.
        </p>
      </div>

      {/* ── Founder Spotlight ──────────────────────────────── */}
      {founder && (
        <section className="mb-20">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-[220px_1fr]">
              {/* Avatar column */}
              <div className="flex flex-col items-center gap-5">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-border">
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    fill
                    sizes="192px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Social buttons */}
                <div className="flex gap-2">
                  {founder.socials?.github && (
                    <a
                      href={founder.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {founder.socials?.twitter && (
                    <a
                      href={founder.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X / Twitter"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {founder.socials?.instagram && (
                    <a
                      href={founder.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info column */}
              <div className="flex flex-col justify-center text-center md:text-left">
                <div className="mb-2 inline-flex w-fit items-center gap-1.5 self-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-500 md:self-start">
                  <Crown className="h-3 w-3" />
                  {founder.role}
                </div>

                <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {founder.name}
                </h2>

                <p className="leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>

                <Link
                  href={`/team/${founder.slug}`}
                  className="group mt-6 inline-flex w-fit items-center gap-2 self-center text-sm font-bold text-foreground transition-colors hover:text-cyan-500 md:self-start"
                >
                  View Full Profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Other Team Members ─────────────────────────────── */}
      {otherMembers.length > 0 && (
        <section>
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">The Crew</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                {/* top accent */}
                <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="p-6">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-border">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold">{member.name}</h3>
                      <p className="text-sm font-medium text-cyan-500">{member.role}</p>
                    </div>
                  </div>

                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-muted-foreground">
                      {member.socials?.github && <Github className="h-4 w-4" />}
                      {member.socials?.twitter && <Twitter className="h-4 w-4" />}
                      {member.socials?.instagram && <Instagram className="h-4 w-4" />}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-muted-foreground transition-colors group-hover:text-cyan-500">
                      Profile
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

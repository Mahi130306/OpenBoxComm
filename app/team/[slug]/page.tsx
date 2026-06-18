import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getTeamMember } from '@/lib/community-data'
import { Button } from '@/components/ui/button'
import { Github, Twitter, Instagram, ChevronLeft, Globe, Mail } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = getTeamMember(slug)
  if (!member) return {}

  return {
    title: `${member.name} — Open Box Team`,
    description: member.bio,
    alternates: { canonical: `/team/${slug}` },
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = getTeamMember(slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" size="sm" className="-ml-2 gap-1 text-muted-foreground hover:text-foreground">
          <Link href="/team">
            <ChevronLeft className="h-4 w-4" />
            Back to Team
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-px">
          <div className="relative rounded-[calc(1.5rem-1px)] bg-background/95 p-8 backdrop-blur-md sm:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border-4 border-muted shadow-2xl lg:h-64 lg:w-64">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 192px, 256px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-500">
                    {member.role}
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-xs">
                    Team Member
                  </Badge>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  {member.name}
                </h1>

                <p className="max-w-3xl text-xl text-muted-foreground/90 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-3">
                  {member.socials.github && (
                    <Button asChild variant="outline" size="sm" className="rounded-full gap-2">
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {member.socials.twitter && (
                    <Button asChild variant="outline" size="sm" className="rounded-full gap-2">
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </a>
                    </Button>
                  )}
                  {member.socials.instagram && (
                    <Button asChild variant="outline" size="sm" className="rounded-full gap-2">
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">About {member.name}</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  As a {member.role}, {member.name} is a key contributor to the Open Box community.
                  Whether it's architecting new systems, managing community engagement, or advocating for developer needs,
                  their work helps shape the future of our network.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    They believe in the power of open collaboration and community-driven growth, working daily to ensure Open Box remains a welcoming space for all.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-surface/30 p-8">
                <h3 className="text-xl font-bold mb-4">Core Focus</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-xl border border-border bg-background">
                        <p className="font-semibold mb-1">Community Growth</p>
                        <p className="text-sm text-muted-foreground">Expanding the reach of Open Box to new builders and students.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-background">
                        <p className="font-semibold mb-1">Infrastructure</p>
                        <p className="text-sm text-muted-foreground">Maintaining the technical foundations that power our servers.</p>
                    </div>
                </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Quick Contact</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                                <Globe className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Network</p>
                                <p className="font-medium text-sm">Open Box Jn.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                                <Mail className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                                <p className="font-medium text-sm">team@openboxcomm.in</p>
                            </div>
                        </div>
                    </div>
                    <Button asChild className="w-full mt-8 font-bold">
                        <Link href="/contact-us">
                            Reach Out
                        </Link>
                    </Button>
                </div>

                <div className="rounded-2xl border border-border bg-surface/50 p-6">
                    <h3 className="font-bold mb-3">Join the Team</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        Interested in helping us build the future of Open Box? We are always looking for passionate volunteers.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href="/doc/contributing">
                            Learn How to Help
                        </Link>
                    </Button>
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getTeamMember } from '@/lib/community-data'
import { Button } from '@/components/ui/button'
import { Github, Twitter, ArrowLeft, Instagram } from 'lucide-react'

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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/team"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Team
      </Link>

      <div className="grid gap-12 md:grid-cols-[250px_1fr]">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative mb-6 h-60 w-60 overflow-hidden rounded-2xl border-4 border-muted shadow-2xl">
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              sizes="240px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex gap-4">
            {member.socials?.github && (
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {member.socials?.twitter && (
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
            {member.socials?.instagram && (
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-500">{member.role}</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{member.name}</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {member.bio}
            </p>

            <div className="mt-10 p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3">About {member.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.aboutSection}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

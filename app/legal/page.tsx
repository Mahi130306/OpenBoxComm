import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Cookie, BookOpen, RefreshCw, AlertCircle, CheckSquare, Calendar, Scale, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Legal — Open Box',
  description: 'Legal documents for Open Box: Terms, Privacy Policy, Community Rules, and more.',
  alternates: { canonical: '/legal' },
}

const legalDocs = [
  {
    href: '/legal/terms',
    label: 'Terms & Conditions',
    description: 'The rules governing your access to and use of all Open Box platforms and services.',
    icon: FileText,
    accent: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
  },
  {
    href: '/legal/privacy',
    label: 'Privacy Policy',
    description: 'How we collect, use, store, and protect your personal information.',
    icon: Shield,
    accent: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    href: '/legal/cookie',
    label: 'Cookie Policy',
    description: 'What cookies we use, why, and how you can control them.',
    icon: Cookie,
    accent: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    href: '/legal/rules',
    label: 'Community Rules',
    description: 'The shared expectations that keep Open Box friendly, useful, and safe.',
    icon: BookOpen,
    accent: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    href: '/legal/refund',
    label: 'Refund Policy',
    description: 'Our policy on payments, Patreon memberships, and event registration refunds.',
    icon: RefreshCw,
    accent: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
  {
    href: '/legal/dmca',
    label: 'DMCA / Copyright',
    description: 'How to report copyright infringement and our process for handling DMCA notices.',
    icon: AlertCircle,
    accent: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    href: '/legal/aup',
    label: 'Acceptable Use Policy',
    description: 'Permitted and prohibited uses of all Open Box platforms and brand assets.',
    icon: CheckSquare,
    accent: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    href: '/legal/event',
    label: 'Event Policies',
    description: 'Rules and expectations for all Open Box online and offline events.',
    icon: Calendar,
    accent: 'text-teal-500',
    bg: 'bg-teal-500/10',
  },
]

export default function LegalIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-3xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-violet-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-violet-400/[0.05] sm:p-12">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="h-8 w-8 text-violet-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">Compliance & Trust</p>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">Legal Documents</h1>
        <p className="max-w-3xl text-lg text-muted-foreground/90 leading-relaxed">
          Transparency is core to how we operate. Below you&apos;ll find all the legal documents governing your use of Open Box platforms, Discord servers, and services.
        </p>
        <p className="max-w-3xl text-lg text-muted-foreground/90 leading-relaxed text-sm">
          These documents have not been reviewed, approved, or endorsed by a licensed attorney or legal counsel. They were drafted with AI assistance and do not constitute legal advice.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {legalDocs.map((doc) => {
          const Icon = doc.icon
          return (
            <Link key={doc.href} href={doc.href} className="group">
              <Card className="flex h-full flex-col overflow-hidden border-border bg-surface transition-all group-hover:-translate-y-1 group-hover:border-violet-500/50 group-hover:shadow-lg">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${doc.bg} transition-colors group-hover:bg-violet-500/20`}>
                    <Icon className={`h-6 w-6 ${doc.accent}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-violet-500 transition-colors">{doc.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-1 text-sm font-bold text-violet-500 opacity-0 transition-all group-hover:opacity-100">
                    Read Policy <ArrowRight className="h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Cookie, BookOpen, RefreshCw, AlertCircle, CheckSquare, Calendar } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Legal — Open Box',
  description: 'Legal documents for Open Box: Terms, Privacy Policy, Community Rules, and more.',
}

const legalDocs = [
  {
    href: '/legal/terms',
    label: 'Terms & Conditions',
    description: 'The rules governing your access to and use of all Open Box platforms and services.',
    icon: FileText,
    accent: 'from-indigo-500 to-violet-600',
  },
  {
    href: '/legal/privacy',
    label: 'Privacy Policy',
    description: 'How we collect, use, store, and protect your personal information.',
    icon: Shield,
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    href: '/legal/cookie',
    label: 'Cookie Policy',
    description: 'What cookies we use, why, and how you can control them.',
    icon: Cookie,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    href: '/legal/rules',
    label: 'Community Rules',
    description: 'The shared expectations that keep Open Box friendly, useful, and safe.',
    icon: BookOpen,
    accent: 'from-green-400 to-emerald-600',
  },
  {
    href: '/legal/refund',
    label: 'Refund Policy',
    description: 'Our policy on payments, Patreon memberships, and event registration refunds.',
    icon: RefreshCw,
    accent: 'from-rose-400 to-pink-600',
  },
  {
    href: '/legal/dmca',
    label: 'DMCA / Copyright',
    description: 'How to report copyright infringement and our process for handling DMCA notices.',
    icon: AlertCircle,
    accent: 'from-red-500 to-rose-700',
  },
  {
    href: '/legal/aup',
    label: 'Acceptable Use Policy',
    description: 'Permitted and prohibited uses of all Open Box platforms and brand assets.',
    icon: CheckSquare,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    href: '/legal/event',
    label: 'Event Policies',
    description: 'Rules and expectations for all Open Box online and offline events.',
    icon: Calendar,
    accent: 'from-teal-400 to-cyan-600',
  },
]

export default function LegalIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-violet-400/[0.06] p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Policies</p>
        <h1 className="mb-4">Legal Documents</h1>
        <p className="max-w-2xl text-muted-foreground">
          All legal documents governing your use of Open Box platforms, Discord servers, events, and services.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {legalDocs.map((doc) => {
          const Icon = doc.icon
          return (
            <Card key={doc.href} className="flex flex-col overflow-hidden border-border bg-surface hover:border-white/20 transition-colors">
              <div className={`h-1.5 bg-gradient-to-r ${doc.accent}`} />
              <CardHeader>
                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${doc.accent}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-lg">{doc.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={doc.href}>View Document</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

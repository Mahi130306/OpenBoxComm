import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, ExternalLink, Send, ShieldCheck, Globe, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Contact Us — Open Box',
  description: 'Get in touch with the Open Box team. Reach us by email, Discord, or through our contact form.',
  openGraph: {
    title: 'Contact Us — Open Box',
    description: 'Get in touch with the Open Box team via email, Discord, or our contact form.',
  },
  alternates: { canonical: '/contact-us' },
}

const emails = [
  { label: 'General', address: 'hello@openboxcomm.in', desc: 'General inquiries and feedback' },
  { label: 'Support', address: 'support@openboxcomm.in', desc: 'Technical help and account issues' },
  { label: 'Partnerships', address: 'partner@openboxcomm.in', desc: 'Collabs and sponsorship queries' },
  { label: 'Appeals', address: 'appeals@openboxcomm.in', desc: 'Ban appeals and moderation queries' },
]

export default function ContactUsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* Hero Section */}
      <div className="mb-12 rounded-2xl border border-black/10 bg-black/[0.04] dark:bg-white/[0.06] p-8 shadow-sm dark:border-white/10 sm:p-12">
        <div className="flex items-center gap-3 mb-4">
            <Send className="h-8 w-8 text-indigo-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">Get in touch</p>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">Contact Us</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          We are a small, volunteer-run community. Whether you have a question, a suggestion, or a formal inquiry, we're here to listen.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column: Email Directory */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border bg-surface shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-indigo-500" />
                Email Directory
              </CardTitle>
              <CardDescription>
                Send us a message for formal or specific matters.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {emails.map(({ label, address, desc }) => (
                  <div key={address} className="group relative rounded-xl border border-border bg-muted/30 p-5 transition-all hover:bg-muted/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
                    <a
                      href={`mailto:${address}`}
                      className="inline-flex items-center gap-1.5 font-bold text-foreground transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                    >
                      {address}
                      <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Response Time Notice */}
          <div className="flex items-center gap-4 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.02] p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10">
              <Clock className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h3 className="font-bold">Expected Response Times</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                We typically respond to emails within <span className="text-foreground font-medium">48-72 hours</span>. For immediate assistance or general community questions, Discord is always your best bet.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar: Discord & Legal */}
        <aside className="space-y-6">
          <Card className="border-border bg-surface shadow-md border-t-4 border-t-indigo-500">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Join Discord</CardTitle>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 dark:text-green-400 border-none">
                        Fastest Response
                    </Badge>
                </div>
              <CardDescription>
                The primary hub for our community and support.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
                    <MessageSquare className="h-8 w-8 text-white" />
                </div> */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Drop a message in the <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono font-bold text-foreground">#help</code> channel. Our staff and community members are active throughout the day.
                </p>
                <Button asChild size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold">
                    <a
                        href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jump into Discord
                    </a>
                </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-surface/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-500" />
                Legal & Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-4">
              <p>
                For urgent legal matters or formal DMCA notices, please use the dedicated legal address.
              </p>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Mail className="h-4 w-4 text-muted-foreground" />
                legal@openboxcomm.in
              </div>
              <Button asChild variant="link" className="px-0 h-auto text-indigo-600 dark:text-indigo-400">
                <Link href="/legal" className="flex items-center gap-1">
                  Visit Legal Center
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}

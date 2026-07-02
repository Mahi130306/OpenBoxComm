import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HelpCircle, Search, Shield, MessageSquare, Info, Mail, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Help Centre — Open Box',
  description: 'Get help with Open Box communities. Find answers in our FAQ, read community rules, or contact the team directly.',
  alternates: { canonical: '/help' },
}

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-2xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05] sm:p-12">
        <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-cyan-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Help Centre</p>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">How can we help?</h1>
        <p className="max-w-2xl text-lg text-muted-foreground/90">
          Find answers to common questions, learn about our community standards, or connect with our support team on Discord.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full shadow-lg shadow-cyan-500/20">
            <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-4 w-4" />
              Get Support
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="https://forms.gle/your-suggestion-form" target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-4 w-4" />
              Submit a Suggestion
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/help/faq">
              <Search className="mr-2 h-4 w-4" />
              Search FAQ
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* How to ask or suggest */}
          <Card className="border-border bg-surface/50 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/30 pb-6">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-cyan-500" />
                How to ask or suggest to the team
              </CardTitle>
              <CardDescription>
                Follow these steps for the fastest and most helpful response.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-bold text-foreground flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-cyan-500" />
                    How to ask
                  </h3>
                  <ol className="space-y-4">
                    {[
                      { step: "1", title: "Join Junction", desc: "Use the main invite link to join the server." },
                      { step: "2", title: "Go to #help", desc: "Head over to the help channel." },
                      { step: "3", title: "Describe Clearly", desc: "Include context and what you tried." },
                      { step: "4", title: "Be Patient", desc: "We'll get back to you soon." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
                          {item.step}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="mb-4 font-bold text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-500" />
                    How to suggest
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Have an idea for Open Box? We love hearing from the community. Use our formal suggestions form to share your thoughts.
                    </p>
                    <div className="rounded-lg bg-cyan-500/5 p-4 border border-cyan-500/10">
                      <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-wider">Suggestions Form</p>
                      <p className="text-xs text-muted-foreground mb-4">Your input helps us build a better platform for everyone.</p>
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <a href="https://forms.gle/your-suggestion-form" target="_blank" rel="noopener noreferrer">
                          Open Form
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="sm:w-auto">
                  <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
                    Join the Junction Server
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Community support info */}
          <Card className="border-border bg-surface/50 shadow-sm border-l-4 border-l-cyan-500">
            <CardContent className="pt-6 flex gap-4">
              <Info className="h-6 w-6 text-cyan-500 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Community-driven support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Help is provided by community members, not a formal support team. Be specific about your question,
                  and help others when you can. That&apos;s how we build together.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar: Contact Info */}
        <aside className="space-y-6">
          <Card className="border-border bg-surface shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Direct Contact</CardTitle>
              <CardDescription>
                For non-community or formal queries.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Mail className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">General Email</p>
                  <a href="mailto:hello@openboxcomm.in" className="font-medium hover:text-cyan-500 transition-colors">
                    hello@openboxcomm.in
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-muted/40 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We usually respond to emails within 2-3 business days. For faster support, please use Discord.
                </p>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="/contact-us">
                  View All Contact Options
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-surface shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Legal Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              For DMCA notices, legal inquiries, or formal reports, please visit our legal center.
              <Button asChild variant="link" className="px-0 h-auto mt-2 text-cyan-600 dark:text-cyan-400">
                <Link href="/legal">Legal Centre</Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}

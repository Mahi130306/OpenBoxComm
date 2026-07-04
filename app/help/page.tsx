'use client'

import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HelpCircle, Search, Shield, MessageSquare, Info, Mail, ArrowDown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AskSuggestToggle } from '@/components/help/ask-suggest-toggle'
import { useState } from 'react'

export default function HelpPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-2xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-cyan-400/[0.08] p-8 shadow-sm dark:border-white/10 dark:from-white/[0.08] dark:to-cyan-400/[0.05] sm:p-12">
          <div className="mb-4 flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-cyan-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">Help Centre</p>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">How can we help?</h1>
          <p className="max-w-2xl text-lg text-muted-foreground/90">
            Find answers to common questions, learn about our community standards, or connect with our support team.
          </p>
        </div>

        {/* Navigation Buttons with Icons and Auto-scroll */}
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold text-muted-foreground">Quick Access</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <button
              onClick={() => scrollToSection('faq-section')}
              className={`group flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${activeSection === 'faq-section'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                : 'border-border hover:border-cyan-500/50 hover:bg-muted/50'
                }`}
            >
              <Search className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="text-center text-sm font-medium">Search FAQ</span>
            </button>

            <button
              onClick={() => scrollToSection('support-section')}
              className={`group flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${activeSection === 'support-section'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                : 'border-border hover:border-cyan-500/50 hover:bg-muted/50'
                }`}
            >
              <MessageSquare className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="text-center text-sm font-medium">Get Support</span>
            </button>

            <button
              onClick={() => scrollToSection('rules-section')}
              className={`group flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${activeSection === 'rules-section'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                : 'border-border hover:border-cyan-500/50 hover:bg-muted/50'
                }`}
            >
              <Shield className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="text-center text-sm font-medium">Community Rules</span>
            </button>

            <button
              onClick={() => scrollToSection('contact-section')}
              className={`group flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${activeSection === 'contact-section'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                : 'border-border hover:border-cyan-500/50 hover:bg-muted/50'
                }`}
            >
              <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="text-center text-sm font-medium">Contact Us</span>
            </button>

            <button
              onClick={() => scrollToSection('legal-section')}
              className={`group flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${activeSection === 'legal-section'
                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                : 'border-border hover:border-cyan-500/50 hover:bg-muted/50'
                }`}
            >
              <Info className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="text-center text-sm font-medium">Legal Matters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* FAQ Section */}
          <section id="faq-section" className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-3">
              <Search className="h-6 w-6 text-cyan-500" />
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <Card className="overflow-hidden border-border bg-surface/50 shadow-md">
              <CardHeader className="bg-muted/30 pb-4">
                <CardDescription>
                  Browse our comprehensive FAQ to find answers to common questions about Open Box communities.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button asChild className="rounded-full shadow-lg shadow-cyan-500/20">
                  <Link href="/help/faq">
                    <Search className="mr-2 h-4 w-4" />
                    Browse All FAQs
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Support Section */}
          <section id="support-section" className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-cyan-500" />
              <h2 className="text-3xl font-bold text-foreground">Get Support</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="overflow-hidden border-border bg-surface/50 shadow-md">
                <CardHeader className="bg-muted/30 pb-4">
                  <CardTitle className="text-xl">Ask the Community</CardTitle>
                  <CardDescription>
                    Get help from our active community members
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <AskSuggestToggle />
                </CardContent>
              </Card>

              {/* Direct Contact heading + stacked cards, kept as a single grid column */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-cyan-500" />
                  <h2 className="text-3xl font-bold text-foreground">Direct Contact</h2>
                </div>
                <div className="space-y-6">
                  <Card className="border-border bg-surface shadow-md">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">Email Support</CardTitle>
                      <CardDescription>For non-community or formal queries</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-xl bg-muted/40 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">General Email</p>
                        <a href="mailto:hello@openboxcomm.in" className="font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 break-all">
                          hello@openboxcomm.in
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        We usually respond within 2-3 business days. For faster support, please use Discord.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-surface shadow-md">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">Other Ways to Reach Us</CardTitle>
                      <CardDescription>Multiple channels for your convenience</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button asChild variant="outline" className="w-full justify-start">
                        <Link href="/contact-us">View All Contact Options</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Rules Section */}
          <section id="rules-section" className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-cyan-500" />
              <h2 className="text-3xl font-bold text-foreground">Community Rules</h2>
            </div>
            <Card className="overflow-hidden border-border bg-surface/50 shadow-md">
              <CardHeader className="bg-muted/30 pb-4">
                <CardDescription>
                  Read our community guidelines and rules to ensure a positive experience for everyone.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/legal/rules">
                    <Shield className="mr-2 h-4 w-4" />
                    View Community Rules
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section - now shows How It Works */}
          <section id="contact-section" className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-3">
              <Info className="h-6 w-6 text-cyan-500" />
              <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            </div>
            <Card className="border-border border-l-4 border-l-cyan-500 bg-surface/50 shadow-md">
              <CardHeader className="pb-4">
                {/* <CardTitle className="flex items-center gap-2 text-xl">
                  <Info className="h-5 w-5 text-cyan-500" />
                  How It Works
                </CardTitle> */}
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Help is provided by community members, not a formal support team. Be specific about your question,
                  provide context, and help others when you can.
                </p>
                <p className="rounded-lg bg-cyan-500/10 p-3 font-medium text-foreground">
                  That&apos;s how we build together.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Legal Section */}
          <section id="legal-section" className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-3">
              <Info className="h-6 w-6 text-cyan-500" />
              <h2 className="text-3xl font-bold text-foreground">Legal Matters</h2>
            </div>
            <Card className="overflow-hidden border-border bg-surface/50 shadow-md">
              <CardHeader className="bg-muted/30 pb-4">
                <CardDescription>
                  For DMCA notices, legal inquiries, privacy concerns, or formal reports.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/legal">
                    <Info className="mr-2 h-4 w-4" />
                    Visit Legal Centre
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
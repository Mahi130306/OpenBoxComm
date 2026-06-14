import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/ContactForm'

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
  { label: 'General', address: 'hello@openboxcomm.in' },
  { label: 'Support', address: 'support@openboxcomm.in' },
  { label: 'Partnerships', address: 'partner@openboxcomm.in' },
  { label: 'Appeals', address: 'appeals@openboxcomm.in' },
  // { label: 'Legal', address: 'legal@openboxcomm.in' },
]

export default function ContactUsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-10 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-indigo-400/[0.08] p-6 shadow-sm sm:p-10 dark:border-white/10 dark:from-white/[0.08] dark:to-indigo-400/[0.06]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
          Get in touch
        </p>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          We are a small, volunteer-run community. The fastest way to reach us is through Discord. For formal matters, email is best.
        </p>
      </div>

      {/* Contact form + contact info grid */}
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

        {/* Contact Form */}
        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">Send us a message</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            We aim to respond within 3–5 working days.
          </p>
          <ContactForm />
        </div>

        {/* Right column: Email + Discord */}
        <div className="flex flex-col gap-5">

          {/* Email */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <h2 className="mb-2 text-lg font-bold text-foreground">Email</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              For business, legal, or formal queries.
            </p>
            <ul className="space-y-2">
              {emails.map(({ label, address }) => (
                <li key={address} className="flex items-center justify-between gap-2 text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  <a
                    href={`mailto:${address}`}
                    className="inline-flex items-center gap-1 font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {address}
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discord */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <h2 className="mb-2 text-lg font-bold text-foreground">Discord</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Fastest response. Drop a message in the{' '}
              <code className="rounded bg-muted px-1 text-xs">#help</code> channel.
            </p>
            <Button asChild size="sm" className="w-full" id="contact-discord">
              <a
                href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </Button>
          </div>

          {/* Notice */}
          <div className="rounded-xl border border-border bg-muted/40 p-4 text-xs text-muted-foreground">
            Open Box is community-led. Support is volunteer-driven. For urgent legal matters use{' '}
            <strong className="text-foreground">legal@openboxcomm.in</strong>.{' '}
            <Link href="/help" className="underline underline-offset-2 hover:text-foreground transition-colors">
              Help Centre
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

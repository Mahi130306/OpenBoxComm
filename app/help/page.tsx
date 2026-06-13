import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help Centre',
  description: 'Get help with Open Box communities. Find answers in our FAQ, read community rules, or contact the team directly.',
  alternates: { canonical: '/help' },
}

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-6">Need Help?</h1>
      <div className="mb-8 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/help/faq">Search FAQ</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/doc/rules">Community Rules</Link>
        </Button>
      </div>
      <div className="space-y-8">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl mb-4">How to ask a question to team</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Join the server using the link below</li>
            <li>Go to the <code className="bg-muted px-1 rounded">#help</code> channel</li>
            <li>Describe your problem clearly: include context, what you tried, and what happened</li>
            <li>Be patient and respectful — everyone volunteers their time</li>
            <li>Mark as resolved when your question is answered</li>
          </ol>
          <div className="mt-6">
            <Button asChild>
              <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_MAIN} target="_blank" rel="noopener noreferrer">
                Join the Server
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl mb-2">Community-driven support</h2>
          <p className="text-muted-foreground">
            Help is provided by community members, not a formal support team. Be specific about your question,
            and help others when you can. That&apos;s how we build together.
          </p>
        </div>

        {/* Contact section */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl mb-2">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            For non-community queries, reach us directly by email or visit the contact page.
          </p>
          <div className="flex flex-col gap-1 text-sm mb-5">
            <a
              href="mailto:hello@openboxcomm.in"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              hello@openboxcomm.in
            </a>
            {/* <a
              href="mailto:legal@openboxcomm.in"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              legal@openboxcomm.in
            </a> */}
          </div>
          <Button asChild variant="outline">
            <Link href="/contact-us">Contact Page</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


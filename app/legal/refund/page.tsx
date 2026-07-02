import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy — Open Box',
  description: 'Plain English refund policy for the Open Box community platform.',
}

export default function RefundPage() {
  const lastUpdated = 'May 22, 2024'

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2">Refund Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. General Policy</h2>
        <p>
          Open Box is a free platform. However, if you make a voluntary donation or purchase a ticket for a paid event,
          this policy applies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Event Tickets</h2>
        <p>
          Refunds for paid events are generally available if requested 7 days before the event starts.
          Specific events may have different rules, which will be stated at the time of purchase.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Donations</h2>
        <p>
          Voluntary donations are typically non-refundable. If a donation was made in error, please contact us
          within 48 hours for consideration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Consumer Rights</h2>
        <p>
          We follow the Consumer Protection Act, 2019 of India. We aim to be fair and transparent with all
          financial transactions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
        <p>
          For refund requests or questions, reach out to support@openboxcomm.in.
        </p>
      </section>
    </article>
  )
}

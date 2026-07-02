import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMCA & Copyright — Open Box',
  description: 'Plain English DMCA and copyright policy for the Open Box community platform.',
}

export default function DmcaPage() {
  const lastUpdated = 'May 22, 2024'

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2">DMCA & Copyright</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Respecting Intellectual Property</h2>
        <p>
          Open Box respects the intellectual property rights of others and expects its users to do the same.
          We will respond to clear notices of alleged copyright infringement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Reporting Infringement</h2>
        <p>
          If you believe your work has been copied in a way that constitutes copyright infringement, please provide
          our copyright agent with a written notice at legal@openboxcomm.in.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Indian Law References</h2>
        <p>
          In addition to international standards, we follow the Copyright Act, 1957 of India. We act as an
          intermediary under Section 79 of the IT Act, 2000.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Repeat Infringers</h2>
        <p>
          We reserve the right to terminate the accounts of users who repeatedly infringe or are repeatedly
          charged with infringing the copyrights of others.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
        <p>
          For copyright matters, please contact legal@openboxcomm.in.
        </p>
      </section>
    </article>
  )
}

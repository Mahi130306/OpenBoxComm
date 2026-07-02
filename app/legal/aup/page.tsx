import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — Open Box',
  description: 'Plain English acceptable use policy for the Open Box community platform.',
}

export default function AupPage() {
  const lastUpdated = 'May 22, 2024'

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2">Acceptable Use Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Purpose</h2>
        <p>
          This policy ensures that Open Box remains a safe and productive environment for everyone.
          By using our platform, you agree to follow these rules.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Prohibited Content</h2>
        <p>
          You may not share content that is illegal, harmful, threatening, abusive, harassing, defamatory,
          vulgar, obscene, or otherwise objectionable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. System Integrity</h2>
        <p>
          Do not attempt to disrupt our services, use automated tools to scrape our site, or bypass
          security measures.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Compliance with Indian Law</h2>
        <p>
          Users must comply with the Indian Penal Code, 1860 and the Information Technology Act, 2000.
          Violations may be reported to law enforcement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Enforcement</h2>
        <p>
          We reserve the right to remove content and suspend or ban users who violate this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
        <p>
          To report a violation, email us at admin@openboxcomm.in.
        </p>
      </section>
    </article>
  )
}

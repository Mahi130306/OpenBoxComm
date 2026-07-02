import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Open Box',
  description: 'Plain English cookie policy for the Open Box community platform.',
}

export default function CookiePage() {
  const lastUpdated = 'May 22, 2024'

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help us remember your
          preferences and understand how you use our site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
        <p>
          We use strictly necessary cookies for core functionality (like authentication) and analytical cookies
          to see how visitors interact with our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Managing Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. However, disabling certain cookies
          may limit your ability to use some features of our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Compliance</h2>
        <p>
          Our use of cookies is in line with Indian data protection standards, including the Digital Personal
          Data Protection Act, 2023.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Contact</h2>
        <p>
          Questions about our cookie usage? Email us at privacy@openboxcomm.in.
        </p>
      </section>
    </article>
  )
}

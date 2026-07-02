import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Open Box',
  description: 'Plain English terms and conditions for the Open Box community platform.',
}

export default function TermsPage() {
  const lastUpdated = 'May 22, 2024'

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p>
          Welcome to Open Box. We provide a free community platform through our website and Discord servers.
          By using our services, you agree to these terms. If you don&apos;t agree, please do not use our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use Open Box. If you are under 18, you should review these terms with a parent or guardian.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Community Standards</h2>
        <p>
          Our platform is built on respect. You agree not to harass others, share illegal content, or disrupt the community.
          Detailed rules are available in our Community Rules and Acceptable Use Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Indian Law References</h2>
        <p>
          We operate in compliance with Indian laws, including the Information Technology Act, 2000 and the
          Digital Personal Data Protection Act, 2023. Any disputes will be handled under the jurisdiction of Indian courts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. User Content</h2>
        <p>
          You own the content you post, but you grant us a license to display it on our platform.
          You are responsible for ensuring your content doesn&apos;t violate anyone else&apos;s rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
        <p>
          Open Box is provided &quot;as is&quot;. While we strive for a great experience, we aren&apos;t liable for any
          damages resulting from your use of the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. We will notify the community of significant changes via Discord or our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <p>
          If you have questions about these terms, reach out at legal@openboxcomm.in.
        </p>
      </section>
    </article>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Open Box',
  description: 'Plain English privacy policy for the Open Box community platform.',
}

export default function PrivacyPage() {
  const lastUpdated = 'May 22, 2024'

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p>
          We collect basic information like your Discord username and email when you join our servers or website.
          We also collect usage data to improve our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Data</h2>
        <p>
          We use your data to provide our services, manage your membership, and communicate community updates.
          We do not sell your personal data to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Data Protection (DPDP Act 2023)</h2>
        <p>
          In accordance with the Digital Personal Data Protection Act, 2023 of India, we take steps to secure
          your personal data and provide you with rights to access, correct, or delete your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
        <p>
          We use services like Discord and Supabase. Their use of your data is governed by their own privacy policies.
          Please review them to understand how they handle your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
        <p>
          We use cookies to remember your preferences and analyze traffic. You can manage cookie settings in your browser.
          See our Cookie Policy for more details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
        <p>
          You have the right to request a copy of your data or ask us to delete it. Contact us at privacy@openboxcomm.in
          to exercise these rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
        <p>
          We may update this policy periodically. We will notify you of any major changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
        <p>
          For privacy-related inquiries, email us at privacy@openboxcomm.in.
        </p>
      </section>
    </article>
  )
}

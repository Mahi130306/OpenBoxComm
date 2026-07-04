import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Open Box',
  description: 'Cookie Policy for Open Box — how we use cookies and similar tracking technologies.',
}

export default function CookiePolicyPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <p>
        Open Box (&quot;we&quot;, &quot;our&quot;) uses cookies and similar technologies on our website at{' '}
        <strong>openboxcomm.in</strong> to provide, improve, and secure our Platform. This policy explains
        what cookies are, which ones we use, and how you can control them. It is read alongside our{' '}
        <a href="/legal/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They allow the website to
        recognise your device and remember certain information between visits. Similar technologies include
        localStorage, sessionStorage, and pixel tags.
      </p>

      <h2>2. Cookies We Use</h2>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Platform to function. They do not store any personally identifiable information.
      </p>
      <ul>
        <li><strong>ob-auth:</strong> Session authentication token — Duration: Session</li>
        <li><strong>ob-theme:</strong> Your preferred colour theme (dark/light) — Duration: Persistent (1 year)</li>
      </ul>

      <h3>2.2 Functional Cookies &amp; localStorage</h3>
      <p>These enhance functionality and personalisation:</p>
      <ul>
        <li><strong>ob-session:</strong> Anonymous session ID for log correlation</li>
        <li><strong>ob-logs:</strong> Client-side diagnostic logs (never sent to our servers)</li>
      </ul>

      <h3>2.3 Analytics Cookies</h3>
      <p>
        We use Google Analytics (GA4) with anonymized IP addresses after you accept analytics consent. No personally identifiable information is collected.
      </p>

      <h3>2.4 Third-Party Cookies</h3>
      <p>Services we use may set their own cookies:</p>
      <ul>
        <li><strong>Discord</strong> — for OAuth authentication</li>
        <li><strong>Patreon</strong> — for donation widgets</li>
        <li><strong>YouTube</strong> — for embedded videos (privacy-enhanced mode)</li>
      </ul>

      <h2>3. Your Choices</h2>
      <ul>
        <li><strong>Browser settings:</strong> Refuse or delete cookies anytime</li>
        <li><strong>localStorage:</strong> Clear via your browser's DevTools</li>
        <li><strong>Analytics:</strong> Withdraw consent by emailing privacy@openboxcomm.in</li>
      </ul>

      <h2>4. Consent &amp; Compliance</h2>
      <p>
        By using our website, you consent to necessary cookies. Analytics and non-essential cookies require explicit consent under the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a>.
      </p>

      <h2>5. Contact</h2>
      <p>Questions? Email <strong>privacy@openboxcomm.in</strong></p>
    </article>
  )
}

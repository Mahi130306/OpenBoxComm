import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Open Box',
  description: 'Cookie Policy for Open Box — how we use cookies and similar tracking technologies.',
}

export default function CookiePage() {
  const lastUpdated = 'June 29, 2026 — This document has not been reviewed, approved, or endorsed by a licensed attorney or legal counsel. It was drafted with AI assistance and does not constitute legal advice.'

  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

      <p>
        Open Box (&quot;we&quot;, &quot;our&quot;) uses cookies and similar technologies on our website at{' '}
        <strong>openboxcomm.in</strong> to provide, improve, and secure our Platform. This policy explains
        what cookies are, which ones we use, and how you can control them. It is read alongside our{' '}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>
      <p>
        This policy covers <strong>openboxcomm.in</strong> only. Our Discord servers, social media accounts
        (X, Instagram, YouTube), and third-party platforms we use are governed by their own respective cookie
        and privacy policies. This policy is governed by the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          Digital Personal Data Protection Act, 2023 (DPDP Act)
        </a>{' '}
        — India&apos;s data protection law governing how personal data is collected and processed — and MeitY
        guidelines. Your right to informational privacy is also protected under{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
          Article 21 of the Constitution of India
        </a>
        , as affirmed in <em>K.S. Puttaswamy v. Union of India (2017)</em>.
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
        These cookies are essential for the Platform to function and cannot be disabled. They do not store any
        personally identifiable information.
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Purpose</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['sb-auth-token', 'Supabase session authentication token', 'Session'],
            ['ob-theme', 'Stores your preferred colour theme (dark/light)', 'Persistent (1 year)'],
          ].map(([name, purpose, duration]) => (
            <tr key={name}>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #222', fontFamily: 'monospace', fontSize: '0.85em' }}>{name}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #222' }}>{purpose}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #222', color: 'var(--muted-foreground)' }}>{duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>2.2 Functional Cookies &amp; localStorage</h3>
      <p>These enhance functionality and personalisation on the website.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Key</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['ob-theme', 'Colour theme preference (persisted via localStorage)'],
            ['ob-logs', 'Client-side diagnostic logs for debugging (never sent to our servers)'],
            ['ob-session', 'Anonymous session ID for log correlation'],
          ].map(([key, purpose]) => (
            <tr key={key}>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #222', fontFamily: 'monospace', fontSize: '0.85em' }}>{key}</td>
              <td style={{ padding: '6px 4px', borderBottom: '1px solid #222' }}>{purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>2.3 Analytics Cookies</h3>
      <p>
        We use PostHog for privacy-respecting, consent-gated analytics. These cookies are only set
        after you accept the consent banner and are never used to identify you personally.
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Provider</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Purpose</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Duration</th>
            <th style={{ textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid #333' }}>Controlled by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '6px 4px', borderBottom: '1px solid #222', fontFamily: 'monospace', fontSize: '0.85em' }}>ph_*</td>
            <td style={{ padding: '6px 4px', borderBottom: '1px solid #222' }}>PostHog</td>
            <td style={{ padding: '6px 4px', borderBottom: '1px solid #222' }}>Anonymous usage analytics (pages visited, features used, session duration). No personally identifiable information is collected.</td>
            <td style={{ padding: '6px 4px', borderBottom: '1px solid #222', color: 'var(--muted-foreground)' }}>1 year</td>
            <td style={{ padding: '6px 4px', borderBottom: '1px solid #222' }}>Consent banner on site</td>
          </tr>
        </tbody>
      </table>

      <h3>2.4 Third-Party Cookies</h3>
      <p>Third-party services integrated into our website may set their own cookies:</p>
      <ul>
        <li>
          <strong>Discord</strong> — for OAuth authentication (
          <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">Discord Privacy Policy</a>
          )
        </li>
        <li>
          <strong>Patreon</strong> — for donation widgets (
          <a href="https://www.patreon.com/privacy" target="_blank" rel="noopener noreferrer">Patreon Privacy Policy</a>
          )
        </li>
        <li>
          <strong>YouTube</strong> — if embedded videos are present; we use YouTube&apos;s privacy-enhanced mode
          where possible (
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
          )
        </li>
      </ul>
      <p>We are not responsible for third-party cookie practices. Please review their policies directly.</p>

      <h2>3. Your Choices &amp; Opt-Out</h2>
      <ul>
        <li><strong>Browser settings:</strong> You can instruct your browser to refuse cookies or delete existing cookies. Disabling necessary cookies may impair website functionality.</li>
        <li><strong>localStorage:</strong> Clear localStorage via your browser&apos;s DevTools (Application &gt; Storage &gt; Local Storage) at any time. This resets your theme preference to the default (dark).</li>
        <li><strong>Diagnostic logs:</strong> Open your browser console and run <code>__ob.clearLogs()</code> to wipe all locally stored diagnostic logs.</li>
        <li><strong>Withdraw analytics consent:</strong> Clear your browser cookies and localStorage, or email <strong>privacy@openboxcomm.in</strong> — analytics will not be re-initialised until you accept the consent banner again.</li>
      </ul>

      <h2>4. Consent</h2>
      <p>
        By continuing to use our website, you consent to our use of strictly necessary cookies and
        localStorage. For non-essential cookies, we will seek your explicit consent where required under the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a>{' '}
        and MeitY guidelines.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Significant changes will be announced via the
        website and our Discord #announcements channels.
      </p>

      <h2>6. Contact</h2>
      <p>Questions about our cookie practices? Email us at <strong>privacy@openboxcomm.in</strong>.</p>
    </article>
  )
}
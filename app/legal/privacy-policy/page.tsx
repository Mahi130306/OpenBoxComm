import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Open Box',
  description: 'Privacy Policy for Open Box — how we collect, use, and protect your personal data under the DPDP Act 2023.',
}

export default function PrivacyPolicyPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <p>
        Open Box (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data. This Privacy Policy
        explains how we collect, use, store, and protect your information across the Open Box umbrella —
        including <strong>openboxcomm.in</strong>, our Discord servers (JN, Dev, GG, Study, Connect),
        our social media presence on X, Instagram, and YouTube, and any events or services we operate.
      </p>
      <p>It is governed by the following laws:</p>
      <ul>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
            Digital Personal Data Protection Act, 2023 (DPDP Act)
          </a>:</u>
           India&apos;s data protection law governing how personal data is collected, processed, and safeguarded.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>:</u>{' '}
           India&apos;s primary cyber law covering electronic records, data protection, and intermediary
          liability.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 21 of the Constitution of India
          </a>:</u>{' '}
           guarantees the right to life and personal liberty, which the Supreme Court in{' '}
          <em>K.S. Puttaswamy v. Union of India (2017)</em> held includes the fundamental right to privacy.
        </li>
      </ul>

      <div className="rounded-lg border border-border bg-green-500/5 p-4 mb-6">
        <strong>ℹ️ Scope note:</strong> This policy covers data collected directly by Open Box through our
        website and services. Data processed by Discord, YouTube, X, Instagram, Patreon, and other
        third-party platforms is governed by their own privacy policies. We do not control how third-party
        platforms handle your data.
      </div>

      <h2>1. Data Fiduciary &amp; Contact</h2>
      <p>
        Open Box acts as the <em>Data Fiduciary</em> under the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a></u>
        . For all data-related matters:
      </p>
      <ul>
        <li><strong>Email:</strong> privacy@openboxcomm.in</li>
        <li><strong>Grievance Officer:</strong> Data Protection Team, reachable at the above email</li>
        <li><strong>Response time:</strong> Within 30 days of receipt of complaint, as required by law</li>
      </ul>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Information You Provide</h3>
      <ul>
        <li>Account details: username, email address (via Discord OAuth)</li>
        <li>Content you post: messages, comments, blog contributions, event submissions on the website</li>
        <li>Support communications sent to any of our contact emails</li>
        <li>Payment information for Patreon, UPI, or other payment channels (processed by the respective payment provider — we do not store card or UPI details directly)</li>
        <li>Event registrations: name, email, and any other details required for a specific event</li>
      </ul>

      <h3>2.2 Automatically Collected Information (Website)</h3>
      <ul>
        <li>IP address and approximate location (country/region)</li>
        <li>Browser type, device type, operating system</li>
        <li>Pages visited, time spent, referring URLs</li>
        <li>Cookies and similar technologies (see our <u><a href="/legal/cookie-policy">Cookie Policy</a></u>)</li>
      </ul>

      <h3>2.3 Information from Third-Party Platforms</h3>
      <p>
        When you interact with Open Box on Discord, X, Instagram, or YouTube, those platforms may share
        limited data with us (such as a Discord user ID for authentication). We only use this data to operate
        our services and do not use it for profiling or advertising.
      </p>

      <h2>3. Purpose &amp; Legal Basis for Processing</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-1">Purpose</th>
              <th className="text-left py-2 px-1">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Providing and operating the Platform', 'Consent / Legitimate interest'],
              ['Authentication via Discord OAuth', 'Consent'],
              ['Sending service notifications (email, Discord)', 'Legitimate interest'],
              ['Analytics and Platform improvement', 'Legitimate interest'],
              ['Legal compliance', 'Legal obligation'],
              ['Processing donations and payments', 'Contract'],
              ['Event management and communications', 'Consent / Contract'],
              ['Moderating community spaces (Discord, social media)', 'Legitimate interest / Legal obligation'],
            ].map(([purpose, basis]) => (
              <tr key={purpose} className="border-b border-border/50">
                <td className="py-2 px-1 text-sm">{purpose}</td>
                <td className="py-2 px-1 text-sm text-muted-foreground">{basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>4. Data Sharing &amp; Transfers</h2>
      <p>We do <strong>not</strong> sell your personal data. We may share data with:</p>
      <ul>
        <li><strong>Discord Inc.</strong> — authentication and community platform</li>
        <li><strong>Supabase Inc.</strong> — database and authentication backend</li>
        <li><strong>Patreon Inc.</strong> — donation processing</li>
        <li><strong>Other payment processors</strong> — for UPI or future payment channels, as applicable</li>
        <li><strong>Event co-organisers</strong> — limited data shared only as necessary to run a specific event, disclosed at registration</li>
        <li><strong>Social media platforms (X, Instagram, YouTube)</strong> — interactions on these platforms are subject to their respective privacy policies; we do not share your data with them beyond what is inherent in operating official accounts</li>
        <li><strong>Law enforcement</strong> — when required by Indian courts or government authorities under lawful orders</li>
      </ul>
      <p>
        Cross-border data transfers comply with applicable safeguards under the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a></u>
        and relevant MeitY notifications.
      </p>

      <h2>5. Your Rights as a Data Principal</h2>
      <p>
        Under the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a></u>
        and your fundamental right to privacy under{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
          Article 21 of the Constitution of India
        </a></u>
        , you have the right to:
      </p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
        <li><strong>Correction:</strong> Rectify inaccurate or incomplete data</li>
        <li><strong>Erasure:</strong> Request deletion of your data (subject to legal retention obligations)</li>
        <li><strong>Grievance Redressal:</strong> File complaints with us or the Data Protection Board of India</li>
        <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw at any time</li>
        <li><strong>Nomination:</strong> Nominate another individual to exercise your rights in case of death or incapacity</li>
      </ul>
      <p>To exercise these rights, email <strong><a href="mailto:privacy@openboxcomm.in">privacy@openboxcomm.in</a></strong>.</p>

      <h2>6. Data Retention</h2>
      <p>
        We retain your data for as long as your account is active or as needed to provide services. Upon
        account deletion, data is removed within <strong>90 days</strong> unless retention is required by law.
        Event-related data may be retained for up to <strong>1 year</strong> for record-keeping and compliance
        purposes.
      </p>

      <h2>7. Security</h2>
      <p>
        We implement industry-standard security measures including encryption in transit (TLS), access
        controls, and regular security reviews. No system is completely secure. In the event of a data breach,
        we will notify affected users and the Data Protection Board as required by the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a></u>
        .
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Our Platform is not directed to children under 13. We do not knowingly collect data from children. If
        you believe we have collected data from a child, please contact us immediately at{' '}
        <strong>privacy@openboxcomm.in</strong>.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be notified via email,
        prominent notice on the website, and the #announcements channel on our Discord servers. Continued use
        of any Open Box platform constitutes acceptance of the updated policy.
      </p>

      <h2>10. Grievance Redressal</h2>
      <p>
        If you have concerns about how your data is handled, contact our Grievance Officer at{' '}
        <strong>privacy@openboxcomm.in</strong>. We will respond within 30 days. You also have the right to
        approach the <strong>Data Protection Board of India</strong> once constituted under the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
          DPDP Act, 2023
        </a></u>
        .
      </p>

      <h2>11. Contact Us</h2>
      <p>For any privacy-related inquiries, reach out to:</p>
      <ul>
        <li><strong>Email:</strong> privacy@openboxcomm.in</li>
        <li><strong>Discord:</strong> <a href="https://discord.gg/7ZWckKU89J">Join our server</a> and contact admins</li>
      </ul>
    </article>
  )
}

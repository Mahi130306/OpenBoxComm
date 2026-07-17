import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Copyright & DMCA Policy - Open Box',
  description: 'How Open Box handles copyright infringement claims under Indian law and the DMCA.',
}

export default function DmcaPolicyPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Copyright &amp; DMCA Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <p>
        Open Box respects intellectual property rights and expects all users and community members to do the
        same. This policy applies across the entire Open Box umbrella - including <strong>openboxcomm.in</strong>,
        all Discord servers, our social media accounts on X, Instagram, and YouTube, and any other platforms we operate.
      </p>
      <p>It is governed by the following laws:</p>
      <ul>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a>{' '}
          - protects intellectual property rights in creative works.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>{' '}
          - India&apos;s primary cyber law with safe harbour protections for intermediaries.
        </li>
      </ul>

      <h2>1. Reporting Copyright Infringement</h2>
      <p>If you believe content on Open Box infringes your copyright, email:</p>
      <ul>
        <li><strong>legal@openboxcomm.in</strong> (Subject: Copyright Takedown Notice)</li>
      </ul>
      <p>Include:</p>
      <ol>
        <li>Your name and contact information</li>
        <li>Description of the copyrighted work</li>
        <li>URL or location of the infringing content</li>
        <li>A statement that you have good faith belief the use is unauthorized</li>
        <li>A statement under penalty of perjury that your information is accurate</li>
        <li>Your signature</li>
      </ol>

      <h2>2. Our Response to Valid Notices</h2>
      <p>Upon receiving a valid takedown notice, we will:</p>
      <ul>
        <li>Acknowledge receipt within <strong>2 business days</strong></li>
        <li>Remove the infringing content within <strong>5 business days</strong></li>
        <li>Notify the content creator of the removal</li>
        <li>Provide an opportunity to submit a counter-notice</li>
      </ul>

      <h2>3. Counter-Notice Procedure</h2>
      <p>If your content was removed in error, submit a counter-notice to legal@openboxcomm.in with:</p>
      <ol>
        <li>Your name and contact information</li>
        <li>Identification of the removed content and location</li>
        <li>A statement under penalty of perjury that content was removed by mistake</li>
        <li>Your consent to jurisdiction of Indian courts</li>
        <li>Your signature</li>
      </ol>
      <p>If no legal action is taken within <strong>10 business days</strong>, we may restore the content.</p>

      <h2>4. Repeat Infringers</h2>
      <p>
        Users with three or more valid takedown notices will be permanently removed from all Open Box platforms.
      </p>

      <h2>5. Misuse of the Takedown Process</h2>
      <p>
        Filing false takedown notices can result in liability for damages and legal costs. We reserve the right
        to seek damages for abuse of this process.
      </p>

      <h2>6. Open Box Intellectual Property</h2>
      <p>
        All Open Box logos, branding, and original content are protected under the Copyright Act, 1957.
        For brand usage guidelines, see our <a href="/legal/acceptable-use-policy">Acceptable Use Policy</a>.
      </p>

      <h2>7. Contact</h2>
      <p>For copyright matters: <strong>legal@openboxcomm.in</strong></p>
    </article>
  )
}

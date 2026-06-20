import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy — Open Box',
  description: 'How Open Box handles copyright infringement claims under Indian law and the DMCA.',
}

export default function DmcaPage() {
  const lastUpdated = '6 June 2025'

  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">DMCA &amp; Copyright Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

      <p>
        Open Box respects intellectual property rights and expects all users and community members to do the
        same. This policy applies across the entire Open Box umbrella — including <strong>openboxcomm.in</strong>,
        all Discord servers (JN, Dev, GG, Classic, Study, Connect, and any future servers), our social media
        accounts on X, Instagram, and YouTube, and any other platforms we operate now or in the future.
      </p>
      <p>It is governed by the following laws:</p>
      <ul>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a>{' '}
          — protects intellectual property rights in creative works including text, graphics, software, and
          original content.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>{' '}
          — India&apos;s primary cyber law; specifically{' '}
          <a href="https://indiankanoon.org/doc/10190353/" target="_blank" rel="noopener noreferrer">
            Section 79
          </a>{' '}
          provides safe harbour protection for intermediaries who act with due diligence.
        </li>
        <li>
          <a href="https://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer">
            Digital Millennium Copyright Act (DMCA)
          </a>{' '}
          — US law providing a framework for copyright takedown notices and safe harbour for online platforms
          under{' '}
          <a href="https://www.copyright.gov/title17/92chap5.html#512" target="_blank" rel="noopener noreferrer">
            Section 512
          </a>
          .
        </li>
      </ul>

      <h2>1. Scope</h2>
      <p>This policy covers content posted, shared, or distributed across:</p>
      <ul>
        <li>The Open Box website at <strong>openboxcomm.in</strong> and all subdomains</li>
        <li>All Open Box Discord servers: JN, Dev, GG, Classic, Study, Connect, and any future servers</li>
        <li>Open Box official accounts on X, Instagram, and YouTube</li>
        <li>Any other platform or service operated under the Open Box brand now or in the future</li>
      </ul>

      <h2>2. Safe Harbour — Intermediary Liability</h2>
      <p>
        Under{' '}
        <a href="https://indiankanoon.org/doc/10190353/" target="_blank" rel="noopener noreferrer">
          Section 79 of the IT Act, 2000
        </a>
        , Open Box operates as an intermediary and is not liable for user-generated content, provided we
        observe due diligence and expeditiously remove infringing content upon receiving a valid notice. This
        policy describes our due diligence procedures.
      </p>

      <h2>3. Reporting Copyright Infringement</h2>
      <p>
        If you believe content anywhere on the Open Box Platform infringes your copyright, submit a written
        takedown notice to:
      </p>
      <ul>
        <li><strong>Email:</strong> legal@openboxcomm.in</li>
        <li><strong>Subject line:</strong> Copyright Takedown Notice</li>
      </ul>
      <p>Your notice must include:</p>
      <ol>
        <li>Your full name and contact information (email and phone number)</li>
        <li>A description of the copyrighted work you claim has been infringed</li>
        <li>The URL, Discord server, channel, post, or location where the infringing content appears</li>
        <li>A statement that you have a good faith belief the use is not authorised by the copyright owner, its agent, or law</li>
        <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf</li>
        <li>Your electronic or physical signature</li>
      </ol>
      <p>
        <strong>Note for Indian rights holders:</strong> You may additionally invoke your rights under{' '}
        <a href="https://indiankanoon.org/doc/1142284/" target="_blank" rel="noopener noreferrer">
          Sections 51 to 63
        </a>{' '}
        of the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
          Copyright Act, 1957
        </a>
        , which cover infringement, remedies, and criminal penalties.
      </p>

      <h2>4. Our Response to Valid Notices</h2>
      <p>Upon receiving a valid and complete takedown notice, we will:</p>
      <ul>
        <li>Acknowledge receipt within <strong>2 business days</strong></li>
        <li>Remove or disable access to the allegedly infringing content (typically within <strong>5 business days</strong>)</li>
        <li>Notify the user who posted the content that it has been removed</li>
        <li>Provide the user an opportunity to submit a counter-notice</li>
      </ul>

      <h2>5. Counter-Notice Procedure</h2>
      <p>
        If you believe your content was removed in error, submit a counter-notice to{' '}
        <strong>legal@openboxcomm.in</strong> with:
      </p>
      <ol>
        <li>Your full name and contact information</li>
        <li>Identification of the removed content and where it appeared (website URL, Discord server and channel, social media post, etc.)</li>
        <li>A statement, under penalty of perjury, that you have a good faith belief the content was removed by mistake or misidentification</li>
        <li>Your consent to the jurisdiction of Indian courts</li>
        <li>Your electronic or physical signature</li>
      </ol>
      <p>
        If we receive a valid counter-notice and the original complainant does not initiate legal proceedings
        within <strong>10 business days</strong>, we may restore the content at our discretion.
      </p>

      <h2>6. Repeat Infringers</h2>
      <p>
        In accordance with our obligations under{' '}
        <a href="https://indiankanoon.org/doc/10190353/" target="_blank" rel="noopener noreferrer">
          Section 79 of the IT Act, 2000
        </a>
        , Open Box maintains a policy of terminating accounts of users found to be repeat infringers across
        any of our platforms. Three or more valid takedown notices against a single user will result in
        permanent removal from all Open Box spaces.
      </p>

      <h2>7. Misuse of the Takedown Process</h2>
      <p>
        Submitting a false or materially misrepresented takedown notice is a serious matter. Under both Indian
        law and{' '}
        <a href="https://www.copyright.gov/title17/92chap5.html#512" target="_blank" rel="noopener noreferrer">
          Section 512(f) of the DMCA
        </a>
        , misrepresentation can result in liability for damages, including costs and attorneys&apos; fees. We
        reserve the right to seek damages for abuse of the takedown process.
      </p>

      <h2>8. Open Box Intellectual Property</h2>
      <p>
        All logos, branding, server identities, and original content created by Open Box are protected under
        the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
          Copyright Act, 1957
        </a>
        . This includes all assets associated with individual servers (JN, Dev, GG, Classic, Study, Connect)
        and the Open Box umbrella brand. For brand usage guidelines, refer to our{' '}
        <a href="/legal/aup">Acceptable Use Policy</a>.
      </p>

      <h2>9. Contact</h2>
      <p>For all copyright and DMCA matters: <strong>legal@openboxcomm.in</strong></p>
    </article>
  )
}
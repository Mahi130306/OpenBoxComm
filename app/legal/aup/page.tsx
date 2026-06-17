import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — Open Box',
  description: 'Acceptable Use Policy for Open Box — permitted uses, prohibited conduct, and brand usage guidelines.',
}

export default function AupPage() {
  const lastUpdated = '6 June 2025'

  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Acceptable Use Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

      <p>
        This Acceptable Use Policy (&quot;AUP&quot;) governs how you may use any Open Box platform — including the
        website at <strong>openboxcomm.in</strong>, all Discord servers (JN, Dev, GG, Classic, Study, Connect,
        and any future servers), official social media accounts on X, Instagram, and YouTube, all events, and
        any other service operated under the Open Box brand now or in the future. This AUP forms part of our{' '}
        <a href="/legal/terms">Terms &amp; Conditions</a>.
      </p>
      <p>This policy is grounded in the following laws:</p>
      <ul>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            Indian Penal Code, 1860 (IPC)
          </a>{' '}
          — covers criminal offences including defamation, obscenity, hate speech, harassment, and incitement.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>{' '}
          — India&apos;s primary cyber law addressing cybercrimes, electronic records, and intermediary liability.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
            Digital Personal Data Protection Act, 2023 (DPDP Act)
          </a>{' '}
          — India&apos;s data protection law governing how personal data is collected, processed, and safeguarded.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a>{' '}
          — protects intellectual property rights in creative works including text, graphics, software, and
          original content.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/2362/1/201232.pdf" target="_blank" rel="noopener noreferrer">
            POCSO Act, 2012
          </a>{' '}
          — protects children from sexual offences, abuse, and exploitation.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 19(1)(a) of the Constitution of India
          </a>{' '}
          — guarantees freedom of speech and expression, subject to reasonable restrictions under Article
          19(2) including public order, decency, and national sovereignty.
        </li>
        <li>
          <a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 21 of the Constitution of India
          </a>{' '}
          — guarantees the right to life and personal liberty, including the right to privacy as held in{' '}
          <em>K.S. Puttaswamy v. Union of India (2017)</em>.
        </li>
      </ul>

      <div
        style={{
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '12px 16px',
          marginBottom: '24px',
          background: 'rgba(255,200,0,0.06)',
        }}
      >
        <strong>⚠️ Legal Note:</strong> Violations of Indian law will result in an immediate permanent ban
        from all Open Box platforms and may be reported to the appropriate law enforcement authorities.
      </div>

      <h2>1. Scope</h2>
      <p>This AUP applies across all Open Box platforms and spaces:</p>
      <ul>
        <li><strong>Website:</strong> openboxcomm.in and all subdomains</li>
        <li><strong>Discord servers:</strong> JN (general entry), Dev (builders and developers), GG (gaming), Classic (casual social), Study (study and accountability), Connect (networking and careers), and any future servers</li>
        <li><strong>Social media:</strong> Official Open Box accounts on X, Instagram, and YouTube</li>
        <li><strong>Events:</strong> All online workshops, IRL meetups, hackathons, contests, and live streams</li>
        <li><strong>Future platforms:</strong> Any new service, app, or community space launched under the Open Box brand</li>
      </ul>

      <h2>2. Permitted Use</h2>
      <ul>
        <li>Participate in community discussions, servers, and events in good faith</li>
        <li>Share original content, projects, and resources relevant to the focus of the specific server or channel</li>
        <li>Collaborate with other members on projects, code, and ideas</li>
        <li>Access blogs, documentation, and community resources for personal or professional learning</li>
        <li>Follow, subscribe to, or share content from Open Box&apos;s official social media accounts with proper attribution</li>
        <li>Use our tools and services as intended and described in their documentation</li>
      </ul>

      <h2>3. Prohibited Use</h2>

      <h3>3.1 Illegal or Harmful Content</h3>
      <ul>
        <li>Post, share, or distribute content that is illegal under Indian law or the laws of your jurisdiction</li>
        <li>
          Share content that threatens, harasses, or incites violence against any individual or group — an
          offence under the{' '}
          <a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            IPC, 1860
          </a>
        </li>
        <li>
          Distribute child sexual abuse material (CSAM) or content that exploits or endangers minors, in
          violation of the{' '}
          <a href="https://www.indiacode.nic.in/bitstream/123456789/2362/1/201232.pdf" target="_blank" rel="noopener noreferrer">
            POCSO Act, 2012
          </a>
        </li>
        <li>Promote, glorify, or facilitate terrorism, extremism, or communal violence</li>
        <li>Share content that promotes self-harm, suicide, or eating disorders</li>
        <li>
          Post NSFW content (explicit, sexual, violent, or gory material) — distribution of obscene content
          is an offence under the{' '}
          <a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            IT Act, 2000
          </a>
        </li>
      </ul>

      <h3>3.2 Malicious Technical Activity</h3>
      <ul>
        <li>Introduce or distribute malware, viruses, ransomware, spyware, or any malicious code</li>
        <li>Attempt to gain unauthorised access to any Open Box platform, its infrastructure, or other users&apos; accounts</li>
        <li>Conduct denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks</li>
        <li>Use automated bots, scrapers, or crawlers to harvest data from any Open Box platform without prior written permission</li>
        <li>Exploit vulnerabilities in any Open Box platform — report them responsibly to <strong>admin@openboxcomm.in</strong> instead (see Section 7)</li>
        <li>Attempt to reverse-engineer, decompile, or disassemble any part of the Platform</li>
      </ul>

      <h3>3.3 Spam &amp; Deceptive Practices</h3>
      <ul>
        <li>Send unsolicited bulk messages, spam, or chain messages to members</li>
        <li>Distribute phishing links, deceptive URLs, or fraudulent content</li>
        <li>Impersonate Open Box, its team, moderators, or any other person or entity on any platform</li>
        <li>Create fake accounts or use alternate accounts to bypass moderation actions on any platform</li>
        <li>Artificially inflate engagement metrics or manipulate community systems</li>
      </ul>

      <h3>3.4 Privacy Violations</h3>
      <ul>
        <li>Collect, store, or share personal information of other users without their explicit consent</li>
        <li>
          Doxx any individual — a violation of{' '}
          <a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 21 of the Constitution
          </a>{' '}
          and punishable under the{' '}
          <a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
            DPDP Act, 2023
          </a>
        </li>
        <li>Record, screenshot, or distribute private conversations without the consent of all parties involved</li>
        <li>Use any Open Box platform to conduct unauthorised surveillance or tracking of individuals</li>
      </ul>

      <h3>3.5 Intellectual Property Violations</h3>
      <ul>
        <li>Share pirated software, cracked tools, or illegally distributed media on any platform</li>
        <li>
          Post copyrighted material without authorisation — an infringement under the{' '}
          <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a>
        </li>
        <li>Reproduce, distribute, or create derivative works from Open Box content without written consent (see Section 5 for brand guidelines)</li>
      </ul>

      <h3>3.6 Commercial Misuse</h3>
      <ul>
        <li>Use any Open Box platform to advertise, sell, or solicit commercial products or services without prior written approval from <strong>partnerships@openboxcomm.in</strong></li>
        <li>Run unsanctioned competitions, giveaways, or promotions on any Open Box platform</li>
        <li>Resell access to Open Box services or events without authorisation</li>
      </ul>

      <h2>4. Platform-Specific Notes</h2>

      <h3>4.1 Discord Servers</h3>
      <p>
        Each server (JN, Dev, GG, Classic, Study, Connect) has its own focus and additional channel-specific
        rules. Always check the #rules channel for the server you are in. Cross-server behaviour — such as ban
        evasion using alternate accounts — may result in removal from all servers simultaneously.
      </p>

      <h3>4.2 Website (openboxcomm.in)</h3>
      <p>
        User-generated content on the website (blog posts, comments, event submissions) must follow this AUP
        and our <a href="/legal/rules">Community Rules</a>. We reserve the right to remove any content at our
        discretion without notice.
      </p>

      <h3>4.3 Social Media (X, Instagram, YouTube)</h3>
      <p>
        When interacting with Open Box on X, Instagram, or YouTube — through comments, replies, tags, or
        direct messages — this AUP applies. These platforms also have their own terms of service which apply
        independently.
      </p>

      <h3>4.4 Events</h3>
      <p>
        All event participants are bound by this AUP and our <a href="/legal/events">Events Policy</a>.
        Violations at events may result in removal from the event and from all Open Box platforms.
      </p>

      <h2>5. Open Box Brand Usage</h2>
      <p>
        The Open Box name, logo, server identities (JN, Dev, GG, Classic, Study, Connect), the &quot;OB&quot;
        abbreviation, and all associated visual assets are protected under the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
          Copyright Act, 1957
        </a>
        . The following guidelines govern how these assets may be used by anyone outside the Open Box team.
      </p>

      <h3>5.1 What You Can Do</h3>
      <ul>
        <li><strong>Reference us by name</strong> — you may refer to &quot;Open Box&quot; or &quot;OB&quot; in factual or informational contexts (e.g. &quot;I am a member of Open Box&quot;, &quot;Open Box hosted this hackathon&quot;)</li>
        <li><strong>Share our content</strong> — you may share posts and announcements from our official social media accounts and website with proper attribution, without altering the content</li>
        <li><strong>Link to us</strong> — you may link to openboxcomm.in or our official social media profiles from your website, portfolio, or content</li>
        <li><strong>Credit participation</strong> — you may state that you participated in an Open Box event or are a member of an Open Box server on your portfolio, resume, or social media</li>
      </ul>

      <h3>5.2 What You Cannot Do</h3>
      <ul>
        <li><strong>Use our logo or visual assets</strong> — do not use the Open Box logo, any server logo, or any official visual asset without prior written permission from <strong>team@openboxcomm.in</strong></li>
        <li><strong>Imply endorsement or partnership</strong> — do not use the Open Box name or brand to imply Open Box endorses, sponsors, or is affiliated with your project, product, or organisation without explicit written agreement</li>
        <li><strong>Create unofficial Open Box content</strong> — do not create social media accounts, communities, Discord servers, websites, or merchandise using the Open Box name, logo, or brand identity without written authorisation</li>
        <li><strong>Modify our assets</strong> — do not alter, remix, crop, recolour, or create derivative versions of any Open Box logo or visual asset</li>
        <li><strong>Use &quot;OB&quot; or server names commercially</strong> — do not use &quot;Open Box&quot;, &quot;OB&quot;, or any server name (e.g. &quot;OB Dev&quot;, &quot;OB GG&quot;) in a commercial context without written permission</li>
        <li><strong>Misrepresent affiliation</strong> — do not claim to represent or speak for Open Box unless you are an authorised team member</li>
      </ul>

      <h3>5.3 Requesting Brand Permission</h3>
      <p>
        For collabs, projects, events, fan content, or any use not covered above, reach out at{' '}
        <strong>partnerships@openboxcomm.in</strong> with a description of what you intend to use, where, and
        for what purpose. We review all requests on a case-by-case basis.
      </p>

      <h2>6. Reporting Violations</h2>
      <ul>
        <li><strong>#report</strong> channel on any Open Box Discord server</li>
        <li>Discord&apos;s built-in message reporting feature</li>
        <li>Email <strong>admin@openboxcomm.in</strong> for cross-platform, brand misuse, or serious violations</li>
      </ul>
      <p>For legal violations, report to:</p>
      <ul>
        <li>
          <strong>CERT-In:</strong>{' '}
          <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer">cert-in.org.in</a>
        </li>
        <li>
          <strong>National Cyber Crime Reporting Portal:</strong>{' '}
          <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a>
        </li>
      </ul>

      <h2>7. Responsible Disclosure</h2>
      <p>
        If you discover a security vulnerability in any Open Box platform, report it responsibly to{' '}
        <strong>admin@openboxcomm.in</strong> before any public disclosure. We will acknowledge receipt within
        2 business days and work to resolve valid findings promptly.
      </p>

      <h2>8. Consequences of Violations</h2>
      <ul>
        <li>Formal warning</li>
        <li>Temporary mute or removal from specific channels or servers</li>
        <li>Removal of offending content across any platform</li>
        <li>Permanent ban from all Open Box platforms (Discord, website, events, social media)</li>
        <li>Takedown request to the relevant platform (X, Instagram, YouTube, Discord) for brand misuse</li>
        <li>Reporting to law enforcement or relevant authorities</li>
        <li>Legal action under applicable Indian law</li>
      </ul>
      <p>
        Open Box reserves the right to act without prior notice in cases of serious harm. Appeals may be
        submitted to <strong>appeals@openboxcomm.in</strong>.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this AUP from time to time. Changes will be announced via #announcements on Discord, on
        openboxcomm.in, and on our social media accounts. Continued use of any Open Box platform constitutes
        acceptance of the updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy: <strong>legal@openboxcomm.in</strong><br />
        Report a violation: <strong>admin@openboxcomm.in</strong><br />
        Brand / partnership enquiries: <strong>partnerships@openboxcomm.in</strong><br />
        Appeal a moderation decision: <strong>appeals@openboxcomm.in</strong>
      </p>
    </article>
  )
}
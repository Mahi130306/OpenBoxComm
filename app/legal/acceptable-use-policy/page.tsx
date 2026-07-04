import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy — Open Box',
  description: 'Acceptable Use Policy for Open Box — permitted uses, prohibited conduct, and brand usage guidelines.',
}

export default function AcceptableUsePolicyPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Acceptable Use Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <p>
        This Acceptable Use Policy (&quot;AUP&quot;) governs how you may use any Open Box platform — including the
        website at <strong>openboxcomm.in</strong>, all Discord servers, official social media accounts, all events, and
        any other service operated under the Open Box brand. This AUP forms part of our{' '}
        <a href="/legal/terms-and-conditions">Terms &amp; Conditions</a>.
      </p>

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
        from all Open Box platforms and may be reported to law enforcement authorities.
      </div>

      <h2>1. Scope</h2>
      <p>This AUP applies across all Open Box platforms and spaces:</p>
      <ul>
        <li><strong>Website:</strong> openboxcomm.in and all subdomains</li>
        <li><strong>Discord servers:</strong> JN, Dev, GG, Study, Connect, and any future servers</li>
        <li><strong>Social media:</strong> Official accounts on X, Instagram, and YouTube</li>
        <li><strong>Events:</strong> All online workshops, IRL meetups, hackathons, contests, and live streams</li>
      </ul>

      <h2>2. Permitted Use</h2>
      <ul>
        <li>Participate in community discussions in good faith</li>
        <li>Share original content, projects, and resources relevant to server focus</li>
        <li>Collaborate with other members on projects and ideas</li>
        <li>Access blogs, documentation, and community resources for learning</li>
        <li>Share Open Box content with proper attribution</li>
        <li>Use tools and services as intended</li>
      </ul>

      <h2>3. Prohibited Use</h2>

      <h3>3.1 Illegal or Harmful Content</h3>
      <ul>
        <li>Post illegal content under Indian law or your jurisdiction's laws</li>
        <li>Share content that threatens, harasses, or incites violence</li>
        <li>Distribute child sexual abuse material or content exploiting minors</li>
        <li>Promote terrorism, extremism, or communal violence</li>
        <li>Share NSFW content (explicit, sexual, violent, or gory material)</li>
      </ul>

      <h3>3.2 Malicious Technical Activity</h3>
      <ul>
        <li>Distribute malware, viruses, ransomware, or malicious code</li>
        <li>Attempt unauthorized access to platforms or accounts</li>
        <li>Conduct DoS or DDoS attacks</li>
        <li>Scrape data without written permission</li>
        <li>Report vulnerabilities responsibly to admin@openboxcomm.in instead</li>
      </ul>

      <h3>3.3 Spam &amp; Deceptive Practices</h3>
      <ul>
        <li>Send unsolicited bulk messages or spam</li>
        <li>Distribute phishing links or fraudulent content</li>
        <li>Impersonate Open Box, team members, or other users</li>
        <li>Create fake accounts to bypass moderation</li>
        <li>Artificially inflate engagement metrics</li>
      </ul>

      <h3>3.4 Privacy Violations</h3>
      <ul>
        <li>Collect or share personal information without consent</li>
        <li>Doxx any individual</li>
        <li>Record or distribute private conversations without consent</li>
        <li>Conduct unauthorized surveillance or tracking</li>
      </ul>

      <h3>3.5 Intellectual Property Violations</h3>
      <ul>
        <li>Share pirated software or cracked tools</li>
        <li>Post copyrighted material without authorization</li>
        <li>Create derivative works from Open Box content without consent</li>
      </ul>

      <h3>3.6 Commercial Misuse</h3>
      <ul>
        <li>Advertise commercial products without prior approval from partnerships@openboxcomm.in</li>
        <li>Run unsanctioned competitions or giveaways</li>
        <li>Resell access to services or events</li>
      </ul>

      <h2>4. Platform-Specific Notes</h2>

      <h3>4.1 Discord Servers</h3>
      <p>
        Each server has its own focus and additional rules. Check the #rules channel for server-specific guidelines.
      </p>

      <h3>4.2 Website (openboxcomm.in)</h3>
      <p>
        User-generated content must follow this AUP and our <a href="/legal/community-rules">Community Rules</a>. We reserve the right to remove content at our discretion.
      </p>

      <h3>4.3 Social Media</h3>
      <p>
        This AUP applies to interactions on X, Instagram, and YouTube. Those platforms' terms also apply independently.
      </p>

      <h3>4.4 Events</h3>
      <p>
        Event participants are bound by this AUP and our <a href="/legal/event-policy">Event Policy</a>. Violations may result in removal from the event and all Open Box platforms.
      </p>

      <h2>5. Open Box Brand Usage</h2>
      <p>
        The Open Box name, logo, server identities, and visual assets are protected. These guidelines govern external use:
      </p>

      <h3>5.1 What You Can Do</h3>
      <ul>
        <li>Reference us by name in factual contexts</li>
        <li>Share our official content with proper attribution</li>
        <li>Link to openboxcomm.in or our official profiles</li>
        <li>State your participation in Open Box events</li>
      </ul>

      <h3>5.2 What You Cannot Do</h3>
      <ul>
        <li>Use our logo or visual assets without written permission from team@openboxcomm.in</li>
        <li>Imply Open Box endorses or is affiliated with your project without explicit agreement</li>
        <li>Create unofficial accounts or communities using the Open Box name or brand</li>
        <li>Modify, alter, or create derivative versions of Open Box assets</li>
        <li>Use Open Box name commercially without written permission</li>
        <li>Claim to represent Open Box unless you're an authorized team member</li>
      </ul>

      <h3>5.3 Requesting Brand Permission</h3>
      <p>
        For collaborations, projects, or fan content, contact <strong>partnerships@openboxcomm.in</strong> with details of your intended use.
      </p>

      <h2>6. Reporting Violations</h2>
      <ul>
        <li>Use the <strong>#report</strong> channel on Discord</li>
        <li>Discord's built-in message reporting feature</li>
        <li>Email <strong>admin@openboxcomm.in</strong> for serious violations</li>
      </ul>

      <h2>7. Responsible Disclosure</h2>
      <p>
        Report security vulnerabilities to <strong>admin@openboxcomm.in</strong> before public disclosure. We'll acknowledge within 2 business days.
      </p>

      <h2>8. Consequences of Violations</h2>
      <ul>
        <li>Formal warning</li>
        <li>Temporary mute or removal from channels</li>
        <li>Removal of offending content</li>
        <li>Permanent ban from all Open Box platforms</li>
        <li>Takedown requests to relevant platforms</li>
        <li>Reporting to law enforcement</li>
        <li>Legal action under Indian law</li>
      </ul>
      <p>
        Open Box reserves the right to act without prior notice in cases of serious harm. Appeal to <strong>appeals@openboxcomm.in</strong>.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        Updates will be announced via #announcements on Discord and on openboxcomm.in. Continued use constitutes acceptance of changes.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions: <strong>legal@openboxcomm.in</strong><br />
        Report violation: <strong>admin@openboxcomm.in</strong><br />
        Brand enquiries: <strong>partnerships@openboxcomm.in</strong><br />
        Appeals: <strong>appeals@openboxcomm.in</strong>
      </p>
    </article>
  )
}

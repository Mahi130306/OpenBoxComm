import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Rules — Open Box',
  description: 'Community Rules for all Open Box spaces — Discord servers, website, events, and affiliated platforms.',
}

export default function CommunityRulesPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Community Rules</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 07/07/2026</p>

      <p>
        These rules apply to <strong>all Open Box spaces</strong> — the website at{' '}
        <strong>openboxcomm.in</strong>, all Discord servers (JN, Dev, GG, Study, Connect, and any
        future servers), our official social media accounts on X, Instagram, and YouTube, all events (online,
        IRL, and hybrid), and any other platform or service we operate now or in the future. Joining or
        interacting with any Open Box platform means you agree to follow these rules.
      </p>
      <p>These rules are grounded in the following laws:</p>
      <ul>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            Indian Penal Code, 1860 (IPC)
          </a>:</u>{' '}
           covers criminal offences including defamation, obscenity, hate speech, harassment, and incitement
          to violence.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>:</u>{' '}
          — India&apos;s primary cyber law dealing with cybercrimes, electronic records, and intermediary
          liability.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2362/1/201232.pdf" target="_blank" rel="noopener noreferrer">
            POCSO Act, 2012
          </a>:</u>{' '}
          — protects children from sexual offences, abuse, and exploitation.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 19(1)(a) of the Constitution of India
          </a>:</u>{' '}
           guarantees freedom of speech and expression, subject to reasonable restrictions under Article
          19(2) including public order, decency, and the sovereignty and integrity of India.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 14 of the Constitution of India
          </a>:</u>{' '}
          — guarantees the right to equality and equal protection before the law, which underpins our
          commitment to a non-discriminatory community.
        </li>
      </ul>

      <div className="rounded-lg border border-border bg-yellow-500/10 p-4 mb-6">
        <strong>⚠️ Legal Note:</strong> Content that violates Indian law will result in an immediate permanent
        ban from all Open Box platforms and may be reported to the appropriate law enforcement authorities.
      </div>

      <h2>1. Respect &amp; Inclusion</h2>
      <ul>
        <li>Treat all members with dignity and respect, regardless of background, experience level, gender, religion, caste, or nationality.</li>
        <li>
          Harassment, bullying, targeted abuse, or hate speech is strictly prohibited. Such content may
          constitute an offence under the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            IPC, 1860
          </a></u>
          .
        </li>
        <li>Do not use discriminatory slurs, casteist language, or content that promotes communal disharmony.</li>
        <li>Constructive criticism is welcome; personal attacks are not.</li>
      </ul>

      <h2>2. Content Standards</h2>
      <ul>
        <li>Keep content relevant to the channel, server, or context in which it is posted.</li>
        <li>
          NSFW content — including explicit, sexual, violent, or gory material — is <strong>strictly
            banned</strong> across all Open Box spaces. Distribution of obscene material may be punishable
          under the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            IT Act, 2000
          </a></u>
          .
        </li>
        <li>Do not share content that glorifies or promotes self-harm, suicide, or violence on any platform.</li>
        <li>Misinformation and deliberate disinformation are prohibited. Fact-check before sharing.</li>
        <li>Political campaigning or communally sensitive content is not permitted on any Open Box platform.</li>
      </ul>

      <h2>3. Spam &amp; Self-Promotion</h2>
      <ul>
        <li>No unsolicited DMs, advertisement spam, or chain messages on Discord or any other platform.</li>
        <li>Self-promotion (projects, channels, servers, social media) is only allowed in designated channels or with moderator approval.</li>
        <li>Repeated posting of the same message or flooding channels is considered spam and will result in a mute.</li>
        <li>Phishing links, malware, or deceptive URLs will result in an immediate permanent ban from all Open Box platforms.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <ul>
        <li>Do not share pirated software, cracked tools, or illegally distributed media on any platform.</li>
        <li>When sharing others&apos; work, credit the original creator. Plagiarism is prohibited.</li>
        <li>
          Sharing copyrighted material without authorisation may be reported under the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            IT Act, 2000
          </a></u>
          and the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a></u>
          .
        </li>
      </ul>

      <h2>5. Privacy</h2>
      <ul>
        <li>Do not share personal information (phone numbers, addresses, Aadhaar, etc.) of yourself or others without explicit consent on any platform.</li>
        <li>
          Doxxing — intentionally publishing private information of others — results in an immediate permanent
          ban and may be reported under the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
            DPDP Act, 2023
          </a></u>
          and{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 21 of the Constitution
          </a></u>
          , which protects the right to privacy.
        </li>
        <li>Do not record, screenshot, or share private conversations without all parties&apos; consent.</li>
      </ul>

      <h2>6. Events</h2>
      <p>
        All participants at Open Box events — online on Discord, live on YouTube or X, or in person at an IRL
        meetup — are expected to follow these rules in full. For full details, refer to our{' '}
        <u><Link href="/legal/event-policy" className="hover:text-foreground transition-colors">Event Policy</Link></u>.
      </p>

      <h2>7. Social Media</h2>
      <p>
        When interacting with Open Box&apos;s official accounts on X, Instagram, and YouTube, these rules apply.
        Violating comments or interactions may be removed and the user may be blocked or reported to the
        respective platform.
      </p>

      <h2>8. Moderator Authority</h2>
      <ul>
        <li>Moderator decisions are final. Do not argue with moderators publicly — use the designated appeal channels.</li>
        <li>Do not attempt to bypass moderation actions using alternate accounts on any platform.</li>
        <li>Impersonating moderators, staff, or the Open Box brand is an immediate permanent ban.</li>
      </ul>

      <h2>9. Server-Specific Rules</h2>
      <p>Each Discord server has its own focus and may have additional rules. These apply on top of these general rules.</p>
      <ul>
        <li><strong>JN (Junction):</strong> General entry server. See #jn-rules on Discord.</li>
        <li><strong>Dev:</strong> Developers. See #dev-rules on Discord.</li>
        <li><strong>GG:</strong> Gaming. See #gg-rules on Discord.</li>
        <li><strong>Study:</strong> Study and accountability. See #study-rules on Discord.</li>
        <li><strong>Connect:</strong> Networking and careers. See #connect-rules on Discord.</li>
      </ul>

      <h2>10. Appeals</h2>
      <p>
        If you believe a moderation action was applied in error, appeal via the Help Centre at{' '}
        <u><Link href="/help" className="hover:text-foreground transition-colors">/help</Link></u>, the official support channel on Discord, or by emailing{' '}
        <strong>appeals@openboxcomm.in</strong>. Appeals are reviewed within 7 days.
      </p>

      <h2>11. Reporting Violations</h2>
      <p>
        Use the <strong>#report</strong> channel on any Discord server, Discord&apos;s built-in reporting, or email{' '}
        <strong>admin@openboxcomm.in</strong> for cross-platform or serious violations. For legal violations,
        report to the appropriate authorities:
      </p>
      <ul>
        <li>
          <strong>CERT-In:</strong>{' '}
          <u><a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer">cert-in.org.in</a></u>
        </li>
        <li>
          <strong>National Cyber Crime Reporting Portal:</strong>{' '}
          <u><a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></u>  
        </li>
      </ul>

      <h2>12. Amendments</h2>
      <p>
        These rules may be updated from time to time. Members will be notified via <strong>#announcements</strong>{' '}
        on Discord, on openboxcomm.in, and across our social media accounts. Continued participation
        constitutes acceptance of the updated rules.
      </p>
    </article>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Open Box',
  description: 'Terms and Conditions for using the Open Box platform, website, Discord servers, and community services.',
}

export default function TermsAndConditionsPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Terms &amp; Conditions</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 07/07/2026</p>

      <p>
        Welcome to <strong>Open Box</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms &amp; Conditions govern your
        access to and use of all Open Box platforms - including <strong>openboxcomm.in</strong>, all Discord
        servers (JN, Dev, GG, Study, Connect, and any future servers), our social media accounts on
        X, Instagram, and YouTube, all events we organise, and any other services we operate now or in the
        future (collectively, the &quot;Platform&quot;). By accessing or using any part of the Platform, you agree to
        be bound by these Terms.
      </p>
      <p>These Terms are governed by the following laws:</p>
      <ul>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            Indian Penal Code, 1860 (IPC)
          </a>:</u>{' '}
           covers criminal offences including defamation, obscenity, hate speech, harassment, and incitement.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>:</u>{' '}
           India&apos;s primary cyber law covering electronic records, digital signatures, cybercrimes, and
          intermediary liability.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">
            Digital Personal Data Protection Act, 2023 (DPDP Act)
          </a>:</u>{' '}
           India&apos;s data protection law governing how personal data is collected, processed, and safeguarded.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a>:</u>{' '}
           protects intellectual property rights in creative works including text, graphics, software, and
          original content.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15256/1/consumer_protection_act_2019.pdf" target="_blank" rel="noopener noreferrer">
            Consumer Protection Act, 2019
          </a>:</u>{' '}
           ensures consumer rights and provides remedies against unfair trade practices and deficient
          services.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15240/1/constitution_of_india.pdf" target="_blank" rel="noopener noreferrer">
            Article 19(2) of the Constitution of India
          </a>:</u>{' '}
           permits reasonable restrictions on free speech in the interests of public order, decency,
          defamation, and the sovereignty and integrity of India, forming the constitutional basis for content
          moderation.
        </li>
      </ul>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By registering, browsing, joining a Discord server, interacting on social media, or otherwise using
        any part of the Platform, you confirm that you are at least <strong>13 years of age</strong> (or the
        age of digital consent in your jurisdiction, whichever is higher), and that you agree to these Terms
        and our <u><Link href="/legal/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></u>. If you do not agree, you must immediately
        discontinue use of all Open Box platforms.
      </p>

      <h2>2. Description of Services</h2>
      <p>Open Box is an umbrella community operating across:</p>
      <ul>
        <li><strong>openboxcomm.in</strong> : the central website with blogs, events, documentation, and community resources</li>
        <li><strong>Discord servers</strong> : JN (general entry), Dev (developers), GG (gaming), Study (study and accountability), Connect (networking and careers)</li>
        <li><strong>Social media</strong> : official accounts on X, Instagram, and YouTube</li>
        <li><strong>Events</strong> : online workshops, IRL meetups, hackathons, and contests</li>
        <li><strong>Future platforms</strong> : any additional services or platforms launched under the Open Box brand</li>
      </ul>
      <p>We reserve the right to modify, suspend, or discontinue any part of the Platform at any time.</p>

      <h2>3. User Accounts &amp; Eligibility</h2>
      <ul>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li>You must provide accurate and truthful information during registration on any platform.</li>
        <li>You must not impersonate any person, entity, or the Open Box brand on any platform.</li>
        <li>Accounts may be suspended or terminated across all Open Box platforms for violations of these Terms, our <u><Link href="/legal/community-rules" className="hover:text-foreground transition-colors">Community Rules</Link></u>, our <u><Link href="/legal/acceptable-use-policy" className="hover:text-foreground transition-colors">Acceptable Use Policy</Link></u>, or applicable Indian law.</li>
      </ul>

      <h2>4. Prohibited Conduct</h2>
      <p>
        Detailed prohibited conduct is covered in our <u><Link href="/legal/acceptable-use-policy" className="hover:text-foreground transition-colors">Acceptable Use Policy</Link></u>. In
        summary, you must not:
      </p>
      <ul>
        <li>Post or share content that is illegal, defamatory, obscene, hateful, or harassing under the <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">IPC, 1860</a></u> or the <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">IT Act, 2000</a></u></li>
        <li>Violate any intellectual property rights of Open Box or third parties</li>
        <li>Attempt to hack, disrupt, or reverse-engineer any part of the Platform</li>
        <li>Use automated tools to scrape or harvest data from any Open Box platform without written permission</li>
        <li>Engage in any activity constituting a cybercrime under the <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">IT Act, 2000</a></u> or the <u><a href="https://www.indiacode.nic.in/bitstream/123456789/20168/1/2023_Act_22_Digital_Personal_Data_Protection_Act.pdf" target="_blank" rel="noopener noreferrer">DPDP Act, 2023</a></u></li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on the Platform - including logos, server identities, text, graphics, and software - is
        the property of Open Box or its licensors and is protected under the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
          Copyright Act, 1957
        </a></u>
        . For permitted uses of Open Box branding, refer to our{' '}
        <u><Link href="/legal/acceptable-use-policy" className="hover:text-foreground transition-colors">Acceptable Use Policy</Link></u>.
      </p>

      <h2>6. User-Generated Content</h2>
      <p>
        By submitting content to any Open Box platform, you grant Open Box a non-exclusive, royalty-free,
        worldwide licence to use, display, and distribute such content in connection with the Platform across
        our website, Discord servers, and social media. You retain ownership but warrant that your content
        does not infringe any third-party rights.
      </p>

      <h2>7. Events</h2>
      <p>
        Participation in Open Box events - online workshops, IRL meetups, hackathons, contests, and live
        streams - is subject to our <u><Link href="/legal/event-policy" className="hover:text-foreground transition-colors">Event Policy</Link></u>, which forms part of these
        Terms.
      </p>

      <h2>8. Payments &amp; Refunds</h2>
      <p>
        Payments made to Open Box across any channel are subject to our{' '}
        <u><Link href="/legal/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link></u>, governed by the{' '}
        <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15256/1/consumer_protection_act_2019.pdf" target="_blank" rel="noopener noreferrer">
          Consumer Protection Act, 2019
        </a></u>  
        .
      </p>

      <h2>9. Acceptable Use</h2>
      <p>
        Use of all Open Box platforms is subject to our{' '}
        <u><Link href="/legal/acceptable-use-policy" className="hover:text-foreground transition-colors">Acceptable Use Policy</Link></u>, which covers permitted uses, prohibited conduct, brand
        usage guidelines, and responsible disclosure.
      </p>

      <h2>10. Disclaimers &amp; Limitation of Liability</h2>
      <p>
        The Platform is provided &quot;as is&quot; without warranties of any kind. Open Box shall not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of any Open Box
        platform, to the maximum extent permitted under the{' '}
        <u> <a href="https://www.indiacode.nic.in/bitstream/123456789/15256/1/consumer_protection_act_2019.pdf" target="_blank" rel="noopener noreferrer">
          Consumer Protection Act, 2019
        </a> </u>
        .
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Open Box, its moderators, and team members from any claims,
        losses, or damages (including legal fees) arising out of your violation of these Terms or applicable
        law on any Open Box platform.
      </p>

      <h2>12. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the Republic of India. Any dispute shall be subject to the
        exclusive jurisdiction of the competent courts in <strong>India</strong>. The parties shall first
        attempt to resolve disputes amicably through good-faith negotiation.
      </p>

      <h2>13. Changes to Terms</h2>
      <p>
        We reserve the right to update these Terms at any time. We will notify users via the website,
        #announcements on Discord, and our social media accounts for significant changes. Continued use of any
        Open Box platform constitutes acceptance of the updated Terms.
      </p>

      <h2>14. Contact</h2>
      <p>For questions regarding these Terms: <strong><a href="mailto:legal@openboxcomm.in">legal@openboxcomm.in</a></strong></p>
    </article>
  )
}

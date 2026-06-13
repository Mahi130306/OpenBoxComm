import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events Policy — Open Box',
  description: 'Events Policy for Open Box — rules, conduct, cancellations, and terms for all Open Box events.',
}

export default function EventsPage() {
  const lastUpdated = '6 June 2025'

  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Events Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

      <p>
        This Events Policy applies to all events organised or co-hosted by Open Box across any of our
        platforms — including online events announced on <strong>openboxcomm.in</strong>, across our Discord
        servers (JN, Dev, GG, Classic, Study, Connect), our social media accounts on X, Instagram, and
        YouTube, and any in-person events we run. By registering for or participating in any Open Box event,
        you agree to this policy, our <u> <a href="/legal/rules">Community Rules</a></u>, our{' '}
        <u><a href="/legal/aup">Acceptable Use Policy</a></u>, and our{' '}
        <u><a href="/legal/terms">Terms &amp; Conditions</a></u>.
      </p>
      <p>This policy is governed by the following laws:</p>
      <ul>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            Indian Penal Code, 1860 (IPC)
          </a>:</u>{' '}
           covers criminal offences including harassment, threatening behaviour, and incitement that may
          occur at or in connection with events.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            Information Technology Act, 2000
          </a>:</u>{' '}
           applies to online events and any cybercrimes, harassment, or illegal conduct occurring through
          digital platforms.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a>:</u>{' '}
           protects ownership rights in work submitted to hackathons and contests; participants retain
          ownership of their submissions.
        </li>
        <li>
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/15256/1/consumer_protection_act_2019.pdf" target="_blank" rel="noopener noreferrer">
            Consumer Protection Act, 2019
          </a>:</u>{' '}
           governs refund rights for paid event registrations.
        </li>
      </ul>

      <h2>1. Types of Events</h2>
      <ul>
        <li><strong>Online Events &amp; Workshops</strong> — virtual sessions covering development, building, career, and tech topics, run across our website and Discord servers</li>
        <li><strong>IRL Meetups</strong> — in-person community gatherings in Indian cities, subject to city-specific logistics and venue capacity</li>
        <li><strong>Hackathons &amp; Contests</strong> — timed competitive events, online or hybrid, with defined rules and judging criteria, open to members across all our servers and platforms</li>
        <li><strong>Community Streams &amp; Live Events</strong> — live sessions on YouTube, X, or Discord Stage channels, open to the broader community</li>
      </ul>

      <h2>2. Registration &amp; Eligibility</h2>
      <ul>
        <li>Registrations are first-come, first-served unless stated otherwise in the event announcement.</li>
        <li>Some events may have eligibility criteria (e.g. student status, server membership, skill level, or location) — stated clearly in the announcement on the relevant platform.</li>
        <li>For Discord-based events, you may need to be a member of a specific server.</li>
        <li>Open Box reserves the right to limit registrations, maintain waitlists, or close registrations early.</li>
        <li>For IRL events, registration confirmation does not guarantee entry if you arrive late or venue capacity is reached.</li>
      </ul>

      <h2>3. Code of Conduct at Events</h2>
      <p>
        All participants — whether attending online via Discord, watching on YouTube or X, or present at an
        IRL meetup — are expected to follow our <a href="/legal/rules">Community Rules</a> at all times.
        Additionally:
      </p>
      <ul>
        <li>
          Harassment, discrimination, or disruptive behaviour will result in immediate removal and may result
          in a permanent ban from all Open Box platforms. Serious incidents may be reported under the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/2263/1/A1860-45.pdf" target="_blank" rel="noopener noreferrer">
            IPC, 1860
          </a></u>
          or the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf" target="_blank" rel="noopener noreferrer">
            IT Act, 2000
          </a></u>
          .
        </li>
        <li>For IRL events, participants must comply with the venue&apos;s own rules and applicable local regulations.</li>
        <li>For online events on Discord, standard server rules apply in addition to any event-specific rules.</li>
        <li>For live streams on YouTube or X, comments and interactions are subject to our Community Rules and the respective platform&apos;s terms of service.</li>
        <li>Recording or photographing other participants without their consent is prohibited across all formats.</li>
        <li>Open Box may record or photograph events for content across our website, Discord, and social media. To opt out, notify us at <strong>team@openboxcomm.in</strong> before the event.</li>
      </ul>

      <h2>4. Hackathons &amp; Contests</h2>
      <ul>
        <li>All submissions must be original work created during the event window unless stated otherwise.</li>
        <li>Participants may be required to share code, demos, or documentation as part of judging.</li>
        <li>Open Box&apos;s judges and organiser decisions are final across all formats.</li>
        <li>Prizes, if applicable, will be communicated in the event announcement. We are not responsible for delays caused by third-party prize delivery or payment processing.</li>
        <li>
          Participants grant Open Box a non-exclusive licence to feature their submissions in community
          content across our website, Discord, X, Instagram, and YouTube. Ownership of the work remains with
          the participant under the{' '}
          <u><a href="https://www.indiacode.nic.in/bitstream/123456789/1367/1/a1957-14.pdf" target="_blank" rel="noopener noreferrer">
            Copyright Act, 1957
          </a></u>
          .
        </li>
      </ul>

      <h2>5. Cancellations &amp; Changes</h2>
      <ul>
        <li>Open Box reserves the right to cancel, postpone, or change the format of any event at any time.</li>
        <li>Cancellations or significant changes will be announced via #announcements on the relevant Discord server, on openboxcomm.in, and on our social media accounts.</li>
        <li>If Open Box cancels an event, registered participants are eligible for a full refund as per our <u><a href="/legal/refunds">Refund Policy</a></u>.</li>
        <li>We are not responsible for any travel, accommodation, or other costs incurred in anticipation of an IRL event.</li>
      </ul>

      <div
        style={{
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '12px 16px',
          margin: '24px 0',
          background: 'rgba(255,200,0,0.06)',
        }}
      >
        <strong>⚠️ IRL Events:</strong> Open Box events are community-run and provided in good faith. We are
        not liable for any loss, damage, or injury sustained at or in connection with an in-person event.
        Participants attend IRL events at their own risk and are responsible for their own travel and safety.
      </div>

      <h2>6. Liability</h2>
      <p>Open Box is not liable for:</p>
      <ul>
        <li>Any loss, damage, or injury sustained at or in connection with any event format</li>
        <li>Third-party venues, platforms (Discord, YouTube, X), or services used to host the event</li>
        <li>Technical issues affecting online event delivery across any platform</li>
        <li>Actions of third-party co-organisers or sponsors</li>
      </ul>

      <h2>7. Photography &amp; Media</h2>
      <p>
        Open Box may capture photos, videos, or audio at events — including screenshots of online sessions and
        recordings of live streams — for use across our website, Discord, X, Instagram, and YouTube. By
        participating, you consent to this unless you have opted out in writing before the event begins.
      </p>

      <h2>8. Contact</h2>
      <p>For event questions or media opt-out: <strong><a href="mailto:team@openboxcomm.in">team@openboxcomm.in</a></strong></p>
    </article>
  )
}
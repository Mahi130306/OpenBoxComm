import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Event Policy - Open Box',
  description: 'Event Policy for Open Box - rules, conduct, cancellations, and terms for all Open Box events.',
}

export default function EventPolicyPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Event Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: 07/07/2026</p>

      <p>
        This Event Policy applies to all events organised or co-hosted by Open Box across any of our
        platforms - including online events announced on <strong>openboxcomm.in</strong>, across our Discord
        servers, our social media accounts on X, Instagram, and YouTube, and any in-person events we run. By registering for or participating in any Open Box event,
        you agree to this policy, our <Link href="/legal/community-rules" className="underline hover:text-foreground transition-colors">Community Rules</Link>, our{' '}
        <Link href="/legal/acceptable-use-policy" className="underline hover:text-foreground transition-colors">Acceptable Use Policy</Link>, and our{' '}
        <Link href="/legal/terms-and-conditions" className="underline hover:text-foreground transition-colors">Terms &amp; Conditions</Link>.
      </p>

      <h2>1. Types of Events</h2>
      <ul>
        <li><strong>Online Workshops</strong> - virtual sessions covering development, building, career, and tech topics</li>
        <li><strong>In-Person Meetups</strong> - community gatherings in Indian cities</li>
        <li><strong>Hackathons &amp; Contests</strong> - timed competitive events with defined rules and judging</li>
        <li><strong>Live Streams</strong> - sessions on YouTube, X, or Discord Stage channels</li>
      </ul>

      <h2>2. Registration &amp; Eligibility</h2>
      <ul>
        <li>Registrations are first-come, first-served unless stated otherwise</li>
        <li>Some events may have eligibility criteria (student status, server membership, skill level, location) stated in the announcement</li>
        <li>For Discord-based events, you may need to be a member of a specific server</li>
        <li>Open Box reserves the right to limit registrations or maintain waitlists</li>
        <li>For in-person events, registration confirmation does not guarantee entry if capacity is reached</li>
      </ul>

      <h2>3. Code of Conduct at Events</h2>
      <p>
        All participants - online or in-person - must follow our <Link href="/legal/community-rules" className="underline hover:text-foreground transition-colors">Community Rules</Link>.
      </p>
      <ul>
        <li>Harassment, discrimination, or disruptive behaviour results in immediate removal and potential permanent ban</li>
        <li>For in-person events, participants must comply with venue rules and local regulations</li>
        <li>Recording or photographing other participants without consent is prohibited</li>
        <li>Open Box may record or photograph events for content. To opt out, notify us at team@openboxcomm.in before the event</li>
      </ul>

      <h2>4. Hackathons &amp; Contests</h2>
      <ul>
        <li>All submissions must be original work created during the event window unless stated otherwise</li>
        <li>Participants may need to share code, demos, or documentation for judging</li>
        <li>Open Box judges' decisions are final</li>
        <li>Prizes, if applicable, will be communicated in the event announcement</li>
        <li>Participants grant Open Box a non-exclusive license to feature submissions across our platforms</li>
        <li>You retain ownership of your work under the Copyright Act, 1957</li>
      </ul>

      <h2>5. Cancellations &amp; Changes</h2>
      <ul>
        <li>Open Box reserves the right to cancel, postpone, or change event format at any time</li>
        <li>Cancellations will be announced via #announcements on Discord, openboxcomm.in, and social media</li>
        <li>Registered participants are eligible for a full refund if Open Box cancels</li>
        <li>We are not responsible for travel, accommodation, or other costs incurred for in-person events</li>
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
        <strong>⚠️ In-Person Events:</strong> Open Box events are community-run and provided in good faith. We
        are not liable for loss, damage, or injury at or in connection with in-person events. Participants
        attend at their own risk and are responsible for their own travel and safety.
      </div>

      <h2>6. Liability</h2>
      <p>Open Box is not liable for:</p>
      <ul>
        <li>Any loss, damage, or injury at or in connection with events</li>
        <li>Third-party venues, platforms (Discord, YouTube, X), or services used to host events</li>
        <li>Technical issues affecting online event delivery</li>
        <li>Actions of third-party co-organizers or sponsors</li>
      </ul>

      <h2>7. Photography &amp; Media</h2>
      <p>
        Open Box may capture photos, videos, or audio at events for use across our website, Discord, X, Instagram, and YouTube.
        By participating, you consent unless you opt out in writing before the event begins.
      </p>

      <h2>8. Contact</h2>
      <p>For event questions or media opt-out: <strong>team@openboxcomm.in</strong></p>
    </article>
  )
}

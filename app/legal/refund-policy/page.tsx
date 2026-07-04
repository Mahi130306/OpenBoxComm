import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy — Open Box',
  description: 'Refund Policy for Open Box — how we handle refund requests for Patreon, UPI, and other payment channels.',
}

export default function RefundPolicyPage() {
  return (
    <article>
      <h1 className="!text-3xl !font-extrabold mb-1">Refund Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <p>
        This Refund Policy applies to any financial contributions or payments made to Open Box across any of
        our platforms — including Patreon memberships, paid event registrations on{' '}
        <strong>tickets.openboxcomm.in</strong>, UPI payments, and any other payment channels we introduce. It is
        governed by the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/15256/1/consumer_protection_act_2019.pdf" target="_blank" rel="noopener noreferrer">
          Consumer Protection Act, 2019
        </a>{' '}
        — which ensures consumer rights and provides remedies against unfair trade practices and deficient
        services — and applicable Indian regulations.
      </p>

      <div
        style={{
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '12px 16px',
          marginBottom: '24px',
          background: 'rgba(100,200,100,0.05)',
        }}
      >
        <strong>ℹ️ Nature of Contributions:</strong> Open Box is a free, open community. Payments made via
        Patreon are voluntary donations or memberships to support the community — they do not constitute
        payment for a specific product or service. Paid event registrations and supporter tiers, where
        applicable, are governed by the terms presented at the time of purchase.
      </div>

      <h2>1. General Refund Eligibility</h2>
      <ul>
        <li>
          <strong>Patreon memberships:</strong> Patreon handles billing and processes charges at the start of
          each billing period. Refunds are governed by{' '}
          <a href="https://support.patreon.com/hc/en-us/articles/204606125" target="_blank" rel="noopener noreferrer">
            Patreon&apos;s Refund Policy
          </a>
          . Contact Patreon support directly. We will assist where we can if you reach out to us as well.
        </li>
        <li>
          <strong>One-time donations (Patreon or direct):</strong> We will consider refund requests for
          donations made in error, within <strong>7 days</strong> of the transaction, subject to review.
        </li>
        <li>
          <strong>UPI and direct payments:</strong> Payments via UPI or any direct channel are considered
          final at transfer. Refunds are only considered for verified technical errors or duplicate charges,
          submitted within <strong>7 days</strong>.
        </li>
        <li>
          <strong>Future payment gateways:</strong> As we expand payment options, refund terms for new
          channels will be published alongside them. Where not explicitly stated, this policy applies.
        </li>
      </ul>

      <h2>2. Non-Refundable Situations</h2>
      <p>Refunds will <strong>not</strong> be issued in the following situations:</p>
      <ul>
        <li>Voluntary cancellation after a billing cycle has already completed</li>
        <li>Dissatisfaction with content that was fully accessible during the membership or subscription period</li>
        <li>Account suspension or ban from any Open Box platform due to violations of our <a href="/legal/community-rules">Community Rules</a>, <a href="/legal/acceptable-use-policy">Acceptable Use Policy</a>, or <a href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li>
        <li>Donations or payments made more than 7 days prior to the refund request</li>
        <li>Change of mind after an event has taken place or event materials have been distributed</li>
      </ul>

      <h2>3. Event Ticket Refunds</h2>
      <p>For paid events hosted by Open Box across any of our platforms:</p>
      <ul>
        <li>Cancellations more than <strong>7 days</strong> before the event are eligible for a full refund</li>
        <li>Cancellations within 7 days of the event are not eligible, but we may offer a credit or transfer at our discretion</li>
        <li>If Open Box cancels or postpones an event, all registered participants receive a full refund or transfer to the rescheduled date</li>
        <li>Event refunds follow the same 5 to 10 business day processing window</li>
      </ul>

      <h2>4. How to Request a Refund</h2>
      <p>Contact us at <strong>support@openboxcomm.in</strong> with:</p>
      <ol>
        <li>Your name and email address used for the transaction</li>
        <li>Transaction ID, Patreon receipt, or UPI reference number</li>
        <li>The platform or channel through which the payment was made</li>
        <li>Date of transaction and amount</li>
        <li>Reason for the refund request</li>
      </ol>
      <p>We will respond within <strong>10 business days</strong>.</p>

      <h2>5. Processing Refunds</h2>
      <p>
        Approved refunds will be processed to the original payment method within{' '}
        <strong>5 to 10 business days</strong>. We are not responsible for delays caused by the payment
        intermediary. UPI refunds may take up to 5 business days depending on your bank.
      </p>

      <h2>6. Consumer Rights</h2>
      <p>
        Under the{' '}
        <a href="https://www.indiacode.nic.in/bitstream/123456789/15256/1/consumer_protection_act_2019.pdf" target="_blank" rel="noopener noreferrer">
          Consumer Protection Act, 2019
        </a>
        , you have rights regarding unfair trade practices and deficient services. If you believe your
        consumer rights have been violated, you may approach:
      </p>
      <ul>
        <li><strong>District Consumer Disputes Redressal Commission</strong> — for claims up to ₹50 lakhs</li>
        <li><strong>State Consumer Disputes Redressal Commission</strong> — for claims between ₹50 lakhs and ₹2 crores</li>
        <li><strong>National Consumer Disputes Redressal Commission</strong> — for claims above ₹2 crores</li>
        <li>
          <strong>National Consumer Helpline:</strong>{' '}
          <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer">consumerhelpline.gov.in</a>{' '}
          | 1800-11-4000
        </li>
      </ul>

      <h2>7. Changes to This Policy</h2>
      <p>
        We reserve the right to update this Refund Policy at any time. The updated policy will be posted here
        with a revised &quot;Last updated&quot; date.
      </p>

      <h2>8. Contact</h2>
      <p>For refund inquiries: <strong>support@openboxcomm.in</strong></p>
    </article>
  )
}

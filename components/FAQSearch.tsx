'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const faqs = [
  {
    question: 'How do I join Open Box?',
    answer:
      'Go to openboxcomm.in/join and click the invite link. It takes you to OB Junction. Complete the onboarding flow and you are in. From there you can pick the server that fits what you want to do: Jn. for community, Dev for coding, or GG for gaming.',
    tags: ['join', 'discord', 'servers'],
  },
  {
    question: 'Which server should I start with?',
    answer:
      'Start with Jn. if you are unsure. It is the main community room and people can point you toward Dev, GG, or upcoming spaces. You do not need to join all of them at once.',
    tags: ['servers', 'jn'],
  },
  {
    question: 'Can I share my project or service?',
    answer:
      'Yes, in the right channels. Share a short description, a screenshot or link, and the kind of feedback you want. Work in progress is welcome. Cold promotion, affiliate links, and dropping unrelated links in general chat is not allowed.',
    tags: ['projects', 'feedback', 'promotion'],
  },
  {
    question: 'How do events work and how do I register?',
    answer:
      'Events appear on the Events page with time, location, and agenda. Most events happen on Discord voice or stage channels. Event registration happens at tickets.openboxcomm.in. Log in with Discord, find the event, and claim or buy a ticket.',
    tags: ['events', 'calendar', 'registration', 'tickets'],
  },
  {
    question: 'Is Open Box free? Is support paid?',
    answer:
      'Yes. All Open Box Discord servers are free to join and use. Community help is free and volunteer-run. Supporter tiers (NPC, Rookie, GOAT, Legend) are optional and available through Patreon for people who want to support the community and get additional perks.',
    tags: ['support', 'tiers', 'free', 'patreon'],
  },
  {
    question: 'Where are the rules?',
    answer:
      'The full community rules live in the documentation at /doc/rules.',
    tags: ['rules', 'docs'],
  },
  {
    question: 'Do I need to join all the servers?',
    answer: 'No. Start with Junction and join others when you find something relevant to you. You can be in all of them at once or just one.',
    tags: ['servers', 'junction'],
  },
  {
    question: 'What is OB Study and OB GG?',
    answer: 'OB Study is a server for learning and accountability (Alpha). OB GG is the gaming server (Beta). Both are open to join but still taking shape.',
    tags: ['study', 'gg', 'alpha', 'beta'],
  },
  {
    question: 'How do I get a supporter role?',
    answer: 'Go to openboxcomm.in/tiers, pick a tier on Patreon, and connect your Discord account to Patreon. The role gets assigned automatically.',
    tags: ['supporter', 'tiers', 'patreon', 'roles'],
  },
  {
    question: 'I got muted or banned. What do I do?',
    answer: 'If you think it was a mistake, email appeals@openboxcomm.in with your Discord username, the server, and what happened.',
    tags: ['moderation', 'ban', 'mute', 'appeal'],
  },
  {
    question: 'How do I contact the team?',
    answer: 'For general questions: hello@openboxcomm.in. For support issues: support@openboxcomm.in. For moderation appeals: appeals@openboxcomm.in. For partnerships: partnerships@openboxcomm.in.',
    tags: ['contact', 'team', 'email', 'support'],
  },
]

export function FAQSearch() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const handle = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300)
    return () => window.clearTimeout(handle)
  }, [query])

  const filteredFaqs = useMemo(() => {
    if (!debouncedQuery) return faqs
    return faqs.filter((faq) => {
      const haystack = `${faq.question} ${faq.answer} ${faq.tags.join(' ')}`.toLowerCase()
      return haystack.includes(debouncedQuery)
    })
  }, [debouncedQuery])

  return (
    <div>
      <div className="relative mb-8">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search questions, topics, or server names..."
          className="bg-surface pl-10"
        />
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center">
          <h2 className="mb-2 text-2xl">No answers found</h2>
          <p className="text-muted-foreground">Try searching for Discord, events, rules, projects, or support.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-border bg-surface p-5">
              <h2 className="mb-2 text-2xl">{faq.question}</h2>
              <p className="text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

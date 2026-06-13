'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const faqs = [
  {
    question: 'How do I join Open Box?',
    answer:
      'Use the Discord invite from the site, then pick the server that fits what you want to do: Jn. for community, Dev for coding, or GG for gaming.',
    tags: ['join', 'discord', 'servers'],
  },
  {
    question: 'Which server should I start with?',
    answer:
      'Start with Jn. if you are unsure. It is the main community room and people can point you toward Dev, GG, or upcoming spaces.',
    tags: ['servers', 'jn'],
  },
  {
    question: 'Can I share my project?',
    answer:
      'Yes. Share a short description, a screenshot or link, and the kind of feedback you want. Work in progress is welcome.',
    tags: ['projects', 'feedback'],
  },
  {
    question: 'How do events work?',
    answer:
      'Events appear on the Events page with time, location, and agenda. Most events happen on Discord voice or stage channels.',
    tags: ['events', 'calendar'],
  },
  {
    question: 'Is support paid?',
    answer:
      'Community help is free and volunteer-run. Supporter tiers help keep the community running, but they are not required to participate.',
    tags: ['support', 'tiers'],
  },
  {
    question: 'Where are the rules?',
    answer:
      'The full community rules live in the documentation at /doc/rules.',
    tags: ['rules', 'docs'],
  },
]

export function FAQSearch() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const handle = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 250)
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

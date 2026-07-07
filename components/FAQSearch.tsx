'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export const FAQ_CATEGORIES = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    items: [
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
        question: 'Do I need to join all the servers?',
        answer:
          'No. Start with Junction and join others when you find something relevant to you. You can be in all of them at once or just one.',
        tags: ['servers', 'junction'],
      },
    ],
  },
  {
    id: 'servers',
    label: 'Our Servers',
    items: [
      {
        question: 'What is OB Junction (Jn.)?',
        answer:
          'Junction is the main entry point for Open Box. It is the community hub where everything starts. New members land here first, complete onboarding, and get pointed to the right server for their interests. General discussion, announcements, and events all come through Junction.',
        tags: ['junction', 'jn', 'entry', 'onboarding', 'main'],
      },
      {
        question: 'What is OB Dev and who is it for?',
        answer:
          'OB Dev is the builders server inside Open Box. It is for developers, designers, and anyone actively working on projects. You will find channels for code help, project feedback, tool discussions, and collabs. If you are building something or learning to build, this is the right place.',
        tags: ['dev', 'developers', 'builders', 'coding', 'projects'],
      },
      {
        question: 'What is OB Connect and who is it for?',
        answer:
          'OB Connect (formerly OB Network) is the networking-focused server. It is for professionals, freelancers, and students who want to meet people, find opportunities, and grow their network. Still taking shape but open to join.',
        tags: ['connect', 'network', 'networking', 'professionals'],
      },
      {
        question: 'What is OB Study and OB GG?',
        answer:
          'OB Study is a server for learning and accountability (Alpha). OB GG is the gaming server (Beta). Both are open to join but still taking shape.',
        tags: ['study', 'gg', 'alpha', 'beta'],
      },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    items: [
      {
        question: 'How do events work and how do I register?',
        answer:
          'Events appear on the Events page with time, location, and agenda. Most events happen on Discord voice or stage channels. Event registration happens at tickets.openboxcomm.in. Log in with Discord, find the event, and claim or buy a ticket.',
        tags: ['events', 'calendar', 'registration', 'tickets'],
      },
      {
        question: 'What kind of events does Open Box run?',
        answer:
          'Open Box runs a mix of events: AMAs, dev showcases, gaming sessions, study rooms, and networking meetups. Some are free, some may be ticketed. Events are announced in Discord and listed on the Events page on the website.',
        tags: ['events', 'ama', 'gaming', 'showcase', 'networking', 'study'],
      },
      {
        question: 'Can I suggest a new event or initiative?',
        answer:
          'Yes. Drop your idea in the suggestions or feedback channel in Junction or Dev. If you want to run something yourself and need support, reach out to the team at team@openboxcomm.in.',
        tags: ['suggest', 'events', 'initiative', 'feedback', 'ideas'],
      },
    ],
  },
  {
    id: 'support-tiers',
    label: 'Support & Tiers',
    items: [
      {
        question: 'Is Open Box free? Is support paid?',
        answer:
          'Yes. All Open Box Discord servers are free to join and use. Community help is free and volunteer-run. Supporter tiers (NPC, Rookie, GOAT, Legend) are optional and available through Patreon for people who want to support the community and get additional perks.',
        tags: ['support', 'tiers', 'free', 'patreon'],
      },
      {
        question: 'How do I get a supporter role?',
        answer:
          'Go to openboxcomm.in/tiers, pick a tier on Patreon, and connect your Discord account to Patreon. The role gets assigned automatically.',
        tags: ['supporter', 'tiers', 'patreon', 'roles'],
      },
      {
        question: 'What are the supporter tiers and what do I get?',
        answer:
          'There are four supporter tiers: NPC, Rookie, GOAT, and Legend. Each tier comes with a unique Discord role, priority access to certain channels or events, and recognition inside the community. Tiers are available through Patreon. Higher tiers include more perks. Check openboxcomm.in/tiers for the full breakdown.',
        tags: ['tiers', 'npc', 'rookie', 'goat', 'legend', 'patreon', 'perks', 'supporter'],
      },
      {
        question: 'Can I support without Patreon?',
        answer:
          'No, Patreon is the only official way to support Open Box. It funds hosting, domain, and operations. Every contribution helps keep Open Box free and running.',
        tags: ['support', 'patreon', 'funding'],
      },
      {
        question: 'Why the tiers in dollars($)?',
        answer:
          'Because Patreon only supports USD. Open Box is international and welcomes members from all countries. The tiers are priced in USD but you can pay with any currency through Patreon.',
        tags: ['tiers', 'patreon', 'currency', 'usd'],
      },
      {
        question: 'What are the benefits of each tier?',
        answer:
          'Each tier comes with a unique Discord role, priority access to certain channels or events, and recognition inside the community. Higher tiers include more perks. Check openboxcomm.in/tiers for the full breakdown.',
        tags: ['tiers', 'benefits', 'perks', 'supporter'],
      },
      {
        question: 'Why support tier start from 1$?',
        answer:
          'Open Box is free and volunteer-run. The $1 tier is the minimum to support the community and help cover hosting, domain, and operations. Every contribution, big or small, keeps Open Box free and running.',
        tags: ['tiers', 'support', 'funding']
      },
      {
        question: 'How do I contact the team?',
        answer:
          'For general questions: hello@openboxcomm.in. For support issues: support@openboxcomm.in. For moderation appeals: appeals@openboxcomm.in. For partnerships: partnerships@openboxcomm.in.',
        tags: ['contact', 'team', 'email', 'support'],
      },
    ],
  },
  {
    id: 'rules-moderation',
    label: 'Rules & Moderation',
    items: [
      {
        question: 'Where are the rules?',
        answer: 'The full community rules live in the documentation at /doc/rules.',
        tags: ['rules', 'docs'],
      },
      {
        question: 'Is there a code of conduct?',
        answer:
          'Yes. The full Acceptable Use Policy and community rules are documented at openboxcomm.in/docs. The short version: be respectful, no spam, no hate speech, no unsolicited promotion, no doxxing. Violations are handled by moderators.',
        tags: ['conduct', 'rules', 'aup', 'policy', 'moderation'],
      },
      {
        question: 'How do I report someone breaking the rules?',
        answer:
          'Use the report function inside Discord or ping a moderator in the relevant server. For serious issues, email support@openboxcomm.in with the server name, username, and a description of what happened. Do not publicly call people out in general channels.',
        tags: ['report', 'moderation', 'rules', 'violation', 'safety'],
      },
      {
        question: 'I got muted or banned. What do I do?',
        answer:
          'If you think it was a mistake, email appeals@openboxcomm.in with your Discord username, the server, and what happened.',
        tags: ['moderation', 'ban', 'mute', 'appeal'],
      },
      {
        question: 'What happens if I violate the rules?',
        answer:
          'Depending on the severity: a warning, a temporary mute, or a ban. Repeated minor violations escalate. Serious violations like harassment or hate speech result in an immediate ban. Appeals go to appeals@openboxcomm.in.',
        tags: ['rules', 'violation', 'ban', 'mute', 'warning', 'moderation'],
      },
    ],
  },
  {
    id: 'community-projects',
    label: 'Community & Projects',
    items: [
      {
        question: 'Can I share my project or service?',
        answer:
          'Yes, in the right channels. Share a short description, a screenshot or link, and the kind of feedback you want. Work in progress is welcome. Cold promotion, affiliate links, and dropping unrelated links in general chat is not allowed.',
        tags: ['projects', 'feedback', 'promotion'],
      },
      {
        question: 'How do I get feedback on my project or portfolio?',
        answer:
          'Post in the project-feedback or showcase channels inside OB Dev. Include what you built, what stage it is at, and the specific kind of feedback you want. Vague "thoughts?" posts get less useful responses than specific questions.',
        tags: ['feedback', 'portfolio', 'project', 'showcase', 'dev'],
      },
      {
        question: 'Can I promote my YouTube channel, newsletter, or social account?',
        answer:
          'There are designated self-promotion channels in some servers for this. Drop a short intro, what your content is about, and a link. Repeated posting of the same link or posting it in unrelated channels is not allowed.',
        tags: ['promotion', 'youtube', 'social', 'self-promotion', 'newsletter'],
      },
      {
        question: 'Can I collaborate with someone I meet here?',
        answer:
          'Yes, that is one of the main reasons Open Box exists. You can post in project or collab channels in Dev or Connect, reach out via DM after interacting in a channel, or ask for intros in the relevant server. Keep collabs professional and respect the other person\'s time and boundaries.',
        tags: ['collab', 'collaboration', 'team', 'dev', 'connect'],
      },
      {
        question: 'What is the DBW post?',
        answer:
          'DBW stands for Day Before Weekend. It is a weekly update posted every Friday across Open Box servers and the blog. It covers what happened that week, upcoming events, server news, and anything the team wants to highlight. A good way to stay in the loop without reading every channel.',
        tags: ['dbw', 'weekly', 'update', 'friday', 'news'],
      },
      {
        question: 'Can I become a moderator or volunteer?',
        answer:
          'Open Box occasionally opens applications for moderators and community contributors. Watch the announcements channel in Junction or the blog for any open calls. You can also express interest by emailing team@openboxcomm.in.',
        tags: ['moderator', 'volunteer', 'team', 'contribute', 'staff'],
      },
      {
        question: 'How do I stay updated without checking Discord every day?',
        answer:
          'Subscribe to the DBW blog posts on openboxcomm.in for weekly recaps. Follow Open Box on Instagram or X for shorter updates. The blog covers major announcements, events, and server news.',
        tags: ['updates', 'blog', 'dbw', 'instagram', 'twitter', 'x'],
      },
    ],
  },
  {
    id: 'about',
    label: 'About Open Box',
    items: [
      {
        question: 'Is Open Box affiliated with any company or university?',
        answer:
          'No. Open Box is an independent community. It is not affiliated with any company, university, or institution. It is built and run by volunteers.',
        tags: ['affiliation', 'independent', 'company', 'university'],
      },
      {
        question: 'Does Open Box have a privacy policy?',
        answer:
          'Yes. The full Privacy Policy is at openboxcomm.in/legal/privacy-policy. Open Box does not sell your data. The site uses Supabase for backend and Vercel for hosting. Email communications are handled through Zoho Mail.',
        tags: ['privacy', 'policy', 'data', 'legal'],
      },
      {
        question: 'Is there a mobile app?',
        answer:
          'No dedicated mobile app. Open Box runs on Discord, which has a solid mobile app on iOS and Android. The website openboxcomm.in is fully responsive and works on mobile browsers.',
        tags: ['mobile', 'app', 'discord', 'android', 'ios'],
      },
    ],
  },
]

export function FAQSearch() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const handle = window.setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300)
    return () => window.clearTimeout(handle)
  }, [query])

  const allFaqs = useMemo(() => FAQ_CATEGORIES.flatMap((cat) => cat.items), [])

  const filteredFaqs = useMemo(() => {
    if (!debouncedQuery) {
      if (activeCategory === 'all') return null
      return FAQ_CATEGORIES.find((cat) => cat.id === activeCategory)?.items || []
    }
    return allFaqs.filter((faq) => {
      const haystack = `${faq.question} ${faq.answer} ${faq.tags.join(' ')}`.toLowerCase()
      return haystack.includes(debouncedQuery)
    })
  }, [debouncedQuery, activeCategory, allFaqs])

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={cn(
            'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
            activeCategory === 'all'
              ? 'bg-cyan-500 text-white'
              : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
          )}
        >
          All
        </button>
        {FAQ_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              activeCategory === category.id
                ? 'bg-cyan-500 text-white'
                : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

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

      {debouncedQuery ? (
        filteredFaqs?.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-surface p-8 text-center">
            <h2 className="mb-2 text-2xl">No answers found</h2>
            <p className="text-muted-foreground">Try searching for Discord, events, rules, projects, or support.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs?.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        )
      ) : activeCategory === 'all' ? (
        <div className="space-y-12">
          {FAQ_CATEGORIES.map((category) => (
            <section key={category.id}>
              <h2 className="mb-6 text-xl font-bold text-cyan-400">{category.label}</h2>
              <div className="space-y-4">
                {category.items.map((faq) => (
                  <FAQItem key={faq.question} faq={faq} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs?.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      )}
    </div>
  )
}

interface FAQItemProps {
  faq: {
    question: string
    answer: string
    tags?: string[]
  }
}

function FAQItem({ faq }: FAQItemProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-white/20">
      <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
      <p className="text-muted-foreground">{faq.answer}</p>
    </article>
  )
}

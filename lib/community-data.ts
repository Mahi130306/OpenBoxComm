export const servers = [
  {
    slug: 'jn',
    name: 'Junction (Jn.)',
    description: 'The main hub for founders, students, and curious people.',
    longDescription:
      'Jn. is the friendly front door of Open Box. Bring a rough idea, ask for feedback, share your wins, or find people who want to build alongside you.',
    tags: ['community', 'showcase', 'feedback'],
    memberCount: 1,
    isLive: true,
    accent: 'from-rose-500 to-amber-300',
    channels: ['OB Jn FEEDs', 'Notification', 'Forms', 'System'],
    rules: ['Be respectful and welcoming', 'Share context when asking for help', 'Use the right channel', 'Celebrate work in progress'],
    inviteEnv: 'NEXT_PUBLIC_DISCORD_JN_INVITE',
    inviteCode: '7ZWckKU89J',
  },
  {
    slug: 'dev',
    name: 'OB Dev',
    description: 'Technical deep dives, coding help, open source, and project reviews.',
    longDescription:
      'Dev is for bringing devs together. Pair on bugs, review architecture, share resources, and turn scattered notes into working projects.',
    tags: ['development', 'code', 'open-source', 'Showoff'],
    memberCount: 1,
    isLive: true,
    accent: 'from-green-400 to-emerald-600',
    channels: ['Dev & Projects', 'Knowledge Base', 'Events', 'Career'],
    rules: ['Be helpful', 'Use code blocks', 'Respect others work', 'No spam or low-context promotion'],
    inviteEnv: 'NEXT_PUBLIC_DISCORD_DEV_INVITE',
    inviteCode: 'H2AmpBrPdW',
  },
  {
    slug: 'gg',
    name: 'OB GG (Beta)',
    description: 'Gaming nights, tournaments, and team finding.',
    longDescription:
      'GG is where play and building meet. Join casual sessions, organize tournament squads, talk game design, and find collaborators for prototypes.',
    tags: ['gaming', 'tournaments', 'fun', 'flex'],
    memberCount: 1,
    isLive: true,
    accent: 'from-red-500 to-rose-700',
    channels: ['Battle Royal', 'Open world', 'Story line', 'Competitive', 'Casual'],
    rules: ['No cheating', 'Keep matches friendly', 'Follow event rules', 'No toxicity'],
    inviteEnv: 'NEXT_PUBLIC_DISCORD_GG_INVITE',
    inviteCode: 'etnc7ZpDKT',
  },
  {
    slug: 'study',
    name: 'OB Study (Alpha)',
    description: 'Focused study rooms, accountability groups, and resource swaps.',
    tags: ['learning', 'study', 'education'],
    memberCount: 0,
    isLive: false,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    slug: 'connect',
    name: 'OB Connect',
    description: 'Networking, career leads, mentoring, and collaboration calls.',
    tags: ['networking', 'career', 'jobs'],
    memberCount: 0,
    isLive: false,
    accent: 'from-orange-300 to-red-500',
  },
  // {
  //   slug: 'classic',
  //   name: 'OB Classic',
  //   description: 'creator group.....',
  //   tags: ['...', '..', '.'],
  //   memberCount: 0,
  //   isLive: false,
  //   accent: 'from-yellow-300 to-pink-400',
  // },
]

export const events = [
  {
    id: 'open-build-night',
    name: 'Open Build Night',
    server: 'Dev',
    serverSlug: 'dev',
    date: '2026-07-18T19:00:00+05:30',
    description: 'Bring a half-built project, get momentum, and leave with a tiny shipped improvement.',
    ticketStatus: 'free',
    isOffline: false,
    location: 'Discord voice stage',
    agenda: ['Quick intros', '45 minute build sprint', 'Feedback rounds', 'Show-and-tell'],
  },
  // {
  //   id: 'gg-community-cup',
  //   name: 'GG Community Cup',
  //   server: 'GG',
  //   serverSlug: 'gg',
  //   date: '2026-08-02T18:00:00+05:30',
  //   description: 'A friendly tournament night with squads, brackets, and post-match hangout rooms.',
  //   ticketStatus: 'free',
  //   isOffline: false,
  //   location: 'GG Discord tournament channels',
  //   agenda: ['Check-in', 'Qualifier matches', 'Final lobby', 'Highlights and prizes'],
  // },
  // {
  //   id: 'jn-town-hall',
  //   name: 'JN Town Hall',
  //   server: 'JN',
  //   serverSlug: 'jn',
  //   date: '2026-08-16T17:00:00+05:30',
  //   description: 'Community updates, open questions, and a look at what Open Box is building next.',
  //   ticketStatus: 'free',
  //   isOffline: false,
  //   location: 'Main Discord stage',
  //   agenda: ['Roadmap update', 'Community questions', 'Server spotlight', 'Open mic'],
  // },
]

export interface Blog {
  slug: string
  title: string
  server: string
  date: string
  excerpt: string
  readTime: string
  category?: 'dbw'
}

export const blogs: Blog[] = [
   {
    slug: 'where-we-go-from-here',
    title: 'Where We Go From Here',
    server: 'OB Team',
    date: '2026-06-11',
    excerpt: 'OpenBox has gone from a club side-project to its own independent community. Here is what we are focused on next and what we want to build with you.',
    readTime: '2 min read',
  },
 
  {
    slug: 'ob-gg-gaming-server-beta',
    title: 'OB GG Is in Beta',
    server: 'OB GG',
    date: '2026-06-01',
    excerpt: 'OB GG is our gaming server. We built it to bring more people into the OpenBox world and give gamers in the community a dedicated home. It is live now in beta.',
    readTime: '2 min read',
  },
 
  {
    slug: 'the-new-website',
    title: 'The New Website',
    server: 'Dev Log',
    date: '2026-05-18',
    excerpt: 'We rebuilt openboxcomm.in from the ground up on Next.js and Vercel. Here is what it does now and what is coming next, including a dedicated ticketing site with Discord login.',
    readTime: '2 min read',
  },
 
  {
    slug: 'the-first-website-broke',
    title: 'The First Website Broke',
    server: 'Dev Log',
    date: '2026-05-08',
    excerpt: 'We shipped our first website fast, felt good about it, and then watched it break in production. A build failure we did not catch for way too long.',
    readTime: '2 min read',
  },
 
  {
    slug: 'how-we-started',
    title: 'How We Started',
    server: 'Story',
    date: '2026-05-01',
    excerpt: 'OpenBox started as part of a college club. Then things changed, we split off, and built something of our own. Here is the honest version of that story.',
    readTime: '2 min read',
  },
  {
    slug: 'dbw-june-week-2',
    title: 'DBW: June Week 2 Update',
    server: 'Weekly Update',
    date: '2026-06-12',
    excerpt: 'Day Before Weekend (dbw) — our weekly Friday update. This week we fixed bugs on the website, prepared for the GG beta expansion, and more.',
    readTime: '3 min read',
    category: 'dbw',
  },
]

// community-data.ts — docs page card metadata

export const docs = [

  // ─── Core ─────────────────────────────────────────────────
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'New to Open Box? Start here. Everything you need to join, settle in, and find your place.',
    section: 'Core',
  },
  {
    slug: 'account-setup',
    title: 'Account Setup & Profile',
    description: 'How to join our Discord, complete onboarding, get your roles, and set up your profile the right way.',
    section: 'Core',
  },
  {
    slug: 'rules',
    title: 'Community Rules',
    description: 'The shared expectations that keep Open Box friendly, useful, and safe.',
    section: 'Core',
  },
  {
    slug: 'glossary',
    title: 'Glossary',
    description: 'Terms, abbreviations, and shorthand used across Open Box servers and the website.',
    section: 'Core',
  },

  // ─── Community ────────────────────────────────────────────
  {
    slug: 'jn-guide',
    title: 'Jn. Community Guide',
    description: 'Start here for introductions, sharing projects, and community norms.',
    section: 'Community',
  },
  {
    slug: 'dev-handbook',
    title: 'Dev Server Handbook',
    description: 'How to ask for coding help, request reviews, and use project channels.',
    section: 'Community',
  },
  {
    slug: 'gg-event-guide',
    title: 'GG Event Guide',
    description: 'Tournament expectations, gaming channels, and collaboration notes.',
    section: 'Community',
  },
  {
    slug: 'groups',
    title: 'Groups & Sub-Communities',
    description: 'How the Open Box servers connect — Dev, GG, Study, and Connect as extensions of Junction.',
    section: 'Community',
  },
  {
    slug: 'content-standards',
    title: 'Content Standards',
    description: 'What good content looks like in Open Box — and what crosses the line.',
    section: 'Community',
  },
  {
    slug: 'privacy-community',
    title: 'Privacy in the Community',
    description: 'What to share, what to keep private, display name norms, and how to stay safe in the servers.',
    section: 'Community',
  },

  // ─── Platform ─────────────────────────────────────────────
  {
    slug: 'features',
    title: 'Features Overview',
    description: 'A tour of what Open Box offers — Discord servers, the website, events, and what is coming next.',
    section: 'Platform',
  },
  {
    slug: 'roles',
    title: 'Roles & Permissions',
    description: 'How roles work across Open Box servers, how to earn them, and what they unlock.',
    section: 'Platform',
  },
  {
    slug: 'events-tickets',
    title: 'Events & Tickets',
    description: 'How Open Box events work, how to register, and how to use tickets.openboxcomm.in.',
    section: 'Platform',
  },
  {
    slug: 'tos-summary',
    title: 'Terms of Service Summary',
    description: 'A plain-English summary of the Open Box Terms & Conditions.',
    section: 'Platform',
  },

  // ─── Support ──────────────────────────────────────────────
  {
    slug: 'moderation-policy',
    title: 'Moderation Policy',
    description: 'How moderation works at Open Box — what moderators do, how decisions are made, and how to appeal.',
    section: 'Support',
  },
  {
    slug: 'reporting',
    title: 'Reporting & Enforcement',
    description: 'How to report rule violations, what happens after a report, and how enforcement works.',
    section: 'Support',
  },
  {
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and how to fix them. When in doubt, reach the team at support@openboxcomm.in.',
    section: 'Support',
  },
  {
    slug: 'contact',
    title: 'Contact & Support',
    description: 'Every way to reach the Open Box team — email, Discord, and what to expect when you do.',
    section: 'Support',
  },

  // ─── Contributing ─────────────────────────────────────────
  {
    slug: 'contributing',
    title: 'Contributing to the Community',
    description: 'How to submit suggestions, build tools, contribute bots, and help make Open Box better.',
    section: 'Contributing',
  },

];

export function getServer(slug: string) {
  return servers.find((server) => server.slug === slug)
}

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug)
}

export const teamMembers = [
  // {
  //   slug: 'jules',
  //   name: 'Jules',
  //   role: 'Lead Architect',
  //   bio: 'Jules is the primary architect behind Open Box, focusing on community infrastructure and developer experience. They believe in the power of open collaboration.',
  //   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jules',
  //   socials: {
  //     github: 'https://github.com/jules',
  //     twitter: 'https://x.com/jules',
  //   }
  // },
  {
    slug: 'sachin',
    name: 'Sachin',
    role: 'Community Founder',
    bio: ' Sachin is the Founder of Open Box, a community for developers, builders, gamers, and students. They are passionate about creating spaces where people can connect, learn, and grow together.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sachin',
    socials: {
      instagram: 'https://x.com/alex',
      github: 'https://github.com/alex',
      twitter: 'https://x.com/alex',
    }
  },
  // {
  //   slug: 'rohit',
  //   name: 'Rohit',
  //   role: 'Dev Advocate',
  //   bio: 'Rohit helps bridge the gap between our development projects and the community, writing docs and hosting technical workshops.',
  //   avatar: '#',
  //   socials: {
  //     github: 'https://github.com/rohit',
  //   }
  // }
]

export function getEvent(id: string) {
  return events.find((event) => event.id === id)
}

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug)
}

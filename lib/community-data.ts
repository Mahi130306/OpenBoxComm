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
  // {
  //   id: 'open-build-night',
  //   name: 'Open Build Night',
  //   server: 'Dev',
  //   serverSlug: 'dev',
  //   date: '2026-07-18T19:00:00+05:30',
  //   description: 'Bring a half-built project, get momentum, and leave with a tiny shipped improvement.',
  //   ticketStatus: 'free',
  //   isOffline: false,
  //   location: 'Discord voice stage',
  //   agenda: ['Quick intros', '45 minute build sprint', 'Feedback rounds', 'Show-and-tell'],
  // },
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

export const blogs = [
  // {
  //   slug: 'how-open-box-works',
  //   title: 'How Open Box Works',
  //   server: 'OB JN',
  //   date: '2026-06-01',
  //   excerpt: 'A quick tour of the servers, events, docs, and rituals that make the community easy to join.',
  //   readTime: '4 min read',
  // },
  // {
  //   slug: 'ship-small-with-dev',
  //   title: 'Ship Small with the Dev Server',
  //   server: 'Dev',
  //   date: '2026-05-24',
  //   excerpt: 'Use build logs, review threads, and tiny weekly goals to move your project forward.',
  //   readTime: '5 min read',
  // },
  // {
  //   slug: 'how-we-started',
  //   title: 'How We Started',
  //   server: 'OB JN',
  //   date: '2026-05-01',
  //   excerpt: 'OpenBox started as part of a college club. Then things changed, we split off, and built something of our own. Here is the honest version of that story.',
  //   readTime: '3 min read',
  // },
]

export const docs = [
  {
    slug: 'rules',
    title: 'Community Rules',
    description: 'The shared expectations that keep Open Box friendly, useful, and safe.',
    section: 'Core',
  },
  {
    slug: 'jn',
    title: 'Jn. Community Guide',
    description: 'Start here for introductions, sharing projects, and community norms.',
    section: 'Community',
  },
  {
    slug: 'dev',
    title: 'Dev Server Handbook',
    description: 'How to ask for coding help, request reviews, and use project channels.',
    section: 'Development',
  },
  {
    slug: 'gg',
    title: 'GG Event Guide',
    description: 'Tournament expectations, gaming channels, and collaboration notes.',
    section: 'Gaming',
  },
]

export function getServer(slug: string) {
  return servers.find((server) => server.slug === slug)
}

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug)
}

export const teamMembers = [
  {
    slug: 'jules',
    name: 'Jules',
    role: 'Lead Architect',
    bio: 'Jules is the primary architect behind Open Box, focusing on community infrastructure and developer experience. They believe in the power of open collaboration.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jules',
    socials: {
      github: 'https://github.com/jules',
      twitter: 'https://x.com/jules',
    }
  },
  {
    slug: 'alex',
    name: 'Alex',
    role: 'Community Manager',
    bio: 'Alex oversees the daily operations of the Junction and GG servers, ensuring a safe and welcoming environment for all members.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    socials: {
      twitter: 'https://x.com/alex',
    }
  },
  {
    slug: 'casey',
    name: 'Casey',
    role: 'Dev Advocate',
    bio: 'Casey helps bridge the gap between our development projects and the community, writing docs and hosting technical workshops.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=casey',
    socials: {
      github: 'https://github.com/casey',
    }
  }
]

export function getEvent(id: string) {
  return events.find((event) => event.id === id)
}

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug)
}

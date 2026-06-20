export type DocSection = {
  title: string;
  content: string;
}

export type DocData = {
  sections: DocSection[];
}

export const docContents: Record<string, DocData> = {
 // docs.ts — full content for every doc page

// export const docsContent: Record<string, { sections: { title: string; content: string }[] }> = {

  // ─── CORE ─────────────────────────────────────────────────

  'getting-started': {
    sections: [
      {
        title: 'Welcome to Open Box',
        content: 'Open Box is a free Discord community for developers, builders, gamers, and students in India. There are multiple servers under the Open Box umbrella, each with a different focus. You do not have to join all of them at once. Start with Junction and go from there.',
      },
      {
        title: 'Step 1: Join the Discord',
        content: 'Click the invite link at openboxcomm.in/join. It will take you to jion page, Junction(Jn.) the main entry point. You do not need an account on the website to join. A Discord account is all you need.',
      },
      {
        title: 'Step 2: Complete Onboarding',
        content: 'When you join, Discord will walk you through a short onboarding flow. Read and accept the community rules when prompted. This unlocks the rest of the server. If you skip it by accident, the "Channels & Roles" section below the Evenrts to complete it.',
      },
      // {
      //   title: 'Step 3: Introduce Yourself',
      //   content: 'Head to the introductions channel and drop a quick hello. Your name, what you do or are learning, and one thing you are working on. It does not need to be long. People read them.',
      // },
      {
        title: 'Step 3: Explore the Servers',
        content: 'Junction is the starting point. From there you can join OB Dev for building and coding, OB GG for gaming, OB Study for learning accountability, and OB Connect for networking and careers. Each has its own guide in these docs.',
      },
      {
        title: 'What to Do First',
        content: 'Read the pinned messages in the channels you join. They tell you what the channel is for and how it works. Use the right channel for your question or post. Ask in #help if you are lost.',
      },
    ],
  },

  'account-setup': {
    sections: [
      {
        title: 'Creating a Discord Account',
        content: 'Go to discord.com and sign up for a free account. You need a valid email address. Discord is the platform Open Box runs on — you do not need a separate account for the Open Box website to participate in the community.',
      },
      {
        title: 'Joining the Server',
        content: 'Use the invite link at openboxcomm.in/join & join OB Junction. If you already have Discord installed, it will open automatically. On mobile, it opens the Discord app. On desktop, it opens in the browser or app depending on your setup.',
      },
      {
        title: 'Completing the Onboarding Flow',
        content: 'When you first join, Discord shows you a short onboarding checklist. This includes reading and accepting the community rules. Completing it unlocks full access to the server channels. If you get stuck, head to #rules and click the verification button.',
      },
      {
        title: 'Setting Up Your Profile',
        content: 'Use a display name that is recognisable. Real names, usernames, or handles are all fine. Avoid names that could be confused with staff or bots. You can set a server-specific nickname in OB Junction without changing your global Discord username.',
      },
      {
        title: 'Getting Your Roles',
        content: 'Some roles are assigned automatically when you join and complete onboarding. Others you pick up by being active, participating in events, or supporting the community through tiers. Check the "Channels & Roles" section in Junction for the full list and you can get by ansering the questions.',
      },
      {
        title: 'Joining Other Servers',
        content: 'Each Open Box server has its own invite link. You can find them all at openboxcomm.in/servers or in the #our-servers channel in Junction. Joining multiple servers uses the same Discord account — no separate signup needed.',
      },
    ],
  },

 rules: {
  sections: [
    {
      title: 'Respect & Inclusion',
      content:
        'Treat all members with dignity regardless of background, experience level, gender, religion, caste, or nationality. Harassment, bullying, targeted abuse, hate speech, discriminatory slurs, casteist language, and content that promotes communal disharmony are strictly prohibited. Constructive criticism is welcome. Personal attacks are not.',
    },
    {
      title: 'Content Standards',
      content:
        'Keep content relevant to the channel or context. NSFW content — explicit, sexual, violent, or gory material — is strictly banned. Do not share content that glorifies self-harm, suicide, or violence. Misinformation, deliberate disinformation, political campaigning, and communally sensitive content are not permitted on any Open Box platform.',
    },
    {
      title: 'No Spam or Unsolicited Promotion',
      content:
        'No unsolicited DMs, advertisement spam, or chain messages. Self-promotion is only allowed in designated channels or with moderator approval. Flooding channels with repeated posts will result in a mute. Phishing links, malware, or deceptive URLs result in an immediate permanent ban.',
    },
    {
      title: 'Intellectual Property',
      content:
        'Do not share pirated software, cracked tools, or illegally distributed media. Credit the original creator when sharing others\' work. Plagiarism is prohibited. Sharing copyrighted material without authorisation may be reported under the IT Act, 2000 and the Copyright Act, 1957.',
    },
    {
      title: 'Privacy',
      content:
        'Do not share personal information — phone numbers, addresses, Aadhaar, etc. — of yourself or others without explicit consent. Doxxing results in an immediate permanent ban and may be reported under the DPDP Act, 2023. Do not record, screenshot, or share private conversations without all parties\' consent.',
    },
    {
      title: 'Events',
      content:
        'All participants at Open Box events — on Discord, live on YouTube or X, or at IRL meetups — must follow these rules in full. Events may have additional rules covering teams, submissions, deadlines, or judging. Read the event post and follow organizer instructions. For full details, refer to the Events Policy at /legal/events.',
    },
    {
      title: 'Social Media',
      content:
        'These rules apply when interacting with Open Box\'s official accounts on X, Instagram, and YouTube. Violating comments or interactions may be removed and the user may be blocked or reported to the respective platform.',
    },
    {
      title: 'Moderator Authority',
      content:
        'Moderator decisions are final. Do not argue with moderators publicly — use the designated appeal channels. Do not attempt to bypass moderation actions using alternate accounts. Impersonating moderators, staff, or the Open Box brand results in an immediate permanent ban.',
    },
    {
      title: 'Appeals',
      content:
        'If you believe a moderation action was applied in error, appeal via the Help Centre at /help, the official support channel on Discord, or by emailing appeals@openboxcomm.in. Appeals are reviewed within 7 days.',
    },
    {
      title: 'Reporting Violations',
      content:
        'Use the #report channel on any Discord server or email admin@openboxcomm.in for cross-platform or serious violations. Do not try to handle violations yourself in the channel. Screenshots help. For legal violations, report to CERT-In (cert-in.org.in) or the National Cyber Crime Reporting Portal (cybercrime.gov.in).',
    },
  ],
},

  glossary: {
    sections: [
      {
        title: 'OB',
        content: 'Short for Open Box. Used in server names (OB Dev, OB GG), channel names, and general shorthand across the community.',
      },
      {
        title: 'Junction / JN',
        content: 'OB Junction — the main entry server and front door of the Open Box community. Where new members land and general conversation happens.',
      },
      {
        title: 'Dev',
        content: 'OB Dev — the server for builders, developers, and anyone writing code or working on technical projects.',
      },
      {
        title: 'GG',
        content: 'OB GG — the gaming server. Currently in beta. For gaming chat, finding players, and community tournaments.',
      },
      {
        title: 'Study',
        content: 'OB Study — the study and accountability server. Currently in alpha.',
      },
      {
        title: 'Connect',
        content: 'OB Connect — the networking and careers server. For sharing opportunities, finding collaborators, and professional growth.',
      },
      {
        title: 'Kernel',
        content: 'OB Kernel — the private staff server. Not publicly accessible.',
      },
      {
        title: 'Tiers',
        content: 'The supporter tier system: NPC, Rookie, GOAT, and Legend. Higher tiers come with perks and are available through Patreon.',
      },
      {
        title: 'Onboarding',
        content: 'The short setup flow Discord runs when you first join a server. In Open Box servers, completing it unlocks full channel access.',
      },
      // {
      //   title: 'Carl-bot',
      //   content: 'The bot used across Open Box servers for reaction roles, welcome messages, moderation logging, and automod.',
      // },
    ],
  },

  // ─── COMMUNITY ────────────────────────────────────────────

  'jn-guide': {
    sections: [
      {
        title: 'What Is OB Junction',
        content: 'Junction is the front door of Open Box. It is where new members land, where general conversation happens, and where community-wide announcements go out. If you are not sure which server to join first, start here.',
      },
      // {
      //   title: 'When You First Join',
      //   content: 'Head to the introductions channel and drop a quick hello. Your name, what you do or what you are learning, and one thing you are currently working on. It does not have to be long. People read them and respond.',
      // },
      {
        title: 'Channel Overview',
        content: 'Announcements go in announcements only. General chat is for anything casual. Help channels are for questions with context. Memes go in memes. Use the right channel and things stay useful for everyone.',
      },
      // {
      //   title: 'How to Share a Project',
      //   content: 'Post a short description, a link or screenshot, and what kind of feedback you are looking for — or just that you wanted to share it. You do not need a finished product. Works in progress are welcome.',
      // },
      {
        title: 'Asking for Help',
        content: 'Add context when you ask a question. What are you trying to do, what did you already try, and what happened. A question with context gets answered faster and helps others who hit the same problem later.',
      },
      {
        title: 'Community Norms',
        content: 'Junction is casual but not chaotic. Keep conversations in the right channels, do not talk over someone who is asking for help, and be the kind of person you would want to see more of in the server.',
      },
      {
        title: 'Other Servers',
        content: 'Junction is the starting point, not the whole thing. OB Dev is for builders and code. OB GG is for gaming. OB Study is in alpha, focused on learning. OB Connect is for networking and careers. Each has its own guide. Explore when you are ready.',
      },
    ],
  },

  'dev-handbook': {
    sections: [
      {
        title: 'What Is OB Dev',
        content: 'OB Dev is the builder server. It is for people who are writing code, building projects, learning to program, or working on anything technical. The focus is on doing things, not just talking about them.',
      },
      {
        title: 'Asking for Code Help',
        content: 'Paste your code, not a description of your code. Include the error message if there is one. Say what you expected to happen and what actually happened. Use code blocks so it is readable. Vague questions get vague answers.',
      },
      {
        title: 'Requesting a Review',
        content: 'Share a link to your repo or paste the relevant file. Say what you want reviewed: logic, structure, performance, readability, or all of it. Reviews are informal here. Take feedback in the spirit it is given.',
      },
      {
        title: 'Project Channels',
        content: 'There are channels for specific languages, frameworks, and topics. Use the closest match. If nothing fits, use the general dev channel. Do not post the same question in multiple channels.',
      },
      {
        title: 'Sharing What You Built',
        content: 'Post a short description and a link or screenshot. Mention the stack you used. If you learned something while building it, share that too. It does not have to be polished or finished.',
      },
      {
        title: 'Collaboration',
        content: 'If you are looking for collaborators on a project, say what the project is, what you need, and what the commitment looks like. Be realistic about scope. Good collaborations start with clear expectations.',
      },
      {
        title: 'Resources and References',
        content: 'The resources channel has links curated by the community. If you find something genuinely useful, drop it there with a one-line note on what it covers. No affiliate links.',
      },
    ],
  },

  'gg-event-guide': {
    sections: [
      {
        title: 'What Is OB GG',
        content: 'OB GG is the gaming server. It is where Open Box members come to play games, find others to play with, and join community tournaments. The server is currently in beta, so things are still taking shape.',
      },
      {
        title: 'Gaming Channels',
        content: 'There are channels for general gaming chat and game-specific conversation. Use the right channel when one exists. The clips and screenshots channel is for sharing highlights. Voice channels are open during events and whenever people want to play together.',
      },
      {
        title: 'How Events Work',
        content: 'Event announcements go in the announcements channel with all the details: game, format, date, registration link, and rules. Read the full post before registering. Rules vary by event and are set by the organizers.',
      },
      {
        title: 'Tournament Expectations',
        content: 'Show up on time. If you are in a bracket, be ready before your match window, not during it. If something comes up and you cannot make it, let an organizer know as early as possible. No-shows without notice affect the whole bracket.',
      },
      {
        title: 'Conduct During Events',
        content: 'Play clean. No cheating, no exploits outside the agreed ruleset, no harassment of opponents. Win and lose like someone people want to play with again. Disputes go to the organizer, not the chat.',
      },
      {
        title: 'Collaboration and Teams',
        content: 'Looking for teammates? Use the team-finding channel or ask in general. Say what game, what role or playstyle you are looking for, and your availability.',
      },
      {
        title: 'Beta Feedback',
        content: 'GG is in beta. If something about the server structure is not working, a channel is missing, or you have ideas for events, drop it in the feedback channel. The whole point of beta is to build this with the people using it.',
      },
    ],
  },

  groups: {
    sections: [
      {
        title: 'How Open Box Is Structured',
        content: 'Open Box is not one server — it is a group of servers under one umbrella. OB Junction is the main entry point and the hub that connects everything. The other servers are focused communities that you join based on what you want to do.',
      },
      {
        title: 'OB Junction',
        content: 'The front door. General chat, announcements, introductions, and community-wide conversation. Start here if you are new. Every other server links back to Junction.',
      },
      {
        title: 'OB Dev',
        content: 'For builders, developers, and anyone working on technical projects. Code help, project sharing, reviews, and collaboration. If you are writing code or learning to, this is your server.',
      },
      {
        title: 'OB GG',
        content: 'The gaming server. Currently in beta. For gaming chat, finding players, sharing clips, and joining community tournaments. Open to everyone in the community.',
      },
      {
        title: 'OB Study',
        content: 'The study and accountability server. Currently in alpha. Built for people who want a focused space to learn, track goals, and stay consistent. Still taking shape — join and help build it.',
      },
      {
        title: 'OB Connect',
        content: 'For networking and careers. Sharing opportunities, finding collaborators, and professional growth. Good for students and early-career folks looking to connect with others in the field.',
      },
      {
        title: 'Joining Multiple Servers',
        content: 'You can be in all of them at once. They all use the same Discord account. Rules are consistent across servers — what gets you removed from one can get you removed from others.',
      },
    ],
  },

  'content-standards': {
    sections: [
      {
        title: 'What Good Content Looks Like',
        content: 'Good content in Open Box adds something. It answers a question, shares something useful, starts a real conversation, or shows work that others can learn from. It does not need to be polished. It needs to be genuine.',
      },
      {
        title: 'Posting in the Right Place',
        content: 'Every channel has a purpose. Read the channel description before posting. A question about JavaScript goes in the dev help channel, not general. A meme goes in memes, not in the project showcase. Getting this right keeps the servers useful for everyone.',
      },
      {
        title: 'Sharing Projects and Work',
        content: 'When you share something you built, include a short description, a link or screenshot, and what kind of feedback you want (or that you just wanted to share it). Context makes people more likely to engage.',
      },
      {
        title: 'What Is Not Allowed',
        content: 'Content that is hateful, harassing, sexually explicit, or illegal is never allowed anywhere on Open Box. This is covered in the Community Rules and the Acceptable Use Policy on the website. Violations are handled by the moderation team.',
      },
      {
        title: 'AI-Generated Content',
        content: 'AI tools are allowed. If you are sharing AI-generated work as your own in a context where that matters — like a competition, a review request, or a showcase — say so. Nobody is going to penalise you for using tools. Misrepresentation is the problem.',
      },
      {
        title: 'Links and Promotion',
        content: 'You can share links to your work, your projects, and things you find genuinely useful. Affiliate links, referral links, and cold promotions for unrelated products are not allowed. If you are unsure whether something is okay to share, ask in #help first.',
      },
    ],
  },

  'privacy-community': {
    sections: [
      {
        title: 'What to Share',
        content: 'Share what you are comfortable with. Your username, what you are working on, your skills, and your projects are all fair game. You do not have to share your real name, location, employer, or any personal information to be part of the community.',
      },
      {
        title: 'What to Keep Private',
        content: 'Do not share your phone number, home address, personal email, financial details, or government ID in any Open Box server or channel. Even in DMs, be careful about sharing personal information with people you do not know well.',
      },
      {
        title: 'Display Name Norms',
        content: 'Use a display name that is recognisable and appropriate. Real names, usernames, and handles are all fine. Avoid names that impersonate staff, bots, or other members. Offensive or misleading names will be flagged by moderators.',
      },
      {
        title: 'Others\' Privacy',
        content: 'Do not share someone else\'s personal information without their permission. Do not screenshot and post private conversations. Do not share contact details, real names, or location information about other members without their explicit consent.',
      },
      {
        title: 'DMs and Direct Contact',
        content: 'Open Box staff will never DM you asking for your password, payment details, or personal information. If someone claims to be from the team and asks for this, report it immediately at support@openboxcomm.in.',
      },
      {
        title: 'Your Data on the Website',
        content: 'The Open Box website privacy policy covers how data is collected and handled on openboxcomm.in. You can find it at openboxcomm.in/legal/privacy.',
      },
    ],
  },

  // ─── PLATFORM ─────────────────────────────────────────────

  features: {
    sections: [
      {
        title: 'What Open Box Offers',
        content: 'Open Box is a community that runs across Discord and the web. The core is the Discord servers. The website ties everything together — docs, blogs, events, and what is coming next.',
      },
      {
        title: 'Discord Servers',
        content: 'Five public servers: Junction (general), Dev (builders), GG (gaming, beta), Study (learning, alpha), and Connect (networking). Each has its own channels, roles, and purpose. All are free to join.',
      },
      {
        title: 'The Website',
        content: 'openboxcomm.in is the central hub. It has the server directory with live member counts, the blog, the docs you are reading now, legal pages, and information about events and tiers.',
      },
      {
        title: 'Events',
        content: 'Open Box runs online workshops, hackathons, gaming tournaments, and occasional IRL meetups. Events are announced in Discord and on the website. Registration happens at tickets.openboxcomm.in.',
      },
      {
        title: 'Tiers',
        content: 'Supporter tiers — NPC, Rookie, GOAT, and Legend — are available through Patreon. Higher tiers come with perks across the servers. The community is free at every level; tiers are for people who want to support and get more.',
      },
      {
        title: 'Coming Soon: Tickets Site',
        content: 'tickets.openboxcomm.in is in development. It will handle event registration, ticket claiming and buying, Discord OAuth login, and a dashboard to track your tickets and activity.',
      },
      {
        title: 'Social',
        content: 'Open Box is on Instagram, YouTube, and X as @openboxcomm. Weekly updates, event clips, and community content go out on these channels.',
      },
    ],
  },

  roles: {
    sections: [
      {
        title: 'How Roles Work',
        content: 'Roles in Open Box servers control what you can see and do. Some are assigned automatically when you join and complete onboarding. Others you earn through activity, events, or supporting the community.',
      },
      {
        title: 'Default Role',
        content: 'Everyone who completes onboarding gets the default member role. This unlocks full read and write access to the standard channels in that server.',
      },
      {
        title: 'Self-Assignable Roles',
        content: 'Some roles are self-assignable through reaction role menus in the #roles channel. These are usually interest or identity roles — things like your primary language, the games you play, or what you are studying.',
      },
      {
        title: 'Earned Roles',
        content: 'Some roles are earned through participation — joining events, contributing to the community, or being active over time. These are assigned by the moderation team and are not automated.',
      },
      {
        title: 'Tier Roles',
        content: 'Supporter tier roles (NPC, Rookie, GOAT, Legend) are linked to Patreon. Once you subscribe at the right tier, the role is assigned automatically after you connect your Discord account to Patreon.',
      },
      {
        title: 'Staff Roles',
        content: 'Moderator and admin roles are assigned internally. Open Box does not run open mod applications publicly. If you are interested in contributing to the team, reach out at team@openboxcomm.in.',
      },
      {
        title: 'Role Issues',
        content: 'If a role was not assigned correctly or you lost a role you should have, reach out at support@openboxcomm.in with your Discord username and the role in question.',
      },
    ],
  },

  'events-tickets': {
    sections: [
      {
        title: 'How Events Work',
        content: 'Open Box runs online workshops, hackathons, gaming tournaments, study sprints, and occasional IRL meetups. Each event has its own format, rules, and registration process. Details are always in the event announcement.',
      },
      {
        title: 'Where to Find Events',
        content: 'Events are announced in the #announcements channel in Junction and on the website. Follow @openboxcomm on Instagram, YouTube, and X for reminders and highlights.',
      },
      {
        title: 'Registering for an Event',
        content: 'Registration happens at tickets.openboxcomm.in. You log in with your Discord account, find the event, and claim or buy a ticket depending on the event type. Free events use claim tickets. Paid events use the payment flow.',
      },
      {
        title: 'Your Tickets Dashboard',
        content: 'Once you log in at tickets.openboxcomm.in, your dashboard shows all your tickets — past and upcoming. You can see event details, your registration status, and any team or submission information tied to that ticket.',
      },
      {
        title: 'Discord OAuth Login',
        content: 'The ticketing site uses Discord login. You do not need a separate account. Click log in, authorize with Discord, and you are in. Your Discord identity ties your tickets to your community profile.',
      },
      {
        title: 'Event Rules',
        content: 'Each event may have its own rules covering teams, submissions, deadlines, and conduct. These are in the event post and on the event page on the ticketing site. Read them before you register.',
      },
      {
        title: 'Refunds and Cancellations',
        content: 'Refund policy for paid events is covered in the Open Box Refund Policy at openboxcomm.in/legal/refunds. For free events, cancellations do not require action but letting the organizers know is appreciated.',
      },
    ],
  },

  'tos-summary': {
    sections: [
      {
        title: 'What This Is',
        content: 'This is a plain-English summary of the Open Box Terms & Conditions. It is not a legal document. The full Terms are at openboxcomm.in/legal/terms and are the authoritative version. If anything here conflicts with the full Terms, the full Terms apply.',
      },
      {
        title: 'Who the Terms Cover',
        content: 'The Terms cover everyone who uses any Open Box platform — the website (openboxcomm.in), all Discord servers (Junction, Dev, GG, Study, Connect), social media accounts on X, Instagram, and YouTube, events, and any future services.',
      },
      {
        title: 'Age Requirement',
        content: 'You must be at least 13 years old (or the age of digital consent in your country, whichever is higher) to use any Open Box platform.',
      },
      {
        title: 'Your Account',
        content: 'You are responsible for your account. Use accurate information when you register. Do not impersonate staff, other members, or the Open Box brand. Accounts can be suspended or removed for breaking the Terms or community rules.',
      },
      {
        title: 'What You Cannot Do',
        content: 'No illegal content. No harassment, hate speech, or defamation. No intellectual property violations. No hacking, scraping, or reverse-engineering the platform. No impersonation. Full details are in the Acceptable Use Policy at openboxcomm.in/legal/aup.',
      },
      {
        title: 'Your Content',
        content: 'When you post content on any Open Box platform, you keep ownership but give Open Box permission to use, display, and share it as part of running the community. This includes the website, Discord, and social media.',
      },
      {
        title: 'Events and Payments',
        content: 'Event participation is subject to the Events Policy. Payments are subject to the Refund Policy. Both are linked from the full Terms.',
      },
      {
        title: 'Governing Law',
        content: 'The Terms are governed by Indian law. Disputes go to Indian courts. Key laws include the IT Act 2000, DPDP Act 2023, IPC 1860, and Copyright Act 1957.',
      },
      {
        title: 'Changes',
        content: 'Open Box can update the Terms at any time. Major changes are announced in Discord and on the website. Continued use means you accept the updated Terms.',
      },
      {
        title: 'Questions',
        content: 'For anything related to the Terms, contact legal@openboxcomm.in.',
      },
    ],
  },

  // ─── SUPPORT ──────────────────────────────────────────────

  'moderation-policy': {
    sections: [
      {
        title: 'What Moderators Do',
        content: 'Moderators keep the servers healthy. They remove content that breaks the rules, move conversations to the right channels, handle reports, apply warnings and bans, and escalate serious issues to admins. They are volunteers and community members, not full-time staff.',
      },
      {
        title: 'How Decisions Are Made',
        content: 'Moderators use their judgment based on the Community Rules and the Acceptable Use Policy. Not every situation is black and white. Context matters. Repeated minor violations are treated differently from a single serious one.',
      },
      {
        title: 'Warning System',
        content: 'Minor violations typically result in a warning first. Repeated or serious violations can result in a temporary mute, a kick, or a ban depending on severity. Some violations — like sharing illegal content or doxxing — result in an immediate permanent ban with no prior warning.',
      },
      {
        title: 'Bans',
        content: 'A ban from one Open Box server can result in removal from other servers depending on the severity of the violation. Cross-server bans are applied for the most serious violations.',
      },
      {
        title: 'Appeals',
        content: 'If you believe a moderation action was wrong, you can appeal at appeals@openboxcomm.in. Include your Discord username, the server it happened in, and what you think went wrong. Appeals are reviewed by the admin team, not the moderator who made the original call.',
      },
      {
        title: 'Moderator Conduct',
        content: 'Moderators are held to the same rules as everyone else, plus additional expectations around fairness and transparency. If you have a complaint about a moderator\'s conduct, reach out at team@openboxcomm.in.',
      },
    ],
  },

  reporting: {
    sections: [
      {
        title: 'How to Report Something',
        content: 'If you see a rule violation in a server, ping a moderator in that server or use the report function in Discord (right-click a message, select Apps, then Report). For anything serious or involving multiple servers, email support@openboxcomm.in with a description and screenshots.',
      },
      {
        title: 'What Happens After a Report',
        content: 'The moderation team reviews every report. You will not always get a response telling you what action was taken, but reports are not ignored. If the violation is clear, action is taken quickly. If it needs investigation, it takes longer.',
      },
      {
        title: 'What to Include in a Report',
        content: 'The more context you give, the faster things move. Include: what happened, where it happened (server and channel), when it happened, who was involved, and screenshots or message links if you have them.',
      },
      {
        title: 'False Reports',
        content: 'Deliberately filing a false report to get someone in trouble is itself a violation. The moderation team can tell the difference between a genuine report and one made in bad faith.',
      },
      {
        title: 'Serious Violations',
        content: 'For threats, doxxing, illegal content, or anything that could involve real-world harm, email support@openboxcomm.in immediately rather than waiting for an in-server response. These are escalated to admins directly.',
      },
      {
        title: 'Appeals',
        content: 'If you received a moderation action and want to appeal it, use appeals@openboxcomm.in. See the Moderation Policy doc for how the appeals process works.',
      },
    ],
  },

  troubleshooting: {
    sections: [
      {
        title: 'I Cannot See Any Channels',
        content: 'You probably have not completed onboarding. Go to the server and look for the onboarding prompt, or head to the #rules channel and click the verification button. If that does not work, reach out at support@openboxcomm.in.',
      },
      {
        title: 'I Did Not Get My Role',
        content: 'If an automatic role was not assigned (like a tier role or a reaction role), try leaving and rejoining the server. For Patreon tier roles, make sure your Discord is connected to your Patreon account in Patreon settings. If it still does not work, email support@openboxcomm.in with your Discord username and the role you expected.',
      },
      {
        title: 'I Cannot Join a Server',
        content: 'If the invite link is not working, it may have expired. Get a fresh link from openboxcomm.in/join or the #server-links channel in Junction. If you were previously removed from the server, you will need to appeal at appeals@openboxcomm.in before rejoining.',
      },
      {
        title: 'The Website Is Not Loading',
        content: 'Try a hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac). If the site is down entirely, check our Discord announcements channel or @openboxcomm on X for a status update.',
      },
      {
        title: 'I Cannot Register for an Event',
        content: 'Make sure you are logged in at tickets.openboxcomm.in with your Discord account. If the event is full, the ticket button will be disabled. If you are getting an error, try a different browser or contact hello@openboxcomm.in with a screenshot.',
      },
      {
        title: 'Something Else Is Wrong',
        content: 'Post in the #help channel in Junction and someone from the community or team will help. For account or access issues, email support@openboxcomm.in directly.',
      },
    ],
  },

  contact: {
    sections: [
      {
        title: 'General Questions',
        content: 'For anything general about Open Box, the servers, or the website: hello@openboxcomm.in',
      },
      {
        title: 'Support',
        content: 'For account issues, role problems, event registration, or anything that is not working: support@openboxcomm.in. Include your Discord username and a description of the issue. Screenshots help.',
      },
      {
        title: 'Moderation Appeals',
        content: 'If you were muted, kicked, or banned and want to appeal: appeals@openboxcomm.in. Include your Discord username, which server, and what you think went wrong.',
      },
      {
        title: 'Partnerships',
        content: 'For club upgrades, partner tier inquiries, or collaboration proposals: partnerships@openboxcomm.in.',
      },
      {
        title: 'Legal',
        content: 'For anything related to Terms, Privacy Policy, or legal matters: legal@openboxcomm.in.',
      },
      {
        title: 'Team',
        content: 'For internal team matters or if you want to contribute to Open Box: team@openboxcomm.in.',
      },
      {
        title: 'In Discord',
        content: 'The fastest way to get a response for most things is the #help channel in OB Junction. Someone from the community or the team is usually around.',
      },
      {
        title: 'Response Times',
        content: 'Emails are checked regularly but this is a small team. Most queries get a response within 1 to 3 days. Urgent support issues are prioritised.',
      },
    ],
  },

  // ─── CONTRIBUTING ─────────────────────────────────────────

  contributing: {
    sections: [
      {
        title: 'Ways to Contribute',
        content: 'Contributing to Open Box does not mean joining the staff team. There are multiple ways to help: suggesting improvements, building tools, sharing resources, running study sessions, or just being consistently helpful in the servers.',
      },
      {
        title: 'Suggestions',
        content: 'Got an idea for a new channel, event format, bot feature, or community initiative? Drop it in the #suggestions channel in Junction. Good suggestions get discussed openly. If something gets enough support, it moves forward.',
      },
      {
        title: 'Building Bots and Tools',
        content: 'If you want to build a bot, moderation tool, or utility for the community, reach out at team@openboxcomm.in before you start. Tell us what you want to build and why. We will tell you if it fits and what access you will need.',
      },
      {
        title: 'Management Tools',
        content: 'If you have ideas for tools that could help with event management, community tracking, or server operations, we want to hear them. These are the kinds of contributions that have the most impact on how the community runs day to day.',
      },
      {
        title: 'Content Contributions',
        content: 'If you want to write a blog post for the community, contribute a resource, or help with documentation, reach out at team@openboxcomm.in. Tell us what you want to write about and we will give you the format and guidelines.',
      },
      {
        title: 'What We Do Not Accept',
        content: 'We do not accept unsolicited bots or tools added to the servers without prior approval. We do not accept contributions that come with strings attached — like promotion deals or affiliate arrangements.',
      },
      {
        title: 'Getting Started',
        content: 'The easiest way to start is to just show up and be useful. Answer questions, share good resources, help newcomers settle in. The people who end up contributing most to Open Box usually start that way.',
      },
    ],
  },

};


export function getDocContent(slug: string): DocData | undefined {
  return docContents[slug]
}

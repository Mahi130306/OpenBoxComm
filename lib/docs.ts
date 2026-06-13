export type DocSection = {
  title: string;
  content: string;
}

export type DocData = {
  sections: DocSection[];
}

export const docContents: Record<string, DocData> = {
  dev: {
    sections: [
      {
        title: 'Asking For Help',
        content: 'Include the goal, what you tried, the error or screenshot, and the smallest code sample that shows the problem. Good context helps others help you faster.',
      },
      {
        title: 'Code Reviews',
        content: 'Post the repo, branch, or snippet with the kind of review you want: architecture, bugs, readability, performance, or design polish. Mention deadlines if timing matters.',
      },
      {
        title: 'Ship Logs',
        content: 'Use ship logs for small progress updates. A good log has what changed, what is blocked, and what you plan to do next.',
      },
    ],
  },
  gg: {
    sections: [
      {
        title: 'Game Nights',
        content: 'Game nights are casual unless the event says otherwise. Check the lobby time, join voice early, and keep the match friendly.',
      },
      {
        title: 'Tournaments',
        content: 'Tournament posts include format, check-in time, rules, and bracket details. Follow the event thread so organizers can update everyone quickly.',
      },
      {
        title: 'Game Dev',
        content: 'Use game dev channels for prototypes, feedback, design questions, playtests, and resource sharing. Short clips and playable builds get the best feedback.',
      },
    ],
  },
  jn: {
    sections: [
      {
        title: 'Start Here',
        content: 'Jn. is the main community room for Open Box. Introduce yourself with your name, what you are building or learning, and one thing you would like help with.',
      },
      {
        title: 'Sharing Work',
        content: 'Share work in progress early. A screenshot, repo link, short demo, or rough note is enough. Tell people what kind of feedback you want so they can respond usefully.',
      },
      {
        title: 'Community Rhythm',
        content: 'Expect casual check-ins, project showcases, resource swaps, and town hall updates. If you are unsure where something belongs, ask in the main channel and a moderator will point you in the right direction.',
      },
    ],
  },
  rules: {
    sections: [
      {
        title: 'Be Respectful',
        content: 'Treat people like collaborators. No harassment, hate speech, personal attacks, or hostile behavior.',
      },
      {
        title: 'Keep Channels Useful',
        content: 'Post in the right channel when possible. Add context, links, screenshots, or examples when asking for help.',
      },
      {
        title: 'No Spam',
        content: 'Do not flood channels, mass mention people, repost the same message, or promote unrelated links.',
      },
      {
        title: 'Share Work Honestly',
        content: 'Credit other people when you share their work. If you use AI tools, templates, or starter kits, say so when it matters.',
      },
      {
        title: 'Protect Privacy',
        content: 'Do not share private messages, personal data, or someone else\'s contact information without permission.',
      },
      {
        title: 'Follow Event Guidance',
        content: 'Events may have extra rules for teams, brackets, deadlines, conduct, or submissions. Follow the event post and organizer instructions.',
      },
      {
        title: 'Moderation',
        content: 'Moderators may remove content, move conversations, pause threads, or restrict access when needed to keep the community healthy.',
      },
    ],
  },
}

export function getDocContent(slug: string): DocData | undefined {
  return docContents[slug]
}

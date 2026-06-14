export const blogContents: Record<string, string[]> = {
  // 'how-open-box-works': [
  //   'Open Box works best when people can enter quickly, understand the room, and find a next action. That is why every server has a clear purpose, a few friendly rituals, and lightweight docs that explain what to do first.',
  //   'The goal is not to make community feel complicated. The goal is to make it easier to ask better questions, share unfinished work, and meet people who are excited by the same kind of progress.',
  //   'We believe that lowering the barrier to entry makes it more likely that the right people will show up. You don\'t need a polished portfolio to start—you just need a willingness to participate.'
  // ],
  // 'ship-small-with-dev': [
  //   'Use build logs, review threads, and tiny weekly goals to move your project forward.',
  //   'We encourage a habit of shipping small, incomplete things. It is better to get feedback on a messy prototype today than to wait six months for a perfect launch that nobody sees.',
  //   'The Dev Server is a place to share those messy prototypes. Start a thread, explain what you are trying to do, and ask for specific feedback. Someone will point you in the right direction.'
  // ],
  // 'how-we-started': [
  //   'OpenBox did not start as its own thing. It started inside a college club, as a small Discord server that a few of us were running on the side. It was meant to be a space for the club members to hang out, share resources, and talk about what they were building.',
  //   'For a while, that worked fine. But as the club went through its own changes, the direction we wanted to take the community stopped aligning with where things were heading. There were differences in how we thought the space should be run, who it should be for, and what it should prioritize. Nothing dramatic. Just enough to make it clear that we needed to go a different way.',
  //   'So we did. We took what we had learned, started fresh, and registered OpenBox as its own thing under openboxcomm.in. No club backing, no institution behind it. Just us and whoever wanted to help build it.',
  //   'That independence shaped everything. We made it free from the start because we did not want the community to exist only for people who could pay. We kept it creator-first because that was who we were. And we kept the structure flat and simple because we had seen what happened when communities got too bureaucratic too fast.',
  //   'The early days were messy. A few channels, no bots, no events, just people figuring out what this place was supposed to be. A lot of trial and error. Some things we tried did not stick. Some things we almost gave up on ended up becoming the core of how OpenBox works today.',
  //   'If you are here now, you are part of whatever this becomes next. That has always been the point.'
  // ]
}

export function getBlogContent(slug: string): string[] | undefined {
  return blogContents[slug]
}

// Blog.tsx — in-page content sections
// slug → array of paragraphs (each string = one <p> block)

export const blogContents: Record<string, string[]> = {

  'where-we-go-from-here': [
    'OpenBox started as a side project inside a college club. It is its own thing now, with its own domain, its own servers, its own community, and a website that actually works. That is further than we expected to get this fast, and we are not done.',
    'The honest answer to where we go from here is: we build what the community needs, in the order it needs it.',
    'On the product side, the next priorities are clear. The tickets.openboxcomm.in site comes first. Discord OAuth login, event registration, ticket claiming, and a dashboard where you can track everything tied to your account. That is the foundation for running proper events at scale without managing everything manually.',
    'On the community side, GG is in beta and we are watching how people use it before we commit to a structure. OB Study is in alpha and still taking shape. We are not rushing either of them. The other servers are stable and we are focused on making them better rather than adding new ones just to add them.',
    'Events are something we want to do more of. We have done small things here and there but we want to run things that actually bring people together, online and eventually offline. The ticketing system is the first step toward making that real.',
    'What we are not trying to do is grow for the sake of numbers. A bigger member count that is not active is not a win. We would rather have a smaller community where people actually show up, talk, build things, and help each other out.',
    'If you have been here for a while, thank you for sticking around through the rough patches. If you just joined, you showed up at a good time.',
    'Come say hi in Junction. That is where most of the conversation happens. And if you have ideas for what you want to see, we are always listening at team@openboxcomm.in.',
  ],

  'ob-gg-gaming-server-beta': [
    'OB GG started as a fix for a real problem. OB Dev, our server for builders and developers, was not pulling people in the way we had hoped. The content was good and the community was there, but the draw was not strong enough on its own. We needed something that could bring more people into the OpenBox world.',
    'Gaming was the obvious answer. It is social by default, low-barrier to get into, and a lot of the people we wanted to reach were already gamers. So we built GG as the entry point, a place that is easy to join and easy to enjoy, with Dev and the other servers waiting for when people are ready to go deeper.',
    'The server is in beta right now because we want to get the structure right before it sets. A hard launch with the wrong channels or the wrong setup means more work to undo later. Beta means we build it with the people who are actually going to use it.',
    'Right now GG has channels for general gaming chat, a few game-specific spots, and a place to share clips and finds. Bots are minimal for now. We added what was immediately useful and left the rest for after we hear what people actually want.',
    'What we are looking for during beta: which channels get used and which ones sit empty, what games need their own dedicated space, what kinds of events would actually bring people in, and what is missing that you expected to find.',
    'Access is open to everyone in the community. No application, no waitlist, no tier requirement. Just join and start using it.',
    'Drop your thoughts in the feedback channel or reach out at support@openboxcomm.in. We are reading everything.',
  ],

  'the-new-website': [
    'This website is the second version. We rebuilt it from scratch after the first one broke and made it clear that patching was not going to cut it. The new site runs on Next.js 16 with the App Router, TypeScript, and Tailwind CSS. It is deployed on Vercel, which handles builds, previews, and global delivery.',
    'The structure is cleaner now. Routing is file-based through the App Router. Styles use Tailwind CSS with shadcn/ui components and Radix UI primitives under the hood. Headings use Syne, body text uses Inter. Dark and light mode is handled by next-themes. The legal pages are all live, formatted correctly, and pointing to the right Indian legislation. The server directory shows total member counts pulled from Discord\'s public widget API.',
    'What the site does right now is give you a clear picture of what OpenBox is, what each server is for, how to join, and what the tiers look like. That core is solid and stable.',
    'What is coming next is where it gets more interesting.',
    'We are building a separate site at tickets.openboxcomm.in for event registration and ticketing. When OpenBox runs events, you will be able to register and claim or buy tickets there. No form fills, no DMs, no manual tracking. Login will use Discord OAuth so there is nothing new to sign up for.',
    'The ticketing site will also have a dashboard where you can see all the tickets you have claimed or bought, past and upcoming. Everything tied to your Discord account in one place.',
    'None of this is live yet. But the foundation is built for it. We are not adding features on top of a broken base this time.',
    'If you want to follow along or report something, reach out at support@openboxcomm.in or hello@openboxcomm.in.',
  ],

  'the-first-website-broke': [
    'We shipped the first OpenBox website quickly and we were proud of it. It had the server directory, the join links, the rules pages. It looked the part. Then it broke, and we did not notice for longer than we should have.',
    'The failure was in the build pipeline. A package we were using had a minor version bump that changed a behavior we were relying on. We had not pinned our dependencies tightly, so the next deploy pulled the new version automatically. The build failed silently. Cloudflare Pages returned the last successful deploy for a bit, then started serving errors.',
    'Anyone clicking our links during that window hit a broken page. We had no uptime monitoring, no build status alerts, no fallback. We found out because someone in the community mentioned it in the server.',
    'When we finally dug into the issue, it was not just the package version. The build config had a path alias that only worked correctly in our local environment. The CI environment resolved it differently and failed. We had never actually tested a clean build from scratch. We had only ever deployed from our own machines where everything was already set up.',
    'Fixing it took a few hours. But by that point, we had already decided the first site had to go. The codebase had too many workarounds stacked on each other. It was faster to rebuild than to keep patching.',
    'A few things we do now that we did not do then: dependency versions are pinned and updated deliberately, every deploy runs a clean build in a controlled environment, and we have monitoring that actually alerts when something goes down.',
    'Shipping fast is the right call. Shipping without any observability is just hoping nothing breaks.',
  ],

  'how-we-started': [
    'OpenBox did not start as its own thing. It started inside a college club, as a small Discord server that a few of us were running on the side. It was meant to be a space for the club members to hang out, share resources, and talk about what they were building.',
    'For a while, that worked fine. But as the club went through its own changes, the direction we wanted to take the community stopped aligning with where things were heading. There were differences in how we thought the space should be run, who it should be for, and what it should prioritize. Nothing dramatic. Just enough to make it clear that we needed to go a different way.',
    'So we did. We took what we had learned, started fresh, and registered OpenBox as its own thing under openboxcomm.in. No club backing, no institution behind it. Just us and whoever wanted to help build it.',
    'That independence shaped everything. We made it free from the start because we did not want the community to exist only for people who could pay. We kept it builder-first because that was who we were. And we kept the structure flat and simple because we had seen what happened when communities got too bureaucratic too fast.',
    'The early days were messy. A few channels, no bots, no events, just people figuring out what this place was supposed to be. A lot of trial and error. Some things we tried did not stick. Some things we almost gave up on ended up becoming the core of how OpenBox works today.',
    'If you are here now, you are part of whatever this becomes next. That has always been the point.',
  ],

  'dbw-june-week-2': [
    'Day Before Weekend (dbw) — the weekly Friday update post that goes out across Discord and the blog. Covers what happened that week and what is coming next.',
    'This week was focused on improving the website user experience. We implemented a new search feature for both the blog and documentation pages to help members find information faster.',
    'We also consolidated the FAQ pages. Previously, we had FAQs in multiple places, but now they are all centrally located in the Help section at /help/faq.',
    'The OB GG gaming server is seeing more activity. We are preparing for an expansion of the beta next week with new game-specific channels and our first community tournament of the season.',
    'On the development side, we are working on the backend for the ticketing system. We expect to have the first version of tickets.openboxcomm.in ready for internal testing by the end of the month.',
    'That is it for this week. Have a great weekend and see you in the servers!',
  ],

};

export function getBlogContent(slug: string): string[] | undefined {
  return blogContents[slug]
}

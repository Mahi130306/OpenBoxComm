export interface EventDetails {
  about: string
  prep: string[]
  rules: string[]
}

export const eventDetailsMap: Record<string, EventDetails> = {
  'open-build-night': {
    about: 'Open Build Night is a virtual co-working and hackathon-lite event where developers, designers, and creators come together to work on their side projects. Whether you\'re building a Web3 app, a game, a browser extension, or just learning a new framework, this is the place to get focused work done and get instant feedback.',
    prep: [
      'Have a project repository or project folder ready on your machine.',
      'Ensure your IDE/development environment is set up before the session starts.',
      'Prepare a 1-sentence description of what you aim to ship or improve tonight.'
    ],
    rules: [
      'Focus on building during the 45-minute sprint - minimize distractions.',
      'Be constructive and supportive during feedback and show-and-tell rounds.',
      'No spamming or hard selling your product; focus on sharing tech and design.'
    ]
  },
  'gg-community-cup': {
    about: 'Get ready for the ultimate casual gaming tournament. The GG Community Cup brings players of all skill levels together for a night of competitive fun, team coordination, and bragging rights. Squad up, register, and climb the brackets to win prizes and community badges.',
    prep: [
      'Make sure the game client is fully updated to the latest version.',
      'Test your mic and Discord audio in the GG voice channels beforehand.',
      'Ensure you have a stable internet connection (wired preferred).',
      'Register your team or sign up as a solo agent to be matched.'
    ],
    rules: [
      'Zero tolerance for cheating, exploiting, or unsportsmanlike behavior.',
      'Respect the tournament admins and their decisions.',
      'Keep all voice and text chats friendly and toxicity-free.',
      'Arrive in the lobby at least 15 minutes before your scheduled match.'
    ]
  },
  'jn-town-hall': {
    about: 'The JN Town Hall is our community-wide gathering to discuss the roadmap of Open Box, share statistics, showcase member projects, and answer questions. It\'s the best place to find out what\'s happening behind the scenes and how you can get involved in building the future of the community.',
    prep: [
      'Think of any questions or suggestions you have for the moderation and admin team.',
      'Check out the `#roadmap` channel in Discord to preview upcoming features.',
      'If you want to demo a project, request a slot in `#town-hall-requests` at least 24h prior.'
    ],
    rules: [
      'Keep questions constructive and respectful.',
      'Use the designated Q&A channel for posting questions during the stage talk.',
      'Avoid interrupting presenters; wait for the open mic section to speak.'
    ]
  },
  'founder-feedback-circle': {
    about: 'Are you building a startup, a SaaS, or a side hustle? The Founder Feedback Circle is an intimate, high-trust roundtable where founders present their landing pages, pitch decks, user flows, or business models to get honest, unfiltered feedback from peers and experienced mentors.',
    prep: [
      'Prepare a link to your landing page, Figma file, pitch deck, or live prototype.',
      'Formulate 1 to 2 specific questions or problems you want help solving (e.g., \'Does this value prop make sense?\').',
      'Keep your presentation/walkthrough strictly under 3 minutes.'
    ],
    rules: [
      'What is shared in the circle stays in the circle (strict NDAs/trust).',
      'Give actionable, honest, and kind feedback - focus on helping the founder succeed.',
      'Listen actively without getting defensive about your own project.'
    ]
  },
  'api-debugging-lab': {
    about: 'Stuck on a CORS issue? Webhooks failing? Database query taking 5 seconds? Bring your broken code to the API Debugging Lab. This is a collaborative developer session where we inspect stack traces, review network calls, and fix bugs together in real-time.',
    prep: [
      'Have your code repository pulled up and ready to screen-share.',
      'Isolate the bug to a specific endpoint, function, or configuration file.',
      'Make sure no sensitive credentials, API keys, or personal data are visible on screen.'
    ],
    rules: [
      'Use code blocks and syntax highlighting when sharing code snippets in chat.',
      'No backseat debugging in an aggressive manner; collaborate patiently.',
      'Help search documentation or write reproducible test cases for the presenter.'
    ]
  },
  'campus-build-jam': {
    about: 'The Campus Build Jam is our flagship in-person hack-day for student builders. Over 8 hours, you will form teams, brainstorm ideas, design prototypes, and deploy a working MVP. Mentors from top tech companies will be on-site to guide you, and we\'ll wrap up with a community dinner and demo hour.',
    prep: [
      'Bring your laptop, charger, and any extension cords if possible.',
      'Set up Git, Node.js, Python, or your preferred stack on your machine.',
      'Install prototyping/design tools like Figma.',
      'Bring your student ID card for verification at the entrance.'
    ],
    rules: [
      'All code must be written during the event - no pre-built projects allowed (templates/scaffolding are fine).',
      'Be respectful of the physical venue and clean up after your team.',
      'Collaborate and support other teams; no hostile competition.'
    ]
  },
  'indie-game-playtest-night': {
    about: 'A dedicated evening for indie game developers in the community to get their builds playtested. Developers share WebGL, itch.io, or downloadable links, and players jump in to test the mechanics, report bugs, rate the game feel, and provide detailed written feedback.',
    prep: [
      'Developers: Have a playable build uploaded to itch.io, Steam, or web hosting.',
      'Players: Be ready to download small files or run games in-browser.',
      'Install Discord screen-sharing or streaming tools if you want to stream your gameplay.'
    ],
    rules: [
      'Provide constructive critique regarding game loop, controls, and bugs.',
      'Do not criticize developers personally; game dev is hard, encourage them!',
      'If downloading files, verify they are from the official developer links provided.'
    ]
  },
  'open-mic-showcase': {
    about: 'The Open Mic Showcase is a casual community stage to show off literally anything you\'ve made. Written an article? Designed a cool 3D model? Wrote a song? Created a funny automation script? Sign up for a 5-minute slot and share it with the friendliest crowd on the internet.',
    prep: [
      'Prepare the assets, screen-share layout, or links you want to display.',
      'Test your camera/mic beforehand if you plan to go on video.',
      'Write a short intro for yourself so the host can introduce you.'
    ],
    rules: [
      'No inappropriate, offensive, or NSFW content.',
      'Keep showcases strictly under the 5-minute limit to allow everyone a turn.',
      'Hyping up and cheering on other presenters in the chat is highly encouraged!'
    ]
  },
  'retro-lan-evening': {
    about: 'Step back in time to the golden age of local multiplayer. The Retro LAN Evening brings together gamers for offline matches of classic titles like Counter-Strike 1.6, Quake III, Age of Empires, and retro console games. Snacks, drinks, and local multiplayer brackets included.',
    prep: [
      'Bring your own gaming peripherals (mouse, keyboard, controller, headset) if you have preferences.',
      'We will provide pre-configured PCs, but feel free to bring a gaming laptop if you want to join the LAN.',
      'Double-check location directions and parking info sent to your email.'
    ],
    rules: [
      'No toxic trash-talking; keep it fun and nostalgic.',
      'Take care of the shared gaming equipment and consoles.',
      'Be mindful of other people\'s space and belongings.'
    ]
  }
}

export function getEventDetails(id: string): EventDetails {
  return (
    eventDetailsMap[id] || {
      about: 'Join us for this exciting community event! Check back soon for full details.',
      prep: [
        'Arrive 5–10 minutes early to settle in.',
        'Bring your questions and your curiosity.'
      ],
      rules: [
        'Be respectful and welcoming to everyone.',
        'No spam or unsolicited promotion.'
      ]
    }
  )
}

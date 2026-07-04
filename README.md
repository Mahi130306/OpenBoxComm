# Open Box — Community Platform

A modern, high-performance Discord community website built with Next.js, TypeScript, and Tailwind CSS.

**Live:** https://www.openboxcomm.in/

---

## Quick Start

### Installation

```bash
git clone <repo-url>
cd open-box-website-del
npm install
```

### Environment Setup

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Required environment variables:

```env
# Discord Server Invites
NEXT_PUBLIC_DISCORD_JN_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_DEV_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_GG_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_INVITE_MAIN=https://discord.gg/...

# Social Links
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@openbox
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/openboxcomm
NEXT_PUBLIC_PATREON_URL=https://patreon.com/openbox
NEXT_PUBLIC_X_URL=https://x.com/openboxcomm

# Feature Flags
NEXT_PUBLIC_LOGIN_ENABLED=false
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + Animations |
| UI Library | Radix UI + shadcn/ui |
| Content | MDX (next-mdx-remote + gray-matter) |
| Theme | next-themes (dark/light) |
| 3D Graphics | Three.js |
| Animations | GSAP |
| Fonts | Syne (headings) · Inter (body) |

---

## Project Structure

```
open-box-website-del/
├── app/                       # Pages and routes
│   ├── layout.tsx            # Root layout (Navbar, Footer, Theme)
│   ├── page.tsx              # Home page
│   ├── about/                # About page
│   ├── blogs/                # Blog listing & posts
│   ├── contact/              # Contact form
│   ├── contact-us/           # Contact page
│   ├── doc/                  # Documentation listing & pages
│   ├── events/               # Events listing & details
│   ├── help/                 # Help center & FAQ
│   ├── join/                 # Join page
│   ├── legal/                # Legal pages (terms, privacy, etc.)
│   ├── servers/              # Server listing & details
│   ├── support/              # Support/Patreon page
│   ├── team/                 # Team member profiles
│   ├── (auth)/               # Auth routes (login, dashboard)
│   └── api/                  # API routes (webhooks, data)
│
├── components/               # Reusable components
│   ├── ui/                   # shadcn/ui components
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer
│   ├── Quiz.tsx              # "Find Your Fit" quiz
│   ├── MasterCalendar.tsx    # Event calendar
│   ├── DirectorySearch.tsx   # Server search
│   ├── DiscordStats.tsx      # Live member counts
│   ├── BlogCard.tsx          # Blog post card
│   ├── ServerCard.tsx        # Server card
│   ├── FAQSearch.tsx         # FAQ search
│   ├── TableOfContents.tsx   # Doc navigation
│   └── ThemeProvider.tsx     # Theme switcher
│
├── content/
│   └── docs/                 # MDX documentation files
│
├── lib/
│   ├── community-data.ts     # All content data (servers, blogs, events)
│   ├── docs.ts               # MDX file reader
│   ├── constants.ts          # App constants
│   ├── utils.ts              # Helper functions
│   └── hooks/                # Custom React hooks
│
├── public/
│   ├── images/               # Logos, icons, OG images
│   └── sitemap.xml           # SEO sitemap
│
├── types/                    # TypeScript definitions
├── tailwind.config.ts        # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

---

## Content Management

### Adding a Blog Post

Edit [`lib/community-data.ts`](./lib/community-data.ts) and add to the `blogs` array:

```ts
{
  slug: 'my-post',
  title: 'Post Title',
  server: 'OB JN',
  date: '2026-06-29',
  excerpt: 'Brief description.',
  readTime: '4 min read',
}
```

View at `/blogs/my-post`

### Adding an Event

Add to the `events` array in [`lib/community-data.ts`](./lib/community-data.ts):

```ts
{
  id: 'my-event',
  name: 'Event Name',
  server: 'Dev',
  serverSlug: 'dev',
  date: '2026-08-01T18:00:00+05:30',
  description: 'Event description.',
  ticketStatus: 'free',
  isOffline: false,
  location: 'Discord',
  agenda: ['Part 1', 'Part 2'],
}
```

View at `/events/my-event`

### Adding Documentation

#### Option 1: MDX File (Recommended)

1. Create `content/docs/my-doc.mdx`:

```mdx
---
title: My Document
description: Brief description
---

## Section

Your content here with **Markdown** support.
```

2. Add to `docs` array in [`lib/community-data.ts`](./lib/community-data.ts):

```ts
{
  slug: 'my-doc',
  title: 'My Document',
  description: 'Brief description.',
  section: 'Core',
}
```

View at `/doc/my-doc`

### Adding a Server

Edit the `servers` array in [`lib/community-data.ts`](./lib/community-data.ts):

```ts
{
  slug: 'myserver',
  name: 'OB MyServer',
  description: 'Tagline shown on card.',
  longDescription: 'Full description for detail page.',
  tags: ['tag1', 'tag2'],
  memberCount: 0,
  isLive: true,
  accent: 'from-violet-500 to-fuchsia-600',  // Tailwind gradient
  channels: ['Channel A', 'Channel B'],
  rules: ['Rule 1', 'Rule 2'],
  inviteEnv: 'NEXT_PUBLIC_DISCORD_MYSERVER_INVITE',
}
```

Add logo: `/public/images/myserver.png`

**Gradient Colors:**

- Jn.: `from-rose-500 to-amber-300`
- Dev: `from-green-400 to-emerald-600`
- GG: `from-red-500 to-rose-700`
- Study: `from-violet-400 to-fuchsia-500`
- Connect: `from-orange-300 to-red-500`

### Adding a Legal Page

1. Create `app/legal/[page-name]/page.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Page — Open Box',
}

export default function LegalPage() {
  return (
    <article>
      <h1>Legal Page Title</h1>
      <p>Content here.</p>
    </article>
  )
}
```

2. Update `app/legal/layout.tsx` sidebar
3. Update footer links in `components/Footer.tsx`

---

## Scripts

```bash
# Development
npm run dev

# Build
npm run build
npm run start

# Code quality
npm run lint
```

---

## Deployment

**Recommended:** Vercel (seamless Next.js integration)

### Build & Run

```bash
npm run build
npm run start
```

### Environment Variables

All `NEXT_PUBLIC_*` variables are exposed to the browser. Keep secrets server-side.

### Notes

- Discord widgets must be **enabled** in server settings for live member counts
- MDX files are processed at build time — rebuild after adding new docs
- All images should be optimized (PNG/WebP)

---

## Key Features

✅ **Server Discovery** — Browse all Discord servers with live member counts  
✅ **Event Calendar** — Master calendar of all community events  
✅ **Blog Platform** — Share updates and stories  
✅ **Documentation** — MDX-based docs with full Markdown support  
✅ **Dark Mode** — Theme switcher with persistence  
✅ **SEO Optimized** — Metadata, sitemap, structured data  
✅ **Responsive** — Mobile-first design with Tailwind CSS  
✅ **Fast** — Next.js optimizations, image lazy-loading  
✅ **Accessible** — WCAG compliance with Radix UI components

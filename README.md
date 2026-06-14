# Open Box — Developer Guide

OpenBox is a multi-server Discord community website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Animation | GSAP |
| 3D Visuals | Three.js |

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + `tailwindcss-animate` |
| Fonts | Syne (headings) · Inter (body) via Google Fonts |
| UI Components | Radix UI + shadcn/ui patterns (`components/ui/`) |
| MDX | `next-mdx-remote` + `gray-matter` (for docs) |
| Theme | `next-themes` (dark/light toggle) |

---

## Local Setup

### 1. Clone and install

```bash
git clone <repo-url>
cd open-box-website-del
npm install
```

### 2. Environment variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

```env
# Discord invite links for each server
NEXT_PUBLIC_DISCORD_JN_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_DEV_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_GG_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_INVITE_MAIN=https://discord.gg/...

# Social links (used in Footer)
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@openbox
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/openboxcomm
NEXT_PUBLIC_PATREON_URL=https://patreon.com/openbox
NEXT_PUBLIC_X_URL=https://x.com/openboxcomm

# Feature flags
NEXT_PUBLIC_LOGIN_ENABLED=false

```

### GSAP + Three.js

The Hero section uses GSAP for timing and Three.js for rendering the 3D icosahedron.
- Ensure `gsap` and `three` are installed via npm.
- The component is located at `components/HeroGraphic.tsx`.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```
open-box-website-del/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout — Navbar, Footer, ScrollToTop, ThemeProvider
│   ├── page.tsx            # Home page (hero + quiz + directory + calendar + CTA)
│   ├── not-found.tsx       # Custom 404 page
│   ├── error.tsx           # Global error boundary (500 / network errors)
│   ├── about/              # About page
│   ├── blogs/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Individual blog post (reads from community-data.ts)
│   ├── contact/page.tsx    # Contact page
│   ├── doc/
│   │   ├── page.tsx        # Docs listing
│   │   └── [slug]/page.tsx # Individual doc (reads .mdx from content/docs/)
│   ├── events/
│   │   ├── page.tsx        # Events listing
│   │   └── [id]/page.tsx   # Individual event (reads from community-data.ts)
│   ├── help/
│   │   ├── page.tsx        # Help / contact page
│   │   └── faq/            # FAQ search page
│   ├── legal/
│   │   ├── layout.tsx      # Shared sidebar layout for all legal pages
│   │   ├── page.tsx        # Legal index — card grid of all legal documents
│   │   ├── terms/          # Terms & Conditions
│   │   ├── privacy/        # Privacy Policy
│   │   ├── cookie/         # Cookie Policy
│   │   ├── rules/          # Community Rules
│   │   ├── refund/         # Refund Policy
│   │   ├── dmca/           # DMCA / Copyright
│   │   ├── aup/            # Acceptable Use Policy
│   │   └── event/          # Event Policies
│   ├── servers/
│   │   ├── page.tsx        # All servers listing
│   │   └── [slug]/page.tsx # Individual server page
│   └── support/            # Support / Patreon page
│
├── components/             # Shared React components
│   ├── ui/                 # shadcn/ui base components (Button, Card, Badge, etc.)
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── ScrollToTop.tsx     # Scrolls to top on every route change
│   ├── DiscordStats.tsx    # Live Discord member counter (polls every 10s)
│   ├── Quiz.tsx            # "Find Your Fit" quiz on home page
│   ├── BlogCard.tsx        # Blog post card component
│   ├── ServerCard.tsx      # Server card component
│   ├── DirectorySearch.tsx # Server directory + search
│   ├── MasterCalendar.tsx  # Community event calendar
│   ├── CTASection.tsx      # Call-to-action banner
│   ├── FAQSearch.tsx       # FAQ search component
│   ├── LoadingScreen.tsx   # Initial loading animation
│   ├── TableOfContents.tsx # TOC for doc pages
│   └── ThemeProvider.tsx   # next-themes wrapper
│
├── content/
│   ├── docs/               # MDX files for documentation pages
│   │   ├── rules.mdx
│   │   ├── jn.mdx
│   │   ├── dev.mdx
│   │   └── gg.mdx
│   └── blogs/              # (Currently unused — blog data is in community-data.ts)
│
├── lib/
│   ├── community-data.ts   # ⭐ Main data file — servers, blogs, events, docs
│   ├── mdx.ts              # MDX file reader for content/docs/
│   ├── constants.ts        # Shared constants
│   ├── utils.ts            # cn() utility
│   └── logger.ts           # Logging utility
│
├── types/                  # TypeScript type definitions
├── public/
│   └── images/             # Static images (OB.png, jn.png, dev.png, gg.png)
├── tailwind.config.ts      # Tailwind config (fonts: Syne/Inter, colors, tokens)
└── .env.local              # Local environment variables (never commit this)
```

---

## How to Add a New Blog Post

Edit [`lib/community-data.ts`](./lib/community-data.ts) and add an entry to the `blogs` array:

```ts
{
  slug: 'your-post-slug',          // Used as URL: /blogs/your-post-slug
  title: 'Your Post Title',
  server: 'OB JN',                 // Server label shown on card
  date: '2026-07-01',              // ISO date string
  excerpt: 'One-line summary.',
  readTime: '4 min read',
}
```

The blog detail page at `app/blogs/[slug]/page.tsx` currently renders a shared body. To add per-post content, extend the `blog` object with a `content` field and render it in the detail page.

---

## How to Add a New Event

Uncomment or add an entry in the `events` array in [`lib/community-data.ts`](./lib/community-data.ts):

```ts
{
  id: 'your-event-id',             // Used as URL: /events/your-event-id
  name: 'Event Name',
  server: 'Dev',                   // Display name
  serverSlug: 'dev',               // Must match a server slug
  date: '2026-08-01T18:00:00+05:30',
  description: 'What the event is about.',
  ticketStatus: 'free',            // 'free' | 'paid'
  isOffline: false,
  location: 'Discord voice stage',
  agenda: ['Step 1', 'Step 2', 'Step 3'],
}
```

---

## How to Add a New Document

### Option A: MDX file (for full rich-text docs)

1. Create a new `.mdx` file in `content/docs/`:

```mdx
---
title: Your Document Title
description: Short description shown in the header.
---

## Section One

Your content here.
```

2. Add an entry to the `docs` array in `lib/community-data.ts` (so it appears on the `/doc` listing page):

```ts
{
  slug: 'your-doc-slug',           // Must match filename: content/docs/your-doc-slug.mdx
  title: 'Your Document Title',
  description: 'Short description.',
  section: 'Core',                 // Section label shown on card
}
```

---

## How to Add or Edit a Server Entry

Edit the `servers` array in [`lib/community-data.ts`](./lib/community-data.ts):

```ts
{
  slug: 'myserver',
  name: 'OB MyServer',
  description: 'Short tagline shown on the card.',
  longDescription: 'Full description shown on the server detail page.',
  tags: ['tag1', 'tag2'],
  memberCount: 0,
  isLive: true,                    // false = shows "Coming Soon" button
  accent: 'from-violet-500 to-fuchsia-600',  // Tailwind gradient classes
  channels: ['Channel A', 'Channel B'],
  rules: ['Rule 1', 'Rule 2'],
  inviteEnv: 'NEXT_PUBLIC_DISCORD_MYSERVER_INVITE',
}
```

**Accent color guide** — use Tailwind gradient syntax:

| Server | Accent |
|---|---|
| Jn. | `from-rose-500 to-amber-300` |
| Dev | `from-green-400 to-emerald-600` |
| GG | `from-red-500 to-rose-700` |
| Study | `from-violet-400 to-fuchsia-500` |
| Connect | `from-orange-300 to-red-500` |

Add the server logo as `/public/images/<slug>.png` and register it in `SERVER_LOGOS` at the top of `app/servers/[slug]/page.tsx`.

---

## How to Add a New Legal Page

1. Create the page file at `app/legal/<name>/page.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Policy — Open Box',
}

export default function YourPolicyPage() {
  return (
    <article>
      <h1>Your Policy</h1>
      <p>Content goes here.</p>
    </article>
  )
}
```

2. Add the page to the sidebar in `app/legal/layout.tsx`:

```ts
{ href: '/legal/<name>', label: 'Your Policy' }
```

3. Add a card to `app/legal/page.tsx` in the `legalDocs` array:

```ts
{
  href: '/legal/<name>',
  label: 'Your Policy',
  description: 'What this policy covers.',
  icon: SomeLucideIcon,
  accent: 'from-blue-400 to-indigo-500',
}
```

4. Add a link in the footer in `components/Footer.tsx` under `legalLinks`.

---

## Deployment Notes

This project is deployable to **Vercel** or any Node.js-compatible platform.

- All environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- The `content/docs/` directory is read at build time — add new MDX files and rebuild
- Discord widget API (`discord.com/api/guilds/.../widget.json`) requires the widget to be **enabled** in each server's settings (Server Settings → Widget → Enable Server Widget)
- If a Discord widget is disabled, `DiscordStats` will show `—` for that server gracefully

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

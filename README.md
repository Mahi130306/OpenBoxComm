# Open Box — Developer Guide

OpenBox is a multi-server Discord community website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **MDX**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + `tailwindcss-animate` |
| UI Components | Radix UI + shadcn/ui patterns |
| Theme | `next-themes` (dark/light toggle) |
| Animation | GSAP |
| 3D Visuals | Three.js |

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
NEXT_PUBLIC_DISCORD_JN_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_DEV_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_GG_INVITE=https://discord.gg/...
NEXT_PUBLIC_DISCORD_INVITE_MAIN=https://discord.gg/...

NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@openbox
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/openboxcomm
NEXT_PUBLIC_PATREON_URL=https://patreon.com/openbox
NEXT_PUBLIC_X_URL=https://x.com/openboxcomm
```

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
├── components/             # Shared React components
│   └── ui/                 # shadcn/ui base components
├── lib/                    # Main data and utilities
│   ├── community-data.ts   # ⭐ Main data file
│   └── docs.ts             # Documentation content
├── public/                 # Static assets
├── types/                  # TypeScript types
└── tailwind.config.ts      # Tailwind configuration
```

---

## Management

For detailed instructions on how to add, edit, or delete content (blogs, events, docs, team, etc.), please refer to [DEV-EDIT-GUIDE.md](./DEV-EDIT-GUIDE.md).

---

## Deployment

Deployable to **Vercel** or any Node.js-compatible platform.

```bash
npm run build
npm run start
```

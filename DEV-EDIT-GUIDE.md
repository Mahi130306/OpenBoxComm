# Developer Edit Guide

Quick reference for managing Open Box website content.

---

## 📝 Blog Posts

**Location:** [`lib/community-data.ts`](lib/community-data.ts) → `blogs` array

**Add:** Insert object into array

```ts
{
  slug: 'my-post',           // URL: /blogs/my-post
  title: 'Post Title',
  server: 'OB JN',           // Server label
  date: '2026-07-02',        // ISO format YYYY-MM-DD
  excerpt: 'Summary...',
  readTime: '5 min read',
}
```

**Edit:** Update existing object in array

**Delete:** Remove object from array

**URL Pattern:** `/blogs/{slug}`

---

## 📅 Events

**Location:** [`lib/community-data.ts`](lib/community-data.ts) → `events` array

**Add:** Insert object into array

```ts
{
  id: 'my-event',
  name: 'Event Name',
  server: 'Dev',
  serverSlug: 'dev',         // Must match server slug
  date: '2026-08-01T18:00:00+05:30',  // ISO with timezone
  description: 'Event details...',
  ticketStatus: 'free',      // 'free' or 'paid'
  isOffline: false,          // true for in-person
  location: 'Discord',
  agenda: [
    'Opening remarks',
    'Main session',
    'Q&A',
  ],
}
```

**Edit:** Update object in array

**Delete:** Remove object from array

**URL Pattern:** `/events/{id}`

**Valid Server Slugs:** `jn`, `dev`, `gg`

---

## 📚 Documentation

**Metadata Location:** [`lib/community-data.ts`](lib/community-data.ts) → `docs` array

**Content Location:** [`content/docs/`](content/docs/)

**Add:**

1. Create MDX file: `content/docs/my-doc.mdx`

```mdx
---
title: Document Title
description: Shown in listings
---

## Section One

Content with **Markdown** support.

### Subsection

More content.
```

2. Add to `docs` array in `lib/community-data.ts`:

```ts
{
  slug: 'my-doc',            // Must match filename (without .mdx)
  title: 'Document Title',
  description: 'Brief summary.',
  section: 'Core',           // Category label
}
```

**Edit:** 
- Update MDX file content or metadata array object

**Delete:** 
- Remove MDX file
- Remove object from `docs` array

**URL Pattern:** `/doc/{slug}`

**Supported Sections:** 'Core', 'Rules', 'Guides', 'FAQ'

---

## 🖥️ Servers

**Location:** [`lib/community-data.ts`](lib/community-data.ts) → `servers` array

**Add:** Insert object into array

```ts
{
  slug: 'myserver',
  name: 'OB MyServer',
  description: 'Tagline shown on card.',
  longDescription: 'Full description for detail page.',
  tags: ['tag1', 'tag2'],
  memberCount: 0,            // Auto-updated from Discord
  isLive: true,              // false shows "Coming Soon"
  accent: 'from-color to-color',  // Tailwind gradient
  channels: ['Channel A', 'Channel B'],
  rules: ['Rule 1', 'Rule 2'],
  inviteEnv: 'NEXT_PUBLIC_DISCORD_MYSERVER_INVITE',
}
```

**Logo:** Add image at `/public/images/myserver.png`

**Gradient Color Reference:**
- Jn.: `from-rose-500 to-amber-300`
- Dev: `from-green-400 to-emerald-600`
- GG: `from-red-500 to-rose-700`
- Study: `from-violet-400 to-fuchsia-500`
- Connect: `from-orange-300 to-red-500`

**Edit:** Update object in array

**Delete:** Remove object from array

**URL Pattern:** `/servers/{slug}`

---

## 👥 Team Members

**Location:** [`lib/community-data.ts`](lib/community-data.ts) → `team` array

**Add:** Insert object into array

```ts
{
  slug: 'member-name',
  name: 'Full Name',
  role: 'Position',
  bio: 'Short bio...',
  avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Name',
}
```

**Avatar Options:**
- DiceBear API: `https://api.dicebear.com/9.x/avataaars/svg?seed=Name`
- Hosted image URL
- External service URL

**Edit:** Update object in array

**Delete:** Remove object from array

**URL Pattern:** `/team/{slug}`

---

## ⚖️ Legal Pages

**Location:** `app/legal/[page-name]/page.tsx`

**Add:**

1. Create folder: `app/legal/my-policy/`

2. Create file: `app/legal/my-policy/page.tsx`

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policy Name - Open Box',
  description: 'Description for search results.',
}

export default function PolicyPage() {
  return (
    <article className="space-y-8">
      <h1>Policy Name</h1>
      
      <div className="text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </div>

      <section>
        <h2>1. Section Title</h2>
        <p>Content...</p>
      </section>

      <section>
        <h2>2. Another Section</h2>
        <p>Content...</p>
      </section>
    </article>
  )
}
```

3. Update `app/legal/layout.tsx` sidebar:

```ts
const legalLinks = [
  { href: '/legal/my-policy', label: 'Policy Name' },
  // ...other links
]
```

4. Update footer in `components/Footer.tsx`:

```ts
const legalLinks = [
  { label: 'Policy Name', href: '/legal/my-policy' },
  // ...other links
]
```

**Edit:** Modify page component or update links

**Delete:** Remove page folder and update links

**URL Pattern:** `/legal/{page-name}`

**Required:** H1 heading, last updated date, numbered sections

---

## 🗑️ Deleting Content

### From Data Files

Remove the corresponding object from the array:

```ts
// Before
const blogs = [
  { slug: 'post-1', ... },
  { slug: 'post-to-delete', ... },  // DELETE THIS
  { slug: 'post-2', ... },
]

// After
const blogs = [
  { slug: 'post-1', ... },
  { slug: 'post-2', ... },
]
```

### MDX Files

Delete the file from `content/docs/` and remove from `docs` array.

### Page Files

Delete the folder (e.g., `app/legal/my-page/`) and update navigation.

---

## 📋 File Reference

| Content Type | Files to Edit |
|---|---|
| Blogs | `lib/community-data.ts` |
| Events | `lib/community-data.ts` |
| Docs (Metadata) | `lib/community-data.ts` |
| Docs (Content) | `content/docs/*.mdx` |
| Servers | `lib/community-data.ts` |
| Team | `lib/community-data.ts` |
| Legal | `app/legal/*/page.tsx`, `components/Footer.tsx`, `app/legal/layout.tsx` |

---

## 🔍 Data Structure Location

**Master Data File:** [`lib/community-data.ts`](lib/community-data.ts)

Arrays in file:
- `blogs` - Blog posts
- `events` - Community events
- `docs` - Documentation metadata
- `servers` - Discord servers
- `team` - Team members

All arrays use consistent object structures with `slug`, `title`, and descriptive fields.
